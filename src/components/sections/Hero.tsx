"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BatteryCharging, Download } from "lucide-react";
import { INDIA_OFFICE, STATS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-80" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <Badge>Advanced Energy Storage Technology</Badge>
          <h1 className="mt-6 text-balance text-5xl font-extrabold uppercase leading-[0.92] text-[var(--color-nord-white)] sm:text-6xl xl:text-7xl">
            Energy Storage Systems for Grid, Mobility, Telecom and Industrial Power
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-nord-mist)] sm:text-xl">
            We now foreground the same signals customers immediately notice on the reference site: India-linked
            commercialization, safer non-flammable storage chemistry, and differentiated battery platforms for
            renewable energy, backup infrastructure, and industrial resilience.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.75)] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">India Presence</p>
              <p className="mt-2 text-sm text-[var(--color-nord-light)]">{INDIA_OFFICE.company}</p>
              <p className="text-sm text-[var(--color-nord-mist)]">{INDIA_OFFICE.city}</p>
            </div>
            <div className="rounded-2xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.75)] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">Highlighted Platforms</p>
              <p className="mt-2 text-sm text-[var(--color-nord-light)]">Aluminium-graphene and lead ultra-carbon energy storage</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button aria-label="Request a custom solution" href="/contact">
              Request a Custom Solution <ArrowRight className="h-4 w-4" />
            </Button>
            <Button aria-label="Download the product catalogue" href="/catalogue.pdf" variant="ghost">
              Download Product Catalogue <Download className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 border-t border-[var(--color-nord-slate)] pt-8 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`pr-4 ${index < STATS.length - 1 ? "lg:border-r lg:border-[var(--color-nord-slate)]" : ""}`}
              >
                <p className="font-[var(--font-display)] text-4xl font-extrabold text-[var(--color-nord-teal)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[var(--color-nord-mist)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:grid lg:gap-5"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.9)] p-4">
            <Image
              alt="Battery interior illustration"
              className="h-auto w-full rounded-[1.5rem]"
              height={720}
              priority
              src="/graphics/battery-interior.svg"
              width={960}
            />
            <div className="pointer-events-none absolute left-8 top-8 rounded-full border border-[var(--color-nord-slate)] bg-[color:rgb(10_12_16_/_0.88)] px-4 py-2 text-sm font-[var(--font-mono)] text-[var(--color-nord-teal)]">
              Battery interior
            </div>
            <div className="pointer-events-none absolute bottom-8 right-8 flex items-center gap-2 rounded-full border border-[var(--color-nord-slate)] bg-[color:rgb(10_12_16_/_0.88)] px-4 py-2 text-sm font-[var(--font-mono)] text-[var(--color-nord-teal)]">
              <BatteryCharging className="h-4 w-4" />
              Non-flammable storage focus
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "Bengaluru-linked business presence",
              "Faster charging emphasis",
              "Grid and telecom applications",
              "Safer chemistry storytelling",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.8)] px-4 py-4 text-sm text-[var(--color-nord-light)]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
