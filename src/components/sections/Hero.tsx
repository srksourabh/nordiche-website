"use client";

import { motion } from "framer-motion";
import { ArrowRight, BatteryCharging, Download } from "lucide-react";
import { STATS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen overflow-hidden">
      <div className="grid-texture absolute inset-0 opacity-80" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <Badge>Advanced Battery Technology</Badge>
          <h1 className="mt-6 text-balance text-5xl font-extrabold uppercase leading-[0.92] text-[var(--color-nord-white)] sm:text-6xl xl:text-7xl">
            Advanced Battery Solutions for EV, Energy Storage &amp; Industrial Applications
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-nord-mist)] sm:text-xl">
            High-performance lithium battery systems engineered for safety, longevity, and efficiency.
            Trusted by OEMs, fleet operators, and energy developers across Europe.
          </p>
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
          className="relative hidden lg:flex lg:justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            className="relative flex h-[34rem] w-[34rem] items-center justify-center rounded-full border border-[color:rgb(0_212_170_/_0.15)]"
          >
            {[1, 2, 3].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-[24px] border border-[color:rgb(0_212_170_/_0.18)]"
                style={{
                  width: `${12 + ring * 5}rem`,
                  height: `${12 + ring * 5}rem`,
                  transform: `rotate(${ring * 15}deg)`,
                }}
              />
            ))}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="z-10 flex h-28 w-28 items-center justify-center rounded-3xl border border-[color:rgb(0_212_170_/_0.35)] bg-[color:rgb(0_212_170_/_0.08)]"
            >
              <BatteryCharging className="h-12 w-12 text-[var(--color-nord-teal)]" />
            </motion.div>
            {[
              { label: "280 Wh/kg", top: "8%", left: "50%" },
              { label: "3000+ Cycles", top: "50%", left: "10%" },
              { label: "IP67", top: "78%", left: "48%" },
              { label: "ISO 9001", top: "50%", left: "76%" },
            ].map((item) => (
              <div
                key={item.label}
                className="absolute rounded-full border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.92)] px-4 py-2 font-[var(--font-mono)] text-sm text-[var(--color-nord-teal)]"
                style={{ top: item.top, left: item.left }}
              >
                {item.label}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
