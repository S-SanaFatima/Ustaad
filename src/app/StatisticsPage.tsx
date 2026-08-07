import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  BarChart2, BarChart3, TrendingUp, LineChart, Target,
  BookOpen, FileText, Search, Layers, CheckCircle,
  Eye, AlertTriangle, Shuffle, Users,
  PenTool, ClipboardList, Award, AlignLeft,
  HelpCircle, ChevronDown, MessageCircle, MapPin,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Common Statistics Slip-Ups  (3-col flat bordered grid — Finance style)
  Struggles slot → §4 Inside Our Statistics Work  (4 step cards — Finance style)
  Methods   slot → §5 Statistics Areas We Cover   (3+2 topic cards — Finance style)
  Curricula slot → §6 Data Thinking Skills         (2×2 flat bordered grid — Finance style)
  Practices slot → §7 Statistics Answer Skills     (4 gold-icon cards — Finance style)
  Results   slot → §8 UAE                          (dark bg section — Finance style)
  FAQs      slot → §9 Statistics Parent Queries    (accordion — Finance style)
*/

/* ─── §3 Common Statistics Slip-Ups — 3-col flat bordered grid ─── */
const slipUps = [
  { title: "Distribution Choice",     icon: <BarChart3  className="h-5 w-5 text-[#0f4a9b]" />, wm: <BarChart3  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Calls the wrong distribution for the data",                  fix: "We screen each dataset for its distribution" },
  { title: "Hypothesis Setup",        icon: <FileText   className="h-5 w-5 text-[#0f4a9b]" />, wm: <FileText   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Pens only the null hypothesis each time",                    fix: "We square null and alternative hypotheses together" },
  { title: "Calculation Chains",      icon: <Layers     className="h-5 w-5 text-[#0f4a9b]" />, wm: <Layers     className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Rushes middle steps in long calculations",                   fix: "We script each step through the calculation" },
  { title: "Interpretation Wording",  icon: <AlignLeft  className="h-5 w-5 text-[#0f4a9b]" />, wm: <AlignLeft  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Phrases results without examiner-style language",             fix: "We adjust phrasing to match examiner mark standards" },
  { title: "Probability Confusion",   icon: <Shuffle    className="h-5 w-5 text-[#0f4a9b]" />, wm: <Shuffle    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Switches independent and dependent event rules",              fix: "We gauge each event rule by context" },
  { title: "Sample Bias Errors",      icon: <Users      className="h-5 w-5 text-[#0f4a9b]" />, wm: <Users      className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Takes biased samples as fully representative",                fix: "We flag bias before any sample is used" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Common Statistics Slip-Ups" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Six patterns that cost marks across every statistics exam.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {slipUps.map((s, i) => (
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

/* ─── §4 Inside Our Statistics Work — 4 step cards ─── */
const workSteps = [
  { title: "Number Audit",    desc: "Recent statistics papers and class work show where numbers slip first.",                                          icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Basics Refresh",  desc: "Distributions, hypotheses, and probability rules are refreshed before harder topics return.",                      icon: <BookOpen      className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Worked Drills",   desc: "Real exam questions are answered together so each step becomes clear and correct.",                                icon: <PenTool       className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Mock Sit",        desc: "Full past papers are completed under timed conditions across the term.",                                           icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Inside Our Statistics Work" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Four stages that move your child from shaky to steady across every topic.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {workSteps.map((step, i) => (
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

/* ─── §5 Statistics Areas We Cover — 3+2 topic cards ─── */
const statsTopics = [
  { title: "Probability & Distributions", boards: "Cambridge IGCSE 0455 Statistics, A-Level Statistics, IB Maths AI",          insight: "Distribution choice slips under timed work. We assess each dataset's distribution quickly.",                                         icon: <BarChart3    className="h-6 w-6" strokeWidth={2} />, wm: <BarChart3    className="h-20 w-20" strokeWidth={1} /> },
  { title: "Hypothesis Testing",          boards: "A-Level Statistics, AP Statistics, IB Maths AI HL",                          insight: "Null and alternative blur under exam time. We confirm both before any calculation.",                                               icon: <Target       className="h-6 w-6" strokeWidth={2} />, wm: <Target       className="h-20 w-20" strokeWidth={1} /> },
  { title: "Descriptive Statistics",      boards: "Cambridge A-Level, AP Statistics, IB Maths SL",                              insight: "Mean, median, mode trip on tricky datasets. We solve each measure step by step.",                                                  icon: <LineChart    className="h-6 w-6" strokeWidth={2} />, wm: <LineChart    className="h-20 w-20" strokeWidth={1} /> },
  { title: "Inferential Statistics",      boards: "A-Level Statistics, AP Statistics, IB Mathematics AI HL",                    insight: "Confidence intervals and t-tests confuse students under exam time. We measure formula choice carefully.",                              icon: <TrendingUp   className="h-6 w-6" strokeWidth={2} />, wm: <TrendingUp   className="h-20 w-20" strokeWidth={1} /> },
  { title: "Statistical Reports",         boards: "Cambridge IGCSE 0455, A-Level coursework, IB Internal Assessment",           insight: "Reports drift between data, hypothesis, and conclusion. We stage each section in proper order.",                                     icon: <FileText     className="h-6 w-6" strokeWidth={2} />, wm: <FileText     className="h-20 w-20" strokeWidth={1} /> },
];

function TopicCard({ topic }: { topic: typeof statsTopics[0] }) {
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
            <GradientHeadingText text="Statistics Areas We Cover" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Every area follows the marking style of major boards. Your child's numbers stay exam-ready across each curriculum.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {statsTopics.slice(0, 3).map((t, i) => <TopicCard key={i} topic={t} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {statsTopics.slice(3).map((t, i) => <TopicCard key={i + 3} topic={t} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Data Thinking Skills — 2×2 flat bordered grid ─── */
const dataThinking = [
  { title: "Question Decoding", icon: <Search      className="h-6 w-6" strokeWidth={2} />, problem: "Identifies wrong variable from the question text",          fix: "We pinpoint each variable before any sum" },
  { title: "Working Layout",    icon: <Layers      className="h-6 w-6" strokeWidth={2} />, problem: "Sprawls working across two pages messily",                   fix: "We keep working tidy in one clear column" },
  { title: "Result Checking",   icon: <CheckCircle className="h-6 w-6" strokeWidth={2} />, problem: "Delivers results without sense-checking against context",    fix: "We sense-check each result against context" },
  { title: "Diagram Sense",     icon: <Eye         className="h-6 w-6" strokeWidth={2} />, problem: "Pencils diagrams without scale or proper labels",            fix: "We scale and label every diagram correctly" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Data Thinking Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Four skills that keep answers clean, clear, and credit-worthy.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {dataThinking.slice(0, 2).map((s, i) => (
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
          {dataThinking.slice(2).map((s, i) => (
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

/* ─── §7 Statistics Answer Skills — 4 gold-icon cards ─── */
const answerSkills = [
  { title: "Formula Sheet Use",    icon: <FileText     className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Hurries through the formula sheet under pressure",         fix: "We master the formula sheet before papers" },
  { title: "Units & Notation",     icon: <BookOpen     className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Returns answers without proper units or notation",         fix: "We finish each answer with units and notation" },
  { title: "Method Mark Capture",  icon: <Award        className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Outputs only the final answer each question",              fix: "We capture method marks at every step" },
  { title: "Diagram Annotation",   icon: <PenTool      className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Slides past axis labels and confidence intervals",         fix: "We annotate every axis and confidence interval clearly" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Statistics Answer Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Examiners reward correct formula choice, units, and method marks. We coach the answer habits that earn full credit.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {answerSkills.map((r, i) => (
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
          Statistics Coaching <span className="text-[#C7A24A]">Across the UAE</span>
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
          Statistics worry settles at home and number confidence steadies for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 Statistics Parent Queries — accordion ─── */
const statsFAQs = [
  { q: "How is statistics tutoring different from a normal maths class?",          a: "Maths classes treat numbers as pure abstraction. Statistics tutoring grounds every step in real data your child can picture, so the working feels less abstract." },
  { q: "Can my child catch up if statistics started badly at school?",             a: "Yes. We start with a quick check of recent papers and rebuild the basics first, so harder topics like inference and hypothesis testing rest on a solid base." },
  { q: "How do you help students who panic when they see data tables?",            a: "Data tables look busy until your child sees a clear reading routine. Tutors slow that routine down until every table feels easier to handle." },
  { q: "Do tutors give past-paper feedback after each session?",                   a: "Yes. Past-paper marks and examiner notes are shared in plain language after each session, so progress is visible from week to week." },
  { q: "Can statistics tutoring help with both calculator and non-calculator papers?", a: "Yes. Tutors switch between calculator and non-calculator working at every level, so your child stays sharp in either paper format." },
  { q: "How do you support students preparing for IA or coursework in statistics?", a: "Internal Assessment and coursework get planned and reviewed step by step, with feedback on each draft until it meets examiner standards." },
];

function StatsFAQs() {
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
              Statistics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Parent Queries</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Straight answers to the questions families ask most.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {statsFAQs.map((faq, i) => {
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
  badgeIcon:        <BarChart2 className="h-4 w-4" />,
  heroBadgeLabel:   "Statistics Specialist",
  heroTitle:        "Reliable Data. Useful Conclusions.",
  heroSubtitle:     "Hands-on statistics tutoring for IGCSE, A-Level, IB, and AP students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Plain numbers, clear answers.",

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
  customFAQsSection: <StatsFAQs />,

  finalCtaTitle:    "Expose the Habit Limiting Marks",
  finalCtaSubtitle: "When statistics revision feels solid yet exam marks stall, a short check finds the habit costing each mark.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Plain numbers, clear answers.",

  floatingIcon: <BarChart3 className="h-4 w-4" />,
  seo: {
    title: "Statistics Tutors UAE | IGCSE, A-Level, IB & AP | Ustaad",
    description: "Expert private Statistics tutoring in Dubai & Abu Dhabi. IGCSE, A-Level, IB Maths AI & AP Statistics. 1-to-1 sessions with proven results.",
    canonical: "/statistics",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Statistics Tutoring UAE", "1-to-1 Statistics tutoring for IGCSE, A-Level, IB, and AP students across UAE.", "/statistics"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Statistics", url: "/statistics" }]),
      faqSchema(statsFAQs),
    ],
  },
};

export default function StatisticsPage() {
  return <SubjectPageTemplate {...data} />;
}