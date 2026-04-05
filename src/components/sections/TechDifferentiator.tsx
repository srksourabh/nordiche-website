"use client";

import { motion } from "framer-motion";
import { TECH_PILLARS } from "@/lib/constants";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getIcon } from "@/lib/utils";

export function TechDifferentiator() {
  return (
    <section className="bg-[var(--color-nord-deep)] py-[var(--section-py)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          description="Six engineering pillars that define Nordische battery performance."
          title="Built on Advanced Battery Technology"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TECH_PILLARS.map((pillar, index) => {
            const Icon = getIcon(pillar.icon);
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Card className="h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:rgb(0_212_170_/_0.1)] text-[var(--color-nord-teal)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-6 font-[var(--font-mono)] text-3xl text-[var(--color-nord-teal)]">{pillar.stat}</p>
                  <h3 className="mt-4 text-2xl uppercase">{pillar.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm text-[var(--color-nord-mist)]">{pillar.description}</p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">
                    Read more on the technology page
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
