
import { Slack, Music, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tech-darker border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-tech-accent to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DD</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
                Debugging Disciples
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A Brotherhood of Believers Shaping the Tech World. Connecting Christian men 
              in Computer Science globally through faith, community, and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Community</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-tech-accent transition-colors">
                About Us
              </a>
              <a href="#bible-study" className="block text-gray-400 hover:text-tech-accent transition-colors">
                Bible Study
              </a>
              <a href="#testimonials" className="block text-gray-400 hover:text-tech-accent transition-colors">
                Testimonials
              </a>
              <a href="#join" className="block text-gray-400 hover:text-tech-accent transition-colors">
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
              <div className="flex items-center space-x-2 text-gray-400">
                <Slack className="w-5 h-5" />
                <span>Slack Community</span>
              </div>
              <div className="pt-2">
                <p className="text-sm text-gray-500">
                  community@debuggingdisciples.org
                </p>
              </div>
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

        {/* Bible Verse */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl mx-auto">
            <p className="text-gray-300 italic mb-2">
              "Therefore encourage one another and build each other up, just as in fact you are doing."
            </p>
            <p className="text-tech-accent font-semibold">— 1 Thessalonians 5:11</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
