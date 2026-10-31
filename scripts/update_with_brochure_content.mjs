import fs from 'fs';
import path from 'path';

// =========================================================================
// 1. UPDATE SoftwareView.jsx
// =========================================================================
const softwareViewPath = path.resolve('src/components/pages/SoftwareView.jsx');
let swContent = fs.readFileSync(softwareViewPath, 'utf8');

// Categories update: add flow360
const oldCatMarker = "const categories = [";
const endCatMarker = "];\n\n  const softwareProducts = [";
const endCatMarkerCRLF = "];\r\n\r\n  const softwareProducts = [";

const newCategories = `const categories = [
    { id: 'all', label: 'All Software Suites' },
    { id: 'audit', label: 'PERFECT AUDIT' },
    { id: 'warehouse', label: 'PERFECT WAREHOUSE' },
    { id: 'trace', label: 'PERFECT TRACE' },
    { id: 'pms', label: 'PERFECT PMS' },
    { id: 'verifier', label: 'PERFECT VERIFIER' },
    { id: 'vision', label: 'COMPUTER VISION' },
    { id: 'mdm', label: 'PERFECTEDGE MDM' },
    { id: 'labeler', label: 'PERFECT LABELER' },
    { id: 'flow360', label: 'PERFECT FLOW 360' }
  ];`;

const catStart = swContent.indexOf(oldCatMarker);
let catEnd = swContent.indexOf(endCatMarker);
let markerLen = endCatMarker.length;
if (catEnd === -1) {
  catEnd = swContent.indexOf(endCatMarkerCRLF);
  markerLen = endCatMarkerCRLF.length;
}

if (catStart !== -1 && catEnd !== -1) {
  swContent = swContent.substring(0, catStart) + newCategories + swContent.substring(catEnd + 1); // keep semicolon boundary
}

// Find softwareProducts array in SoftwareView.jsx
const prodStartMarker = "const softwareProducts = [";
const prodEndMarker = "const filteredProducts = activeCategory === 'all'";

const pStart = swContent.indexOf(prodStartMarker);
const pEnd = swContent.indexOf(prodEndMarker);

if (pStart === -1 || pEnd === -1) {
  console.error('Could not find softwareProducts boundary in SoftwareView.jsx', { pStart, pEnd });
  process.exit(1);
}

