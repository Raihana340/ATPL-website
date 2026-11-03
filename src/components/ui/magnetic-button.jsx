import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function MagneticButton({
  children,
  className = '',
  onClick,
  style = {},
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springConfig = { damping: 15, stiffness: 180, mass: 0.1 };
  const springX = useSpring(position.x, springConfig);
  const springY = useSpring(position.y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
    springX.set(middleX * strength);
    springY.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    springX.set(0);
    springY.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        ...style
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

