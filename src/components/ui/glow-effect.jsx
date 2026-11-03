import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function GlowEffect({
  className,
  style,
  colors = ['#00f0ff', '#0071ba', '#3b82f6', '#10b981'],
  mode = 'rotate',
  blur = 'medium',
  scale = 1,
  duration = 5,
}) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: duration,
    ease: 'linear',
  };

  const animations = {
    rotate: {
      background: [
        `conic-gradient(from 0deg at 50% 50%, ${colors.join(', ')})`,
        `conic-gradient(from 360deg at 50% 50%, ${colors.join(', ')})`,
      ],
      transition: {
        ...BASE_TRANSITION,
      },
    },
    pulse: {
      background: colors.map(
        (color) =>
          `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`
      ),
      scale: [1 * scale, 1.1 * scale, 1 * scale],
      opacity: [0.35, 0.7, 0.35],
      transition: {
        ...BASE_TRANSITION,
        repeatType: 'mirror',
      },
    },
    breathe: {
      background: [
        ...colors.map(
          (color) =>
            `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 100%)`
        ),
      ],
      scale: [1 * scale, 1.05 * scale, 1 * scale],
      transition: {
        ...BASE_TRANSITION,
        repeatType: 'mirror',
      },
    },
    colorShift: {
      background: colors.map((color, index) => {
        const nextColor = colors[(index + 1) % colors.length];
        return `conic-gradient(from 0deg at 50% 50%, ${color} 0%, ${nextColor} 50%, ${color} 100%)`;
      }),
      transition: {
        ...BASE_TRANSITION,
        repeatType: 'mirror',
      },
    },
    flowHorizontal: {
      background: colors.map((color) => {
        const nextColor = colors[(colors.indexOf(color) + 1) % colors.length];
        return `linear-gradient(to right, ${color}, ${nextColor})`;
      }),
      transition: {
        ...BASE_TRANSITION,
        repeatType: 'mirror',
      },
    },
    static: {
      background: `linear-gradient(to right, ${colors.join(', ')})`,
    },
  };

  const blurMap = {
    softest: 'blur(8px)',
    soft: 'blur(16px)',
    medium: 'blur(24px)',
    strong: 'blur(36px)',
    stronger: 'blur(48px)',
    strongest: 'blur(64px)',
    none: 'none',
  };

  const filterStyle = typeof blur === 'number' ? `blur(${blur}px)` : blurMap[blur] || 'blur(24px)';

  return (
    <motion.div
      style={{
        ...style,
        filter: filterStyle,
        willChange: 'transform, filter',
        pointerEvents: 'none',
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        transform: `scale(${scale})`
      }}
      animate={animations[mode] || animations.rotate}
      className={cn('glow-effect-aura', className)}
    />
  );
}

