import { ArrowRight } from "lucide-react";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ABOUT_CONTENT, INDIA_OFFICE } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Nordische Energy",
  description: ABOUT_CONTENT.story[0],
  path: "/about",
  keywords: ["about battery manufacturer", "battery engineering team berlin", "energy storage company germany"],
});

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-nord-teal)]">About</p>
          <h1 className="mt-4 text-5xl uppercase sm:text-6xl">About Nordische Energy</h1>
          <p className="mt-6 max-w-3xl text-lg text-[var(--color-nord-mist)]">{ABOUT_CONTENT.mission}</p>
        </div>
      </section>

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Company Story" />
          <div className="grid gap-6 lg:grid-cols-2">
            {ABOUT_CONTENT.story.map((paragraph) => (
              <Card key={paragraph} className="p-6 text-[var(--color-nord-light)]">
                {paragraph}
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              { target: 45, suffix: "", label: "Engineers & Technicians" },
              { target: 200, suffix: "+", label: "Systems Deployed" },
              { target: 15, suffix: " MWh", label: "Installed Capacity" },
              { target: 12, suffix: "%", label: "Revenue Invested in R&D" },
            ].map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <AnimatedCounter suffix={stat.suffix} target={stat.target} />
                <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--color-nord-mist)]">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-nord-deep)] py-[var(--section-py)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Card className="p-8">
            <p className="text-7xl leading-none text-[color:rgb(0_212_170_/_0.22)]">“</p>
            <h2 className="mt-4 text-4xl uppercase">Vision</h2>
            <p className="mt-4 text-[var(--color-nord-light)]">{ABOUT_CONTENT.vision}</p>
          </Card>
          <Card className="p-8">
            <p className="text-7xl leading-none text-[color:rgb(0_212_170_/_0.22)]">“</p>
            <h2 className="mt-4 text-4xl uppercase">Mission</h2>
            <p className="mt-4 text-[var(--color-nord-light)]">{ABOUT_CONTENT.mission}</p>
          </Card>
        </div>
      </section>

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Core Values" />
          <div className="grid gap-5 sm:grid-cols-2">
            {ABOUT_CONTENT.values.map((value) => (
              <Card key={value.title} className="p-6">
                <h3 className="text-2xl uppercase">{value.title}</h3>
                <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{value.description}</p>
              </Card>
            ))}
          </div>

          <SectionHeader className="mt-18" title="Leadership Team" />
          <div className="grid gap-5 lg:grid-cols-4">
            {ABOUT_CONTENT.team.map((member) => (
              <Card key={member.name} className="p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:rgb(0_212_170_/_0.08)] font-[var(--font-display)] text-2xl font-extrabold text-[var(--color-nord-teal)]">
                  {member.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3 className="mt-5 text-2xl uppercase">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">{member.role}</p>
                <p className="mt-4 text-sm text-[var(--color-nord-mist)]">{member.bio}</p>
              </Card>
            ))}
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <Card className="grid gap-5 p-8 sm:grid-cols-3">
              <div>
                <p className="stat-number">4,200 m²</p>
                <p className="mt-2 text-sm text-[var(--color-nord-mist)]">Manufacturing footprint in Berlin</p>
              </div>
              <div>
                <p className="stat-number">127</p>
                <p className="mt-2 text-sm text-[var(--color-nord-mist)]">Quality checkpoints per system</p>
              </div>
              <div>
                <p className="stat-number">24h</p>
                <p className="mt-2 text-sm text-[var(--color-nord-mist)]">Engineering response time</p>
              </div>
            </Card>
            <Button aria-label="Visit the manufacturing page" href="/manufacturing">
              Tour Manufacturing <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <Card className="mt-8 p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">India Highlight</p>
            <h3 className="mt-3 text-3xl uppercase">{INDIA_OFFICE.company}</h3>
            <p className="mt-3 text-[var(--color-nord-light)]">{INDIA_OFFICE.summary}</p>
            <p className="mt-2 text-sm text-[var(--color-nord-mist)]">{INDIA_OFFICE.city}</p>
          </Card>
        </div>
      </section>

      <LeadCapture title="Work With Our Team" description="Bring us your performance targets, installation constraints, and certification requirements." />
    </div>
  );
}
