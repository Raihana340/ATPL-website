import fs from 'fs';
import path from 'path';

// =========================================================================
// 1. ENHANCE SoftwareView.jsx WITH SPOTLIGHT & BROCHURE HIGHLIGHTS
// =========================================================================
const softwareViewPath = path.resolve('src/components/pages/SoftwareView.jsx');
let swContent = fs.readFileSync(softwareViewPath, 'utf8');

// Update categories to put highlighted badges
const catMarker = "const categories = [";
const catEndMarker = "];\n\n  const softwareProducts = [";
const catEndMarkerCRLF = "];\r\n\r\n  const softwareProducts = [";

const newCategories = `const categories = [
    { id: 'all', label: 'All Software Suites' },
    { id: 'mdm', label: '⭐ PERFECTEDGE MDM (NEW)' },
    { id: 'labeler', label: '⭐ PERFECT LABELER (AI)' },
    { id: 'flow360', label: '⭐ PERFECT FLOW 360 (CRM)' },
    { id: 'audit', label: 'PERFECT AUDIT' },
    { id: 'warehouse', label: 'PERFECT WAREHOUSE' },
    { id: 'trace', label: 'PERFECT TRACE' },
    { id: 'pms', label: 'PERFECT PMS' },
    { id: 'verifier', label: 'PERFECT VERIFIER' },
    { id: 'vision', label: 'COMPUTER VISION' }
  ];`;

const cStart = swContent.indexOf(catMarker);
let cEnd = swContent.indexOf(catEndMarker);
let cMarkerLen = catEndMarker.length;
if (cEnd === -1) {
  cEnd = swContent.indexOf(catEndMarkerCRLF);
  cMarkerLen = catEndMarkerCRLF.length;
}

if (cStart !== -1 && cEnd !== -1) {
  swContent = swContent.substring(0, cStart) + newCategories + swContent.substring(cEnd + 1);
}

// In the header, right before Filter Pills Navigation, insert the "FEATURED BROCHURE SUITES" Spotlight Grid!
const filterPillsMarker = '{/* Filter Pills Navigation */}';
const fpIndex = swContent.indexOf(filterPillsMarker);

if (fpIndex !== -1) {
  const spotlightSection = `{/* =========================================================================
              FEATURED BROCHURE SPOTLIGHT (MDM • LABELER • FLOW 360)
             ========================================================================= */}
          <div style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: '#0a162b',
            borderRadius: '20px',
            border: '2px solid rgba(56, 189, 248, 0.45)',
            boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              marginBottom: '1.75rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              paddingBottom: '1.25rem'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-mono, monospace)'
                }}>
                  <span>★ OFFICIAL BROCHURE RELEASES</span>
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 2.4vw, 2.1rem)',
                  fontWeight: 900,
                  color: '#ffffff',
                  margin: 0,
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-display, Inter, sans-serif)'
                }}>
                  Highlighted Product Suites: <span style={{ color: '#38bdf8' }}>MDM • Labeler • Flow 360</span>
                </h3>
              </div>

              <div style={{ fontSize: '0.84rem', color: '#94a3b8', maxWidth: '420px', textAlign: 'right' }}>
                Extracted directly from ATPL Group physical product brochures with complete features and specifications.
              </div>
            </div>

            {/* 3 Spotlight Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* 1. PerfectEdge MDM */}
              <div 
                onClick={() => {
                  setActiveCategory('mdm');
                  const el = document.getElementById('software-mdm');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#0f1f3d',
                  border: '1.5px solid rgba(56, 189, 248, 0.35)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#38bdf8';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(56, 189, 248, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ backgroundColor: 'rgba(220, 38, 38, 0.2)', color: '#f87171', border: '1px solid rgba(220, 38, 38, 0.4)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 800 }}>
                      NEW BROCHURE RELEASE
                    </span>
                    <span style={{ color: '#38bdf8', fontSize: '0.78rem', fontWeight: 700 }}>MDM</span>
                  </div>

                  <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.35rem 0' }}>
                    PerfectEdge <span style={{ color: '#38bdf8' }}>MDM</span>
                  </h4>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#93c5fd', marginBottom: '0.85rem' }}>
                    Smart Device Management Made Simple.
                  </div>

                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Single centralized MDM platform for multi-location device management</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Restrict unauthorized app usage (YouTube, games, social media)</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Track online/offline, battery health & live location updates</span>
                    </li>
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38bdf8' }}>Explore Full Module ➔</span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Official Brochure Collateral</span>
                </div>
              </div>

              {/* 2. Perfect Labeler */}
              <div 
                onClick={() => {
                  setActiveCategory('labeler');
                  const el = document.getElementById('software-labeler');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#0f1f3d',
                  border: '1.5px solid rgba(245, 158, 11, 0.35)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#f59e0b';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(245, 158, 11, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.35)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.4)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 800 }}>
                      AI CLOUD PRINTING
                    </span>
                    <span style={{ color: '#f59e0b', fontSize: '0.78rem', fontWeight: 700 }}>LABEL HUB</span>
                  </div>

                  <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.35rem 0' }}>
                    Perfect <span style={{ color: '#f59e0b' }}>Labeler</span>
                  </h4>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fde68a', marginBottom: '0.85rem' }}>
                    Print Anytime. Anywhere Effortlessly
                  </div>

                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Generate label templates instantly using simple AI prompts</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Excel upload, PDF upload, or manual data entry</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>No extra cost for multiple systems or printers across branches</span>
                    </li>
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#f59e0b' }}>Explore Full Module ➔</span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>AI Template Generation</span>
                </div>
              </div>

              {/* 3. Perfect Flow 360 */}
              <div 
                onClick={() => {
                  setActiveCategory('flow360');
                  const el = document.getElementById('software-flow360');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#0f1f3d',
                  border: '1.5px solid rgba(16, 185, 129, 0.35)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(16, 185, 129, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.35)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.68rem', fontWeight: 800 }}>
                      ENTERPRISE CRM
                    </span>
                    <span style={{ color: '#10b981', fontSize: '0.78rem', fontWeight: 700 }}>FIELD OPS</span>
                  </div>

                  <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.35rem 0' }}>
                    Perfect <span style={{ color: '#10b981' }}>Flow 360</span>
                  </h4>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#a7f3d0', marginBottom: '0.85rem' }}>
                    Customer Relationship Management
                  </div>

                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.82rem', color: '#cbd5e1' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Complete lead lifecycle & communication history in one platform</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Generate professional quotations instantly with approval workflows</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>Employee attendance, field tracking & live delivery tracking</span>
                    </li>
                  </ul>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#10b981' }}>Explore Full Module ➔</span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Live Delivery Tracking</span>
                </div>
              </div>
            </div>
          </div>\n\n          `;

  swContent = swContent.substring(0, fpIndex) + spotlightSection + swContent.substring(fpIndex);
}

