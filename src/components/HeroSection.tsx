
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-brand-cyan/10 to-brand-purple/10"></div>
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-brand-cyan rounded-full animate-glow"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-brand-purple rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-brand-cyan rounded-full animate-glow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mt-12 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Brotherhood of Believers
            </span>
            <br />
            <span className="bg-gradient-to-r from-brand-purple via-brand-cyan to-tech-blue bg-clip-text text-transparent">
              Shaping the Tech World
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A welcoming, safe space where young Christian men in Computer Science can openly share challenges, 
            find support, and grow together in faith and tech.
          </p>

          {/* Bible Verse */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/10 max-w-2xl mx-auto">
            <p className="text-lg italic text-gray-200 mb-2">
              "Therefore encourage one another and build each other up, just as in fact you are doing."
            </p>
            <p className="text-brand-cyan font-semibold">— 1 Thessalonians 5:11</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-cyan to-brand-purple hover:from-brand-cyan/80 hover:to-brand-purple/80 text-white px-8 py-4 text-lg glow-blue"
            >
              <Link to="/join">Join Our Community</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2 animate-float">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-brand-cyan animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tech-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
