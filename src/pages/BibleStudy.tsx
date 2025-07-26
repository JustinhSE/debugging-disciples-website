
import Navigation from '@/components/Navigation';
import BibleStudySection from '@/components/BibleStudySection';
import Footer from '@/components/Footer';

const BibleStudy = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-15">
        <BibleStudySection />
      </div>
      <Footer />
    </div>
  );
};

export default BibleStudy;
