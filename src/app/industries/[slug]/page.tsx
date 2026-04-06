import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { INDUSTRIES, PRODUCTS, CASE_STUDIES } from "@/lib/constants";
import { INDUSTRY_IMAGE_MAP } from "@/lib/imagery";
import { buildMetadata } from "@/lib/metadata";
import { getIcon } from "@/lib/utils";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);
  if (!industry) {
    return buildMetadata({ title: "Industry Not Found", description: "", path: "/industries" });
  }

  return buildMetadata({
    title: industry.name,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    keywords: [industry.name.toLowerCase(), "battery solutions", "industry-specific battery system"],
  });
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((item) => item.slug === slug);
  if (!industry) notFound();

  const relatedProducts =
    industry.slug === "electric-vehicles"
      ? PRODUCTS.filter((product) => product.slug !== "custom-battery-solutions")
      : industry.slug === "renewable-energy"
        ? PRODUCTS.filter((product) => product.slug !== "ev-battery-modules")
        : PRODUCTS.filter((product) => product.slug !== "ev-battery-modules").slice(0, 2);

  const study = CASE_STUDIES.find((item) => item.industry === industry.name);
  const Icon = getIcon(industry.icon);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: industry.name }]} />
        {INDUSTRY_IMAGE_MAP[industry.slug as keyof typeof INDUSTRY_IMAGE_MAP] ? (
          <div className="mb-10 overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)]">
            <Image
              alt={industry.name}
              className="h-72 w-full object-cover"
              height={432}
              src={INDUSTRY_IMAGE_MAP[industry.slug as keyof typeof INDUSTRY_IMAGE_MAP]}
              width={1280}
            />
          </div>
        ) : null}
        <Icon className="h-12 w-12 text-[var(--color-nord-teal)]" />
        <h1 className="mt-5 text-5xl uppercase sm:text-6xl">{industry.name}</h1>
        <p className="mt-4 text-lg uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">{industry.headline}</p>
        <p className="mt-6 max-w-4xl text-lg text-[var(--color-nord-mist)]">{industry.description}</p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Card className="p-8">
            <h2 className="text-4xl uppercase">Pain Points</h2>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-nord-light)]">
              {industry.painPoints.map((item) => (
                <li key={item} className="rounded-2xl border border-[var(--color-nord-slate)] p-4">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-8">
            <h2 className="text-4xl uppercase">Our Answer</h2>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-nord-light)]">
              {industry.ourAnswer.map((item) => (
                <li key={item} className="rounded-2xl border border-[color:rgb(0_212_170_/_0.18)] bg-[color:rgb(0_212_170_/_0.05)] p-4">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {relatedProducts.map((product) => (
            <Card key={product.slug} className="p-6">
              <h3 className="text-2xl uppercase">{product.name}</h3>
              <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{product.shortDescription}</p>
              <Link
                aria-label={`Open ${product.name}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                href={`/products#${product.slug}`}
              >
                View Product <ArrowRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>

        {study ? (
          <Card className="mt-14 p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">Relevant Case Study</p>
            <h2 className="mt-4 text-4xl uppercase">{study.title}</h2>
            <p className="mt-4 text-[var(--color-nord-mist)]">{study.solution}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {study.results.map((result) => (
                <li key={result} className="rounded-2xl border border-[var(--color-nord-slate)] p-4 text-sm text-[var(--color-nord-light)]">
                  {result}
                </li>
              ))}
            </ul>
          </Card>
        ) : null}

        <Card className="mt-14 flex flex-col gap-5 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl uppercase">Technical Requirements Checklist</h2>
            <p className="mt-3 text-[var(--color-nord-mist)]">
              Share your performance target, installation envelope, cycle expectations, thermal range, and compliance needs.
            </p>
          </div>
          <Link
            aria-label="Request an industry-specific solution"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
            href="/contact"
          >
            Request Industry-Specific Solution <ArrowRight className="h-4 w-4" />
          </Link>
        </Card>
      </div>
    </div>
  );
}
