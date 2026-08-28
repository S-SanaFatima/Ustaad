#!/bin/bash
set -e

MESSAGE=${1:-"Deploy: update site"}
ROOT="$(cd "$(dirname "$0")" && pwd)"

echo "▶ Building..."
if command -v pnpm >/dev/null 2>&1; then
  pnpm install --frozen-lockfile
  pnpm build
else
  npm ci
  npm run build
fi

echo "▶ Committing source..."
cd "$ROOT"
git add -A
git commit -m "$MESSAGE" || echo "Nothing to commit."

echo "▶ Pushing source to main..."
git push origin main

echo "▶ Publishing built files to deploy-latest..."
ORIGIN="$(git remote get-url origin)"
DEPLOY_DIR="$(mktemp -d)"
cp -r dist/client/. "$DEPLOY_DIR/"
cd "$DEPLOY_DIR"
git init -q
git checkout -b deploy-latest
git add -A
git commit -q -m "$MESSAGE"
git remote add origin "$ORIGIN"
git push -f origin deploy-latest
cd "$ROOT"
rm -rf "$DEPLOY_DIR"

echo ""
echo "✓ Done."
echo "  On cPanel: Git Version Control → Manage → Pull or Deploy → Update from Remote"
echo "  Or in Terminal:"
echo "  cd ~/public_html && git fetch origin && git reset --hard origin/deploy-latest"

echo "▶ Pinging Bing IndexNow API..."
node scripts/ping-bing.mjs
