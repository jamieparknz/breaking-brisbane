#!/usr/bin/env bash
# Build and publish ./out to the gh-pages branch (GitHub Pages source).
set -euo pipefail
cd "$(dirname "$0")/.."
npm run lint
npm run build
touch out/.nojekyll
cd out
rm -rf .git
git init -q && git checkout -qb gh-pages
git add -A && git commit -qm "Deploy $(date +%F)"
git push -f https://github.com/jamieparknz/breaking-brisbane.git gh-pages
rm -rf .git
echo "Deployed: https://jamieparknz.github.io/breaking-brisbane/"
