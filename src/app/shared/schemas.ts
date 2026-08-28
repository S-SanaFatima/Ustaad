const BASE_URL = "https://ustaad.ae";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  "name": "Ustaad",
  "legalName": "Ustaad Private Tutoring",
  "url": `${BASE_URL}/`,
  "logo": {
    "@type": "ImageObject",
    "url": `${BASE_URL}/favicon-512x512.png`,
    "width": 512,
    "height": 512
  },
  "description": "Premium private 1-to-1 tutoring across the UAE for IGCSE, GCSE, A-Level, IB and American curriculum students.",
  "areaServed": "AE",
  "sameAs": [
    "https://www.facebook.com/ustaadAE",
    "https://www.instagram.com/ustaad.ae",
    "https://www.linkedin.com/company/ustaad-ae"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  "name": "Ustaad",
  "alternateName": "Ustaad Private Tutoring UAE",
  "url": `${BASE_URL}/`,
  "publisher": { "@id": `${BASE_URL}/#organization` },
  "inLanguage": "en-AE"
};

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
];

const AGGREGATE_RATING = {
  "@type": "AggregateRating",
  ratingValue: "5.0",
  reviewCount: "200",
  bestRating: "5",
  worstRating: "1",
};

const CITY_GEO: Record<string, { lat: string; lng: string; region: string }> = {
  "Abu Dhabi": { lat: "24.4539", lng: "54.3773", region: "Abu Dhabi" },
  Dubai: { lat: "25.2048", lng: "55.2708", region: "Dubai" },
  Sharjah: { lat: "25.3463", lng: "55.4209", region: "Sharjah" },
  Ajman: { lat: "25.4052", lng: "55.5136", region: "Ajman" },
  "Al Ain": { lat: "24.2075", lng: "55.7447", region: "Abu Dhabi" },
  "Ras Al Khaimah": { lat: "25.7895", lng: "55.9432", region: "Ras Al Khaimah" },
  Fujairah: { lat: "25.1288", lng: "56.3265", region: "Fujairah" },
};

