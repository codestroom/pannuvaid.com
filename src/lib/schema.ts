import { site } from "./site";
import { treatments } from "./treatments";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${site.url}/#clinic`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneHref,
  email: site.email,
  image: `${site.url}/logo.png`,
  logo: `${site.url}/logo.png`,
  medicalSpecialty: "Ayurvedic Medicine",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  availableService: treatments.map((t) => ({
    "@type": "MedicalProcedure",
    name: t.title,
    description: t.short,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "640",
  },
};

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: { "@type": "Organization", name: post.author },
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
  },
  mainEntityOfPage: `${site.url}/blog/${post.slug}`,
});
