import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-10">
        <HeroSection />
      </div>
      <TestimonialsSection />
      <div className="flex justify-center pb-12">
        <button
          onClick={() => navigate('/testimonials')}
          className="px-8 py-3 border border-gold/40 text-gold text-xs tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 hover:bg-gold hover:text-tech-dark"
        >
          More Testimonials →
        </button>
      </div>
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
