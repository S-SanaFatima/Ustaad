const fs = require('fs');
const files = [
  { path: 'ChemistryFadesBlog.tsx', cat: 'Subject & Exam Skills', link: '/blogs/academic-exam-skills', title: 'IGCSE Chemistry Insights' },
  { path: 'EarlySignsChemistryBlog.tsx', cat: 'Parent Guidance', link: '/blogs/parent-guidance', title: 'Early Signs in Chemistry' },
  { path: 'ExamPanicBlog.tsx', cat: 'Psychology of Learning', link: '/blogs/psychology-of-learning', title: 'Overcoming Exam Panic' },
  { path: 'IGCSEMathsLowMarksBlog.tsx', cat: 'Subject & Exam Skills', link: '/blogs/academic-exam-skills', title: 'IGCSE Maths Revision' },
  { path: 'IGCSEPhysicsFormulasBlog.tsx', cat: 'Subject & Exam Skills', link: '/blogs/academic-exam-skills', title: 'IGCSE Physics Formulas' },
  { path: 'PhysicsUnderstandingMarksBlog.tsx', cat: 'Subject & Exam Skills', link: '/blogs/academic-exam-skills', title: 'Physics Conceptual Marks' },
  { path: 'ReadSchoolReportCardBlog.tsx', cat: 'Parent Guidance', link: '/blogs/parent-guidance', title: 'Reading School Reports' },
];

files.forEach(f => {
  const fullPath = `src/app/${f.path}`;
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');
  
  const regex = /<a href="\/blogs" className="hover:text-\[#0f4a9b\] transition">Blog<\/a>\s*<ChevronRightIcon className="h-3 w-3" \/>\s*<span className="text-\[#0f4a9b\] font-semibold truncate max-w-\[200px\]">([^<]+)<\/span>/;
  
  const replacement = `<a href="/blogs" className="hover:text-[#0f4a9b] transition">Blog</a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="${f.link}" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">${f.cat}</a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">${f.title}</span>`;
          
  if(regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(fullPath, content);
    console.log(`Updated ${f.path}`);
  } else {
    console.log(`No match in ${f.path}`);
  }
});
