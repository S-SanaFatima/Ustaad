import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  Wrench, Cog, Zap, Calculator, PenTool, Layers,
  Eye, Scale, Target, FileText, ClipboardList,
  Search, BookOpen, CheckCircle, AlignLeft, Settings,
  HelpCircle, ChevronDown, MessageCircle, MapPin,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Common Engineering Stumbles    (3-col flat bordered grid — Finance style)
  Struggles slot → §4 Our Engineering Build-Up       (4 step cards — Finance style)
  Methods   slot → §5 Engineering Subjects We Support (3+2 topic cards — Finance style)
  Curricula slot → §6 Engineering Problem Skills     (2×2 flat bordered grid — Finance style)
  Practices slot → §7 Engineering Report Skills      (4 gold-icon cards — Finance style)
  Results   slot → §8 UAE                            (dark bg section — Finance style)
  FAQs      slot → §9 Parent Queries on Engineering  (accordion — Finance style)
*/

/* ─── §3 Common Engineering Stumbles — 3-col flat bordered grid ─── */
const stumbles = [
  { title: "Diagram Reading",       icon: <Eye         className="h-5 w-5 text-[#0f4a9b]" />, wm: <Eye         className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Half-reads engineering diagrams under time pressure",       fix: "We study diagram reading line by line" },
  { title: "Unit Conversion",       icon: <Scale       className="h-5 w-5 text-[#0f4a9b]" />, wm: <Scale       className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Crosses SI and Imperial units in calculations",              fix: "We standardise units before any calculation begins" },
  { title: "Calculation Chains",    icon: <Layers      className="h-5 w-5 text-[#0f4a9b]" />, wm: <Layers      className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Glides past intermediate steps in calculations",             fix: "We engineer each step in the chain" },
  { title: "Tolerance Handling",    icon: <Target      className="h-5 w-5 text-[#0f4a9b]" />, wm: <Target      className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Overrides plus-minus tolerances in measurements",            fix: "We respect every plus-minus tolerance carefully" },
  { title: "Specification Reading", icon: <FileText    className="h-5 w-5 text-[#0f4a9b]" />, wm: <FileText    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Sprints past important specification details quickly",        fix: "We examine specifications line by line carefully" },
  { title: "Report Writing",        icon: <ClipboardList className="h-5 w-5 text-[#0f4a9b]" />, wm: <ClipboardList className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Compiles engineering reports without proper headings", fix: "We format every engineering report with clear headings" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Common Engineering Stumbles" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Engineering working often feels solid yet still drops marks on the paper. We focus on six common slips.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {stumbles.map((s, i) => (
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

/* ─── §4 Our Engineering Build-Up — 4 step cards ─── */
const buildSteps = [
  { title: "Working Audit",   desc: "Recent engineering scripts and class work show where the working slips first.",                            icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Skills Reset",    desc: "Diagram, unit, and calculation basics get reset before harder topics return.",                             icon: <BookOpen      className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Practice Block",  desc: "Real engineering problems are worked through together so weak steps surface early.",                       icon: <PenTool       className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Mock Paper Sit",  desc: "Full past papers are completed under timed conditions across each term.",                                  icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Our Engineering Build-Up" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Engineering struggles grow at home before grades show them. Our four steps build the working habits needed.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {buildSteps.map((step, i) => (
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

/* ─── §5 Engineering Subjects We Support — 3+2 topic cards ─── */
type EngTopic = { title: string; boards: React.ReactNode; insight: string; icon: React.ReactNode; wm: React.ReactNode };

const engTopics: EngTopic[] = [
  {
    title: "Mechanical Engineering",
    boards: "Cambridge International Engineering Diploma, BTEC Engineering Mechanical",
    insight: "Mechanism and force questions stay shallow. We shore up answers with applied examples.",
    icon: <Cog       className="h-6 w-6" strokeWidth={2} />,
    wm:   <Cog       className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Electrical & Electronic Engineering",
    boards: "BTEC Engineering Electrical, A-Level Electronics 7368",
    insight: "Circuit and signal problems trip on multiple parts. We diagram each circuit step by step.",
    icon: <Zap       className="h-6 w-6" strokeWidth={2} />,
    wm:   <Zap       className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Civil & Structural Engineering",
    boards: (<>Cambridge International <a href="/a-level" className="underline text-[#0f4a9b] hover:text-[#0a3a79]">A-Level</a> Engineering, BTEC Construction</>),
    insight: "Load and beam calculations crumble under pressure. We illustrate each load distribution clearly.",
    icon: <Layers    className="h-6 w-6" strokeWidth={2} />,
    wm:   <Layers    className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Engineering Mathematics",
    boards: (<>Cambridge International A-Level Engineering <a href="/maths" className="underline text-[#0f4a9b] hover:text-[#0a3a79]">Mathematics</a>, BTEC Higher National</>),
    insight: "Differentials and integrals overlap with applied physics. We apply each method to its real use.",
    icon: <Calculator className="h-6 w-6" strokeWidth={2} />,
    wm:   <Calculator className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Engineering Drawing & CAD",
    boards: "BTEC Engineering Drawing, A-Level Design Technology 7552",
    insight: "CAD and isometric drawings lose detail under timing. We bake precision into every drawing.",
    icon: <PenTool   className="h-6 w-6" strokeWidth={2} />,
    wm:   <PenTool   className="h-20 w-20" strokeWidth={1} />,
  },
];

function EngTopicCard({ topic }: { topic: EngTopic }) {
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
            <GradientHeadingText text="Engineering Subjects We Support" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Every area matches how major boards mark engineering work. Your child's drawings stay exam-ready across each pathway.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {engTopics.slice(0, 3).map((t, i) => <EngTopicCard key={i} topic={t} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {engTopics.slice(3).map((t, i) => <EngTopicCard key={i + 3} topic={t} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Engineering Problem Skills — 2×2 flat bordered grid ─── */
const problemSkills = [
  { title: "Question Reading",   icon: <Eye         className="h-6 w-6" strokeWidth={2} />, problem: "Eyeballs engineering question stems quickly",                fix: "We size up every engineering question stem carefully" },
  { title: "Variable Setup",     icon: <Settings    className="h-6 w-6" strokeWidth={2} />, problem: "Blurs given and unknown variables in working",              fix: "We jot given and unknown clearly first" },
  { title: "Calculation Method", icon: <Calculator  className="h-6 w-6" strokeWidth={2} />, problem: "Reaches for the wrong method for the problem",              fix: "We debate method choice with each problem" },
  { title: "Result Verification",icon: <CheckCircle className="h-6 w-6" strokeWidth={2} />, problem: "Forwards answers without back-checking the working",        fix: "We back-check every answer against the question" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Engineering Problem Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Real engineering questions need careful reading, clear setup, and clean checking. We build the thinking habits your child needs.
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

/* ─── §7 Engineering Report Skills — 4 gold-icon cards ─── */
const reportSkills = [
  { title: "Drawing Standards",   icon: <PenTool      className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Hand-draws diagrams without using standard symbols",     fix: "We render standard symbols into every drawing" },
  { title: "Calculation Layout",  icon: <AlignLeft    className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Bunches calculations into cramped margins",               fix: "We grant each calculation its own clear space" },
  { title: "Units & Annotation",  icon: <FileText     className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Lapses on units halfway through long working",            fix: "We hold units through every step" },
  { title: "Report Structure",    icon: <ClipboardList className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Issues engineering reports without sections",            fix: "We construct every report with clear sections and signposts" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Engineering Report Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Examiners look for tidy diagrams, clean working, correct units, and clear sections. We coach the habits that earn marks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reportSkills.map((r, i) => (
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
  { name: "Dubai",          desc: "Largest city • All areas",  icon: <MapPin className="h-4 w-4" /> },
  { name: "Sharjah",        desc: "Growing family community",  icon: <MapPin className="h-4 w-4" /> },
  { name: "Ajman",          desc: "Northern Emirates",         icon: <MapPin className="h-4 w-4" /> },
  { name: "Al Ain",         desc: "Capital region",            icon: <MapPin className="h-4 w-4" /> },
  { name: "Ras Al Khaimah", desc: "Northern coast",            icon: <MapPin className="h-4 w-4" /> },
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
          Engineering Workshops <span className="text-[#C7A24A]">Across the UAE</span>
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
          Engineering stress eases at home and working confidence steadies for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 Parent Queries on Engineering — accordion ─── */
const engFAQs = [
  { q: "How does engineering tutoring differ from a standard physics or maths class?",         a: "Engineering blends physics, maths, and design judgement. Tutors connect those three at every session so the student sees how each topic fits into one applied subject." },
  { q: "Can my child start engineering tutoring without prior workshop experience?",            a: "Yes. Many students start without practical workshop work. Tutors rebuild the basics through clear worked examples and applied questions before any project work begins." },
  { q: "How do you support students working on engineering projects or coursework?",            a: "Project work is planned and reviewed step by step. Tutors give feedback on each draft until it meets the examiner brief and shows the right working depth." },
  { q: "Do tutors cover CAD and technical drawing skills?",                                    a: "Yes. CAD basics, isometric drawing, and orthographic projection are covered with clear standards and examples ready for paper and screen work." },
  { q: "How do you help students who struggle with calculation-heavy questions?",              a: "Calculation-heavy questions need clean setup, careful unit handling, and step-by-step working. Tutors slow that working down until every step feels obvious every time." },
  { q: "How will parents see real progress in engineering work?",                              a: "Cleaner working, neater diagrams, and stronger reports usually appear first. Parents notice the shift well before the next school assessment arrives." },
];

function EngineeringFAQs() {
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
              Parent Queries on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Engineering</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Straight answers to the questions families ask most.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {engFAQs.map((faq, i) => {
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
  badgeIcon:        <Wrench className="h-4 w-4" />,
  heroBadgeLabel:   "Engineering Specialist",
  heroTitle:        "Detailed Engineering. Clean Drawings.",
  heroSubtitle:     "Project-based engineering tutoring for IGCSE, A-Level, BTEC, and foundation students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Engineering that simply works.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,

  struggles: [],
  customStrugglesSection,

  methods: [], softCtaHeading: "",
  customMethodsSection,

  curricula: [],
  customCurriculaSection,

  practices: [],
  customPracticesSection,

  results: [],
  customResultsSection,

  faqs: [],
  customFAQsSection: <EngineeringFAQs />,

  finalCtaTitle:    "Uncover the Engineering Habit Gap",
  finalCtaSubtitle: "When engineering revision feels solid yet exam marks stall, a short check finds the habit costing each mark.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Engineering that simply works.",

  floatingIcon: <Wrench className="h-4 w-4" />,
  seo: {
    title: "Engineering Tutors UAE | A-Level & University | Ustaad",
    description: "Expert private Engineering tutoring in Dubai & Abu Dhabi. IGCSE, A-Level & BTEC. Mechanical, electrical, civil & drawing support.",
    canonical: "/engineering",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Engineering Tutoring UAE", "1-to-1 Engineering tutoring for IGCSE, A-Level, and BTEC students across UAE.", "/engineering"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Engineering", url: "/engineering" }]),
      faqSchema(engFAQs),
    ],
  },
};

export default function EngineeringPage() {
  return <SubjectPageTemplate {...data} />;
}
