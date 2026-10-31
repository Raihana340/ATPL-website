import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/components/pages/HomeView.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace appleShowcaseApps
const oldAppsStart = content.indexOf('const appleShowcaseApps = [');
const oldAppsEnd = content.indexOf('const coreSolutions = [');

if (oldAppsStart === -1 || oldAppsEnd === -1) {
  console.error('Could not find appleShowcaseApps boundary', { oldAppsStart, oldAppsEnd });
  process.exit(1);
}

const newApps = `const appleShowcaseApps = [
    {
      id: 'audit',
      name: 'Perfect Audit',
      titlePrimary: 'PERFECT',
      titleSecondary: 'AUDIT',
      tagline: 'ISO Audit Application for All Industries',
      badge: 'ISO AUDIT & COMPLIANCE',
      color: '#0071ba',
      accentBg: '#eff6ff',
      theme: 'dark',
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      image: '/assets/images/software_audit.jpg',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Audit-Management-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=4urwO-BZy08',
      authenticParagraph: 'An ISO Audit application for all industries is a software tool designed to assist companies in conducting and managing audits related to ISO (International Organization for Standardization) standards. Conducting regular audits ensures that a company’s processes and practices align with these standards, helping to maintain compliance, improve operations, and enhance overall quality.',
      features: [
        'Tailored for manufacturing/production industries to plan, conduct, and manage ISO audits',
        'Ensures continuous compliance with ISO 9001, IATF 16949 & EHS standards',
        'Facilitates continuous improvement efforts and digital CAPA workflows across plants'
      ],
      screenData: {
        title: 'PERFECT AUDIT',
        metric: 'ISO COMPLIANT',
        sub: 'Digital Audit & CAPA',
        status: 'Audit Prep: -70% Time',
        tag: 'VERIFIED',
        color: '#38bdf8'
      }
    },
    {
      id: 'warehouse',
      name: 'Perfect Warehouse',
      titlePrimary: 'PERFECT',
      titleSecondary: 'WAREHOUSE',
      tagline: 'Store Manager Application for Warehouse Optimization',
      badge: 'STORE MANAGER & WAREHOUSE',
      color: '#0071ba',
      accentBg: '#eff6ff',
      theme: 'light',
      ctaColor: '#1e293b',
      ctaHoverColor: '#0f172a',
      image: '/assets/images/software_warehouse.jpg',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Warehouse-Management-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=27tgTz-Bclw',
      authenticParagraph: 'Store manager application for a warehouse is a specialized software tool designed to optimize and streamline all your warehouse operations. It generates intuitive daily reports for Directors and Executives regarding inventory processes, leading to a reduction of manual work involved in warehouse management by 20-30%.',
      features: [
        'Generates intuitive daily reports for Directors and Executives regarding inventory processes',
        'Reduces manual warehouse management workflows by 20% to 30%',
        'Enhances accuracy of inward and outward movement with AI virtual house implementation'
      ],
      screenData: {
        title: 'PERFECT WAREHOUSE',
        metric: '-30% MANUAL',
        sub: 'AI Virtual Warehouse',
        status: 'Daily Exec Reports: Active',
        tag: 'OPTIMIZED',
        color: '#0071ba'
      }
    },
    {
      id: 'trace',
      name: 'Perfect Trace',
      titlePrimary: 'PERFECT',
      titleSecondary: 'TRACE',
      tagline: 'End-to-End Traceability & Supply Chain Visibility',
      badge: 'TRACEABILITY & SUPPLY CHAIN',
      color: '#0071ba',
      accentBg: '#eff6ff',
      theme: 'dark',
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      image: '/assets/images/software_trace.jpg',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Audit-Management-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=4urwO-BZy08',
      authenticParagraph: 'A traceability application is a software tool, designed to track and record the movement, origin, and history of products, components, or materials throughout their lifecycle. The main goal of traceability is to provide transparency, accountability, and visibility into the supply chain.',
      features: [
        'Tracks and records movement, origin, and history of products throughout lifecycle',
        'Provides transparency, accountability, and visibility across supply chain tiers',
        'Enhances compliance, facilitates fast recalls, and improves overall process efficiency'
      ],
      screenData: {
        title: 'PERFECT TRACE',
        metric: '100% GENEALOGY',
        sub: 'Lifecycle History Log',
        status: 'Supply Chain: Transparent',
        tag: 'LIVE TRACE',
        color: '#38bdf8'
      }
    },
    {
      id: 'pms',
      name: 'Perfect PMS',
      titlePrimary: 'PERFECT',
      titleSecondary: 'PMS',
      tagline: 'Production Monitoring System with Real-Time Defect Identification',
      badge: 'PRODUCTION MONITORING (MES)',
      color: '#0071ba',
      accentBg: '#eff6ff',
      theme: 'light',
      ctaColor: '#1e293b',
      ctaHoverColor: '#0f172a',
      image: '/assets/images/software_pms.jpg',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Production-Monitoring-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=27tgTz-Bclw',
      authenticParagraph: 'Implementing a Production Monitoring System in your unit can lead to increased operational efficiency, reduced downtime, improved quality, and better decision-making based on real-time and historical data. Robust defects identification system contributes significantly to overall product quality.',
      features: [
        'Tracks, analyzes, and visualizes manufacturing processes in real-time',
        'Robust defects identification system minimizes defect impact on customer satisfaction',
        'Substantially reduces machine downtime and boosts shift-level production efficiency'
      ],
      screenData: {
        title: 'PERFECT PMS',
        metric: 'REAL-TIME MES',
        sub: 'Zero Downtime Architecture',
        status: 'Defect Control: Active',
        tag: 'RUNNING',
        color: '#0071ba'
      }
    },
    {
      id: 'verifier',
      name: 'Perfect Verifier',
      titlePrimary: 'PERFECT',
      titleSecondary: 'VERIFIER',
      tagline: 'Accurate Identification & Lean Manufacturing Quality Control',
      badge: 'QUALITY VERIFIER & IDENTIFICATION',
      color: '#0071ba',
      accentBg: '#eff6ff',
      theme: 'dark',
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      image: '/assets/images/software_verifier.jpg',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Quality-Verifier.pdf',
      videoUrl: null,
      authenticParagraph: 'Our very owned verifier applications is ensuring accurate identification, tracking, and quality control of products throughout the production process. These applications help in managing inventory, reducing errors, and enhancing overall efficiency. It aligns with the principles of lean manufacturing and quality control, ensuring that each batch is accurately identified and monitored throughout its lifecycle.',
      features: [
        'Ensures accurate identification, tracking, and quality control of products',
        'Aligns directly with lean manufacturing principles and zero-error batch control',
        'Reduces shop-floor labeling discrepancies and strengthens traceability lifecycle'
      ],
      screenData: {
        title: 'PERFECT VERIFIER',
        metric: 'LEAN QUALITY',
        sub: 'Accurate Identification',
        status: 'Batch Verification: 100%',
        tag: 'ZERO DEFECTS',
        color: '#38bdf8'
      }
    }
  ];

  `;

