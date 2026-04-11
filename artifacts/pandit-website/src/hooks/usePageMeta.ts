import { useEffect } from "react";

const SITE = "https://www.darbheguruji.com";
const DEFAULT_TITLE =
  "Pandit in Nagpur | Darbhe Guruji — Pooja, Vastu & Astrology";
const DEFAULT_DESCRIPTION =
  "Trusted pandit in Nagpur for pooja services at home — Satyanarayan pooja, Griha Pravesh, Vastu consultant Nagpur, marriage & Hindu ceremonies. Book Darbhe Guruji.";

type Options = {
  title: string;
  description: string;
  path: string;
};

export function usePageMeta({ title, description, path }: Options) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const meta =
      document.querySelector('meta[name="description"]') ??
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    const prevDesc = meta.getAttribute("content") ?? "";
    meta.setAttribute("content", description);

    const canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    const prevCanonical = canonical?.href;
    if (canonical) {
      canonical.href = `${SITE}${path}`;
    }

    return () => {
      document.title = prevTitle;
      meta.setAttribute("content", prevDesc);
      if (canonical && prevCanonical) {
        canonical.href = prevCanonical;
      }
    };
  }, [title, description, path]);
}

export function useJsonLd(
  jsonLd: object | null,
  scriptId = "page-jsonld",
) {
  useEffect(() => {
    if (!jsonLd) return;
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [jsonLd, scriptId]);
}

export { DEFAULT_TITLE, DEFAULT_DESCRIPTION, SITE };
