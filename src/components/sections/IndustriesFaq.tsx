"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What chemistry is right for my application?",
    answer:
      "That depends on energy density, duty cycle, thermal environment, fast-charge expectations, and lifecycle cost. We typically recommend NMC for range-led EV platforms, LFP for long-life stationary and telecom installations, and LTO when ultra-fast charging or harsh climates dominate.",
  },
  {
    question: "How do you handle regulatory certification?",
    answer:
      "We define the compliance pathway at the start of the project, align the design to the applicable standards, coordinate documentation, and support third-party testing so certification is built into development rather than treated as an afterthought.",
  },
  {
    question: "What is your minimum order quantity?",
    answer:
      "Prototype programs can start as low as 10 units for custom development. Production economics improve significantly from 100 units upward, but we scope that around your validation and ramp schedule.",
  },
  {
    question: "Can I see a performance demo before ordering?",
    answer:
      "Yes. Depending on the application, we can share test reports, arrange live technical reviews, or develop a pilot unit so your engineering team can validate performance under representative operating conditions.",
  },
  {
    question: "Do you offer a warranty and field support?",
    answer:
      "Every Nordische system includes a defined warranty program and application-level support. For fleet, infrastructure, and industrial deployments, we also provide remote diagnostics, lifecycle monitoring, and field troubleshooting guidance.",
  },
] as const;

export function IndustriesFaq() {
  return (
    <Accordion.Root className="space-y-4" collapsible type="single">
      {faqItems.map((item) => (
        <Accordion.Item
          key={item.question}
          className="rounded-2xl border border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] px-5"
          value={item.question}
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-[var(--color-nord-white)]">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-[var(--color-nord-teal)] transition data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-5 text-sm text-[var(--color-nord-mist)]">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
