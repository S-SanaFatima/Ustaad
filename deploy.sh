#!/bin/bash
set -e

MESSAGE=${1:-"Deploy: update site"}

echo "▶ Building..."
pnpm install --frozen-lockfile
pnpm build

echo "▶ Committing..."
git add -A
git commit -m "$MESSAGE" || echo "Nothing to commit."

echo "▶ Pushing source to main..."
git push origin main

echo "▶ Publishing built files to deploy-latest..."
git subtree split --prefix dist/client -b __deploy_tmp
git push origin __deploy_tmp:deploy-latest --force
git branch -D __deploy_tmp

echo ""
echo "✓ Done."
echo "  On cPanel server, run:"
echo "  git fetch origin && git checkout -B deploy-latest origin/deploy-latest && git reset --hard origin/deploy-latest"

echo "▶ Pinging Bing IndexNow API..."
node scripts/ping-bing.mjs
