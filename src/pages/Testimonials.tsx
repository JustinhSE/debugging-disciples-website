import Navigation from '@/components/Navigation';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import VideoTestimonials from '@/components/VideoTestimonials';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <TestimonialsSection />
        <VideoTestimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
