
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Headphones, Users } from 'lucide-react';

const PlaylistSection = () => {
  return (
    <section id="playlist" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker to-tech-dark"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              Christian Hip-Hop Playlist
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Curated by our community, this playlist features the best Christian hip-hop tracks 
            that inspire, encourage, and remind us of God's goodness while we code, study, and live.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Music className="w-8 h-8 text-tech-accent" />
                <h3 className="text-2xl font-bold text-white">Why This Playlist?</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Music has the power to shape our hearts and minds. As Christian men in tech, 
                  we believe in consuming content that builds us up rather than tears us down.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This playlist features artists who boldly proclaim their faith through hip-hop, 
                  addressing real-life struggles while pointing us toward hope in Christ.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-tech-accent/10 to-purple-500/10 backdrop-blur-sm border-tech-accent/20 p-4 text-center">
                <Headphones className="w-8 h-8 text-tech-accent mx-auto mb-2" />
                <h4 className="font-bold text-white">Coding Sessions</h4>
                <p className="text-sm text-gray-300">Perfect background music for focused work</p>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-400/10 backdrop-blur-sm border-purple-500/20 p-4 text-center">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <h4 className="font-bold text-white">Community Curated</h4>
                <p className="text-sm text-gray-300">Songs recommended by our members</p>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            {/* Spotify Embed Placeholder */}
            <div className="bg-gradient-to-br from-green-500/20 to-tech-accent/20 rounded-2xl p-8 border border-green-500/30 text-center">
              <Music className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Debugging Disciples Playlist</h3>
              <p className="text-gray-300 mb-6">
                100+ tracks of faith-filled hip-hop to inspire your journey
              </p>
              
              {/* Simulated Spotify Player */}
              <div className="bg-black/50 rounded-xl p-6 mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-tech-accent rounded-lg flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-white">Currently Playing</h4>
                    <p className="text-gray-300">Christian Hip-Hop Mix</p>
                    <p className="text-sm text-gray-400">By Debugging Disciples</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1 mb-4">
                  <div className="bg-green-400 h-1 rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1:23</span>
                  <span>3:45</span>
                </div>
              </div>

              <Button 
                asChild
                className="bg-green-500 hover:bg-green-600 text-white w-full"
              >
                <a 
                  href="https://open.spotify.com/playlist/5P9bF29n4iwEQPR7PmO02i" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Music className="w-5 h-5" />
                  <span>Open in Spotify</span>
                </a>
              </Button>
            </div>

            <div className="bg-gradient-to-r from-tech-accent/20 to-purple-500/20 rounded-xl p-6 border border-tech-accent/30">
              <h4 className="text-lg font-bold text-white mb-3">Featured Artists</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>• Lecrae</div>
                <div>• Andy Mineo</div>
                <div>• NF</div>
                <div>• KB</div>
                <div>• Trip Lee</div>
                <div>• Hulvey</div>
                <div>• 1K Phew</div>
                <div>• GAWVI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;
