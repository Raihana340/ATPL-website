import https from 'https';
import fs from 'fs';
import path from 'path';

const targetDir = 'public/assets/images/hardware';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const officialImages = [
  // 1. Scanners
  { name: 'atpl_scanner_wired_h1.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/03/h1.jpg' },
  { name: 'atpl_scanner_cordless_hs2.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/03/HS2.jpg' },
  { name: 'atpl_scanner_granit_h3.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/03/h3.jpg' },
  { name: 'atpl_scanner_presentation_h4.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/03/h4.jpg' },
  { name: 'atpl_scanner_ring_h5.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/04/h5.jpg' },
  { name: 'atpl_scanner_dpm_h6.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/03/h6.jpg' },

  // 2. Printers
  { name: 'atpl_printer_desktop.png', url: 'https://atplgroup.com/wp-content/uploads/2024/04/desktop-printer.png' },
  { name: 'atpl_printer_mobile.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/mobile-printer.png' },
  { name: 'atpl_printer_industrial.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/industrial-printer.png' },
  { name: 'atpl_printer_rfid.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/rfid-printer.png' },
  { name: 'atpl_printer_high_speed.png', url: 'https://atplgroup.com/wp-content/uploads/2024/04/high.png' },
  { name: 'atpl_printer_id_card.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/id-card-printerq.png' },

  // 3. Mobility
  { name: 'atpl_mobility_field.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/field-mobility.png' },
  { name: 'atpl_mobility_enterprise.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/enterprise-model.png' },
  { name: 'atpl_mobility_rugged.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/RUGED-DEVICE.png' },
  { name: 'atpl_mobility_zone.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/ZONE-device.png' },
  { name: 'atpl_mobility_cold_storage.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/cold-storage.png' },
  { name: 'atpl_mobility_tablet.png', url: 'https://atplgroup.com/wp-content/uploads/2024/04/tablet-img.png' },

  // 4. RFID
  { name: 'atpl_rfid_fixed_reader.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/03/imagerfid-2.jpg' },
  { name: 'atpl_rfid_handheld_sled.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/03/rfid-reader.jpg' },
  { name: 'atpl_rfid_antenna.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/03/antena.jpg' },
  { name: 'atpl_rfid_tags.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/04/Rfid-tags.jpg' },

  // 5. Direct Marking
  { name: 'atpl_marking_laser.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/forbes_macsa_packaginglasers_bmfd_packaging.png' },
  { name: 'atpl_marking_uv_laser.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/UV-LASER-600x500-1.png' },
  { name: 'atpl_marking_bradma_dotpeen.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/bramda-600x500.png' },
  { name: 'atpl_marking_tmp1000.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/TMP1000_600-x-600.png' },

  // 6. Touch, Kiosk, PLC & Voice
  { name: 'atpl_touch_computer.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/04/touch.jpg' },
  { name: 'atpl_kiosk_system.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/02/agilysys-kiosk.jpg' },
  { name: 'atpl_plc_automation.jpg', url: 'https://atplgroup.com/wp-content/uploads/2024/02/PLC-AUTOMATION.jpg' },
  { name: 'atpl_voice_headset.png', url: 'https://atplgroup.com/wp-content/uploads/2024/03/cc-1.png' }
];

function downloadImage(imgObj) {
  return new Promise((resolve) => {
    const dest = path.join(targetDir, imgObj.name);
    const file = fs.createWriteStream(dest);

    https.get(imgObj.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(dest);
          console.log(`✓ Downloaded: ${imgObj.name} (${(stats.size / 1024).toFixed(1)} KB)`);
          resolve(true);
        });
      } else {
        console.warn(`✗ Failed (${res.statusCode}): ${imgObj.url}`);
        file.close();
        fs.unlink(dest, () => {});
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`✗ Error on ${imgObj.name}:`, err.message);
      file.close();
      fs.unlink(dest, () => {});
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Downloading ${officialImages.length} authentic hardware images from atplgroup.com...`);
  for (const img of officialImages) {
    await downloadImage(img);
  }
  console.log('\nAll downloads completed!');
}

run();
