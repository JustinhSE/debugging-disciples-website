import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Direction the element enters from. Default: 'up' */
  from?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const directionOffset: Record<NonNullable<FadeInProps['from']>, { x: number; y: number }> = {
  up:    { x: 0,   y: 20  },
  down:  { x: 0,   y: -20 },
  left:  { x: 20,  y: 0   },
  right: { x: -20, y: 0   },
  none:  { x: 0,   y: 0   },
};

/**
 * Wraps children in a motion.div that fades in when scrolled into view.
 * Automatically disables animation when the user prefers reduced motion.
 */
const FadeIn = ({ children, className, delay = 0, from = 'up' }: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();

  const offset = directionOffset[from];

  const initial = prefersReducedMotion
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, ...offset };

  const animate = isInView || prefersReducedMotion
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, ...offset };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
