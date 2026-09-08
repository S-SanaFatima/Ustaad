import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES } from '../routes.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, '../dist/client');

console.log('🚀 Running Comprehensive Pre-Launch Site Audit...\n');

let errorCount = 0;
let warningCount = 0;

function reportError(msg) {
  console.error(`❌ ERROR: ${msg}`);
  errorCount++;
}

function reportWarn(msg) {
  console.warn(`⚠️  WARN: ${msg}`);
  warningCount++;
}

// 1. Verify Route Files Exist
console.log('--- 1. Checking Pre-rendered HTML Files for All Routes ---');
const routePathMap = new Set();
for (const r of ROUTES) {
  routePathMap.add(r.path);
  const htmlPath = r.path === '/'
    ? path.join(clientDir, 'index.html')
    : path.join(clientDir, r.path.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(htmlPath)) {
    reportError(`Missing prerender file: ${r.path} -> ${htmlPath}`);
  }
}
console.log(`Verified ${ROUTES.length} routes have matching index.html files.`);

// 2. Scan all index.html files
function getHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getHtmlFiles(full, files);
    } else if (entry.name === 'index.html') {
      files.push(full);
    }
  }
  return files;
}

const allHtmlFiles = getHtmlFiles(clientDir);
console.log(`\n--- 2. Scanning ${allHtmlFiles.length} HTML files for Links, Images, Metadata, Schemas ---`);

const checkedInternalLinks = new Set();
const checkedImages = new Set();

