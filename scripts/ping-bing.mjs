import https from 'node:https';
import { ROUTES } from '../routes.config.mjs';

const KEY = '82c9829535fe4e56949b90607d53f4c6';
const HOST = 'ustaad.ae';
const BASE_URL = `https://${HOST}`;

async function pingBingIndexNow() {
  // Usage:
  //   node scripts/ping-bing.mjs                 -> every indexable route
  //   node scripts/ping-bing.mjs --days=3        -> only routes whose lastmod is within the last 3 days
  //   node scripts/ping-bing.mjs --since=2026-10-01
  //   node scripts/ping-bing.mjs /blogs/foo /a-level-tutor-al-ain   -> explicit paths
  const args = process.argv.slice(2);
  const daysArg = args.find(a => a.startsWith('--days='));
  const sinceArg = args.find(a => a.startsWith('--since='));
  const explicit = args.filter(a => a.startsWith('/'));

  let since = null;
  if (sinceArg) since = sinceArg.split('=')[1];
  if (daysArg) {
    const d = new Date(Date.now() - Number(daysArg.split('=')[1]) * 86400000);
    since = d.toISOString().slice(0, 10);
  }

  const urlList = ROUTES
    .filter(r => !r.noindex)
    .filter(r => explicit.length ? explicit.includes(r.path) : true)
    .filter(r => since ? (r.lastmod && r.lastmod >= since) : true)
    .map(r => (r.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${r.path}`));

  if (urlList.length === 0) {
    console.log(`[Bing IndexNow] No URLs matched${since ? ` lastmod >= ${since}` : ''}. Nothing to submit.`);
    return 0;
  }

  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${BASE_URL}/${KEY}.txt`,
    urlList
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  console.log(`[Bing IndexNow] Pinging API with ${urlList.length} URLs...`);

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`[Bing IndexNow] ✓ Success (${res.statusCode}): Bing has accepted the submission.`);
        resolve(res.statusCode);
      } else {
        console.error(`[Bing IndexNow] ✗ Failed (${res.statusCode})`);
        res.on('data', d => console.error(d.toString()));
        reject(new Error(`Failed with status code ${res.statusCode}`));
      }
    });

    req.on('error', (e) => {
      console.error(`[Bing IndexNow] ✗ Error: ${e.message}`);
      reject(e);
    });

    req.write(payload);
    req.end();
  });
}

pingBingIndexNow().catch(() => process.exit(1));
