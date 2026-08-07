import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  DollarSign, TrendingUp, BarChart3, Wallet, Scale, Target, Flag,
  BookMarked, AlertTriangle, FileText, CreditCard, Calendar,
  Search, ClipboardList, PenTool, Eye,
  HelpCircle, ChevronDown, MessageCircle, MapPin,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Where Money Habits Slip  (3-col flat bordered grid — Business "Sticky Points" style)
  Struggles slot → §4 Our Money Skills Journey (4 step cards — Business "Plan" style)
  Methods   slot → §5 Real-Life Money Topics   (3+2 topic cards — Business "Topics" style)
  Curricula slot → §6 Daily Money Thinking     (2×2 flat bordered grid — Business "Decision Skills" style)
  Practices slot → §7 Real-World Money Habits  (4 gold-icon cards — Business "Answer Habits" style)
  Results   slot → §8 UAE                      (dark bg section — Business "UAE" style)
  FAQs      slot → §9 Money Coaching FAQs      (accordion — Business "Parents Ask" style)
*/

/* ─── §3 Where Money Habits Slip — 3-col flat bordered grid ─── */
const habitSlips = [
  { title: "Budget Slips",        icon: <BarChart3   className="h-5 w-5 text-[#0f4a9b]" />, wm: <BarChart3   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Overspends without seeing the budget total",        fix: "We watch every spend against the budget" },
  { title: "Saving Habits",       icon: <Wallet      className="h-5 w-5 text-[#0f4a9b]" />, wm: <Wallet      className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Empties every gift the same day",                  fix: "We earmark part of every gift to save" },
  { title: "Spending Awareness",  icon: <Eye         className="h-5 w-5 text-[#0f4a9b]" />, wm: <Eye         className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Taps online without checking the running total",   fix: "We pause to check totals before payments" },
  { title: "Card vs Cash",        icon: <CreditCard  className="h-5 w-5 text-[#0f4a9b]" />, wm: <CreditCard  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Feels card payments as smaller than cash",         fix: "We count card spends like cash" },
  { title: "Bill Tracking",       icon: <Calendar    className="h-5 w-5 text-[#0f4a9b]" />, wm: <Calendar    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Realises monthly bills only on the last day",      fix: "We display each bill with its due date" },
  { title: "Future Planning",     icon: <Target      className="h-5 w-5 text-[#0f4a9b]" />, wm: <Target      className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Saves for nothing specific or measurable",         fix: "We agree short and long-term saving targets" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Where Money Habits Slip" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Money habits set in the teen years shape adult choices. We focus on six places weak habits begin.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {habitSlips.map((s, i) => (
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

/* ─── §4 Our Money Skills Journey — 4 step cards ─── */
const journeySteps = [
  { title: "Money Habit Check",   desc: "Recent spending patterns and weekly outgoings show where money quietly leaks first.",        icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Budget Build",        desc: "A clear, simple monthly budget gets drawn up together in the first weeks.",                  icon: <BarChart3     className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Live Money Practice", desc: "Real shopping, saving, and bill scenarios get worked through in each session.",              icon: <PenTool       className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Real-Life Review",    desc: "Decisions made between sessions are reviewed openly and adjusted with the student.",         icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Our Money Skills Journey" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Money worry grows once a teen handles their own money. Our four steps build calm daily habits.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {journeySteps.map((step, i) => (
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

/* ─── §5 Real-Life Money Topics — 3+2 topic cards ─── */
const moneyTopics = [
  { title: "Budgeting Basics",        boards: "Where money should go each month and why",      insight: "We compose a simple monthly budget together",      icon: <BarChart3  className="h-6 w-6" strokeWidth={2} />, wm: <BarChart3  className="h-20 w-20" strokeWidth={1} /> },
  { title: "Saving Goals",            boards: "Why short and long-term saving both matter",     insight: "We craft a goal-based saving plan together",       icon: <Target     className="h-6 w-6" strokeWidth={2} />, wm: <Target     className="h-20 w-20" strokeWidth={1} /> },
  { title: "Smart Spending",          boards: "How small daily costs add up fast",              insight: "We total spending across simple weekly categories", icon: <Scale      className="h-6 w-6" strokeWidth={2} />, wm: <Scale      className="h-20 w-20" strokeWidth={1} /> },
  { title: "Debt & Credit Awareness", boards: "Why credit cards feel deceptively easy",         insight: "We work out the real cost together",                icon: <CreditCard className="h-6 w-6" strokeWidth={2} />, wm: <CreditCard className="h-20 w-20" strokeWidth={1} /> },
  { title: "Saving for Big Choices",  boards: "How saving for university or travel works",      insight: "We break down steps to fund goals",                icon: <Flag       className="h-6 w-6" strokeWidth={2} />, wm: <Flag       className="h-20 w-20" strokeWidth={1} /> },
];

function TopicCard({ topic }: { topic: typeof moneyTopics[0] }) {
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
            <GradientHeadingText text="Real-Life Money Topics" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Each topic is grounded in real life, not theory. Your child learns money skills usable the same week.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {moneyTopics.slice(0, 3).map((t, i) => <TopicCard key={i} topic={t} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {moneyTopics.slice(3).map((t, i) => <TopicCard key={i + 3} topic={t} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Daily Money Thinking — 2×2 flat bordered grid ─── */
const dailyThinking = [
  { title: "Want vs Need",      icon: <Scale      className="h-6 w-6" strokeWidth={2} />, problem: "Buys wants treating them like real needs",           fix: "We rank wants and needs together" },
  { title: "Quick Cost Math",   icon: <BarChart3  className="h-6 w-6" strokeWidth={2} />, problem: "Ducks quick math before buying something",            fix: "We perform quick price math before any spend" },
  { title: "Reading Receipts",  icon: <FileText   className="h-6 w-6" strokeWidth={2} />, problem: "Throws receipts away without checking them",          fix: "We inspect receipts weekly with the student" },
  { title: "Compound Effect",   icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />, problem: "Underrates how small daily spends grow",              fix: "We compound small daily spends to show growth" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Daily Money Thinking" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Real money skills come from clear daily thinking, not textbooks. We grow the everyday habits your child needs.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {dailyThinking.slice(0, 2).map((s, i) => (
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
          {dailyThinking.slice(2).map((s, i) => (
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

/* ─── §7 Real-World Money Habits — 4 gold-icon cards ─── */
const moneyHabits = [
  { title: "Bank App Use",        icon: <BarChart3     className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Visits the bank app only to spend",                   fix: "We re-purpose the bank app for planning" },
  { title: "Safe Habits Online",  icon: <BookMarked    className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Passes card details to unknown sellers",               fix: "We verify seller trust signals before any purchase" },
  { title: "Saving in Practice",  icon: <DollarSign    className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Postpones saving for the next month",                  fix: "We bank a fixed amount each month first" },
  { title: "Emergency Fund",      icon: <AlertTriangle className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Keeps no emergency cash for unexpected costs",          fix: "We create an emergency reserve before bigger goals" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Real-World Money Habits" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Money habits matter more than money knowledge. We coach daily routines for bank apps, online buying, and saving.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {moneyHabits.map((r, i) => (
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
          Finance Coaching <span className="text-[#C7A24A]">Across the UAE</span>
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
          Money worry settles at home and financial confidence grows for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 Money Coaching FAQs — accordion ─── */
const financeFAQs = [
  { q: "Is finance coaching only for older teenagers?",               a: "No. Coaching suits any teenager curious about money or starting to handle their own spending, from around age 12 upward." },
  { q: "How do tutors handle students with no money awareness?",       a: "Tutors start by listening, not lecturing. The first sessions map current habits gently and build awareness without judgement before any plan is set." },
  { q: "Will my child practice with real money or only examples?",     a: "Both. Real receipts and recent spending are reviewed alongside worked examples, so what your child learns connects to actual daily life." },
  { q: "Do you teach about Islamic finance and halal saving?",         a: "Yes. Sessions can be tailored to halal saving, charity giving, and Islamic finance basics on request, alongside everyday money habits." },
  { q: "How will parents see my child making better money choices?",   a: "Calmer spending choices, faster price calculations, and consistent saving usually show up first. Parents notice it inside the first month at home." },
  { q: "Does the coaching cover money habits for parents too?",        a: "Sessions are focused on the student, but parents are welcome to sit in at first. Many find the habits useful for the whole family." },
];

function FinanceFAQs() {
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
              Money Coaching{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Parents Ask</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {financeFAQs.map((faq, i) => {
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
  badgeIcon:        <DollarSign className="h-4 w-4" />,
  heroBadgeLabel:   "Finance Specialist",
  heroTitle:        "Finance Tutoring For Stronger Performance",
  heroSubtitle:     "Real-world money skills for teenagers stepping into early adult life.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Money sense for life.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Where Money Habits Slip */

  struggles: [],
  customStrugglesSection,    /* §4 Our Money Skills Journey */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Real-Life Money Topics */

  curricula: [],
  customCurriculaSection,    /* §6 Daily Money Thinking */

  practices: [],
  customPracticesSection,    /* §7 Real-World Money Habits */

  results: [],
  customResultsSection,      /* §8 UAE dark section */

  faqs: [],
  customFAQsSection: <FinanceFAQs />, /* §9 Money Coaching FAQs */

  finalCtaTitle:    "Where Smart Money Habits Begin",
  finalCtaSubtitle: "Money habits set in teen years shape adult choices later. A first session shows your child where to start.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Money sense for life.",

  floatingIcon: <DollarSign className="h-4 w-4" />,
  seo: {
    title: "Finance Tutors UAE | A-Level, IB & University | Ustaad",
    description: "Expert private Finance tutoring in Dubai, Abu Dhabi & UAE. A-Level, IB, and university-level Finance. 1-to-1 sessions with expert tutors. Book a free trial.",
    canonical: "/finance",
    schema: [localBusinessSchema, serviceSchema("Private Finance Tutoring UAE", "1-to-1 Finance tutoring for A-Level, IB, and university students across UAE.", "/finance"), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Finance", url: "/finance" }]), faqSchema(financeFAQs)],
  },
};

export default function FinancePage() {
  return <SubjectPageTemplate {...data} />;
}