const newSoftwareProducts = `const softwareProducts = [
    {
      id: 'audit',
      titlePrimary: 'PERFECT',
      titleSecondary: 'AUDIT',
      tagline: 'ISO Audit Application for All Industries',
      category: 'ISO AUDIT & COMPLIANCE',
      theme: 'dark',
      image: '/assets/images/software_audit.jpg',
      imageAlt: 'ATPL Perfect Audit ISO Audit Application',
      paragraphs: [
        'An ISO Audit application for all industries is a software tool designed to assist companies in conducting and managing audits related to ISO (International Organization for Standardization) standards.',
        'Conducting regular audits ensures that a company’s processes and practices align with these standards, helping to maintain compliance, improve operations, and enhance overall quality.',
        'This Audit application tailored for manufacturing/production industries assists in efficiently planning, conducting, and managing ISO audits, ensuring compliance with standards and facilitating continuous improvement efforts within the organization.'
      ],
      bulletPoints: [
        'Tailored specifically for manufacturing and production plants to streamline compliance audits',
        'Built-in support for ISO 9001:2015, IATF 16949, ISO 14001 EHS, and 5S checklists',
        'Real-time digital CAPA tracking with automated escalation workflows and photo evidence'
      ],
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Audit-Management-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=4urwO-BZy08'
    },
    {
      id: 'warehouse',
      titlePrimary: 'PERFECT',
      titleSecondary: 'WAREHOUSE',
      tagline: 'Store Manager Application for Warehouse Operations',
      category: 'STORE MANAGER & WAREHOUSE MANAGEMENT',
      theme: 'light',
      image: '/assets/images/software_warehouse.jpg',
      imageAlt: 'ATPL Perfect Warehouse Store Manager Application',
      paragraphs: [
        'Store manager application for a warehouse is a specialized software tool designed to optimize and streamline all your warehouse operations.',
        'It generates intuitive daily reports for Directors and Executives regarding inventory processes, leading to a reduction of manual work involved in warehouse management by 20-30%.',
        'It plays a crucial role in enhancing the accuracy of movement for both inward and outward goods, complemented by the AI implementation of a virtual house.'
      ],
      bulletPoints: [
        'Generates intuitive daily reports for Directors and Executives regarding inventory processes',
        'Proven reduction of manual work involved in warehouse management by 20% to 30%',
        'Enhances accuracy of inward and outward goods movement with AI virtual house implementation',
        'Seamless two-way integration with SAP S/4HANA, Oracle, and Microsoft Dynamics'
      ],
      ctaColor: '#1e293b',
      ctaHoverColor: '#0f172a',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Warehouse-Management-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=27tgTz-Bclw'
    },
    {
      id: 'trace',
      titlePrimary: 'PERFECT',
      titleSecondary: 'TRACE',
      tagline: 'End-to-End Item & Batch Traceability Platform',
      category: 'TRACEABILITY & SUPPLY CHAIN AGGREGATION',
      theme: 'dark',
      image: '/assets/images/software_trace.jpg',
      imageAlt: 'ATPL Perfect Trace Traceability Application',
      paragraphs: [
        'A traceability application is a software tool, designed to track and record the movement, origin, and history of products, components, or materials throughout their lifecycle.',
        'The main goal of traceability is to provide transparency, accountability, and visibility into the supply chain, enabling businesses to monitor and manage various aspects of their operations, such as quality control, compliance, recalls, and overall process efficiency.',
        'This applications play a crucial role in modern supply chain management by enhancing accountability, reducing risks, and improving operational efficiency.'
      ],
      bulletPoints: [
        'Tracks and records the movement, origin, and genealogy of materials across their full lifecycle',
        'Delivers transparency, accountability, and visibility across multi-tier supplier networks',
        'Accelerates recall investigations from days to minutes while ensuring export compliance'
      ],
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Audit-Management-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=4urwO-BZy08'
    },
    {
      id: 'pms',
      titlePrimary: 'PERFECT',
      titleSecondary: 'PMS',
      tagline: 'Production Monitoring System with Real-Time Defect Detection',
      category: 'PRODUCTION MONITORING SYSTEM (MES)',
      theme: 'light',
      image: '/assets/images/software_pms.jpg',
      imageAlt: 'ATPL Perfect PMS Production Monitoring System',
      paragraphs: [
        'Implementing a Production Monitoring System in your unit can lead to increased operational efficiency, reduced downtime, improved quality, and better decision-making based on real-time and historical data.',
        'Robust defects identification system contributes significantly to overall product quality and helps organizations maintain high standards.',
        'This solution designed to track, analyze, and visualize the performance of manufacturing or production processes in real-time while minimizing the impact of defects on production efficiency and customer satisfaction.'
      ],
      bulletPoints: [
        'Tracks, analyzes, and visualizes manufacturing processes in real-time on shopfloor dashboards',
        'Robust defects identification system minimizes defect impact on customer satisfaction',
        'Direct PLC & sensor connectivity for real-time OEE, cycle time, and downtime logging'
      ],
      ctaColor: '#1e293b',
      ctaHoverColor: '#0f172a',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Production-Monitoring-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=27tgTz-Bclw'
    },
    {
      id: 'verifier',
      titlePrimary: 'PERFECT',
      titleSecondary: 'VERIFIER',
      tagline: 'Accurate Identification & Lean Manufacturing Quality Control',
      category: 'QUALITY CONTROL & LEAN MANUFACTURING',
      theme: 'dark',
      image: '/assets/images/software_verifier.jpg',
      imageAlt: 'ATPL Perfect Verifier Quality Application',
      paragraphs: [
        'Our very owned verifier applications is ensuring accurate identification, tracking, and quality control of products throughout the production process. These applications help in managing inventory, reducing errors, and enhancing overall efficiency.',
        'It aligns with the principles of lean manufacturing and quality control, ensuring that each batch is accurately identified and monitored throughout its lifecycle.'
      ],
      bulletPoints: [
        'Ensures 100% accurate identification, tracking, and quality control across every production batch',
        'Directly aligns with lean manufacturing principles to eliminate identification errors',
        'Full lifecycle monitoring from raw material verification to finished goods shipping'
      ],
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Quality-Verifier.pdf',
      videoUrl: null
    },
    {
      id: 'vision',
      titlePrimary: 'COMPUTER',
      titleSecondary: 'VISION SYSTEM',
      tagline: 'AI/ML Character Engraving Capture & Damage Identification',
      category: 'AI/ML DEFECT & CHARACTER CAPTURING',
      theme: 'light',
      image: '/assets/images/stations/vision_ai.webp',
      imageAlt: 'ATPL Computer Vision System AI/ML Inspection',
      paragraphs: [
        'The ATPL-Perfect vision system, Powered by ML algorithms, excels in capturing engraved characters on multiple components and tracking products through to the finished goods stage.',
        'This system aids in detecting damages in parts by meticulously recording data, model evolution, algorithmic decisions, and component quality. This ensures accountability, identifies sources of errors or biases, validates results, and facilitates compliance with regulations and standards.',
        'Computer vision system for traceability by capturing characters engraved in components and damage identification in that, helps manufacturers can improve quality control, streamline production processes, and ensure the integrity of their products.'
      ],
      bulletPoints: [
        'AI/ML neural inference captures direct engraved characters across varying metal/plastic finishes',
        'Automated damage and flaw detection with sub-10ms response time on moving conveyors',
        'Complete audit logging of algorithmic decisions for regulatory compliance and traceability'
      ],
      ctaColor: '#1e293b',
      ctaHoverColor: '#0f172a',
      brochureUrl: 'https://atplgroup.com/wp-content/uploads/2024/04/Vision-System.pdf',
      videoUrl: 'https://www.youtube.com/watch?v=27tgTz-Bclw'
    },
    {
      id: 'mdm',
      titlePrimary: 'PERFECTEDGE',
      titleSecondary: 'MDM',
      tagline: 'Smart Device Management Made Simple.',
      category: 'MOBILE DEVICE MANAGEMENT & KIOSK LOCKDOWN',
      theme: 'dark',
      image: '/assets/images/brochures/brochure_perfectedge_mdm.png',
      imageAlt: 'ATPL PerfectEdge MDM Smart Device Management Brochure',
      paragraphs: [
        'Easily add and manage devices from multiple locations through a single centralized MDM platform for seamless operations.',
        'Organize devices group-wise based on branch, department, or location for simplified monitoring and management.'
      ],
      bulletPoints: [
        'Easily add and manage devices from multiple locations through a single centralized MDM platform for seamless operations.',
        'Organize devices group-wise based on branch, department, or location for simplified monitoring and management.',
        'Restrict unauthorized app usage like YouTube, games, or social media to improve productivity and security.',
        'Enable secure whitelisting and device-specific link access so shared links work only on authorized devices.',
        'Track real-time device status including online/offline, charging, battery health, connectivity, and live location updates.'
      ],
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      brochureUrl: '/assets/images/brochures/brochure_perfectedge_mdm.png',
      videoUrl: null
    },
    {
      id: 'labeler',
      titlePrimary: 'PERFECT',
      titleSecondary: 'LABELER',
      tagline: 'Print Anytime. Anywhere Effortlessly',
      category: 'CLOUD PRINTING APPLICATION',
      theme: 'light',
      image: '/assets/images/brochures/brochure_perfect_labeler.png',
      imageAlt: 'ATPL Perfect Labeler Cloud Printing Application Brochure',
      paragraphs: [
        'Anyone can design and print labels easily without technical training. Cloud-native architecture means no extra cost for multiple systems or printers, making it highly scalable and cost-effective.',
        'Labels can be created and printed from any location, supporting multi-branch operations. All label templates, print jobs, and user activities are managed from a single unified platform.'
      ],
      bulletPoints: [
        'Anyone can design and print labels easily without technical training.',
        'No extra cost for multiple systems or printers, making it more scalable and cost-effective.',
        'Labels can be created and printed from any location, supporting multi-branch operations.',
        'All label templates, print jobs, and user activities are managed from a single platform.',
        'Users can generate label templates instantly using simple AI prompts.',
        'Labels can be generated using Excel upload, PDF upload, or manual data entry.'
      ],
      ctaColor: '#1e293b',
      ctaHoverColor: '#0f172a',
      brochureUrl: '/assets/images/brochures/brochure_perfect_labeler.png',
      videoUrl: null
    },
    {
      id: 'flow360',
      titlePrimary: 'PERFECT',
      titleSecondary: 'FLOW 360',
      tagline: 'Customer Relationship Management & Field Operations',
      category: 'CUSTOMER RELATIONSHIP MANAGEMENT (CRM & OPERATIONS)',
      theme: 'dark',
      image: '/assets/images/brochures/brochure_perfect_flow_360.png',
      imageAlt: 'ATPL Perfect Flow 360 Customer Relationship Management Brochure',
      paragraphs: [
        'Create and manage leads efficiently while maintaining complete customer details and communication history in one platform. Generate professional quotations instantly and manage approvals, pricing, and sales processes with ease.',
        'Track employee attendance, working hours, and field activity through a centralized attendance management system, while monitoring sales performance, customer orders, and business growth with real-time reports and analytics.'
      ],
      bulletPoints: [
        'Create and manage leads efficiently while maintaining complete customer details and communication history in one platform.',
        'Generate professional quotations instantly and manage approvals, pricing, and sales processes with ease.',
        'Track employee attendance, working hours, and field activity through a centralized attendance management system.',
        'Monitor sales performance, customer orders, and business growth with real-time reports and analytics.',
        'Manage delivery reports and track product deliveries live to ensure smooth and timely customer service.',
        'Access customer data, sales updates, delivery tracking, and business operations anytime from anywhere securely.'
      ],
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      portalUrl: 'https://perfectflow360.atplgroup.org',
      brochureUrl: '/assets/images/brochures/brochure_perfect_flow_360.png',
      videoUrl: null
    }
  ];

  `;

