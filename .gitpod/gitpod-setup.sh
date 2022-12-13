#!/usr/bin/env bash

# Convert context URL to an array
mapfile -t CONTEXT_URL_ITEMS < <(echo "$GITPOD_WORKSPACE_CONTEXT_URL" | tr '/' '\n')
EXAMPLE_PROJECT="${CONTEXT_URL_ITEMS[7]}"
# Wait for VSCode to be ready (port 23000)
gp ports await 23000 > /dev/null 2>&1
echo "Loading example project:" $EXAMPLE_PROJECT

# Go to the requested example project
cd "$GITPOD_REPO_ROOT"/"$EXAMPLE_PROJECT" || exit
# Open the main page in VSCode
code src/pages/index.astro
# Start Astro preview
pnpm install
pnpm run build
pnpm run preview
