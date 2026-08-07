import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { ROUTES, generateSitemap } from './routes.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');
const clientDir = path.resolve(distDir, 'client');

const routes = ROUTES.map(r => r.path);

// React 19 + renderToString renders <title>/<meta>/<link>/<script> tags directly
// into the body HTML string rather than populating helmetContext. We extract them
// here and hoist them into <head> so crawlers and browsers see correct per-page data.
function extractHeadTags(bodyHtml) {
  const tags = [];
  let cleaned = bodyHtml;

  // <title>
  cleaned = cleaned.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, m => { tags.push(m); return ''; });

  // <meta> — description, robots, og:*, twitter:*, etc.
  cleaned = cleaned.replace(/<meta\s[^>]*\/?>/gi, m => { tags.push(m); return ''; });

  // <link rel="canonical"> and <link rel="alternate"> (hreflang)
  cleaned = cleaned.replace(
    /<link\s+(?=[^>]*\brel="(?:canonical|alternate)"[^>]*>)[^>]*>/gi,
    m => { tags.push(m); return ''; }
  );

  // <link rel="preload"> — hero images, logo, etc. need early browser discovery
  cleaned = cleaned.replace(
    /<link\s+(?=[^>]*\brel="preload"[^>]*>)[^>]*>/gi,
    m => { tags.push(m); return ''; }
  );

  // JSON-LD structured data — valid in body but head is preferred
  cleaned = cleaned.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, m => { tags.push(m); return ''; });

  return { tags, cleanedHtml: cleaned };
}

async function prerender() {
  const ssrManifest = JSON.parse(
    fs.readFileSync(path.resolve(clientDir, '.vite/ssr-manifest.json'), 'utf-8')
  );

  // Windows paths like `D:\...` must be converted to file:// URLs for ESM import
  const entryServerUrl = pathToFileURL(path.resolve(distDir, 'server/entry-server.js')).href;
  const { render } = await import(entryServerUrl);

  const template = fs.readFileSync(path.resolve(clientDir, 'index.html'), 'utf-8');

  // Strip the generic fallback tags from the template so per-page tags are authoritative
  const strippedTemplate = template
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/i, '')
    .replace(/<meta name="keywords"[^>]*>/i, '')
    .replace(/<meta name="robots"[^>]*>/i, '')
    .replace(/<link rel="canonical"[^>]*>/i, '')
    .replace(/<link rel="alternate"[^>]*>/gi, '')
    .replace(/<meta property="og:[^>]*>/gi, '')
    .replace(/<meta name="twitter:[^>]*>/gi, '');

  for (const url of routes) {
    let html = '';
    try {
      const result = await render(url, ssrManifest);
      html = result.html ?? '';
    } catch (e) {
      console.warn(`[prerender] Failed to render ${url}:`, e.message);
    }

    // Extract per-page head tags that React 19 rendered into the body string
    const { tags, cleanedHtml } = extractHeadTags(html);

    let page = strippedTemplate;

    if (tags.length > 0) {
      page = page.replace('</head>', `  ${tags.join('\n    ')}\n  </head>`);
    }

    page = page.replace('<div id="root"></div>', `<div id="root">${cleanedHtml}</div>`);

    const outPath = url === '/'
      ? path.resolve(clientDir, 'index.html')
      : path.resolve(clientDir, url.slice(1), 'index.html');

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page);
    console.log(`[prerender] ✓ ${url} → ${path.relative(distDir, outPath)}`);
  }

  const sitemap = generateSitemap('https://ustaad.ae');
  fs.writeFileSync(path.resolve(clientDir, 'sitemap.xml'), sitemap);
  console.log(`[prerender] ✓ sitemap.xml generated`);

  console.log(`\n[prerender] Done! ${routes.length} pages pre-rendered.`);
}

prerender().catch((e) => {
  console.error('[prerender] Fatal error:', e);
  process.exit(1);
});
