"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { BLOG_ARTICLES } from "@/lib/blog-articles";

type Article = (typeof BLOG_ARTICLES)[number];

interface BlogGridProps {
  articles: readonly Article[];
  categories: string[];
}

export function BlogGrid({ articles, categories }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      q === "" ||
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q) ||
      ("tags" in article &&
        (article as Article & { tags?: string[] }).tags?.some((t: string) =>
          t.toLowerCase().includes(q)
        ));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Search + Category Filter Bar */}
      <div className="mb-10 space-y-5">
        {/* Search */}
        <div className="relative mx-auto max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-nord-mist)]" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] py-2.5 pl-10 pr-4 text-sm text-[var(--color-nord-white)] placeholder:text-[var(--color-nord-mist)] focus:border-[var(--color-nord-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--color-nord-teal)]"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                activeCategory === cat
                  ? "bg-[var(--color-nord-teal)] text-[var(--color-nord-black)]"
                  : "border border-[var(--color-nord-slate)] text-[var(--color-nord-mist)] hover:border-[var(--color-nord-teal)] hover:text-[var(--color-nord-teal)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-[var(--color-nord-mist)]">
        {filtered.length} article{filtered.length !== 1 ? "s" : ""}
        {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
        {searchQuery ? ` matching "${searchQuery}"` : ""}
      </p>

      {/* Article Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((article, index) => (
            <motion.div
              key={article.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
            >
              <Link href={`/blog/${article.slug}` as never}>
                <Card className="flex h-full flex-col p-6 transition-colors hover:border-[var(--color-nord-teal)]">
                  <div className="mb-4 flex items-center gap-3">
                    <Badge>{article.category}</Badge>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-nord-mist)]">
                      <Clock className="h-3 w-3" /> {article.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 text-lg font-bold uppercase leading-tight text-[var(--color-nord-white)]">
                    {article.title}
                  </h2>
                  <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-[var(--color-nord-mist)]">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <time className="text-xs text-[var(--color-nord-mist)]">
                      {new Date(article.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">
                      Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg text-[var(--color-nord-mist)]">
            No articles found. Try a different search or category.
          </p>
        </div>
      )}
    </>
  );
}
