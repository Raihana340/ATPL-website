import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PageHeroBackdrop, HeroFilterPill } from '../common/PageHeroBackdrop';
import { HardwareFlipCaterpillar } from '../hardware/HardwareFlipCaterpillar';

export const HardwareView = () => {
  const { openDemoModal } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Solutions' },
    { id: 'scanners', label: 'Scanning' },
    { id: 'rfid', label: 'RFID Portals' },
    { id: 'printers', label: 'Printers' },
    { id: 'marking', label: 'DPM Marking' },
    { id: 'mobility', label: 'Mobility Edge' },
    { id: 'plc', label: 'Machine Vision' },
    { id: 'touch', label: 'Touch Systems' },
    { id: 'kiosk', label: 'Kiosks' },
    { id: 'voice', label: 'Wearable Voice' }
  ];

  return (
    <div className="section" style={{ paddingTop: '4rem', paddingBottom: '5rem', backgroundColor: 'transparent' }}>
      <div className="container">
        
        {/* Dynamic Radiant Page Hero Backdrop */}
        <PageHeroBackdrop
          badgeIcon={Sparkles}
          badgeText="AUTHENTIC ATPL AIDC & SENSOR HARDWARE"
          badgeColor="#E85874"
          accentColor="#E85874"
          secondaryGlow="#00f0ff"
          systemTag="[ SHOPFLOOR RIGS // 24/7 FACTORY TOUGH ]"
          title="Enterprise Hardware Built for"
          highlightText="Demanding Factory Floors"
          description="Archery Technocrats designs, sources, and commissions enterprise-grade AIDC hardware engineered for 24/7 reliability in automotive foundries, sterile pharmaceutical cleanrooms, and high-velocity fulfillment centers."
        >
          {categories.map(cat => (
            <HeroFilterPill
              key={cat.id}
              active={activeCategory === cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setTimeout(() => {
                  const el = document.getElementById('hardware-3d-deck');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 50);
              }}
              label={cat.label}
              accentColor="#E85874"
            />
          ))}
        </PageHeroBackdrop>


        {/* =========================================================================
            GSAP FLIP CATERPILLAR HARDWARE PRODUCT SHOWCASE (Swiping Cards Animation)
           ========================================================================= */}
        <HardwareFlipCaterpillar 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {/* Custom Integration & Consumables Banner */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '2.5rem 3rem', 
            background: 'rgba(8, 17, 34, 0.85)', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem', 
            alignItems: 'center',
            marginTop: '1.5rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div>
            <div className="badge badge-emerald" style={{ marginBottom: '0.5rem' }}>TURNKEY CONSUMABLES & TAGS</div>
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 800 }}>
              Specialized RFID Tags, Barcode Labels & Thermal Ribbons
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.94rem', margin: 0, maxWidth: '750px', lineHeight: 1.6 }}>
              We supply ISO/IEC compliant tamper-evident barcode labels, metal-mount UHF RFID tags, chemical-resistant tags for pharma autoclaves, and high-resin thermal transfer ribbons.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <button
              onClick={() => openDemoModal({ solution: 'Consumables & Labels RFQ', notes: 'Inquiry for specialized RFID tags, labels, and ribbons.' })}
              className="btn btn-secondary"
              style={{ whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <span>Request Consumables Catalog</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
