import { Music, Heart, Mail, Slack } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tech-darker border-t border-white/8 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <img
                src="/lovable-uploads/1fcf16d5-8905-450b-831c-aa468ed64619.png"
                alt="Debugging Disciples Logo"
                className="w-9 h-9 object-contain"
              />
              <span className="font-display text-lg font-light tracking-wide text-mist group-hover:text-gold transition-colors duration-300">
                Debugging Disciples
              </span>
            </Link>
            <p className="text-stone text-sm leading-relaxed font-sans font-light max-w-xs">
              A Brotherhood of Believers Shaping the Tech World. Connecting Christian men
              globally through faith, community, and technology.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gold/40" />
              <span className="text-gold/60 text-xs tracking-[0.2em] uppercase font-sans">
                Est. February 2024
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-stone">
              Community
            </h3>
            <div className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Bible Study", path: "/bible-study" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "Join Us", path: "/join" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-stone text-sm hover:text-gold transition-colors duration-200 font-sans font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-5">
            <h3 className="font-sans text-xs tracking-[0.25em] uppercase font-semibold text-stone">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://open.spotify.com/playlist/5P9bF29n4iwEQPR7PmO02i"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone text-sm hover:text-gold transition-colors duration-200 font-sans font-light group py-2 -my-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:rounded-sm"
              >
                <Music className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <span>Our Playlist</span>
              </a>
              <a
                href="https://forms.gle/6s5EJ1FPXgmyVXsQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone text-sm hover:text-gold transition-colors duration-200 font-sans font-light group py-2 -my-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:rounded-sm"
              >
                <Slack className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <span>Slack Community</span>
              </a>
              <a
                href="https://www.linkedin.com/company/debuggingdisciples/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-stone text-sm hover:text-gold transition-colors duration-200 font-sans font-light group py-2 -my-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:rounded-sm"
              >
                <Mail className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-stone/80 text-xs font-sans font-light tracking-wide">
              © 2024 Debugging Disciples. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-stone/80 text-xs font-sans font-light">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-gold/70" />
              <span>for the Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
