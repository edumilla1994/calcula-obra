# Deploy a Cloudflare (Workers con assets estaticos, ex Pages)
$ErrorActionPreference = "Stop"
$env:BASE_PATH = "/"
$env:SITE_URL = "https://calcula-obra.calcula-obra.workers.dev"
try {
  npm run build
  if ($LASTEXITCODE -ne 0) { throw "astro build fallo" }
  npx wrangler deploy --config wrangler.assets.jsonc
  if ($LASTEXITCODE -ne 0) { throw "wrangler deploy fallo" }
} finally {
  Remove-Item Env:BASE_PATH, Env:SITE_URL -ErrorAction SilentlyContinue
}
