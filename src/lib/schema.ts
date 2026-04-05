import { SITE } from "@/lib/constants";

export function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Industriestraße 42",
      addressLocality: "Berlin",
      postalCode: "10115",
      addressCountry: "DE",
    },
    foundingDate: SITE.founded,
    sameAs: [SITE.linkedin, SITE.xtwitter],
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    url: product.url,
    manufacturer: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
  };
}
