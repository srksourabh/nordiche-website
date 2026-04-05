import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Navbar } from "@/components/layout/Navbar";
import { StickyQuoteBar } from "@/components/layout/StickyQuoteBar";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = buildMetadata({
  title: "Advanced Battery Solutions for Europe",
  description: SITE.description,
  path: "/",
  keywords: ["battery manufacturer germany", "energy storage systems", "telecom battery backup"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`} lang="en">
      <body>
        <Navbar />
        <main className="overflow-hidden pt-20">{children}</main>
        <Footer />
        <FloatingCTA />
        <StickyQuoteBar />
      </body>
    </html>
  );
}
