
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-dark via-tech-blue/10 to-tech-purple/10"></div>
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-tech-accent rounded-full animate-glow"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-glow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="text-sm text-gray-300">Founded February 2024 • 150+ Members Globally</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-tech-accent to-purple-400 bg-clip-text text-transparent">
              Brotherhood of Believers
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-tech-accent to-cyan-400 bg-clip-text text-transparent">
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
            <p className="text-tech-accent font-semibold">— 1 Thessalonians 5:11</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={() => scrollToSection('join')}
              size="lg"
              className="bg-gradient-to-r from-tech-accent to-purple-500 hover:from-tech-accent/80 hover:to-purple-500/80 text-white px-8 py-4 text-lg glow-blue"
            >
              Join Our Community
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2 animate-float">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-tech-accent animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tech-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
