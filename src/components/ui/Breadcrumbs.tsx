import Link from "next/link";
import type { Route } from "next";
import { ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: Route;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-[var(--color-nord-mist)]">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
          {item.href ? (
            <Link aria-label={`Navigate to ${item.label}`} className="hover:text-[var(--color-nord-teal)]" href={item.href}>
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--color-nord-light)]">{item.label}</span>
          )}
          {index < items.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
        </span>
      ))}
    </nav>
  );
}
