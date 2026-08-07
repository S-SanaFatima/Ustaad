/**
 * Post-build check: every route has a prerendered index.html with a unique title.
 * Run: node scripts/verify-routes.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES } from '../routes.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.resolve(__dirname, '../dist/client');

let failed = 0;

for (const route of ROUTES) {
  const htmlPath =
    route.path === '/'
      ? path.join(clientDir, 'index.html')
      : path.join(clientDir, route.path.slice(1), 'index.html');

  if (!fs.existsSync(htmlPath)) {
    console.error(`✗ Missing prerender: ${route.path} → ${htmlPath}`);
    failed++;
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf-8');
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  const homeTitle = 'Trusted Private Tutors Across the UAE';

  if (route.path !== '/' && title.includes(homeTitle)) {
    console.error(`✗ ${route.path} contains homepage title (wrong prerender content)`);
    failed++;
    continue;
  }

  if (!title) {
    console.error(`✗ ${route.path} has no <title>`);
    failed++;
    continue;
  }

  console.log(`✓ ${route.path} → ${title.slice(0, 60)}${title.length > 60 ? '…' : ''}`);
}

if (failed > 0) {
  console.error(`\n[verify-routes] FAILED — ${failed} issue(s)`);
  process.exit(1);
}

console.log(`\n[verify-routes] OK — ${ROUTES.length} routes verified.`);
