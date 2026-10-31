import https from 'https';
import fs from 'fs';
import path from 'path';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

const hardwarePages = [
  'https://atplgroup.com/hardware/',
  'https://atplgroup.com/barcode-scanner-solutions/',
  'https://atplgroup.com/scanning-solutions/',
  'https://atplgroup.com/barcode-printer-solutions/',
  'https://atplgroup.com/mobility-tablet-solutions/',
  'https://atplgroup.com/rfid-card-tags-antenna-and-readers/',
  'https://atplgroup.com/direct-marking-solutions/',
  'https://atplgroup.com/industrial-touch-system/',
  'https://atplgroup.com/plc-automation/',
  'https://atplgroup.com/kiosk-system/',
  'https://atplgroup.com/voice-devices-headsets-solutions/',
  'https://atplgroup.com/computer-vision/'
];

async function scanHardwareImages() {
  const allImages = new Map();

  for (const pageUrl of hardwarePages) {
    try {
      console.log(`Scanning: ${pageUrl} ...`);
      const html = await fetchUrl(pageUrl);
      
      // Match all images in uploads
      const imgRegex = /https?:\/\/atplgroup\.com\/wp-content\/uploads\/[^"'\s<>]+\.(?:png|jpg|jpeg|webp)/gi;
      let match;
      while ((match = imgRegex.exec(html)) !== null) {
        const imgUrl = match[0];
        // Exclude generic icons/logos
        if (
          !imgUrl.includes('facebook') && 
          !imgUrl.includes('youtube') && 
          !imgUrl.includes('logo') && 
          !imgUrl.includes('cropped-') && 
          !imgUrl.includes('insta') && 
          !imgUrl.includes('footer') &&
          !imgUrl.includes('-150x150') &&
          !imgUrl.includes('-300x')
        ) {
          if (!allImages.has(imgUrl)) {
            allImages.set(imgUrl, pageUrl);
          }
        }
      }
    } catch (e) {
      console.error(`Error on ${pageUrl}:`, e.message);
    }
  }

  console.log(`\n=== Found ${allImages.size} Hardware Images on ATPL Group ===`);
  for (const [img, page] of allImages.entries()) {
    console.log(`${img} (from ${page.replace('https://atplgroup.com/', '')})`);
  }

  fs.writeFileSync('scripts/hardware_images_list.json', JSON.stringify([...allImages.entries()], null, 2));
}

scanHardwareImages().catch(console.error);
