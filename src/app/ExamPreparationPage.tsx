import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  ClipboardCheck, BookOpen, GraduationCap, Globe, Flag,
  FileText, Clock, AlertTriangle, Zap, BarChart3,
  Target, BookMarked, CheckCircle, Search,
  Lightbulb, PenTool, Eye, MessageCircle,
  Layers, Trophy, Calendar, ClipboardList,
  HelpCircle, ChevronDown, MapPin,
} from 'lucide-react';

/*
  SLOT MAPPING (template order → PDF document order):
  Topics    slot → §3 Why Marks Quietly Drop     (3-col flat bordered grid)
  Struggles slot → §4 Six Common Exam Gaps        (4 step cards)
  Methods   slot → §5 Knowing vs Scoring          (2×2 grid)
  Curricula slot → §6 Reading Each Question       (2×2 flat bordered grid)
  Practices slot → §7 Plan for Exam Day           (4 gold-icon cards)
  Results   slot → §8 Exams We Help With          (4 curriculum cards)
                 + §9 Inside Our Exam Prep         (4 step cards)
                 + §10 UAE                         (dark bg section)
  FAQs      slot → §11 Things Parents Ask Us      (accordion)
*/

/* ─── §3 Why Marks Quietly Drop — 3-col flat bordered grid ─── */
const markDrops = [
  { title: "Late Start",             icon: <Clock        className="h-5 w-5 text-[#0f4a9b]" />, wm: <Clock        className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Plans prep too close to exam date",                   fix: "We outline a clear timeline weeks ahead" },
  { title: "Past Paper Avoidance",   icon: <FileText     className="h-5 w-5 text-[#0f4a9b]" />, wm: <FileText     className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Avoids past papers until the final week",             fix: "We use past papers in every session" },
  { title: "Random Revision",        icon: <AlertTriangle className="h-5 w-5 text-[#0f4a9b]" />, wm: <AlertTriangle className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Bounces between topics with no clear plan",         fix: "We group revision by each paper section" },
  { title: "Memory Only",            icon: <BookOpen     className="h-5 w-5 text-[#0f4a9b]" />, wm: <BookOpen     className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Remembers notes without practising any answers",      fix: "We match each note with practice questions" },
  { title: "Time Misuse",            icon: <Zap          className="h-5 w-5 text-[#0f4a9b]" />, wm: <Zap          className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Runs out of time on second paper",                   fix: "We test each paper against the clock" },
  { title: "Quiet Panic",            icon: <BarChart3    className="h-5 w-5 text-[#0f4a9b]" />, wm: <BarChart3    className="h-20 w-20 text-[#0f4a9b]/8" />, problem: "Worries through the night before the exam",           fix: "We share calm routines for exam morning" },
];

const customTopicsSection = (
  <section id="topics" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Why Marks Quietly Drop" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Strong students lose marks for reasons unrelated to knowledge. We look at six habits draining grades on exam day.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {markDrops.map((s, i) => (
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

/* ─── §4 Six Common Exam Gaps — 4 step cards ─── */
const examGaps = [
  { title: "No Real Plan",         desc: "Studies without a clear paper-by-paper plan",          fix: "We design a week-by-week study schedule",                icon: <Target       className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Random Coverage",      desc: "Revises topics in random and uneven order",             fix: "We spread topics across the full syllabus",              icon: <BarChart3    className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Weak Self-Testing",    desc: "Reads notes again instead of self-testing",             fix: "We swap re-reading for short self-tests",                icon: <BookMarked   className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "No Mark Scheme Use",   desc: "Works on questions without checking mark schemes",      fix: "We follow mark schemes alongside every paper",           icon: <CheckCircle  className="h-7 w-7 text-white" strokeWidth={2} /> },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Common Exam Gaps" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Most exam prep starts well and drifts as the date nears. We close four gaps in every revision plan.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {examGaps.map((gap, i) => (
          <div key={i} className="relative bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 flex flex-col items-center text-center hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#1e5bb3]" />
            <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(15,74,155,0.3)]">
              {gap.icon}
            </div>
            <h3 className="text-base font-extrabold text-[#0a1f3d] mb-1">{gap.title}</h3>
            <ul className="text-gray-500 text-sm leading-snug space-y-1 text-left w-full mt-2">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" /><span>{gap.desc}</span></li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" /><span>{gap.fix}</span></li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── §5 Knowing vs Scoring — 2×2 grid ─── */
const knowingScoring = [
  { title: "Recall Without Reasoning", icon: <Lightbulb className="h-6 w-6" strokeWidth={2} />, problem: "Says the topic without explaining the answer",          fix: "We guide each answer through clear reasoning" },
  { title: "Knowing Without Showing",  icon: <PenTool   className="h-6 w-6" strokeWidth={2} />, problem: "Knows the answer but writes too little",               fix: "We push writing as much as knowing" },
  { title: "Sees But Skips Reading",   icon: <Eye       className="h-6 w-6" strokeWidth={2} />, problem: "Scans question once before writing the answer",         fix: "We re-read every question before any answer" },
  { title: "Practice Without Feedback",icon: <MessageCircle className="h-6 w-6" strokeWidth={2} />, problem: "Does practice questions without checking the answer", fix: "We review each answer with examiner notes" },
];

const customMethodsSection = (
  <>
    <div className="h-1 bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent" />
    <section id="method" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="Knowing vs Scoring" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Knowing content is one thing. Showing it for marks is a different skill rarely taught directly in school.
          </p>
        </div>
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {knowingScoring.slice(0, 2).map((s, i) => (
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
            {knowingScoring.slice(2).map((s, i) => (
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
  </>
);

/* ─── §6 Reading Each Question — 2×2 flat bordered grid ─── */
const questionReading = [
  { title: "Command Words", icon: <Search  className="h-6 w-6" strokeWidth={2} />, problem: "Ignores command words like compare or evaluate",   fix: "We highlight command words in every question" },
  { title: "Mark Counts",   icon: <BarChart3 className="h-6 w-6" strokeWidth={2} />, problem: "Underestimates the marks each part is worth",     fix: "We check each part by its mark value" },
  { title: "Key Words",     icon: <BookOpen className="h-6 w-6" strokeWidth={2} />, problem: "Speeds past key terms in question stems",           fix: "We underline key terms before any answer" },
  { title: "Two-Part Questions", icon: <Layers className="h-6 w-6" strokeWidth={2} />, problem: "Stops at part one of two-part questions",       fix: "We tag every part of multi-part questions" },
];

const customCurriculaSection = (
  <section id="curriculum" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Reading Each Question" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Half of lost marks come from reading too fast. We slow that step so your child answers correctly.
        </p>
      </div>
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {questionReading.slice(0, 2).map((s, i) => (
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
          {questionReading.slice(2).map((s, i) => (
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

/* ─── §7 Plan for Exam Day — 4 gold-icon cards ─── */
const examDayPlan = [
  { title: "Easy Wins First",    icon: <Trophy       className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Heads straight for the hardest question first",    fix: "We grab easy wins to settle nerves" },
  { title: "Watch the Clock",    icon: <Clock        className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Sits too long on the first paper",                 fix: "We assign time across each paper section" },
  { title: "Plan Before Writing",icon: <PenTool      className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Dives into the answer with no plan",               fix: "We add two minutes of planning per answer" },
  { title: "Calm Habits",        icon: <CheckCircle  className="h-6 w-6 text-white" strokeWidth={2} />, problem: "Enters the exam without a breathing routine",       fix: "We run breathing routines before exam morning" },
];

const customPracticesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Plan for Exam Day" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          What your child does in the first five minutes shapes the paper. Simple routines protect those minutes well.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {examDayPlan.map((r, i) => (
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

/* ─── §8 Exams We Help With — 4 curriculum cards ─── */
const examBoards = [
  {
    title: "GCSE & IGCSE",
    bullets: ["AQA, Edexcel, OCR, Cambridge across all main subjects", "We target each paper's mark scheme habits"],
    icon: <BookOpen     className="h-6 w-6" strokeWidth={2} />,
    wm:   <BookOpen     className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: <><a href="/a-level" className="text-[#5b3a8a] font-extrabold underline">A-Level</a> &amp; AS</>,
    titlePlain: "A-Level & AS",
    bullets: ["AQA, Edexcel, OCR, and Cambridge International specifications", "We tailor exam strategy to each paper code"],
    icon: <GraduationCap className="h-6 w-6" strokeWidth={2} />,
    wm:   <GraduationCap className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: "IB Diploma",
    bullets: ["IB Diploma SL and HL across every subject group", "We prep internal assessments and exams together"],
    icon: <Globe         className="h-6 w-6" strokeWidth={2} />,
    wm:   <Globe         className="h-20 w-20" strokeWidth={1} />,
  },
  {
    title: <><a href="/ap" className="text-[#5b3a8a] font-extrabold underline">AP</a> Courses</>,
    titlePlain: "AP Courses",
    bullets: ["AP across STEM, English, and commerce subjects", "We schedule prep around the May exam dates"],
    icon: <Flag          className="h-6 w-6" strokeWidth={2} />,
    wm:   <Flag          className="h-20 w-20" strokeWidth={1} />,
  },
];

/* ─── §9 Inside Our Exam Prep — 4 step cards ─── */
const prepSteps = [
  { title: "Baseline Check",   desc: "Recent grades and topic gaps tell us exactly where to begin.",                            icon: <Search        className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Custom Timeline",  desc: "A week-by-week study plan sits on the wall before any session begins.",                   icon: <Calendar      className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Question Drills",  desc: "Real questions get answered aloud so any weak habits show up early.",                     icon: <FileText      className="h-7 w-7 text-white" strokeWidth={2} /> },
  { title: "Full Mock Run",    desc: "A full-length mock sitting catches timing, stamina, and last weak spots.",                 icon: <ClipboardList className="h-7 w-7 text-white" strokeWidth={2} /> },
];

/* ─── §10 UAE locations ─── */
const uaeLocations = [
  { name: "Abu Dhabi",      desc: "Capital • Most schools",    icon: <MapPin className="h-4 w-4" /> },
  { name: "Dubai",          desc: "Largest city • All boards", icon: <MapPin className="h-4 w-4" /> },
  { name: "Sharjah",        desc: "Growing exam community",    icon: <MapPin className="h-4 w-4" /> },
  { name: "Ajman",          desc: "Northern Emirates",         icon: <MapPin className="h-4 w-4" /> },
  { name: "Al Ain",         desc: "Capital region",            icon: <MapPin className="h-4 w-4" /> },
  { name: "Ras Al Khaimah", desc: "Northern coast",            icon: <MapPin className="h-4 w-4" /> },
  { name: "Fujairah",       desc: "East coast",                icon: <MapPin className="h-4 w-4" /> },
  { name: "Umm Al Quwain",  desc: "6th Emirate",               icon: <MapPin className="h-4 w-4" /> },
];

const customResultsSection = (
  <>
    {/* §8 Exams We Help With */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="Exams We Help With" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Specialists match your child's exact exam board. Your child stays on the right paper style across all four curricula.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {examBoards.map((b, i) => (
            <div key={i} className="relative bg-white border border-gray-200 rounded-[24px] p-8 flex flex-col hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition duration-300 overflow-hidden">
              <div className="w-14 h-14 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-3">
                <span className="text-[#0f4a9b]">{b.icon}</span>
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-3">{b.title}</h3>
              <ul className="text-gray-500 text-sm leading-snug space-y-2">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 self-center" /><span>{b.bullets[0]}</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0 self-center" /><span>{b.bullets[1]}</span></li>
              </ul>
              <div className="absolute bottom-4 right-4 pointer-events-none select-none text-[#0f4a9b]/[0.08]">{b.wm}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* §9 Inside Our Exam Prep */}
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="Inside Our Exam Prep" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Exam stress builds at home before grades shift. Our four steps give the prep routine your child needs first.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {prepSteps.map((step, i) => (
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

    {/* §10 UAE dark section */}
    <section id="results" className="py-16 lg:py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
          <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
          <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Across the UAE</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Helping Students <span className="text-[#C7A24A]">Across the UAE</span>
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
            Exam-day worry softens at home and confidence steadies for families across Dubai, Abu Dhabi, and the UAE.
          </p>
        </div>
      </div>
    </section>
  </>
);

/* ─── §11 Things Parents Ask Us — accordion ─── */
const examFAQs = [
  { q: "Which exams do you help prepare for?",             a: "GCSE and IGCSE with AQA, Edexcel, OCR, and Cambridge. A-Level and AS with the same boards. IB Diploma SL and HL, and AP exams across all main subjects." },
  { q: "When should we start exam preparation?",           a: "Ideally six months before the first paper. Even three months can lift grades clearly if the plan is built right. We tailor the start date to your child's exact paper schedule." },
  { q: "Do you help with mock exams as well as final exams?", a: "Yes. Mocks count just as much because they reveal real gaps before the final paper. We sit and review each mock with your child the same week it ends." },
  { q: "Do you support stress and anxiety around exams?",  a: "Yes. Many strong students lose marks to nerves rather than knowledge. We share simple breathing, sleep, and morning routines that work in the lead-up to exam day." },
  { q: "Are sessions one-to-one or in groups?",            a: "Every session is one-to-one with a specialist matched to your child's exam board. Group sessions are not offered for exam prep because each child's gaps differ." },
  { q: "Are sessions online, in-person, or both?",         a: "Both options are open. Face-to-face sessions cover Dubai and Abu Dhabi, while online sessions support families throughout the northern emirates with the same paper-by-paper format." },
  { q: "How quickly can my child be matched with a tutor?",a: "Inside 24 to 48 hours. The first session opens with a quick paper audit, so your child has a clear plan from day one." },
];

function ExamFAQs() {
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
              Things Parents{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask Us</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {examFAQs.map((faq, i) => {
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
  heroBadgeLabel:   "Exam Preparation",
  heroTitle:        "Smart Prep. Steadier Nerves.",
  heroSubtitle:     "Step-by-step exam prep for IGCSE, A-Level, IB, and AP students.",
  heroDesc:         "",
  heroCTAText:      "Book Your Free Trial Lesson",
  heroCTAMicrocopy: "Be ready, not nervous.",

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 Why Marks Quietly Drop */

  struggles: [],
  customStrugglesSection,    /* §4 Six Common Exam Gaps */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Knowing vs Scoring */

  curricula: [],
  customCurriculaSection,    /* §6 Reading Each Question */

  practices: [],
  customPracticesSection,    /* §7 Plan for Exam Day */

  results: [],
  customResultsSection,      /* §8 Exams We Help With + §9 Inside Our Exam Prep + §10 UAE */

  faqs: [],
  customFAQsSection: <ExamFAQs />, /* §11 Things Parents Ask Us */

  finalCtaTitle:    "Reveal What Holds the Mark",
  finalCtaSubtitle: "When your child knows the content yet keeps losing paper marks, a short check reveals the costly habit.",
  finalCtaButton:   "Book Your Free Trial Lesson",
  finalCtaSubtext:  "Be ready, not nervous.",

  floatingIcon: <ClipboardCheck className="h-4 w-4" />,
  seo: {
    title: "Exam Preparation Tutors UAE | IGCSE, A-Level, IB | Ustaad",
    description: "Intensive exam preparation tutoring in Dubai & Abu Dhabi. IGCSE, A-Level, IB & AP exam revision. Past papers, mark schemes & technique.",
    canonical: "/exam-preparation",
    schema: [localBusinessSchema, serviceSchema("Exam Preparation Tutoring UAE", "Expert 1-to-1 exam prep tutoring for IGCSE, A-Level, IB, and AP students across UAE.", "/exam-preparation"), breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Exam Preparation", url: "/exam-preparation" }]), faqSchema(examFAQs)],
  },
};

export default function ExamPreparationPage() {
  return <SubjectPageTemplate {...data} />;
}
