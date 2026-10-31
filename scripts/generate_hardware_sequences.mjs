import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const TOTAL_FRAMES = 48;
const WIDTH = 1200;
const HEIGHT = 800;

const PRODUCTS = [
  {
    id: 'scanner',
    name: 'Granit XP 1991i Ultra-Rugged Imager',
    category: 'SCANNING SOLUTIONS',
    accentColor: '#00f0ff',
    secondaryGlow: '#0071ba',
    imagePath: 'public/assets/images/hardware/atpl_scanner_cutout.png',
    fallbackPath: 'public/assets/images/hw_handheld_scanner.jpg',
    specs: [
      { start: 0, end: 12, title: 'FLEX-RANGE DUAL OPTICS', desc: '0.1m near contact to 15m high-rack depth scanning.' },
      { start: 13, end: 24, title: 'HIGH-DENSITY DECODE DSP', desc: 'Instant read on scratched, curved, & low-contrast DPM barcodes.' },
      { start: 25, end: 36, title: 'IP67 RUGGED EXOSKELETON', desc: 'Survives 3.0m drops to concrete & 7,000 tumbles at -30°C.' },
      { start: 37, end: 47, title: 'INDUSTRIAL BLUETOOTH CLASS 1', desc: '100m line-of-sight wireless range with instant auto-docking.' }
    ]
  },
  {
    id: 'printer',
    name: 'ATPL High-Speed RFID Industrial Printer',
    category: 'PRINTING SOLUTIONS',
    accentColor: '#10b981',
    secondaryGlow: '#059669',
    imagePath: 'public/assets/images/hardware/atpl_printer_industrial.png',
    specs: [
      { start: 0, end: 12, title: '14 IPS PRECISION PRINTHEAD', desc: 'Continuous 24/7 thermal transfer printing with zero downtime.' },
      { start: 13, end: 24, title: 'INLINE BARCODE VERIFIER', desc: '100% real-time ISO/IEC grading of every printed label.' },
      { start: 25, end: 36, title: 'UHF RFID ON-METAL ENCODER', desc: 'Encodes EPC Gen 2 tags on standard paper & high-temp metal tags.' },
      { start: 37, end: 47, title: 'DUAL CORE SYSTEM ENGINE', desc: 'Direct SAP BAPI and Oracle WMS label streaming via Gigabit Ethernet.' }
    ]
  },
  {
    id: 'tablet',
    name: 'Mobility Edge Cold Storage Tablet',
    category: 'MOBILITY SOLUTIONS',
    accentColor: '#38bdf8',
    secondaryGlow: '#0284c7',
    imagePath: 'public/assets/images/hardware/atpl_mobility_tablet.png',
    specs: [
      { start: 0, end: 12, title: '1000-NIT SUNLIGHT SCREEN', desc: 'Corning Gorilla Glass 5 responsive with thick industrial work gloves.' },
      { start: 13, end: 24, title: '-30°C HEATED FREEZER PACK', desc: 'Internal thermal regulation prevents screen freeze in cold storage.' },
      { start: 25, end: 36, title: 'INTEGRATED 2D IMAGER', desc: 'High-speed long-range barcode reading integrated into top edge.' },
      { start: 37, end: 47, title: 'MIL-STD-810H EXOSKELETON', desc: 'Drop-proof corner cushions with 10-hour hot-swappable battery.' }
    ]
  },
  {
    id: 'laser',
    name: 'Telesis DPM Fiber Laser Marking System',
    category: 'DIRECT PART MARKING',
    accentColor: '#E85874',
    secondaryGlow: '#be123c',
    imagePath: 'public/assets/images/hardware/atpl_marking_laser.png',
    specs: [
      { start: 0, end: 12, title: '20W MOPA PULSED FIBER LASER', desc: 'Permanent high-contrast mark on hardened steel, titanium, & alloys.' },
      { start: 13, end: 24, title: '0.01MM GALVO SCANNING HEAD', desc: 'Microscopic 2D DataMatrix codes compliant with aerospace AS9132.' },
      { start: 25, end: 36, title: 'CLOSED-LOOP AIR COOLING', desc: 'Zero consumable downtime with 100,000+ hour MTBF laser diode.' },
      { start: 37, end: 47, title: 'PROFINET & PLC AUTOMATION', desc: 'Seamless trigger integration into robotic assembly & conveyor lines.' }
    ]
  }
];

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

