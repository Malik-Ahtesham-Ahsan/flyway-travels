"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import { homeContent } from "@/data/home";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);
  return (
    <footer className="bg-[#123b3a] text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:py-16">
        <div>
          <Link href="#home" className="inline-flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-full bg-white text-brand"><Plane size={18} /></span><span className="font-display text-lg font-extrabold">{siteConfig.shortName}<span className="text-accent">.</span></span></Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">{homeContent.footer.tagline}</p>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-[#a7ddd0]">{homeContent.footer.explore}</h2>
          <div className="mt-4 flex flex-col items-start gap-3">{homeContent.nav.links.map((link) => <Link className="text-sm text-white/75 hover:text-white" key={link.href} href={link.href}>{link.label}</Link>)}</div>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-[#a7ddd0]">{homeContent.footer.contact}</h2>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/75"><a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-white">{siteConfig.phone}</a><span>{siteConfig.hours}</span></div>
          <div className="mt-5 flex gap-4">{siteConfig.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-[#a7ddd0]">{social.label}<ArrowUpRight size={12} /></a>)}</div>
        </div>
      </Container>
      <div className="border-t border-white/15"><Container className="flex min-h-14 flex-col justify-center gap-3 py-4 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between"><p>{homeContent.footer.legal.replace("{year}", String(year))}</p><div className="flex flex-wrap gap-4">{homeContent.footer.policies.map((policy) => <Link key={policy.href} href={policy.href} className="hover:text-white">{policy.label}</Link>)}</div></Container></div>
    </footer>
  );
}