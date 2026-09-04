import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  Gauge, Waves, Zap, Plug, Flame, Atom, Magnet,
  Eye, Layers, Route, Lightbulb, ShieldCheck,
  FileText, Hash, Cpu, Network,
  Search, BookMarked, ClipboardList, ArrowRight,
  HelpCircle, ChevronDown, MessageCircle, MapPin,
  TrendingDown, Award,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Physics Pressure Points        (3-col flat bordered grid)
  Struggles slot → §4 Ustaad Physics Support         (4 step cards)
  Methods   slot → §5 Physics Topics We Support      (3+2 topic cards)
  Curricula slot → §6 Mathematical Problem-Solving   (2×2 flat bordered grid)
  Practices slot → §7 Physics Assessment Skills      (4 gold-icon cards)
  Results   slot → §8 UAE                            (dark bg section)
  FAQs      slot → §9 Physics FAQs                   (accordion)
*/

/* ─── §3 Physics Pressure Points — 3-col flat bordered grid ─── */
const pressurePoints = [
  { title: "Force Resolution",  icon: <Gauge   className="h-5 w-5 text-[#0f4a9b]" />, wm: <Gauge   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Forgets forces in free-body diagrams",              fix: "We restore resolution habits that hold" },
  { title: "Circuit Reading",   icon: <Plug    className="h-5 w-5 text-[#0f4a9b]" />, wm: <Plug    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Confuses symbols in busy circuit diagrams",          fix: "We retrain reading at exam speed" },
  { title: "Motion Signs",      icon: <TrendingDown className="h-5 w-5 text-[#0f4a9b]" />, wm: <TrendingDown className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Loses direction conventions in kinematics work", fix: "We lock sign logic into every calculation" },
  { title: "Energy Conversion", icon: <Zap     className="h-5 w-5 text-[#0f4a9b]" />, wm: <Zap     className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Skips middle steps in conversion chains",             fix: "We map every transfer visibly through stages" },
  { title: "Wave Diagrams",     icon: <Waves   className="h-5 w-5 text-[#0f4a9b]" />, wm: <Waves   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Mislabels wavefronts and rays under timing",          fix: "We coach precise diagram conventions" },
  { title: "Nuclear Notation",  icon: <Atom    className="h-5 w-5 text-[#0f4a9b]" />, wm: <Atom    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Misuses units in nuclear and quantum work",           fix: "We embed unit checks at every step" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Physics Pressure Points" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Your child grasps the concept in class yet drops marks on the paper. We rebuild six scoring habits.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {pressurePoints.map((s, i) => (
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

/* ─── §4 Physics Support — 4 step cards ─── */
const supportSteps = [
  { title: "Past Paper Diagnostic", desc: "We read your child's recent physics scripts to spot exactly where their reasoning slips.",                   icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Foundation Repair",     desc: "We fix early unit handling and algebra gaps so your child's working speeds up.",                             icon: <BookMarked    className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Step-by-Step Training", desc: "Your child learns to break down unseen physics questions and solve them without prompts.",                   icon: <Lightbulb     className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Timed Mock Practice",   desc: "Your child builds calm pace and self-checking through timed mock physics papers.",                           icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Ustaad Physics Support" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Stress shows at home long before the report card changes. Our four steps rebuild the paper habits first.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {supportSteps.map((step, i) => (
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

/* ─── §5 Physics Topics — 3+2 topic cards ─── */
const physicsTopics = [
  { title: "Mechanics & Forces",   boards: "Cambridge IGCSE 0625, Edexcel IGCSE 4PH1, A-Level 9PH0 and 9702",        insight: "Multi-body systems feel crowded under exam pressure. We walk through each calmly.",                     icon: <Gauge  className="h-6 w-6" strokeWidth={2} />, wm: <Gauge  className="h-20 w-20" strokeWidth={1} /> },
  { title: "Electricity & Circuits",boards: "Edexcel A-Level 9PH0, AQA 7408, OCR A H556, AP Physics 1 and 2",        insight: "Kirchhoff's loops confuse under multi-loop pressure. We rewire loop logic.",                           icon: <Plug   className="h-6 w-6" strokeWidth={2} />, wm: <Plug   className="h-20 w-20" strokeWidth={1} /> },
  { title: "Waves & Optics",        boards: "Cambridge IGCSE 0625, IB Physics SL and HL, AP Physics 2",               insight: "Interference and phase questions break setup. We ground each diagram step.",                          icon: <Waves  className="h-6 w-6" strokeWidth={2} />, wm: <Waves  className="h-20 w-20" strokeWidth={1} /> },
  { title: "Thermal & Energy",      boards: "A-Level 9PH0 thermal sections, AP Physics C, IB Physics HL",             insight: "Energy accounting wobbles across processes. We plot each state shift visibly.",                       icon: <Flame  className="h-6 w-6" strokeWidth={2} />, wm: <Flame  className="h-20 w-20" strokeWidth={1} /> },
  { title: "Nuclear & Quantum",     boards: "Cambridge A-Level 9702, IB HL Option, AP Physics C",                     insight: "Wave-particle questions blur under unfamiliar notation. We strengthen symbol-mapping habits.",         icon: <Atom   className="h-6 w-6" strokeWidth={2} />, wm: <Atom   className="h-20 w-20" strokeWidth={1} /> },
];

function TopicCard({ topic }: { topic: typeof physicsTopics[0] }) {
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
            <GradientHeadingText text="Physics Topics We Support" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Every topic matches the marking style of major boards. Your child's working stays accurate across each curriculum pathway.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {physicsTopics.slice(0, 3).map((t, i) => <TopicCard key={i} topic={t} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {physicsTopics.slice(3).map((t, i) => <TopicCard key={i + 3} topic={t} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Mathematical Problem-Solving Skills — 2×2 flat bordered grid ─── */
const problemSkills = [
  { title: "Question Decoding",  icon: <Search     className="h-6 w-6" strokeWidth={2} />, problem: "Misses what the question actually asks",           fix: "We prime careful reading of each line" },
  { title: "Variable Setup",     icon: <Layers     className="h-6 w-6" strokeWidth={2} />, problem: "Starts solving before listing the knowns",         fix: <>We frame setup notes before any calculation. See also <a href="/maths" className="text-[#5b3a8a] font-semibold underline">Mathematics</a></> },
  { title: "Calculation Pathing",icon: <Route      className="h-6 w-6" strokeWidth={2} />, problem: "Tries random formulas under pressure",              fix: "We chart planned routes through every question" },
  { title: "Sanity Checking",    icon: <ShieldCheck className="h-6 w-6" strokeWidth={2} />, problem: "Submits answers without checking they make sense", fix: "We secure quick checks that catch wild results" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Mathematical Problem-Solving Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Memorised formulas collapse when a question changes setup. We develop the thinking your child needs for unseen physics.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {problemSkills.slice(0, 2).map((s, i) => (
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
          {problemSkills.slice(2).map((s, i) => (
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

/* ─── §7 Physics Assessment Skills — 4 gold-icon cards ─── */
const assessmentSkills = [
  { title: "Working Marks",        icon: <FileText    className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Skips intermediate steps the examiner credits",      fix: "We retrain writing for each available mark" },
  { title: "Diagram Clarity",      icon: <Eye         className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Draws diagrams too small to label cleanly",          fix: "We coach scale and labelling discipline" },
  { title: "Figure Precision",     icon: <Hash        className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Rounds inconsistently across one question",          fix: "We install rounding discipline through every step" },
  { title: "Calculator Discipline",icon: <Cpu         className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Leans on the calculator and skips written work",     fix: "We restore the full written method" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Physics Assessment Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Marks are won on clean presentation, not just knowledge. We coach the habits examiners reward across all boards.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {assessmentSkills.map((r, i) => (
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
          Physics Students <span className="text-[#C7A24A]">Across the UAE</span>
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
          Diagram and calculation stress eases at home as exam confidence steadies for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 FAQs — accordion ─── */
const physicsFAQs = [
  { q: "How do you teach physics so it actually clicks for students?",    a: "Physics makes sense when each idea is taught alongside a diagram, a real example, and a worked exam question. We use that exact pattern every session." },
  { q: "How do tutors handle both theory and calculation in physics?",    a: "Most students lean to one side, either theory or calculation. Tutors balance both at each session so neither side gets weaker, and exam answers stay clean from setup through to conclusion." },
  { q: "How do you help students who freeze in physics exams?",           a: "Exam freeze in physics usually links to past papers. We work through real questions in low-pressure settings until the format feels familiar." },
  { q: "Do tutors prepare students for tough exam-day pressure?",         a: "Yes. Exam-day routines, timed practice, and simple breathing techniques become part of the lead-up to every major paper." },
  { q: "Do tutors give short physics tasks between lessons?",             a: "Yes. Short practice tasks are set between lessons so new habits become routine before the next session begins." },
  { q: "How do you adapt physics tutoring for advanced students?",        a: "Advanced students get harder past papers, stretching synoptic questions, and exam-board specific A-star essays for the longer answers." },
];

function PhysicsFAQs() {
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
              Physics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">FAQs Answered</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {physicsFAQs.map((faq, i) => {
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

const physicsRelatedReading = (
  <section className="py-16 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-2">
          <GradientHeadingText text="Related Reading & Physics Guides" />
        </h2>
        <p className="text-gray-600 text-sm lg:text-base">In-depth articles from our Physics specialists and academic mentors.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <a href="/blogs/igcse-physics-formulas-exam" className="group bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-50 text-[#0f4a9b] text-xs font-bold rounded-full mb-3">Physics Revision</span>
            <h3 className="text-lg font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-2">Why IGCSE Physics Formulas Stop Working in Exams</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Students memorise every formula and still freeze—the fix is reading command words and drawing first.</p>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-[#0f4a9b] gap-2">
            <span>Read Article</span>
          </div>
        </a>
        <a href="/blogs/physics-understanding-vs-marks" className="group bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full mb-3">Psychology of Learning</span>
            <h3 className="text-lg font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-2">Your Child Understands Physics. So Why Are Marks Still Low?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">The gap between understanding and exam performance: retrieval, working memory overload, and nerves.</p>
          </div>
          <div className="mt-4 flex items-center text-sm font-bold text-[#0f4a9b] gap-2">
            <span>Read Article</span>
          </div>
        </a>
      </div>
    </div>
  </section>
);

/* ─── Page data ─── */
const data: SubjectPageProps = {
  badgeIcon:        <Atom className="h-4 w-4" />,
  heroBadgeLabel:   "Physics Specialist",
  heroTitle:        "Clear Physics. Real Marks.",
  heroSubtitle:     "Specialist physics coaching for IGCSE, A-Level, IB, and AP students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Physics that finally clicks.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Physics Pressure Points */

  struggles: [],
  customStrugglesSection,    /* §4 Ustaad Physics Support */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Physics Topics We Support */

  curricula: [],
  customCurriculaSection,    /* §6 Mathematical Problem-Solving Skills */

  practices: [],
  customPracticesSection,    /* §7 Physics Assessment Skills */

  results: [],
  customResultsSection: <>{customResultsSection}{physicsRelatedReading}</>,      /* §8 UAE dark section + Related Reading */

  faqs: [],
  customFAQsSection: <PhysicsFAQs />, /* §9 Physics FAQs */

  finalCtaTitle:    "Pinpoint the Concepts Holding Results Back",
  finalCtaSubtitle: "When classroom physics does not land on the timed paper, a short check finds the habit costing marks.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Physics that finally clicks.",

  floatingIcon: <Atom className="h-4 w-4" />,
  seo: {
    title: "Physics Tutors UAE | IGCSE, A-Level, IB Physics | Ustaad",
    description: "Expert private Physics tutoring in Dubai, Abu Dhabi & UAE. IGCSE, A-Level, IB SL/HL, AP Physics. 1-to-1 sessions with proven exam results. Book a free trial.",
    canonical: "/physics",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Physics Tutoring UAE", "1-to-1 Physics tutoring for IGCSE, A-Level, and IB students across UAE.", "/physics"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Physics", url: "/physics" }]),
      faqSchema(physicsFAQs),
    ],
  },
};

export default function PhysicsPage() {
  return <SubjectPageTemplate {...data} />;
}
