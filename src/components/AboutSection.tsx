
import { Users, Heart, Code } from 'lucide-react';
import FadeIn from './FadeIn';

const AboutSection = () => {
  const values = [
    {
      icon: Users,
      title: 'Community',
      description:
        'Building meaningful connections among Christian men in tech, fostering authentic brotherhood that moves past the surface.',
    },
    {
      icon: Heart,
      title: 'Encouragement',
      description:
        'Creating a safe space where members can openly share challenges and receive genuine support and prayer.',
    },
    {
      icon: Code,
      title: 'Excellence',
      description:
        'Pursuing excellence in both our technical skills and our walk with Christ, growing in wisdom and integrity.',
    },
  ];

  const stats = [
    { value: '250+', label: 'Members', color: 'text-gold' },
    { value: '24/7', label: 'Support', color: 'text-sapphire' },
    { value: 'Global', label: 'Community', color: 'text-gold' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker to-tech-dark" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="section-label">Our Story</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light text-mist mb-6 leading-tight">
              About Debugging
              <span className="italic text-gold"> Disciples</span>
            </h2>
            <p className="text-stone text-base md:text-lg leading-relaxed font-sans font-light">
              Founded in February 2024, we've grown into a global community of Christian men pursuing
              STEM careers. Our mission: a place where faith and technology intersect, where brotherhood
              flourishes, and where each member is encouraged to become the man God has called him to be.
            </p>
          </div>
        </FadeIn>

        {/* Story + Visual grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn from="left">
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-light text-mist">Our Story</h3>
              <p className="text-stone text-base leading-relaxed font-sans font-light">
                What started as a small group of friends sharing their faith and passion for technology
                has grown into a thriving global community. We recognized the unique challenges that
                Christian men face in the tech industry and decided to create something different.
              </p>
              <p className="text-stone text-base leading-relaxed font-sans font-light">
                Through our online platform on Slack, we've built bridges across continents, connecting
                brothers from different universities, companies, and backgrounds — all united by our
                shared faith and love for technology.
              </p>
              {/* Stats row */}
              <div className="flex items-center gap-10 pt-4 border-t border-white/8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className={`font-display text-3xl font-light ${stat.color}`}>{stat.value}</div>
                    <div className="text-stone text-xs tracking-[0.15em] uppercase font-sans mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn from="right" delay={0.1}>
            <div className="relative">
              <div className="border border-white/8 p-8 bg-tech-darker/60 flex flex-col items-center justify-center gap-8 min-h-[280px]">
                {/* Cross decorative mark */}
                <div className="flex items-center justify-center gap-5">
                  <div className="h-px w-14 bg-gold/25" />
                  <div className="flex flex-col items-center">
                    <div className="w-px h-6 bg-gold/30" />
                    <div className="w-px h-6 bg-gold/30 mt-0.5" />
                  </div>
                  <div className="h-px w-14 bg-gold/25" />
                </div>

                {/* Featured verse */}
                <div className="text-center px-2 max-w-xs">
                  <p className="font-display text-xl md:text-2xl italic font-light text-mist/80 leading-relaxed mb-3">
                    "Whatever you do, work at it with all your heart, as working for the Lord."
                  </p>
                  <p className="text-gold text-xs font-sans font-medium tracking-[0.2em] uppercase">
                    Colossians 3:23
                  </p>
                </div>

                {/* Decorative mono tag */}
                <p className="text-xs text-stone/40 font-mono tracking-wide">
                  faith.intersect(technology)
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Values cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className="border border-white/8 bg-tech-darker/40 p-8 hover:border-gold/25 transition-all duration-300 group h-full"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors duration-300">
                    <value.icon className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl font-light text-mist">{value.title}</h3>
                  <p className="text-stone text-base leading-relaxed font-sans font-light">
                    {value.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
