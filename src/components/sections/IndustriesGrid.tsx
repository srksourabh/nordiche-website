"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/utils";

export function IndustriesGrid() {
  return (
    <section className="section-divider py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Powering Multiple Industries" />
        <div className="grid gap-6 md:grid-cols-2">
          {INDUSTRIES.map((industry, index) => {
            const Icon = getIcon(industry.icon);
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="group h-full p-7 hover:-translate-y-1">
                  <Icon className="h-10 w-10 text-[var(--color-nord-teal)]" />
                  <h3 className="mt-5 text-3xl uppercase">{industry.name}</h3>
                  <p className="mt-3 text-lg text-[var(--color-nord-light)]">{industry.headline}</p>
                  <Link
                    aria-label={`Explore the ${industry.name} industry page`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                    href={`/industries/${industry.slug}`}
                  >
                    Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
