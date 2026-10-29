import { Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { homeContent } from "@/data/home";
import { siteConfig } from "@/data/site";

export default function ContactSection() {
  const content = homeContent.contact;
  return (
    <section id="contact" className="bg-[#123b3a] py-20 sm:py-24 lg:py-28">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} light /><div className="mt-8 grid gap-4 text-sm text-white/85"><a className="inline-flex items-center gap-3 hover:text-white" href={`mailto:${siteConfig.email}`}><Mail size={17} className="text-[#a7ddd0]" />{siteConfig.email}</a><a className="inline-flex items-center gap-3 hover:text-white" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}><Phone size={17} className="text-[#a7ddd0]" />{siteConfig.phone}</a><p className="inline-flex items-center gap-3"><MapPin size={17} className="text-[#a7ddd0]" />{siteConfig.address}</p><p className="pl-8 text-xs text-white/60">{siteConfig.hours}</p></div></div><EnquiryForm /></Container>
    </section>
  );
}