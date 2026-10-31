import React from 'react';
import { useApp } from '../../context/AppContext';
import { FactoryBlueprintMap } from '../common/FactoryBlueprintMap';
import { OfficialPartnersShowcase } from '../common/PartnerLogos';
import { AuthenticClientsMarquee } from '../common/ClientBrandLogos';
import { MadeInIndiaSection } from '../common/MadeInIndiaSection';
import { CustomerStoriesCarousel } from '../common/CustomerStoriesCarousel';
import { CoreValuesSection } from '../common/CoreValuesSection';
import { AtplCommunitySection } from '../common/AtplCommunitySection';
import { 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight, 
  Download, 
  CheckCircle2 
} from 'lucide-react';

export const HomeView = () => {
  const { openDemoModal } = useApp();

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/ATPL_Smart_Factory_Overview_2026.pdf';
    link.setAttribute('download', 'ATPL_Smart_Factory_Overview_2026.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1e293b' }}>

      {/* =========================================================================
          1. SPLIT HERO SECTION: HERO HEADLINE & CTAS (LEFT) + 3D FACTORY BLUEPRINT TOUR (RIGHT)
         ========================================================================= */}
      <section 
        id="hero-split-master"
        aria-label="Archery Technocrats Smart Factory Automation and Interactive Shopfloor Tour"
        style={{
          position: 'relative',
          backgroundColor: '#040914',
          color: '#ffffff',
          paddingTop: 'clamp(2rem, 3.5vh, 3.25rem)',
          paddingBottom: 'clamp(2rem, 3.5vh, 3.25rem)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
          overflow: 'hidden'
        }}
      >
        {/* Cockpit Ambient Lighting Glows */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '5%',
          width: '650px',
          height: '450px',
          background: 'radial-gradient(ellipse at center, rgba(0, 113, 186, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '750px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.12) 0%, rgba(232, 88, 116, 0.05) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{ maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 clamp(1rem, 2vw, 2rem)' }}>
          <style>{`
            .hero-master-split-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              align-items: center;
            }
            @media (min-width: 1080px) {
              .hero-master-split-grid {
                grid-template-columns: minmax(440px, 0.9fr) minmax(580px, 1.3fr);
                gap: 2.25rem;
              }
            }
            .hero-cta-btn-primary {
              background-color: #0071ba;
              color: #ffffff;
              border: 1px solid rgba(0, 240, 255, 0.4);
              padding: 0.85rem 1.65rem;
              font-size: 0.96rem;
              font-weight: 700;
              border-radius: 8px;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              min-height: 48px;
              box-shadow: 0 4px 20px rgba(0, 113, 186, 0.45);
              transition: all 0.15s ease;
            }
            .hero-cta-btn-primary:hover {
              background-color: #005a96;
              box-shadow: 0 6px 24px rgba(0, 240, 255, 0.4);
              transform: translateY(-1px);
            }
            .hero-cta-btn-secondary {
              background-color: rgba(255, 255, 255, 0.05);
              color: #ffffff;
              border: 1.5px solid rgba(255, 255, 255, 0.22);
              padding: 0.85rem 1.45rem;
              font-size: 0.96rem;
              font-weight: 700;
              border-radius: 8px;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              min-height: 48px;
              transition: all 0.15s ease;
            }
            .hero-cta-btn-secondary:hover {
              border-color: #00f0ff;
              color: #00f0ff;
              background-color: rgba(0, 240, 255, 0.08);
              transform: translateY(-1px);
            }
            .hero-cta-btn-download {
              background-color: rgba(232, 88, 116, 0.12);
              color: #ff758f;
              border: 1px solid rgba(232, 88, 116, 0.35);
              padding: 0.85rem 1.25rem;
              font-size: 0.92rem;
              font-weight: 700;


              border-radius: 8px;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.45rem;
              min-height: 48px;
              transition: all 0.15s ease;
            }
            .hero-cta-btn-download:hover {
              background-color: rgba(232, 88, 116, 0.22);
              transform: translateY(-1px);
            }
            .hero-cta-btn-video {
              background-color: rgba(239, 68, 68, 0.15);
              color: #f87171;
              border: 1px solid rgba(239, 68, 68, 0.35);
              padding: 0.85rem 1.25rem;
              font-size: 0.92rem;
              font-weight: 700;
              border-radius: 8px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.45rem;
              min-height: 48px;
              text-decoration: none;
              transition: all 0.15s ease;
            }
            .hero-cta-btn-video:hover {
              background-color: rgba(239, 68, 68, 0.25);
              transform: translateY(-1px);
            }
          `}</style>

          <div className="hero-master-split-grid">
            {/* Left Column: Hero Headline, Subhead, CTAs & Proof Points */}
            <div className="hero-split-left-panel">
              {/* Trust badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(0, 113, 186, 0.15)',
                border: '1px solid rgba(0, 240, 255, 0.4)',
                padding: '0.38rem 0.95rem',
                borderRadius: '999px',
                fontSize: 'clamp(0.72rem, 1.1vw, 0.82rem)',
                fontWeight: 700,
                color: '#00f0ff',
                marginBottom: '1.2rem',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.15)'
              }}>
                <ShieldCheck size={16} color="#00f0ff" style={{ flexShrink: 0 }} />
                <span>Archery Technocrats • 35+ Years Combined Industrial Experience • ISO 9001:2015</span>
              </div>

              {/* Main Headline (Optimized H1 for SEO with Archery Technocrats brand & target keywords) */}
              <h1 style={{
                fontSize: 'clamp(1.95rem, 3.2vw, 3.2rem)',
                fontWeight: 800,
                lineHeight: 1.18,
                letterSpacing: '-0.025em',
                color: '#ffffff',
                marginBottom: '1.1rem',
                fontFamily: 'var(--font-display)'
              }}>
                <span style={{
                  display: 'block',
                  fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)',
                  fontWeight: 800,
                  color: '#00f0ff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '0.35rem'
                }}>
                  Archery Technocrats
                </span>
                Factory Automation That Actually Works on the Shop Floor.
              </h1>

              {/* Sub-headline */}
              <p style={{
                fontSize: 'clamp(0.92rem, 1.15vw, 1.08rem)',
                color: '#94a3b8',
                lineHeight: 1.62,
                maxWidth: '680px',
                marginBottom: '1.75rem'
              }}>
                We build warehouse management software, RFID tracking portals, and inline vision systems that connect straight to your SAP or Oracle ERP. Built, installed, and supported by engineers who understand Indian plant realities.
              </p>

              {/* Action CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.85rem', marginBottom: '1.85rem' }}>
                <button
                  onClick={() => openDemoModal({ mode: 'engineer', solution: 'Plant Engineering Consultation', notes: 'Initiated from Homepage Hero' })}
                  className="hero-cta-btn-primary"
                >
                  <PhoneCall size={18} />
                  <span>Talk to an Automation Engineer</span>
                </button>

                <button
                  onClick={() => openDemoModal({ mode: 'demo', solution: 'Plant Feasibility Walkthrough', notes: 'Initiated from Hero secondary button' })}
                  className="hero-cta-btn-secondary"
                >
                  <span>Schedule Plant Walkthrough</span>
                  <ArrowRight size={17} />
                </button>

                <button
                  onClick={handleDownloadBrochure}
                  className="hero-cta-btn-download"
                  title="Download ATPL Smart Factory Product & Engineering Overview PDF"
                >
                  <Download size={16} />
                  <span>Overview PDF</span>
                </button>

                <a
                  href="https://www.youtube.com/watch?v=4urwO-BZy08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-btn-video"
                  title="Watch ATPL Corporate Overview Video on YouTube"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Watch Video</span>
                </a>
              </div>

              {/* Key practical facts strip */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.35rem', fontSize: '0.84rem', color: '#cbd5e1' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="#00f0ff" /> Live Two-Way SAP & Oracle Sync
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="#00f0ff" /> Rollouts in 2 to 4 Weeks
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="#00f0ff" /> 4-Hour On-Site Support SLA in South India
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Factory Blueprint Tour */}
            <div className="hero-split-right-panel" style={{ width: '100%', minWidth: 0 }}>
              <FactoryBlueprintMap embedded={true} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. AUTHENTIC ENTERPRISE CLIENT LOGOS STRIP
         ========================================================================= */}
      <section style={{ backgroundColor: '#f8fafc', padding: '2.5rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b' }}>
            TRUSTED BY 250+ ENTERPRISE MANUFACTURING PLANTS & SUPPLY CHAIN HUBS
          </div>
        </div>

        {/* Client Logos Marquee */}
        <AuthenticClientsMarquee direction="left" speed={40} />
      </section>

      {/* =========================================================================
          4. MADE IN INDIA. MADE FOR THE WORLD. (Zoho-Style Pride & Scale Section)
         ========================================================================= */}
      <MadeInIndiaSection />

      {/* =========================================================================
          5. WHAT WE DO (Ultra-compact, punchy 1-liner)
         ========================================================================= */}
      <section style={{ padding: '2.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center', padding: '0 1.25rem' }}>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#0071ba',
            backgroundColor: '#eff6ff',
            padding: '0.2rem 0.75rem',
            borderRadius: '999px',
            display: 'inline-block',
            marginBottom: '0.6rem'
          }}>
            WHAT WE DO
          </span>
          <h2 style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.5rem', lineHeight: 1.3, cursor: 'default', caretColor: 'transparent' }}>
            Eliminating Manual Friction Across Warehouse, Line & Dock.
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: 1.55, margin: 0, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
            We pair rugged barcode, RFID, and machine vision hardware with in-house software to connect your shop floor directly to SAP and Oracle.
          </p>
        </div>
      </section>

      {/* =========================================================================
          6. ATPL COMMUNITY & ENGINEERING FORCE (Exact Zoho Community Layout)
         ========================================================================= */}
      <AtplCommunitySection />

      {/* =========================================================================
          7. REAL CUSTOMER STORIES (Zoho-Style Cinematic Carousel Banner)
         ========================================================================= */}
      <CustomerStoriesCarousel />

      {/* =========================================================================
          8. CORE VALUES & PRINCIPLES (Zoho-Style Editorial Principles Section)
         ========================================================================= */}
      <CoreValuesSection />

      {/* =========================================================================
          9. OUR INDUSTRIES (15 Official Sectors from atplgroup.com)
         ========================================================================= */}
      <section 
        id="atpl-industries-section"
        style={{
          padding: '5.5rem 0 5rem 0',
          backgroundColor: '#070d18',
          borderTop: '1px solid rgba(0, 240, 255, 0.2)',
          borderBottom: '1px solid rgba(0, 240, 255, 0.15)',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 clamp(1rem, 2vw, 2.5rem)', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
            <span style={{
              fontSize: '0.76rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#00f0ff',
              backgroundColor: 'rgba(0, 240, 255, 0.12)',
              border: '1px solid rgba(0, 240, 255, 0.35)',
              padding: '0.3rem 0.9rem',
              borderRadius: '999px',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              TRANSITION TO DIGITAL TRANSFORMATION
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.1rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: '#ffffff',
              margin: '0 0 1rem 0'
            }}>
              Our <span className="gradient-text">Industries</span>
            </h2>
            <p style={{
              fontSize: 'clamp(0.98rem, 1.2vw, 1.12rem)',
              color: '#94a3b8',
              lineHeight: 1.65,
              margin: 0
            }}>
              We integrate our products and services across various industries where automation is essential, catering to those seeking to transition from traditional methods to digital transformation.
            </p>
          </div>

          {/* 15 Industries Responsive Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(215px, 1fr))',
            gap: '1.25rem'
          }}>
            {[
              { name: 'Automation', icon: '🤖', desc: 'Robotic assembly & PLC line synchronization' },
              { name: 'Consumer Durable', icon: '🛋️', desc: 'Traceability & assembly line QC' },
              { name: 'Consumer Electronics', icon: '📱', desc: 'Component serialization & PCB tracking' },
              { name: 'E-Commerce', icon: '🛒', desc: 'High-speed sortation & 3D bin WMS' },
              { name: 'Electricals', icon: '⚡', desc: 'Switchgear & motor manufacturing tracking' },
              { name: 'FMCG', icon: '📦', desc: 'High-speed packaging aggregation & labeling' },
              { name: 'Government', icon: '🏛️', desc: 'Asset tagging, tracking & public logistics' },
              { name: 'Healthcare', icon: '🏥', desc: 'Medical devices & specimen traceability' },
              { name: 'Infrastructure', icon: '🏗️', desc: 'Heavy asset RFID & fleet dispatch' },
              { name: 'Manufacturing', icon: '🏭', desc: 'End-to-end MES & shopfloor automation' },
              { name: 'Oil & Gas', icon: '🛢️', desc: 'Hazardous area rugged barcode tracking' },
              { name: 'Pharma', icon: '💊', desc: '21 CFR Part 11 & DGFT serial aggregation' },
              { name: 'Postal & Courier', icon: '🚚', desc: 'Last-mile handhelds & parcel sortation' },
              { name: 'Power', icon: '💡', desc: 'Grid asset tracking & substation audits' },
              { name: 'Retail', icon: '🛍️', desc: 'Inventory counts & RFID stock visibility' }
            ].map((ind, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '1.4rem 1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#00f0ff';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 113, 186, 0.35)';
                  e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(15, 23, 42, 0.75)';
                }}
                onClick={() => openDemoModal({ solution: `${ind.name} Automation`, notes: `Inquiry regarding ${ind.name} industry solutions.` })}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ fontSize: '1.6rem' }}>{ind.icon}</span>
                  <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>
                    {ind.name}
                  </h3>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.45, margin: 0 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. CLIENT TESTIMONIALS (Official Endorsement from atplgroup.com)
         ========================================================================= */}
      <section 
        id="client-testimonials-section"
        style={{
          padding: '5.5rem 0',
          backgroundColor: '#0a0f1d',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#ffffff',
          position: 'relative'
        }}
      >
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 clamp(1rem, 2vw, 2.5rem)', textAlign: 'center' }}>
          <div className="badge badge-cyan" style={{ marginBottom: '1rem' }}>
            VERIFIED CLIENT EXPERIENCES
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.6vw, 2.8rem)', fontWeight: 800, color: '#ffffff', marginBottom: '2.5rem' }}>
            Client Testimonials
          </h2>

          <div style={{
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.95) 0%, rgba(10, 16, 30, 0.95) 100%)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            borderRadius: '16px',
            padding: '3rem 2.5rem',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.45)',
            position: 'relative'
          }}>
            <div style={{ fontSize: '3rem', color: '#00f0ff', lineHeight: 1, marginBottom: '1rem', fontFamily: 'serif' }}>
              “
            </div>
            <blockquote style={{
              color: '#f1f5f9',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.22rem)',
              lineHeight: 1.8,
              fontStyle: 'italic',
              maxWidth: '820px',
              margin: '0 auto 2rem auto'
            }}>
              "My experience with ATPL is wonderful. The service and products are of high standards at great prices. The sales reps are some of the best in the business. As a first time customer all my needs were met and we now have great tags for our products. I look forward to placing my next order. I have already recommended ATPL to other businesses. I am looking forward to working with ATPL for years to come."
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #00f0ff',
                backgroundColor: '#1e293b'
              }}>
                <img 
                  src="https://atplgroup.com/wp-content/uploads/2024/01/tel.jpg" 
                  alt="Mr. Vinayagam, Senior Consultant"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.innerText = 'MV';
                    e.currentTarget.parentElement.style.display = 'flex';
                    e.currentTarget.parentElement.style.alignItems = 'center';
                    e.currentTarget.parentElement.style.justifyContent = 'center';
                    e.currentTarget.parentElement.style.color = '#00f0ff';
                    e.currentTarget.parentElement.style.fontWeight = '800';
                  }}
                />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.1rem' }}>
                  Mr. Vinayagam
                </div>
                <div style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600 }}>
                  Senior Consultant • ATPL Enterprise Client
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. STRATEGIC OEM HARDWARE PARTNERS SHOWCASE
         ========================================================================= */}
      <section style={{ padding: '3.5rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <OfficialPartnersShowcase theme="light" />
        </div>
      </section>

      {/* =========================================================================
          12. FINAL CALL TO ACTION (Direct, Human, Grounded)
         ========================================================================= */}
      <section style={{
        backgroundColor: '#0f172a',
        padding: '5rem 0',
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
          
          <span style={{
            fontSize: '0.78rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.12)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            padding: '0.35rem 0.9rem',
            borderRadius: '999px',
            display: 'inline-block',
            marginBottom: '1.25rem'
          }}>
            TALK TO AN ENGINEER
          </span>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Have a Bottleneck on Your Line? Let’s Walk Your Floor.
          </h2>

          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '2.5rem' }}>
            Invite an ATPL systems engineer to review your dispatch dock, packing line, or warehouse layout. We will give you a practical assessment of where automation makes sense — and where it doesn't.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <button
              onClick={() => openDemoModal({ mode: 'engineer', solution: 'Plant Walkthrough Audit', notes: 'Initiated from Final CTA' })}
              style={{
                backgroundColor: '#0071ba',
                color: '#ffffff',
                border: 'none',
                padding: '1rem 2.2rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 20px rgba(0, 113, 186, 0.4)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005a96'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0071ba'}
            >
              <span>Schedule a Plant Visit</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="tel:04435537618"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '1rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'}
            >
              <PhoneCall size={17} />
              <span>Call Chennai HQ: 044 3553 7618</span>
            </a>
          </div>

          {/* Plant & Contact Information Grid */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            textAlign: 'left',
            fontSize: '0.85rem',
            color: '#94a3b8'
          }}>
            <address
              itemScope
              itemType="https://schema.org/PostalAddress"
              style={{ fontStyle: 'normal' }}
            >
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.35rem' }}>Chennai Head Office</strong>
              <div itemProp="streetAddress">TIDEL Park, G11 Ground Floor, No. 4 Canal Bank Rd, Taramani</div>
              <div>
                <span itemProp="addressLocality">Chennai</span>,{' '}
                <span itemProp="addressRegion">Tamil Nadu</span> –{' '}
                <span itemProp="postalCode">600113</span>
              </div>
              <div itemProp="addressCountry">India</div>
            </address>

            <address
              itemScope
              itemType="https://schema.org/PostalAddress"
              style={{ fontStyle: 'normal' }}
            >
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.35rem' }}>Madurai R&D Labs</strong>
              <div itemProp="streetAddress">TCE-TBI, Thiagarajar College of Engineering Campus</div>
              <div>
                <span itemProp="addressLocality">Madurai</span>,{' '}
                <span itemProp="addressRegion">Tamil Nadu</span> –{' '}
                <span itemProp="postalCode">625015</span>
              </div>
              <div style={{ marginTop: '0.25rem', color: '#38bdf8' }}>Regional Hub: Hosur &amp; Bengaluru</div>
            </address>

            <div>
              <strong style={{ color: '#ffffff', display: 'block', marginBottom: '0.35rem' }}>Direct Helplines</strong>
              <div>Sales: <a href="tel:+916380859963" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 63808 59963</a></div>
              <div>Support: <a href="tel:+917200157626" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 72001 57626</a></div>
              <div>Toll-Free: <a href="tel:1800120774777" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}>1800-120-774777</a></div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
