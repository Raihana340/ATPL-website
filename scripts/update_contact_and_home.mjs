import fs from 'fs';
import path from 'path';

// =========================================================================
// 1. UPDATE ContactView.jsx
// =========================================================================
const contactPath = path.resolve('src/components/pages/ContactView.jsx');
let contactContent = fs.readFileSync(contactPath, 'utf8');

const oldOfficesStart = '<h3 style={{ fontSize: \'1.45rem\', color: \'#ffffff\', marginBottom: \'1.5rem\' }}>Corporate Offices & Contact</h3>';
const oldOfficesEnd = '<div style={{ background: \'rgba(0,240,255,0.06)\'';

const oStart = contactContent.indexOf(oldOfficesStart);
const oEnd = contactContent.indexOf(oldOfficesEnd);

if (oStart !== -1 && oEnd !== -1) {
  const newOfficesMarkup = `<h3 style={{ fontSize: '1.45rem', color: '#ffffff', marginBottom: '1.5rem' }}>Corporate Offices & Network</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <strong style={{ color: 'var(--cyan-primary)', display: 'block', fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                  🏢 Head Office (Chennai)
                </strong>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                  TIDEL Park, G11 Ground Floor, Canal Bank Road, Taramani, Chennai - 600113
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <strong style={{ color: 'var(--cyan-primary)', display: 'block', fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                  🏛️ Registered Office
                </strong>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                  275/11, S1, Second Floor, Gandhi Road, West Tambaram, Chennai - 600045
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <strong style={{ color: '#38bdf8', display: 'block', fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                  📍 Branch 1: Bangalore Hub
                </strong>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                  Novel Tech Park, 46/4, GB Palya, Kudlu Gate, Bangalore - 560068
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <strong style={{ color: '#38bdf8', display: 'block', fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                  🔬 Branch 2: Madurai R&D
                </strong>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                  TCE, Thiyagarajar College Of Engineering, Madurai - 625015
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <strong style={{ color: '#38bdf8', display: 'block', fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                  ⚙️ Branch 3: Pune Industrial Hub
                </strong>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                  102, Suman Business Center, Kalyani Nagar, Pune, Maharashtra - 411014
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <strong style={{ color: '#38bdf8', display: 'block', fontSize: '0.88rem', marginBottom: '0.25rem' }}>
                  🏭 Branch 4: Hosur Manufacturing Hub
                </strong>
                <p style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.5, margin: 0 }}>
                  Plot no-51, 2/749-6 MM.Nagar, Mookandapalli, Hosur - 635126
                </p>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem', backgroundColor: 'rgba(0, 113, 186, 0.1)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(56, 189, 248, 0.25)' }}>
              <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.96rem', marginBottom: '0.5rem' }}>
                📞 Direct Phone & Mobile Desks
              </strong>
              <div style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.7, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.5rem' }}>
                <div><strong>Toll Free:</strong> <a href="tel:1800120774777" style={{ color: '#38bdf8', fontWeight: 700 }}>1800 120 774777</a></div>
                <div><strong>Chennai Desk:</strong> 044 3553 7618</div>
                <div><strong>Sales / WhatsApp:</strong> <a href="tel:+916380859963" style={{ color: '#34d399', fontWeight: 700 }}>+91 63808 59963</a></div>
                <div><strong>Direct Line:</strong> <a href="tel:+917305535993" style={{ color: '#38bdf8' }}>+91 73055 35993</a></div>
                <div><strong>Direct Line:</strong> <a href="tel:+917305635993" style={{ color: '#38bdf8' }}>+91 73056 35993</a></div>
                <div><strong>Software Support:</strong> <a href="tel:+919342173484" style={{ color: '#38bdf8' }}>+91 93421 73484</a></div>
                <div><strong>Service Mobile:</strong> <a href="tel:+917200157626" style={{ color: '#f59e0b' }}>+91 72001 57626</a></div>
              </div>
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <strong style={{ color: 'var(--cyan-primary)', display: 'block', marginBottom: '0.35rem' }}>
                📧 Official Departmental Emails
              </strong>
              <div style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6 }}>
                <div><strong>Sales:</strong> <a href="mailto:sales@atplgroup.com" style={{ color: 'var(--cyan-primary)' }}>sales@atplgroup.com</a></div>
                <div><strong>General:</strong> <a href="mailto:info@atplgroup.com" style={{ color: 'var(--cyan-primary)' }}>info@atplgroup.com</a></div>
                <div><strong>Software Support:</strong> <a href="mailto:softwaresupport@atplgroup.com" style={{ color: 'var(--cyan-primary)' }}>softwaresupport@atplgroup.com</a></div>
                <div><strong>Service Desk:</strong> <a href="mailto:support@atplgroup.com" style={{ color: 'var(--cyan-primary)' }}>support@atplgroup.com</a></div>
              </div>
            </div>

            `;

  contactContent = contactContent.substring(0, oStart) + newOfficesMarkup + contactContent.substring(oEnd);
  fs.writeFileSync(contactPath, contactContent, 'utf8');
  console.log('Successfully updated ContactView.jsx with complete branch network!');
}

