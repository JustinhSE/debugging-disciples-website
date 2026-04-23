
import Navigation from '@/components/Navigation';
import PlaylistSection from '@/components/PlaylistSection';
import Footer from '@/components/Footer';

const Playlist = () => {
  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <PlaylistSection />
      </div>
      <Footer />
    </div>
  );
};

export default Playlist;
