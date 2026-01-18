import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CompaniesSection from "@/components/CompaniesSection";
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
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate('/testimonials')}
            className="px-8 py-3 bg-tech-accent hover:bg-tech-accent/80 text-white font-semibold rounded-lg transition-colors"
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
