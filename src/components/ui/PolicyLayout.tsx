import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import type { ReactNode } from "react";

export default function PolicyLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-line bg-white">
        <Container className="flex min-h-16 items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark">
            <ArrowLeft size={16} />Back to home
          </Link>
        </Container>
      </div>
      <Container className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-muted">Last Updated: {updated}</p>
          <div className="mt-10 space-y-8 text-base leading-7 text-foreground/85 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_p]:mt-3 [&_ul]:mt-3">
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}
