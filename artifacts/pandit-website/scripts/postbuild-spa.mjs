import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");

/** Keep in sync with `SERVICE_PUJA_PATHS` in src/data/servicePujaPages.ts */
const SLUGS = [
  "satyanarayan-puja-nagpur",
  "griha-pravesh-puja-nagpur",
  "vastu-shanti-puja-nagpur",
  "ganpati-puja-nagpur",
  "vivah-marriage-puja-nagpur",
  "astrology-consultation-nagpur",
];

const indexHtml = join(dist, "index.html");

for (const slug of SLUGS) {
  const dir = join(dist, slug);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, "index.html"));
}
