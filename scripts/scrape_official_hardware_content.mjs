import https from 'https';
import fs from 'fs';

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

function cleanHtmlText(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

const hardwarePages = [
  { category: 'scanners', url: 'https://atplgroup.com/barcode-scanner-solutions/', title: 'Barcode Scanner Solutions' },
  { category: 'printers', url: 'https://atplgroup.com/barcode-printer-solutions/', title: 'Barcode Printer Solutions' },
  { category: 'mobility', url: 'https://atplgroup.com/mobility-tablet-solutions/', title: 'Mobility & Tablet Solutions' },
  { category: 'rfid', url: 'https://atplgroup.com/rfid-card-tags-antenna-and-readers/', title: 'RFID Solutions' },
  { category: 'marking', url: 'https://atplgroup.com/direct-marking-solutions/', title: 'Direct Marking Solutions' },
  { category: 'touch', url: 'https://atplgroup.com/industrial-touch-system/', title: 'Industrial Touch Systems' },
  { category: 'plc', url: 'https://atplgroup.com/plc-automation/', title: 'PLC Automation' },
  { category: 'kiosk', url: 'https://atplgroup.com/kiosk-system/', title: 'Kiosk Systems' },
  { category: 'voice', url: 'https://atplgroup.com/voice-devices-headsets-solutions/', title: 'Voice Devices & Headsets' }
];

async function extractContent() {
  const results = {};

  for (const page of hardwarePages) {
    console.log(`Extracting content from: ${page.url} ...`);
    try {
      const html = await fetchUrl(page.url);
      
      // Extract headings
      const headings = [];
      const headingRegex = /<h[1-4][^>]*>(.*?)<\/h[1-4]>/gis;
      let m;
      while ((m = headingRegex.exec(html)) !== null) {
        const text = cleanHtmlText(m[1]);
        if (text && text.length > 2 && !text.includes('Menu') && !text.includes('Search') && !text.includes('Quick Links')) {
          headings.push(text);
        }
      }

      // Extract paragraphs
      const paragraphs = [];
      const pRegex = /<p[^>]*>(.*?)<\/p>/gis;
      while ((m = pRegex.exec(html)) !== null) {
        const text = cleanHtmlText(m[1]);
        if (text && text.length > 20 && !text.includes('Copyright') && !text.includes('Cookie')) {
          paragraphs.push(text);
        }
      }

      // Extract list items / bullets
      const bullets = [];
      const liRegex = /<li[^>]*>(.*?)<\/li>/gis;
      while ((m = liRegex.exec(html)) !== null) {
        const text = cleanHtmlText(m[1]);
        if (text && text.length > 10 && text.length < 250 && !text.includes('Home') && !text.includes('About') && !text.includes('Contact')) {
          bullets.push(text);
        }
      }

      // Extract Elementor flipbox / card items
      const flipboxes = [];
      const boxRegex = /<(?:div|span|h[1-6])[^>]*class=["'][^"']*(?:flipbox|title|heading|caption|content)[^"']*["'][^>]*>(.*?)<\/(?:div|span|h[1-6])>/gis;
      while ((m = boxRegex.exec(html)) !== null) {
        const text = cleanHtmlText(m[1]);
        if (text && text.length > 5 && text.length < 200) {
          flipboxes.push(text);
        }
      }

      results[page.category] = {
        title: page.title,
        url: page.url,
        headings: [...new Set(headings)],
        paragraphs: [...new Set(paragraphs)],
        bullets: [...new Set(bullets)]
      };
    } catch (e) {
      console.error(`Failed ${page.url}:`, e.message);
    }
  }

  fs.writeFileSync('scripts/official_hardware_content.json', JSON.stringify(results, null, 2));
  console.log('\nExtracted content saved to scripts/official_hardware_content.json');
}

extractContent();
