import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TaglineBand from "@/components/TaglineBand";
import ClientsStrip from "@/components/ClientsStrip";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import AISection from "@/components/AISection";
import ProcuraShowcase from "@/components/ProcuraShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import WorksGallery from "@/components/WorksGallery";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CamacolSection from "@/components/CamacolSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TaglineBand />
        <ClientsStrip />
        <ProblemSection />
        <TaglineBand />
        <ServicesSection />
        <AISection />
        <ProcuraShowcase />
        <ProjectsSection />
        <WorksGallery />
        <TestimonialsSection />
        <AboutSection />
        <CamacolSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
