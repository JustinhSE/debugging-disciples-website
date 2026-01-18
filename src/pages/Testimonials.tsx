
import Navigation from '@/components/Navigation';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import VideoTestimonials from '@/components/VideoTestimonials';
import { Video } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <TestimonialsSection />
        <div className="my-10 border-t border-white/10 "></div>
        <div className="mb-6">
          <VideoTestimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
