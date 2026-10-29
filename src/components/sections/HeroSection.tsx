import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { homeContent } from "@/data/home";

export default function HeroSection() {
  const content = homeContent.hero;
  return (
    <section id="home" className="relative isolate min-h-[660px] overflow-hidden bg-[#174645] text-white sm:min-h-[700px]">
      <Image src={content.image} alt={content.imageAlt} fill preload className="hero-image -z-20 object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,43,43,0.88)_0%,rgba(9,43,43,0.66)_45%,rgba(9,43,43,0.13)_100%)]" />
      <Container className="flex min-h-[660px] flex-col justify-center py-16 sm:min-h-[700px] sm:py-20">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#c2e5d8]"><span className="h-px w-8 bg-accent" />{content.eyebrow}</p>
          <h1 className="whitespace-pre-line font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-[5.4rem]">{content.title}</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{content.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#contact" variant="light">{content.primaryCta}<ArrowRight size={16} /></Button>
            <Link href="#destinations" className="inline-flex min-h-12 items-center gap-2 px-3 text-sm font-semibold text-white transition-colors hover:text-[#c2e5d8]">{content.secondaryCta}<ArrowDown size={15} /></Link>
          </div>
        </div>
        <div className="mt-14 flex w-fit max-w-full items-center gap-3 border-l-2 border-accent bg-[#123b3a]/65 px-4 py-3 backdrop-blur-sm sm:absolute sm:bottom-12 sm:right-10 sm:mt-0 sm:max-w-xs lg:right-[max(calc((100vw-80rem)/2+2.5rem),2.5rem)]">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15"><MapPin size={17} /></span>
          <p className="text-xs font-medium leading-5 text-white/90">{content.note}</p>
        </div>
      </Container>
    </section>
  );
}