content = content.substring(0, oldAppsStart) + newApps + content.substring(oldAppsEnd);

// 2. Replace Apple Header with Authentic Software Header
const headerSearch = '{/* Apple-Style Minimal Center Header */}';
const headerIndex = content.indexOf(headerSearch);
const stageSearch = '{/* 3D Fanned Device Showcase Arc */}';
const stageIndex = content.indexOf(stageSearch);

if (headerIndex !== -1 && stageIndex !== -1) {
  const newHeader = `{/* Apple-Style Minimal Center Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              color: '#0071ba',
              padding: '0.4rem 1.15rem',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontFamily: 'var(--font-mono, monospace)'
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#0071ba' }} />
              <span>ATPL PROPRIETARY SOFTWARE</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              margin: '0 0 0.85rem 0',
              fontFamily: 'var(--font-display, Inter, sans-serif)'
            }}>
              SOFTWARE <strong style={{ color: '#0071ba' }}>SOLUTIONS</strong>
            </h2>

            <p style={{
              fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)',
              fontWeight: 700,
              color: '#334155',
              maxWidth: '850px',
              margin: '0 auto 0.85rem auto',
              lineHeight: 1.4
            }}>
              Creating application-based solutions to streamline work processes seamlessly.
            </p>

            <p style={{
              fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
              color: '#64748b',
              maxWidth: '860px',
              margin: '0 auto 2.25rem auto',
              lineHeight: 1.65
            }}>
              As a prominent industrial solution provider, we specialize in pinpointing customer challenges and creating application-based solutions to streamline work processes seamlessly with hardware integration.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1.25rem' }}>
              <button
                onClick={() => {
                  setCurrentView('software');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  backgroundColor: '#0071ba',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 2.1rem',
                  borderRadius: '8px',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(0, 113, 186, 0.35)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#005a96';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0071ba';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span>Explore Full Software Suite</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => openDemoModal({ solution: 'Software Solutions PoC', notes: 'Initiated from Home Software Solutions Showcase' })}
                style={{
                  background: 'none',
                  border: '1.5px solid #cbd5e1',
                  color: '#0f172a',
                  fontSize: '0.96rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0071ba';
                  e.currentTarget.style.color = '#0071ba';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.color = '#0f172a';
                }}
              >
                <span>Request Enterprise Demo</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          `;

  content = content.substring(0, headerIndex) + newHeader + content.substring(stageIndex);
}

// 3. Replace Focused App Box with 2-Column layout matching authentic screenshots
const specStartSearch = '{/* Focused App Specification Box */}';
const specEndSearch = '{/* =========================================================================';
const specStartIndex = content.indexOf(specStartSearch);
const specEndIndex = content.indexOf(specEndSearch, specStartIndex + 50);

