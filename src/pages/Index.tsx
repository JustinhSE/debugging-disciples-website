
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
