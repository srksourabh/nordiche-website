import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

type LinkButtonProps = CommonProps &
  ComponentPropsWithoutRef<"a"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  ComponentPropsWithoutRef<"button"> & {
    href?: never;
  };

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-btn)] px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-nord-teal)]";

const variants = {
  primary: "bg-[var(--color-nord-teal)] text-[var(--color-nord-black)] hover:bg-[var(--color-nord-teal-dim)]",
  ghost:
    "border border-[var(--color-nord-teal)] bg-transparent text-[var(--color-nord-teal)] hover:bg-[color:rgb(0_212_170_/_0.08)]",
  outline:
    "border border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] text-[var(--color-nord-light)] hover:border-[var(--color-nord-teal)] hover:text-[var(--color-nord-white)]",
} as const;

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const classes = cn(baseClasses, variants[props.variant ?? "primary"], props.className);

  if ("href" in props && props.href) {
    const linkProps = props as LinkButtonProps;
    const { children, href, ...rest } = linkProps;
    delete (rest as Partial<LinkButtonProps>).variant;
    delete (rest as Partial<LinkButtonProps>).className;
    return (
      <a {...rest} className={classes} href={href}>
        {children}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;
  const { children, type, ...rest } = buttonProps;
  delete (rest as Partial<NativeButtonProps>).variant;
  delete (rest as Partial<NativeButtonProps>).className;
  return (
    <button
      {...rest}
      className={classes}
      type={type === "submit" || type === "reset" ? type : "button"}
    >
      {children}
    </button>
  );
}
