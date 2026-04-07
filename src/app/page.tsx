import { AboutSnapshot } from "@/components/sections/AboutSnapshot";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { Hero } from "@/components/sections/Hero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { ManufacturingStrip } from "@/components/sections/ManufacturingStrip";
import { ProductCards } from "@/components/sections/ProductCards";
import { TechDifferentiator } from "@/components/sections/TechDifferentiator";
import { TrustBar } from "@/components/sections/TrustBar";
import { buildMetadata } from "@/lib/metadata";
import { orgSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Advanced Battery Solutions for EV, Storage & Industry",
  description: SITE.description,
  path: "/",
  keywords: ["advanced battery solutions", "berlin battery manufacturer", "custom energy storage systems"],
});

export default function HomePage() {
  const jsonLd = orgSchema();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
      <Hero />
      <TrustBar />
      <AboutSnapshot />
      <ProductCards />
      <TechDifferentiator />
      <IndustriesGrid />
      <ManufacturingStrip />
      <CaseStudiesPreview />
      <BlogPreview />
      <LeadCapture />
    </>
  );
}
