
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Bible Study', id: 'bible-study' },
    { label: 'Playlist', id: 'playlist' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Join Us', id: 'join' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all-smooth ${
      isScrolled ? 'bg-tech-dark/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-tech-accent to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DD</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              Debugging Disciples
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-tech-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-tech-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('join')}
              className="bg-gradient-to-r from-tech-accent to-purple-500 hover:from-tech-accent/80 hover:to-purple-500/80 text-white"
            >
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-tech-dark/95 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-tech-accent transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('join')}
                className="w-full bg-gradient-to-r from-tech-accent to-purple-500 hover:from-tech-accent/80 hover:to-purple-500/80 text-white"
              >
                Join Community
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
