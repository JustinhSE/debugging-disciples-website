
import { MessageSquare, Slack, Calendar, CheckCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const JoinSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: "Complete Application",
      description: "Fill out our simple application form to tell us about yourself and your faith journey."
    },
    {
      icon: Slack,
      number: '02',
      title: "Join Slack",
      description: "Get invited to our Slack workspace where all the daily conversations and connections happen."
    },
    {
      icon: Calendar,
      number: '03',
      title: "Attend Bible Study",
      description: "Join us for your first Sunday Bible study and start building meaningful relationships."
    }
  ];

  const benefits = [
    "24/7 access to a supportive community of Christian men in tech",
    "Weekly Bible studies designed for busy college schedules",
    "Prayer support during challenging seasons",
    "Resources for integrating faith and technology"
  ];

  return (
    <section id="join" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-darker to-tech-dark" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="section-label">Get Involved</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light text-mist mb-6 leading-tight">
              Join Our <span className="italic text-gold">Brotherhood</span>
            </h2>
            <p className="text-stone text-base md:text-lg leading-relaxed font-sans font-light">
              Ready to connect with Christian brothers who share your passion for technology?
              Join our growing community of 250+ members worldwide.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} from="left">
                <div
                  className="border border-white/8 bg-tech-darker/40 p-7 flex items-start gap-6 hover:border-gold/20 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="font-display text-3xl font-light text-gold/50 group-hover:text-gold/70 transition-colors duration-300 leading-none">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-display text-xl font-light text-mist mb-2">{step.title}</h4>
                    <p className="text-stone text-base leading-relaxed font-sans font-light">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Benefits + Eligibility */}
          <FadeIn from="right" delay={0.1}>
            <div className="space-y-6">
              <div className="border border-white/8 bg-tech-darker/40 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-5 h-5 text-gold/60" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-light text-mist">Membership Benefits</h3>
                </div>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0 opacity-60" aria-hidden="true" />
                      <p className="text-stone text-base leading-relaxed font-sans font-light">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gold/15 bg-gold/3 p-6">
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-gold/70 mb-4">
                  Who Can Join?
                </h4>
                <div className="space-y-2 text-stone text-base font-sans font-light">
                  <p>• Male college students studying Computer Science or related fields</p>
                  <p>• New or devout Christians seeking community and growth</p>
                  <p>• Those passionate about using technology for God's glory</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn delay={0.2}>
          <div className="max-w-xl mx-auto text-center border border-white/8 bg-tech-darker/40 p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <Slack className="w-8 h-8 text-gold/60" aria-hidden="true" />
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-light text-mist mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-stone text-base leading-relaxed font-sans font-light mb-8">
              Click the button below to begin your application. We typically respond within
              24–48 hours and would love to welcome you into our community!
            </p>
            <a
              href="https://forms.gle/6s5EJ1FPXgmyVXsQ7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] px-10 py-3.5 bg-gold text-tech-dark text-xs tracking-[0.2em] uppercase font-sans font-semibold transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_35px_rgba(201,164,99,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-tech-dark"
            >
              Apply to Join Community
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default JoinSection;
