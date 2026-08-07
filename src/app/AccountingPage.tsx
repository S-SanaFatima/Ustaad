import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  ClipboardCheck, BookOpen, FileText, BarChart3, Settings,
  BookMarked, Layers, ListChecks, LineChart, CheckCircle,
  Scale, Hash, AlignLeft, MessageSquare, PenTool,
  Search, Clock, ClipboardList,
  HelpCircle, ChevronDown, MapPin, MessageCircle,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Where Accounting Trips Up      (3-col flat bordered grid)
  Struggles slot → §4 Our Accounting Approach        (4 step cards)
  Methods   slot → §5 Accounting Topics We Teach     (3+2 topic cards)
  Curricula slot → §6 Accounting Logic Skills        (2×2 flat bordered grid)
  Practices slot → §7 Accounting Script Skills       (4 gold cards)
  Results   slot → §8 UAE                            (dark bg section)
  FAQs      slot → §9 Common Accounting Queries      (accordion)
*/

/* ─── §3 Where Accounting Trips Up — 3-col flat bordered grid ─── */
const tripUps = [
  { title: "Double-Entry Slips",  icon: <BookOpen  className="h-5 w-5 text-[#0f4a9b]" />, wm: <BookOpen  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Posts only one side of a transaction",                       fix: "We log both sides of every transaction" },
  { title: "Trial Balance Errors",icon: <Scale     className="h-5 w-5 text-[#0f4a9b]" />, wm: <Scale     className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Lets errors hide inside the trial balance",                   fix: "We audit each trial balance line" },
  { title: "Ledger Posting",      icon: <FileText  className="h-5 w-5 text-[#0f4a9b]" />, wm: <FileText  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Records entries in the wrong ledger account",                 fix: "We route entries to the right account" },
  { title: "Adjustment Entries",  icon: <Settings  className="h-5 w-5 text-[#0f4a9b]" />, wm: <Settings  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Botches accrual or prepayment entries at year-end",           fix: "We tally each adjustment entry every year-end" },
  { title: "Statement Structure", icon: <Layers    className="h-5 w-5 text-[#0f4a9b]" />, wm: <Layers    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Stacks income and balance items together",                    fix: "We divide income, position, and cash flow correctly" },
  { title: "Ratio Confusion",     icon: <BarChart3 className="h-5 w-5 text-[#0f4a9b]" />, wm: <BarChart3 className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Reverses numerator and denominator in ratios",               fix: "We nail each ratio formula in correct order" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Where Accounting Trips Up" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Accounting feels logical in lessons yet slips on the paper. We focus on six places where marks leak away.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {tripUps.map((s, i) => (
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

/* ─── §4 Our Accounting Approach — 4 step cards ─── */
const approachSteps = [
  { title: "Book Audit",       desc: "Recent accounting scripts and class tests show where the working slips first.",                                icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Concept Tidy-Up", desc: "Double-entry, ledgers, and trial balance basics get refreshed before harder topics return.",                    icon: <BookMarked    className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Worked Practice", desc: "Real exam questions are worked through together so weak steps become visible.",                                  icon: <PenTool       className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Past-Paper Run",  desc: "Complete past papers are sat under timed conditions across the term.",                                           icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Our Accounting Approach" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Accounting confusion grows quietly for weeks before the next paper. Our four steps repair the bookkeeping habits needed.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {approachSteps.map((step, i) => (
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

/* ─── §5 Accounting Topics We Teach — 3+2 topic cards ─── */
const accountingTopics = [
  {
    title: "Double-Entry Basics",
    boards: <>Cambridge <a href="/igcse" className="text-[#5b3a8a] font-semibold underline">IGCSE</a> 0452, Cambridge A-Level 9706</>,
    insight: "Double-entry slips drag totals out of line. We reset clean posting habits.",
    icon: <BookOpen  className="h-6 w-6" strokeWidth={2} />, wm: <BookOpen  className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Final Accounts",
    boards: <>Cambridge IGCSE 0452, Cambridge <a href="/a-level" className="text-[#5b3a8a] font-semibold underline">A-Level</a> 9706, Edexcel WAC</>,
    insight: "Income, position, and cash-flow layout confuses students. We line up each statement clearly.",
    icon: <FileText  className="h-6 w-6" strokeWidth={2} />, wm: <FileText  className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Adjustments & Errors",
    boards: "Cambridge A-Level 9706, AQA A-Level 7127, Edexcel WAC",
    insight: "Accruals and prepayments slip late in the paper. We talk over each adjustment carefully.",
    icon: <Settings  className="h-6 w-6" strokeWidth={2} />, wm: <Settings  className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Ratio Analysis",
    boards: "Cambridge IGCSE 0452, Cambridge A-Level 9706",
    insight: "Profitability, liquidity, and gearing ratios confuse. We score each ratio with its meaning.",
    icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />, wm: <BarChart3 className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Business Cases",
    boards: "Cambridge A-Level 9706, AQA A-Level 7127",
    insight: "Case studies need figures shaped into recommendations. We marry numbers and conclusions tightly.",
    icon: <LineChart className="h-6 w-6" strokeWidth={2} />, wm: <LineChart className="h-20 w-20" strokeWidth={1} />,
  },
];

function TopicCard({ topic }: { topic: typeof accountingTopics[0] }) {
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
            <GradientHeadingText text="Accounting Topics We Teach" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Every area matches how major boards mark accounting answers. Your child's working stays exam-ready across each level taught.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {accountingTopics.slice(0, 3).map((t, i) => <TopicCard key={i} topic={t} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {accountingTopics.slice(3).map((t, i) => <TopicCard key={i + 3} topic={t} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Accounting Logic Skills — 2×2 flat bordered grid ─── */
const logicSkills = [
  { title: "Source Documents",       icon: <Search    className="h-6 w-6" strokeWidth={2} />, problem: "Browses source documents before recording",             fix: "We sift source documents line by line" },
  { title: "Transaction Classifying",icon: <Layers    className="h-6 w-6" strokeWidth={2} />, problem: "Misfiles transactions in wrong account categories",      fix: "We classify transactions into correct accounts each time" },
  { title: "Period Cut-Off",         icon: <Clock     className="h-6 w-6" strokeWidth={2} />, problem: "Places transactions in the wrong accounting period",     fix: "We date each transaction to its period" },
  { title: "Number Cross-Check",     icon: <CheckCircle className="h-6 w-6" strokeWidth={2} />, problem: "Wraps totals without a final cross-check",            fix: "We fit a quick cross-check at the end" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Accounting Logic Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Real accounting needs careful reading, correct classifying, and clean checking. We build logic habits that keep books accurate.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {logicSkills.slice(0, 2).map((s, i) => (
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
          {logicSkills.slice(2).map((s, i) => (
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

/* ─── §7 Accounting Script Skills — 4 gold cards ─── */
const scriptSkills = [
  { title: "Workings Layout",  icon: <AlignLeft    className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Stuffs workings into corner margins",                    fix: "We allow workings their own clear column" },
  { title: "Narrative Notes",  icon: <MessageSquare className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Reports numbers without short narrative notes",          fix: "We mark each working with a short note" },
  { title: "Format Headings",  icon: <ListChecks   className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Foregoes statement headings and date lines",             fix: "We ensure statement headings sit on every script" },
  { title: "Currency & Units", icon: <Hash         className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Sails past currency or unit labels",                     fix: "We stamp every number with currency and units" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Accounting Script Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Examiners look for tidy layout, short notes, clean headings, and units. We coach script habits that earn marks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {scriptSkills.map((r, i) => (
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
          Accounting Support <span className="text-[#C7A24A]">Across the UAE</span>
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
          Accounting stress quietens at home and bookkeeping confidence steadies for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 Common Accounting Queries — accordion ─── */
const accountingFAQs = [
  { q: "How is accounting tutoring different from a maths or business class?",              a: "Accounting blends maths discipline with business judgement. Tutors keep both habits in balance, so your child treats every number as a clear part of a clean story." },
  { q: "Can my child start accounting tutoring without prior bookkeeping experience?",      a: "Yes. Many students begin without prior bookkeeping. Tutors start with single-entry basics and build up to full double-entry over a few weeks." },
  { q: "How do tutors help students struggling with double-entry?",                         a: "Double-entry slips usually trace back to misunderstanding debit and credit rules. Tutors slow that foundation down until the rule feels obvious every time." },
  { q: "Do you cover ratio analysis and interpretation properly?",                          a: "Yes. Profitability, liquidity, and gearing ratios are covered formula by formula, with each result interpreted in plain language ready for the answer paper." },
  { q: "How will parents see real progress in accounting?",                                 a: "Cleaner workings, tidier statements, and stronger interpretation paragraphs are the first signs. Parents notice the shift before the next school assessment." },
  { q: "Do tutors help with sample-paper marking and feedback?",                            a: "Yes. Past papers and sample papers are marked together so your child sees exactly where marks were gained or lost on each question part." },
];

function AccountingFAQs() {
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
              Accounting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Queries Answered</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {accountingFAQs.map((faq, i) => {
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
  badgeIcon:        <ClipboardCheck className="h-4 w-4" />,
  heroBadgeLabel:   "Accounting Specialist",
  heroTitle:        "Precise Numbers. Cleaner Books.",
  heroSubtitle:     "Methodical accounting tutoring for IGCSE, A-Level, and university foundation students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Accounting that adds up.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Where Accounting Trips Up */

  struggles: [],
  customStrugglesSection,    /* §4 Our Accounting Approach */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Accounting Topics We Teach */

  curricula: [],
  customCurriculaSection,    /* §6 Accounting Logic Skills */

  practices: [],
  customPracticesSection,    /* §7 Accounting Script Skills */

  results: [],
  customResultsSection,      /* §8 UAE dark section */

  faqs: [],
  customFAQsSection: <AccountingFAQs />, /* §9 Common Accounting Queries */

  finalCtaTitle:    "See the Real Number Gap",
  finalCtaSubtitle: "When numbers look right but scores stall, a short script review finds the habit costing each mark.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Accounting that adds up.",

  floatingIcon: <ClipboardCheck className="h-4 w-4" />,
  seo: {
    title: "Accounting Tutors UAE | IGCSE & A-Level | Ustaad",
    description: "Expert private Accounting tutoring in Dubai, Abu Dhabi & UAE. IGCSE, A-Level Accounting. Double-entry, financial statements, ratio analysis. Book a free trial.",
    canonical: "/accounting",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Accounting Tutoring UAE", "1-to-1 Accounting tutoring for IGCSE, A-Level, and university foundation students across UAE.", "/accounting"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Accounting", url: "/accounting" }]),
      faqSchema(accountingFAQs),
    ],
  },
};

export default function AccountingPage() {
  return <SubjectPageTemplate {...data} />;
}