import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * GlobalScrollProgress
 * Renders an ultra-smooth, responsive laser progress bar at the very top of the screen
 * across all pages of the ATPL website. Features an animated glowing spark bead at the
 * leading edge that tracks scroll depth with physical spring dampening.
 */
export function GlobalScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Physical spring physics to ensure silky-smooth movement without jitter
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 38,
    restDelta: 0.001
  });

  return (
    <div 
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3.5px',
        zIndex: 999999,
        pointerEvents: 'none',
        overflow: 'visible'
      }}
    >
      {/* Laser Gradient Track */}
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          scaleX,
          transformOrigin: '0%',
          background: 'linear-gradient(90deg, #0071ba 0%, #00f0ff 50%, #38bdf8 80%, #E85874 100%)',
          boxShadow: '0 0 12px rgba(0, 240, 255, 0.75), 0 0 24px rgba(0, 113, 186, 0.45)',
          position: 'relative'
        }}
      >
        {/* Glowing Head Spark Particle */}
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            right: '-4px',
            transform: 'translateY(-50%)',
            width: '9px',
            height: '9px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            boxShadow: '0 0 10px #ffffff, 0 0 20px #00f0ff, 0 0 30px #E85874'
          }}
        />
      </motion.div>
    </div>
  );
}

