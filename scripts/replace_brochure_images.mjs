import fs from 'fs';

const filePath = 'src/components/pages/SoftwareView.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. In showcaseApps: replace brochure image paths with authentic digital software dashboard images
content = content.replace(
  "image: '/assets/images/brochures/brochure_perfectedge_mdm.png'",
  "image: '/assets/images/software_mdm.jpg'"
);
content = content.replace(
  "image: '/assets/images/brochures/brochure_perfect_labeler.png'",
  "image: '/assets/images/software_labeler.jpg'"
);
content = content.replace(
  "image: '/assets/images/brochures/brochure_perfect_flow_360.png'",
  "image: '/assets/images/software_flow360.jpg'"
);

// 2. In softwareProducts: replace brochure image paths and alt texts with digital dashboard screenshots
content = content.replace(
  "image: '/assets/images/brochures/brochure_perfectedge_mdm.png',\n      imageAlt: 'ATPL PerfectEdge MDM Smart Device Management Brochure'",
  "image: '/assets/images/software_mdm.jpg',\n      imageAlt: 'ATPL PerfectEdge MDM Fleet Management Dashboard'"
);
content = content.replace(
  "image: '/assets/images/brochures/brochure_perfect_labeler.png',\n      imageAlt: 'ATPL Perfect Labeler Cloud Printing Application Brochure'",
  "image: '/assets/images/software_labeler.jpg',\n      imageAlt: 'ATPL Perfect Labeler Cloud Barcode Designer Interface'"
);
content = content.replace(
  "image: '/assets/images/brochures/brochure_perfect_flow_360.png',\n      imageAlt: 'ATPL Perfect Flow 360 Customer Relationship Management Brochure'",
  "image: '/assets/images/software_flow360.jpg',\n      imageAlt: 'ATPL Perfect Flow 360 Enterprise CRM & Field Operations Dashboard'"
);

// 3. Remove the '★ OFFICIAL ATPL BROCHURE RELEASE' red badge overlay on top of the image
content = content.replace(
  /\{isBrochureFeatured && \(\s*<div style=\{\{\s*position: 'absolute',\s*top: '14px'[\s\S]*?★ OFFICIAL ATPL BROCHURE RELEASE\s*<\/div>\s*\)\}/,
  ''
);

// 4. Update the highlight badge in content to indicate enterprise proprietary software instead of paper brochure
content = content.replace(
  '★ FEATURED FROM OFFICIAL ATPL BROCHURE • 2026 EDITION',
  '★ ATPL PROPRIETARY SUITE • 2026 EDITION'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully replaced brochure images with digital software dashboards!');
