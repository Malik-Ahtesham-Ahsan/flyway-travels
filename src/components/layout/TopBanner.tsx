import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { homeContent } from "@/data/home";

export default function TopBanner() {
  return (
    <div className="bg-brand text-white">
      <Container className="flex min-h-9 items-center justify-center gap-2 text-center text-xs font-medium">
        <span>{homeContent.banner}</span><ArrowUpRight aria-hidden="true" size={13} />
      </Container>
    </div>
  );
}