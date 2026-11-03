import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

/**
 * Genjutsu Holographic Interactive Cursor Aura
 * Optical illusion tier cursor glow that follows mouse pointer with spring lag
 * and magnetically blooms when hovering interactive cards, buttons & links.
 */
export function GenjutsuCursorAura() {
  const [visible, setVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  // Emil Kowalski / Apple-style spring physics
  const springX = useSpring(-100, { stiffness: 350, damping: 28, mass: 0.1 });
  const springY = useSpring(-100, { stiffness: 350, damping: 28, mass: 0.1 });

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch = window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      if (!visible) setVisible(true);
      springX.set(e.clientX);
      springY.set(e.clientY);

      // Check if hovering an interactive element (button, link, card)
      const target = e.target;
      if (target) {
        const interactive = target.closest('button, a, [role="button"], input, select, textarea, .bento-card, .spotlight-card, [data-interactive="true"]');
        setIsHoveringInteractive(!!interactive);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible, springX, springY]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9998,
        willChange: 'transform, width, height, opacity',
        borderRadius: '50%',
        width: isHoveringInteractive ? '380px' : '260px',
        height: isHoveringInteractive ? '380px' : '260px',
        background: isHoveringInteractive
          ? 'radial-gradient(circle, rgba(0, 240, 255, 0.18) 0%, rgba(0, 113, 186, 0.08) 45%, transparent 70%)'
          : 'radial-gradient(circle, rgba(0, 240, 255, 0.09) 0%, rgba(0, 113, 186, 0.04) 50%, transparent 75%)',
        filter: 'blur(30px)',
        transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1), height 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease'
      }}
    />
  );
}

