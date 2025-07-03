// hooks/useScrollReveal.ts
import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return [ref, controls] as const;
}
