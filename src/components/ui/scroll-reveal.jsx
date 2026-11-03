import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * ScrollReveal: Universal, GPU-composite hardware-accelerated scroll reveal wrapper.
 * Uses Emil Kowalski's optimal physical curves: cubic-bezier(0.16, 1, 0.3, 1).
 * Never triggers layout or paint — only transforms and opacity.
 */
export function ScrollReveal({
  children,
  variant = 'fade-up', // 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'zoom'
  delay = 0,
  duration = 0.55,
  distance = 36,
  threshold = 0.15,
  once = true,
  className = '',
  style = {},
  staggerChildren = false,
  staggerDelay = 0.08,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, do a gentle instantaneous fade
  if (shouldReduceMotion) {
    return (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    );
  }

  // Variant transform definitions
  const getInitialTransform = () => {
    switch (variant) {
      case 'fade-up':
        return { opacity: 0, y: distance };
      case 'fade-down':
        return { opacity: 0, y: -distance };
      case 'fade-left':
        return { opacity: 0, x: -distance };
      case 'fade-right':
        return { opacity: 0, x: distance };
      case 'scale':
      case 'zoom':
        return { opacity: 0, scale: 0.95 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getTargetTransform = () => {
    switch (variant) {
      case 'fade-up':
      case 'fade-down':
        return { opacity: 1, y: 0 };
      case 'fade-left':
      case 'fade-right':
        return { opacity: 1, x: 0 };
      case 'scale':
      case 'zoom':
        return { opacity: 1, scale: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  const containerVariants = {
    hidden: getInitialTransform(),
    visible: {
      ...getTargetTransform(),
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
        ...(staggerChildren && {
          staggerChildren: staggerDelay,
          delayChildren: delay
        })
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={containerVariants}
      className={className}
      style={{
        willChange: 'transform, opacity',
        ...style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealStaggerItem
 * Lightweight child item for staggered grids inside a ScrollReveal container.
 */
export function ScrollRevealStaggerItem({
  children,
  className = '',
  style = {},
  distance = 28,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className} style={style} {...props}>{children}</div>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: distance, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
      style={{
        willChange: 'transform, opacity',
        ...style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

