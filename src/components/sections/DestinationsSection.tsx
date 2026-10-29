import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { homeContent } from "@/data/home";

export default function DestinationsSection() {
  const content = homeContent.destinations;
  return (
    <section id="destinations" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} /><Link href="#contact" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark">{content.viewAll}<ArrowUpRight size={16} /></Link></div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {content.items.map((item, index) => <Reveal key={item.name} delay={index * 0.07} className="group"><Link href="#contact" className="block"><div className="relative aspect-[4/5] overflow-hidden bg-[#dce7e2]"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-[#092b2b]/80 via-transparent to-transparent" /><span className="absolute left-4 top-4 bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-foreground">{item.tag}</span><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white"><div><h3 className="font-display text-2xl font-semibold">{item.name}</h3><p className="mt-1 text-sm text-white/80">{item.country}</p></div><span className="grid size-9 place-items-center rounded-full border border-white/60 transition-colors group-hover:bg-white group-hover:text-brand"><ArrowUpRight size={17} /></span></div></div></Link></Reveal>)}
        </div>
      </Container>
    </section>
  );
}