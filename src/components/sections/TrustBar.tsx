"use client";

import { getIcon } from "@/lib/utils";

const allItems = [
  { label: "India R&D and Global Outreach", icon: "factory", type: "feature" as const },
  { label: "Non-Flammable Storage Chemistry", icon: "shield", type: "feature" as const },
  { label: "Commercialization-Ready Platforms", icon: "workflow", type: "feature" as const },
  { label: "Grid to Mobility Applications", icon: "bolt", type: "feature" as const },
  { label: "Recyclable Material Focus", icon: "leaf", type: "feature" as const },
  { label: "ISO 9001:2015", icon: "certificate", type: "cert" as const },
  { label: "CE Marking", icon: "checkCircle", type: "cert" as const },
  { label: "RoHS Compliant", icon: "layers", type: "cert" as const },
  { label: "REACH Certified", icon: "thermometer", type: "cert" as const },
  { label: "UN38.3 Tested", icon: "battery", type: "cert" as const },
  { label: "IEC 62619 Compliant", icon: "cpu", type: "cert" as const },
  { label: "150 Wh/kg Energy Density", icon: "zap", type: "feature" as const },
  { label: "3000+ Cycle Life", icon: "refreshCw", type: "feature" as const },
  { label: "Berlin & Bengaluru", icon: "mapPin", type: "feature" as const },
  { label: "Up to 10C Fast Charging", icon: "arrowRight", type: "feature" as const },
  { label: ">90% Recyclable", icon: "check", type: "feature" as const },
  { label: "5 Technology Verticals", icon: "atom", type: "feature" as const },
  { label: "Hydrogen & Seawater Mining", icon: "droplets", type: "feature" as const },
];

function MarqueeItem({ label, icon, type }: { label: string; icon: string; type: "feature" | "cert" }) {
  const Icon = getIcon(icon);
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.7)] px-5 py-3 backdrop-blur-sm">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          type === "cert"
            ? "bg-[color:rgb(245_166_35_/_0.12)] text-[var(--color-nord-amber)]"
            : "bg-[color:rgb(0_212_170_/_0.12)] text-[var(--color-nord-teal)]"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="whitespace-nowrap text-sm font-medium uppercase tracking-[0.1em] text-[var(--color-nord-light)]">
        {label}
      </span>
    </div>
  );
}

export function TrustBar() {
  const doubled = [...allItems, ...allItems];

  return (
    <section className="relative overflow-hidden border-y border-[var(--color-nord-slate)] bg-[var(--color-nord-steel)] py-5">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-nord-steel)] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-nord-steel)] to-transparent" />

      {/* Scrolling marquee */}
      <div className="marquee-track flex gap-4">
        {doubled.map((item, i) => (
          <MarqueeItem key={`${item.label}-${i}`} icon={item.icon} label={item.label} type={item.type} />
        ))}
      </div>
    </section>
  );
}
