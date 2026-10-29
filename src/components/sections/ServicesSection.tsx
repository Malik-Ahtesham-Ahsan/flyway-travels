import { Compass, Plane, Sparkles, Users, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { homeContent } from "@/data/home";

const icons: Record<string, LucideIcon> = { sparkles: Sparkles, plane: Plane, users: Users, compass: Compass };

export default function ServicesSection() {
  const content = homeContent.services;
  return (
    <section id="services" className="bg-surface py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="mt-11 grid border-l border-t border-line sm:grid-cols-2 lg:mt-14">
          {content.items.map((item, index) => {
            const Icon = icons[item.icon];
            return <Reveal key={item.number} delay={index * 0.06} className="border-b border-r border-line bg-white/50 p-6 sm:p-8 lg:p-10"><div className="flex items-start justify-between"><span className="font-display text-xs font-bold text-accent">{item.number}</span><Icon size={23} strokeWidth={1.7} className="text-brand" /></div><h3 className="mt-8 font-display text-xl font-bold">{item.title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-muted">{item.description}</p><Link href="#contact" aria-label={`${item.title}: enquire`} className="mt-5 inline-grid size-9 place-items-center rounded-full border border-line text-brand transition-colors hover:bg-brand hover:text-white"><ArrowUpRight size={16} /></Link></Reveal>;
          })}
        </div>
      </Container>
    </section>
  );
}