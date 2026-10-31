import fs from 'fs';
import path from 'path';

const homePath = path.resolve('src/components/pages/HomeView.jsx');
let content = fs.readFileSync(homePath, 'utf8');

const marker = "const appleShowcaseApps = [";
const endMarker = "const coreSolutions = [";

const startIdx = content.indexOf(marker);
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const fullAppleApps = `const appleShowcaseApps = [
    {
      id: 'mdm',
      name: 'PerfectEdge MDM',
      titlePrimary: 'PERFECTEDGE',
      titleSecondary: 'MDM',
      tagline: 'Smart Device Management Made Simple.',
      badge: '★ NEW BROCHURE RELEASE',
      color: '#0071ba',
      accentBg: '#eff6ff',
      theme: 'dark',
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      image: '/assets/images/brochures/brochure_perfectedge_mdm.png',
      brochureUrl: '/assets/images/brochures/brochure_perfectedge_mdm.png',
      videoUrl: null,
      authenticParagraph: 'Easily add and manage devices from multiple locations through a single centralized MDM platform for seamless operations. Restrict unauthorized app usage like YouTube, games, or social media to improve productivity and security. Track real-time device status including online/offline, charging, battery health, connectivity, and live location updates.',
      features: [
        'Centralized MDM platform for multi-location device management & group-wise organization',
        'Tamper-proof kiosk lockdown restricting YouTube, gaming & unauthorized social apps',
        'Real-time battery health analytics, live charging state & GPS location updates'
      ],
      screenData: {
        title: 'PERFECTEDGE MDM',
        metric: '100% KIOSK LOCK',
        sub: 'Multi-Location Fleet',
        status: 'Unauthorized Apps: Blocked',
        tag: 'NEW RELEASE',
        color: '#38bdf8'
      }
    },
    {
      id: 'labeler',
      name: 'Perfect Labeler',
      titlePrimary: 'PERFECT',
      titleSecondary: 'LABELER',
      tagline: 'Print Anytime. Anywhere Effortlessly',
      badge: '★ AI CLOUD PRINTING',
      color: '#f59e0b',
      accentBg: '#fffbeb',
      theme: 'light',
      ctaColor: '#1e293b',
      ctaHoverColor: '#0f172a',
      image: '/assets/images/brochures/brochure_perfect_labeler.png',
      brochureUrl: '/assets/images/brochures/brochure_perfect_labeler.png',
      videoUrl: null,
      authenticParagraph: 'Anyone can design and print labels easily without technical training. With cloud-native architecture, there is no extra cost for multiple systems or printers, making it highly scalable and cost-effective across multi-branch operations. Users can generate label templates instantly using simple AI prompts.',
      features: [
        'Users can generate label templates instantly using simple AI prompts',
        'Labels can be generated using Excel upload, PDF upload, or manual data entry',
        'No extra cost for multiple systems or printers across multi-branch facilities'
      ],
      screenData: {
        title: 'PERFECT LABELER',
        metric: 'AI TEMPLATE GEN',
        sub: 'Zero Extra Printer Fee',
        status: 'Multi-Branch: Cloud Sync',
        tag: 'AI POWERED',
        color: '#f59e0b'
      }
    },
    {
      id: 'flow360',
      name: 'Perfect Flow 360',
      titlePrimary: 'PERFECT',
      titleSecondary: 'FLOW 360',
      tagline: 'Customer Relationship Management & Field Operations',
      badge: '★ ENTERPRISE CRM & OPS',
      color: '#10b981',
      accentBg: '#ecfdf5',
      theme: 'dark',
      ctaColor: '#dc2626',
      ctaHoverColor: '#b91c1c',
      image: '/assets/images/brochures/brochure_perfect_flow_360.png',
      portalUrl: 'https://perfectflow360.atplgroup.org',
      brochureUrl: '/assets/images/brochures/brochure_perfect_flow_360.png',
      videoUrl: null,
      authenticParagraph: 'Create and manage leads efficiently while maintaining complete customer details and communication history in one platform. Generate professional quotations instantly, track employee attendance and working hours, and monitor live delivery status.',
      features: [
        'Complete lead management, instant quotations, and sales pricing approvals',
        'Centralized employee attendance, working hours, and field activity monitoring',
        'Live dispatch & product delivery tracking with real-time business analytics'
      ],
      screenData: {
        title: 'PERFECT FLOW 360',
        metric: '360° CRM & OPS',
        sub: 'Field Attendance & Live GPS',
        status: 'Delivery Tracking: Active',
        tag: 'CRM PORTAL',
        color: '#10b981'
      }
    },
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
      authenticParagraph: 'An ISO Audit application for all industries is a software tool designed to assist companies in conducting and managing audits related to ISO standards. Conducting regular audits ensures that a company’s processes and practices align with these standards, helping to maintain compliance, improve operations, and enhance overall quality.',
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

  content = content.substring(0, startIdx) + fullAppleApps + content.substring(endIdx);
  fs.writeFileSync(homePath, content, 'utf8');
  console.log('Successfully updated HomeView.jsx appleShowcaseApps with MDM, Labeler, and Flow 360!');
}
