import fs from 'node:fs';
import path from 'node:path';

const clientDir = 'dist/client';

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name === 'index.html') files.push(full);
  }
  return files;
}

function check(file) {
  const html = fs.readFileSync(file, 'utf-8');
  const fors = [...html.matchAll(/\bfor="([^"]+)"/g)].map((m) => m[1]);
  const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
  return fors.filter((f) => !ids.has(f));
}

let any = false;
for (const file of walk(clientDir)) {
  const bad = check(file);
  if (bad.length) {
    any = true;
    console.log(path.relative(clientDir, file), '→', bad.join(', '));
  }
}
if (!any) console.log('All prerendered pages: label for attributes match ids.');
