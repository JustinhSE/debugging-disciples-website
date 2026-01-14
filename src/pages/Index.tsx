import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CompaniesSection from "@/components/CompaniesSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-5">
        <HeroSection />
      </div>
      <TestimonialsSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
