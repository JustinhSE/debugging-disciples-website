import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { Path } from "@/components/Path";

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <HeroSection />
      </div>
      <Path />
      <TestimonialsSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