swContent = swContent.substring(0, pStart) + newSoftwareProducts + swContent.substring(pEnd);

// In the card rendering loop, render tagline and bulletPoints if present!
// Let's replace the right column rendering inside filteredProducts.map
const rightColSearch = '{/* Authentic Paragraphs (matching atplgroup.com exact text) */}';
const rcIndex = swContent.indexOf(rightColSearch);

if (rcIndex !== -1) {
  const oldCardMarkupStart = swContent.indexOf('<div style={{ display: \'flex\', flexDirection: \'column\', gap: \'1.25rem\' }}>', rcIndex - 250);
  const oldCardMarkupEnd = swContent.indexOf('{/* Buttons: Know More (colored button matching screenshots), Download Brochure, Demo */}', rcIndex);

  if (oldCardMarkupStart !== -1 && oldCardMarkupEnd !== -1) {
    const newCardMarkup = `<div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                    
                    {/* Category Label */}
                    <div style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: isDark ? '#38bdf8' : '#0071ba',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-mono, monospace)'
                    }}>
                      {prod.category}
                    </div>

                    {/* Headline */}
                    <div>
                      <h2 style={{
                        fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        margin: '0 0 0.35rem 0',
                        lineHeight: 1.15,
                        color: isDark ? '#38bdf8' : '#0071ba',
                        fontFamily: 'var(--font-display, Inter, sans-serif)'
                      }}>
                        {prod.titlePrimary} <strong style={{ color: isDark ? '#ffffff' : '#0f172a' }}>{prod.titleSecondary}</strong>
                      </h2>

                      {prod.tagline && (
                        <div style={{
                          fontSize: 'clamp(1rem, 1.3vw, 1.18rem)',
                          fontWeight: 700,
                          color: isDark ? '#93c5fd' : '#1e3a8a',
                          lineHeight: 1.35
                        }}>
                          {prod.tagline}
                        </div>
                      )}
                    </div>

                    {/* Authentic Paragraphs */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem',
                      color: isDark ? '#f1f5f9' : '#334155',
                      fontSize: 'clamp(0.95rem, 1.15vw, 1.02rem)',
                      lineHeight: 1.7,
                      textAlign: 'justify'
                    }}>
                      {prod.paragraphs.map((p, idx) => (
                        <p key={idx} style={{ margin: 0 }}>
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Brochure Bullet Points */}
                    {prod.bulletPoints && prod.bulletPoints.length > 0 && (
                      <ul style={{
                        margin: '0.25rem 0 0 0',
                        padding: 0,
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.55rem'
                      }}>
                        {prod.bulletPoints.map((bp, bidx) => (
                          <li key={bidx} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem',
                            fontSize: '0.90rem',
                            lineHeight: 1.5,
                            color: isDark ? '#cbd5e1' : '#475569'
                          }}>
                            <CheckCircle2 size={16} color={isDark ? '#38bdf8' : '#0071ba'} style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    `;

    swContent = swContent.substring(0, oldCardMarkupStart) + newCardMarkup + swContent.substring(oldCardMarkupEnd);
  }
}

