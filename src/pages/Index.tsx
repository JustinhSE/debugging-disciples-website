
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BibleStudySection from '@/components/BibleStudySection';
import PlaylistSection from '@/components/PlaylistSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BibleStudySection />
      <PlaylistSection />
      <TestimonialsSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