// =========================================================================
// 2. UPDATE HomeView.jsx coreSolutions to add Perfect Flow 360
// =========================================================================
const homePath = path.resolve('src/components/pages/HomeView.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

const coreSolStartMarker = "const coreSolutions = [";
const visionEndMarker = "view: 'software'\n    }\n  ];";
const visionEndMarkerCRLF = "view: 'software'\r\n    }\r\n  ];";

const csStart = homeContent.indexOf(coreSolStartMarker);
let csEnd = homeContent.indexOf(visionEndMarker, csStart);
let csMarkerLen = visionEndMarker.length;
if (csEnd === -1) {
  csEnd = homeContent.indexOf(visionEndMarkerCRLF, csStart);
  csMarkerLen = visionEndMarkerCRLF.length;
}

if (csStart !== -1 && csEnd !== -1) {
  const newCoreSolutions = `const coreSolutions = [
    {
      id: 'mdm',
      name: 'PerfectEdge MDM',
      badge: 'Smart Device Management',
      icon: Smartphone,
      color: '#0071ba',
      bgColor: 'rgba(0, 113, 186, 0.08)',
      shortDesc: 'Easily add and manage devices from multiple locations through a single centralized MDM platform.',
      summary: 'Centralized mobile device management for rugged handhelds and forklift terminals.',
      description: 'Easily add and manage devices from multiple locations through a single centralized MDM platform. Restrict unauthorized app usage like YouTube, games, or social media to improve productivity and security. Track real-time device status including online/offline, battery health, and live location updates.',
      features: [
        'Easily add and manage devices from multiple locations through a single platform',
        'Organize devices group-wise based on branch, department, or location',
        'Restrict unauthorized app usage & enable secure whitelisting so links work only on authorized devices'
      ],
      view: 'software'
    },
    {
      id: 'labeler',
      name: 'Perfect Labeler',
      badge: 'Cloud Printing Application',
      icon: Printer,
      color: '#E85874',
      bgColor: 'rgba(232, 88, 116, 0.08)',
      shortDesc: 'Print anytime, anywhere effortlessly. Generate label templates instantly using simple AI prompts.',
      summary: 'Centralized cloud label designer with automated industrial print-and-apply.',
      description: 'Anyone can design and print labels easily without technical training. With cloud-native architecture, there is no extra cost for multiple systems or printers, making it highly scalable and cost-effective across multi-branch operations.',
      features: [
        'Users can generate label templates instantly using simple AI prompts',
        'Labels can be generated using Excel upload, PDF upload, or manual data entry',
        'No extra cost for multiple systems or printers, supporting multi-branch operations'
      ],
      view: 'software'
    },
    {
      id: 'flow360',
      name: 'Perfect Flow 360',
      badge: 'CRM & Field Operations',
      icon: Users,
      color: '#0071ba',
      bgColor: 'rgba(0, 113, 186, 0.08)',
      shortDesc: 'Customer relationship management, instant quotations, and live delivery tracking.',
      summary: 'Centralized CRM with attendance, quotation management, and field analytics.',
      description: 'Create and manage leads efficiently while maintaining complete customer details and communication history in one platform. Generate professional quotations instantly, track employee attendance, and monitor live delivery status.',
      features: [
        'Instant professional quotations, pricing approvals, and sales pipeline management',
        'Centralized employee attendance, working hours, and field activity tracking',
        'Live product delivery tracking and executive analytics reports anytime, anywhere'
      ],
      view: 'software'
    },
    {
      id: 'audit',
      name: 'Perfect Audit',
      badge: 'Internal Audit & Compliance',
      icon: ShieldCheck,
      color: '#0071ba',
      bgColor: 'rgba(0, 113, 186, 0.08)',
      shortDesc: 'Paperless ISO & IATF digital checklists with photo proof and automated CAPA.',
      summary: '100% paperless ISO internal audit and compliance management SaaS.',
      description: 'Replaces paper clipboards and Excel sheets across multi-plant facilities. Shopfloor inspectors capture photo proof, geo-timestamps, and automated CAPA corrective actions directly on mobile devices.',
      features: ['Digital mobile inspection checklists with mandatory photo proof', 'Automated corrective action (CAPA) tracking and escalation rules', 'Cuts ISO 9001:2015 and IATF 16949 audit preparation time by 70%'],
      view: 'software'
    },
    {
      id: 'store',
      name: 'Perfect Store (WMS)',
      badge: 'Warehouse Management',
      icon: Boxes,
      color: '#E85874',
      bgColor: 'rgba(232, 88, 116, 0.08)',
      shortDesc: 'Warehouse management with bin slotting, FIFO control, and direct ERP sync.',
      summary: 'Bin-level inventory tracking, FIFO enforcement, and direct ERP sync.',
      description: 'Connects warehouse operators on rugged handhelds straight into SAP S/4HANA and Oracle. Automatically directs put-away, stock picking, and dock dispatch without discrepancies.',
      features: ['Real-time two-way SAP & Oracle ERP sync', 'Dynamic bin slotting and aisle picking paths', 'Automated FIFO, FEFO, and quarantine rules'],
      view: 'software'
    },
    {
      id: 'trace',
      name: 'Perfect Trace',
      badge: 'Track & Trace Serialization',
      icon: Layers,
      color: '#0071ba',
      bgColor: 'rgba(0, 113, 186, 0.08)',
      shortDesc: 'Parent-child packaging serialization meeting DGFT and US-FDA export standards.',
      summary: 'Multi-tier parent-child packaging serialization and aggregation.',
      description: 'Connects packaging lines for automotive OEMs and pharmaceutical exporters. Generates cryptographic serials and verifies 2D barcodes at production line speed to eliminate recall liability.',
      features: ['4-tier aggregation (Item → Carton → Shipper → Pallet)', 'DGFT, US-FDA DSCSA & 21 CFR Part 11 compliant', 'Batch recall genealogy lookup in under 2 minutes'],
      view: 'software'
    },
    {
      id: 'vision',
      name: 'Perfect Vision AI',
      badge: 'Machine Vision Inspection',
      icon: Eye,
      color: '#E85874',
      bgColor: 'rgba(232, 88, 116, 0.08)',
      shortDesc: 'High-speed conveyor optical inspection for automated defect classification.',
      summary: 'High-speed conveyor optical inspection for automated defect detection.',
      description: 'Industrial optical cameras running real-time Pass/Fail defect analysis on high-speed lines. Classifies microscopic surface flaws, label alignment, and solder cracks with automated reject gates.',
      features: ['Real-time automated Pass/Fail quality classification', 'Catches surface scratches, label misalignment, and print flaws', 'Direct pneumatic diverter and reject chute triggering'],
      view: 'software'
    }
  ];`;

  homeContent = homeContent.substring(0, csStart) + newCoreSolutions + homeContent.substring(csEnd + csMarkerLen);
  fs.writeFileSync(homePath, homeContent, 'utf8');
  console.log('Successfully updated HomeView.jsx coreSolutions!');
}
