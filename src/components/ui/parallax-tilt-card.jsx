import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * ParallaxTiltCard: 21st.dev inspired 3D perspective mouse-tilt card.
 * Reacts to cursor coordinates with realistic physical spring motion,
 * dynamic glare lighting, and depth elevation.
 */
export const ParallaxTiltCard = ({ 
  children, 
  className = '', 
  style = {},
  tiltFactor = 15,
  onClick
}) => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltFactor}deg`, `-${tiltFactor}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltFactor}deg`, `${tiltFactor}deg`]);

  // Specular reflection glare positions
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ['0%', '100%']);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ['0%', '100%']);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative',
        ...style
      }}
      className={className}
    >
      <div style={{ transform: 'translateZ(25px)', width: '100%', height: '100%' }}>
        {children}
      </div>

      {/* Dynamic Specular Glare Glow */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          pointerEvents: 'none',
          background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.18) 0%, transparent 65%)',
          left: glareX,
          top: glareY,
          transform: 'translate(-50%, -50%)',
          width: '200%',
          height: '200%',
          opacity: 0.7,
          mixBlendMode: 'screen',
          zIndex: 10
        }}
      />
    </motion.div>
  );
};

