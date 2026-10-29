import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { homeContent } from "@/data/home";

export default function TestimonialsSection() {
  const content = homeContent.testimonials;
  return (
    <section className="bg-[#e9f1eb] py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} align="center" />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">{content.items.map((item, index) => <Reveal key={item.name} delay={index * 0.08} className="flex min-h-[250px] flex-col bg-white p-6 sm:p-7"><div className="flex gap-1 text-accent" aria-label="5 out of 5 stars">{Array.from({ length: 5 }, (_, star) => <Star key={star} size={14} fill="currentColor" />)}</div><blockquote className="mt-5 flex-1 font-display text-base font-medium leading-7 text-foreground">“{item.quote}”</blockquote><div className="mt-6 border-t border-line pt-4"><p className="text-sm font-bold">{item.name}</p><p className="mt-1 text-xs text-muted">{item.detail}</p></div></Reveal>)}</div>
      </Container>
    </section>
  );
}