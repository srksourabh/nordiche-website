import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PRODUCTS } from "@/lib/constants";
import { PRODUCT_IMAGE_MAP } from "@/lib/imagery";
import { buildMetadata } from "@/lib/metadata";
import { getIcon } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Battery Solutions for Every Application",
  description: "Explore Nordische battery systems for EVs, renewable storage, telecom backup, and custom industrial applications.",
  path: "/products",
  keywords: ["battery products", "ev battery modules", "custom battery packs"],
});

export default function ProductsPage() {
  return (
    <div>
      <PageHero
        label="Products"
        title="Battery Solutions for Every Application"
        description="We design around operational reality: duty cycle, footprint, safety regime, thermal profile, charging pattern, and compliance path."
        image="/images/hero-products.png"
      />

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-3">
            {PRODUCTS.map((product) => {
              const Icon = getIcon(product.icon);

              return (
                <Card key={product.slug} id={product.slug} className="h-full border-t-4 p-7" style={{ borderTopColor: product.color }}>
                  <div className="relative mb-6 overflow-hidden rounded-[1.5rem] border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)]">
                    <Image
                      alt={`${product.name} product render`}
                      className="h-64 w-full object-cover"
                      height={640}
                      loading="lazy"
                      src={PRODUCT_IMAGE_MAP[product.slug]}
                      width={960}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[color:rgb(10_12_16_/_0.82)] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 rounded-full border border-[color:rgb(0_212_170_/_0.24)] bg-[color:rgb(10_12_16_/_0.85)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-nord-teal)]">
                      Visualized product architecture
                    </div>
                  </div>

                  <Icon className="h-10 w-10" style={{ color: product.color }} />
                  <h2 className="mt-5 text-3xl uppercase">{product.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--color-nord-mist)]">{product.tagline}</p>
                  <p className="mt-4 text-sm text-[var(--color-nord-light)]">{product.fullDescription}</p>

                  <ul className="mt-6 space-y-2 text-sm text-[var(--color-nord-light)]">
                    {product.features.map((feature) => (
                      <li key={feature}>- {feature}</li>
                    ))}
                  </ul>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-nord-slate)]">
                    <table className="w-full text-left text-sm">
                      <tbody>
                        {product.specs.slice(0, 5).map((spec) => (
                          <tr key={spec.param} className="border-b border-[var(--color-nord-slate)] last:border-b-0">
                            <th className="px-4 py-3 font-medium text-[var(--color-nord-mist)]">{spec.param}</th>
                            <td className="px-4 py-3 text-[var(--color-nord-light)]">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-[var(--color-nord-teal)]">
                    {product.applications.map((application) => (
                      <span key={application} className="rounded-full border border-[var(--color-nord-slate)] px-3 py-1">
                        {application}
                      </span>
                    ))}
                  </div>

                  <Link
                    aria-label={`Request a quote for ${product.name}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                    href="/contact"
                  >
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Card>
              );
            })}
          </div>

          <SectionHeader className="mt-18" title="Quick Comparison" />
          <div className="overflow-x-auto rounded-2xl border border-[var(--color-nord-slate)]">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[var(--color-nord-deep)]">
                <tr>
                  <th className="px-4 py-4 text-[var(--color-nord-mist)]">Specification</th>
                  {PRODUCTS.map((product) => (
                    <th key={product.slug} className="px-4 py-4 text-[var(--color-nord-white)]">
                      {product.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["Chemistry", "Nominal Voltage", "Capacity Range", "Warranty"].map((label) => (
                  <tr key={label} className="border-t border-[var(--color-nord-slate)]">
                    <th className="px-4 py-4 text-[var(--color-nord-mist)]">{label}</th>
                    {PRODUCTS.map((product) => (
                      <td key={`${product.slug}-${label}`} className="px-4 py-4 text-[var(--color-nord-light)]">
                        {product.specs.find((spec) => spec.param === label)?.value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <LeadCapture
        description="Tell us what standard products are missing and we will map a custom solution around your application."
        title="Can't Find Your Specification?"
      />
    </div>
  );
}
