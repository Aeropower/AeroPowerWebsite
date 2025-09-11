import { useEffect, useState } from 'react';

function getPrefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Returns true when the OS/browser requests reduced motion.
 * - SSR-safe (defaults to false on the server)
 * - Reacts to live changes in system setting
 */
export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(getPrefersReducedMotion);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => setPrefersReduced(e.matches);

    // Modern + legacy listeners for broad browser support
    if (mql.addEventListener) mql.addEventListener('change', onChange);
    else mql.addListener(onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', onChange);
      else mql.removeListener(onChange);
    };
  }, []);

  return prefersReduced;
}
