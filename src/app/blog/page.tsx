import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BLOG_ARTICLES, SITE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog — Energy Storage Insights & Research",
  description:
    "Research updates, technology deep-dives, and industry perspectives on aluminium-graphene batteries, grid storage, active materials, and green hydrogen from Nordische Energy Systems.",
  path: "/blog",
  keywords: [
    "battery technology blog",
    "energy storage research",
    "graphene battery news",
    "green hydrogen updates",
  ],
});

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
          <div className="grid gap-6 md:grid-cols-2">
            {BLOG_ARTICLES.map((article) => (
              <Link href={`/blog/${article.slug}` as never} key={article.slug}>
                <Card className="flex h-full flex-col p-7 transition-colors hover:border-[var(--color-nord-teal)]">
                  <div className="mb-4 flex items-center gap-3">
                    <Badge>{article.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-nord-mist)]">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </span>
                    <time className="ml-auto text-xs text-[var(--color-nord-mist)]">
                      {new Date(article.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold uppercase leading-tight text-[var(--color-nord-white)]">
                    {article.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[var(--color-nord-mist)]">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <LeadCapture compact title="Interested in Our Technology?" description="Get in touch to discuss how Nordische solutions can fit your application." />
    </>
  );
}
