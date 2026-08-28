import fs from 'fs';
import path from 'path';

const dir = 'src/app';
const files = fs.readdirSync(dir).filter(f => f.endsWith('Blog.tsx'));

const goldenGradient = "background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)'";
const blueGradient = "background: 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)'";

const textReplacements = [
  "Book a Free Consultation",
  "Book a Free Trial Session",
  "Speak to an Ustaad Chemistry Mentor",
  "Speak to an Ustaad academic mentor",
  "Speak to an Ustaad Physics Tutor",
  "Speak to an Ustaad Physics Mentor",
  "Speak to an Ustaad Biology Mentor",
  "Speak to an Ustaad Maths Mentor"
];

for (const f of files) {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  if (content.includes(blueGradient)) {
    content = content.replaceAll(blueGradient, goldenGradient);
    changed = true;
  }

  if (content.includes('bg-[#0f4a9b] hover:bg-[#0a3a79] text-white')) {
    content = content.replaceAll('className="px-4 py-2 bg-[#0f4a9b] hover:bg-[#0a3a79] text-white font-bold rounded-xl text-xs transition shadow-xs"', 
                                 `className="px-4 py-2 text-white font-bold rounded-xl text-xs transition shadow-xs hover:brightness-110" style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}`);
    changed = true;
  }

  for (const t of textReplacements) {
    const regex = new RegExp(t.replace(/([.?*+^$[\]\\(){}|-])/g, "\\\\$1") + '(?:\\\\s*→)?', 'g');
    if (regex.test(content)) {
      content = content.replaceAll(regex, 'Book Your Free Trial →');
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${f}`);
  }
}
