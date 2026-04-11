/** Production origin for canonical footer/nav hash links. */
export const SITE_ORIGIN = "https://www.darbheguruji.com";

/**
 * Full URL to a homepage section (works from any route). Uses Vite base for
 * GitHub Pages-style deploys when BASE_PATH is not `/`.
 */
export function homeSectionUrl(sectionId: string): string {
  const id = sectionId.replace(/^#/, "");
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";
  const path = base ? `${base}/` : "/";
  return `${SITE_ORIGIN}${path}#${id}`;
}

/** Absolute URL for an in-app route (respects Vite `base` / GitHub Pages). */
export function absolutePageUrl(routePath: string): string {
  const normalized = routePath.startsWith("/") ? routePath : `/${routePath}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${SITE_ORIGIN}${base}${normalized}`;
}

/** Canonical homepage URL (no hash). */
export function homeRootUrl(): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${SITE_ORIGIN}${base}/`;
}
