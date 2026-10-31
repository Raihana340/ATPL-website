import fs from 'fs';

const filePath = 'src/components/pages/HomeView.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove state variables and observer hook
const stateAndObserverRegex = /\s*const \[activeProjectCategory, setActiveProjectCategory\] = useState\('all'\);[\s\S]*?return \(\) => observer\.disconnect\(\);\s*\}, \[\]\);\n/;
if (!stateAndObserverRegex.test(content)) {
  console.error('Could not find state & observer regex match!');
} else {
  content = content.replace(stateAndObserverRegex, '\n\n');
  console.log('Successfully removed activeProjectCategory, isProjectsVisible, and observer.');
}

// 2. Remove enterpriseProjects array
const enterpriseProjectsRegex = /\s*const enterpriseProjects = \[\s*\{[\s\S]*?\n  \];\n/;
if (!enterpriseProjectsRegex.test(content)) {
  console.error('Could not find enterpriseProjects array!');
} else {
  content = content.replace(enterpriseProjectsRegex, '\n\n');
  console.log('Successfully removed enterpriseProjects array.');
}

// 3. Remove Section (projects-cognizant-showcase)
const sectionRegex = /\s*\{\/\* =+\s*5\. COGNIZANT-STYLE ENTERPRISE PROJECTS SHOWCASE WITH SUDDEN SCROLL POPUP\s*=+\s*\*\/\}[\s\S]*?<\/section>\n/;
if (!sectionRegex.test(content)) {
  console.error('Could not find projects-cognizant-showcase section!');
} else {
  content = content.replace(sectionRegex, '\n\n');
  console.log('Successfully removed projects-cognizant-showcase section.');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('HomeView.jsx updated successfully!');
