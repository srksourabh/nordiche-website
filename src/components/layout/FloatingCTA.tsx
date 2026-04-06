"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { toWhatsAppHref } from "@/lib/utils";

export function FloatingCTA() {
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
    </div>
  );
}