async function generateSequenceForProduct(prod) {
  const outDir = path.join('public', 'assets', 'images', 'sequences', prod.id);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log(`\nRendering 3D Image Sequence for: ${prod.name} (${TOTAL_FRAMES} frames)...`);

  // Load base device image and prepare resized version
  let deviceBuffer;
  try {
    deviceBuffer = await sharp(prod.imagePath)
      .resize({ width: 750, height: 500, fit: 'inside' })
      .png()
      .toBuffer();
  } catch (err) {
    console.warn(`Could not load primary image ${prod.imagePath}, trying fallback...`, err.message);
    deviceBuffer = await sharp(prod.fallbackPath)
      .resize({ width: 750, height: 500, fit: 'inside' })
      .png()
      .toBuffer();
  }

  const deviceMeta = await sharp(deviceBuffer).metadata();
  const baseDeviceWidth = deviceMeta.width;
  const baseDeviceHeight = deviceMeta.height;

  for (let f = 0; f < TOTAL_FRAMES; f++) {
    const progress = f / (TOTAL_FRAMES - 1);
    const angleRad = progress * Math.PI * 2;
    const angleDeg = (progress * 360).toFixed(1);

    // 3D perspective transforms
    const cosAngle = Math.cos(angleRad);
    const sinAngle = Math.sin(angleRad);
    const isBackSide = cosAngle < 0;

    // Projected horizontal width (simulate 3D cylinder/turntable rotation)
    const scaleFactor = Math.max(0.12, Math.abs(cosAngle));
    const targetWidth = Math.max(40, Math.round(baseDeviceWidth * scaleFactor));
    const targetHeight = Math.round(baseDeviceHeight * (1 - Math.abs(sinAngle) * 0.06));

    // Vertical pitch / bounce
    const verticalShift = Math.round(sinAngle * 12);

    // Dynamic Device Transform (resize + flip if backside)
    let transformedDevice = sharp(deviceBuffer).resize(targetWidth, targetHeight, { fit: 'fill' });
    if (isBackSide) {
      transformedDevice = transformedDevice.flop();
    }
    const transformedBuffer = await transformedDevice.toBuffer();

    // Specular highlight line position across the device
    const sheenPos = Math.round(WIDTH * (0.3 + 0.4 * progress));

    // Determine active spec for this frame
    const activeSpec = prod.specs.find(s => f >= s.start && f <= s.end) || prod.specs[0];

    // Compute device placement coordinates
    const deviceLeft = Math.round((WIDTH - targetWidth) / 2 + sinAngle * 25);
    const deviceTop = Math.round((HEIGHT - targetHeight) / 2 - 25 + verticalShift);

    // Ground turntable parameters
    const cx = WIDTH / 2;
    const cy = HEIGHT * 0.76;
    const rx = 340;
    const ry = 75;

    // Generate HUD & backdrop SVG
    const svgOverlay = `
      <svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bgAmbient" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stop-color="${prod.accentColor}" stop-opacity="0.14" />
            <stop offset="50%" stop-color="${prod.secondaryGlow}" stop-opacity="0.05" />
            <stop offset="100%" stop-color="#030712" stop-opacity="0" />
          </radialGradient>

          <radialGradient id="turntableGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${prod.accentColor}" stop-opacity="0.32" />
            <stop offset="65%" stop-color="${prod.accentColor}" stop-opacity="0.08" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>

          <linearGradient id="sheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="rgba(255,255,255,0)" />
            <stop offset="50%" stop-color="rgba(255,255,255,0.45)" />
            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <!-- Obsidian Studio Background -->
        <rect width="${WIDTH}" height="${HEIGHT}" fill="#050b14" />
        <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgAmbient)" />

        <!-- Cybernetic Background Grid -->
        <g opacity="0.15">
          ${Array.from({ length: 9 }).map((_, i) => `<line x1="0" y1="${i * 100}" x2="${WIDTH}" y2="${i * 100}" stroke="#ffffff" stroke-width="0.5" stroke-dasharray="2 6" />`).join('')}
          ${Array.from({ length: 13 }).map((_, i) => `<line x1="${i * 100}" y1="0" x2="${i * 100}" y2="${HEIGHT}" stroke="#ffffff" stroke-width="0.5" stroke-dasharray="2 6" />`).join('')}
        </g>

        <!-- 3D Holographic Turntable Pedestal Base -->
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#turntableGlow)" />
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${prod.accentColor}" stroke-width="1.8" stroke-dasharray="8 6" opacity="0.75" />
        <ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.75}" ry="${ry * 0.75}" fill="none" stroke="rgba(255, 255, 255, 0.22)" stroke-width="1" />
        <ellipse cx="${cx}" cy="${cy}" rx="${rx * 0.45}" ry="${ry * 0.45}" fill="none" stroke="${prod.accentColor}" stroke-width="1" stroke-dasharray="4 4" opacity="0.5" />

        <!-- Turntable Axis Graduation Ticks Rotating with Angle -->
        ${Array.from({ length: 12 }).map((_, tIdx) => {
          const tickAngle = (tIdx / 12) * Math.PI * 2 + angleRad;
          const x1 = cx + Math.cos(tickAngle) * (rx * 0.92);
          const y1 = cy + Math.sin(tickAngle) * (ry * 0.92);
          const x2 = cx + Math.cos(tickAngle) * rx;
          const y2 = cy + Math.sin(tickAngle) * ry;
          return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${prod.accentColor}" stroke-width="1.5" opacity="0.6" />`;
        }).join('')}

        <!-- Soft Contact Drop Shadow directly beneath product -->
        <ellipse cx="${cx + sinAngle * 25}" cy="${cy - 12}" rx="${Math.max(60, targetWidth * 0.48)}" ry="${Math.max(16, targetHeight * 0.12)}" fill="#000000" opacity="0.65" filter="blur(8px)" />

        <!-- Product Specific Active Beam Effect -->
        ${prod.id === 'scanner' ? `
          <!-- Dynamic Scanner Targeting Laser Fan -->
          <polygon points="${deviceLeft + targetWidth * 0.3},${deviceTop + targetHeight * 0.25} ${cx - 180},${cy} ${cx + 180},${cy}" fill="rgba(255, 0, 85, 0.08)" />
          <line x1="${deviceLeft + targetWidth * 0.3}" y1="${deviceTop + targetHeight * 0.25}" x2="${cx + Math.sin(angleRad) * 80}" y2="${cy}" stroke="#ff0055" stroke-width="2" filter="url(#glow)" />
          <circle cx="${cx + Math.sin(angleRad) * 80}" cy="${cy}" r="4" fill="#ff0055" filter="url(#glow)" />
        ` : ''}

        ${prod.id === 'laser' ? `
          <!-- Pulsing Laser Beam -->
          <line x1="${deviceLeft + targetWidth * 0.5}" y1="${deviceTop + targetHeight * 0.3}" x2="${cx}" y2="${cy - 10}" stroke="#00f0ff" stroke-width="2.5" filter="url(#glow)" />
          <circle cx="${cx}" cy="${cy - 10}" r="5" fill="#ffffff" filter="url(#glow)" />
          <text x="${cx}" y="${cy + 18}" fill="#00f0ff" font-family="monospace" font-size="9" text-anchor="middle" font-weight="bold">LASER FOCUS // SPOT: 0.01mm</text>
        ` : ''}

        ${prod.id === 'printer' ? `
          <!-- Dynamic Print Feed Line -->
          <line x1="${deviceLeft + targetWidth * 0.2}" y1="${deviceTop + targetHeight * 0.6}" x2="${deviceLeft + targetWidth * 0.2}" y2="${cy}" stroke="#10b981" stroke-width="2" stroke-dasharray="4 2" />
          <text x="${deviceLeft + targetWidth * 0.2}" y="${cy + 18}" fill="#10b981" font-family="monospace" font-size="9" text-anchor="middle" font-weight="bold">FEED: 14 IPS</text>
        ` : ''}

        ${prod.id === 'tablet' ? `
          <!-- Ambient Display Glow -->
          <rect x="${deviceLeft + targetWidth * 0.15}" y="${deviceTop + targetHeight * 0.15}" width="${targetWidth * 0.7}" height="${targetHeight * 0.6}" rx="6" fill="${prod.accentColor}" opacity="0.08" />
        ` : ''}

        <!-- Specular Highlight Line Sweeping Across -->
        <line x1="${sheenPos - 60}" y1="${deviceTop}" x2="${sheenPos + 60}" y2="${deviceTop + targetHeight}" stroke="url(#sheen)" stroke-width="3" opacity="0.35" />

        <!-- TECHNICAL HUD OVERLAY -->
        <!-- Top Left: Branding & Model -->
        <g transform="translate(45, 45)">
          <rect x="-10" y="-14" width="280" height="68" rx="8" fill="rgba(8, 17, 34, 0.75)" stroke="rgba(255, 255, 255, 0.1)" />
          <circle cx="6" cy="4" r="3.5" fill="${prod.accentColor}" filter="url(#glow)" />
          <text x="18" y="8" fill="${prod.accentColor}" font-family="monospace" font-size="11" font-weight="bold" letter-spacing="1.5">ATPL HARDWARE TELEMETRY</text>
          <text x="0" y="30" fill="#ffffff" font-family="sans-serif" font-size="14" font-weight="bold">${escapeXml(prod.name)}</text>
          <text x="0" y="46" fill="#94a3b8" font-family="monospace" font-size="9.5" letter-spacing="0.5">[ ${escapeXml(prod.category)} • 24/7 FACTORY READY ]</text>
        </g>

        <!-- Top Right: Real-Time Scroll & Azimuth Readout -->
        <g transform="translate(${WIDTH - 240}, 45)">
          <rect x="-10" y="-14" width="200" height="68" rx="8" fill="rgba(8, 17, 34, 0.75)" stroke="rgba(255, 255, 255, 0.1)" />
          <text x="0" y="8" fill="${prod.accentColor}" font-family="monospace" font-size="11" font-weight="bold" letter-spacing="1">AZIMUTH: ${angleDeg}°</text>
          <text x="0" y="28" fill="#ffffff" font-family="monospace" font-size="12" font-weight="bold">FRAME ${String(f + 1).padStart(2, '0')} / ${TOTAL_FRAMES}</text>
          <text x="0" y="46" fill="#64748b" font-family="monospace" font-size="9.5">GSAP SCROLLTRIGGER • 60 FPS</text>
        </g>

        <!-- Bottom Center: Scrollytelling Spec Callout Box -->
        <g transform="translate(${cx}, ${HEIGHT - 65})">
          <rect x="-260" y="-32" width="520" height="58" rx="10" fill="rgba(6, 13, 26, 0.88)" stroke="${prod.accentColor}" stroke-width="1.2" />
          <text x="0" y="-10" fill="${prod.accentColor}" font-family="monospace" font-size="12" font-weight="bold" letter-spacing="1.5" text-anchor="middle">
            // SPEC STAGE 0${prod.specs.indexOf(activeSpec) + 1}: ${escapeXml(activeSpec.title)}
          </text>
          <text x="0" y="12" fill="#cbd5e1" font-family="sans-serif" font-size="11" text-anchor="middle">
            ${escapeXml(activeSpec.desc)}
          </text>
        </g>

        <!-- Corner Viewfinder Reticles -->
        <path d="M 25 35 L 25 25 L 35 25" stroke="${prod.accentColor}" stroke-width="1.5" fill="none" opacity="0.6" />
        <path d="M ${WIDTH - 25} 35 L ${WIDTH - 25} 25 L ${WIDTH - 35} 25" stroke="${prod.accentColor}" stroke-width="1.5" fill="none" opacity="0.6" />
        <path d="M 25 ${HEIGHT - 35} L 25 ${HEIGHT - 25} L 35 ${HEIGHT - 25}" stroke="${prod.accentColor}" stroke-width="1.5" fill="none" opacity="0.6" />
        <path d="M ${WIDTH - 25} ${HEIGHT - 35} L ${WIDTH - 25} ${HEIGHT - 25} L ${WIDTH - 35} ${HEIGHT - 25}" stroke="${prod.accentColor}" stroke-width="1.5" fill="none" opacity="0.6" />
      </svg>
    `;

    // Composite: Backdrop SVG + Transformed Device Image
    const frameFilename = `frame_${String(f + 1).padStart(4, '0')}.webp`;
    const framePath = path.join(outDir, frameFilename);

    await sharp(Buffer.from(svgOverlay))
      .composite([
        {
          input: transformedBuffer,
          top: Math.max(0, deviceTop),
          left: Math.max(0, deviceLeft)
        }
      ])
      .webp({ quality: 88, effort: 3 })
      .toFile(framePath);

    if ((f + 1) % 12 === 0 || f === TOTAL_FRAMES - 1) {
      console.log(`  ✓ Rendered ${f + 1}/${TOTAL_FRAMES} frames for ${prod.id}`);
    }
  }

  console.log(`✓ Completed 3D sequence for ${prod.id}!`);
}

async function run() {
  console.log('================================================================');
  console.log('Generating GSAP ScrollTrigger 3D Image Sequences for ATPL Hardware');
  console.log('================================================================');
  for (const prod of PRODUCTS) {
    await generateSequenceForProduct(prod);
  }
  console.log('\nAll hardware 3D image sequences generated successfully!');
}

run();
