"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_ARTICLES } from "@/lib/blog-articles";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function BlogPreview() {
  return (
    <section className="section-divider py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Insights"
          title="Latest from Nordische Energy"
          description="Research updates, technology deep-dives, and industry perspectives from our engineering team."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_ARTICLES.slice(0, 3).map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link href={`/blog/${article.slug}` as never}>
                <Card className="flex h-full flex-col p-6 transition-colors hover:border-[var(--color-nord-teal)]">
                  <div className="mb-4 flex items-center gap-3">
                    <Badge>{article.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-nord-mist)]">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold uppercase leading-tight text-[var(--color-nord-white)]">
                    {article.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 flex-1 text-sm text-[var(--color-nord-mist)]">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </span>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <Link
          aria-label="View all Nordische Energy articles"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
          href="/blog"
        >
          View All Articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
