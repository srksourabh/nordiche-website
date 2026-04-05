"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { toWhatsAppHref } from "@/lib/utils";

export function FloatingCTA() {
  const [showDesktopQuote, setShowDesktopQuote] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowDesktopQuote(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
      <div className="group relative">
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 rounded-full border border-[var(--color-nord-slate)] bg-[color:rgb(10_12_16_/_0.96)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--color-nord-light)] opacity-0 transition group-hover:opacity-100 lg:block">
          Chat on WhatsApp
        </span>
        <a
          aria-label="Chat with Nordische Energy on WhatsApp"
          className="wa-btn inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[var(--color-nord-black)] shadow-[0_10px_30px_rgb(37_211_102_/_0.28)]"
          href={toWhatsAppHref(SITE.whatsapp)}
          rel="noreferrer"
          target="_blank"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      <div className={`group relative ${showDesktopQuote ? "lg:block" : "lg:hidden"} block`}>
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 rounded-full border border-[var(--color-nord-slate)] bg-[color:rgb(10_12_16_/_0.96)] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[var(--color-nord-light)] opacity-0 transition group-hover:opacity-100 lg:block">
          Get Quote
        </span>
        <Button aria-label="Get a quote" className="shadow-[0_10px_30px_rgb(0_212_170_/_0.22)]" href="/contact">
          Get Quote <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
