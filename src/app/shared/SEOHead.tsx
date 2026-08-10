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

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} data-rh="true" />
      <meta name="robots" content={robots} data-rh="true" />
      {author && <meta name="author" content={author} data-rh="true" />}
      <link rel="canonical" href={fullCanonical} data-rh="true" />

      {/* Preload critical hero images for LCP optimization */}
      {preloadHeroImage && <link rel="preload" as="image" href={preloadHeroImage} fetchPriority="high" data-rh="true" />}

      {/* hreflang — en-AE + x-default only. ar-AE omitted: Arabic is Google Translate, not a real /ar/ URL */}
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
