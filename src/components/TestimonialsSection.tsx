import { Card } from '@/components/ui/card';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-darker"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              What Our Brothers Say
            </span>
          </h2>
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-[300px]">
          <div className="absolute inset-0 rounded-2xl backdrop-blur-lg opacity-80 bg-gradient-to-b from-gray-800/60 to-gray-900/60 pointer-events-none"></div>
          <div className="relative z-10 flex items-center justify-center w-full">
            <span className="text-3xl md:text-4xl font-bold text-white/90 text-center drop-shadow-lg">Coming January 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
