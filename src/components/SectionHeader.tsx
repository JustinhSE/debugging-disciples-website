import { motion } from "framer-motion";

export function SectionHeader({
  index,
  label,
  title,
  kicker,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  kicker?: string;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
      <div className="md:col-span-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3"
        >
          <span className="font-mono text-[11px] text-primary">{index}</span>
          <span className="h-px w-8 bg-primary/60" />
          <span className="label">{label}</span>
        </motion.div>
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
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty"
          >
            {kicker}
          </motion.p>
        )}
      </div>
    </div>
  );
}
