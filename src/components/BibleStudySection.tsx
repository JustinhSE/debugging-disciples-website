
import { Calendar, Clock, Users, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from './FadeIn';

const BibleStudySection = () => {
  const prefersReducedMotion = useReducedMotion();
  const maxSeriesImageHeight = '34rem';
  const seriesImageAnimationDuration = 0.45;

  const expectations = [
    { label: 'Opening Prayer', desc: 'We begin each session centering our hearts on God' },
    { label: 'Scripture Reading', desc: "We dive deep into God's Word together" },
    { label: 'Group Discussion', desc: 'Share insights and ask questions in a safe space' },
    { label: 'Application', desc: 'Connect biblical truths to our daily lives in tech' },
    { label: 'Closing Prayer', desc: 'Lift up concerns and pray for one another' },
  ];

  const schedule = [
    { icon: Calendar, title: 'Every Sunday', subtitle: 'Weekly consistent gathering' },
    { icon: Clock, title: '5:00 PM PST', subtitle: 'Accommodated for various time zones' },
    { icon: Users, title: 'Interactive', subtitle: 'Discussion-based, not lecture-style' },
  ];

  return (
    <section id="bible-study" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark to-tech-darker" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
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

        {/* Schedule — horizontal 3-column row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {schedule.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="border border-white/8 bg-tech-darker/40 p-6 flex items-center gap-5 hover:border-gold/20 transition-all duration-300 group">
                <div className="w-12 h-12 border border-gold/25 flex items-center justify-center flex-shrink-0 group-hover:border-gold/50 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-gold/60 group-hover:text-gold/80 transition-colors duration-300" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-light text-mist">{item.title}</h3>
                  <p className="text-stone text-sm font-sans font-light mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Session Flow + Current Series */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Session Flow — numbered timeline */}
          <FadeIn from="left">
            <div className="border border-white/8 bg-tech-darker/40 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Book className="w-5 h-5 text-gold/70" aria-hidden="true" />
                <h3 className="font-display text-2xl font-light text-mist">Session Flow</h3>
              </div>
              <div className="relative">
                {/* Vertical timeline spine */}
                <div className="absolute left-[11px] top-3 bottom-3 w-px bg-white/8" aria-hidden="true" />
                <div className="space-y-6">
                  {expectations.map((item, i) => (
                    <div key={i} className="flex items-start gap-5">
                      <div className="w-6 h-6 rounded-full border border-gold/30 bg-tech-dark flex items-center justify-center flex-shrink-0 z-10">
                        <span className="text-[10px] font-mono text-gold/60">{i + 1}</span>
                      </div>
                      <p className="text-stone text-base leading-relaxed font-sans font-light pt-0.5">
                        <strong className="text-mist/80 font-medium">{item.label}:</strong>{' '}
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Current Series */}
          <FadeIn from="right" delay={0.1}>
            <div className="border border-gold/20 bg-gold/3 p-8 md:p-10 flex flex-col gap-6">
              <h4 className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-gold/80">
                Current Series
              </h4>
              <motion.div
                className="overflow-hidden rounded-lg border border-gold/20 bg-tech-dark/60 aspect-[4/5]"
                style={{ maxHeight: maxSeriesImageHeight }}
                initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: seriesImageAnimationDuration, ease: 'easeOut' }}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.02 }}
              >
                <img
                  src="https://github.com/user-attachments/assets/3eeb6cce-50c9-438f-8f82-8bc28a2df355"
                  alt="Christian studying at a laptop with scripture nearby and a symbolic warrior figure in the background."
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              <h3 className="font-display text-3xl md:text-4xl font-light text-mist leading-tight">
                Character Study in 1 Samuel
              </h3>
              <p className="text-stone text-base leading-relaxed font-sans font-light">
                We are currently focused on David&apos;s life to understand how God forms men through
                calling, failure, repentance, and faithfulness.
              </p>
              <div className="border-t border-gold/10 pt-5">
                <p className="text-stone text-sm font-sans font-light mb-6">
                  Join us as we walk verse-by-verse through 1 Samuel and apply each lesson to real
                  life in tech, leadership, and brotherhood.
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

        </div>
      </div>
    </section>
  );
};

export default BibleStudySection;
