import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  BookOpen, Eye, PenTool, BookMarked, FileText, Clock,
  MessageCircle, Layers, Compass, BarChart3, Award,
  TrendingUp, Network, GraduationCap, Globe, Flag,
  CheckCircle, GitBranch, MessageSquare,
  Search, AlignLeft, ClipboardList,
  HelpCircle, ChevronDown, MapPin,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Where Essays Stumble          (3-col flat bordered grid)
  Struggles slot → §4 Our English Programme         (4 step cards)
  Methods   slot → §5 English Specifications        (3+2 topic cards)
  Curricula slot → §6 Literary Analysis Skills      (2×2 flat bordered grid)
  Practices slot → §7 Academic Writing + §8 Examiner Cues (two rows of 4 gold cards)
  Results   slot → §9 UAE                           (dark bg section)
  FAQs      slot → §10 Parents Ask About English    (accordion)
*/

/* ─── §3 Where Essays Stumble — 3-col flat bordered grid ─── */
const essayStumbles = [
  { title: "Quote Integration",        icon: <MessageSquare className="h-5 w-5 text-[#0f4a9b]" />, wm: <MessageSquare className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Tacks quotes on without context",               fix: "We weld quotes into each argument cleanly" },
  { title: "Topic Sentence Drift",     icon: <Compass       className="h-5 w-5 text-[#0f4a9b]" />, wm: <Compass       className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Wanders off the thesis mid-paragraph",          fix: "We redirect each paragraph back to the thesis" },
  { title: "AO1 vs AO2 Imbalance",    icon: <BarChart3     className="h-5 w-5 text-[#0f4a9b]" />, wm: <BarChart3     className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Skews effort toward summary over analysis",     fix: "We calibrate effort across each assessment objective" },
  { title: "Context Crowding",         icon: <Layers        className="h-5 w-5 text-[#0f4a9b]" />, wm: <Layers        className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Crowds context where it does not fit",           fix: "We edit context into purposeful single lines" },
  { title: "Comparative Essay Collapse",icon: <GitBranch    className="h-5 w-5 text-[#0f4a9b]" />, wm: <GitBranch    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Defaults to two summaries side by side",         fix: "We bridge comparisons through shared analytical points" },
  { title: "Unseen Extract Panic",     icon: <Eye           className="h-5 w-5 text-[#0f4a9b]" />, wm: <Eye           className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Freezes when faced with unseen extracts",        fix: "We model unseen extract analysis step by step" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Where Essays Stumble" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Reading confidence does not always turn into writing confidence on paper. We focus on six places essays lose marks.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {essayStumbles.map((s, i) => (
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

/* ─── §4 Our English Programme — 4 step cards ─── */
const programmeSteps = [
  { title: "Essay Audit",          desc: "Recent essay drafts and class feedback show where reasoning and structure quietly drop marks.",                              icon: <Search      className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Foundation Reset",     desc: "Sentence accuracy, paragraph shape, and quotation handling get firmed up before complex texts come back.",                  icon: <BookMarked  className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Live Writing",         desc: "Fresh essay prompts are planned and drafted aloud so weak habits surface and get corrected on the spot.",                   icon: <PenTool     className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Timed Essay Sittings", desc: "Calm, exam-ready writing builds through complete timed paper sittings under exam pressure.",                                icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Our English Programme" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          English struggles show at home before the report card shows them. Our four steps repair the writing habits first.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {programmeSteps.map((step, i) => (
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

/* ─── §5 English Specifications — 3+2 topic cards ─── */
const englishSpecs = [
  {
    title: "English Language",
    boards: <>Cambridge <a href="/igcse" className="text-[#5b3a8a] font-semibold underline">IGCSE</a> 0500 and 0990, AQA <a href="/gcse" className="text-[#5b3a8a] font-semibold underline">GCSE</a> 8700, Edexcel IGCSE 4EA1</>,
    boardsPlain: "Cambridge IGCSE 0500 and 0990, AQA GCSE 8700, Edexcel IGCSE 4EA1",
    insight: "Descriptive and persuasive tasks wander under timing. We focus each paragraph on one purpose.",
    icon: <FileText  className="h-6 w-6" strokeWidth={2} />, wm: <FileText  className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "English Literature",
    boards: <>Cambridge IGCSE 0475 and 0992, AQA GCSE 8702, Edexcel IGCSE 4ET1</>,
    boardsPlain: "Cambridge IGCSE 0475 and 0992, AQA GCSE 8702, Edexcel IGCSE 4ET1",
    insight: "Theme questions fragment into plot summary. We narrow each answer to one analytical thread.",
    icon: <BookOpen  className="h-6 w-6" strokeWidth={2} />, wm: <BookOpen  className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "A-Level English",
    boards: <>Edexcel <a href="/a-level" className="text-[#5b3a8a] font-semibold underline">A-Level English</a> 9ET0, AQA A-Level 7717, OCR English specifications</>,
    boardsPlain: "Edexcel A-Level 9ET0, AQA A-Level 7717, OCR English specifications",
    insight: "Comparative essays lose shape under multi-text questions. We show paired-text structure carefully.",
    icon: <GraduationCap className="h-6 w-6" strokeWidth={2} />, wm: <GraduationCap className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "IB English A",
    boards: <><a href="/dp-sl" className="text-[#5b3a8a] font-semibold underline">IB Diploma Programme</a>: English Literature SL and HL, English Language and Literature SL and HL</>,
    boardsPlain: "IB English Literature SL and HL, IB English Language and Literature SL and HL",
    insight: "Unseen commentaries thin under twenty-minute pressure. We pace planning before writing begins.",
    icon: <Globe     className="h-6 w-6" strokeWidth={2} />, wm: <Globe     className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "AP English",
    boards: <><a href="/ap" className="text-[#5b3a8a] font-semibold underline">AP English</a> Language and Composition, AP English Literature and Composition</>,
    boardsPlain: "AP English Language and Composition, AP English Literature and Composition",
    insight: "Synthesis essays stray across sources. We sequence each source for one tight argument.",
    icon: <Award     className="h-6 w-6" strokeWidth={2} />, wm: <Award     className="h-20 w-20" strokeWidth={1} />,
  },
];

function SpecCard({ spec }: { spec: typeof englishSpecs[0] }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition duration-300 overflow-hidden">
      <div className="w-14 h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-3">
        <span className="text-[#0f4a9b]">{spec.icon}</span>
      </div>
      <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">{spec.title}</h3>
      <p className="text-gray-500 text-sm leading-snug mb-2 md:min-h-[48px]">{spec.boards}</p>
      <p className="text-gray-600 text-sm leading-snug font-medium md:min-h-[48px]">{spec.insight}</p>
      <div className="absolute bottom-4 right-4 pointer-events-none select-none text-[#0f4a9b]/[0.08]">{spec.wm}</div>
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
            <GradientHeadingText text="English Specifications Covered" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Each specification follows a distinct examiner mark scheme. Your child's writing stays exam-ready across all four curricula.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {englishSpecs.slice(0, 3).map((s, i) => <SpecCard key={i} spec={s} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {englishSpecs.slice(3).map((s, i) => <SpecCard key={i + 3} spec={s} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Literary Analysis Skills — 2×2 flat bordered grid ─── */
const analysisSkills = [
  { title: "Quote Selection",      icon: <MessageSquare className="h-6 w-6" strokeWidth={2} />, problem: "Chooses quotes that fit feeling not argument",         fix: "We weigh each quote against the argument" },
  { title: "Thematic Threads",     icon: <Network       className="h-6 w-6" strokeWidth={2} />, problem: "Spots themes without following them through",          fix: "We link each theme through the whole text" },
  { title: "Comparative Structure",icon: <GitBranch     className="h-6 w-6" strokeWidth={2} />, problem: "Splits comparison into two separate summaries",        fix: "We balance comparisons around shared analytical points" },
  { title: "Context Placement",    icon: <Layers        className="h-6 w-6" strokeWidth={2} />, problem: "Uses context as filler rather than evidence",          fix: "We position context to strengthen each point" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Literary Analysis Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Reading the text is one habit. Writing analysis the examiner credits is a separate skill we build carefully.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {analysisSkills.slice(0, 2).map((s, i) => (
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
          {analysisSkills.slice(2).map((s, i) => (
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

/* ─── §7 Academic Writing Skills + §8 English Examiner Cues — combined gold cards ─── */
const writingSkills = [
  { title: "Topic Sentences",     icon: <AlignLeft   className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Begins paragraphs without naming the argument",     fix: "We open each paragraph on a clear argument" },
  { title: "Evidence Integration",icon: <CheckCircle className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Inserts quotations without explaining their role",    fix: "We bind evidence to the analytical claim" },
  { title: "Argument Flow",       icon: <TrendingUp  className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Leaps between points without signposting",           fix: "We signpost transitions across the essay" },
  { title: "Closing Logic",       icon: <Flag        className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Restates opening without earning the answer",        fix: "We close on the argument the essay earned" },
];

const examinerCues = [
  { title: "AO Allocation",         icon: <BarChart3     className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Spends most effort on AO1 description",             fix: "We distribute effort across each assessment objective" },
  { title: "Task Decoding",         icon: <Compass       className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Treats every prompt as the same task",              fix: "We match command words to precise response styles" },
  { title: "Timing Distribution",   icon: <Clock         className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Stays too long on the first response",             fix: "We time planning, writing, and review separately" },
  { title: "Writing Mechanics",     icon: <PenTool       className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Risks marks with weak punctuation and spelling",   fix: "We tighten sentence accuracy through quick edits" },
];

function GoldCard({ card }: { card: typeof writingSkills[0] }) {
  return (
    <div className="bg-white border border-[#0f4a9b]/10 rounded-[24px] p-6 md:p-8 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300">
      <div className="w-14 h-14 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_20px_rgba(199,162,74,0.4)] mb-3">{card.icon}</div>
      <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">{card.title}</h3>
      <ul className="text-gray-500 text-sm font-medium space-y-1">
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" /><span className="block">{card.problem}</span></li>
        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" /><span className="block">{card.fix}</span></li>
      </ul>
    </div>
  );
}

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Academic Writing Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Most students think clearly about a text. Shaping that thinking into a mark-earning paragraph is the harder skill.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
        {writingSkills.map((c, i) => <GoldCard key={i} card={c} />)}
      </div>

      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="English Examiner Cues" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Examiners reward structure, signposts, and writing habits in each paper. Spotting cues turns a reader into a writer.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {examinerCues.map((c, i) => <GoldCard key={i} card={c} />)}
      </div>
    </div>
  </section>
);

/* ─── §9 UAE — dark section ─── */
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
          English Lessons <span className="text-[#C7A24A]">Across the UAE</span>
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
          English worry settles at home and exam confidence rises for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §10 FAQs — accordion ─── */
const englishFAQs = [
  { q: "How do you teach essay writing without making it sound forced?",              a: "Essay writing is taught through your child's own ideas, then shaped into examiner-ready paragraphs. Tutors guide the structure without replacing the student's voice." },
  { q: "Is English tutoring useful for students who already write fairly well?",      a: "Yes. Strong writers often plateau because they are not writing for the exact mark scheme. We close that gap so the writing converts into top bands." },
  { q: "How do you help students preparing for unseen text questions?",               a: "Unseen text questions need a fast reading routine and a clear method. We practise both with past papers until the unseen feels familiar." },
  { q: "How does the tutor review essays the student writes between lessons?",        a: "The tutor marks every essay against the exact mark scheme, then talks through the feedback in the next session so your child sees exactly where marks were lost or gained." },
  { q: "Do tutors set short writing tasks between lessons?",                          a: "Yes. Short writing tasks keep the habits fresh and give the tutor real work to review in the next session." },
  { q: "How do you tailor English tutoring to different exam boards?",                a: "The tutor is matched to your child's exact board (Cambridge, Edexcel, AQA, OCR, IB English A, AP English) so the style and mark scheme always fit." },
];

function EnglishFAQs() {
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
              English{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">FAQs Answered</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {englishFAQs.map((faq, i) => {
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
  badgeIcon:        <BookOpen className="h-4 w-4" />,
  heroBadgeLabel:   "English Specialist",
  heroTitle:        "Crisp Writing. Higher Bands.",
  heroSubtitle:     "Focused English instruction for IGCSE, A-Level, IB, and AP students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "English without the guesswork.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Where Essays Stumble */

  struggles: [],
  customStrugglesSection,    /* §4 Our English Programme */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 English Specifications Covered */

  curricula: [],
  customCurriculaSection,    /* §6 Literary Analysis Skills */

  practices: [],
  customPracticesSection,    /* §7 Academic Writing Skills + §8 Examiner Cues */

  results: [],
  customResultsSection,      /* §9 UAE dark section */

  faqs: [],
  customFAQsSection: <EnglishFAQs />, /* §10 Parents Ask About English */

  finalCtaTitle:    "Diagnose the Habit Limiting Bands",
  finalCtaSubtitle: "When essays sound good aloud yet feedback says band 5, more essays alone will not move the grade.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "English without the guesswork.",

  floatingIcon: <BookOpen className="h-4 w-4" />,
  seo: {
    title: "English Tutors UAE | IGCSE, A-Level, IB English | Ustaad",
    description: "Expert private English tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB English Language & Literature, AP English. 1-to-1 sessions, proven results.",
    canonical: "/english",
    schema: [
      localBusinessSchema,
      serviceSchema("Private English Tutoring UAE", "1-to-1 English Language and Literature tutoring for IGCSE, A-Level, IB, and AP students across UAE.", "/english"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "English", url: "/english" }]),
      faqSchema(englishFAQs),
    ],
  },
};

export default function EnglishPage() {
  return <SubjectPageTemplate {...data} />;
}
