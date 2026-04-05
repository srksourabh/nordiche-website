import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMeta): Metadata {
  const canonical = `${SITE.url}${path}`;

  return {
    title: `${title} | ${SITE.name}`,
    description,
    keywords: [
      "lithium battery manufacturer",
      "EV battery system",
      "custom battery solution",
      "Battery Management System",
      "industrial battery",
      "energy storage Europe",
      "LFP battery",
      "NMC battery pack",
      ...keywords,
    ].join(", "),
    authors: [{ name: SITE.name, url: SITE.url }],
    metadataBase: new URL(SITE.url),
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: canonical,
      siteName: SITE.name,
      type: "website",
      locale: "en_EU",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE.name}`,
      description,
      images: ["/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    verification: {
      google: "ADD_YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    },
  };
}
