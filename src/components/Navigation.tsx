
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Bible Study', path: '/bible-study' },
    { label: 'Playlist', path: '/playlist' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Join Us', path: '/join' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all-smooth ${
      isScrolled ? 'bg-tech-dark/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1fcf16d5-8905-450b-831c-aa468ed64619.png" 
              alt="Debugging Disciples Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Debugging Disciples
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-300 hover:text-brand-cyan transition-colors relative group ${
                  location.pathname === item.path ? 'text-brand-cyan' : ''
                }`}
              >
                {item.label}
                <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-brand-cyan transition-transform origin-left ${
                  location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
            <Button 
              asChild
              className="bg-gradient-to-r from-brand-cyan to-brand-purple hover:from-brand-cyan/80 hover:to-brand-purple/80 text-white"
            >
              <Link to="/join">Join Community</Link>
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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left text-gray-300 hover:text-brand-cyan transition-colors py-2 ${
                    location.pathname === item.path ? 'text-brand-cyan' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-brand-cyan to-brand-purple hover:from-brand-cyan/80 hover:to-brand-purple/80 text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link to="/join">Join Community</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
