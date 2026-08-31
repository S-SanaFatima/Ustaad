#!/bin/bash
set -euo pipefail

MESSAGE=${1:-"Deploy: update site"}
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

echo "▶ Building production site..."
if [ -f pnpm-lock.yaml ] && command -v pnpm >/dev/null 2>&1; then
  pnpm install --frozen-lockfile
  pnpm build
elif [ -f package-lock.json ]; then
  npm ci
  npm run build
else
  npm install
  npm run build
fi

if [ ! -f dist/client/index.html ]; then
  echo "✗ Build failed: dist/client/index.html not found."
  exit 1
fi

FILE_COUNT="$(find dist/client -type f | wc -l | tr -d ' ')"
echo "✓ Build complete ($FILE_COUNT files in dist/client)"

echo "▶ Committing source..."
git add -A
if git diff --cached --quiet; then
  echo "  Nothing new to commit in source."
else
  git commit -m "$MESSAGE"
fi

echo "▶ Pushing source to main..."
git push origin main

echo "▶ Uploading build to deploy-latest branch..."
ORIGIN="$(git remote get-url origin)"
DEPLOY_DIR="$(mktemp -d)"
trap 'rm -rf "$DEPLOY_DIR"' EXIT

cp -a dist/client/. "$DEPLOY_DIR/"
UPLOAD_COUNT="$(find "$DEPLOY_DIR" -type f | wc -l | tr -d ' ')"
echo "  Packaging $UPLOAD_COUNT built files..."

cd "$DEPLOY_DIR"
git init -q
git checkout -b deploy-latest
git add -A
git commit -q -m "$MESSAGE"
git remote add origin "$ORIGIN"
git push -f origin deploy-latest

cd "$ROOT"
echo "✓ Build uploaded to origin/deploy-latest ($UPLOAD_COUNT files)"

echo ""
echo "✓ Deploy finished."
echo "  Source branch : main"
echo "  Build branch  : deploy-latest"
echo ""
echo "  On cPanel: Git Version Control → Manage → Pull or Deploy → Update from Remote"
echo "  Or in Terminal:"
echo "  cd ~/public_html && git fetch origin && git reset --hard origin/deploy-latest"

if [ -f scripts/ping-bing.mjs ]; then
  echo ""
  echo "▶ Pinging Bing IndexNow API..."
  node scripts/ping-bing.mjs
fi
