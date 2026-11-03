"use client";
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * 21st.dev Interactive Bento Spotlight Card
 * Adheres to UI/UX Pro Max Rules:
 * - Stable interaction states without layout shifts (Rule #16)
 * - Contrast-compliant dark/light surface isolation (Rule #41, #43)
 * - Tactile spring micro-interactions (Rule #29)
 */
export const BentoCard = ({
  children,
  className = "",
  spotlightColor = "rgba(0, 240, 255, 0.12)",
  borderColor = "rgba(255, 255, 255, 0.12)",
  glowBorderColor = "rgba(0, 240, 255, 0.35)",
  bgGradient = "linear-gradient(165deg, rgba(15, 23, 42, 0.95) 0%, rgba(6, 11, 20, 0.95) 100%)",
  style = {},
  onClick
}) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
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
      whileTap={onClick ? { scale: 0.985, transition: { duration: 0.1 } } : undefined}
      className={className}
      style={{
        position: 'relative',
        borderRadius: '16px',
        border: `1px solid ${opacity > 0 ? glowBorderColor : borderColor}`,
        background: bgGradient,
        overflow: 'hidden',
        boxShadow: opacity > 0 
          ? '0 16px 36px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 240, 255, 0.08)' 
          : '0 8px 24px -10px rgba(0, 0, 0, 0.35)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        ...style
      }}
    >
      {/* 21st.dev Radial Spotlight following cursor */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          inset: 0,
          opacity,
          transition: 'opacity 0.35s ease',
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
          zIndex: 1
        }}
      />

      {/* Card Content with elevated relative zIndex */}
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
};

