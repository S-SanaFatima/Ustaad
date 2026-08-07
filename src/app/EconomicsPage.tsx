import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  LineChart, TrendingUp, BarChart3, Activity, Globe, FileText,
  BookMarked, Scale, Network, BookOpen, Eye,
  Search, AlignLeft, ClipboardList, MessageSquare, PenTool,
  HelpCircle, ChevronDown, MapPin, MessageCircle,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Common Economics Trip-Ups    (3-col flat bordered grid)
  Struggles slot → §4 How Ustaad Teaches Economics (4 step cards)
  Methods   slot → §5 Economics Areas We Teach     (3+2 topic cards)
  Curricula slot → §6 Economic Analysis Skills     (2×2 flat bordered grid)
  Practices slot → §7 Economics Answer Discipline  (4 gold cards)
  Results   slot → §8 UAE                          (dark bg section)
  FAQs      slot → §9 Parent Questions on Economics (accordion)
*/

/* ─── §3 Common Economics Trip-Ups — 3-col flat bordered grid ─── */
const tripUps = [
  { title: "Diagram Drawing",      icon: <LineChart  className="h-5 w-5 text-[#0f4a9b]" />, wm: <LineChart  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Forms diagrams without labelled axes or curves",             fix: "We demonstrate clean diagrams in every session" },
  { title: "Definition Sharpness", icon: <BookOpen   className="h-5 w-5 text-[#0f4a9b]" />, wm: <BookOpen   className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Stretches economic terms beyond their precise meaning",       fix: "We present each term in examiner-ready form" },
  { title: "Real-World Examples",  icon: <Globe      className="h-5 w-5 text-[#0f4a9b]" />, wm: <Globe      className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Skirts current real examples in answers",                    fix: "We arm answers with current examples each session" },
  { title: "Evaluation Depth",     icon: <Scale      className="h-5 w-5 text-[#0f4a9b]" />, wm: <Scale      className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Hovers around analysis without two-sided weighing",          fix: "We drive answers past analysis into evaluation" },
  { title: "Data Response",        icon: <BarChart3  className="h-5 w-5 text-[#0f4a9b]" />, wm: <BarChart3  className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Looks at data tables without seeing trends",                 fix: "We point out trends across data tables" },
  { title: "Topic Linking",        icon: <Network    className="h-5 w-5 text-[#0f4a9b]" />, wm: <Network    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Handles topics as separate units only",                      fix: "We join topics together across the syllabus" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Common Economics Trip-Ups" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Economics revision often feels strong yet drops marks in the exam. We focus on six places where writing slips.
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

/* ─── §4 How Ustaad Teaches Economics — 4 step cards ─── */
const teachingSteps = [
  { title: "Paper Walkthrough",    desc: "Recent economics papers reveal exactly where definitions and diagrams slip first.",                            icon: <Search      className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Concept Refresh",      desc: "Markets, macro, and micro concepts get refreshed before harder questions land.",                               icon: <BookMarked  className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Case Discussion",      desc: "Real exam questions are discussed aloud so weak reasoning surfaces and gets corrected.",                        icon: <MessageSquare className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Timed Practice Set",   desc: "Full economics papers are completed under timed pressure each week.",                                          icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="How Ustaad Teaches Economics" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Economics worry grows weeks before the paper, often at home first. Our four steps build the writing habits first.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {teachingSteps.map((step, i) => (
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

/* ─── §5 Economics Areas We Teach — 3+2 topic cards ─── */
const econAreas = [
  {
    title: "Microeconomics",
    boards: <>Cambridge <a href="/igcse" className="text-[#5b3a8a] font-semibold underline">IGCSE</a> 0455, Edexcel IGCSE 4EC1, A-Level 9EC0 and 9708</>,
    insight: "Supply, demand, and market failure stay shallow. We back each answer with clean diagrams.",
    icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />, wm: <TrendingUp className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Macroeconomics",
    boards: "AQA A-Level 7136, OCR A H460, AP Macroeconomics",
    insight: "Inflation, growth, and trade answers stay thin. We extend depth with current data.",
    icon: <BarChart3  className="h-6 w-6" strokeWidth={2} />, wm: <BarChart3  className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "International Economics",
    boards: <>IB Economics SL and HL, <a href="/a-level" className="text-[#5b3a8a] font-semibold underline">A-Level</a> 9EC0 international units</>,
    insight: "Exchange rates and trade policy stay theoretical. We gather current global news.",
    icon: <Globe      className="h-6 w-6" strokeWidth={2} />, wm: <Globe      className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Development Economics",
    boards: <>Cambridge A-Level 9708, <a href="/dp-sl" className="text-[#5b3a8a] font-semibold underline">IB</a> Economics HL</>,
    insight: "Development and inequality answers stay generic. Country case detail comes in early.",
    icon: <Activity   className="h-6 w-6" strokeWidth={2} />, wm: <Activity   className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "Data Response & Essays",
    boards: "Edexcel A-Level 9EC0 data response, IB Economics paper 3",
    insight: "Data response and essay timing slip. We practise both to the clock.",
    icon: <FileText   className="h-6 w-6" strokeWidth={2} />, wm: <FileText   className="h-20 w-20" strokeWidth={1} />,
  },
];

function AreaCard({ area }: { area: typeof econAreas[0] }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition duration-300 overflow-hidden">
      <div className="w-14 h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-3">
        <span className="text-[#0f4a9b]">{area.icon}</span>
      </div>
      <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">{area.title}</h3>
      <p className="text-gray-500 text-sm leading-snug mb-2 md:min-h-[48px]">{area.boards}</p>
      <p className="text-gray-600 text-sm leading-snug font-medium md:min-h-[48px]">{area.insight}</p>
      <div className="absolute bottom-4 right-4 pointer-events-none select-none text-[#0f4a9b]/[0.08]">{area.wm}</div>
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
            <GradientHeadingText text="Economics Areas We Teach" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Every area follows the marking style of major boards. Your child's writing stays exam-ready across all four curricula.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
          {econAreas.slice(0, 3).map((a, i) => <AreaCard key={i} area={a} />)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {econAreas.slice(3).map((a, i) => <AreaCard key={i + 3} area={a} />)}
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Economic Analysis Skills — 2×2 flat bordered grid ─── */
const analysisSkills = [
  { title: "Question Decoding",   icon: <Search    className="h-6 w-6" strokeWidth={2} />, problem: "Approaches prompt without checking command verb",     fix: "We parse each prompt against its command verb" },
  { title: "Setup Clarity",       icon: <AlignLeft className="h-6 w-6" strokeWidth={2} />, problem: "Puts definitions and diagrams in random order",       fix: "We order answers with definition then diagram" },
  { title: "Cause-Effect Chains", icon: <TrendingUp className="h-6 w-6" strokeWidth={2} />, problem: "States a cause without tracing the full effect",     fix: "We carry each cause through to its real effect" },
  { title: "Two-Sided Reasoning", icon: <Scale     className="h-6 w-6" strokeWidth={2} />, problem: "Offers one-sided answers without counter points",     fix: "We blend both sides into every evaluation" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Economic Analysis Skills" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Real economics thinking needs more than memorised theory. We build the analysis habits needed for any unseen question.
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

/* ─── §7 Economics Answer Discipline — 4 gold cards ─── */
const answerDiscipline = [
  { title: "Verb Recognition", icon: <Eye       className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Sees command verbs as the same task",                        fix: "We define each verb's exact response style" },
  { title: "Effort Weighting", icon: <BarChart3 className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Allocates equal time to every question part",                fix: "We rate effort against the mark count" },
  { title: "Diagram Detail",   icon: <PenTool   className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Includes diagrams without axis labels or units",            fix: "We label every axis and curve clearly" },
  { title: "Topic Recall",     icon: <BookMarked className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Sets aside earlier topics when answering later questions",  fix: "We revisit earlier topics across every paper" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Economics Answer Discipline" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Examiners reward precise reading, balanced effort, clear diagrams, and recall. We coach habits that turn revision into marks.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {answerDiscipline.map((r, i) => (
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
          Economics Programmes <span className="text-[#C7A24A]">Across the UAE</span>
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
          Economics confusion clears at home and exam confidence holds for families across Dubai, Abu Dhabi, and the UAE.
        </p>
      </div>
    </div>
  </section>
);

/* ─── §9 Parent Questions on Economics — accordion ─── */
const econFAQs = [
  { q: "How does economics tutoring help students who memorise instead of analyse?",  a: "Memorising helps a little, but most marks come from showing the link between cause and effect. Tutors slow that link down until your child can show it clearly in writing." },
  { q: "Can my child catch up if economics started badly at school?",                 a: "Yes. Most tutoring starts with a quick check of recent papers, then rebuilds the early topics that later content depends on. Confidence and accuracy come back together." },
  { q: "How do you teach evaluation in essay-style economics questions?",             a: "Evaluation in economics needs two clear sides and a judgement at the end. Tutors guide that structure session after session until it becomes habit." },
  { q: "Do tutors use current news and global examples?",                             a: "Yes. Current news and live global examples come into every session, so your child carries real-world data into the exam rather than vague theory." },
  { q: "How will parents see economics thinking is improving?",                       a: "Sharper definitions, cleaner diagrams, and stronger two-sided evaluation are the first signs. Parents notice them before the next school test arrives." },
  { q: "Do tutors help with both data response and essay-style papers?",              a: "Yes. Tutors cover multiple choice and short answer style alongside essay and data response, so every paper format gets equal practice each week." },
];

function EconomicsFAQs() {
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
              Economics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions Answered</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {econFAQs.map((faq, i) => {
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
  badgeIcon:        <LineChart className="h-4 w-4" />,
  heroBadgeLabel:   "Economics Specialist",
  heroTitle:        "Modern Economics. Clean Answers.",
  heroSubtitle:     "Practical economics support for IGCSE, A-Level, IB, and AP students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Economics, simply explained.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Common Economics Trip-Ups */

  struggles: [],
  customStrugglesSection,    /* §4 How Ustaad Teaches Economics */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Economics Areas We Teach */

  curricula: [],
  customCurriculaSection,    /* §6 Economic Analysis Skills */

  practices: [],
  customPracticesSection,    /* §7 Economics Answer Discipline */

  results: [],
  customResultsSection,      /* §8 UAE dark section */

  faqs: [],
  customFAQsSection: <EconomicsFAQs />, /* §9 Parent Questions on Economics */

  finalCtaTitle:    "Identify What's Costing Marks",
  finalCtaSubtitle: "When economics revision feels solid yet the paper feels different, a check shows the habit costing marks.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Economics, simply explained.",

  floatingIcon: <LineChart className="h-4 w-4" />,
  seo: {
    title: "Economics Tutors UAE | IGCSE, A-Level, IB Economics | Ustaad",
    description: "Expert private Economics tutoring in Dubai, Abu Dhabi & UAE. IGCSE, A-Level, IB Economics SL/HL. Clear diagrams, strong evaluation skills. Book a free trial.",
    canonical: "/economics",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Economics Tutoring UAE", "1-to-1 Economics tutoring for IGCSE, A-Level, and IB students across UAE.", "/economics"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Subjects", url: "/subjects" }, { name: "Economics", url: "/economics" }]),
      faqSchema(econFAQs),
    ],
  },
};

export default function EconomicsPage() {
  return <SubjectPageTemplate {...data} />;
}