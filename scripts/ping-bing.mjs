import https from 'node:https';
import { ROUTES } from '../routes.config.mjs';

const KEY = '20b98428b0c604fa241aa40fad8e4134';
const HOST = 'ustaad.ae';
const BASE_URL = `https://${HOST}`;

async function pingBingIndexNow() {
  const urlList = ROUTES.filter(r => !r.noindex).map(r => {
    return r.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${r.path}`;
  });

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
