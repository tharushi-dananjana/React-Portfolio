import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

export function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  const [ref, controls] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}