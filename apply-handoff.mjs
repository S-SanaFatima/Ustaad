import fs from 'fs';
import path from 'path';

const filePath = path.join('src', 'app', 'ALevelIndependentThinkingBlog.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Table removal
const tableRowRegex = /<tr className="hover:bg-\[#0f4a9b\]\/\[0\.02\] transition-colors">\s*<td className="p-3\.5 font-bold text-\[#0f4a9b\] bg-\[#0f4a9b\]\/\[0\.04\]">Typical ceiling<\/td>\s*<td className="p-3\.5 text-amber-700 font-medium">Plateaus around B or C<\/td>\s*<td className="p-3\.5 text-\[#0f4a9b\] font-bold">Reaches the top bands \(A \/ A\*\)<\/td>\s*<\/tr>/;
content = content.replace(tableRowRegex, '');

// 2. Inline link 1 (metacognition and self-regulated learning)
content = content.replace(
  'metacognition and problem-solving',
  '<a href="https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline">metacognition and self-regulated learning</a>'
);

// 2. Inline link 2 (cancelled their A-Level exams in the UAE)
content = content.replace(
  'cancelled their A-Level exams in the UAE',
  '<a href="https://gulfnews.com/uae/education/dubais-khda-uae-schools-respond-after-igcse-a-level-ib-exam-cancellations-1.500495828" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline">cancelled their A-Level exams in the UAE</a>'
);

// 2. Section 10 link 1
content = content.replace(
  '<span><strong>Cambridge International:</strong> Portfolio of Evidence (June 2026 series guidance)</span>',
  '<span><a href="https://www.cambridgeinternational.org/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]"><strong>Cambridge International:</strong> Portfolio of Evidence (June 2026 series guidance)</a></span>'
);

// 2. Section 10 link 2
content = content.replace(
  '<span><strong>Pearson Edexcel:</strong> Arrangements for International GCSE and A Level exams, May/June 2026</span>',
  '<span><a href="https://qualifications.pearson.com/en/campaigns/support-for-centres-affected-by-the-conflict-in-the-middle-east/arrangements-for-international-gcse-and-international-a-level-exams.html" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]"><strong>Pearson Edexcel:</strong> Arrangements for International GCSE and A Level exams, May/June 2026</a></span>'
);

// 2. Section 10 link 3
content = content.replace(
  '<span><strong>OxfordAQA:</strong> Support for schools in the Gulf and Middle East region</span>',
  '<span><a href="https://www.oxfordaqa.com/news/gulf-and-middle-east-region-support/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]"><strong>OxfordAQA:</strong> Support for schools in the Gulf and Middle East region</a></span>'
);

// 2. Section 10 link 4
content = content.replace(
  '<span><strong>Education Endowment Foundation:</strong> Metacognition and Self-Regulated Learning Evidence Review</span>',
  '<span><a href="https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]"><strong>Education Endowment Foundation:</strong> Metacognition and Self-Regulated Learning Evidence Review</a></span>'
);

// 3. Meta description tightening
content = content.replace(
  "description: 'UAE A-Level exams move to portfolios and coursework in 2026",
  "description: 'UAE A-Level exams move to portfolios and evidence-based grading in 2026"
);

// 3. H1 Tightening
content = content.replace(
  "titleLine2: 'A-Level Tutoring in the UAE Starts With Independent Thinking'",
  "titleLine2: 'A-Level Tutoring in the UAE, Built on Independent Thinking'"
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Applied developer handoff to ALevelIndependentThinkingBlog.tsx');
