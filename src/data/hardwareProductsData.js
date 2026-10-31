export const HARDWARE_DECK_CARDS = [
  // --- 1. SCANNING SOLUTIONS (atplgroup.com/barcode-scanner-solutions/) ---
  {
    id: 'hw-scanner-wired',
    num: '01',
    category: 'scanners',
    categoryName: 'Scanning Solutions',
    oem: 'ATPL Solutions',
    title: 'ATPL Wired Scanner 1D / 2D',
    subtitle: 'Superior High-Accuracy Workstation & Dispatch Imager',
    accentColor: '#00f0ff',
    badgeText: '1D / 2D High-Accuracy',
    headlineWord: 'WIRED SCAN',
    tagline: 'Captures Even the Most Difficult-to-Read or Damaged Barcodes',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/h1.jpg',
    fallbackImage: '/assets/images/hw_handheld_scanner.jpg',
    desc: 'Superior scanning solution for 1D & 2D Barcodes. Premium wired scanning for retail, dispatch, and workstation environments that demand high-accuracy scanning of barcodes. Engineered to capture even the most difficult-to-read or damaged barcodes and improve business performance through technology.',
    keyPills: ['1D & 2D Barcodes', 'Damaged Code Capture', 'Retail & Dispatch Desks', 'Heavy-Duty USB / RS-232'],
    stats: [
      { label: 'Symbologies', val: 'All Standard 1D & 2D Barcodes' },
      { label: 'Workstations', val: 'Retail, Stores, Dispatch Bays' },
      { label: 'Condition Tolerance', val: 'Damaged, Smudged & Curved Codes' },
      { label: 'Interface', val: 'USB HID, Virtual COM, RS-232' }
    ],
    blueprint: {
      controller: 'High-Density Area Imager with Superior Decode DSP',
      connectivity: 'Industrial Shielded Heavy-Duty USB & RS-232 Cables',
      protocols: 'Direct POS Emulation, Keyboard Wedge, SAP WMS Driver',
      sensors: 'White LED illumination with precise green aimer beam',
      roiMetric: '100% First-Pass Read Rate on Low-Contrast and Damaged Labels'
    }
  },
  {
    id: 'hw-scanner-wireless',
    num: '02',
    category: 'scanners',
    categoryName: 'Scanning Solutions',
    oem: 'ATPL Solutions',
    title: 'ATPL Wireless Scanner 1D / 2D',
    subtitle: 'Freedom of Movement for POS, Conveyors & Warehouses',
    accentColor: '#38bdf8',
    badgeText: 'Extended Shift Battery',
    headlineWord: 'CORDLESS',
    tagline: 'Freedom of Movement Across Dispatch, Conveyors & Workstations',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/HS2.jpg',
    fallbackImage: '/assets/images/hw_cordless_scanner.jpg',
    desc: 'Wireless scanning solution for 1D & 2D Barcodes. Provides freedom of movement around POS terminals, conveyor lines, stores, dispatch areas, warehouses, and workstations. Features superior battery capacity for long-duration multi-shift work without interruption.',
    keyPills: ['Freedom of Movement', 'Superior Battery Capacity', 'Conveyors & Warehouses', 'Auto-Pairing Cradle'],
    stats: [
      { label: 'Wireless Range', val: 'Up to 100m Line of Sight' },
      { label: 'Battery Capacity', val: 'Full Multi-Shift Continuous Work' },
      { label: 'Drop Survival', val: '1.8m to Concrete Floors' },
      { label: 'Auto-Docking', val: 'Instant Magnetic Charge Cradle' }
    ],
    blueprint: {
      controller: 'Dual-Field Area Imager with Bluetooth Low Energy 5.0',
      connectivity: 'Base Station Cradle with Multi-Interface USB & RS-232',
      protocols: 'Real-Time Batch Storage Mode & Instant Online RF Sync',
      sensors: 'Aggressive motion tolerance decoding fast items on conveyor belts',
      roiMetric: 'Eliminates Cable Fatigue & Speeds Up Pallet Check-in by 40%'
    }
  },
  {
    id: 'hw-scanner-granit',
    num: '03',
    category: 'scanners',
    categoryName: 'Scanning Solutions',
    oem: 'Honeywell / ATPL',
    title: 'Granit XP 1991i Ultra-Rugged',
    subtitle: 'Industrial Wireless High-Rack & Freezer Imager',
    accentColor: '#E85874',
    badgeText: '3.0m Drop (IP67)',
    headlineWord: 'ULTRA-RUGGED',
    tagline: 'Survives 3.0m Concrete Drops, Forklifts & -30°C Freezers',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/h3.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/HS2.jpg',
    desc: 'Engineered for punishment in severe industrial environments. Built to survive 3.0-meter drops to concrete and thousands of tumbles. Extended flex-range optics capture barcodes from near-contact up to 15 meters away across high-rack warehouse bays and sub-zero cold chain facilities.',
    keyPills: ['15m Long Range', '3.0m Drop Concrete', '-30°C Cold Storage', 'IP65 & IP67 Sealed'],
    stats: [
      { label: 'Drop Specification', val: '3.0m to concrete at -30°C' },
      { label: 'Tumble Durability', val: '7,000 1-meter tumbles' },
      { label: 'Read Distance', val: 'Near contact up to 15 meters' },
      { label: 'Operating Temp', val: '-30°C to +50°C' }
    ],
    blueprint: {
      controller: 'FlexRange High-Density Long-Range Area Imager Engine',
      connectivity: 'Bluetooth Class 1 (100m line of sight) with Secure Base',
      protocols: 'Direct SAP WMS Emulation, Telnet 5250/3270, RS-232, USB',
      sensors: 'Impact-isolated optics with bright red laser aimer cross',
      roiMetric: 'Zero Breakage Replacement Costs in Demanding Foundries & Yards'
    }
  },
  {
    id: 'hw-scanner-dpm',
    num: '04',
    category: 'scanners',
    categoryName: 'Scanning Solutions',
    oem: 'ATPL Solutions',
    title: 'ATPL Industrial DPM Scanner',
    subtitle: 'Direct Part Mark Imager with Multi-Illumination',
    accentColor: '#a855f7',
    badgeText: 'DPM Multi-Illumination',
    headlineWord: 'DPM SCAN',
    tagline: 'Decodes Dot-Peen, Laser-Etch & Chemical Marks on Any Metal',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/h4.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/h1.jpg',
    desc: 'Engineered to read barcodes from Direct Part Marks (DPM) used in automotive, pharmaceutical, defense, and aerospace industries. Innovative multi-illumination lighting system enables scanning of virtually any type of direct part mark regardless of size, curved surface, marking method, or low contrast.',
    keyPills: ['Multi-Illumination System', 'Dot Peen & Laser Marks', 'Curved & Mirrored Metals', 'Automotive & Defense'],
    stats: [
      { label: 'Marking Types', val: 'Dot Peen, Laser Etch, Chemical Ink' },
      { label: 'Lighting Modes', val: 'Direct, Diffused & Darkfield Illumination' },
      { label: 'Surfaces', val: 'Cast Iron, Polished Chrome, Plastics' },
      { label: 'Quality Grading', val: 'ISO/IEC 15415 & AS9132 DPM Specs' }
    ],
    blueprint: {
      controller: 'DPM Cognitive Decoding Engine with Glare Suppression',
      connectivity: 'Heavy-Duty Industrial Shielded USB / RS-232 Cable',
      protocols: 'GS1 DataMatrix DPM, QR Code, MicroPDF417, PDF417',
      sensors: 'Multi-quadrant diffuse LED dome eliminating specular glare',
      roiMetric: 'Guarantees 100% Part Serialization Traceability on Powertrains'
    }
  },
  {
    id: 'hw-scanner-conveyor',
    num: '05',
    category: 'scanners',
    categoryName: 'Scanning Solutions',
    oem: 'ATPL Vision',
    title: 'ATPL Fixed Conveyor & Vision Scanner',
    subtitle: 'Built-in AI Technology & High-Speed In-Motion Reading',
    accentColor: '#06b6d4',
    badgeText: 'Built-in AI Vision',
    headlineWord: 'AI CONVEYOR',
    tagline: 'Identify Presence, Check Differences & Read Objects in Motion',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/h6.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/h1.jpg',
    desc: 'Lightweight, durable, and portable fixed-mount scanning solution for conveyor applications and kiosks. Features built-in AI technology designed to capture dynamic imaging conditions, identify presence, perform difference checking, and read objects rapidly on the move with external trigger I/O support.',
    keyPills: ['Built-in AI Technology', 'Read Objects on the Move', 'External Trigger I/O', 'Fixed Conveyor & Kiosk'],
    stats: [
      { label: 'Frame Rate', val: 'Up to 60 Frames / Second' },
      { label: 'Conveyor Speed', val: 'Reads Objects Moving at 3.5 m/s' },
      { label: 'I/O Ports', val: 'Optocoupled Triggers & Aux Lights' },
      { label: 'Mounting', val: 'Adjustable Industrial Swivel Bracket' }
    ],
    blueprint: {
      controller: 'Embedded AI Vision Neural Engine with Pattern Matching',
      connectivity: 'M12 Industrial Ethernet, RS-485, Opto-Isolated I/O Triggers',
      protocols: 'Modbus TCP, TCP/IP Socket, Direct PLC Trigger Handshake',
      sensors: 'Global shutter sensor eliminating motion blur at line speeds',
      roiMetric: 'Automates Sortation Lines with Zero In-Motion Mis-Scans'
    }
  },

  // --- 2. BARCODE PRINTER SOLUTIONS (atplgroup.com/barcode-printer-solutions/) ---
  {
    id: 'hw-printer-industrial',
    num: '06',
    category: 'printers',
    categoryName: 'Printing Solutions',
    oem: 'ATPL Industrial',
    title: 'Industrial Printer - High Performance',
    subtitle: '24/7 Error-Free Precision with In-Line Verification',
    accentColor: '#10b981',
    badgeText: 'In-Line Verifier',
    headlineWord: 'INDUSTRIAL',
    tagline: 'Error-Free Precision Printing & Host-Free Smart Printing',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/industrial-printer.png',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/04/desktop-printer.png',
    desc: 'Takes industrial printing to a new level of accuracy and simplicity by providing customers with error-free precision printing, increasing production efficiency and reducing operational costs. Integrated label verification technology checks and ensures barcodes are accurate every time. Smart printing allows configuring and printing without a host computer.',
    keyPills: ['Integrated Label Verifier', 'Host-Free Smart Print', 'Predictive Fleet Analytics', 'Heavy All-Metal Build'],
    stats: [
      { label: 'Max Print Speed', val: 'Up to 14 Inches / Second' },
      { label: 'Verification', val: 'Integrated 1D/2D In-line Barcode Verifier' },
      { label: 'Resolution', val: '203 / 300 / 600 DPI Precision' },
      { label: 'Chassis', val: 'Rugged Die-Cast Metal Structure' }
    ],
    blueprint: {
      controller: 'High-Speed Multitasking RISC CPU with Real-Time Buffer',
      connectivity: 'Gigabit Ethernet, Dual USB Host, RS-232, Wi-Fi 6',
      protocols: 'ZPL II, DPL, IPL, Direct XML & SAP Smart Forms Native Driver',
      sensors: 'Transmissive gap sensor, reflective black mark, ribbon low sensor',
      roiMetric: 'Eliminates Unreadable Barcode Chargebacks & Boosts Uptime to 99.9%'
    }
  },
  {
    id: 'hw-printer-rfid',
    num: '07',
    category: 'printers',
    categoryName: 'Printing Solutions',
    oem: 'ATPL Industrial',
    title: 'ATPL RFID Industrial Printer & Encoder',
    subtitle: 'High-Speed Encoding on Standard & On-Metal Tags',
    accentColor: '#fbbf24',
    badgeText: 'RAIN RFID Encoded',
    headlineWord: 'RFID PRINT',
    tagline: 'High-Speed Encoding for Standard Labels & On-Metal Assets',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/rfid-printer.png',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/04/desktop-printer.png',
    desc: 'Enterprise-level features and high-speed RFID encoding at an affordable price. Encodes and prints on standard RFID paper labels commonly used in carton or pallet supply chain applications, as well as thick on-metal RFID tags used in asset tracking where the tagged item has a metal surface, such as IT servers, safety deposit boxes, or gas canisters.',
    keyPills: ['Standard & On-Metal Tags', 'High-Speed RFID Encoding', 'Supply Chain Cartons', 'IT Servers & Gas Canisters'],
    stats: [
      { label: 'RFID Standard', val: 'EPCglobal Gen2v2 / ISO 18000-6C' },
      { label: 'Tag Compatibility', val: 'Standard Paper Inlays & On-Metal Tags' },
      { label: 'Verification', val: 'Auto Bad-Tag Voiding & Re-Print' },
      { label: 'Print Resolution', val: '300 & 600 DPI High-Density' }
    ],
    blueprint: {
      controller: 'Integrated RAIN RFID Encoder Engine with Dynamic Antenna Pitch',
      connectivity: 'Gigabit Ethernet, USB Host, RS-232, Industrial Wi-Fi',
      protocols: 'EPC Gen2, RAIN RFID, ZPL RFID Commands, SAP Auto-ID',
      sensors: 'Adaptive antenna calibrator detecting micro-pitch tag inlays',
      roiMetric: 'Simultaneous 100% Verified RFID Tag Encoding & Barcode Printing'
    }
  },
  {
    id: 'hw-printer-mobile',
    num: '08',
    category: 'printers',
    categoryName: 'Printing Solutions',
    oem: 'ATPL Mobile',
    title: 'ATPL Portable Mobile Printer',
    subtitle: 'Point-of-Activity Printing Built for Rugged Environments',
    accentColor: '#00a651',
    badgeText: '2.0m Drop Concrete',
    headlineWord: 'MOBILE PRINT',
    tagline: 'On-the-Spot Labeling Built for the Most Rugged Environments',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/mobile-printer.png',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/04/desktop-printer.png',
    desc: 'Prints labels directly at the location where they are needed. Portable mobile printer built for the most rugged environments with quiet operation and excellent value. Increases efficiency and minimizes downtime with easy integrated device management and high-level security throughout the printer lifespan.',
    keyPills: ['Print at Point of Activity', 'Built for Rugged Environments', 'Easy Device Management', 'High-Level Security'],
    stats: [
      { label: 'Drop Survival', val: '2.0m to Concrete Floors' },
      { label: 'Print Width', val: 'Up to 4-Inch (104mm) Media' },
      { label: 'Battery Capacity', val: 'High-Capacity Smart Lithium-Ion' },
      { label: 'Connectivity', val: 'Bluetooth 5.0 BLE + Wi-Fi 802.11ac' }
    ],
    blueprint: {
      controller: 'Low-Power Mobile Print Processor with Instant Cold-Wake',
      connectivity: 'NFC Instant Tap-to-Pair with Handhelds & Tablets',
      protocols: 'CPCL, ZPL, EPL, ESC/POS, Direct Android / iOS SDK',
      sensors: 'Optical label gap sensor, black mark reflex, paper-out switch',
      roiMetric: 'Saves 45 Minutes Per Worker Shift by Eliminating Walking to Desks'
    }
  },
  {
    id: 'hw-printer-desktop',
    num: '09',
    category: 'printers',
    categoryName: 'Printing Solutions',
    oem: 'ATPL Solutions',
    title: 'ATPL Desktop Barcode Printer',
    subtitle: 'Affordable High-Volume Daily Identification & Shipping',
    accentColor: '#0071ba',
    badgeText: 'High-Volume Daily',
    headlineWord: 'DESKTOP',
    tagline: 'Prints Thousands of Clear, Crisp Barcode & Shipping Labels Daily',
    image: 'https://atplgroup.com/wp-content/uploads/2024/04/desktop-printer.png',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/industrial-printer.png',
    desc: 'For budgetary label printing solutions. Designed and built to deliver high quality and performance while withstanding tough workplace environments. Affordable, hardworking printer producing thousands of clear, crisp barcode and identification labels per day, from shipping labels to compliance and product identification.',
    keyPills: ['Budgetary Label Printing', 'Thousands of Labels / Day', 'Shipping & Compliance Labels', 'Withstands Tough Desks'],
    stats: [
      { label: 'Daily Output', val: 'Thousands of Labels per Day' },
      { label: 'Applications', val: 'Shipping, Compliance, Product IDs' },
      { label: 'Print Methods', val: 'Direct Thermal & Thermal Transfer' },
      { label: 'Shell Structure', val: 'Dual-Walled High-Impact Polymer' }
    ],
    blueprint: {
      controller: '32-Bit RISC Engine with Easy-Load Ribbon & Media Mechanism',
      connectivity: 'USB 2.0 High-Speed, Ethernet RJ-45, Optional Wi-Fi',
      protocols: 'Auto-Switching Emulations: ZPL II, EPL, TSPL, DPL',
      sensors: 'Adjustable transmissive gap sensor and reflective black mark',
      roiMetric: 'Lowest Total Cost of Ownership for Stockrooms & Packing Benches'
    }
  },

  // --- 3. MOBILITY & TABLET SOLUTIONS (atplgroup.com/mobility-tablet-solutions/) ---
  {
    id: 'hw-mobility-rugged',
    num: '10',
    category: 'mobility',
    categoryName: 'Mobility Edge Solutions',
    oem: 'Honeywell / Zebra',
    title: 'Android Enterprise Rugged Device',
    subtitle: 'Full-Touch + Physical Keypad with 15.2m Read Range',
    accentColor: '#38bdf8',
    badgeText: '15.2m Read Range',
    headlineWord: 'RUGGED',
    tagline: 'Fast Data Entry at High Transaction Rates in Severe Environments',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/RUGED-DEVICE.png',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/enterprise-model.png',
    desc: 'Android Enterprise Rugged handheld computer designed to improve operational speed and accuracy. Combines full-touch capabilities with physical keys for fast data entry at high transaction rates in severe environments. Features enhanced 1D/2D scanning with read ranges from 0.15m to 15.2m, surviving 3.0m drops to concrete and IP65/IP67 water/dust spray.',
    keyPills: ['0.15m to 15.2m Read Range', '3.0m Drop to Concrete', 'Touch + Physical Keypad', 'IP65 / IP67 Sealed'],
    stats: [
      { label: 'Drop Specification', val: '3.0m to concrete & 1m tumbles' },
      { label: 'Scan Range', val: '0.15 m to 15.2 m FlexRange' },
      { label: 'Ingress Protection', val: 'IP65 & IP67 Sealed against water spray' },
      { label: 'Keypad Options', val: 'Numeric, Functional & Alphanumeric' }
    ],
    blueprint: {
      controller: 'Qualcomm Octa-Core Processor with Dedicated Neural Engine',
      connectivity: 'Wi-Fi 6E (802.11ax), 5G Cellular, Bluetooth 5.2 Low Energy',
      protocols: 'Android Enterprise Recommended, SAP Fiori, Telnet 5250/3270',
      sensors: 'Extended-range area imager with green LED aimer cross',
      roiMetric: 'Zero Breakage Rate & 45% Faster High-Bay Rack Inventory Audits'
    }
  },
  {
    id: 'hw-mobility-field',
    num: '11',
    category: 'mobility',
    categoryName: 'Mobility Edge Solutions',
    oem: 'ATPL Mobility Edge',
    title: 'Mobility Edge Enterprise Device',
    subtitle: 'Qualcomm-Powered Scalable Mobile Platform',
    accentColor: '#00f0ff',
    badgeText: '2-3 Shift Battery',
    headlineWord: 'MOBILITY',
    tagline: 'Lightweight & Slim Design with Two to Three Shift Battery Life',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/enterprise-model.png',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/field-mobility.png',
    desc: 'Enterprise-class mobile computer that provides reliable and secure connectivity between frontline workers and backend systems across retail, logistics, manufacturing, and public service. Lightweight and slim design allows users to easily operate the device with one hand, carry it in pockets, and stay comfortable all day, backed by a battery lasting 2 to 3 shifts.',
    keyPills: ['Unified Mobility Edge', '2 to 3 Shifts Battery', 'Slim One-Handed Design', 'Centimeters to 20m Range'],
    stats: [
      { label: 'Battery Life', val: 'Lasts 2 to 3 Full Work Shifts' },
      { label: 'Ergonomics', val: 'Slim, Pocketable & Lightweight Design' },
      { label: 'Platform Stability', val: 'Guaranteed Multi-Gen Android Support' },
      { label: 'Scan Flexibility', val: 'Centimeters up to 20m Scan Choice' }
    ],
    blueprint: {
      controller: 'High-Performance Qualcomm Platform with Long OS Lifecycle',
      connectivity: 'Fast Roaming Wi-Fi, Bluetooth 5.1 BLE, 4G/5G Cellular',
      protocols: 'WPA3 Enterprise Security, Zero-Touch MDM Enrollment',
      sensors: 'Integrated ambient light sensor and proximity sensor',
      roiMetric: 'Guaranteed 5-Year Hardware Lifecycle & Lower Enterprise TCO'
    }
  },
  {
    id: 'hw-mobility-cold-zone',
    num: '12',
    category: 'mobility',
    categoryName: 'Mobility Edge Solutions',
    oem: 'ATPL Specialized',
    title: 'Cold Storage & Hazardous Zone Terminal',
    subtitle: 'Built for -30°C Freezers & Explosive Atmospheres',
    accentColor: '#06b6d4',
    badgeText: '-30°C Freezer Ready',
    headlineWord: 'ZONE ATEX',
    tagline: 'Heated Scan Windows & High Visibility in Direct Sunlight & Explosive Zones',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/cold-storage.png',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/ZONE-device.png',
    desc: 'Specifically built to perform under demanding conditions in cold storage areas, oily environments, mines, freezer warehouses, and explosive atmosphere zones. Features heated optical scan windows to prevent condensation, high-visibility displays in direct sunlight, glove-operable touchscreens, and noise-canceling loud speakers.',
    keyPills: ['-30°C Cold Storage', 'Hazardous Zone Rated', 'Internal Heated Window', 'Glove & Sunlight Display'],
    stats: [
      { label: 'Operating Temp', val: '-30°C to +50°C Continuous' },
      { label: 'Hazardous Certification', val: 'Non-Incendive & Explosive Atmosphere' },
      { label: 'Display Optics', val: 'Direct Sunlight High-Nits Screen' },
      { label: 'Audio System', val: 'Extremely Loud Speaker with Noise Cancel' }
    ],
    blueprint: {
      controller: 'Thermal-Regulated Embedded Motherboard with Internal Heaters',
      connectivity: 'Low-Temp Rated Antennas for High-Moisture Freezers',
      protocols: 'ATEX / IECEx Zone 2 Certified, Cold Storage Protocol',
      sensors: 'Desiccant-sealed optics with frost-prevention heating coil',
      roiMetric: 'Prevents Fogging Downtime & Battery Shutdown in -30°C Cold Stores'
    }
  },
  {
    id: 'hw-mobility-tablet',
    num: '13',
    category: 'mobility',
    categoryName: 'Mobility Edge Solutions',
    oem: 'ATPL Industrial',
    title: 'ATPL Rugged Industrial Tablet',
    subtitle: 'Supervisor & Shopfloor Workflow Tablet with Vehicle Docks',
    accentColor: '#f59e0b',
    badgeText: 'Forklift Docked',
    headlineWord: 'TABLET',
    tagline: 'Vehicle Docks for Forklift Mounting, Desk Docks & Far-Range Scans',
    image: 'https://atplgroup.com/wp-content/uploads/2024/04/tablet-img.png',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/enterprise-model.png',
    desc: 'Rugged tablet designed for rapid user adoption across supervisors, shop floor workers, and maintenance teams. Ready to fit daily workflows with powerful barcode scanning capabilities including near, mid, and far range with instantaneous autofocus. Features vehicle docks for forklift mounting, desk docks, and secure voice/video collaboration.',
    keyPills: ['Forklift Vehicle Docks', 'Supervisor & Shopfloor Fit', 'Near / Mid / Far Scan', 'Voice & Video Collab'],
    stats: [
      { label: 'Mounting Docks', val: 'Forklift Vehicle Docks & Desk Docks' },
      { label: 'Barcode Scanner', val: 'Instantaneous Autofocus Imager' },
      { label: 'Durability', val: 'MIL-STD-810H & Rugged Drop Spec' },
      { label: 'Display Size', val: '8-Inch & 10-Inch High-Luminance' }
    ],
    blueprint: {
      controller: 'Intel / Qualcomm Industrial Mobile Platform',
      connectivity: 'Wi-Fi 6, 4G/5G LTE, Hot-Swappable Secondary Battery',
      protocols: 'Windows 11 Pro / Android Enterprise, SAP GUI, Web Apps',
      sensors: 'Gorilla Glass touch display operable with heavy work gloves',
      roiMetric: 'Connects Shopfloor Supervisors Directly to ERP in Real-Time'
    }
  },

  // --- 4. RFID SOLUTIONS (atplgroup.com/rfid-card-tags-antenna-and-readers/) ---
  {
    id: 'hw-rfid-fixed',
    num: '14',
    category: 'rfid',
    categoryName: 'RFID Solutions',
    oem: 'ATPL RFID',
    title: 'Best-in-Class Fixed RFID Reader',
    subtitle: 'High-Visibility Tag Reading for Logistics & Material Handling',
    accentColor: '#fbbf24',
    badgeText: 'High Tag Accuracy',
    headlineWord: 'FIXED RFID',
    tagline: 'Best-in-Class Visibility for Logistics, Manufacturing & Asset Tracking',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/rfid-reader.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/antena.jpg',
    desc: 'Best-in-class fixed mount RFID reader line that enables system integrators to create RFID solutions for logistics, material handling, asset tracking, and manufacturing applications. Easily deployed and managed on common networks to achieve a new level of visibility in identifying RFID tags with greater tag reading accuracy.',
    keyPills: ['High Tag Reading Accuracy', 'Logistics & Material Handling', 'Common Network Management', 'Multi-Port Fixed Mount'],
    stats: [
      { label: 'Tag Read Speed', val: 'Up to 1,200 Tags / Second' },
      { label: 'Sensitivity', val: '-92 dBm Ultra-High RF Receive' },
      { label: 'Antenna Ports', val: '4-Port & 8-Port Expandable' },
      { label: 'Power', val: 'Power over Ethernet Plus (PoE+)' }
    ],
    blueprint: {
      controller: 'Next-Generation RAIN RFID Reader Core with Phase Sensing',
      connectivity: 'Gigabit PoE+, Industrial M12 Ethernet, Opto-Isolated I/O',
      protocols: 'EPCglobal Gen2v2 (ISO 18000-6C), LLRP, JSON REST API',
      sensors: 'Integrated RF carrier cancellation and directional logic',
      roiMetric: '99.98% Automatic Verification on High-Speed Pallet Conveyors'
    }
  },
  {
    id: 'hw-rfid-sled',
    num: '15',
    category: 'rfid',
    categoryName: 'RFID Solutions',
    oem: 'ATPL RFID',
    title: 'ATPL Mobile RFID Reader & Sled',
    subtitle: 'Handheld RFID for Retail, Logistics & Manufacturing',
    accentColor: '#f97316',
    badgeText: 'Handheld UHF Sled',
    headlineWord: 'MOBILE SLED',
    tagline: 'Paired with Lightweight Touchscreen Mobile Computers Indoors & Outdoors',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/imagerfid-2.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/rfid-reader.jpg',
    desc: 'Offers a complete range of mobile solutions for RFID needs across multiple markets, from handheld readers for retail environments to ruggedized units for logistics and manufacturing. Paired with lightweight, touchscreen mobile computers for indoor and outdoor asset tracking and inventory counting.',
    keyPills: ['Handheld Mobile RFID', 'Retail to Rugged Logistics', 'Touch Mobile Pairing', 'Indoor & Outdoor Tracking'],
    stats: [
      { label: 'Read Distance', val: 'Up to 10+ Meters Line of Sight' },
      { label: 'Ergonomics', val: 'Balanced Gun Grip with Quick-Release' },
      { label: 'Battery Capacity', val: 'Dedicated 7,000 mAh RFID Battery' },
      { label: 'Drop Rating', val: '1.5m to Concrete Floors' }
    ],
    blueprint: {
      controller: 'High-Throughput Mobile UHF RFID Module with Anti-Collision',
      connectivity: 'Direct eConn Hardware Interface & Bluetooth 5.0',
      protocols: 'ISO 18000-6C, RAIN RFID, Native Android Sled SDK',
      sensors: 'Circular polarized antenna reading tags at any physical angle',
      roiMetric: 'Conducts 10,000-Item Warehouse Audits in Under 20 Minutes'
    }
  },
  {
    id: 'hw-rfid-antenna-tags',
    num: '16',
    category: 'rfid',
    categoryName: 'RFID Solutions',
    oem: 'ATPL RFID',
    title: 'Forklift Antennas & Industrial Tags',
    subtitle: 'Vibration-Proof Antennas with Water & Chemical Resistant Tags',
    accentColor: '#eab308',
    badgeText: 'Shock & Vibration Proof',
    headlineWord: 'RFID ANTENNA',
    tagline: 'No Drilling, Cutting or Welding for Fast Single Forklift or Fleet Rollouts',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/antena.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/04/Rfid-tags.jpg',
    desc: 'RFID antennas specifically developed for forklift installations where shock and vibration exceed fixed antenna specifications, mounted with no drilling, cutting, or welding for fast fleet deployments. Paired with a wide range of industrial RFID tags that withstand water immersion, chemicals, shock, and temperature variations without line of sight.',
    keyPills: ['Forklift Vibration Proof', 'No-Drill Mounting Cells', 'Water & Chemical Resistant', 'No Line of Sight Needed'],
    stats: [
      { label: 'Forklift Mounting', val: 'Antenna Cells: No Drilling or Cutting' },
      { label: 'Tag Resistance', val: 'Water, Harsh Chemicals & High Shock' },
      { label: 'Line of Sight', val: 'No Line of Sight Required for Reading' },
      { label: 'Tag Formats', val: 'On-Metal, High-Temp, Reusable & Disposable' }
    ],
    blueprint: {
      controller: 'Heavy-Duty Shock-Absorbing Cell Antenna Housing',
      connectivity: 'Low-Loss Reverse-Polarity TNC Coaxial Cables',
      protocols: 'UHF 865-868 MHz (India & EU) / 902-928 MHz (US)',
      sensors: 'Multi-plane radiation pattern capturing tags in any orientation',
      roiMetric: 'Zero Forklift Cabling Damage & Continuous Pallet Pick Verification'
    }
  },

  // --- 5. DIRECT MARKING SOLUTIONS (atplgroup.com/direct-marking-solutions/) ---
  {
    id: 'hw-marking-fiber',
    num: '17',
    category: 'marking',
    categoryName: 'Direct Marking Solutions',
    oem: 'ATPL Marking',
    title: 'Fiber Laser Marking Machine',
    subtitle: 'Chiller-Free High-Speed Traceability for Metals & Cast Iron',
    accentColor: '#a855f7',
    badgeText: 'Operates Without Chillers',
    headlineWord: 'FIBER LASER',
    tagline: 'Marking, Engraving, Coding & Etching on All Types of Metals',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/forbes_macsa_packaginglasers_bmfd_packaging.png',
    fallbackImage: '/assets/images/hardware/atpl_marking_bradma_dotpeen.png',
    desc: 'Suitable for rugged industrial environments, operating reliably without chillers. Engineered for high-resolution, high-speed marking and high-volume applications with negligible maintenance and zero consumables. Provides the best industrial solution for product identification and traceability, marking on coated metals, glass, fiberglass, plastics, cast iron, and leather.',
    keyPills: ['Operates Without Chillers', 'Zero Consumables Cost', 'Coated Metals & Cast Iron', 'Negligible Maintenance'],
    stats: [
      { label: 'Chiller Requirement', val: 'Zero Chillers Required (Air Cooled)' },
      { label: 'Substrates', val: 'Metals, Cast Iron, Fiber Glass, Acrylic' },
      { label: 'Marking Operations', val: 'Marking, Engraving, Coding & Etching' },
      { label: 'Consumables', val: '100% Zero Inks or Consumables' }
    ],
    blueprint: {
      controller: 'Solid-State Fiber Laser Source with High-Speed Galvo Scanner',
      connectivity: 'Industrial Ethernet M12, USB 3.0, Optically Isolated I/O',
      protocols: 'Direct Marking of GS1 DataMatrix, Alphanumeric Codes',
      sensors: 'Red pilot beam focusing pointer with focal height sensor',
      roiMetric: '100% Permanent Part Traceability with Zero Consumables Expense'
    }
  },
  {
    id: 'hw-marking-uv',
    num: '18',
    category: 'marking',
    categoryName: 'Direct Marking Solutions',
    oem: 'ATPL Marking',
    title: 'UV Laser Hyperfine Marking Machine',
    subtitle: 'Mini Laser Spot Cold Marking with Zero Material Burning',
    accentColor: '#c084fc',
    badgeText: 'Zero Material Burning',
    headlineWord: 'UV LASER',
    tagline: 'Mini Laser Spot & Small Heat-Affected Zone for Hyperfine Marking',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/UV-LASER-600x500-1.png',
    fallbackImage: '/assets/images/hardware/atpl_marking_laser.png',
    desc: 'Features a mini laser spot and ultra-small heat-affected zone for hyperfine marking on special and heat-sensitive materials. The premier choice for customers requiring high marking quality with zero material burning, high marking speed, high efficiency, stable performance, and low electricity consumption.',
    keyPills: ['Mini Laser Spot', 'Zero Material Burning', 'Small Heat-Affected Zone', 'Low Electricity Consumption'],
    stats: [
      { label: 'Laser Wavelength', val: '355nm UV Cold Laser Beam' },
      { label: 'Thermal Effect', val: 'Negligible (Zero Material Burning)' },
      { label: 'Target Materials', val: 'Special Plastics, Glass, Pharma Vials' },
      { label: 'Power Consumption', val: 'Low Electricity Energy Efficient' }
    ],
    blueprint: {
      controller: 'Diode-Pumped Solid-State UV Laser with Precision Optic Train',
      connectivity: 'Industrial PC Controller with Automated Touchscreen GUI',
      protocols: '21 CFR Part 11 Audit Trail, UDI Medical Compliance',
      sensors: 'Micro-focal dynamic depth sensor for curved medical vials',
      roiMetric: 'Flawless Contrast on Sensitive Plastics Without Structural Damage'
    }
  },
  {
    id: 'hw-marking-pin',
    num: '19',
    category: 'marking',
    categoryName: 'Direct Marking Solutions',
    oem: 'Bradma / ATPL',
    title: 'Industrial Dot Peen Pin Marker',
    subtitle: 'Deep Mechanical Character & 2D Matrix Indentation',
    accentColor: '#9333ea',
    badgeText: 'Optimal Efficiency',
    headlineWord: 'PIN MARKING',
    tagline: 'Automates Character & DataMatrix Marking on Plastic & Metal Surfaces',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/bramda-600x500.png',
    fallbackImage: '/assets/images/hardware/atpl_marking_tmp1000.png',
    desc: 'Fast-paced industries depend on dot peen markers to automate the process of marking characters on plastic and metal surfaces. Delivers precise dot placement that yields high-quality, long-lasting impressions and legible wording on substrates, ensuring permanent traceability through painting and sandblasting.',
    keyPills: ['Deep Permanent Indents', 'Optimal Efficiency & Speed', 'Precise Dot Placement', 'Metal & Dense Plastics'],
    stats: [
      { label: 'Marking Principle', val: 'Pneumatic & Electromagnetic Dot Peen' },
      { label: 'Material Hardness', val: 'Up to 62 HRC Hardened Steel' },
      { label: 'Legibility', val: 'Legible After Paint & Heavy Wear' },
      { label: 'Configurations', val: 'Benchtop & Handheld Gun Models' }
    ],
    blueprint: {
      controller: 'Microprocessor-Controlled X/Y Stepper Drive System',
      connectivity: 'RS-232, USB, Ethernet, PLC I/O Start/Stop Signals',
      protocols: 'ISO 16022 DataMatrix, Serial Numbering, Time Stamps',
      sensors: 'Stylus position feedback with carbide pin wear detection',
      roiMetric: 'Indelible Chassis Identification Surviving 20+ Years in Service'
    }
  },

  // --- 6. INDUSTRIAL TOUCH SYSTEMS (atplgroup.com/industrial-touch-system/) ---
  {
    id: 'hw-touch-industrial',
    num: '20',
    category: 'touch',
    categoryName: 'Industrial Touch Systems',
    oem: 'ATPL Touch',
    title: 'Industrial Touch System & Edge POS',
    subtitle: 'Fan-Less Thermal Design with Toughened PCAP Glass',
    accentColor: '#f59e0b',
    badgeText: 'Fan-Less Thermal Design',
    headlineWord: 'TOUCH SYSTEM',
    tagline: 'Bezel-Free Toughened Glass & OS Versatility (Android, Windows, Linux)',
    image: 'https://atplgroup.com/wp-content/uploads/2024/04/touch-1024x683.jpg',
    fallbackImage: '/assets/images/hw_electronics_qc.jpg',
    desc: 'Diverse industrial edge computers with high performance and rugged design to enhance retail, hospitality services, and industrial automation. Features complete OS versatility (Android, Windows, and Linux compatible), bezel-free PCAP touch screen, impact-resistant toughened glass, and a fan-less thermal design that allows heat to dissipate rapidly.',
    keyPills: ['Fan-less Thermal Design', 'Bezel-Free PCAP Touch', 'Android, Windows & Linux', 'Toughened Glass Screen'],
    stats: [
      { label: 'Thermal Cooling', val: 'Fan-less Rapid Heat Dissipation' },
      { label: 'Touch Screen Type', val: 'Bezel-free Projected Capacitive (PCAP)' },
      { label: 'Front Glass', val: 'Impact-Resistant Toughened Glass' },
      { label: 'Operating Systems', val: 'Android, Windows & Linux Compatible' }
    ],
    blueprint: {
      controller: 'High-Performance Fanless Industrial Embedded Core',
      connectivity: 'Dual LAN, Multiple USB 3.0, Powered COM RS-232/485',
      protocols: 'OPC UA, MQTT, Windows IoT, Ubuntu LTS, Android POS',
      sensors: 'Glove-operable capacitive sensor with moisture rejection',
      roiMetric: '100% Elimination of Dust-Related Computer Failures on the Shop Floor'
    }
  },

  // --- 7. PLC AUTOMATION (atplgroup.com/plc-automation/) ---
  {
    id: 'hw-plc-automation',
    num: '21',
    category: 'plc',
    categoryName: 'PLC Automation',
    oem: 'ATPL Automation',
    title: 'ATPL PLC Automation Panel & Control',
    subtitle: 'Integrating Scanners, Printers & HMIs with Industrial Fieldbuses',
    accentColor: '#06b6d4',
    badgeText: 'Industrial Fieldbus',
    headlineWord: 'AUTOMATION',
    tagline: 'Interprets Higher-Level Software to Execute Automated Movements',
    image: 'https://atplgroup.com/wp-content/uploads/2024/02/PLC-AUTOMATION.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/h6.jpg',
    desc: 'Automates industrial processes by integrating barcode scanners, printers, and HMIs with higher-level software applications. Interprets information from software to execute automated movements via industrial fieldbuses, connecting sensors, electric motors, valves, and switches, outfitted with safety devices to ensure reliable machine operation and minimize errors.',
    keyPills: ['Industrial Fieldbus Network', 'Integrate Scanners & Printers', 'Sensors, Motors & Valves', 'Integrated Safety Devices'],
    stats: [
      { label: 'Architecture', val: 'Industrial Fieldbus Network Backbone' },
      { label: 'Integration', val: 'Scanners, Printers & HMIs to ERP' },
      { label: 'Motion Control', val: 'Sensors, Electric Motors & Valves' },
      { label: 'Safety Systems', val: 'Certified Machine Safety Devices' }
    ],
    blueprint: {
      controller: 'Industrial PLC CPU with Real-Time Fieldbus Master',
      connectivity: 'PROFINET, EtherNet/IP, Modbus TCP, Safety I/O',
      protocols: 'OPC UA Server, SCADA Gateway, Warehouse Control System',
      sensors: 'High-speed optical photo eyes, limit switches & encoders',
      roiMetric: 'Zero Conveyor Jam Errors & Millisecond Real-Time Sortation'
    }
  },

  // --- 8. KIOSK SYSTEMS (atplgroup.com/kiosk-system/) ---
  {
    id: 'hw-kiosk-modular',
    num: '22',
    category: 'kiosk',
    categoryName: 'Kiosk Systems',
    oem: 'ATPL Kiosk',
    title: 'ATPL Modular Smart Kiosk System',
    subtitle: 'Built with Touch Computer, Diverse Stands & Peripherals',
    accentColor: '#f97316',
    badgeText: 'Smart Modular Kiosk',
    headlineWord: 'SMART KIOSK',
    tagline: 'Brings Automation in an Easier Way & Improves Daily User Workflows',
    image: 'https://atplgroup.com/wp-content/uploads/2024/02/agilysys-kiosk-300x253.jpg',
    fallbackImage: '/assets/images/hw_fixed_conveyor.jpg',
    desc: 'Smart kiosk system built with industrial touch computers, diverse components, and various types of stands to meet every unique need. Brings automation in an easier way, boosts operational efficiency, and improves daily user workflows with customized models tailored to the data collected and apps run.',
    keyPills: ['Touch Computer Core', 'Diverse Stand Configurations', 'Operational Efficiency', 'Tailored Data & Apps'],
    stats: [
      { label: 'Touch Display', val: 'Integrated Industrial Touch Computer' },
      { label: 'Mounting Styles', val: 'Floor Pedestal, Desktop & Wall Stands' },
      { label: 'Peripherals', val: '2D Scanners, RFID Badges, Printers' },
      { label: 'Workflows', val: 'Visitor, Driver Gate & Shop Job-Cards' }
    ],
    blueprint: {
      controller: 'Embedded Industrial PC with Multi-Peripheral Controller',
      connectivity: 'Internal Gigabit LAN Switch, Wi-Fi 6, 4G LTE Option',
      protocols: 'Web Kiosk Lockdown, ERP REST API, Active Directory',
      sensors: 'Presence detection optical sensor and door tamper switch',
      roiMetric: 'Cuts Driver Gate & Check-in Processing Time by Over 75%'
    }
  },

  // --- 9. VOICE TECHNOLOGY (atplgroup.com/voice-devices-headsets-solutions/) ---
  {
    id: 'hw-voice-headset',
    num: '23',
    category: 'voice',
    categoryName: 'Voice Technology',
    oem: 'ATPL Voice',
    title: 'ATPL Voice Devices & Headset Solutions',
    subtitle: 'Hands-Free & Eyes-Free Multilingual Directed Workflows',
    accentColor: '#ec4899',
    badgeText: 'Hands-Free Eyes-Free',
    headlineWord: 'VOICE TECH',
    tagline: 'Move Workers Safely & Efficiently with Voice-Guided Workflows',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/cc-1.png',
    fallbackImage: '/assets/images/hardware/atpl_scanner_ring_h5.jpg',
    desc: 'Optimizes workflow and accuracy in demanding distribution center and warehouse operations with Voice technology. Directs associates working both hands-free and eyes-free through mobile workflows to minimize steps and maximize efficiency. Voice devices, headsets, accessories, and software enable workers to speak in their native languages to pick and pack safely and accurately.',
    keyPills: ['Hands-Free & Eyes-Free', 'Native Language Support', 'Distribution Center Accuracy', 'Voice-Guided Workflows'],
    stats: [
      { label: 'Workflow Style', val: 'Hands-Free & Eyes-Free Directed Pick' },
      { label: 'Language Support', val: 'Workers Speak in Their Native Languages' },
      { label: 'Noise Cancellation', val: 'Industrial Ambient Noise Suppression' },
      { label: 'Hardware Ecosystem', val: 'Voice Devices, Headsets & Software' }
    ],
    blueprint: {
      controller: 'Dedicated Speech Recognition Neural Audio Processor',
      connectivity: 'Ultra-Reliable Bluetooth BLE + Instant NFC Pairing',
      protocols: 'Vocollect Voice, Android Voice API, SAP EWM Direct Link',
      sensors: 'Directional noise-canceling dual-microphone array',
      roiMetric: 'Eliminates Mis-Picks and Boosts Warehouse Pick Speed by 35%'
    }
  },
  {
    id: 'hw-voice-wearable-ring',
    num: '24',
    category: 'voice',
    categoryName: 'Voice Technology',
    oem: 'ATPL Solutions',
    title: 'ATPL Hands-Free Wearable Ring Scanner',
    subtitle: 'Compact Ergonomic Scanner Supporting High-Frequency Workflows',
    accentColor: '#d946ef',
    badgeText: 'Zero Wasted Motion',
    headlineWord: 'RING SCAN',
    tagline: 'Compact, High-Performance Wearable Scanner for Manpower Efficiency',
    image: '/assets/images/hardware/atpl_scanner_ring_h5.jpg',
    fallbackImage: '/assets/images/hardware/atpl_voice_headset.png',
    desc: 'Compact, high-performance, hands-free wearable scanner designed to boost business improvement and manpower efficiency. Completely eliminates wasted motion associated with scanners in hand, delivering ergonomic scanning that supports high-frequency workflows in dispatch, warehouse picking, and sortation.',
    keyPills: ['Hands-Free Wearable', 'Eliminates Wasted Motion', 'High-Frequency Workflows', 'Manpower Efficiency'],
    stats: [
      { label: 'Ergonomics', val: 'Compact, Lightweight Finger Ring Mount' },
      { label: 'Operation', val: 'Dual-Side Ambidextrous Trigger' },
      { label: 'Battery Life', val: 'Continuous Shift-Long Run Time' },
      { label: 'Pairing', val: 'Bluetooth Instant Tap to Wearable Terminal' }
    ],
    blueprint: {
      controller: 'Miniaturized 1D/2D High-Speed Scan Engine',
      connectivity: 'Bluetooth Low Energy 5.0 with 30m Roaming Radius',
      protocols: 'SPP, HID, Direct Mobile Computer Data Wedge',
      sensors: 'Haptic vibration feedback, LED indicator, audible beeper',
      roiMetric: 'Saves 4+ Seconds on Every Single Warehouse Pick Action'
    }
  },
  // --- Additional Verified Products from atplgroup.com ---
  {
    id: 'hw-rfid-onmetal-tags',
    num: '16B',
    category: 'rfid',
    categoryName: 'RFID Solutions',
    oem: 'ATPL RFID',
    title: 'ATPL On-Metal & High-Temp RFID Tags',
    subtitle: 'Ceramic & Polyimide Extreme Temperature UHF Inlays',
    accentColor: '#f59e0b',
    badgeText: '300°C Heat Proof',
    headlineWord: 'ON-METAL TAGS',
    tagline: 'Withstands Paint Ovens, Harsh Chemicals, Immersion & Extreme Shock',
    image: 'https://atplgroup.com/wp-content/uploads/2024/03/rfid-reader.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/antena.jpg',
    desc: 'Engineered for extreme asset tracking where standard RFID tags fail. Ceramic and polyimide encapsulation withstands temperatures up to 300°C in automotive paint curing ovens, immersion in harsh chemicals, acid baths, and severe vibration.',
    keyPills: ['300°C Heat Proof', 'Automotive Paint Ovens', 'Acid & Chemical Proof', 'Zero RF Detuning on Metal'],
    stats: [
      { label: 'Thermal Resistance', val: '-40°C to +300°C Peak' },
      { label: 'Substrate Affinity', val: 'Direct Mount on Steel & Aluminum' },
      { label: 'Encapsulation', val: 'IP68 Rugged Ceramic & PEEK' },
      { label: 'Read Distance', val: 'Up to 8m on Metal Surfaces' }
    ],
    blueprint: {
      controller: 'Alien Higgs-9 / NXP UCODE 8 High-Sensitivity IC',
      connectivity: 'Dual-Dipole On-Metal Ground Plane Antenna',
      protocols: 'EPCglobal Class 1 Gen 2 / ISO 18000-6C',
      sensors: 'Anti-tamper circuit with mechanical rivet holes',
      roiMetric: '100% Asset Visibility Through Severe Chemical & Heat Processing'
    }
  },
  {
    id: 'hw-marking-co2',
    num: '19B',
    category: 'marking',
    categoryName: 'Direct Marking Solutions',
    oem: 'ATPL Marking',
    title: 'CO2 Laser High-Speed Marking Machine',
    subtitle: 'High-Duty Cycle Marking for Plastics, PET & Packaging',
    accentColor: '#ec4899',
    badgeText: 'Fly-Marking (FMA)',
    headlineWord: 'CO2 LASER',
    tagline: 'High-Speed Non-Metallic Marking for PET Bottles, Glass, Films & Foils',
    image: '/assets/images/hardware/atpl_marking_laser.png',
    fallbackImage: '/assets/images/hardware/atpl_marking_tmp1000.png',
    desc: 'Suitable for non-metallic materials, especially plastics, PET bottles, glass, acrylic, ceramics, foils, films, and leather. Perfect for Fly-Marking Applications (FMA) on fast conveyor lines as well as stationary workstations in food, pharma, and consumer packaging.',
    keyPills: ['Fly-Marking on Conveyors', 'PET Bottles & Glass', 'Zero Consumables', 'High-Duty Continuous'],
    stats: [
      { label: 'Marking Speeds', val: 'Up to 12,000 mm / Second' },
      { label: 'Laser Tube', val: 'Sealed RF Metal Tube Air Cooled' },
      { label: 'Applications', val: 'Food, Pharma, PVC Pipes, Packaging' },
      { label: 'Line Synchronization', val: 'Quadrature Encoder Tracking' }
    ],
    blueprint: {
      controller: 'High-Speed Vector DSP Controller with Fly-Marking Engine',
      connectivity: 'Encoder Input, Opto Trigger, Ethernet, RS-232',
      protocols: 'GS1 2D DataMatrix, Expiry Codes, Batch Numbering',
      sensors: 'Laser power monitoring sensor with auto-calibration',
      roiMetric: 'Eliminates Ink-Jet Clogging & Cuts Marking Cost to Near Zero'
    }
  },
  {
    id: 'hw-touch-fanless-pc',
    num: '20B',
    category: 'touch',
    categoryName: 'Industrial Touch Systems',
    oem: 'ATPL Touch',
    title: 'ATPL Fanless Panel PC 15.6"',
    subtitle: 'Stainless Steel Bezel with Wide Operating Temperature',
    accentColor: '#38bdf8',
    badgeText: 'IP65 Front Bezel',
    headlineWord: 'PANEL PC',
    tagline: 'Heavy Industrial Panel-Mount Workstation with Fanless Thermal Cooling',
    image: '/assets/images/hardware/atpl_touch_computer.jpg',
    fallbackImage: '/assets/images/hw_electronics_qc.jpg',
    desc: 'Heavy-duty industrial touch computer built for machine-side panel mounting in harsh factories. Features fanless passive cooling, wide operating temperature (-20°C to 60°C), and rugged IP65 water/dust front bezel with capacitive 10-point multi-touch.',
    keyPills: ['IP65 Water/Dust Proof', 'Fanless Passive Cooling', '-20°C to 60°C Wide Temp', '10-Point Multi-Touch'],
    stats: [
      { label: 'Display Panel', val: '15.6" Full HD 1000-Nit Sunlight' },
      { label: 'Cooling Design', val: '100% Fanless Sealed Aluminum Heatsink' },
      { label: 'Processor', val: 'Intel Quad-Core Industrial SoC' },
      { label: 'Operating Temp', val: '-20°C to +60°C Continuous' }
    ],
    blueprint: {
      controller: 'Embedded Intel Industrial Core with Watchdog Timer',
      connectivity: 'Dual Gigabit Intel LAN, 4x USB 3.0, 2x Isolated COM RS-485',
      protocols: 'Windows 11 IoT Enterprise, Ubuntu Server, OPC-UA',
      sensors: 'Optical ambient light dimmer and thermal junction sensors',
      roiMetric: 'Zero Unscheduled Machine-Side Workstation Downtime'
    }
  },
  {
    id: 'hw-touch-pos-terminal',
    num: '20C',
    category: 'touch',
    categoryName: 'Industrial Touch Systems',
    oem: 'ATPL Touch',
    title: 'ATPL Heavy-Duty POS Touch Terminal',
    subtitle: 'Intelligent High-Throughput Touch Machine for Dispatch Bays',
    accentColor: '#00f0ff',
    badgeText: 'Heavy-Duty POS',
    headlineWord: 'TOUCH POS',
    tagline: 'Integrated MSR, Barcode Reader & Ultra-Stable Cast Aluminum Base',
    image: '/assets/images/hardware/atpl_touch_computer.jpg',
    fallbackImage: '/assets/images/hw_electronics_qc.jpg',
    desc: 'Intelligent POS touch system designed for high-transaction retail, hospitality, and warehouse dispatch counters. Features a cast aluminum base to prevent wobbling during aggressive screen tapping, cable concealment, and support for dual displays.',
    keyPills: ['Ultra-Stable Metal Base', 'Cable Management Bay', 'Dual Display Support', 'High-Transaction Rates'],
    stats: [
      { label: 'Touch Screen', val: '15.0" True-Flat PCAP Anti-Glare' },
      { label: 'Secondary Screen', val: 'Optional 10.1" Customer Facing Display' },
      { label: 'Base Construction', val: 'Die-Cast Aluminum Weighted Stand' },
      { label: 'I/O Ports', val: 'Powered USB, RJ-11 Cash Drawer, Ethernet' }
    ],
    blueprint: {
      controller: 'Fanless High-Speed Architecture with Solid-State NVMe',
      connectivity: 'Gigabit Ethernet, 6x USB, 3x Powered Serial COM Ports',
      protocols: 'OPOS / JPOS Drivers, POS for .NET, SAP Retail Driver',
      sensors: 'Magnetic stripe reader & integrated biometric fingerprint sensor',
      roiMetric: 'Speeds Up Storefront & Dispatch Processing by 35%'
    }
  },
  {
    id: 'hw-touch-stainless-console',
    num: '20D',
    category: 'touch',
    categoryName: 'Industrial Touch Systems',
    oem: 'ATPL Touch',
    title: 'IP66 Full Stainless Steel Touch Terminal',
    subtitle: 'Corrosion-Resistant Washdown Computer for Food & Pharma',
    accentColor: '#10b981',
    badgeText: 'IP66 Full Washdown',
    headlineWord: 'WASH DOWN',
    tagline: 'SUS304 Stainless Steel Housing Resisting High-Pressure Chemical Washdowns',
    image: '/assets/images/hardware/atpl_touch_computer.jpg',
    fallbackImage: '/assets/images/hw_electronics_qc.jpg',
    desc: 'Full IP66 sealed stainless steel touch computer engineered for washdown environments in food processing, dairy, meat packaging, and pharmaceutical cleanrooms. Resists caustic cleaning agents, steam, and high-pressure water jets.',
    keyPills: ['SUS304 Stainless Steel', 'IP66 Sealed Connectors', 'Food & Pharma Approved', 'Resists Caustic Cleaners'],
    stats: [
      { label: 'Housing Material', val: 'SUS304 / SUS316 Stainless Steel' },
      { label: 'Ingress Sealing', val: 'Full IP66 / IP69K Water Jet Washdown' },
      { label: 'Connectors', val: 'M12 Waterproof Screw-Lock Connectors' },
      { label: 'Touch Operation', val: 'Supports Thick Rubber Cleaning Gloves' }
    ],
    blueprint: {
      controller: 'Hermetically Sealed Fanless Motherboard with Heat Pipe',
      connectivity: 'M12 Industrial Ethernet, M12 Waterproof USB, M12 DC Power',
      protocols: 'Cleanroom GMP Compliance, HACCP Food Safety Standards',
      sensors: 'Condensation-resistant optical bonding eliminates fogging',
      roiMetric: '100% Elimination of Water-Ingress Failures During Daily Washdown'
    }
  },
  {
    id: 'hw-plc-robotic-cell',
    num: '21B',
    category: 'plc',
    categoryName: 'PLC Automation',
    oem: 'ATPL Automation',
    title: 'ATPL Robotic Assembly & Sorting Cell',
    subtitle: 'SCARA & 6-Axis Robotic Integration with Machine Vision',
    accentColor: '#10b981',
    badgeText: '0.02 mm Precision',
    headlineWord: 'ROBOTICS',
    tagline: 'High-Speed Pick-and-Place Robotic Arm with Real-Time Conveyor Tracking',
    image: '/assets/images/hardware/atpl_plc_automation.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/h6.jpg',
    desc: 'High-speed robotic cell integrating SCARA and 6-axis articulated robots with conveyor belts and industrial machine vision. Automatically identifies product orientation, picks parts on the move, and places them into packaging with 0.02mm repeatability.',
    keyPills: ['0.02 mm Repeatability', 'Conveyor Tracking Encoder', 'Machine Vision Guided', 'Pick-and-Place at 120 PPM'],
    stats: [
      { label: 'Repeatability', val: '±0.02 mm Positional Accuracy' },
      { label: 'Payload Range', val: '3 kg to 20 kg Industrial Payload' },
      { label: 'Cycle Time', val: '0.35 Seconds Standard Pick Cycle' },
      { label: 'Fieldbus Support', val: 'PROFINET, EtherCAT, CC-Link IE' }
    ],
    blueprint: {
      controller: 'Multi-Axis Motion Controller with Kinematic Interpolation',
      connectivity: 'EtherCAT High-Speed Bus, Safety Over EtherCAT (FSoE)',
      protocols: 'PackML Packaging Standards, OPC-UA Factory Cloud Sync',
      sensors: 'High-resolution rotary encoders on all servo axes',
      roiMetric: 'Replaces 4 Manual Stations & Boosts Sorting Throughput by 300%'
    }
  },
  {
    id: 'hw-plc-scada-gateway',
    num: '21C',
    category: 'plc',
    categoryName: 'PLC Automation',
    oem: 'ATPL Automation',
    title: 'ATPL Industrial SCADA & IIoT Gateway',
    subtitle: 'Fieldbus Translation Hub for SAP & Cloud Manufacturing',
    accentColor: '#00f0ff',
    badgeText: 'OPC-UA / MQTT Hub',
    headlineWord: 'SCADA HUB',
    tagline: 'Bridges Floor Sensors, Barcode Scanners & PLCs Directly to ERP',
    image: '/assets/images/hardware/atpl_plc_automation.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/h6.jpg',
    desc: 'Fieldbus translation gateway that interprets information from shop floor sensors, barcode scanners, and PLCs to execute automated routing. Connects Modbus, PROFINET, and EtherNet/IP networks to cloud dashboards and SAP MES systems.',
    keyPills: ['Bridges PLCs to SAP MES', 'Dual Isolated LAN Ports', 'OPC-UA & MQTT Hub', 'DIN-Rail Industrial Mount'],
    stats: [
      { label: 'Protocol Translation', val: 'Modbus, PROFINET, EtherNet/IP to OPC-UA' },
      { label: 'Isolation', val: '2.5 kV Galvanic Isolation on Field Ports' },
      { label: 'Security', val: 'Hardware TPM 2.0 Cryptographic Chip' },
      { label: 'Mounting', val: 'Standard TS-35 DIN-Rail Mount' }
    ],
    blueprint: {
      controller: 'Dual-Core Industrial Communication Processor',
      connectivity: 'Dual Gigabit LAN, 2x RS-485 Isolated, USB Console',
      protocols: 'MQTT Sparkplug B, OPC UA Server, Modbus TCP Gateway',
      sensors: 'Internal voltage monitoring and temperature alarms',
      roiMetric: 'Real-Time OEE & Machine Telemetry Streamed with Zero PLC Code'
    }
  },
  {
    id: 'hw-plc-safety-curtain',
    num: '21D',
    category: 'plc',
    categoryName: 'PLC Automation',
    oem: 'ATPL Automation',
    title: 'Industrial Safety Light Curtains & Relays',
    subtitle: 'SIL3 / PLe Certified Hazardous Zone Personnel Protection',
    accentColor: '#f43f5e',
    badgeText: 'SIL3 / PLe Certified',
    headlineWord: 'MACHINE SAFETY',
    tagline: 'Failsafe Optical Intrusion Detection Halting Dangerous Machinery in Milliseconds',
    image: '/assets/images/hardware/atpl_plc_automation.jpg',
    fallbackImage: 'https://atplgroup.com/wp-content/uploads/2024/03/h6.jpg',
    desc: 'Integrated machine safety systems outfitted with Type 4, SIL3 / PLe certified safety light curtains and emergency stop relays. Instantly halts moving robotic arms, presses, and conveyor belts when workers break the optical beam field.',
    keyPills: ['Type 4 SIL3 / PLe Rated', 'Finger & Hand Resolution', '14ms Rapid E-Stop Trip', 'Severe Environment IP67'],
    stats: [
      { label: 'Safety Category', val: 'Type 4, SIL3, PLe, Cat 4 Certified' },
      { label: 'Response Time', val: 'Less than 14 Milliseconds Trip Time' },
      { label: 'Resolution', val: '14mm (Finger) & 30mm (Hand) Detection' },
      { label: 'Protective Height', val: '160mm to 2000mm Optical Field' }
    ],
    blueprint: {
      controller: 'Dual Microprocessor Redundant Safety Controller',
      connectivity: 'OSSD Failsafe Transistor Outputs, M12 8-Pin Cables',
      protocols: 'ISO 13849-1, IEC 61508, IEC 62061 Functional Safety',
      sensors: 'Infrared transmitter-receiver array with alignment indicators',
      roiMetric: 'Guarantees 100% Zero Operator Injury Risk on Heavy Machinery'
    }
  },
  {
    id: 'hw-kiosk-gate-pass',
    num: '22B',
    category: 'kiosk',
    categoryName: 'Kiosk Systems',
    oem: 'ATPL Kiosk',
    title: 'Dispatch Gate Pass & Weighbridge Kiosk',
    subtitle: 'Self-Service Truck Inbound & Outbound Automation Terminal',
    accentColor: '#fbbf24',
    badgeText: 'Sunlight Outdoor Touch',
    headlineWord: 'GATE KIOSK',
    tagline: 'Automates Driver Identification, Weighbridge Tare & Gate Pass Printing',
    image: '/assets/images/hardware/atpl_kiosk_system.jpg',
    fallbackImage: '/assets/images/hw_fixed_conveyor.jpg',
    desc: 'Outdoor sunlight-readable self-service kiosk designed for logistics gate passes, weighbridges, and material dispatch yards. Features an integrated thermal ticket printer, barcode reader, CCTV intercom, and driver signature capture pad.',
    keyPills: ['Outdoor Sunlight Readable', 'Thermal Ticket Printer', 'Intercom & Driver Camera', 'Weighbridge Serial Link'],
    stats: [
      { label: 'Display Panel', val: '21.5" Sunlight Readable 1500-Nit Glass' },
      { label: 'Printer Module', val: 'Heavy-Duty 80mm Guillotine Ticket Cutter' },
      { label: 'Enclosure Rating', val: 'IP65 Weatherproof Steel with Internal Heater' },
      { label: 'Driver Interface', val: 'RFID Reader, 2D Barcode Scanner, Intercom' }
    ],
    blueprint: {
      controller: 'Wide-Temperature Industrial Embedded Box PC',
      connectivity: 'Fiber Optic LAN, 4G LTE Backup, PoE+ CCTV Camera',
      protocols: 'SAP Yard Logistics Integration, Cloud Gate Pass API',
      sensors: 'Driver presence proximity radar & door tamper switches',
      roiMetric: 'Eliminates Truck Queues and Cuts Gate Turnaround Time by 70%'
    }
  },
  {
    id: 'hw-kiosk-job-card',
    num: '22C',
    category: 'kiosk',
    categoryName: 'Kiosk Systems',
    oem: 'ATPL Kiosk',
    title: 'Shopfloor Job-Card & Confirmation Station',
    subtitle: 'Operator Workstation with Biometric Login & Rugged Keypad',
    accentColor: '#38bdf8',
    badgeText: 'Biometric Login',
    headlineWord: 'JOB CONFIRM',
    tagline: 'Real-Time Job-Card Booking, Downtime Logging & Drawing Viewer',
    image: '/assets/images/hardware/atpl_kiosk_system.jpg',
    fallbackImage: '/assets/images/hw_fixed_conveyor.jpg',
    desc: 'Pedestal-mounted shopfloor kiosk designed for operator job confirmations, work order logging, and digital CAD drawing viewing. Equipped with an optical fingerprint scanner for biometric operator sign-on and a rugged vandal-proof stainless steel trackball.',
    keyPills: ['Biometric Operator Sign-on', 'Digital CAD Drawing Viewer', 'Vandal-Proof Enclosure', 'Real-Time ERP Booking'],
    stats: [
      { label: 'Display', val: '19.0" Rugged Heavy Industrial Multi-Touch' },
      { label: 'Biometrics', val: 'FIPS-Certified Optical Fingerprint Scanner' },
      { label: 'Input Controls', val: 'Stainless Steel Vandal-Proof Keypad & Ball' },
      { label: 'Enclosure', val: 'Powder-Coated Electro-Galvanized Steel' }
    ],
    blueprint: {
      controller: 'Industrial Motherboard with Intel Core i5 Platform',
      connectivity: 'Gigabit LAN, Wi-Fi 6, Dual USB Access Port',
      protocols: 'MES Work Center Terminal, SAP GUI Native, Active Directory',
      sensors: 'Badge tap RFID reader (HID, Mifare, UHF proximity)',
      roiMetric: '100% Paperless Shopfloor Job Booking & Instant OEE Feedback'
    }
  },
  {
    id: 'hw-kiosk-ptl-station',
    num: '22D',
    category: 'kiosk',
    categoryName: 'Kiosk Systems',
    oem: 'ATPL Kiosk',
    title: 'Warehouse Pick-to-Light Confirmation Station',
    subtitle: 'Order Consolidation & Verification Hub for High-Speed E-Commerce',
    accentColor: '#00f0ff',
    badgeText: 'Pick-to-Light Sync',
    headlineWord: 'PTL CONSOLE',
    tagline: 'Synchronizes Bin Lights, Scale Verification & Automatic Label Printing',
    image: '/assets/images/hardware/atpl_kiosk_system.jpg',
    fallbackImage: '/assets/images/hw_fixed_conveyor.jpg',
    desc: 'Compact packing-bench kiosk that synchronizes Pick-to-Light bin displays, inline digital weight scales, and automated shipping label printers. Verifies that every single item packed matches the order manifest before releasing the carton.',
    keyPills: ['Pick-to-Light Controller', 'Inline Scale Integration', 'Auto-Print Shipping Labels', 'Zero Mis-Shipment Guarantee'],
    stats: [
      { label: 'PTL Bus Control', val: 'Controls up to 256 Pick-to-Light Bin Displays' },
      { label: 'Scale Resolution', val: '0.1g Inline Weight Verification' },
      { label: 'Barcode Verification', val: 'Handsfree Presentation Scanner' },
      { label: 'Form Factor', val: 'Ergonomic Packing Bench Clamp Mount' }
    ],
    blueprint: {
      controller: 'Embedded IoT Controller with Dedicated PTL Bus Interface',
      connectivity: 'Ethernet, RS-485 PTL Loop, USB Scale Port, Printer Link',
      protocols: 'WMS Pick Director, RESTful JSON WebSockets, MQTT',
      sensors: 'Photoelectric carton presence sensor on pack conveyor',
      roiMetric: 'Achieves 99.99% Order Packing Accuracy at 300 Orders/Hour'
    }
  },
  {
    id: 'hw-voice-terminal-rugged',
    num: '23B',
    category: 'voice',
    categoryName: 'Voice Technology',
    oem: 'ATPL Voice',
    title: 'ATPL Multilingual Voice Picking Terminal',
    subtitle: 'Dedicated Belt-Mounted Voice Computer with 14-Hour Shift Battery',
    accentColor: '#ec4899',
    badgeText: '14-Hr Continuous Voice',
    headlineWord: 'VOICE COMPUTER',
    tagline: 'Continuous Real-Time Speech Recognition in 40+ Regional Languages',
    image: '/assets/images/hardware/atpl_voice_headset.png',
    fallbackImage: '/assets/images/hardware/atpl_scanner_ring_h5.jpg',
    desc: 'Dedicated belt-mounted voice terminal engineered specifically for warehouse speech recognition workflows. Enables frontline workers to speak in their native languages to pick, sort, and inspect inventory with zero keyboard interaction, backed by a 14-hour continuous battery.',
    keyPills: ['40+ Regional Languages', '14-Hour Continuous Battery', 'Belt or Harness Mount', 'Zero Keyboard Needed'],
    stats: [
      { label: 'Speech Recognition', val: 'High-Accuracy Speaker-Independent Engine' },
      { label: 'Language Options', val: 'English, Hindi, Tamil, Telugu & 40+ More' },
      { label: 'Battery Capacity', val: 'Full 14-Hour Continuous Multi-Shift Run' },
      { label: 'Drop Survival', val: '2.4m to Concrete & Cold-Store Certified' }
    ],
    blueprint: {
      controller: 'Low-Latency Neural Speech DSP with Hardware Noise Filter',
      connectivity: 'Fast-Roaming Industrial Wi-Fi 802.11ac, Bluetooth 5.0',
      protocols: 'SAP EWM Voice Interface, Manhattan WMS, Blue Yonder',
      sensors: '3-axis accelerometer detecting worker safety falls',
      roiMetric: 'Boosts Warehouse Order Picking Speed by 40% Over Paper or Handhelds'
    }
  },
  {
    id: 'hw-voice-arm-rig',
    num: '23C',
    category: 'voice',
    categoryName: 'Voice Technology',
    oem: 'ATPL Voice',
    title: 'Wearable Arm Mount & Ring Scanner Sled',
    subtitle: 'Ergonomic Forearm Rig Paired with Bluetooth Headset & Ring Imager',
    accentColor: '#d946ef',
    badgeText: 'Complete Handsfree',
    headlineWord: 'WEARABLE RIG',
    tagline: 'Handsfree Picking Sled with Swivel Screen & Finger-Ring Trigger',
    image: '/assets/images/hardware/atpl_scanner_ring_h5.jpg',
    fallbackImage: '/assets/images/hardware/atpl_voice_headset.png',
    desc: 'Complete wearable hardware kit combining a breathable forearm strap, rotating display mount, Bluetooth industrial headset, and finger-ring 2D imager. Provides workers with voice prompts in their ears, visual verification on their arm, and instant ring-scan confirmation.',
    keyPills: ['Forearm Breathable Strap', 'Finger Ring 2D Imager', 'Bluetooth Headset Linked', 'Total Hands-Free Picking'],
    stats: [
      { label: 'Wearable Weight', val: 'Ultralight 180g Balanced Forearm Rig' },
      { label: 'Rotation', val: '360° Swivel for Left or Right Hand' },
      { label: 'Barcode Scanner', val: 'Instant 2D Area Imager with Ring Trigger' },
      { label: 'Fabric Hygiene', val: 'Machine Washable Breathable Neoprene' }
    ],
    blueprint: {
      controller: 'Ergonomic Wearable Harness with Magnetic Snap Dock',
      connectivity: 'Dual Bluetooth Low Energy Links (Headset + Ring)',
      protocols: 'Android Wearable APIs, Direct WMS Voice/Scan Driver',
      sensors: 'Wrist movement sensor waking screen only when viewed',
      roiMetric: 'Eliminates 100% of Scanner Drops and Maximizes Worker Comfort'
    }
  }

];

// Flagship Products across all 9 official atplgroup.com hardware verticals
export const FLAGSHIP_HARDWARE_PRODUCTS = [
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-scanner-wired'),
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-printer-industrial'),
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-mobility-rugged'),
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-rfid-fixed'),
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-marking-fiber'),
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-touch-industrial'),
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-plc-automation'),
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-kiosk-modular'),
  HARDWARE_DECK_CARDS.find(p => p.id === 'hw-voice-headset')
].filter(Boolean);


// Official URL Mapping for Hardware Categories
export const OFFICIAL_CATEGORY_URLS = {
  scanners: 'https://atplgroup.com/barcode-scanner-solutions/',
  printers: 'https://atplgroup.com/barcode-printer-solutions/',
  mobility: 'https://atplgroup.com/mobility-tablet-solutions/',
  rfid: 'https://atplgroup.com/rfid-card-tags-antenna-and-readers/',
  marking: 'https://atplgroup.com/direct-marking-solutions/',
  touch: 'https://atplgroup.com/industrial-touch-system/',
  plc: 'https://atplgroup.com/plc-automation/',
  kiosk: 'https://atplgroup.com/kiosk-system/',
  voice: 'https://atplgroup.com/voice-devices-headsets-solutions/'
};
