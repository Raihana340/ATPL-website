import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * GSAP Orchestrated Staggered Reveal Hook
 * Animates a list of children elements with a clean staggered slide & fade.
 */
export function useGsapReveal({
  triggerRef,
  selector = '.gsap-reveal-item',
  duration = 0.65,
  stagger = 0.08,
  y = 24,
  ease = 'power3.out',
  delay = 0.1
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = triggerRef ? triggerRef.current : containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll(selector);
    if (!items || items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: y,
          willChange: 'transform, opacity'
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          stagger: stagger,
          ease: ease,
          delay: delay,
          clearProps: 'willChange'
        }
      );
    }, el);

    return () => ctx.revert();
  }, [triggerRef, selector, duration, stagger, y, ease, delay]);

  return containerRef;
}

