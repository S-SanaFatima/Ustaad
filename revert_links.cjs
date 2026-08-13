const fs = require('fs');
const path = require('path');
const waUrl = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20book%20my%20first%2030-minute%20session%20with%20a%20subject%20and%20curriculum-fit%20tutor.';
function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
    else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We know waUrl only legitimately appeared in exactly 4 places as a constant or popup href.
      // We will replace it back to /contact#form everywhere EXCEPT in those specific constant declarations
      // and in the specific App.tsx popup link.
      
      let lines = content.split('\n');
      let changed = false;
      
      for(let i=0; i<lines.length; i++) {
         let line = lines[i];
         // Protect the legitimate WhatsApp links
         if (line.includes('const WA_URL =')) continue;
         if (line.includes('href="') && line.includes('wa.me/971561249005') && lines.length > i+2 && lines[i+2].includes('Ask on WhatsApp')) continue;
         
         if (line.includes(waUrl)) {
             lines[i] = line.replace(new RegExp(waUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '/contact#form');
             changed = true;
         }
      }
      
      if (changed) {
        fs.writeFileSync(fullPath, lines.join('\n'));
        console.log('Reverted: ' + fullPath);
      }
    }
  });
}
walk('src/app');
