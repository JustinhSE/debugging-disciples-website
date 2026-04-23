
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
    { label: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-tech-dark/95 backdrop-blur-md border-b border-white/8'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/lovable-uploads/1fcf16d5-8905-450b-831c-aa468ed64619.png"
              alt="Debugging Disciples Logo"
              className="w-9 h-9 object-contain"
            />
            <span className="font-display text-lg font-light tracking-wide text-mist group-hover:text-gold transition-colors duration-300">
              Debugging Disciples
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-xs tracking-[0.15em] uppercase font-sans font-medium transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:rounded-sm ${
                  location.pathname === item.path
                    ? 'text-gold'
                    : 'text-stone hover:text-mist'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px bg-gold transition-transform duration-300 origin-left ${
                    location.pathname === item.path
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
            <Link
              to="/join"
              className="px-5 py-2 border border-gold/50 text-gold text-xs tracking-[0.15em] uppercase font-sans font-medium transition-all duration-300 hover:bg-gold hover:text-tech-dark hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            >
              Join Community
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-stone hover:text-mist transition-colors p-2.5 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:rounded-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-tech-dark/98 backdrop-blur-md border-b border-white/8">
            <div className="container mx-auto px-6 py-6 space-y-5">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-xs tracking-[0.2em] uppercase font-sans font-medium py-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:rounded-sm ${
                    location.pathname === item.path ? 'text-gold' : 'text-stone hover:text-mist'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/join"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 border border-gold/50 text-gold text-xs tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 hover:bg-gold hover:text-tech-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
              >
                Join Community
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
