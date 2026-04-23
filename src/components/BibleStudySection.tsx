
import { Calendar, Clock, Users, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const BibleStudySection = () => {
  const expectations = [
    { color: 'bg-gold', label: 'Opening Prayer', desc: 'We begin each session centering our hearts on God' },
    { color: 'bg-sapphire', label: 'Scripture Reading', desc: 'We dive deep into God\'s Word together' },
    { color: 'bg-gold', label: 'Group Discussion', desc: 'Share insights and ask questions in a safe space' },
    { color: 'bg-sapphire', label: 'Application', desc: 'Connect biblical truths to our daily lives in tech' },
    { color: 'bg-gold', label: 'Closing Prayer', desc: 'Lift up concerns and pray for one another' },
  ];

  const schedule = [
    { icon: Calendar, title: 'Every Sunday', subtitle: 'Weekly consistent gathering' },
    { icon: Clock, title: '5:00 PM EST', subtitle: 'Accommodated for various time zones' },
    { icon: Users, title: 'Interactive', subtitle: 'Discussion-based, not lecture-style' },
  ];

  return (
    <section id="bible-study" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-darker" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-10 bg-gold/40" />
              <span className="section-label">Scripture & Fellowship</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-light text-mist mb-6 leading-tight">
              Weekly <span className="italic text-gold">Bible Study</span>
            </h2>
            <p className="text-stone text-base md:text-lg leading-relaxed font-sans font-light">
              Join us every Sunday for an engaging Bible study designed to deepen our faith,
              explore God's Word together, and apply biblical principles to our lives in tech.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* What to Expect */}
          <FadeIn from="left">
            <div className="space-y-6">
              <div className="border border-white/8 bg-tech-darker/40 p-8">
                <div className="flex items-center gap-3 mb-8">
                  <Book className="w-5 h-5 text-gold/70" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-light text-mist">What to Expect</h3>
                </div>
                <div className="space-y-5">
                  {expectations.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-1.5 h-1.5 ${item.color} rounded-full mt-2 flex-shrink-0 opacity-70`} aria-hidden="true" />
                      <p className="text-stone text-base leading-relaxed font-sans font-light">
                        <strong className="text-mist/80 font-medium">{item.label}:</strong>{' '}
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Series */}
              <div className="border border-gold/20 bg-gold/3 p-6">
                <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-gold/80 mb-3">
                  Current Series
                </h4>
                <p className="text-stone text-base leading-relaxed font-sans font-light mb-5">
                  We're currently studying{' '}
                  <span className="text-mist/80 font-medium">Spiritual Warfare</span>, designed to
                  equip believers to understand, engage, and overcome in the spiritual battles they
                  face daily.
                </p>
                <Link
                  to="/join"
                  className="inline-flex items-center min-h-[44px] px-6 py-2.5 bg-gold text-tech-dark text-xs tracking-[0.2em] uppercase font-sans font-semibold transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_25px_rgba(201,164,99,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-tech-dark"
                >
                  Join This Sunday
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Schedule cards */}
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} from="right">
                <div
                  className="border border-white/8 bg-tech-darker/40 p-7 flex items-center gap-6 hover:border-gold/20 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-gold/60 group-hover:text-gold/80 transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-light text-mist">{item.title}</h3>
                    <p className="text-stone text-base font-sans font-light mt-1">{item.subtitle}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BibleStudySection;
