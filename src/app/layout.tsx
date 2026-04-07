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

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Advanced Battery Solutions for Europe",
    description: SITE.description,
    path: "/",
    keywords: ["battery manufacturer germany", "energy storage systems", "telecom battery backup"],
  }),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

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
