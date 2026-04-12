/** Normalize wouter location so `/path/` matches `/path` (static hosts often use trailing slash). */
export function normalizePathname(path: string): string {
  const pathOnly = path.split("?")[0].split("#")[0];
  if (!pathOnly || pathOnly === "/") return "/";
  return pathOnly.replace(/\/+$/, "") || "/";
}
