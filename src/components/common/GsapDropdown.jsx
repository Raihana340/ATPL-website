import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * GsapDropdown - Dynamic Timeline Clear & Rebuild Dropdown Component
 * Based on GreenSock CodePen raMQBVQ (Timeline clear and rebuild pattern)
 * 
 * Features:
 * - Fluid entrance with back.out spring scaling & smooth translation
 * - Staggered cascade of internal .dropdown-hover-item elements
 * - Clean interruption handling via timeline.clear()
 * - Graceful exit transitions without sudden unmounting flashes
 */
export const GsapDropdown = ({
  isOpen,
  children,
  style = {},
  className = '',
  align = 'left', // 'left', 'center', or 'right'
  width = 'auto',
  onMouseEnter,
  onMouseLeave
}) => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);

  // Initialize master timeline once
  useEffect(() => {
    timelineRef.current = gsap.timeline({ paused: true });

    // Initial hidden state
    if (containerRef.current) {
      gsap.set(containerRef.current, {
        autoAlpha: 0,
        display: 'none',
        y: -12,
        scaleY: 0.94,
        scaleX: 0.98,
        transformOrigin: align === 'right' ? 'top right' : align === 'center' ? 'top center' : 'top left'
      });
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [align]);

  // Handle open / close transitions using Timeline Clear & Rebuild pattern (CodePen raMQBVQ)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !timelineRef.current) return;

    const tl = timelineRef.current;

    // 1. Clear any active or pending tweens on the timeline
    tl.clear();

    if (isOpen) {
      // 2a. Rebuild with entrance tweens
      const items = el.querySelectorAll('.dropdown-hover-item');

      tl.set(el, {
        display: style.display || 'flex',
        transformOrigin: align === 'right' ? 'top right' : align === 'center' ? 'top center' : 'top left'
      })
      .fromTo(
        el,
        {
          autoAlpha: 0,
          y: -14,
          scaleY: 0.93,
          scaleX: 0.97
        },
        {
          autoAlpha: 1,
          y: 0,
          scaleY: 1,
          scaleX: 1,
          duration: 0.28,
          ease: 'power3.out'
        }
      );

      // Stagger child items if present
      if (items && items.length > 0) {
        tl.fromTo(
          items,
          {
            autoAlpha: 0,
            y: -8,
            x: -2
          },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.22,
            stagger: 0.035,
            ease: 'power2.out'
          },
          '-=0.18'
        );
      }

      tl.play();
    } else {
      // 2b. Rebuild with exit tweens (smooth fade-out before hiding)
      tl.to(el, {
        autoAlpha: 0,
        y: -8,
        scaleY: 0.97,
        scaleX: 0.99,
        duration: 0.16,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(el, { display: 'none' });
        }
      });

      tl.play();
    }
  }, [isOpen, align, style.display]);

  // Position alignment
  const alignmentStyles = {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    zIndex: 1050,
    ...(align === 'right'
      ? { right: 0 }
      : align === 'center'
      ? { left: '50%', transform: 'translateX(-50%)' }
      : { left: '-15px' })
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`gsap-dropdown-card ${className}`}
      style={{
        ...alignmentStyles,
        width,
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        boxShadow: '0 20px 45px -12px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05), 0 8px 16px -4px rgba(0, 113, 186, 0.04)',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        padding: '1.25rem',
        boxSizing: 'border-box',
        backdropFilter: 'blur(16px)',
        pointerEvents: isOpen ? 'auto' : 'none',
        ...style
      }}
    >
      {/* Decorative Top Arrow Pointer Indicator */}
      <div
        style={{
          position: 'absolute',
          top: '-6px',
          ...(align === 'right'
            ? { right: '28px', transform: 'rotate(45deg)' }
            : align === 'center'
            ? { left: '50%', transform: 'translateX(-50%) rotate(45deg)' }
            : { left: '32px', transform: 'rotate(45deg)' }),
          width: '12px',
          height: '12px',
          backgroundColor: '#ffffff',
          borderLeft: '1px solid rgba(226, 232, 240, 0.9)',
          borderTop: '1px solid rgba(226, 232, 240, 0.9)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* Main Content Area */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        {children}
      </div>
    </div>
  );
};
