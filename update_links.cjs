const fs = require('fs');
const path = require('path');
const waUrl = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20book%20my%20first%2030-minute%20session%20with%20a%20subject%20and%20curriculum-fit%20tutor.';
function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) walk(fullPath);
    else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = content.replace(/['"]\/contact#form['"]/g, '\"' + waUrl + '\"');
      if (content !== updated) {
        fs.writeFileSync(fullPath, updated);
        console.log('Updated: ' + fullPath);
      }
    }
  });
}
walk('src/app');
