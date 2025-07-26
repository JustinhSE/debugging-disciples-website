import { Slack, Music, Heart, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tech-darker border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/1fcf16d5-8905-450b-831c-aa468ed64619.png"
                alt="Debugging Disciples Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                Debugging Disciples
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A Brotherhood of Believers Shaping the Tech World. Connecting
              Christian men in Computer Science globally through faith,
              community, and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Community</h3>
            <div className="space-y-2">
              <a
                href="/about"
                className="block text-gray-400 hover:text-brand-cyan transition-colors"
              >
                About Us
              </a>
              <a
                href="/bible-study"
                className="block text-gray-400 hover:text-brand-cyan transition-colors"
              >
                Bible Study
              </a>
              <a
                href="/testimonials"
                className="block text-gray-400 hover:text-brand-cyan transition-colors"
              >
                Testimonials
              </a>
              <a
                href="/join"
                className="block text-gray-400 hover:text-brand-cyan transition-colors"
              >
                Join Us
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://open.spotify.com/playlist/5P9bF29n4iwEQPR7PmO02i"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <Music className="w-5 h-5" />
                <span>Our Playlist</span>
              </a>
              <a
                href="https://forms.gle/6s5EJ1FPXgmyVXsQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors"
              >
                <Slack className="w-5 h-5" />
                <span>Slack Community</span>
              </a>
              <a
                href="https://www.linkedin.com/company/debuggingdisciples/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Debugging Disciples. Founded February 2024.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for the Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
