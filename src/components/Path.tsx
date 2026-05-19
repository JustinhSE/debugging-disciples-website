import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const stages = [
  {
  n: "01",
  title: "Build",
  body: "We build with purpose. We build projects with impact, all for God’s glory. No just ideas, we step out, ship, and steward what we’ve been given.",
  items: ["Project channels", "Collaboration", "Build in public"],
}, 
  {
    n: "02",
    title: "Study",
    body: "Weekly Bible study and authentic discussion. We read scripture like engineers — closely, honestly, with intent to apply.",
    items: ["Weekly Bible study", "Authentic discussion", "Scripture & application"],
  },
  {
    n: "03",
    title: "Sharpen",
    body: "Career navigation, recent industry sessions, peer accountability. We move forward together — referrals, prep, real talk.",
    items: ["Career channel", "Info sessions", "Interview prep"],
  },
  {
    n: "04",
    title: "Stand",
    body: "Wins, prayer requests, hard conversations. The brotherhood holds you to who you said you'd become.",
    items: ["Prayer requests", "Wins channel", "Accountability"],
  },
];

const title =  `How a disciple grows.`
const kicker="Four pillars, practiced weekly. Faith and craft, sharpened together."

export function Path() {
  return (
    <section id="path" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-10">
        <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px w-10 bg-gold/40" />
            <span className="section-label">Core Pillars</span>
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <div className="md:col-span-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance text-4xl md:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.03em]"
        >
          {title}
        </motion.h2>
        {kicker && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 mb-10 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty"
          >
            {kicker}
          </motion.p>
        )}
      </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
          {stages.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01, boxShadow: '0 20px 40px rgba(2,6,23,0.12)', zIndex: 20 }}
              whileTap={{ scale: 0.995 }}
              className="group relative bg-background p-8 md:p-10 hover:bg-card transition-colors duration-500 flex flex-col min-h-[420px]"
            >
              <div className="relative z-10">
                  <div className="flex items-start justify-between mb-12">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">/{s.n}</span>
                    <motion.span
                      className="h-px w-8 bg-primary origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                    />
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl tracking-[-0.02em] mb-4">{s.title}</h3>
                  <p className="text-muted-foreground text-pretty mb-8 flex-1">{s.body}</p>
                  <ul className="space-y-2 border-t border-border/60 pt-5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 font-mono text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                        <span className="h-1 w-1 bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
