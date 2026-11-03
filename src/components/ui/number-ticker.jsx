import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className = '',
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
  style = {}
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState(
    direction === 'down' ? value.toFixed(decimalPlaces) : (0).toFixed(decimalPlaces)
  );

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      }).format(Number(latest.toFixed(decimalPlaces))));
    });
    return () => unsubscribe();
  }, [springValue, decimalPlaces]);

  return (
    <span
      ref={ref}
      className={className}
      style={{
        display: 'inline-block',
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: '-0.02em',
        ...style
      }}
    >
      {prefix}{displayValue}{suffix}
    </span>
  );
}

