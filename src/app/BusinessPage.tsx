import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  Briefcase, Megaphone, Settings, DollarSign, Users, Globe,
  BookOpen, BarChart2, TrendingUp, AlignLeft, Award, CheckSquare, BarChart3,
  Search, ClipboardList, PenTool, BookMarked,
  HelpCircle, ChevronDown, MessageCircle, MapPin,
  Hash, Scale, Lightbulb,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Sticky Points   (3-col flat bordered grid — Maths "Challenges" style)
  Struggles slot → §4 Plan            (4 step cards — Maths "Support Steps" style)
  Methods   slot → §5 Topics          (3+2 topic cards — Maths "Topics" style)
  Curricula slot → §6 Decision Skills (2×2 flat bordered grid — Maths "Problem-Solving" style)
  Practices slot → §7 Answer Habits   (4 gold-icon cards — Maths "Assessment Skills" style)
  Results   slot → §8 UAE             (dark bg section — Maths "Results/UAE" style)
  FAQs      slot → §9 Parents Ask     (accordion — Maths "FAQSection" style)
*/

/* ─── §3 Sticky Points — 3-col flat bordered challenge grid ─── */
const stickyPoints = [
  { title: "Definition Gaps",          icon: <BookOpen    className="h-5 w-5 text-[#0f4a9b]" />, wm: <BookOpen    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Blanks on key business terms during answers",      fix: "We lay down key terms before papers" },
  { title: "Case Context Misuse",      icon: <AlignLeft   className="h-5 w-5 text-[#0f4a9b]" />, wm: <AlignLeft   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Bypasses case details when writing answers",       fix: "We bring the case into every answer" },
  { title: "Numerical Interpretation", icon: <BarChart2   className="h-5 w-5 text-[#0f4a9b]" />, wm: <BarChart2   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Misinterprets ratios and figures in case data",     fix: "We work through every figure step-by-step" },
  { title: "Evaluation Depth",         icon: <TrendingUp  className="h-5 w-5 text-[#0f4a9b]" />, wm: <TrendingUp  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Halts at analysis without reaching evaluation",    fix: "We lift answers past analysis into evaluation" },
  { title: "Command Verbs",            icon: <CheckSquare className="h-5 w-5 text-[#0f4a9b]" />, wm: <CheckSquare className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Mistakes 'discuss' for 'describe' in answers",   fix: "We explain each command verb before writing" },
  { title: "Real-World Examples",      icon: <Globe       className="h-5 w-5 text-[#0f4a9b]" />, wm: <Globe       className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Skimps on real company examples in answers",      fix: "We stock real examples for each topic" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Business Studies Sticky Points" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Business answers often sound right at home yet still lose marks on the paper. We focus on the six places where business marks quietly slip away.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {stickyPoints.map((s, i) => (
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

/* ─── §4 Plan — 4 step cards (Maths "Support Steps" style) ─── */
const planSteps = [
  { title: "Past Paper Check",     desc: "Recent papers show where business answers lose marks first.",                              icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Concept Build-Up",     desc: "Definitions, formulas, and key models are reset before harder topics return.",             icon: <BookMarked    className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Case Practice",        desc: "Real case studies are tackled in session to build evaluation depth.",                      icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Timed Paper Practice", desc: "Complete past papers are sat to the clock under exam-style pressure.",                     icon: <PenTool       className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Our Business Studies Plan" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Business worry rarely shows on the report card before parents notice essays getting shorter at home. Our four steps fix the habits your child needs before the next paper.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {planSteps.map((step, i) => (
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

/* ─── §5 Topics — 3+2 topic cards (Maths "Topics" style) ─── */
const bizTopics = [
  { title: "Marketing & Branding",    boards: "Cambridge IGCSE 0450 & 0986 · Edexcel IGCSE 4BS1",                   insight: "Branding and segmentation answers lose depth. We bring real campaigns to every example.",           icon: <Megaphone   className="h-6 w-6" strokeWidth={2} />, wm: <Megaphone   className="h-20 w-20" strokeWidth={1} /> },
  { title: "Operations Management",   boards: "Edexcel A-Level 9BS0 · AQA A-Level 7132 · Cambridge A 9609",         insight: "Quality and supply chain answers stay vague. We connect each model to a real example.",            icon: <Settings    className="h-6 w-6" strokeWidth={2} />, wm: <Settings    className="h-20 w-20" strokeWidth={1} /> },
  { title: "Human Resources",         boards: "IB Business Management SL & HL · AQA 7132",                          insight: "Motivation theories sound generic in answers. We attach each theorist to one example.",           icon: <Users       className="h-6 w-6" strokeWidth={2} />, wm: <Users       className="h-20 w-20" strokeWidth={1} /> },
  { title: "Finance for Business",    boards: "Cambridge IGCSE 0450 · IB Business Management SL/HL · AQA 7132",     insight: "Cash flow versus profit confuses students. We separate the two with simple visuals.",              icon: <DollarSign  className="h-6 w-6" strokeWidth={2} />, wm: <DollarSign  className="h-20 w-20" strokeWidth={1} /> },
  { title: "External Environment",    boards: "AQA A-Level 7132 · Edexcel A-Level 9BS0 · Cambridge A 9609",         insight: "PEST and SWOT answers stay thin. We deepen each environmental factor with detail.",               icon: <Globe       className="h-6 w-6" strokeWidth={2} />, wm: <Globe       className="h-20 w-20" strokeWidth={1} /> },
];

function TopicCard({ topic }: { topic: typeof bizTopics[0] }) {
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
            <GradientHeadingText text="Business Topics We Cover" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Every topic we teach is matched to how the major boards mark business answers. Your child's writing stays exam-ready across <a href="/igcse" className="text-[#5b3a8a] font-semibold underline">IGCSE</a>, A-Level, IB, and AP.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {bizTopics.slice(0, 3).map((t, i) => <TopicCard key={i} topic={t} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {bizTopics.slice(3).map((t, i) => <TopicCard key={i + 3} topic={t} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Decision Skills — 2×2 flat bordered grid (Maths "Problem-Solving" style) ─── */
const decisionSkills = [
  { title: "Case Reading",            icon: <Search    className="h-6 w-6" strokeWidth={2} />, problem: "Skim-reads the case before writing answers",         fix: "We dissect the case before any answer" },
  { title: "Trade-off Weighing",      icon: <Scale     className="h-6 w-6" strokeWidth={2} />, problem: "Backs one side without weighing the other",           fix: "We compare pros and cons in each answer" },
  { title: "Recommendation Logic",    icon: <Lightbulb className="h-6 w-6" strokeWidth={2} />, problem: "Recommends without linking back to case evidence",    fix: "We support every recommendation with case detail" },
  { title: "Numerical Justification", icon: <Hash      className="h-6 w-6" strokeWidth={2} />, problem: "Quotes figures without explaining their meaning",     fix: <>We weight each figure with a clear argument — see also <a href="/finance" className="text-[#5b3a8a] font-semibold underline">Finance</a></> },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Business Decision Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Real business questions need careful reading and balanced thinking, not just memorised content. We grow the decision-making habits that turn knowledge into top-band answers.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {decisionSkills.slice(0, 2).map((s, i) => (
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
          {decisionSkills.slice(2).map((s, i) => (
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

/* ─── §7 Answer Habits — 4 gold-icon cards (Maths "Assessment Skills" style) ─── */
const answerHabits = [
  { title: "Command Verb Match",   icon: <AlignLeft   className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Hands same response to every command verb",         fix: "We tutor each command verb's correct response" },
  { title: "Mark Allocation",      icon: <Award       className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Disregards how many marks each part holds",         fix: "We size answers to match each mark value" },
  { title: "Two-Mark Definitions", icon: <CheckSquare className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Provides vague definitions for two-mark questions", fix: "We perfect each definition to examiner standard" },
  { title: "Real Example Use",     icon: <BarChart3   className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Mentions companies without naming or linking them", fix: "We supply named examples for every business topic" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Business Answer Habits" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Examiners look for clear command verb match, mark-weighted depth, and real examples in every paper. We coach the habits that turn knowledge into the marks each part is worth.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {answerHabits.map((r, i) => (
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
          Business Sessions <span className="text-[#C7A24A]">Across the UAE</span>
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
          Business stress lifts at home and exam confidence returns for families across Dubai and Abu Dhabi. From Dubai Hills, Arabian Ranches, Dubai Marina, Palm Jumeirah, Khalifa City, Yas Island, and Saadiyat Island, through to online sessions reaching the northern emirates, students build business reasoning that holds across every paper.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 FAQs — accordion (Maths "FAQSection" style exactly) ─── */
const bizFAQs = [
  { q: "What makes Ustaad business studies sessions effective?",               a: "Sessions stay focused on the marks each question is worth. Your child leaves every session with a clear answer technique for that topic, ready to use on the next paper." },
  { q: "Can my child still benefit if business feels boring at school?",       a: "Yes. Many students find school business lessons dry until the link to real companies is shown. Tutors keep examples grounded in real businesses your child recognises." },
  { q: "How do you teach case study analysis?",                                a: "Case studies are read together first. Tutors then show how to pull the right detail, link it to a model, and write the answer the examiner is looking for." },
  { q: "How do you help students who can write but lose marks on evaluation?", a: "Evaluation is a writing habit, not a memory task. Tutors rebuild that habit with short marked drills, so analysis becomes evaluation in the same paragraph." },
  { q: "Do tutors use real companies and current news in lessons?",            a: "Yes. Each session draws on current business news and named companies so the student has real-world examples ready for every paper section." },
  { q: "How will I know my child's business answers are improving?",           a: "Parents see longer, more structured answers, sharper definitions, and stronger use of case evidence within the first few sessions. School test results follow soon after." },
];

function BusinessFAQs() {
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
              Business Studies{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Parents Ask</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {bizFAQs.map((faq, i) => {
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
  badgeIcon:        <Briefcase className="h-4 w-4" />,
  heroBadgeLabel:   "Business Specialist",
  heroTitle:        "Practical Business. Real Decisions.",
  heroSubtitle:     "Grounded business studies for IGCSE, A-Level, IB, and AP students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Business made simple here.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Sticky Points */

  struggles: [],
  customStrugglesSection,    /* §4 Plan */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Topics */

  curricula: [],
  customCurriculaSection,    /* §6 Decision Skills */

  practices: [],
  customPracticesSection,    /* §7 Answer Habits */

  results: [],
  customResultsSection,      /* §8 UAE dark section */

  faqs: [],
  customFAQsSection: <BusinessFAQs />, /* §9 Parents Ask */

  finalCtaTitle:    "Spot What's Limiting Business Marks",
  finalCtaSubtitle: "When business answers feel right at home but slip on the paper, the gap is usually structure, not content. A short paper check finds the exact habit losing the mark.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Business made simple here.",

  floatingIcon: <Briefcase className="h-4 w-4" />,
  seo: {
    title: "Business Studies Tutors UAE | IGCSE, A-Level & IB | Ustaad",
    description: "Expert private Business Studies tutoring in Dubai, Abu Dhabi & UAE. IGCSE, A-Level, IB Business Management. 1-to-1 sessions with proven results.",
    canonical: "/business",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Business Studies Tutoring UAE", "1-to-1 Business Studies tutoring for IGCSE, A-Level, and IB students across UAE.", "/business"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Business Studies", url: "/business" }]),
      faqSchema(bizFAQs),
    ],
  },
};

export default function BusinessPage() {
  return <SubjectPageTemplate {...data} />;
}