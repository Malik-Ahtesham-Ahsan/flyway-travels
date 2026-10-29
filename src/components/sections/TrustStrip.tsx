import { HeartHandshake, Sparkles, Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import { homeContent } from "@/data/home";

const icons = [HeartHandshake, Sparkles, Compass];

export default function TrustStrip() {
  return (
    <section aria-label={homeContent.trust.title} className="border-b border-line bg-white">
      <Container className="grid gap-7 py-8 sm:grid-cols-3 sm:gap-5 sm:py-9">
        {homeContent.trust.items.map((item, index) => {
          const Icon = icons[index];
          return <div key={item.title} className="flex items-start gap-3.5 sm:border-r sm:border-line sm:pr-4 last:sm:border-0"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#e6f1eb] text-brand"><Icon size={19} /></span><div><h2 className="font-display text-sm font-bold">{item.title}</h2><p className="mt-1 text-sm leading-5 text-muted">{item.description}</p></div></div>;
        })}
      </Container>
    </section>
  );
}