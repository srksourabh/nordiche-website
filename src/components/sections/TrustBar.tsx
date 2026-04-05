"use client";

import { motion } from "framer-motion";
import { TRUST_ITEMS } from "@/lib/constants";
import { getIcon } from "@/lib/utils";

export function TrustBar() {
  return (
    <section className="border-t-2 border-[var(--color-nord-teal)] bg-[var(--color-nord-steel)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex gap-4 overflow-x-auto pb-2 lg:flex-1 lg:justify-between lg:pb-0">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex min-w-max items-center gap-3 text-sm text-[var(--color-nord-light)]"
              >
                <span className="rounded-full bg-[color:rgb(0_212_170_/_0.08)] p-2 text-[var(--color-nord-teal)]">
                  <Icon className="h-4 w-4" />
                </span>
                {item.label}
              </motion.div>
            );
          })}
        </div>
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-nord-mist)]">
          ISO 9001:2015 | CE | IEC 62619 | UN38.3 | RoHS
        </p>
      </div>
    </section>
  );
}
