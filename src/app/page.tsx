import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyFlywaySection from "@/components/sections/WhyFlywaySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <DestinationsSection />
        <ServicesSection />
        <WhyFlywaySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
