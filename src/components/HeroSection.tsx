
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-tech-dark">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(201,164,99,0.07) 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-0 grid-pattern" />
      </div>

      {/* Decorative side lines */}
      <div className="absolute left-6 md:left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />
      <div className="absolute right-6 md:right-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden md:block" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mt-8 mb-10">
            <div className="h-px w-10 bg-gold/40" />
            <span className="section-label">Christian Men in STEM</span>
            <div className="h-px w-10 bg-gold/40" />
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-light leading-none tracking-tight mb-4">
            <span className="block text-5xl sm:text-6xl md:text-8xl text-mist">
              Brotherhood of
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl italic text-gold mt-1">
              Believers
            </span>
          </h1>

          <p className="font-display text-xl sm:text-2xl md:text-3xl font-light text-white/50 mb-10 tracking-wider">
            Shaping the Tech World
          </p>

          {/* Decorative diamond divider */}
          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="h-px w-16 bg-white/15" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold/50" />
            <div className="h-px w-16 bg-white/15" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            A welcoming, safe space where young Christian men in STEM can openly share
            challenges, find support, and grow together in faith and tech.
          </p>

          {/* Bible Verse */}
          <div className="relative mb-12 max-w-lg mx-auto">
            <div className="border-l-2 border-gold/40 pl-6 py-1 text-left">
              <p className="text-base sm:text-lg italic text-white/65 mb-2 font-display font-light leading-relaxed">
                "Therefore encourage one another and build each other up, just as in fact you are
                doing."
              </p>
              <p className="text-gold text-xs font-sans font-medium tracking-[0.2em] uppercase">
                — 1 Thessalonians 5:11
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/join"
              className="px-9 py-3.5 bg-gold text-tech-dark font-semibold text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_35px_rgba(201,164,99,0.35)]"
            >
              Join Our Community
            </Link>
            <Link
              to="/about"
              className="px-9 py-3.5 border border-white/20 text-white/70 font-medium text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 hover:border-gold/40 hover:text-gold/90"
            >
              Learn More
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 opacity-40">
            <span className="text-[10px] text-stone tracking-[0.3em] uppercase font-sans">
              Scroll
            </span>
            <ArrowDown className="w-4 h-4 text-gold animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tech-dark to-transparent" />
    </section>
  );
};

export default HeroSection;
