import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { homeContent } from "@/data/home";

export default function FaqSection() {
  const content = homeContent.faq;
  return (
    <section id="faq" className="py-20 sm:py-24 lg:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><SectionHeading eyebrow={content.eyebrow} title={content.title} /><div className="divide-y divide-line border-y border-line">{content.items.map((item) => <details key={item.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold marker:hidden"><span>{item.question}</span><ChevronDown size={18} className="shrink-0 text-brand transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pt-3 pr-8 text-sm leading-6 text-muted">{item.answer}</p></details>)}</div></Container>
    </section>
  );
}