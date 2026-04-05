"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function CaseStudiesPreview() {
  return (
    <section className="section-divider py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Proven Performance in Real-World Applications" />
        <div className="grid gap-6">
          {CASE_STUDIES.slice(0, 2).map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="grid gap-6 p-7 lg:grid-cols-[0.45fr_1fr]">
                <div>
                  <Badge>{study.industry}</Badge>
                  <p className="mt-5 text-sm uppercase tracking-[0.16em] text-[var(--color-nord-mist)]">
                    {study.client}
                  </p>
                  <h3 className="mt-3 text-3xl uppercase">{study.title}</h3>
                </div>
                <ul className="grid gap-3 text-sm text-[var(--color-nord-light)] sm:grid-cols-2">
                  {study.results.slice(0, 2).map((result) => (
                    <li key={result} className="rounded-2xl border border-[var(--color-nord-slate)] p-4">
                      {result}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
        <Link
          aria-label="View all Nordische Energy case studies"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
          href="/case-studies"
        >
          View All Case Studies <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
