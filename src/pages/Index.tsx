import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HistorySection from "@/components/HistorySection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import EssenceSection from "@/components/EssenceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <StatsSection />
    <HistorySection />
    <ServicesSection />
    <GallerySection />
    <EssenceSection />
    <TestimonialsSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
