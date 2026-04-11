import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");

/** Keep in sync with `SERVICE_LANDING_ORDER` paths (no leading slash = folder name). */
const SPA_ROUTE_SLUGS = [
  "satyanarayan-puja-nagpur",
  "griha-pravesh-puja-nagpur",
  "vastu-shanti-nagpur",
  "astrology-consultation-nagpur",
  "ganesh-chaturthi-puja-nagpur",
  "rudrabhishek-puja-nagpur",
  "namkaran-rituals-nagpur",
];

const indexHtml = join(dist, "index.html");

for (const slug of SPA_ROUTE_SLUGS) {
  const dir = join(dist, slug);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, "index.html"));
}
