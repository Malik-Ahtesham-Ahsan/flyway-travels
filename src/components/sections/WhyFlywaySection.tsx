import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { homeContent } from "@/data/home";
import { siteConfig } from "@/data/site";

export default function WhyFlywaySection() {
  const content = homeContent.about;
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-xl"><div className="relative aspect-[5/4] overflow-hidden bg-[#dce7e2]"><Image src={content.image} alt={content.imageAlt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div><div className="absolute -bottom-4 right-3 max-w-[220px] bg-accent px-5 py-4 text-sm font-semibold leading-5 text-white shadow-md sm:-right-5 sm:bottom-8">{content.note}</div></Reveal>
        <Reveal delay={0.1}><p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-brand">{content.eyebrow}</p><h2 className="max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.8rem]">{content.title}</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted">{content.description}</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{siteConfig.stats.map((stat) => <div key={stat.label} className="flex items-center gap-2 text-sm font-semibold"><Check size={16} className="shrink-0 text-brand" />{stat.value} {stat.label}</div>)}</div><Button href="#contact" className="mt-8">{content.button}<ArrowRight size={16} /></Button></Reveal>
      </Container>
    </section>
  );
}