import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; href: string; variant?: "primary" | "light"; className?: string };

export default function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const styles = variant === "primary"
    ? "bg-brand text-white hover:bg-brand-dark"
    : "bg-white text-foreground hover:bg-surface";
  return <Link href={href} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold transition-colors ${styles} ${className}`}>{children}</Link>;
}