# Ustaad.ae — notes for Claude

## Deployment (read before any deploy)

- **Live site:** https://ustaad.ae (canonical host is non-www; www 301s to non-www).
- **Hosting:** cPanel. Document root is `/home/ustaad/public_html`.
- **FTP account:** `devsynx@ustaad.ae` on `ftp.ustaad.ae`, port 21 (explicit FTPS supported).
  Its home directory is **already** `/home/ustaad/public_html`.
  So the upload target is the FTP root `./`, **never** `/public_html/`.
  Uploading to `/public_html/` creates a nested `public_html/public_html` folder and the live site does not change.
- **Never write the FTP password into the repo, commits, or chat.** It lives only in GitHub secrets.

### How deploys happen
- Every push to `main` runs `.github/workflows/deploy-ftp.yml`:
  `npm ci` → `npm run build` → FTP upload of `dist/client/` → IndexNow ping (`scripts/ping-bing.mjs --days=3`).
- Required GitHub Actions secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`. Optional `FTP_SERVER_DIR` (default `./`).
- The workflow has `cancel-in-progress: true`. Pushing to `main` while a deploy is uploading **cancels** that deploy. Wait for it to finish before pushing to `main` again.
- The FTP action keeps `.ftp-deploy-sync-state.json` in the target folder and uploads only changed files. If that file is missing, it re-uploads everything (~800 files, ~17 minutes).
- Manual fallback from a local machine: `npm run build` then `python3 deploy_ftp.py` (prompts for the password).
- This cloud sandbox cannot reach `ftp.ustaad.ae` or `ustaad.ae` directly. Deploy through GitHub Actions.

## Adding a page
Register every new route in all three places, or it 404s:
`routes.config.mjs` (and `src/routes.config.ts`), `src/entry-server.tsx`, and `src/main.tsx`.
Set `lastmod` in `routes.config.mjs` whenever a page's content changes. The sitemap and IndexNow ping depend on it.

## SEO tooling
- OpenSEO project `USTAAD.AE` (id `77c926ea-3ced-4795-83b1-d62436f105a8`) is connected to Search Console property `sc-domain:ustaad.ae`.
- IndexNow keys hosted in `public/`: `82c9829535fe4e56949b90607d53f4c6.txt` (repo script) and `d90272b0d0644d408fc4ea6c62d4de10.txt` (OpenSEO).
- Indexing status and backlink plan: `INDEXING_AND_BACKLINK_PLAN.md`. More architecture notes: `TECHNICAL_CONTEXT.md`.
