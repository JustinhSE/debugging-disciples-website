
import Navigation from '@/components/Navigation';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
