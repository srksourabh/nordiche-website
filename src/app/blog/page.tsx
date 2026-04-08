import { BLOG_ARTICLES } from "@/lib/blog-articles";
import { buildMetadata } from "@/lib/metadata";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogGrid } from "@/components/sections/BlogGrid";

export const metadata = buildMetadata({
  title: "Blog — Energy Storage Insights, Battery Technology & Research",
  description:
    "Research updates, technology deep-dives, and industry perspectives on aluminium-graphene batteries, grid storage, active materials, green hydrogen, and sustainable energy from Nordische Energy Systems.",
  path: "/blog",
  keywords: [
    "battery technology blog",
    "energy storage research",
    "graphene battery news",
    "green hydrogen updates",
    "aluminium-graphene battery",
    "grid storage insights",
    "sustainable energy blog",
    "battery recycling",
    "EV battery technology",
  ],
});

const categories = [
  "All",
  ...Array.from(new Set(BLOG_ARTICLES.map((a) => a.category))),
];

export default function BlogPage() {
  return (
    <>
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Blog"
            title="Insights & Research"
            description="Technology deep-dives, research updates, and industry perspectives from our engineering team."
          />
          <BlogGrid articles={BLOG_ARTICLES} categories={categories} />
        </div>
      </section>
      <LeadCapture
        compact
        title="Interested in Our Technology?"
        description="Get in touch to discuss how Nordische solutions can fit your application."
      />
    </>
  );
}
