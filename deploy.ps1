param(
  [string]$Message = "Deploy: update site"
)

$ErrorActionPreference = "Stop"
$Root = $PSScriptRoot
Set-Location $Root

Write-Host "[1/5] Building production site..."
if ((Test-Path "$Root/pnpm-lock.yaml") -and (Get-Command pnpm -ErrorAction SilentlyContinue)) {
  pnpm install --frozen-lockfile
  pnpm build
}
elseif (Test-Path "$Root/package-lock.json") {
  npm ci
  npm run build
}
else {
  npm install
  npm run build
}

if (-not (Test-Path "$Root/dist/client/index.html")) {
  throw "Build failed: dist/client/index.html not found."
}

$FileCount = (Get-ChildItem -Path "$Root/dist/client" -Recurse -File).Count
Write-Host "Build complete ($FileCount files in dist/client)"

Write-Host "[2/5] Committing source..."
git add -A
$staged = git diff --cached --name-only
if (-not $staged) {
  Write-Host "Nothing new to commit in source."
}
else {
  git commit -m $Message
}

Write-Host "[3/5] Pushing source to main..."
git push origin main

Write-Host "[4/5] Uploading build to deploy-latest branch..."
$Origin = git remote get-url origin
$DeployDir = Join-Path $env:TEMP ("ustaad-deploy-" + [guid]::NewGuid().ToString())
New-Item -ItemType Directory -Path $DeployDir | Out-Null

try {
  Copy-Item -Path "$Root/dist/client/*" -Destination $DeployDir -Recurse -Force
  $UploadCount = (Get-ChildItem -Path $DeployDir -Recurse -File).Count
  Write-Host "Packaging $UploadCount built files..."

  Set-Location $DeployDir
  git init -q
  git checkout -b deploy-latest
  git add -A
  git commit -q -m $Message
  git remote add origin $Origin
  git push -f origin deploy-latest

  Set-Location $Root
  Write-Host "Build uploaded to origin/deploy-latest ($UploadCount files)"
}
finally {
  if (Test-Path $DeployDir) {
    Remove-Item -Recurse -Force $DeployDir
  }
  Set-Location $Root
}

Write-Host ""
Write-Host "Deploy finished."
Write-Host "  Source branch: main"
Write-Host "  Build branch: deploy-latest"
Write-Host ""
Write-Host "On cPanel: Git Version Control -> Manage -> Pull or Deploy -> Update from Remote"
Write-Host "Or in Terminal:"
Write-Host "  cd ~/public_html && git fetch origin && git reset --hard origin/deploy-latest"

if (Test-Path "$Root/scripts/ping-bing.mjs") {
  Write-Host ""
  Write-Host "[5/5] Pinging Bing IndexNow API..."
  node scripts/ping-bing.mjs
}
