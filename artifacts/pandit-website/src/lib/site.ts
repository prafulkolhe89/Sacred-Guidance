/** Hash link to homepage section; respects Vite `base` (e.g. GitHub Pages). */
export function homeHashLink(sectionId: string): string {
  const id = sectionId.replace(/^#/, "");
  return `${import.meta.env.BASE_URL}#${id}`;
}