if (specStartIndex !== -1 && specEndIndex !== -1) {
  const newSpecBox = `{/* Focused App Specification Box */}
            {(() => {
              const currentApp = appleShowcaseApps[focusedAppIndex] || appleShowcaseApps[0];
              const isDarkTheme = currentApp.theme === 'dark';

              return (
                <div style={{
                  backgroundColor: isDarkTheme ? '#0b162c' : '#f8fafc',
                  border: \`1.5px solid \${isDarkTheme ? 'rgba(56, 189, 248, 0.25)' : '#e2e8f0'}\`,
                  borderRadius: '16px',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  boxShadow: isDarkTheme ? '0 15px 40px rgba(0, 0, 0, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden'
                }}>
                  <style>{\`
                    .home-software-spec-grid {
                      display: grid;
                      grid-template-columns: 1fr;
                      gap: 2rem;
                      align-items: center;
                    }
                    @media (min-width: 860px) {
                      .home-software-spec-grid {
                        grid-template-columns: 1fr 1.35fr;
                        gap: 2.75rem;
                      }
                    }
                  \`}</style>

                  <div className="home-software-spec-grid">
                    {/* Left Column: Authentic Screenshot Image */}
                    <div style={{ position: 'relative' }}>
                      <img 
                        src={currentApp.image} 
                        alt={currentApp.name}
                        style={{
                          width: '100%',
                          maxHeight: '340px',
                          objectFit: 'cover',
                          borderRadius: '12px',
                          display: 'block',
                          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                          border: \`1px solid \${isDarkTheme ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'}\`
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        backgroundColor: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(6px)',
                        color: '#38bdf8',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(56, 189, 248, 0.3)'
                      }}>
                        {currentApp.badge}
                      </div>
                    </div>

                    {/* Right Column: Authentic Title, Description, and Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <div style={{
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          color: isDarkTheme ? '#38bdf8' : '#0071ba',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '0.35rem',
                          fontFamily: 'var(--font-mono, monospace)'
                        }}>
                          ● {currentApp.badge}
                        </div>

                        <h3 style={{
                          fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)',
                          fontWeight: 900,
                          letterSpacing: '-0.02em',
                          margin: 0,
                          lineHeight: 1.2,
                          color: isDarkTheme ? '#38bdf8' : '#0071ba',
                          fontFamily: 'var(--font-display, Inter, sans-serif)'
                        }}>
                          {currentApp.titlePrimary} <strong style={{ color: isDarkTheme ? '#ffffff' : '#0f172a' }}>{currentApp.titleSecondary}</strong>
                        </h3>
                      </div>

                      <p style={{
                        color: isDarkTheme ? '#f1f5f9' : '#334155',
                        fontSize: 'clamp(0.92rem, 1.1vw, 1rem)',
                        lineHeight: 1.65,
                        margin: 0,
                        textAlign: 'justify'
                      }}>
                        {currentApp.authenticParagraph}
                      </p>

                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                        {currentApp.features.map((feat, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.86rem', color: isDarkTheme ? '#cbd5e1' : '#475569', lineHeight: 1.45 }}>
                            <CheckCircle2 size={15} color={isDarkTheme ? '#38bdf8' : '#0071ba'} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Action Buttons: Know More (matching screenshot button color), Download Brochure, View Software Page */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                        <button
                          onClick={() => openDemoModal({ solution: currentApp.name, notes: \`Inquiry for \${currentApp.name} from Home Software Showcase\` })}
                          style={{
                            backgroundColor: currentApp.ctaColor,
                            color: '#ffffff',
                            border: 'none',
                            padding: '0.75rem 1.65rem',
                            borderRadius: '6px',
                            fontSize: '0.92rem',
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = currentApp.ctaHoverColor}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = currentApp.ctaColor}
                        >
                          <span>Know More</span>
                          <ArrowRight size={16} />
                        </button>

                        {currentApp.brochureUrl && (
                          <a
                            href={currentApp.brochureUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: isDarkTheme ? 'rgba(255, 255, 255, 0.08)' : '#ffffff',
                              color: isDarkTheme ? '#ffffff' : '#0f172a',
                              border: \`1.5px solid \${isDarkTheme ? 'rgba(255, 255, 255, 0.25)' : '#cbd5e1'}\`,
                              padding: '0.72rem 1.25rem',
                              borderRadius: '6px',
                              fontSize: '0.88rem',
                              fontWeight: 700,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.45rem',
                              textDecoration: 'none',
                              transition: 'all 0.15s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = '#0071ba';
                              e.currentTarget.style.color = '#0071ba';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = isDarkTheme ? 'rgba(255, 255, 255, 0.25)' : '#cbd5e1';
                              e.currentTarget.style.color = isDarkTheme ? '#ffffff' : '#0f172a';
                            }}
                          >
                            <Download size={15} />
                            <span>Brochure PDF</span>
                          </a>
                        )}

                        <button
                          onClick={() => {
                            setCurrentView('software');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: isDarkTheme ? '#38bdf8' : '#0071ba',
                            fontSize: '0.88rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            padding: '0.5rem 0.75rem'
                          }}
                        >
                          <span>View on Software Page</span>
                          <ChevronRight size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      `;

  content = content.substring(0, specStartIndex) + newSpecBox + content.substring(specEndIndex);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated HomeView.jsx with authentic software showcase content!');
