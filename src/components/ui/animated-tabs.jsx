"use client";
import React from 'react';
import { motion } from 'framer-motion';

/**
 * 21st.dev Animated Sliding Pill Tabs
 * Follows UI/UX Pro Max Priority #2 (Touch & Interaction) & #9 (Navigation Patterns):
 * - Minimum 44px touch targets
 * - Smooth Framer Motion layoutId pill gliding
 * - Accessible keyboard navigation & ARIA tablist
 */
export const AnimatedTabs = ({ 
  tabs = [], 
  activeTab, 
  onSelectTab, 
  layoutId = "activePillTab",
  size = "md",
  className = "" 
}) => {
  return (
    <div 
      role="tablist"
      aria-label="Navigation Tabs"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.35rem',
        borderRadius: '999px',
        backgroundColor: 'rgba(15, 23, 42, 0.06)',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        position: 'relative',
        gap: '0.25rem',
        maxWidth: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none',
        boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.04)'
      }}
    >
      {tabs.map((tab) => {
        const isSelected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isSelected}
            tabIndex={isSelected ? 0 : -1}
            onClick={() => onSelectTab(tab.id)}
            style={{
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: size === 'sm' ? '0.4rem 0.9rem' : '0.55rem 1.25rem',
              minHeight: '44px',
              borderRadius: '999px',
              fontSize: size === 'sm' ? '0.82rem' : '0.88rem',
              fontWeight: 700,
              cursor: 'pointer',
              border: 'none',
              backgroundColor: 'transparent',
              color: isSelected ? '#ffffff' : '#64748b',
              whiteSpace: 'nowrap',
              zIndex: 1,
              outline: 'none',
              transition: 'color 0.2s cubic-bezier(0.2, 0.9, 0.3, 1)'
            }}
          >
            {isSelected && (
              <motion.div
                layoutId={layoutId}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                  bounce: 0
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '999px',
                  backgroundColor: '#0071ba',
                  boxShadow: '0 4px 14px rgba(0, 113, 186, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
                  zIndex: -1
                }}
              />
            )}
            
            {tab.icon && (
              <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                {tab.icon}
              </span>
            )}
            
            <span>{tab.label}</span>

            {tab.count !== undefined && (
              <span
                style={{
                  fontSize: '0.72rem',
                  padding: '2px 6px',
                  borderRadius: '999px',
                  backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.22)' : 'rgba(100, 116, 139, 0.12)',
                  color: isSelected ? '#ffffff' : '#64748b',
                  fontWeight: 800
                }}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

