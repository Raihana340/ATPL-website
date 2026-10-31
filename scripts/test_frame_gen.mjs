import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const testDir = 'public/assets/images/sequences/test';
if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

async function testFrame() {
  const width = 1000;
  const height = 660;

  const svgBackdrop = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGlow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.18" />
          <stop offset="60%" stop-color="#001428" stop-opacity="0.08" />
          <stop offset="100%" stop-color="#030712" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="pedestalGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.35" />
          <stop offset="70%" stop-color="#00f0ff" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      </defs>
      
      <rect width="${width}" height="${height}" fill="#050b14" />
      <rect width="${width}" height="${height}" fill="url(#bgGlow)" />

      <!-- 3D Turntable Holographic Base -->
      <ellipse cx="${width/2}" cy="${height * 0.76}" rx="280" ry="65" fill="url(#pedestalGlow)" />
      <ellipse cx="${width/2}" cy="${height * 0.76}" rx="270" ry="60" fill="none" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6" />
      <ellipse cx="${width/2}" cy="${height * 0.76}" rx="200" ry="42" fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1" />
      
      <!-- Studio Floor Grid Lines -->
      <line x1="${width/2 - 280}" y1="${height * 0.76}" x2="${width/2 + 280}" y2="${height * 0.76}" stroke="#00f0ff" stroke-width="1" opacity="0.4" />
      
      <!-- Telemetry Text -->
      <text x="35" y="45" fill="#00f0ff" font-family="monospace" font-size="12" font-weight="bold" letter-spacing="2">GSAP SCROLLTRIGGER IMAGE SEQUENCE // FRAME 001</text>
      <text x="35" y="65" fill="#64748b" font-family="monospace" font-size="10" letter-spacing="1">AUTHENTIC ATPL HARDWARE TURNTABLE • 360° INSPECTION</text>
    </svg>
  `;

  await sharp(Buffer.from(svgBackdrop))
    .webp({ quality: 90 })
    .toFile(path.join(testDir, 'frame_0001.webp'));

  console.log('✓ Successfully created test frame');
}

testFrame();
