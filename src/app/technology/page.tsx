import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ENERGY_STORAGE_HIGHLIGHTS, TECH_PILLARS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { getIcon } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Advanced Battery Technology",
  description: "Discover the engineering pillars, battery management architecture, chemistry strategy, and safety systems behind Nordische battery systems.",
  path: "/technology",
  keywords: ["battery technology", "battery management system", "nmc vs lfp", "battery safety systems"],
});

export default function TechnologyPage() {
  return (
    <div>
      <section className="border-b border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-nord-teal)]">Technology</p>
          <h1 className="mt-4 text-5xl uppercase sm:text-6xl">Advanced Battery Technology</h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--color-nord-mist)]">
            Performance starts long before pack assembly. It begins with chemistry choice, thermal pathways,
            firmware logic, and the practical storage-story emphasis that customers now expect to see clearly:
            safer materials, stronger charge behavior, and energy storage options that suit real infrastructure.
          </p>
        </div>
      </section>

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Six Engineering Pillars" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {TECH_PILLARS.map((pillar) => {
              const Icon = getIcon(pillar.icon);
              return (
                <Card key={pillar.title} className="p-7">
                  <Icon className="h-8 w-8 text-[var(--color-nord-teal)]" />
                  <p className="mt-5 font-[var(--font-mono)] text-3xl text-[var(--color-nord-teal)]">{pillar.stat}</p>
                  <h2 className="mt-4 text-3xl uppercase">{pillar.title}</h2>
                  <p className="mt-4 text-sm text-[var(--color-nord-mist)]">{pillar.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <Card className="p-8">
              <h2 className="text-4xl uppercase">BMS Deep Dive</h2>
              <p className="mt-4 text-[var(--color-nord-light)]">
                A Battery Management System continuously measures voltage, current, temperature, insulation state,
                and cell balance. At Nordische, the BMS does more than protect. It predicts, calibrates, and informs.
                Kalman-filter SOC estimation, SOH forecasting, and event logging support smarter charging strategies,
                warranty analysis, and fleet-level optimization.
              </p>
              <div className="mt-6 rounded-2xl border border-[var(--color-nord-slate)] p-6">
                <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="rounded-2xl border border-[var(--color-nord-slate)] p-4 text-center">Cell Array</div>
                  <div className="font-[var(--font-mono)] text-center text-[var(--color-nord-teal)]">48 monitored parameters</div>
                  <div className="rounded-2xl border border-[var(--color-nord-slate)] p-4 text-center">Nordische BMS</div>
                </div>
                <div className="mt-4 rounded-2xl border border-dashed border-[var(--color-nord-teal)] p-4 text-center font-[var(--font-mono)] text-sm text-[var(--color-nord-teal)]">
                  CAN 2.0B / CANopen / Modbus / RS485 / Optional cloud telemetry
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-4xl uppercase">7-Layer Protection Stack</h2>
              <ul className="mt-5 space-y-3 text-sm text-[var(--color-nord-light)]">
                {[
                  "Overcurrent detection",
                  "Overvoltage cut-off",
                  "Undervoltage protection",
                  "Over-temperature shutdown",
                  "Short-circuit isolation",
                  "Cell imbalance management",
                  "Isolation fault detection",
                ].map((item) => (
                  <li key={item} className="rounded-2xl border border-[var(--color-nord-slate)] px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-[var(--color-nord-mist)]">
                Thermal runaway containment and protective logic are validated against IEC 62619 expectations for
                industrial and stationary systems.
              </p>
            </Card>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <Card className="p-8">
              <h2 className="text-4xl uppercase">Energy Storage Platforms</h2>
              <p className="mt-4 text-[var(--color-nord-light)]">
                The reference site strongly emphasizes differentiated storage chemistry. We now surface that same
                message here with clearer focus on aluminium-graphene and lead ultra-carbon platforms.
              </p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-nord-slate)]">
                <Image
                  alt="Energy storage platform comparison graphic"
                  className="h-auto w-full"
                  height={720}
                  src="/graphics/energy-storage-platforms.svg"
                  width={960}
                />
              </div>
              <div className="mt-6 grid gap-4">
                {ENERGY_STORAGE_HIGHLIGHTS.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-[var(--color-nord-slate)] p-5">
                    <h3 className="text-2xl uppercase">{item.title}</h3>
                    <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{item.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-[var(--color-nord-slate)] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[var(--color-nord-teal)]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-8">
              <h2 className="text-4xl uppercase">Chemistry Comparison</h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-nord-slate)]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[var(--color-nord-deep)]">
                    <tr>
                      <th className="px-4 py-4 text-[var(--color-nord-mist)]">Chemistry</th>
                      <th className="px-4 py-4 text-[var(--color-nord-mist)]">Best For</th>
                      <th className="px-4 py-4 text-[var(--color-nord-mist)]">Trade-off</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["NMC", "High-energy EVs and mobile platforms", "Higher thermal control requirements"],
                      ["LFP", "Stationary storage and telecom backup", "Lower energy density"],
                      ["LTO", "Extreme fast charge and harsh climates", "Higher cost per kWh"],
                    ].map(([chemistry, useCase, tradeoff]) => (
                      <tr key={chemistry} className="border-t border-[var(--color-nord-slate)]">
                        <td className="px-4 py-4 text-[var(--color-nord-white)]">{chemistry}</td>
                        <td className="px-4 py-4 text-[var(--color-nord-light)]">{useCase}</td>
                        <td className="px-4 py-4 text-[var(--color-nord-light)]">{tradeoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 text-sm text-[var(--color-nord-mist)]">
                Decision guide: prioritize NMC for vehicle range, LFP for lifetime economics, and LTO where rapid
                charge acceptance or extreme temperature resilience dominates the brief.
              </p>
            </Card>

            <Card className="p-8">
              <h2 className="text-4xl uppercase">Our R&amp;D Investment</h2>
              <p className="mt-4 text-[var(--color-nord-light)]">
                We allocate 12% of annual revenue to research and validation. That funds in-house thermal chambers,
                vibration rigs, firmware benches, and accelerated aging campaigns that de-risk client deployments.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-nord-light)]">
                <li>• In-house testing and prototyping</li>
                <li>• Rapid firmware iteration on NXP and STM32 platforms</li>
                <li>• Patent portfolio focused on integration and thermal control</li>
              </ul>
              <a
                aria-label="Talk to Nordische Energy engineers"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                href="/contact"
              >
                Talk to Our Engineers
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
