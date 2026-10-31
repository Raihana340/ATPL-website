import fs from 'fs';

const filePath = 'src/components/pages/SoftwareView.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove currentApp and isShowcaseDark definitions if no longer needed, or keep for jump button
content = content.replace(
  /const currentApp = showcaseApps\[focusedAppIndex\] \|\| showcaseApps\[0\];\s*const isShowcaseDark = currentApp\.theme === 'dark';/,
  ''
);

// 2. Remove .software-spec-grid CSS
content = content.replace(
  /\s*\.software-spec-grid \{[\s\S]*?@media \(min-width: 860px\) \{[\s\S]*?\}\s*\}/,
  ''
);

// 3. Remove Focused App Specification Box from line 993 to 1205
const boxRegex = /\s*\{\/\* Focused App Specification Box \(Matches Screenshot 1 EXACTLY!\) \*\/\}[\s\S]*?\{\/\* Quick Jump link to full technical specs \*\/\}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/;

if (!boxRegex.test(content)) {
  console.error('Could not find Focused App Specification Box regex match!');
  // Try alternative match
  const startMarker = '{/* Focused App Specification Box';
  const endMarker = '{/* =========================================================================\n          3. CATEGORY FILTER TABS';
  const startIndex = content.indexOf(startMarker);
  const endIndex = content.indexOf(endMarker);
  if (startIndex !== -1 && endIndex !== -1) {
    // Find the closing </div> of section before endMarker
    const beforeEnd = content.lastIndexOf('</section>', endIndex);
    const replacement = `
          {/* Subtle Quick Jump Action to Focused Product's Full Specifications */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => scrollToProductSection(showcaseApps[focusedAppIndex]?.id || 'flow360')}
              style={{
                backgroundColor: '#ffffff',
                color: '#0071ba',
                border: '1.5px solid #bfdbfe',
                padding: '0.65rem 1.65rem',
                borderRadius: '999px',
                fontSize: '0.90rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 2px 8px rgba(0, 113, 186, 0.12)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0071ba';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#0071ba';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#0071ba';
                e.currentTarget.style.borderColor = '#bfdbfe';
              }}
            >
              <span>Explore {showcaseApps[focusedAppIndex]?.name || 'Product'} Specifications</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      `;
    content = content.slice(0, startIndex) + replacement + content.slice(beforeEnd);
    console.log('Successfully replaced using slice markers!');
  }
} else {
  const replacement = `
          {/* Subtle Quick Jump Action to Focused Product's Full Specifications */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => scrollToProductSection(showcaseApps[focusedAppIndex]?.id || 'flow360')}
              style={{
                backgroundColor: '#ffffff',
                color: '#0071ba',
                border: '1.5px solid #bfdbfe',
                padding: '0.65rem 1.65rem',
                borderRadius: '999px',
                fontSize: '0.90rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 2px 8px rgba(0, 113, 186, 0.12)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0071ba';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#0071ba';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#0071ba';
                e.currentTarget.style.borderColor = '#bfdbfe';
              }}
            >
              <span>Explore {showcaseApps[focusedAppIndex]?.name || 'Product'} Specifications</span>
              <ChevronRight size={16} />
            </button>
          </div>
  `;
  content = content.replace(boxRegex, replacement);
  console.log('Successfully replaced using regex!');
}

// 4. Also enable clicking focused 3D device to jump directly to specifications
content = content.replace(
  /onClick=\{\(\) => setFocusedAppIndex\(idx\)\}/,
  'onClick={() => { if (diff === 0) { scrollToProductSection(app.id); } else { setFocusedAppIndex(idx); } }}'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SoftwareView.jsx updated successfully!');
