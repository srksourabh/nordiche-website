"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MANUFACTURING_CONTENT } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export function ManufacturingStrip() {
  return (
    <section className="bg-[var(--color-nord-deep)] py-[var(--section-py)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-nord-teal)]">
            Manufacturing
          </p>
          <h2 className="mt-4 text-4xl uppercase sm:text-5xl">{MANUFACTURING_CONTENT.headline}</h2>
          <p className="mt-6 text-lg text-[var(--color-nord-mist)]">
            Our manufacturing facility in Berlin spans 4,200 m² and operates under ISO 9001:2015 quality
            management. Dry-room assembly, automated cell grading, and computer-controlled formation cycling
            ensure that every unit meets specification before shipment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <ol className="space-y-4">
            {MANUFACTURING_CONTENT.capabilities.slice(0, 3).map((item, index) => (
              <li key={item.title} className="flex gap-4 border-b border-[var(--color-nord-slate)] pb-4">
                <span className="font-[var(--font-display)] text-3xl text-[var(--color-nord-teal)]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-nord-mist)]">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            {MANUFACTURING_CONTENT.certifications.map((cert) => (
              <Badge key={cert} className="tracking-[0.08em]">
                {cert}
              </Badge>
            ))}
          </div>
          <Link
            aria-label="Tour the Nordische Energy manufacturing page"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
            href="/manufacturing"
          >
            Tour Our Manufacturing <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