// In the product card rendering loop, add the brochure highlight ribbon on mdm, labeler, and flow360!
const ribbonMarker = '<div className="container" style={{ maxWidth: \'1280px\', margin: \'0 auto\', padding: \'0 clamp(1rem, 2.5vw, 2.5rem)\' }}>';
const rIndex = swContent.indexOf(ribbonMarker);

if (rIndex !== -1) {
  const highlightRibbon = `<div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 2.5vw, 2.5rem)' }}>
                {['mdm', 'labeler', 'flow360'].includes(prod.id) && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'rgba(234, 179, 8, 0.15)',
                    border: '1.5px solid #eab308',
                    color: isDark ? '#fef08a' : '#854d0e',
                    padding: '0.35rem 0.95rem',
                    borderRadius: '999px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                    fontFamily: 'var(--font-mono, monospace)',
                    boxShadow: '0 4px 14px rgba(234, 179, 8, 0.2)'
                  }}>
                    <span>★ FEATURED FROM OFFICIAL ATPL BROCHURE • 2026 EDITION</span>
                  </div>
                )}`;

  swContent = swContent.substring(0, rIndex) + highlightRibbon + swContent.substring(rIndex + ribbonMarker.length);
}

fs.writeFileSync(softwareViewPath, swContent, 'utf8');
console.log('Successfully enhanced SoftwareView.jsx with brochure spotlights and highlights!');

// =========================================================================
// 2. ENHANCE Navbar.jsx Software Dropdown TO INCLUDE ALL 3
// =========================================================================
const navPath = path.resolve('src/components/common/Navbar.jsx');
let navContent = fs.readFileSync(navPath, 'utf8');

const navMarker = '<div style={{ fontSize: \'0.75rem\', fontWeight: 800, textTransform: \'uppercase\', color: \'#94a3b8\', letterSpacing: \'0.06em\', marginBottom: \'0.4rem\' }}>\n                      SUPPLY CHAIN & PRODUCTION\n                    </div>';
const navMarkerCRLF = '<div style={{ fontSize: \'0.75rem\', fontWeight: 800, textTransform: \'uppercase\', color: \'#94a3b8\', letterSpacing: \'0.06em\', marginBottom: \'0.4rem\' }}>\r\n                      SUPPLY CHAIN & PRODUCTION\r\n                    </div>';

let nIdx = navContent.indexOf(navMarker);
if (nIdx === -1) {
  nIdx = navContent.indexOf(navMarkerCRLF);
}

if (nIdx !== -1) {
  const extraNavItems = `<div 
                      onClick={() => handleNavClick('software')}
                      style={{ padding: '0.55rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', gap: '0.75rem', backgroundColor: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)' }}
                      className="dropdown-hover-item"
                    >
                      <Smartphone size={20} color="#0071ba" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span>PerfectEdge MDM</span>
                          <span style={{ backgroundColor: '#dc2626', color: '#ffffff', fontSize: '0.62rem', fontWeight: 800, padding: '1px 5px', borderRadius: '4px' }}>NEW</span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>Smart device management & kiosk lockdown</div>
                      </div>
                    </div>

                    <div 
                      onClick={() => handleNavClick('software')}
                      style={{ padding: '0.55rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', gap: '0.75rem', backgroundColor: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.25)' }}
                      className="dropdown-hover-item"
                    >
                      <Printer size={20} color="#f59e0b" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span>Perfect Labeler</span>
                          <span style={{ backgroundColor: '#f59e0b', color: '#060b14', fontSize: '0.62rem', fontWeight: 800, padding: '1px 5px', borderRadius: '4px' }}>AI</span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>AI prompt cloud label design & multi-branch</div>
                      </div>
                    </div>

                    <div 
                      onClick={() => handleNavClick('software')}
                      style={{ padding: '0.55rem', borderRadius: '8px', cursor: 'pointer', display: 'flex', gap: '0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.25)' }}
                      className="dropdown-hover-item"
                    >
                      <Users size={20} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span>Perfect Flow 360</span>
                          <span style={{ backgroundColor: '#10b981', color: '#ffffff', fontSize: '0.62rem', fontWeight: 800, padding: '1px 5px', borderRadius: '4px' }}>CRM</span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b' }}>CRM, instant quotes, attendance & live delivery</div>
                      </div>
                    </div>\n\n                    `;

  navContent = navContent.substring(0, nIdx) + extraNavItems + navContent.substring(nIdx);
  fs.writeFileSync(navPath, navContent, 'utf8');
  console.log('Successfully updated Navbar.jsx Software dropdown!');
}
