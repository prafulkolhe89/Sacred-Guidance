#!/usr/bin/env bash
# After deploy: expect HTTP 200 for each URL. Usage: ./scripts/verify-urls.sh [BASE]
# Default BASE matches production custom domain with root base path.
set -euo pipefail
BASE="${1:-https://www.darbheguruji.com}"
PATHS=(
  ""
  "satyanarayan-puja-nagpur"
  "griha-pravesh-puja-nagpur"
  "vastu-shanti-nagpur"
  "astrology-consultation-nagpur"
  "ganesh-chaturthi-puja-nagpur"
  "rudrabhishek-puja-nagpur"
  "namkaran-rituals-nagpur"
)
for p in "${PATHS[@]}"; do
  url="${BASE%/}/${p}"
  code=$(curl -sI -o /dev/null -w "%{http_code}" "$url")
  echo "$code  $url"
  if [[ "$code" != "200" ]]; then
    exit 1
  fi
done
echo "All URLs returned 200."
