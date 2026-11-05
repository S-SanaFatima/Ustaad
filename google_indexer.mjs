#!/usr/bin/env node

/**
 * ============================================================================
 * AUTOMATIC GOOGLE INDEXING API SCRIPT FOR USTAAD.AE
 * ============================================================================
 * Submits website URLs directly to Google for fast crawling & indexing.
 *
 * Uses native Node.js crypto & fetch (Zero external npm packages required).
 *
 * Usage:
 *   node google_indexer.mjs             # Submits unindexed/updated URLs (up to 200/day)
 *   node google_indexer.mjs --limit 10  # Test submit first 10 URLs
 *   node google_indexer.mjs --status    # Check status of submitted URLs
 *   node google_indexer.mjs --force     # Force resubmit all URLs within quota
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CONFIG = {
  serviceAccountFile: path.resolve(__dirname, 'service_account.json'),
  localSitemapPath: path.resolve(__dirname, 'dist', 'client', 'sitemap.xml'),
  remoteSitemapUrl: 'https://ustaad.ae/sitemap.xml',
  historyFile: path.resolve(__dirname, 'indexing_history.json'),
  dailyQuotaLimit: 200, // Google Indexing API daily quota per project
  requestDelayMs: 300,  // Polite pause between requests to prevent burst limits
  scope: 'https://www.googleapis.com/auth/indexing',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  publishEndpoint: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
};

// ----------------------------------------------------------------------------
// 1. Service Account Authentication (Native RS256 JWT)
// ----------------------------------------------------------------------------

function loadServiceAccount() {
  if (!fs.existsSync(CONFIG.serviceAccountFile)) {
    console.error(`\n❌ Error: Service account file not found at: ${CONFIG.serviceAccountFile}`);
    console.error(`Please make sure 'service_account.json' exists in this directory.\n`);
    process.exit(1);
  }

  try {
    const raw = fs.readFileSync(CONFIG.serviceAccountFile, 'utf8');
    const creds = JSON.parse(raw);

    if (
      !creds.private_key ||
      creds.private_key.includes('PASTE_YOUR_PRIVATE_KEY_HERE') ||
      creds.private_key.trim().length < 50
    ) {
      console.error(`\n❌ Missing Private Key in service_account.json!`);
      console.error(`Please open 'service_account.json' and paste your actual private key starting with:`);
      console.error(`"-----BEGIN PRIVATE KEY-----\\n..."\n`);
      process.exit(1);
    }

    return creds;
  } catch (err) {
    console.error(`❌ Failed to parse service_account.json: ${err.message}`);
    process.exit(1);
  }
}

async function getAccessToken(creds) {
  const now = Math.floor(Date.now() / 1000);

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const claimSet = {
    iss: creds.client_email,
    scope: CONFIG.scope,
    aud: CONFIG.tokenEndpoint,
    exp: now + 3600,
    iat: now,
  };

  const b64Url = (obj) =>
    Buffer.from(typeof obj === 'string' ? obj : JSON.stringify(obj))
      .toString('base64url');

  const unsignedToken = `${b64Url(header)}.${b64Url(claimSet)}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedToken);
  const signature = signer.sign(creds.private_key, 'base64url');

  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch(CONFIG.tokenEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Google OAuth error (${res.status}): ${errText}`);
  }

  const data = await res.json();
  return data.access_token;
}

// ----------------------------------------------------------------------------
// 2. Sitemap URL Discovery
// ----------------------------------------------------------------------------

async function getSitemapUrls() {
  let xmlContent = '';

  if (fs.existsSync(CONFIG.localSitemapPath)) {
    console.log(`📄 Reading sitemap from local build: ${CONFIG.localSitemapPath}`);
    xmlContent = fs.readFileSync(CONFIG.localSitemapPath, 'utf8');
  } else {
    console.log(`🌐 Local sitemap not found. Fetching live sitemap from: ${CONFIG.remoteSitemapUrl}`);
    try {
      const res = await fetch(CONFIG.remoteSitemapUrl);
      if (res.ok) {
        xmlContent = await res.text();
      }
    } catch (e) {
      console.warn(`[Warning] Could not fetch remote sitemap: ${e.message}`);
    }
  }

  // Fallback: load routes from routes.config.mjs if sitemap XML was unavailable
  if (!xmlContent) {
    console.log(`🧭 Fallback: Reading routes from routes.config.mjs`);
    try {
      const routesModule = await import('./routes.config.mjs');
      return routesModule.ROUTES.map((r) => `https://ustaad.ae${r.path === '/' ? '' : r.path}`);
    } catch (err) {
      console.error(`❌ Could not load routes fallback: ${err.message}`);
      process.exit(1);
    }
  }

  const matches = xmlContent.match(/<loc>\s*([^<]+)\s*<\/loc>/gi);
  if (!matches) {
    throw new Error(`No <loc> tags found in sitemap.`);
  }

  const urls = matches.map((m) => m.replace(/<\/?loc>/gi, '').trim());
  return Array.from(new Set(urls));
}

// ----------------------------------------------------------------------------
// 3. History & Quota Management
// ----------------------------------------------------------------------------

function loadHistory() {
  if (fs.existsSync(CONFIG.historyFile)) {
    try {
      return JSON.parse(fs.readFileSync(CONFIG.historyFile, 'utf8'));
    } catch {
      return {};
    }
  }
  return {};
}

function saveHistory(history) {
  try {
    fs.writeFileSync(CONFIG.historyFile, JSON.stringify(history, null, 2), 'utf8');
  } catch (err) {
    console.warn(`[Warning] Failed to save indexing history: ${err.message}`);
  }
}

function getSubmissionsInLast24Hours(history) {
  const cutoff = Date.now() - 24 * 60 * 60 * 1000;
  let count = 0;
  for (const url in history) {
    const entry = history[url];
    if (entry.lastSubmitted && new Date(entry.lastSubmitted).getTime() > cutoff) {
      if (entry.status === 200) {
        count++;
      }
    }
  }
  return count;
}

// ----------------------------------------------------------------------------
// 4. Submit URL to Google Indexing API
// ----------------------------------------------------------------------------

async function submitUrl(accessToken, url, action = 'URL_UPDATED') {
  const payload = {
    url,
    type: action,
  };

  const res = await fetch(CONFIG.publishEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  const bodyText = await res.text();
  let json = null;
  try {
    json = JSON.parse(bodyText);
  } catch {}

  return {
    status: res.status,
    ok: res.ok,
    response: json || bodyText,
  };
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ----------------------------------------------------------------------------
// 5. Main Execution Flow
// ----------------------------------------------------------------------------

async function main() {
  console.log(`\n============================================================`);
  console.log(`🚀 Ustaad.ae — Google Automatic Indexing Submitter`);
  console.log(`============================================================\n`);

  const args = process.argv.slice(2);
  const forceAll = args.includes('--force');
  const limitArgIdx = args.indexOf('--limit');
  const limit = limitArgIdx !== -1 && args[limitArgIdx + 1] ? parseInt(args[limitArgIdx + 1], 10) : null;

  // 1. Load Credentials
  const creds = loadServiceAccount();
  console.log(`🔑 Service Account: ${creds.client_email}`);
  console.log(`🌐 Project ID      : ${creds.project_id}`);

  // 2. Discover URLs
  const allUrls = await getSitemapUrls();
  console.log(`📊 Total Site URLs : ${allUrls.length}`);

  // 3. Check Quota & History
  const history = loadHistory();
  const usedQuota = getSubmissionsInLast24Hours(history);
  const remainingQuota = Math.max(0, CONFIG.dailyQuotaLimit - usedQuota);

  console.log(`📈 24h Quota Used  : ${usedQuota} / ${CONFIG.dailyQuotaLimit} requests`);
  console.log(`✨ Available Quota : ${remainingQuota} requests remaining today\n`);

  if (remainingQuota <= 0) {
    console.warn(`⚠️ Daily quota of ${CONFIG.dailyQuotaLimit} requests reached for today.`);
    console.warn(`Please run this script again after the 24-hour quota resets.`);
    return;
  }

  // Determine which URLs need submission
  let pendingUrls = allUrls.filter((url) => {
    if (forceAll) return true;
    const item = history[url];
    // If never submitted or previous attempt failed, queue it
    if (!item || item.status !== 200) return true;
    return false;
  });

  if (pendingUrls.length === 0) {
    console.log(`🎉 All ${allUrls.length} URLs have already been successfully submitted to Google!`);
    console.log(`Tip: Use 'node google_indexer.mjs --force' to re-submit URLs.`);
    return;
  }

  // Apply quota limit
  let queue = pendingUrls.slice(0, remainingQuota);
  if (limit && limit > 0) {
    queue = queue.slice(0, limit);
  }

  console.log(`📥 URLs Queued for Submission: ${queue.length}\n`);

  // 4. Authenticate with Google
  console.log(`🔐 Authenticating with Google OAuth 2.0...`);
  let accessToken;
  try {
    accessToken = await getAccessToken(creds);
    console.log(`✅ Authentication successful! Access token obtained.\n`);
  } catch (err) {
    console.error(`❌ Authentication failed: ${err.message}`);
    process.exit(1);
  }

  // 5. Submit URLs in sequence with pause
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < queue.length; i++) {
    const url = queue[i];
    const indexStr = `[${i + 1}/${queue.length}]`;

    try {
      const result = await submitUrl(accessToken, url, 'URL_UPDATED');

      if (result.ok) {
        successCount++;
        const notifyTime = result.response?.urlNotificationMetadata?.latestUpdate?.notifyTime || 'Just now';
        console.log(`${indexStr} ✅ 200 OK | ${url}`);
        console.log(`         ↳ Notified: ${notifyTime}`);

        history[url] = {
          lastSubmitted: new Date().toISOString(),
          status: 200,
          type: 'URL_UPDATED',
          notifyTime,
        };
      } else {
        errorCount++;
        console.error(`${indexStr} ❌ ${result.status} | ${url}`);
        console.error(`         ↳ Message: ${JSON.stringify(result.response)}`);

        history[url] = {
          lastSubmitted: new Date().toISOString(),
          status: result.status,
          error: result.response,
        };

        // Stop if quota exceeded (429) or permission denied (403)
        if (result.status === 429) {
          console.warn(`\n⚠️ Google 429 Quota Exceeded. Halting remaining requests.`);
          break;
        }
        if (result.status === 403) {
          console.error(`\n❌ Permission Denied (403).`);
          console.error(`Ensure '${creds.client_email}' is added as an 'Owner' in Google Search Console for ustaad.ae.`);
          break;
        }
      }
    } catch (err) {
      errorCount++;
      console.error(`${indexStr} ❌ Error submitting ${url}: ${err.message}`);
    }

    // Save history periodically
    if ((i + 1) % 5 === 0) {
      saveHistory(history);
    }

    // Polite delay
    await sleep(CONFIG.requestDelayMs);
  }

  saveHistory(history);

  console.log(`\n============================================================`);
  console.log(`🏁 Indexing Run Complete!`);
  console.log(`============================================================`);
  console.log(`✅ Successfully Submitted : ${successCount}`);
  console.log(`❌ Failed Submissions     : ${errorCount}`);
  console.log(`💾 Submission History     : Saved to indexing_history.json`);
  console.log(`============================================================\n`);
}

main().catch((err) => {
  console.error(`Fatal execution error:`, err);
  process.exit(1);
});