// In the buttons section, also add Perfect Flow 360 Portal button if portalUrl is present
const btnSearch = '{/* Buttons: Know More (colored button matching screenshots), Download Brochure, Demo */}';
const btnIdx = swContent.indexOf(btnSearch);
if (btnIdx !== -1) {
  const knowMoreBtnIdx = swContent.indexOf('<span>Know More</span>', btnIdx);
  if (knowMoreBtnIdx !== -1) {
    const btnContainerEnd = swContent.indexOf('</div>\n\n                  </div>\n                </div>', btnIdx);
    const btnContainerEndCRLF = swContent.indexOf('</div>\r\n\r\n                  </div>\r\n                </div>', btnIdx);
    const targetBtnEnd = btnContainerEnd !== -1 ? btnContainerEnd : btnContainerEndCRLF;

    if (targetBtnEnd !== -1) {
      const extraPortalBtn = `{prod.portalUrl && (
                        <a
                          href={prod.portalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: '#2563eb',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '6px',
                            padding: '0.75rem 1.45rem',
                            fontSize: '0.90rem',
                            fontWeight: 800,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            transition: 'all 0.15s ease',
                            minHeight: '44px',
                            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                        >
                          <span>Open Live Portal</span>
                          <ArrowRight size={15} />
                        </a>
                      )}
                    `;
      swContent = swContent.substring(0, targetBtnEnd) + extraPortalBtn + swContent.substring(targetBtnEnd);
    }
  }
}

