
import { Card } from '@/components/ui/card';
import { Users, Heart, Code } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Users,
      title: 'Community',
      description: 'Building meaningful connections among Christian men in tech, fostering brotherhood that transcends borders.',
    },
    {
      icon: Heart,
      title: 'Encouragement',
      description: 'Creating a safe space where members can openly share challenges and receive genuine support and prayer.',
    },
    {
      icon: Code,
      title: 'Excellence',
      description: 'Pursuing excellence in both our technical skills and our walk with Christ, growing in wisdom and integrity.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker to-tech-dark"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tech-accent to-purple-400 bg-clip-text text-transparent">
              About Debugging Disciples
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Founded in February 2024, we've grown into a global community of 150+ Christian men 
            pursuing Computer Science. Our mission is simple: to provide a place where faith and 
            technology intersect, where brotherhood flourishes, and where each member is encouraged 
            to become the man God has called him to be.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-300 leading-relaxed">
              What started as a small group of friends sharing their faith and passion for technology 
              has grown into a thriving global community. We recognized the unique challenges that 
              Christian men face in the tech industry and decided to create something different.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Through our online platform on Slack, we've built bridges across continents, connecting 
              brothers from different universities, companies, and backgrounds, all united by our 
              shared faith and love for technology.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-tech-accent">150+</div>
                <div className="text-sm text-gray-400">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">Global</div>
                <div className="text-sm text-gray-400">Community</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-tech-accent/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-gradient-to-br from-tech-accent/30 to-transparent rounded-lg"></div>
                <div className="h-24 bg-gradient-to-br from-purple-500/30 to-transparent rounded-lg"></div>
                <div className="h-24 bg-gradient-to-br from-cyan-400/30 to-transparent rounded-lg"></div>
                <div className="h-24 bg-gradient-to-br from-tech-accent/30 to-transparent rounded-lg"></div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400 font-mono">// Building community through code and faith</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10 p-6 hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-tech-accent to-purple-500 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
