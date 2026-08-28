import fs from 'fs';
import path from 'path';

const dir = 'src/app';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Blog.tsx'));

const oldClass = "bg-white/10 border border-white/20 rounded-full font-bold text-white hover:bg-white/20 transition text-sm";
const newClass = "bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-full font-bold text-white transition text-sm shadow-md";

for (const f of files) {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  if (content.includes(oldClass)) {
    content = content.replaceAll(oldClass, newClass);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated WhatsApp button in ${f}`);
  }
}
