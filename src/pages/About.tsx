
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import CompaniesSection from '@/components/CompaniesSection';

const About = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-15">
        <AboutSection />
      </div>
      <div >
        {/* <CompaniesSection /> */}
      </div>
      <Footer />
    </div>
  );
};

export default About;