for (const filePath of allHtmlFiles) {
  const relPath = path.relative(clientDir, filePath);
  const routePath = relPath === 'index.html' ? '/' : '/' + path.dirname(relPath).replace(/\\/g, '/');
  const html = fs.readFileSync(filePath, 'utf-8');

  // Title check
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch || !titleMatch[1].trim()) {
    reportError(`[${routePath}] Missing or empty <title> tag.`);
  }

  // Meta description check
  const metaDescMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) ||
                        html.match(/<meta\s+content="([^"]*)"\s+name="description"/i);
  if (!metaDescMatch || !metaDescMatch[1].trim()) {
    reportError(`[${routePath}] Missing or empty meta description.`);
  }

  // Canonical check
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i) ||
                         html.match(/<link\s+href="([^"]*)"\s+rel="canonical"/i);
  if (!canonicalMatch || !canonicalMatch[1].trim()) {
    reportWarn(`[${routePath}] Missing canonical URL.`);
  }

  // Check JSON-LD Structured Data
  const jsonLdMatches = [...html.matchAll(/<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const match of jsonLdMatches) {
    try {
      JSON.parse(match[1]);
    } catch (e) {
      reportError(`[${routePath}] Malformed JSON-LD structured data: ${e.message}`);
    }
  }

  // Check Suspicious Strings
  if (html.includes('http://localhost:5173') || html.includes('http://localhost:3000')) {
    reportError(`[${routePath}] Contains hardcoded localhost URL.`);
  }
  if (html.includes('undefined') && (html.includes('title="undefined"') || html.includes('href="undefined"') || html.includes('src="undefined"'))) {
    reportError(`[${routePath}] Contains "undefined" attribute.`);
  }

  // Check all internal links <a href="...">
  const hrefMatches = [...html.matchAll(/<a\s+[^>]*href="([^"]*)"[^>]*>/gi)];
  for (const m of hrefMatches) {
    let href = m[1].trim();
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) {
      continue;
    }
    if (href.startsWith('http://') || href.startsWith('https://')) {
      if (href.startsWith('https://ustaad.ae/')) {
        href = href.replace('https://ustaad.ae', '');
      } else {
        continue;
      }
    }

    // Strip hash and query params
    const cleanPath = href.split('#')[0].split('?')[0];
    if (!cleanPath) continue;

    if (checkedInternalLinks.has(cleanPath)) continue;
    checkedInternalLinks.add(cleanPath);

    // Verify target route or file exists
    const targetHtml = cleanPath === '/'
      ? path.join(clientDir, 'index.html')
      : path.join(clientDir, cleanPath.replace(/^\//, ''), 'index.html');
    const targetStaticFile = path.join(clientDir, cleanPath.replace(/^\//, ''));

    if (!fs.existsSync(targetHtml) && !fs.existsSync(targetStaticFile)) {
      reportError(`[${routePath}] Broken internal link: "${m[1]}" -> File not found`);
    }
  }

  // Check all images <img src="...">
  const imgMatches = [...html.matchAll(/<img\s+[^>]*src="([^"]*)"[^>]*>/gi)];
  for (const m of imgMatches) {
    let src = m[1].trim();
    if (!src || src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      continue;
    }
    const cleanSrc = src.split('?')[0].split('#')[0];
    if (checkedImages.has(cleanSrc)) continue;
    checkedImages.add(cleanSrc);

    const assetFile = path.join(clientDir, cleanSrc.replace(/^\//, ''));
    if (!fs.existsSync(assetFile)) {
      reportError(`[${routePath}] Broken image reference: "${m[1]}" -> File not found: ${assetFile}`);
    }
  }

  // Check CSS & JS bundles
  const scriptMatches = [...html.matchAll(/<script\s+[^>]*src="([^"]*)"[^>]*>/gi)];
  for (const m of scriptMatches) {
    const src = m[1].trim();
    if (!src || src.startsWith('http://') || src.startsWith('https://')) continue;
    const cleanSrc = src.split('?')[0];
    const assetFile = path.join(clientDir, cleanSrc.replace(/^\//, ''));
    if (!fs.existsSync(assetFile)) {
      reportError(`[${routePath}] Missing bundled script: "${src}"`);
    }
  }

  const cssMatches = [...html.matchAll(/<link\s+[^>]*rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/gi)];
  for (const m of cssMatches) {
    const href = m[1].trim();
    if (!href || href.startsWith('http://') || href.startsWith('https://')) continue;
    const cleanHref = href.split('?')[0];
    const assetFile = path.join(clientDir, cleanHref.replace(/^\//, ''));
    if (!fs.existsSync(assetFile)) {
      reportError(`[${routePath}] Missing stylesheet: "${href}"`);
    }
  }
}

// 3. Check Sitemap & Robots.txt
console.log('\n--- 3. Checking Sitemap.xml & Robots.txt ---');
const sitemapPath = path.join(clientDir, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  reportError('dist/client/sitemap.xml is missing!');
} else {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  let sitemapCount = (sitemapContent.match(/<loc>/g) || []).length;
  console.log(`sitemap.xml verified with ${sitemapCount} URLs.`);
  if (sitemapCount !== ROUTES.length) {
    reportWarn(`sitemap.xml URL count (${sitemapCount}) differs from ROUTES.length (${ROUTES.length})`);
  }
}

const robotsPath = path.join(clientDir, 'robots.txt');
if (!fs.existsSync(robotsPath)) {
  reportError('dist/client/robots.txt is missing!');
} else {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  if (!robotsContent.includes('Sitemap: https://ustaad.ae/sitemap.xml')) {
    reportWarn('robots.txt does not declare https://ustaad.ae/sitemap.xml');
  }
  console.log('robots.txt verified.');
}

// Final Summary
console.log('\n========================================');
console.log(`Audit Summary:`);
console.log(`Routes Audited: ${ROUTES.length}`);
console.log(`Internal Links Verified: ${checkedInternalLinks.size}`);
console.log(`Images Verified: ${checkedImages.size}`);
console.log(`Errors: ${errorCount}`);
console.log(`Warnings: ${warningCount}`);
console.log('========================================\n');

if (errorCount > 0) {
  console.error(`💥 Pre-launch audit FAILED with ${errorCount} error(s).`);
  process.exit(1);
} else {
  console.log('🎉 Pre-launch audit PASSED with 0 errors! The site is technically sound and ready to go live.');
  process.exit(0);
}
