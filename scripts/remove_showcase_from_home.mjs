import fs from 'fs';

const filePath = 'src/components/pages/HomeView.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove focusedAppIndex state
content = content.replace(/\s*const \[focusedAppIndex, setFocusedAppIndex\] = useState\(2\);/, '');

// 2. Remove appleShowcaseApps array
const showcaseAppsRegex = /\s*const appleShowcaseApps = \[\s*\{[\s\S]*?\n  \];\n/;
if (!showcaseAppsRegex.test(content)) {
  console.error('Could not find appleShowcaseApps array!');
} else {
  content = content.replace(showcaseAppsRegex, '\n\n');
  console.log('Successfully removed appleShowcaseApps array.');
}

// 3. Remove Section 4 (apple-homeview-showcase)
const sectionRegex = /\s*\{\/\* =+\s*4\. APPLE HOMEVIEW-STYLE 3D FANNED DEVICE & INDUSTRIAL OS SHOWCASE\s*=+\s*\*\/\}[\s\S]*?<\/section>\n/;
if (!sectionRegex.test(content)) {
  console.error('Could not find apple-homeview-showcase section!');
} else {
  content = content.replace(sectionRegex, '\n\n');
  console.log('Successfully removed apple-homeview-showcase section from HomeView.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('HomeView.jsx successfully updated!');
