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

async function main() {
  console.log('Fetching homepage https://atplgroup.com/ ...');
  const homeHtml = await fetchUrl('https://atplgroup.com/');
  
  // Extract all links
  const linkRegex = /href=["'](https?:\/\/atplgroup\.com\/[^"']+)["']/g;
  const links = new Set();
  let m;
  while ((m = linkRegex.exec(homeHtml)) !== null) {
    links.add(m[1]);
  }
  
  console.log('\n--- Internal Links on ATPL Group ---');
  for (const link of links) {
    if (!link.includes('wp-content') && !link.includes('wp-includes') && !link.includes('wp-json')) {
      console.log(link);
    }
  }

  // Find all image URLs on homepage
  const imgRegex = /src=["'](https?:\/\/atplgroup\.com\/wp-content\/uploads\/[^"']+\.(?:png|jpg|jpeg|webp))["']/gi;
  const images = new Set();
  while ((m = imgRegex.exec(homeHtml)) !== null) {
    images.add(m[1]);
  }

  console.log(`\nFound ${images.size} direct uploaded images on homepage:`);
  for (const img of images) {
    console.log(img);
  }
}

main().catch(console.error);
