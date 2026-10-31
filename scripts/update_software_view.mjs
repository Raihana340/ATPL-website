import fs from 'fs';

const softwareViewCode = `import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Boxes, 
  Eye, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Download, 
  Server,
  Smartphone,
  Printer,
  Activity,
  Play,
  FileText,
  PhoneCall,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const SoftwareView = () => {
  const { openDemoModal } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');
  const [focusedAppIndex, setFocusedAppIndex] = useState(2); // Defaults to Perfect Flow 360

  const showcaseApps = [
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

  const categories = [
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
  ];

  const softwareProducts = [
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
        'Multi-tier packaging aggregation (Item → Carton → Shipper → Pallet) with cryptographic serials',
        'Meets DGFT serialization standards and US-FDA DSCSA export traceability protocols',
        'Batch genealogy recall lookup in under 2 minutes with complete audit reporting'
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
      tagline: 'Production Monitoring System with Real-Time Defect Identification',
      category: 'PRODUCTION MONITORING (MES) & OEE TRACKING',
      theme: 'light',
      image: '/assets/images/software_pms.jpg',
      imageAlt: 'ATPL Perfect PMS Production Monitoring System',
      paragraphs: [
        'Implementing a Production Monitoring System in your unit can lead to increased operational efficiency, reduced downtime, improved quality, and better decision-making based on real-time and historical data.',
        'Robust defects identification system contributes significantly to overall product quality and customer satisfaction.',
        'Our PMS tracks, analyzes, and visualizes manufacturing processes in real-time, helping plant managers identify bottlenecks instantly.'
      ],
      bulletPoints: [
        'Real-time Overall Equipment Effectiveness (OEE) tracking with shift-level live dashboards',
        'Direct connection to machine PLCs, sensors, and stack lights to capture micro-stoppages',
        'Automated defect classification and root-cause analysis to protect yield'
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

  const filteredProducts = activeCategory === 'all'
    ? softwareProducts
    : softwareProducts.filter(p => p.id === activeCategory);

  const currentApp = showcaseApps[focusedAppIndex] || showcaseApps[0];
  const isShowcaseDark = currentApp.theme === 'dark';

  const scrollToProductSection = (id) => {
    setActiveCategory('all');
    setTimeout(() => {
      const el = document.getElementById(\`software-\${id}\`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#1e293b', minHeight: '100vh' }}>
      
      {/* Dynamic 3D Styles */}
      <style>{\`
        .apple-device-card {
          transition: transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1),
                      box-shadow 0.4s ease,
                      opacity 0.4s ease,
                      filter 0.4s ease;
          transform-style: preserve-3d;
          cursor: pointer;
          user-select: none;
          flex-shrink: 0;
        }
        .apple-device-card:hover {
          filter: brightness(1.06);
        }
        .apple-device-bezel {
          width: 220px;
          height: 260px;
          background: #11141c;
          border-radius: 28px;
          border: 2.5px solid #283044;
          padding: 10px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.38),
                      inset 0 1px 1px rgba(255, 255, 255, 0.25);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .apple-device-screen {
          flex: 1;
          border-radius: 20px;
          overflow: hidden;
          background: #060b14;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 12px;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .apple-device-base {
          width: 140px;
          height: 52px;
          margin: 0 auto;
          border-radius: 0 0 20px 20px;
          background: radial-gradient(#64748b 22%, transparent 24%) 0 0/5px 5px,
                      linear-gradient(180deg, #d8dee8 0%, #94a3b8 100%);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-top: none;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
          position: relative;
          z-index: 1;
        }
        .apple-device-shadow {
          width: 170px;
          height: 14px;
          margin: -6px auto 0 auto;
          background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.28) 0%, transparent 72%);
          border-radius: 50%;
          pointer-events: none;
        }
        @media (max-width: 900px) {
          .apple-stage-wrap {
            overflow-x: auto;
            padding-bottom: 1.5rem;
            justify-content: flex-start !important;
            padding-left: 1.5rem;
          }
        }
        .software-spec-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: center;
        }
        @media (min-width: 860px) {
          .software-spec-grid {
            grid-template-columns: 1fr 1.35fr;
            gap: 2.75rem;
          }
        }
      \`}</style>

      {/* =========================================================================
          1. OFFICIAL HEADER SECTION (100% Matching atplgroup.com/software/)
         ========================================================================= */}
      <section style={{
        padding: 'clamp(4.5rem, 7vh, 6rem) 0 clamp(2rem, 3.5vh, 3rem) 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 2.5vw, 2.5rem)' }}>
          
          {/* Section Sub-Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#eff6ff',
            border: '1px solid #bfdbfe',
            color: '#0071ba',
            padding: '0.4rem 1rem',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            fontFamily: 'var(--font-mono, monospace)'
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#0071ba' }} />
            <span>ATPL PROPRIETARY SOFTWARE</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.025em',
            margin: '0 0 1rem 0',
            lineHeight: 1.2,
            fontFamily: 'var(--font-display, Inter, sans-serif)'
          }}>
            SOFTWARE <strong style={{ color: '#0071ba' }}>SOLUTIONS</strong>
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.65rem)',
            fontWeight: 700,
            color: '#334155',
            lineHeight: 1.4,
            marginBottom: '1.75rem',
            maxWidth: '1100px'
          }}>
            Creating application-based solutions to streamline work processes seamlessly.
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            color: '#475569',
            fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
            lineHeight: 1.75,
            maxWidth: '1150px',
            textAlign: 'justify'
          }}>
            <p style={{ margin: 0 }}>
              As a prominent industrial solution provider, we specialize in pinpointing customer challenges and creating application-based solutions to streamline work processes seamlessly.
            </p>
            <p style={{ margin: 0 }}>
              Our expertise lies in seamlessly integrating software applications with hardware processes. We concentrate on minimizing time-consuming workflows, enhancing efficiency.
            </p>
            <p style={{ margin: 0 }}>
              Our internal team of solution architects is committed to supervising the entire process, beginning with requirement gathering and concluding with the delivery of the finalized application to the customer. Simultaneously, our development team collaborates with service engineers for the integration of hardware components, specifically focusing on those who engage extensively with industry-leading OEMs.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. INTERACTIVE 3D FANNED DEVICE SHOWCASE & PRODUCT SELECTOR
             (The exact interactive component requested by user)
         ========================================================================= */}
      <section 
        id="software-interactive-showcase"
        style={{
          backgroundColor: '#f8fafc',
          padding: 'clamp(3rem, 5vh, 4.5rem) 0 clamp(4rem, 6vh, 5.5rem) 0',
          borderBottom: '1px solid #e2e8f0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 clamp(1rem, 2vw, 2.5rem)' }}>
          
          {/* Header over Showcase */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              color: '#0071ba',
              padding: '0.35rem 1rem',
              borderRadius: '999px',
              fontSize: '0.76rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
              fontFamily: 'var(--font-mono, monospace)'
            }}>
              <span>★ INTERACTIVE APPLICATION STACK • CLICK ANY DEVICE TO EXPLORE</span>
            </div>
            <h3 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
              fontWeight: 900,
              color: '#0f172a',
              margin: '0 0 0.5rem 0',
              fontFamily: 'var(--font-display, Inter, sans-serif)'
            }}>
              Featured ATPL <span style={{ color: '#0071ba' }}>Software Ecosystem</span>
            </h3>
            <p style={{ fontSize: '0.96rem', color: '#64748b', maxWidth: '750px', margin: '0 auto' }}>
              Explore our brochure-featured enterprise platforms and factory-proven production systems. Click a product tab or device to view full operational details.
            </p>
          </div>

          {/* 8 Product Navigation Pills (Matching Screenshot 1 exactly) */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.55rem',
            marginBottom: '2rem'
          }}>
            {showcaseApps.map((app, idx) => {
              const isSelected = focusedAppIndex === idx;
              return (
                <button
                  key={app.id}
                  onClick={() => setFocusedAppIndex(idx)}
                  style={{
                    backgroundColor: isSelected ? '#0f172a' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#64748b',
                    border: \`1.5px solid \${isSelected ? '#0f172a' : '#e2e8f0'}\`,
                    padding: '0.5rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 14px rgba(15, 23, 42, 0.25)' : '0 2px 5px rgba(0,0,0,0.03)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#94a3b8';
                      e.currentTarget.style.color = '#0f172a';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.color = '#64748b';
                    }
                  }}
                >
                  {isSelected && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#38bdf8' }} />}
                  <span>{app.name}</span>
                </button>
              );
            })}
          </div>

          {/* 3D Fanned Device Showcase Arc */}
          <div 
            className="apple-stage-wrap"
            style={{
              perspective: '1200px',
              perspectiveOrigin: '50% 65%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              position: 'relative',
              minHeight: '430px',
              padding: '1.5rem 0 1rem 0'
            }}
          >
            {showcaseApps.map((app, idx) => {
              const diff = idx - focusedAppIndex;
              let rotY = 0;
              let transZ = 0;
              let scale = 1;
              let zIndex = 5;
              let marginHorizontal = 0;

              if (diff === 0) {
                rotY = 0;
                transZ = 55;
                scale = 1.1;
                zIndex = 10;
                marginHorizontal = '10px';
              } else if (diff === -1) {
                rotY = 18;
                transZ = -15;
                scale = 0.96;
                zIndex = 8;
                marginHorizontal = '-35px';
              } else if (diff === -2) {
                rotY = 34;
                transZ = -65;
                scale = 0.86;
                zIndex = 6;
                marginHorizontal = '-30px';
              } else if (diff === 1) {
                rotY = -18;
                transZ = -15;
                scale = 0.96;
                zIndex = 8;
                marginHorizontal = '-35px';
              } else if (diff === 2) {
                rotY = -34;
                transZ = -65;
                scale = 0.86;
                zIndex = 6;
                marginHorizontal = '-30px';
              }

              const isFocused = diff === 0;

              return (
                <div
                  key={app.id}
                  className="apple-device-card"
                  onClick={() => setFocusedAppIndex(idx)}
                  title={\`Click to inspect \${app.name}\`}
                  style={{
                    transform: \`perspective(1200px) rotateY(\${rotY}deg) translateZ(\${transZ}px) scale(\${scale})\`,
                    zIndex: zIndex,
                    marginLeft: marginHorizontal,
                    marginRight: marginHorizontal,
                    opacity: Math.abs(diff) > 2 ? 0.35 : 1
                  }}
                >
                  {/* Display Bezel */}
                  <div 
                    className="apple-device-bezel"
                    style={{
                      borderColor: isFocused ? '#0071ba' : '#283044',
                      boxShadow: isFocused 
                        ? '0 30px 60px -10px rgba(0, 113, 186, 0.45), 0 0 25px rgba(0, 240, 255, 0.25)' 
                        : '0 25px 50px -12px rgba(0, 0, 0, 0.38)'
                    }}
                  >
                    {/* Screen Content */}
                    <div className="apple-device-screen">
                      {/* Top Apple-Style Status Header */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.68rem', color: '#94a3b8', fontFamily: 'var(--font-mono, monospace)' }}>
                        <span style={{ fontWeight: 800, color: '#ffffff' }}>10:09</span>
                        <span style={{
                          backgroundColor: \`\${app.screenData.color}25\`,
                          color: app.screenData.color,
                          border: \`1px solid \${app.screenData.color}50\`,
                          padding: '1px 6px',
                          borderRadius: '4px',
                          fontSize: '0.62rem',
                          fontWeight: 800
                        }}>
                          {app.screenData.tag}
                        </span>
                      </div>

                      {/* Screen Center: Boldly Highlighted Product Name & Metric */}
                      <div style={{
                        textAlign: 'center',
                        padding: '0.85rem 0.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                      }}>
                        {/* Highlighted Project/Product Name in Center */}
                        <div style={{
                          marginBottom: '0.65rem',
                          textAlign: 'center'
                        }}>
                          <span style={{
                            display: 'block',
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: isFocused ? '#38bdf8' : '#7dd3fc',
                            fontFamily: 'var(--font-mono, monospace)',
                            marginBottom: '0.15rem'
                          }}>
                            {app.titlePrimary || 'PERFECT'}
                          </span>

                          <span style={{
                            fontSize: 'clamp(1.35rem, 2vw, 1.55rem)',
                            fontWeight: 900,
                            color: '#ffffff',
                            letterSpacing: '-0.025em',
                            lineHeight: 1.1,
                            fontFamily: 'var(--font-display, Inter, sans-serif)',
                            display: 'block',
                            textShadow: isFocused 
                              ? '0 0 20px rgba(56, 189, 248, 0.75), 0 2px 4px rgba(0, 0, 0, 0.8)' 
                              : '0 2px 4px rgba(0, 0, 0, 0.6)'
                          }}>
                            {app.titleSecondary || app.name.replace(/^Perfect\\s*/i, '')}
                          </span>
                        </div>

                        {/* Highlighted Core Metric Badge */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          backgroundColor: isFocused ? 'rgba(56, 189, 248, 0.18)' : 'rgba(255, 255, 255, 0.08)',
                          border: \`1px solid \${isFocused ? '#38bdf8' : 'rgba(255, 255, 255, 0.15)'}\`,
                          color: isFocused ? '#38bdf8' : '#e2e8f0',
                          padding: '0.28rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          letterSpacing: '0.04em',
                          marginBottom: '0.4rem',
                          boxShadow: isFocused ? '0 0 14px rgba(56, 189, 248, 0.35)' : 'none'
                        }}>
                          <span>{app.screenData.metric}</span>
                        </div>

                        {/* Sub-label */}
                        <div style={{
                          fontSize: '0.74rem',
                          color: '#94a3b8',
                          lineHeight: 1.3,
                          maxWidth: '180px',
                          margin: '0 auto'
                        }}>
                          {app.screenData.sub}
                        </div>
                      </div>

                      {/* Screen Bottom Status Bar */}
                      <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                        paddingTop: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.66rem',
                        color: '#94a3b8'
                      }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
                          {app.screenData.status}
                        </span>
                        <ChevronRight size={12} color="#64748b" />
                      </div>
                    </div>
                  </div>

                  {/* Speaker Base Stand */}
                  <div className="apple-device-base" />
                  {/* Floor Shadow */}
                  <div className="apple-device-shadow" />
                </div>
              );
            })}
          </div>

          {/* Focused App Specification Box (Matches Screenshot 1 EXACTLY!) */}
          <div style={{ maxWidth: '980px', margin: '2rem auto 0 auto' }}>
            <div style={{
              backgroundColor: isShowcaseDark ? '#0b162c' : '#ffffff',
              border: \`1.5px solid \${isShowcaseDark ? 'rgba(56, 189, 248, 0.35)' : '#cbd5e1'}\`,
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
              boxShadow: isShowcaseDark ? '0 20px 50px rgba(0, 0, 0, 0.45)' : '0 12px 35px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}>
              <div className="software-spec-grid">
                
                {/* Left Column: Authentic Screenshot / Brochure Image */}
                <div style={{ position: 'relative' }}>
                  <img 
                    src={currentApp.image} 
                    alt={currentApp.name}
                    style={{
                      width: '100%',
                      maxHeight: '380px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      display: 'block',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
                      border: \`1px solid \${isShowcaseDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'}\`
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(15, 23, 42, 0.88)',
                    backdropFilter: 'blur(6px)',
                    color: '#38bdf8',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(56, 189, 248, 0.35)'
                  }}>
                    {currentApp.badge}
                  </div>
                </div>

                {/* Right Column: Title, Paragraph, Features, Buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <div>
                    <div style={{
                      fontSize: '0.76rem',
                      fontWeight: 800,
                      color: isShowcaseDark ? '#38bdf8' : '#0071ba',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                      fontFamily: 'var(--font-mono, monospace)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}>
                      <span>★</span>
                      <span>{currentApp.badge}</span>
                    </div>

                    <h3 style={{
                      fontSize: 'clamp(1.75rem, 2.6vw, 2.3rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.025em',
                      margin: 0,
                      lineHeight: 1.2,
                      color: isShowcaseDark ? '#38bdf8' : '#0071ba',
                      fontFamily: 'var(--font-display, Inter, sans-serif)'
                    }}>
                      {currentApp.titlePrimary} <strong style={{ color: isShowcaseDark ? '#ffffff' : '#0f172a' }}>{currentApp.titleSecondary}</strong>
                    </h3>
                  </div>

                  <p style={{
                    color: isShowcaseDark ? '#f1f5f9' : '#334155',
                    fontSize: 'clamp(0.92rem, 1.1vw, 1.02rem)',
                    lineHeight: 1.65,
                    margin: 0,
                    textAlign: 'justify'
                  }}>
                    {currentApp.authenticParagraph}
                  </p>

                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {currentApp.features.map((feat, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: isShowcaseDark ? '#cbd5e1' : '#475569', lineHeight: 1.45 }}>
                        <CheckCircle2 size={16} color={isShowcaseDark ? '#38bdf8' : '#0071ba'} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons: Know More, Brochure PDF, Jump to Deep Dive */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.85rem', marginTop: '0.65rem' }}>
                    <button
                      onClick={() => openDemoModal({ solution: currentApp.name, notes: \`Inquiry for \${currentApp.name} from Software Showcase\` })}
                      style={{
                        backgroundColor: currentApp.ctaColor,
                        color: '#ffffff',
                        border: 'none',
                        padding: '0.8rem 1.75rem',
                        borderRadius: '6px',
                        fontSize: '0.94rem',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 14px rgba(220, 38, 38, 0.35)',
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
                          backgroundColor: isShowcaseDark ? 'rgba(255, 255, 255, 0.08)' : '#ffffff',
                          color: isShowcaseDark ? '#ffffff' : '#0f172a',
                          border: \`1.5px solid \${isShowcaseDark ? 'rgba(255, 255, 255, 0.25)' : '#cbd5e1'}\`,
                          padding: '0.75rem 1.35rem',
                          borderRadius: '6px',
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          transition: 'all 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#0071ba';
                          e.currentTarget.style.color = '#0071ba';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = isShowcaseDark ? 'rgba(255, 255, 255, 0.25)' : '#cbd5e1';
                          e.currentTarget.style.color = isShowcaseDark ? '#ffffff' : '#0f172a';
                        }}
                      >
                        <Download size={16} />
                        <span>Brochure PDF</span>
                      </a>
                    )}

                    {currentApp.portalUrl && (
                      <a
                        href={currentApp.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: '#2563eb',
                          color: '#ffffff',
                          border: 'none',
                          padding: '0.75rem 1.35rem',
                          borderRadius: '6px',
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.35)',
                          transition: 'all 0.15s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                      >
                        <span>Live Portal</span>
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>

                  {/* Quick Jump link to full technical specs */}
                  <div style={{ marginTop: '0.25rem' }}>
                    <button
                      onClick={() => scrollToProductSection(currentApp.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isShowcaseDark ? '#38bdf8' : '#0071ba',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        padding: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        textDecoration: 'underline',
                        textUnderlineOffset: '3px'
                      }}
                    >
                      <span>Jump to Full Detailed Specifications ↓</span>
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. CATEGORY FILTER TABS FOR DEEP-DIVE SECTIONS
         ========================================================================= */}
      <section style={{ backgroundColor: '#ffffff', padding: '2.5rem 0 1rem 0', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 2.5vw, 2.5rem)' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#0071ba', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono, monospace)' }}>
                DETAILED ARCHITECTURE VIEW
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                All Software Modules & Specifications
              </h3>
            </div>
            <div style={{ fontSize: '0.86rem', color: '#64748b' }}>
              Showing {filteredProducts.length} of {softwareProducts.length} modules
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.55rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid #e2e8f0'
          }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  backgroundColor: activeCategory === cat.id ? '#0071ba' : '#f1f5f9',
                  color: activeCategory === cat.id ? '#ffffff' : '#475569',
                  border: activeCategory === cat.id ? '1px solid #005a96' : '1px solid #cbd5e1',
                  borderRadius: '999px',
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.backgroundColor = '#e2e8f0';
                    e.currentTarget.style.color = '#0f172a';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== cat.id) {
                    e.currentTarget.style.backgroundColor = '#f1f5f9';
                    e.currentTarget.style.color = '#475569';
                  }
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. AUTHENTIC SOFTWARE PRODUCTS SHOWCASE (Alternating Dark / Light Blocks)
         ========================================================================= */}
      <section style={{ padding: 0 }}>
        {filteredProducts.map((prod) => {
          const isDark = prod.theme === 'dark';
          const isBrochureFeatured = ['mdm', 'labeler', 'flow360'].includes(prod.id);

          return (
            <div
              key={prod.id}
              id={\`software-\${prod.id}\`}
              style={{
                backgroundColor: isDark ? '#0b162c' : '#ffffff',
                color: isDark ? '#ffffff' : '#1e293b',
                padding: 'clamp(4rem, 6.5vh, 5.5rem) 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 2.5vw, 2.5rem)' }}>
                <style>{\`
                  .software-authentic-row {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 3rem;
                    align-items: center;
                  }
                  @media (min-width: 992px) {
                    .software-authentic-row {
                      grid-template-columns: 1fr 1.15fr;
                      gap: 4rem;
                    }
                  }
                  .software-authentic-img {
                    width: 100%;
                    height: auto;
                    max-height: 480px;
                    object-fit: cover;
                    border-radius: 12px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
                    display: block;
                    border: 1px solid \${isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)'};
                  }
                \`}</style>

                <div className="software-authentic-row">
                  {/* Left Column: Image with Brochure Badge if applicable */}
                  <div style={{ position: 'relative' }}>
                    <img 
                      src={prod.image}
                      alt={prod.imageAlt}
                      className="software-authentic-img"
                      loading="lazy"
                    />
                    {isBrochureFeatured && (
                      <div style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: '#dc2626',
                        color: '#ffffff',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '6px',
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
                      }}>
                        ★ OFFICIAL ATPL BROCHURE RELEASE
                      </div>
                    )}
                  </div>

                  {/* Right Column: Title, Paragraphs, and Action Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    
                    {/* Brochure Badge in Content */}
                    {isBrochureFeatured && (
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
                        width: 'fit-content',
                        fontFamily: 'var(--font-mono, monospace)',
                        boxShadow: '0 4px 14px rgba(234, 179, 8, 0.2)'
                      }}>
                        <span>★ FEATURED FROM OFFICIAL ATPL BROCHURE • 2026 EDITION</span>
                      </div>
                    )}

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
                    <h2 style={{
                      fontSize: 'clamp(2rem, 3.2vw, 2.85rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      margin: 0,
                      lineHeight: 1.15,
                      color: isDark ? '#38bdf8' : '#0071ba',
                      fontFamily: 'var(--font-display, Inter, sans-serif)'
                    }}>
                      {prod.titlePrimary} <strong style={{ color: isDark ? '#ffffff' : '#0f172a' }}>{prod.titleSecondary}</strong>
                    </h2>

                    {/* Tagline */}
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: isDark ? '#94a3b8' : '#475569',
                      marginTop: '-0.5rem'
                    }}>
                      {prod.tagline}
                    </div>

                    {/* Authentic Paragraphs (matching atplgroup.com exact text) */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.95rem',
                      color: isDark ? '#f1f5f9' : '#334155',
                      fontSize: 'clamp(0.96rem, 1.15vw, 1.05rem)',
                      lineHeight: 1.75,
                      textAlign: 'justify'
                    }}>
                      {prod.paragraphs.map((p, idx) => (
                        <p key={idx} style={{ margin: 0 }}>
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Key Bullet Points */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                      padding: '1rem',
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#f8fafc',
                      border: \`1px solid \${isDark ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0'}\`,
                      borderRadius: '10px'
                    }}>
                      {prod.bulletPoints.map((bp, bidx) => (
                        <div key={bidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.88rem', color: isDark ? '#cbd5e1' : '#475569', lineHeight: 1.45 }}>
                          <CheckCircle2 size={15} color={isDark ? '#38bdf8' : '#0071ba'} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons: Know More, Download Brochure, Watch Video, Open Live Portal */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.9rem', marginTop: '0.5rem' }}>
                      
                      {/* Know More Button */}
                      <button
                        onClick={() => openDemoModal({ solution: \`\${prod.titlePrimary} \${prod.titleSecondary}\`, notes: \`Inquiry for \${prod.titlePrimary} \${prod.titleSecondary} from Software page\` })}
                        style={{
                          backgroundColor: prod.ctaColor,
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '0.75rem 1.65rem',
                          fontSize: '0.92rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                          transition: 'all 0.15s ease',
                          minHeight: '44px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = prod.ctaHoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = prod.ctaColor}
                      >
                        <span>Know More</span>
                        <ArrowRight size={16} />
                      </button>

                      {/* Download Brochure Link */}
                      {prod.brochureUrl && (
                        <a
                          href={prod.brochureUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#f1f5f9',
                            color: isDark ? '#ffffff' : '#0f172a',
                            border: \`1.5px solid \${isDark ? 'rgba(255, 255, 255, 0.25)' : '#cbd5e1'}\`,
                            borderRadius: '6px',
                            padding: '0.75rem 1.35rem',
                            fontSize: '0.90rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            transition: 'all 0.15s ease',
                            minHeight: '44px'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#0071ba';
                            e.currentTarget.style.color = '#0071ba';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.25)' : '#cbd5e1';
                            e.currentTarget.style.color = isDark ? '#ffffff' : '#0f172a';
                          }}
                        >
                          <Download size={16} />
                          <span>Brochure (PDF)</span>
                        </a>
                      )}

                      {/* Video Demo Link */}
                      {prod.videoUrl && (
                        <a
                          href={prod.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            color: '#ef4444',
                            border: '1px solid rgba(239, 68, 68, 0.35)',
                            borderRadius: '6px',
                            padding: '0.75rem 1.25rem',
                            fontSize: '0.90rem',
                            fontWeight: 700,
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.45rem',
                            transition: 'all 0.15s ease',
                            minHeight: '44px'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'}
                        >
                          <Play size={15} fill="#ef4444" color="#ef4444" />
                          <span>Watch Video</span>
                        </a>
                      )}

                      {/* Portal Url */}
                      {prod.portalUrl && (
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
                    </div>

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================================================
          5. ENTERPRISE INTEGRATION ARCHITECTURE BANNER
         ========================================================================= */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#060d1d', color: '#ffffff', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', padding: '0 clamp(1rem, 2vw, 2rem)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(0, 240, 255, 0.1)',
            border: '1px solid rgba(0, 240, 255, 0.35)',
            color: '#00f0ff',
            padding: '0.35rem 0.95rem',
            borderRadius: '999px',
            fontSize: '0.76rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            fontFamily: 'var(--font-mono, monospace)'
          }}>
            <span>SEAMLESS ERP INTEROPERABILITY</span>
          </div>

          <h3 style={{ fontSize: 'clamp(1.75rem, 2.8vw, 2.4rem)', fontWeight: 800, margin: '0 0 1rem 0' }}>
            Direct Two-Way Integration with Your Existing Plant Stack
          </h3>

          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.65, maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            No need to replace your legacy software. ATPL software suites integrate natively via certified REST APIs, MQTT brokers, OPC-UA, and SAP IDOC connectors.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            {['SAP S/4HANA & ECC', 'Oracle Fusion Cloud', 'Microsoft Dynamics 365', 'Infor CloudSuite', 'Siemens MindSphere', 'Tally Prime'].map((erp, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '0.85rem 1.45rem',
                color: '#e2e8f0',
                fontWeight: 700,
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem'
              }}>
                <Server size={17} color="#00f0ff" />
                <span>{erp}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => openDemoModal({ mode: 'engineer', solution: 'Custom Software Integration' })}
            style={{
              backgroundColor: '#0071ba',
              color: '#ffffff',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              padding: '0.85rem 1.85rem',
              fontSize: '0.96rem',
              fontWeight: 800,
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 18px rgba(0, 113, 186, 0.45)'
            }}
          >
            <PhoneCall size={18} />
            <span>Speak with a Solutions Architect</span>
          </button>
        </div>
      </section>

    </div>
  );
};
`;

fs.writeFileSync('src/components/pages/SoftwareView.jsx', softwareViewCode, 'utf8');
console.log('Successfully updated src/components/pages/SoftwareView.jsx!');
