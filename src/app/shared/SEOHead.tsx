import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: object | object[];
  robots?: string;
  author?: string;
  placename?: string;
  ogType?: string;
  preloadHeroImage?: string;
}

const BASE_URL = "https://ustaad.ae";
const DEFAULT_OG_IMAGE = `${BASE_URL}/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp`;

export default function SEOHead({ title, description, canonical, ogImage, schema, robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1", author, placename = "Dubai, UAE", ogType = "website", preloadHeroImage }: SEOHeadProps) {
  // Homepage keeps trailing slash; all other pages standardise on no trailing slash
  const path = canonical === "/" ? "/" : canonical.replace(/\/+$/, "") || "/";
  const fullCanonical = path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`;
  const image = ogImage ? `${BASE_URL}${ogImage}` : DEFAULT_OG_IMAGE;
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const cleanupDuplicates = () => {
      // 1. Exactly 1 <title>
      document.title = title;
      const titleElements = document.querySelectorAll('head title');
      for (let i = 1; i < titleElements.length; i++) {
        titleElements[i].remove();
      }

      // 2. Exactly 1 <link rel="canonical">
      const canonicalElements = document.querySelectorAll('head link[rel="canonical"]');
      if (canonicalElements.length > 0) {
        canonicalElements[0].setAttribute('href', fullCanonical);
        for (let i = 1; i < canonicalElements.length; i++) {
          canonicalElements[i].remove();
        }
      }

      // 3. Exactly 2 hreflang tags: en-AE and x-default (no ar-AE until Arabic pages exist)
      const expectedHreflang: Record<string, string> = {
        'en-ae': fullCanonical,
        'x-default': fullCanonical
      };
      const alternateElements = document.querySelectorAll('head link[rel="alternate"]');
      const seenHreflang = new Set<string>();
      alternateElements.forEach((el) => {
        const h = el.getAttribute('hreflang')?.toLowerCase() || el.getAttribute('hrefLang')?.toLowerCase();
        const href = el.getAttribute('href') || '';
        if (!h || seenHreflang.has(h) || !(h in expectedHreflang) || href.includes('/ar/')) {
          el.remove();
        } else {
          seenHreflang.add(h);
          el.setAttribute('href', expectedHreflang[h]);
        }
      });

      // 4. Remove any JSON-LD scripts rendered inside #root by client React
      const rootLdJson = document.querySelectorAll('#root script[type="application/ld+json"]');
      rootLdJson.forEach((el) => el.remove());

      // 5. Deduplicate JSON-LD scripts in <head> by @id / @type / content
      const headLdJson = document.querySelectorAll('head script[type="application/ld+json"]');
      const seenSchemas = new Set<string>();
      headLdJson.forEach((el) => {
        try {
          const parsed = JSON.parse(el.textContent || '{}');
          const typeKey = parsed['@id'] || parsed['@type'] || JSON.stringify(parsed);
          if (seenSchemas.has(typeKey)) {
            el.remove();
          } else {
            seenSchemas.add(typeKey);
          }
        } catch {
          // If unparseable or malformed, remove
          el.remove();
        }
      });
    };

    // Run immediately and across frame/timers to catch React 19 post-mount and Helmet commits
    cleanupDuplicates();
    const rafId = requestAnimationFrame(cleanupDuplicates);
    const t1 = setTimeout(cleanupDuplicates, 50);
    const t2 = setTimeout(cleanupDuplicates, 250);

    // MutationObserver guarantees that if React 19 or Helmet inserts duplicate tags into <head>,
    // they are stripped immediately before crawlers or browsers register duplicates.
    let observer: MutationObserver | null = null;
    try {
      let isCleaning = false;
      observer = new MutationObserver(() => {
        if (isCleaning) return;
        isCleaning = true;
        cleanupDuplicates();
        isCleaning = false;
      });
      observer.observe(document.head, { childList: true, subtree: false });
    } catch {
      // Ignore if MutationObserver is unsupported
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [title, fullCanonical, path, schemas]);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} data-rh="true" />
      <meta name="robots" content={robots} data-rh="true" />
      {author && <meta name="author" content={author} data-rh="true" />}
      <link rel="canonical" href={fullCanonical} data-rh="true" />

      {/* Preload critical hero images for LCP optimization */}
      {preloadHeroImage && <link rel="preload" as="image" href={preloadHeroImage} fetchPriority="high" data-rh="true" />}

      {/* hreflang — en-AE and x-default only (ar-AE removed until Arabic pages exist) */}
      <link rel="alternate" hrefLang="en-AE" href={fullCanonical} data-rh="true" />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} data-rh="true" />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} data-rh="true" />
      <meta property="og:title" content={title} data-rh="true" />
      <meta property="og:description" content={description} data-rh="true" />
      <meta property="og:url" content={fullCanonical} data-rh="true" />
      <meta property="og:image" content={image} data-rh="true" />
      <meta property="og:image:width" content="1200" data-rh="true" />
      <meta property="og:image:height" content="630" data-rh="true" />
      <meta property="og:site_name" content="Ustaad" data-rh="true" />
      <meta property="og:locale" content="en_AE" data-rh="true" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" data-rh="true" />
      <meta name="twitter:title" content={title} data-rh="true" />
      <meta name="twitter:description" content={description} data-rh="true" />
      <meta name="twitter:image" content={image} data-rh="true" />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="AE" data-rh="true" />
      <meta name="geo.placename" content={placename} data-rh="true" />
      <meta name="geo.position" content="25.2048;55.2708" data-rh="true" />
      <meta name="ICBM" content="25.2048, 55.2708" data-rh="true" />

      {/* JSON-LD structured data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" data-rh="true">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