// Update Section 3: Add ATPL's Expertise Technology & Integrated Hardware-Software Platform from Photo 4
const archSectionSearch = '{/* =========================================================================\n          3. ENTERPRISE INTEGRATION ARCHITECTURE BANNER';
const archSectionSearchCRLF = '{/* =========================================================================\r\n          3. ENTERPRISE INTEGRATION ARCHITECTURE BANNER';

let archIdx = swContent.indexOf(archSectionSearch);
if (archIdx === -1) {
  archIdx = swContent.indexOf(archSectionSearchCRLF);
}

if (archIdx !== -1) {
  const newExpertiseSection = `{/* =========================================================================
          3. ATPL'S EXPERTISE TECHNOLOGY & INTEGRATED HARDWARE-SOFTWARE PLATFORM (Photo 4)
         ========================================================================= */}
      <section style={{
        padding: 'clamp(5rem, 8vh, 6.5rem) 0',
        backgroundColor: '#070f20',
        color: '#ffffff',
        borderTop: '1px solid rgba(56, 189, 248, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 2.5vw, 2.5rem)' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto 3.5rem auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              color: '#38bdf8',
              padding: '0.4rem 1.15rem',
              borderRadius: '999px',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontFamily: 'var(--font-mono, monospace)'
            }}>
              <span>ATPL EXPERTISE TECHNOLOGY</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              margin: '0 0 1rem 0',
              lineHeight: 1.15
            }}>
              Integrated <span style={{ color: '#38bdf8' }}>Hardware-Software Platform</span>
            </h2>

            <p style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.18rem)',
              color: '#cbd5e1',
              lineHeight: 1.7,
              margin: 0
            }}>
              ATPL provides a comprehensive, integrated solution that combines cutting-edge edge devices (such as sensors, barcode/RFID scanners, and PLCs) with seamless integration to ERP and cloud systems. This is achieved through custom middleware, enabling real-time data flow and automation across the entire ecosystem.
            </p>
          </div>

          {/* Hexagonal / 3-Tier Architectural Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                title: 'Cutting-Edge Edge Devices',
                tag: 'TIER 1 • SHOPFLOOR',
                color: '#38bdf8',
                items: ['Fixed UHF RFID Portals & Beam Antennas', 'Rugged Android Barcode Scanners & Forklift Tablets', 'High-Speed Inline Machine Vision Cameras', 'Siemens & Rockwell Automation PLCs']
              },
              {
                title: 'Custom Integration Middleware',
                tag: 'TIER 2 • REAL-TIME DATA FLOW',
                color: '#f59e0b',
                items: ['Sub-8ms Data Packet Serialization & Verification', 'Two-Way SAP S/4HANA & Oracle Direct RFC Connectors', 'OPC-UA, Modbus TCP/IP & RESTful API Gateways', 'Zero-Data-Loss Offline Edge Store & Forward']
              },
              {
                title: 'Proprietary Software Suite',
                tag: 'TIER 3 • ENTERPRISE SAAS',
                color: '#10b981',
                items: ['Perfect Audit (ISO Audit & CAPA Management)', 'Perfect Warehouse (WMS & AI Virtual House)', 'Perfect Trace (Packaging Aggregation & Genealogy)', 'Perfect PMS & Verifier (Lean OEE & QC)', 'PerfectEdge MDM & Perfect Labeler & Flow 360']
              }
            ].map((col, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.75)',
                  border: \`1px solid \${col.color}40\`,
                  borderRadius: '16px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: col.color,
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-mono, monospace)'
                }}>
                  {col.tag}
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.25 }}>
                  {col.title}
                </h3>

                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {col.items.map((it, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.45 }}>
                      <CheckCircle2 size={16} color={col.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Book Your Demo & Direct Contact Banner (Matching Photo 4) */}
          <div style={{
            backgroundColor: '#0a1733',
            border: '1.5px solid #1e3a8a',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.35)'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                DIRECT FACTORY SPECIALIST DESK
              </div>
              <h4 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
                Book Your Live System Demo
              </h4>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', margin: 0, maxWidth: '620px' }}>
                Connect directly with our internal team of solution architects for requirement gathering, hardware evaluation, and software deployment.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
                <a
                  href="tel:1800120774777"
                  style={{
                    backgroundColor: '#0071ba',
                    color: '#ffffff',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                >
                  <PhoneCall size={16} />
                  <span>1800 120 774777 (Toll Free)</span>
                </a>

                <a
                  href="https://wa.me/916380859963?text=Hello%20ATPL%20Team%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20your%20software%20solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#25D366',
                    color: '#060b14',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem'
                  }}
                >
                  <span>💬 WhatsApp: +91 63808 59963</span>
                </a>
              </div>

              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '0.25rem' }}>
                Direct Lines: <strong style={{ color: '#ffffff' }}>+91 73055 35993</strong> • <strong style={{ color: '#ffffff' }}>+91 73056 35993</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      `;

  const nextSectionMarker = "/* =========================================================================";
  const nextSectionIdx = swContent.indexOf(nextSectionMarker, archIdx + 100);

  if (nextSectionIdx !== -1) {
    swContent = swContent.substring(0, archIdx) + newExpertiseSection + swContent.substring(nextSectionIdx - 7);
  }
}

fs.writeFileSync(softwareViewPath, swContent, 'utf8');
console.log('Successfully updated SoftwareView.jsx with brochure collateral!');
