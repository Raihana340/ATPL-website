import fs from 'fs';
import path from 'path';

const homePath = path.resolve('src/components/pages/HomeView.jsx');
let content = fs.readFileSync(homePath, 'utf8');

// Replace the screen center markup inside appleShowcaseApps.map
const oldScreenCenterMarker = '{/* Screen Center Graphic & Metric */}';
const screenCenterStart = content.indexOf(oldScreenCenterMarker);

if (screenCenterStart === -1) {
  console.error('Could not find oldScreenCenterMarker');
  process.exit(1);
}

const screenCenterEndMarker = '{/* Screen Bottom Status Bar */}';
const screenCenterEnd = content.indexOf(screenCenterEndMarker, screenCenterStart);

if (screenCenterEnd === -1) {
  console.error('Could not find screenCenterEndMarker');
  process.exit(1);
}

const newScreenCenter = `{/* Screen Center: Boldly Highlighted Product Name & Metric */}
                      <div style={{
                        textAlign: 'center',
                        padding: '0.85rem 0.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1
                      }}>
                        {/* Highlighted Project/Product Name in Center */}
                        <div style={{
                          marginBottom: '0.65rem',
                          textAlign: 'center'
                        }}>
                          <span style={{
                            display: 'block',
                            fontSize: '0.78rem',
                            fontWeight: 800,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: isFocused ? '#38bdf8' : '#7dd3fc',
                            fontFamily: 'var(--font-mono, monospace)',
                            marginBottom: '0.15rem'
                          }}>
                            {app.titlePrimary || 'PERFECT'}
                          </span>

                          <span style={{
                            fontSize: 'clamp(1.35rem, 2vw, 1.55rem)',
                            fontWeight: 900,
                            color: '#ffffff',
                            letterSpacing: '-0.025em',
                            lineHeight: 1.1,
                            fontFamily: 'var(--font-display, Inter, sans-serif)',
                            display: 'block',
                            textShadow: isFocused 
                              ? '0 0 20px rgba(56, 189, 248, 0.75), 0 2px 4px rgba(0, 0, 0, 0.8)' 
                              : '0 2px 4px rgba(0, 0, 0, 0.6)'
                          }}>
                            {app.titleSecondary || app.name.replace(/^Perfect\s*/i, '')}
                          </span>
                        </div>

                        {/* Highlighted Core Metric Badge */}
                        <div style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          backgroundColor: isFocused ? 'rgba(56, 189, 248, 0.18)' : 'rgba(255, 255, 255, 0.08)',
                          border: \`1px solid \${isFocused ? '#38bdf8' : 'rgba(255, 255, 255, 0.15)'}\`,
                          color: isFocused ? '#38bdf8' : '#e2e8f0',
                          padding: '0.28rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          letterSpacing: '0.04em',
                          marginBottom: '0.4rem',
                          boxShadow: isFocused ? '0 0 14px rgba(56, 189, 248, 0.35)' : 'none'
                        }}>
                          <span>{app.screenData.metric}</span>
                        </div>

                        {/* Sub-label */}
                        <div style={{
                          fontSize: '0.74rem',
                          color: '#94a3b8',
                          lineHeight: 1.3,
                          maxWidth: '180px',
                          margin: '0 auto'
                        }}>
                          {app.screenData.sub}
                        </div>
                      </div>

                      `;

content = content.substring(0, screenCenterStart) + newScreenCenter + content.substring(screenCenterEnd);

// Also update the bezel styling to enhance the center focused card glow
const bezelSearch = 'borderColor: isFocused ? \'#0071ba\' : \'#283044\',';
const bIdx = content.indexOf(bezelSearch);
if (bIdx !== -1) {
  content = content.replace(
    `borderColor: isFocused ? '#0071ba' : '#283044',
                      boxShadow: isFocused 
                        ? '0 30px 60px -10px rgba(0, 113, 186, 0.45), 0 0 25px rgba(0, 240, 255, 0.25)' 
                        : '0 25px 50px -12px rgba(0, 0, 0, 0.38)'`,
    `borderColor: isFocused ? '#38bdf8' : '#283044',
                      boxShadow: isFocused 
                        ? '0 35px 75px -10px rgba(0, 113, 186, 0.65), 0 0 35px rgba(56, 189, 248, 0.45), inset 0 0 15px rgba(56, 189, 248, 0.2)' 
                        : '0 25px 50px -12px rgba(0, 0, 0, 0.38)'`
  );
}

// Update the navigation pills below to highlight with brand blue when active
const navPillsSearch = "backgroundColor: focusedAppIndex === idx ? '#0f172a' : '#f8fafc',";
const npIdx = content.indexOf(navPillsSearch);
if (npIdx !== -1) {
  content = content.replace(
    `backgroundColor: focusedAppIndex === idx ? '#0f172a' : '#f8fafc',
                    color: focusedAppIndex === idx ? '#ffffff' : '#64748b',
                    border: \`1.5px solid \${focusedAppIndex === idx ? '#0f172a' : '#e2e8f0'}\`,
                    padding: '0.45rem 1rem',
                    borderRadius: '999px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: focusedAppIndex === idx ? '0 4px 12px rgba(15, 23, 42, 0.2)' : 'none'`,
    `backgroundColor: focusedAppIndex === idx ? '#0071ba' : '#f8fafc',
                    color: focusedAppIndex === idx ? '#ffffff' : '#475569',
                    border: \`1.5px solid \${focusedAppIndex === idx ? '#0071ba' : '#cbd5e1'}\`,
                    padding: '0.5rem 1.15rem',
                    borderRadius: '999px',
                    fontSize: '0.86rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: focusedAppIndex === idx ? '0 4px 16px rgba(0, 113, 186, 0.4)' : 'none'`
  );
}

fs.writeFileSync(homePath, content, 'utf8');
console.log('Successfully highlighted product name in center of device screen!');
