import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  FlaskConical, Atom, Scale, Flame, Leaf, Network,
  GitCompareArrows, Route, Lightbulb, Layers, FileText,
  Search, BookMarked, Brain, ClipboardList, ArrowRight,
  AlignLeft, Hash, TrendingUp,
  HelpCircle, ChevronDown, MessageCircle, MapPin,
  Award, PenTool,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Where Chemistry Slips   (3-col flat bordered grid)
  Struggles slot → §4 Our Chemistry Process   (4 step cards)
  Methods   slot → §5 Chemistry Syllabus      (3+2 topic cards)
  Curricula slot → §6 Chemistry Thinking Skills (2×2 flat bordered grid)
  Practices slot → §7 Chemistry Paper Skills  (4 gold-icon cards)
  Results   slot → §8 UAE                     (dark bg section)
  FAQs      slot → §9 Chemistry Questions     (accordion)
*/

/* ─── §3 Where Chemistry Slips — 3-col flat bordered grid ─── */
const chemSlips = [
  { title: "Mole Calculations",  icon: <Scale         className="h-5 w-5 text-[#0f4a9b]" />, wm: <Scale         className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Mixes up units in multi-step conversions",         fix: "We clarify the chain from start to finish" },
  { title: "Equation Balancing", icon: <GitCompareArrows className="h-5 w-5 text-[#0f4a9b]" />, wm: <GitCompareArrows className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Stalls on multi-element equations under timing",    fix: "We build balancing in clear stages" },
  { title: "Mechanism Arrows",   icon: <Route         className="h-5 w-5 text-[#0f4a9b]" />, wm: <Route         className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Muddles arrow directions in organic steps",         fix: "We improve arrow conventions through practice" },
  { title: "Periodic Trends",    icon: <TrendingUp    className="h-5 w-5 text-[#0f4a9b]" />, wm: <TrendingUp    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Jumbles trends across groups and periods",          fix: "We organise trend logic by clear rules" },
  { title: "Organic Naming",     icon: <Layers        className="h-5 w-5 text-[#0f4a9b]" />, wm: <Layers        className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Slips on suffix and prefix order",                  fix: "We simplify IUPAC naming step by step" },
  { title: "Practical Writing",  icon: <FileText      className="h-5 w-5 text-[#0f4a9b]" />, wm: <FileText      className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Garbles method and result write-ups",               fix: "We level the write-up to mark scheme standards" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Where Chemistry Slips" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Confident revision often fades when a fresh question lands. We focus on six places where working comes apart.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {chemSlips.map((s, i) => (
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

/* ─── §4 Process — 4 step cards ─── */
const processSteps = [
  { title: "Paper Diagnosis",   desc: "Past chemistry scripts and class tests show exactly where the working slips.",                              icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Foundation Build",  desc: "Mole, balancing, and bonding basics get firmed up before any new content lands.",                           icon: <BookMarked    className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Reasoning Practice",desc: "Fresh chemistry problems are tackled aloud so thinking becomes visible and correctable.",                    icon: <Brain         className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Exam Simulation",   desc: "Calm, examiner-style answers grow through full timed paper sittings.",                                      icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Our Chemistry Process" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Frustration with chemistry grows for months before grades show. Our four-stage method levels the habits your child needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {processSteps.map((step, i) => (
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

/* ─── §5 Syllabus Coverage — 3+2 topic cards ─── */
const chemTopics = [
  { title: "Physical Chemistry",   boards: "Cambridge IGCSE 0620, Edexcel IGCSE 4CH1, A-Level 9CH0 and 9701",              insight: "Energetics and kinetics fade under timed work. We dial in the calculation routes.",                              icon: <Flame       className="h-6 w-6" strokeWidth={2} />, wm: <Flame       className="h-20 w-20" strokeWidth={1} /> },
  { title: "Inorganic Chemistry",  boards: "AQA 7405, OCR A H432, AP Chemistry, IB Chemistry SL and HL",                   insight: "Trends and transition-metal questions drift off course. We sort the underlying patterns.",                       icon: <Atom        className="h-6 w-6" strokeWidth={2} />, wm: <Atom        className="h-20 w-20" strokeWidth={1} /> },
  { title: "Organic Chemistry",    boards: "Cambridge IGCSE 0620, A-Level 9CH0, AQA 7405, IB Chemistry SL and HL",         insight: "Mechanism arrows and functional groups slip up on paper. We cement the conventions.",                           icon: <Leaf        className="h-6 w-6" strokeWidth={2} />, wm: <Leaf        className="h-20 w-20" strokeWidth={1} /> },
  { title: "Analysis & Practical", boards: "Edexcel A-Level 9CH0, Cambridge A 9701, AP Chemistry, IB HL Option",           insight: "Titrations and spectra readings derail under exam timing. We polish each interpretation.",                       icon: <FlaskConical className="h-6 w-6" strokeWidth={2} />, wm: <FlaskConical className="h-20 w-20" strokeWidth={1} /> },
  { title: "Atomic & Bonding",     boards: "Cambridge IGCSE 0620, Edexcel IGCSE 4CH1, A-Level papers, IB Chemistry SL",    insight: "Bonding diagrams and electron configurations falter. We weave structure into reasoning.",                        icon: <Network     className="h-6 w-6" strokeWidth={2} />, wm: <Network     className="h-20 w-20" strokeWidth={1} /> },
];

function TopicCard({ topic }: { topic: typeof chemTopics[0] }) {
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
            <GradientHeadingText text="Chemistry Syllabus Coverage" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Every cluster matches the marking habits of major boards. Your child's answers stay exam-ready across all four curricula.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {chemTopics.slice(0, 3).map((t, i) => <TopicCard key={i} topic={t} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {chemTopics.slice(3).map((t, i) => <TopicCard key={i + 3} topic={t} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Thinking Skills — 2×2 flat bordered grid ─── */
const thinkingSkills = [
  { title: "Equation Translation",    icon: <Scale         className="h-6 w-6" strokeWidth={2} />, problem: "Stumbles when turning word descriptions into equations",   fix: <>We turn word reactions into balanced equations. See also <a href="/maths" className="text-[#5b3a8a] font-semibold underline">Mathematics</a></> },
  { title: "Mechanism Walkthrough",   icon: <Route         className="h-6 w-6" strokeWidth={2} />, problem: "Hops between arrow stages in mechanisms",                  fix: "We slot each arrow into the mechanism logic" },
  { title: "Product Prediction",      icon: <Lightbulb     className="h-6 w-6" strokeWidth={2} />, problem: "Guesses products from given reagents",                     fix: "We tie predictions to reagent and condition rules" },
  { title: "Structure Interpretation",icon: <Atom          className="h-6 w-6" strokeWidth={2} />, problem: "Misjudges polarity and bonding from formulae",             fix: "We pull structure cues that decide behaviour" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Chemistry Thinking Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Memorised reactions stop helping when a question changes setup. We build the thinking your child uses for unseen work.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {thinkingSkills.slice(0, 2).map((s, i) => (
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
          {thinkingSkills.slice(2).map((s, i) => (
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

/* ─── §7 Paper Skills — 4 gold-icon cards ─── */
const paperSkills = [
  { title: "Lab Write-Up",       icon: <FileText   className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Trims method detail examiners need",                fix: "We layer write-up structure for full marks" },
  { title: "State Symbols",      icon: <Hash       className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Sidesteps state symbols on balanced equations",     fix: "We stitch state symbols into every equation" },
  { title: "Examiner Language",  icon: <AlignLeft  className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Writes answers in everyday phrasing",               fix: "We tune wording to mark scheme keywords" },
  { title: "Equation Layout",    icon: <Layers     className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Squashes equations across crowded margins",         fix: "We arrange equations with clear spacing" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Chemistry Paper Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Examiners reward clear chemistry writing as much as correct thinking. We polish the habits that earn full marks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {paperSkills.map((r, i) => (
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

/* ─── §8 UAE — dark section ─── */
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
          Chemistry Coaching <span className="text-[#C7A24A]">Across the UAE</span>
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
          Chemistry stress eases at home and exam confidence steadies for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 FAQs — accordion ─── */
const chemFAQs = [
  { q: "What does a typical chemistry session look like?",                      a: "Each session opens with a short recap, moves into a current topic with worked questions, then ends with a small practice task set for the week ahead." },
  { q: "Is chemistry tutoring suitable for students who fell behind?",           a: "Yes. Many chemistry students arrive needing earlier topics tidied up first. Tutors rebuild the basics quickly before moving on to harder content." },
  { q: "How do you support lab work and practical write-ups?",                  a: "Lab work is walked through step by step. Tutors cover apparatus, method, observation language, and the write-up style each board credits with marks." },
  { q: "What kind of update do parents get after each chemistry session?",      a: "Parents receive a short note covering the topic taught, the student's progress on it, and one or two practice tasks for the week ahead." },
  { q: "Can the tutor align lessons with the school teacher's plan?",           a: "Yes. The tutor can mirror the school's teaching order if requested, so home tutoring supports rather than competes with what is happening in class." },
  { q: "How do you prepare students for top chemistry grades?",                 a: "Top chemistry grades come from very clean working and a deep grasp of mechanism logic. Tutors build those two together across every session." },
];

function ChemistryFAQs() {
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
              Chemistry{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions Answered</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {chemFAQs.map((faq, i) => {
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

const chemRelatedReading = (
  <section className="py-16 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-2">
          <GradientHeadingText text="Related Reading & Chemistry Guides" />
        </h2>
        <p className="text-gray-600 text-sm lg:text-base">In-depth articles from our Chemistry specialists and academic mentors.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <a href="/blogs/early-signs-chemistry-help-uae" className="group bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full mb-3">Parent Guidance</span>
            <h3 className="text-lg font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-2">Early Signs Your Child Needs Help in Chemistry</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Six signs a chemistry gap is forming long before the formal report card reflects it.</p>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-[#0f4a9b] gap-2">
            <span>Read Article</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
        <a href="/blogs/why-chemistry-fades-from-memory" className="group bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-50 text-[#0f4a9b] text-xs font-bold rounded-full mb-3">Academic & Exam Skills</span>
            <h3 className="text-lg font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-2">Why Students Forget Chemistry So Quickly</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Why chemistry fades from memory, and the visual, spaced habits that make formulas and bonding stick.</p>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-[#0f4a9b] gap-2">
            <span>Read Article</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>
    </div>
  </section>
);

/* ─── Page data ─── */
const data: SubjectPageProps = {
  badgeIcon:        <FlaskConical className="h-4 w-4" />,
  heroBadgeLabel:   "Chemistry Specialist",
  heroTitle:        "Calmer Chemistry. Stronger Grades.",
  heroSubtitle:     "Dedicated chemistry mentoring for IGCSE, A-Level, IB, and AP students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Where chemistry makes sense.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Where Chemistry Slips */

  struggles: [],
  customStrugglesSection,    /* §4 Our Chemistry Process */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Chemistry Syllabus Coverage */

  curricula: [],
  customCurriculaSection,    /* §6 Chemistry Thinking Skills */

  practices: [],
  customPracticesSection,    /* §7 Chemistry Paper Skills */

  results: [],
  customResultsSection: <>{customResultsSection}{chemRelatedReading}</>,      /* §8 UAE dark section + Related Reading */

  faqs: [],
  customFAQsSection: <ChemistryFAQs />, /* §9 Chemistry Questions Answered */

  finalCtaTitle:    "See Where the Marks Vanish",
  finalCtaSubtitle: "When chemistry makes sense in lessons yet not on the page, a short check finds the costly habit.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Where chemistry makes sense.",

  floatingIcon: <FlaskConical className="h-4 w-4" />,
  seo: {
    title: "Chemistry Tutors UAE | IGCSE, A-Level, IB Chemistry | Ustaad",
    description: "Expert private Chemistry tutoring in Dubai & Abu Dhabi. IGCSE, A-Level, IB SL/HL & AP Chemistry. 1-to-1 sessions with proven exam results.",
    canonical: "/chemistry",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Chemistry Tutoring UAE", "1-to-1 Chemistry tutoring for IGCSE, A-Level, and IB students across UAE.", "/chemistry"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Chemistry", url: "/chemistry" }]),
      faqSchema(chemFAQs),
    ],
  },
};

export default function ChemistryPage() {
  return <SubjectPageTemplate {...data} />;
}
