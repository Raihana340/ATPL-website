import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(0, 240, 255, 0.22)',
  borderColor = 'rgba(0, 240, 255, 0.3)',
  backgroundColor = '#0b1329',
  style = {},
  onClick,
  ...props
}) {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      style={{
        position: 'relative',
        borderRadius: '16px',
        border: `1px solid ${borderColor}`,
        backgroundColor: backgroundColor,
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.45)',
        ...style
      }}
      className={className}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      <div
        aria-hidden="true"
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity: opacity,
          transition: 'opacity 300ms ease',
          background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 75%)`,
          zIndex: 1
        }}
      />
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </motion.div>
  );
}

