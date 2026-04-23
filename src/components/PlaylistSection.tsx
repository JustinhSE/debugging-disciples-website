
import { Music, Headphones, Users } from 'lucide-react';
import FadeIn from './FadeIn';

const PlaylistSection = () => {
  const artists = [
    'Lecrae', 'Andy Mineo', 'NF', 'KB',
    'Trip Lee', 'Hulvey', '1K Phew', 'GAWVI',
  ];

  return (
    <section id="playlist" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker to-tech-dark" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="section-label">Community Music</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light text-mist mb-6 leading-tight">
              Christian <span className="italic text-gold">Hip-Hop</span> Playlist
            </h2>
            <p className="text-stone text-base md:text-lg leading-relaxed font-sans font-light">
              Curated by our community — faith-filled tracks that inspire, encourage, and remind us
              of God's goodness while we code, study, and live.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Why section + Use-cases */}
          <FadeIn from="left">
            <div className="space-y-6">
              <div className="border border-white/8 bg-tech-darker/40 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Music className="w-5 h-5 text-gold/70" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-light text-mist">Why This Playlist?</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-stone text-base leading-relaxed font-sans font-light">
                    Music has the power to shape our hearts and minds. As Christian men in tech,
                    we believe in consuming content that builds us up rather than tears us down.
                  </p>
                  <p className="text-stone text-base leading-relaxed font-sans font-light">
                    This playlist features artists who boldly proclaim their faith through hip-hop,
                    addressing real-life struggles while pointing us toward hope in Christ.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-white/8 bg-tech-darker/40 p-6 flex flex-col items-center text-center gap-3 hover:border-gold/25 transition-colors duration-300">
                  <Headphones className="w-6 h-6 text-gold/70" aria-hidden="true" />
                  <h4 className="font-display text-lg font-light text-mist">Coding Sessions</h4>
                  <p className="text-stone text-sm font-sans font-light leading-relaxed">Perfect background music for focused work</p>
                </div>
                <div className="border border-white/8 bg-tech-darker/40 p-6 flex flex-col items-center text-center gap-3 hover:border-gold/25 transition-colors duration-300">
                  <Users className="w-6 h-6 text-sapphire/80" aria-hidden="true" />
                  <h4 className="font-display text-lg font-light text-mist">Community Curated</h4>
                  <p className="text-stone text-sm font-sans font-light leading-relaxed">Songs recommended by our members</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Spotify CTA + Artists */}
          <FadeIn from="right" delay={0.1}>
            <div className="space-y-6">
              <div className="border border-gold/20 bg-gold/3 p-8 flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 border border-gold/30 flex items-center justify-center">
                  <Music className="w-7 h-7 text-gold/70" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-light text-mist mb-2">Debugging Disciples Playlist</h3>
                  <p className="text-stone text-base font-sans font-light">
                    100+ tracks of faith-filled hip-hop to inspire your journey
                  </p>
                </div>
                <a
                  href="https://open.spotify.com/playlist/5P9bF29n4iwEQPR7PmO02i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-8 py-3 bg-gold text-tech-dark text-xs tracking-[0.2em] uppercase font-sans font-semibold transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_25px_rgba(201,164,99,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-tech-dark"
                >
                  <Music className="w-4 h-4" aria-hidden="true" />
                  Open in Spotify
                </a>
              </div>

              <div className="border border-white/8 bg-tech-darker/40 p-6">
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-stone mb-5">
                  Featured Artists
                </h4>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {artists.map((artist) => (
                    <div key={artist} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gold/50 rounded-full flex-shrink-0" aria-hidden="true" />
                      <span className="text-stone text-base font-sans font-light">{artist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default PlaylistSection;
