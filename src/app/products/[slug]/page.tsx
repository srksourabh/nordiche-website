import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PRODUCTS, SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { productSchema } from "@/lib/schema";
import { getIcon } from "@/lib/utils";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);
  if (!product) {
    return buildMetadata({
      title: "Product Not Found",
      description: SITE.description,
      path: "/products",
    });
  }

  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/products/${product.slug}`,
    keywords: [product.name.toLowerCase(), "battery datasheet", "battery specification"],
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const Icon = getIcon(product.icon);
  const jsonLd = productSchema({
    name: product.name,
    description: product.fullDescription,
    url: `${SITE.url}/products/${product.slug}`,
  });

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: product.name }]} />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Icon className="h-14 w-14" style={{ color: product.color }} />
            <h1 className="mt-6 text-5xl uppercase sm:text-6xl">{product.name}</h1>
            <p className="mt-4 text-lg uppercase tracking-[0.16em] text-[var(--color-nord-teal)]">{product.tagline}</p>
            <p className="mt-6 max-w-3xl text-lg text-[var(--color-nord-mist)]">{product.fullDescription}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button aria-label={`Request a quote for ${product.name}`} href="/contact">
                Request a Quote for {product.name} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button aria-label={`Download ${product.name} datasheet`} href="/catalogue.pdf" variant="ghost">
                Download Datasheet <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card className="p-7">
            <h2 className="text-3xl uppercase">Applications</h2>
            <ul className="mt-5 space-y-3 text-sm text-[var(--color-nord-light)]">
              {product.applications.map((application) => (
                <li key={application} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-nord-teal)]" />
                  {application}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Card className="p-8">
            <h2 className="text-4xl uppercase">Features</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex gap-3 rounded-2xl border border-[var(--color-nord-slate)] p-4 text-sm text-[var(--color-nord-light)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-nord-teal)]" />
                  {feature}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-8">
            <h2 className="text-4xl uppercase">Technical Specifications</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-nord-slate)]">
              <table className="w-full text-left text-sm">
                <tbody>
                  {product.specs.map((spec) => (
                    <tr key={spec.param} className="border-b border-[var(--color-nord-slate)] last:border-b-0">
                      <th className="px-4 py-4 text-[var(--color-nord-mist)]">{spec.param}</th>
                      <td className="px-4 py-4 text-[var(--color-nord-light)]">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className="mt-14">
          <h2 className="text-4xl uppercase">Related Products</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {PRODUCTS.filter((item) => item.slug !== product.slug).map((related) => (
              <Card key={related.slug} className="p-6">
                <h3 className="text-2xl uppercase">{related.name}</h3>
                <p className="mt-3 text-sm text-[var(--color-nord-mist)]">{related.shortDescription}</p>
                <Link
                  aria-label={`View ${related.name}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-nord-teal)]"
                  href={`/products/${related.slug}`}
                >
                  View Product <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
