import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-nord-slate)] bg-[color:rgb(0_212_170_/_0.08)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-nord-teal)]",
        className,
      )}
    />
  );
}
