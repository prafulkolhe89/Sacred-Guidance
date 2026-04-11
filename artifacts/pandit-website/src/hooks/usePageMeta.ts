import { useEffect } from "react";

const SITE = "https://www.darbheguruji.com";
const DEFAULT_TITLE =
  "Darbhe Guruji | Pandit Devesh Darbhe — Pooja, Vastu & Astrology in Nagpur";
const DEFAULT_DESCRIPTION =
  "Trusted pandit in Nagpur for pooja services at home — Satyanarayan pooja, Griha Pravesh, Vastu consultant Nagpur, marriage & Hindu ceremonies. Book Darbhe Guruji.";

type Options = {
  title: string;
  description: string;
  path: string;
};

function getOrCreateMeta(
  selector: string,
  create: () => HTMLMetaElement,
): HTMLMetaElement {
  const el = document.querySelector(selector);
  if (el instanceof HTMLMetaElement) return el;
  const m = create();
  document.head.appendChild(m);
  return m;
}

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
    const pageUrl = `${SITE}${path}`;
    if (canonical) {
      canonical.href = pageUrl;
    }

    const ogTitle = getOrCreateMeta('meta[property="og:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:title");
      return m;
    });
    const prevOgTitle = ogTitle.getAttribute("content") ?? "";
    ogTitle.setAttribute("content", title);

    const ogDesc = getOrCreateMeta('meta[property="og:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:description");
      return m;
    });
    const prevOgDesc = ogDesc.getAttribute("content") ?? "";
    ogDesc.setAttribute("content", description);

    const ogUrl = getOrCreateMeta('meta[property="og:url"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("property", "og:url");
      return m;
    });
    const prevOgUrl = ogUrl.getAttribute("content") ?? "";
    ogUrl.setAttribute("content", pageUrl);

    const twTitle = getOrCreateMeta('meta[name="twitter:title"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:title");
      return m;
    });
    const prevTwTitle = twTitle.getAttribute("content") ?? "";
    twTitle.setAttribute("content", title);

    const twDesc = getOrCreateMeta('meta[name="twitter:description"]', () => {
      const m = document.createElement("meta");
      m.setAttribute("name", "twitter:description");
      return m;
    });
    const prevTwDesc = twDesc.getAttribute("content") ?? "";
    twDesc.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      meta.setAttribute("content", prevDesc);
      if (canonical && prevCanonical) {
        canonical.href = prevCanonical;
      }
      ogTitle.setAttribute("content", prevOgTitle);
      ogDesc.setAttribute("content", prevOgDesc);
      ogUrl.setAttribute("content", prevOgUrl);
      twTitle.setAttribute("content", prevTwTitle);
      twDesc.setAttribute("content", prevTwDesc);
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
