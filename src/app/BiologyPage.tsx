import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  Dna, Microscope, Heart, Leaf, FlaskConical, Bug, RefreshCw,
  HelpCircle, ChevronDown, MessageCircle, MapPin,
  Search, RotateCcw, Brain, BookOpen,
  Tag, BarChart2, Link2, Eye,
  AlignLeft, ClipboardList, PenTool, Award,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Trouble Spots       (3-col flat bordered grid — Maths "Challenges" style)
  Struggles slot → §4 Pathway             (4 step cards — Maths "Support Steps" style)
  Methods   slot → §5 Topic Reach         (5 topic cards — Maths "Topics" style)
  Curricula slot → §6 Application Skills  (2×2 flat bordered grid — Maths "Problem-Solving" style)
  Practices slot → §7 Marking Habits      (4 gold-icon cards — Maths "Assessment Skills" style)
  Results   slot → §8 UAE                 (dark bg section — Maths "Results/UAE" style)
  FAQs      slot → §9 Parent Questions    (accordion — Maths "FAQSection" style)
*/

/* ─── §3 Trouble Spots — 3-col flat bordered grid ─── */
const troubleSpots = [
  { title: "Cycle Recall",          icon: <RefreshCw   className="h-5 w-5 text-[#0f4a9b]" />, wm: <RefreshCw   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Scrambles steps in long process chains",              fix: "We root stages into proper order" },
  { title: "Diagram Labelling",     icon: <Eye         className="h-5 w-5 text-[#0f4a9b]" />, wm: <Eye         className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Misplaces labels when diagrams change orientation",   fix: "We align labels to recognised anatomy" },
  { title: "Specimen ID",           icon: <Microscope  className="h-5 w-5 text-[#0f4a9b]" />, wm: <Microscope  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Misnames specimens under timed examination",         fix: "We pin identification to clear features" },
  { title: "Genetics Crosses",      icon: <Dna         className="h-5 w-5 text-[#0f4a9b]" />, wm: <Dna         className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Swaps parental gametes in Punnett crosses",          fix: "We piece together crosses step by step" },
  { title: "Data Response",         icon: <BarChart2   className="h-5 w-5 text-[#0f4a9b]" />, wm: <BarChart2   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Skims graphs without noting the units",              fix: "We distil graphs into clear answer lines" },
  { title: "Synoptic Linking",      icon: <Link2       className="h-5 w-5 text-[#0f4a9b]" />, wm: <Link2       className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Overlooks links between separate biology topics",    fix: "We knit linked topics into single answers" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Biology Trouble Spots" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Biology revision often feels strong yet drops marks on the exam paper. We focus on six common slips.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {troubleSpots.map((s, i) => (
            <div key={i} className="group relative flex flex-col gap-2 p-5 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden h-full border-b border-r border-gray-200">
              <div className="flex items-center gap-2 mb-1">{s.icon}</div>
              <h3 className="text-lg font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200">{s.title}</h3>
              <ul className="text-gray-500 text-[13px] leading-relaxed space-y-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" />
                  <span>{s.problem}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" />
                  <span>{s.fix}</span>
                </li>
              </ul>
              <div className="absolute bottom-4 right-4 pointer-events-none select-none">{s.wm}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── §4 Pathway — 4 step cards (Maths "Support Steps" style) ─── */
const pathwaySteps = [
  { title: "Paper Audit",       desc: "Recent biology scripts and class assessments show where recall and reasoning quietly drop.",                   icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Concept Reset",     desc: "Cell, ecology, and physiology basics get strengthened before harder topics return.",                           icon: <RotateCcw     className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Active Reasoning",  desc: "Live commentary on fresh biology problems exposes thinking gaps for immediate correction.",                    icon: <Brain         className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Full Paper Sitting",desc: "Settled, exam-ready biology writing builds through complete timed paper sittings.",                            icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Our Biology Pathway" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Confidence in biology can dip weeks before the next paper arrives. Our four-stage pathway rebuilds the right habits.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {pathwaySteps.map((step, i) => (
          <div key={i} className="relative bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#1e5bb3]" />
            <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(15,74,155,0.3)]">
              {step.icon}
            </div>
            <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider mb-1">Step {i + 1}</span>
            <h3 className="text-base font-extrabold text-[#0a1f3d] mb-1">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-snug md:min-h-[72px]">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── §5 Topic Reach — 5 topic cards (Maths "Topics" style) ─── */
const bioTopics = [
  { title: "Cell Biology & Genetics",  boards: "Cambridge IGCSE 0610, Edexcel IGCSE 4BI1, A-Level 9BI0 and 9700",                         insight: "Mitosis, meiosis, and inheritance steps haze under timed work. We file each stage clearly.",                              icon: <Dna         className="h-6 w-6" strokeWidth={2} />, wm: <Dna         className="h-20 w-20" strokeWidth={1} /> },
  { title: "Human Physiology",         boards: "AQA 7402, OCR A H420, AP Biology, IB Biology SL and HL",                                   insight: "Organ systems and feedback loops knot under pressure. We lay out the pathways clearly.",                                   icon: <Heart       className="h-6 w-6" strokeWidth={2} />, wm: <Heart       className="h-20 w-20" strokeWidth={1} /> },
  { title: "Ecology & Evolution",      boards: "Cambridge IGCSE 0610, A-Level 9BI0, AQA 7402, IB Biology SL and HL",                       insight: "Sampling and selection questions trail mid-answer. We name the principles holding each argument.",                        icon: <Leaf        className="h-6 w-6" strokeWidth={2} />, wm: <Leaf        className="h-20 w-20" strokeWidth={1} /> },
  { title: "Microbiology & Disease",   boards: "Edexcel A-Level 9BI0, Cambridge A 9700, AP Biology, IB HL Option",                         insight: "Immunity and infection chains snag under multi-part questions. We mark out the stages clearly.",                          icon: <Bug         className="h-6 w-6" strokeWidth={2} />, wm: <Bug         className="h-20 w-20" strokeWidth={1} /> },
  { title: "Biochemistry & Energy",    boards: "Cambridge IGCSE 0610, Edexcel IGCSE 4BI1, A-Level papers, IB Biology SL",                  insight: "Enzyme and respiration pathways jam under unfamiliar wording. We plant the cycle outline first.",                         icon: <FlaskConical className="h-6 w-6" strokeWidth={2} />, wm: <FlaskConical className="h-20 w-20" strokeWidth={1} /> },
];

function TopicCard({ topic }: { topic: typeof bioTopics[0] }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition duration-300 overflow-hidden">
      <div className="w-14 h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-3">
        <span className="text-[#0f4a9b]">{topic.icon}</span>
      </div>
      <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">{topic.title}</h3>
      <p className="text-gray-500 text-sm leading-snug mb-2 md:min-h-[48px]">{topic.boards}</p>
      <p className="text-gray-600 text-sm leading-snug font-medium md:min-h-[48px]">{topic.insight}</p>
      <div className="absolute bottom-4 right-4 pointer-events-none select-none text-[#0f4a9b]/[0.08]">{topic.wm}</div>
    </div>
  );
}

const customMethodsSection = (
  <>
    <div className="h-1 bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent" />
    <section id="method" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="Biology Topic Reach" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Every topic we teach matches the marking style of major boards. Your child's answers stay exam-ready across all curricula.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {bioTopics.slice(0, 3).map((t, i) => <TopicCard key={i} topic={t} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {bioTopics.slice(3).map((t, i) => <TopicCard key={i + 3} topic={t} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Application Skills — 2×2 flat bordered grid (Maths "Problem-Solving" style) ─── */
const appSkills = [
  { title: "Concept Transfer",      icon: <RefreshCw  className="h-6 w-6" strokeWidth={2} />, problem: "Stuck on concepts in unseen contexts",                      fix: "We sketch transfer routes for any scenario" },
  { title: "Evidence Interpretation", icon: <Eye      className="h-6 w-6" strokeWidth={2} />, problem: "Glances past evidence in long stems",                        fix: "We slow evidence reading line by line" },
  { title: "Comparison Building",   icon: <AlignLeft  className="h-6 w-6" strokeWidth={2} />, problem: "Lists features without naming the comparison clearly",       fix: "We shape side-by-side comparison sentences" },
  { title: "Conclusion Logic",      icon: <Link2      className="h-6 w-6" strokeWidth={2} />, problem: "Jumps to conclusions without evidence steps",                fix: "We track each step from evidence to answer" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Biological Application Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Memorised answers stop scoring when biology asks for thought. We talk through the thinking habits your child needs.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {appSkills.slice(0, 2).map((s, i) => (
            <div key={i} className="relative bg-white p-5 md:p-8 flex flex-col hover:bg-[#f7f9ff] transition-colors duration-200">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-3 text-[#0f4a9b]">{s.icon}</div>
              <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">{s.title}</h3>
              <ul className="text-gray-500 text-sm leading-snug space-y-1">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" /><span className="block">{s.problem}</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" /><span className="block">{s.fix}</span></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t border-gray-200">
          {appSkills.slice(2).map((s, i) => (
            <div key={i + 2} className="relative bg-white p-5 md:p-8 flex flex-col hover:bg-[#f7f9ff] transition-colors duration-200">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-3 text-[#0f4a9b]">{s.icon}</div>
              <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">{s.title}</h3>
              <ul className="text-gray-500 text-sm leading-snug space-y-1">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" /><span className="block">{s.problem}</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" /><span className="block">{s.fix}</span></li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── §7 Marking Habits — 4 gold-icon cards (Maths "Assessment Skills" style) ─── */
const markingHabits = [
  { title: "Command Word Match",  icon: <Tag          className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Answers 'compare' with descriptions only",              fix: "We pair each command word with the right response" },
  { title: "AO Mark Map",        icon: <BookOpen     className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Tilts effort across AO1, AO2, AO3 bands",               fix: "We spotlight where marks live per paper" },
  { title: "Required Practicals",icon: <PenTool      className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Glosses over apparatus and controls in write-ups",       fix: "We practise each practical to examiner standards" },
  { title: "Six-Mark Writing",   icon: <Award        className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Drafts vague statements without biological detail",       fix: "We straighten arguments into examiner-ready paragraphs" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Biology Marking Habits" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Examiners reward specific language and structure on paper. We build the patterns that turn recall into full marks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {markingHabits.map((r, i) => (
          <div key={i} className="bg-white border border-[#0f4a9b]/10 rounded-[24px] p-6 md:p-8 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_20px_rgba(199,162,74,0.4)] mb-3">{r.icon}</div>
            <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">{r.title}</h3>
            <ul className="text-gray-500 text-sm font-medium space-y-1">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" /><span className="block">{r.problem}</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" /><span className="block">{r.fix}</span></li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── §8 UAE — dark section (Maths "Results/UAE" style exactly) ─── */
const uaeLocations = [
  { name: "Abu Dhabi",      desc: "Capital • Most schools",    icon: <MapPin className="h-4 w-4" /> },
  { name: "Dubai",          desc: "Largest city • All boards", icon: <MapPin className="h-4 w-4" /> },
  { name: "Sharjah",        desc: "Growing IGCSE community",   icon: <MapPin className="h-4 w-4" /> },
  { name: "Ajman",          desc: "Cambridge & Edexcel",       icon: <MapPin className="h-4 w-4" /> },
  { name: "Al Ain",         desc: "Cambridge focused",         icon: <MapPin className="h-4 w-4" /> },
  { name: "Ras Al Khaimah", desc: "Northern Emirates",         icon: <MapPin className="h-4 w-4" /> },
  { name: "Fujairah",       desc: "East coast",                icon: <MapPin className="h-4 w-4" /> },
  { name: "Umm Al Quwain",  desc: "6th Emirate",               icon: <MapPin className="h-4 w-4" /> },
];

const customResultsSection = (
  <section id="results" className="py-16 lg:py-20 bg-[#0a1628]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
        <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
        <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Across the UAE</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Biology Mentoring <span className="text-[#C7A24A]">Across the UAE</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {uaeLocations.map((loc, i) => (
          <div key={i} className="relative bg-[#162238] border border-white/10 rounded-xl p-5 hover:border-[#C7A24A]/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="w-8 h-8 bg-[#0f4a9b]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#0f4a9b]">{loc.icon}</span>
              </div>
              <div className="w-2 h-2 bg-[#C7A24A] rounded-full" />
            </div>
            <h3 className="text-white font-bold text-base mb-1">{loc.name}</h3>
            <p className="text-white/50 text-xs">{loc.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#162238] border border-white/10 rounded-xl p-6 flex items-center gap-4">
        <div className="w-10 h-10 bg-[#0f4a9b]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <MapPin className="h-5 w-5 text-[#0f4a9b]" />
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          Biology worry settles at home and confidence builds for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 FAQs — accordion (Maths "FAQSection" style exactly) ─── */
const bioFAQs = [
  { q: "How is your biology tutoring different from school lessons?",         a: "School lessons cover the syllabus broadly. Our biology tutors zoom in on the exact habits your child needs to fix on the paper, with one-to-one attention every session." },
  { q: "Do you focus more on memory work or on understanding?",               a: "Both. Biology needs recall, but most marks come from understanding and using what your child knows. We make sure both habits grow together." },
  { q: "How do you help students who struggle with diagrams and labels?",     a: "Diagrams need clear scale, neat labels, and the right anatomical names. Tutors work through past-paper diagrams session by session so labelling feels familiar by exam day." },
  { q: "Can tutors support extended six-mark biology answers?",               a: "Yes. Six-mark answers need a clear structure and biology-specific words. Tutors give your child a step-by-step format that examiners reward and practise it across topics." },
  { q: "What signs at home will show my child is improving in biology?",      a: "Better diagram labelling, faster recall of process steps, and longer, more structured six-mark answers usually appear first. Parents notice the shift before the next school test." },
  { q: "Will the same biology tutor stay with my child throughout?",          a: "Yes. Your child works with the same biology specialist throughout, so trust and pace build session after session." },
];

function BiologyFAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section id="faqs" className="py-8 lg:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <HelpCircle className="h-3.5 w-3.5" />
              <span className="text-xs uppercase tracking-wider">Parents Ask</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
              Biology{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Parent Questions</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {bioFAQs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                      style={{ width:40, height:40, minWidth:40, minHeight:40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition:'background 300ms ease, color 300ms ease', cursor:'pointer', border:'none', boxShadow:'inset 0 0 0 2px #fff' }}>
                      <span className="flex items-center justify-center w-full h-full">?</span>
                    </button>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex-1 flex items-center gap-3 text-left rounded-full border"
                      style={{ minHeight:'48px', padding:'8px 14px', cursor:'pointer', background:'transparent', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)' }}>
                      <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                      <span className="flex-shrink-0 flex items-center justify-center"
                        style={{ width:32, height:32, minWidth:32, minHeight:32, borderRadius:'50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition:'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <ChevronDown className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </div>
                  {isOpen && (
                    <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                      style={{ background:'#f8fafc', borderColor:'rgba(15,74,155,0.15)', boxShadow:'0 4px 16px rgba(15,74,155,0.06)' }}>
                      <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                      <span className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{ width:32, height:32, minWidth:32, minHeight:32, background:'#0f4a9b', color:'#fff' }}>
                        <MessageCircle className="h-4 w-4" />
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page data ─── */
const data: SubjectPageProps = {
  badgeIcon:        <Dna className="h-4 w-4" />,
  heroBadgeLabel:   "Biology Specialist",
  heroTitle:        "Confident Biology. Higher Scores.",
  heroSubtitle:     "Tailored biology tuition for IGCSE, A-Level, IB, and AP students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Biology, made to stick.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Trouble Spots */

  struggles: [],
  customStrugglesSection,    /* §4 Pathway */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Topic Reach */

  curricula: [],
  customCurriculaSection,    /* §6 Application Skills */

  practices: [],
  customPracticesSection,    /* §7 Marking Habits */

  results: [],
  customResultsSection,      /* §8 UAE dark section */

  faqs: [],
  customFAQsSection: <BiologyFAQs />, /* §9 Parent Questions */

  finalCtaTitle:    "See Where Grades Quietly Drop",
  finalCtaSubtitle: "When biology revision feels solid yet exam scores stall, a short check reveals the habit costing marks.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Biology, made to stick.",

  floatingIcon: <Dna className="h-4 w-4" />,
  seo: {
    title: "Biology Tutors UAE | IGCSE, A-Level, IB Biology | Ustaad",
    description: "Expert private Biology tutoring in Dubai, Abu Dhabi & UAE. IGCSE, A-Level, IB SL/HL, AP Biology. 1-to-1 sessions with proven exam results. Book a free trial.",
    canonical: "/biology",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Biology Tutoring UAE", "1-to-1 Biology tutoring for IGCSE, A-Level, and IB students across UAE.", "/biology"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Biology", url: "/biology" }]),
      faqSchema(bioFAQs),
    ],
  },
};

export default function BiologyPage() {
  return <SubjectPageTemplate {...data} />;
}
