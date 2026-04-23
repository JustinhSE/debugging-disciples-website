
import Navigation from '@/components/Navigation';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

const Join = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <JoinSection />
      </div>
      <Footer />
    </div>
  );
};

export default Join;