const reviewsNodes = [
  { name: "Fares Al Kindi",   date: "2024-03-01", body: "I had a great experience with Ustaad. They truly provide some of the Best Tutors in Abu Dhabi. The teaching style is clear, professional, and very supportive." },
  { name: "Sumayya Alamri",   date: "2024-04-01", body: "I had very good experience with Ustad for my daughter… her math teacher is one of the best tutors I experienced. He explains the concepts very well." },
  { name: "Wadeema Al M",     date: "2024-02-01", body: "Very good tutoring institute with supportive tutor and clear teaching methods. Would definitely recommend to anyone looking for quality education." },
  { name: "Humaid Khalaf",    date: "2024-01-01", body: "very good site if you want a good teacher for your studies. The tutors really know how to make difficult topics easy to understand." },
  { name: "Zayed Al Teneiji", date: "2023-11-01", body: "Best tutoring institution in Abu Dhabi. The tutors are extremely knowledgeable and really care about student success in exams." },
  { name: "Nouf Al Mansouri", date: "2024-05-01", body: "Being a teacher, I found them as the most professional and organized service provider, they really care and organize lessons as per student learning speed." },
  { name: "Elyazia Alkaabi",  date: "2023-12-01", body: "He is a very good teacher, he makes the lessons easier to understand and has good ways of getting the information in my mind easily." },
  { name: "Omar Howwar",      date: "2024-02-01", body: "Sincere, encouraging, and passionate for his work. He put sufficient effort to elevate the education and knowledge of my son significantly." },
  { name: "Mohamed Al Hamed", date: "2024-06-01", body: "Ustaad is the best online institute in Abu Dhabi, they tutored me throughout university and are now consistently tutoring my siblings and cousins." },
  { name: "James T.",         date: "2024-03-01", body: "I started tutoring for A-Level Physics about three months before my exams. My tutor was incredibly patient and broke down complex topics like electromagnetic induction into simple, intuitive steps. I ended up getting an A*." },
  { name: "Ahmed Als",        date: "2024-04-01", body: "One of the best math tutors in Abu Dhabi, his teaching method is very focused and effective. He breaks down complex mathematical concepts into simple steps and ensures full understanding." },
].map(r => ({
  "@type": "Review",
  author: { "@type": "Person", name: r.name },
  reviewBody: r.body,
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  datePublished: r.date,
}));

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/EducationalOrganization",
  "@id": `${BASE_URL}/#organization`,
  name: "Ustaad",
  alternateName: "Ustaad Tutoring",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon-512x512.png`,
  image: `${BASE_URL}/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp`,
  description:
    "Premium private 1-to-1 tutoring across the UAE for IGCSE, GCSE, A-Level, IB, and American curriculum students in Dubai, Abu Dhabi, Sharjah and every Emirate.",
  telephone: "+971561249005",
  email: "support@ustaad.ae",
  foundingDate: "2015",
  numberOfStudents: 2500,
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Sharjah" },
    { "@type": "City", name: "Ajman" },
    { "@type": "City", name: "Al Ain" },
    { "@type": "City", name: "Ras Al Khaimah" },
    { "@type": "City", name: "Fujairah" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Private 1-to-1 tutoring across the UAE",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [
    "https://www.instagram.com/ustaad.ae",
    "https://www.facebook.com/ustaad.ae",
    "https://www.linkedin.com/company/ustaad-ae",
  ],
  aggregateRating: AGGREGATE_RATING,
  review: reviewsNodes,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Exam Success Rate", value: "90%+" },
    { "@type": "PropertyValue", name: "Parent Satisfaction Rate", value: "98%" },
    { "@type": "PropertyValue", name: "Average Grade Improvement", value: "+1 to +3 grades" },
  ],
  openingHoursSpecification: OPENING_HOURS,
  priceRange: "AED 150–350 per session",
  currenciesAccepted: "AED",
  paymentAccepted: "Credit Card, Bank Transfer, Cash",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.2048",
    longitude: "55.2708",
  },
};

/** Explicit LocalBusiness for city×subject landings (Rich Results–friendly). */
export const cityLocalBusinessSchema = ({
  city,
  url,
  name,
  description,
}: {
  city: string;
  url: string;
  name?: string;
  description?: string;
}) => {
  const geo = CITY_GEO[city] ?? CITY_GEO["Abu Dhabi"];
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}${url}#localbusiness`,
    name: name ?? `Ustaad — Private Tutors ${city}`,
    url: `${BASE_URL}${url}`,
    image: `${BASE_URL}/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp`,
    description:
      description ??
      `Premium private 1-to-1 tutoring in ${city}, UAE for IGCSE, GCSE, A-Level, IB, and American curriculum students.`,
    telephone: "+971561249005",
    email: "support@ustaad.ae",
    priceRange: "AED 150–350 per session",
    currenciesAccepted: "AED",
    paymentAccepted: "Credit Card, Bank Transfer, Cash",
    address: {
      "@type": "PostalAddress",
      streetAddress: `Home and online private tutoring across ${city}`,
      addressLocality: city,
      addressRegion: geo.region,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
    },
    openingHoursSpecification: OPENING_HOURS,
    areaServed: { "@type": "City", name: city },
    parentOrganization: {
      "@type": "EducationalOrganization",
      "@id": `${BASE_URL}/#organization`,
      name: "Ustaad — Private Tutors UAE",
      url: BASE_URL,
    },
  };
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
});

export const serviceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `${BASE_URL}${url}`,
  provider: {
    "@type": "EducationalOrganization",
    name: "Ustaad — Private Tutors UAE",
    url: BASE_URL,
  },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  serviceType: "Private Tutoring",
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
});

export const singleReviewSchema = ({
  serviceName,
  authorName,
  reviewBody,
  url,
}: {
  serviceName: string;
  authorName: string;
  reviewBody: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Service",
    name: serviceName,
    provider: { "@type": "Organization", name: "Ustaad — Private Tutors UAE", url: BASE_URL },
  },
  author: { "@type": "Person", name: authorName },
  reviewBody,
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
});

