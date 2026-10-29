import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { homeContent } from "@/data/home";

export default function WhatsAppButton() {
  const phone = siteConfig.phone.replace(/\D/g, "");
  const message = encodeURIComponent(siteConfig.whatsappMessage);
  return <Link href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noreferrer" aria-label={homeContent.footer.whatsappLabel} className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#1fae69] text-white shadow-lg transition-transform hover:scale-105"><MessageCircle size={24} /></Link>;
}