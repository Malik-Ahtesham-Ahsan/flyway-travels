"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/home";
import { siteConfig } from "@/data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/95 backdrop-blur-sm">
      <Container className="flex h-[74px] items-center justify-between gap-5">
        <Link href="#home" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-2.5" aria-label={`${siteConfig.name} home`}>
          <span className="grid size-9 place-items-center rounded-full bg-brand text-white"><Plane size={18} strokeWidth={2.2} /></span>
          <span className="font-display text-lg font-extrabold tracking-tight text-foreground">{siteConfig.shortName}<span className="text-accent">.</span><span className="ml-1 hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-muted sm:inline">Travels</span></span>
        </Link>
        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Main navigation">
          {homeContent.nav.links.map((link) => <Link key={link.href} href={link.href} className="whitespace-nowrap text-sm font-medium text-foreground/80 transition-colors hover:text-brand">{link.label}</Link>)}
          <Button href="#contact" className="min-h-10 px-4">{homeContent.nav.cta}</Button>
        </nav>
        <button type="button" className="grid size-11 shrink-0 place-items-center rounded-sm text-foreground hover:bg-surface lg:hidden" aria-label={homeContent.nav.menuLabel} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>
      {menuOpen && <nav className="border-t border-line bg-background lg:hidden" aria-label="Mobile navigation"><Container className="flex flex-col gap-1 py-3">{homeContent.nav.links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-sm px-3 py-3 text-sm font-medium hover:bg-surface">{link.label}</Link>)}<Button href="#contact" className="mt-2" >{homeContent.nav.cta}</Button></Container></nav>}
    </header>
  );
}