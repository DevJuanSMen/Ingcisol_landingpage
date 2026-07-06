import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TaglineBand from "@/components/TaglineBand";
import ClientsStrip from "@/components/ClientsStrip";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import VideoSection from "@/components/VideoSection";
import AISection from "@/components/AISection";
import ProcuraShowcase from "@/components/ProcuraShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectsMarquee from "@/components/ProjectsMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CamacolSection from "@/components/CamacolSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TaglineBand />
        <ClientsStrip />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <VideoSection />
        <AISection />
        <ProcuraShowcase />
        <ProjectsSection />
        <ProjectsMarquee />
        <TestimonialsSection />
        <AboutSection />
        <CamacolSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