export const reviewsSchema: any[] = [];

export type PersonInput = {
  name: string;
  url?: string;
  jobTitle?: string;
  sameAs?: string | string[];
  description?: string;
  image?: string;
};

function personNode(p: PersonInput | string) {
  if (typeof p === "string") {
    return {
      "@type": "Person",
      name: p,
      worksFor: { "@type": "EducationalOrganization", name: "Ustaad — Private Tutors UAE", url: BASE_URL },
    };
  }
  return {
    "@type": "Person",
    name: p.name,
    ...(p.url && { url: p.url.startsWith("http") ? p.url : `${BASE_URL}${p.url}` }),
    ...(p.jobTitle && { jobTitle: p.jobTitle }),
    ...(p.description && { description: p.description }),
    ...(p.image && { image: p.image.startsWith("http") ? p.image : `${BASE_URL}${p.image}` }),
    ...(p.sameAs && { sameAs: Array.isArray(p.sameAs) ? p.sameAs : [p.sameAs] }),
    worksFor: { "@type": "EducationalOrganization", name: "Ustaad — Private Tutors UAE", url: BASE_URL },
  };
}

/** BlogPosting + nested Person (author + reviewedBy) + EducationalOrganization publisher */
export const articleSchema = ({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  reviewer,
  image,
  timeRequired,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string | PersonInput;
  reviewer?: string | PersonInput;
  image?: string;
  timeRequired?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  description,
  url: url.startsWith("http") ? url : `${BASE_URL}${url}`,
  datePublished,
  dateModified: dateModified || datePublished,
  ...(timeRequired && { timeRequired }),
  author: personNode(author),
  ...(reviewer && { reviewedBy: personNode(reviewer) }),
  publisher: {
    "@type": "EducationalOrganization",
    "@id": `${BASE_URL}/#organization`,
    name: "Ustaad — Private Tutors UAE",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/ustaad-logo-updated-white.png` },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": url.startsWith("http") ? url : `${BASE_URL}${url}` },
  ...(image && {
    image: {
      "@type": "ImageObject",
      url: image.startsWith("http") ? image : `${BASE_URL}${image}`,
    },
  }),
});

/** Course + provider for city×subject landings */
export const courseSchema = ({
  courseName,
  description,
  url,
  city = "Abu Dhabi",
}: {
  courseName: string;
  description: string;
  url: string;
  city?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: courseName,
  description,
  url: `${BASE_URL}${url}`,
  provider: {
    "@type": "EducationalOrganization",
    "@id": `${BASE_URL}/#organization`,
    name: "Ustaad — Private Tutors UAE",
    url: BASE_URL,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: ["onsite", "online"],
    courseWorkload: "PT1H",
    location: {
      "@type": "Place",
      name: `${city}, United Arab Emirates`,
      address: {
        "@type": "PostalAddress",
        streetAddress: `Private tutoring across ${city}`,
        addressLocality: city,
        addressCountry: "AE",
      },
    },
  },
  offers: {
    "@type": "Offer",
    category: "Paid",
    priceCurrency: "AED",
  },
  aggregateRating: AGGREGATE_RATING,
});

export const personSchema = (p: PersonInput) => ({
  "@context": "https://schema.org",
  ...personNode(p),
});

export const profilePageSchema = (p: PersonInput & { url: string }) => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: personNode(p),
  url: p.url.startsWith("http") ? p.url : `${BASE_URL}${p.url}`,
});

export const itemListSchema = (
  name: string,
  items: { name: string; url: string; position?: number }[]
) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: item.position ?? i + 1,
    name: item.name,
    url: item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`,
  })),
});

export const reviewSchema = (
  itemName: string,
  reviews: Array<{ author: string; reviewBody: string; ratingValue?: number }>
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: itemName,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewBody: r.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: (r.ratingValue || 5).toString(),
      bestRating: "5",
    },
  })),
});
