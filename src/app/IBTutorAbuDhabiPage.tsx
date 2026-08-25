import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  CheckCircle, ChevronDown, Clock, MapPin,
  MessageCircle, Star, Target, Users, ArrowRight,
  Calculator, BookOpen, Compass, Layers, CheckCircle2,
  AlertTriangle, MessageSquareQuote, Video, PenTool, ArrowRightLeft,
  Calendar, FileText, Timer
} from 'lucide-react';
import { Layout, GoldButton, StatsBar, SchoolsMarquee, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, singleReviewSchema, reviewSchema } from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20IB%20tutoring%20support%20in%20Abu%20Dhabi.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const abuDhabiSchoolLogos = [
  { name: 'Raha International School', file: 'raha.png', alt: 'Raha International School Abu Dhabi logo', scale: 1.25 },
  { name: 'British International School Abu Dhabi', file: 'bisad.png', alt: 'BISAD Abu Dhabi logo', scale: 1.25 },
  { name: 'GEMS American Academy', file: 'gems-american-academy-abu-dhabi.png', alt: 'GEMS American Academy Abu Dhabi logo', scale: 1.25 },
  { name: 'ACS Abu Dhabi', file: 'acs.png', alt: 'American Community School Abu Dhabi logo', scale: 1.25 },
  { name: 'Repton School Abu Dhabi', file: 'repton.png', alt: 'Repton School Abu Dhabi logo', scale: 1.25 },
];

const FAQS = [
  { q: "How many weekly sessions do most Abu Dhabi Diploma families start with?", a: "Most begin with one or two sessions a week per subject, then adjust as mocks approach. MYP families usually start with one. We suggest the lightest schedule that still moves the predicted grade, not the heaviest." },
  { q: "Can sessions fit around school hours and Abu Dhabi traffic?", a: "Yes. Sessions run online, so there is no drive and no traffic to plan around. Most families choose after-school, early-evening or weekend slots, and we hold the same weekly time once it suits everyone at home." },
  { q: "My child learns better face to face. Does online tutoring really work?", a: "Online one-to-one keeps it personal: a shared screen, a live document, and a tutor watching your child work as it happens. Most students who prefer in-person settle within two or three sessions once the format feels familiar." },
  { q: "Will tutors follow my child's own school deadlines and assessment timeline?", a: "Yes. The plan is built around your child's school calendar, so internal assessment drafts and mock dates shape each term. Share the school's deadline list at the first session and we work backwards from it together." },
  { q: "We travel between Abu Dhabi and abroad often. Can the schedule follow us?", a: "Yes. Because tuition is online, the same tutor continues wherever your family is, across time zones. Tell us the travel dates in advance and we shift the weekly slot rather than losing the momentum you have built." },
  { q: "Can we pause during exams and the busiest coursework weeks?", a: "Yes. Sessions pause automatically through the April to May exam window so your child rests before papers, and we lighten weeks when CAS, EE or IA deadlines cluster. Paused weeks are never charged for." },
  { q: "We only want help for the final stretch before May exams. Is that possible?", a: "Yes. Short, focused blocks are common: two or three sessions a week for the closing weeks, spent only on papers still to be sat. New content teaching stops and every session becomes past-paper practice." }
];

const GridBackground = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'ibgrid-l' : 'ibgrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(26,106,99,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'ibgrid-l' : 'ibgrid-d'})`} />
  </svg>
);

export default function IBTutorAbuDhabiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="IB Tutor Abu Dhabi | Online MYP, SL & HL Tuition"
        description="Private online IB tutoring for Abu Dhabi families. Subject-matched MYP, SL and HL tutors, flexible weekly slots and between-session help. First session free."
        url="https://ustaad.ae/ib-tutor-abu-dhabi"
        schema={[
          cityLocalBusinessSchema('Abu Dhabi', 'IB Tutoring'),
          breadcrumbSchema([
            { name: 'Home', url: 'https://ustaad.ae' },
            { name: 'IB Curriculum', url: 'https://ustaad.ae/ib-curriculum' },
            { name: 'IB Tutor Abu Dhabi', url: 'https://ustaad.ae/ib-tutor-abu-dhabi' }
          ]),
          serviceSchema('Online IB Tutoring', 'Expert MYP and Diploma tutoring for Abu Dhabi students.'),
          faqSchema(FAQS),
          reviewSchema(5, 5)
        ]}
      />

      {/* HERO SECTION */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center min-h-[85vh] pt-32 pb-20">
        <GridBackground />
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 md:opacity-100">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="ibGrowthGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#1A6A63" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#1A6A63" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path d="M-100,600 C300,550 500,450 700,300 C900,150 1100,100 1500,50 L1500,600 Z" fill="url(#ibGrowthGrad)" opacity="0.15" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-left text-white max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-4 backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-[#22b8cd]" /> Serving Abu Dhabi Families
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-white">
              <GradientHeadingText>IB Tutor Abu Dhabi,</GradientHeadingText><br className="hidden sm:block" /> from MYP to Diploma
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-6 max-w-xl font-medium leading-relaxed">
              Private online IB tuition for Abu Dhabi families, matched by subject, level and exam session.
            </p>
            <ul className="flex flex-col gap-2.5 mb-8 text-sm sm:text-[15px] font-medium text-white/90">
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-5 h-5 text-[#22b8cd] flex-shrink-0" /> MYP Diploma SL & HL</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-5 h-5 text-[#22b8cd] flex-shrink-0" /> IA, EE & TOK help</li>
              <li className="flex items-center gap-2.5"><CheckCircle2 className="w-5 h-5 text-[#22b8cd] flex-shrink-0" /> First Session Free</li>
            </ul>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href={BOOKING} className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-full px-8 py-3.5 text-sm sm:text-[15px] hover:brightness-110 shadow-lg shadow-[#C7A24A]/25 transition transform hover:-translate-y-0.5 active:scale-95">
                Claim a Free IB Session
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-full px-6 py-3.5 text-sm transition">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> or WhatsApp a question from tonight's homework
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1A6A63]/20 to-[#22b8cd]/20 rounded-[2.5rem] transform rotate-3 scale-105" />
            <img 
              src="/images/blogs/ib-tutor-abu-dhabi-online-diploma-session.webp" 
              alt="Abu Dhabi IB Diploma student in a live online session with a Ustaad tutor annotating an IB past paper." 
              className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl border border-white/10 object-cover aspect-[4/3]"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* TRUST PROOF STRIP */}
      <section className="py-5 bg-[#FAFAFA] border-y border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mb-1">
            Trusted by IB families at Raha, BISAD, ACS and Repton.
          </p>
        </div>
      </section>

      <StatsBar />

      {/* 1 HOW YOUR CHILD'S IB HOUR IS SPENT */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14304D] mb-3">How Your Child's IB Hour Is Spent</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">A look at the sixty minutes, from shared screen to next steps.</p>
          </div>
          
          <div className="mb-8 max-w-4xl mx-auto">
            <img src="/ib-tutor-abu-dhabi-session-flow-icons.svg" alt="Six icons showing how a Ustaad IB session runs, from shared screen to written next steps." className="w-full h-auto opacity-90" loading="lazy" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-[#14304D] mb-2">One Shared Screen</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Tutor and student work the same live document together, in real time.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-[#14304D] mb-2">Drafts Reviewed First</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Current coursework drafts get feedback before any new content is taught.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-[#14304D] mb-2">Target on Record</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Every session opens with the university course and points target visible.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-[#14304D] mb-2">The Week Mapped</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">We agree exactly what your child studies before the next session.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-[#14304D] mb-2">Answers, Not Notes</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Time goes into writing full answers, not copying tidy revision notes.</p>
            </div>
            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200">
              <h3 className="font-bold text-[#14304D] mb-2">Written Next Steps</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Each hour ends with two or three clear actions to complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 WHERE THE JUMP TO DIPLOMA BITES */}
      <section className="py-14 sm:py-16 bg-[#F6F8F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14304D] mb-3">Where the Jump to Diploma Bites</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">The habits the Diploma assumes but classrooms rarely slow down for.</p>
          </div>

          <div className="mb-8 max-w-4xl mx-auto">
            <img src="/ib-tutor-abu-dhabi-diploma-skills-icons.svg" alt="Six icons showing the study skills Ustaad rebuilds for the move from MYP to the Diploma." className="w-full h-auto opacity-90" loading="lazy" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Full Working</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Maths answers written line by line, the way examiners award marks.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Exam Wording</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Subject terms used the exact way IB question papers expect them.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Step-By-Step Answers</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Economics and Psychology answers explained step by step, not scattered points.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Working to Time</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Long answers practised against the clock before the real paper.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Neat Data</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Science results written up with the right units and sensible rounding.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Answering What Is Asked</h3>
              <p className="text-sm text-[#46535E] leading-relaxed">Describe, explain and compare done exactly as the question asks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 WHAT YOU KEEP AFTER THE FREE SESSION */}
      <section className="py-14 sm:py-16 bg-white border-y border-[#E6EBEE]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14304D] mb-3">What You Keep After the Free Session</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-10 max-w-xl mx-auto">Four things that stay with you, whether or not you continue.</p>
          
          <div className="max-w-4xl mx-auto mb-10">
            <img src="/ib-tutor-abu-dhabi-free-session-takeaways.svg" alt="Four things families keep after a free IB session: a starting point, the gap, a route, a held slot." className="w-full h-auto" loading="lazy" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div>
              <h3 className="font-bold text-[#14304D] mb-1">Honest Starting Point</h3>
              <p className="text-sm text-[#46535E]">A frank read on where your child actually sits today.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#14304D] mb-1">A Two-Year Route</h3>
              <p className="text-sm text-[#46535E]">The path from today to final exams sketched, not guessed.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#14304D] mb-1">The Gap in Numbers</h3>
              <p className="text-sm text-[#46535E]">The distance between current marks and the target, written plainly.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#14304D] mb-1">A Slot Held</h3>
              <p className="text-sm text-[#46535E]">A weekly Abu Dhabi time reserved, should you choose to continue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 TUITION THAT BENDS AROUND IB DEADLINES */}
      <section className="py-14 sm:py-16 bg-[#F6F8F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14304D] mb-3">Tuition That Bends Around IB Deadlines</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Where our timetable moves so IB crunch weeks stay manageable.</p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <img src="/ib-tutor-abu-dhabi-academic-year-timeline.svg" alt="A school-year timeline showing when Ustaad IB sessions intensify, lighten or pause for Abu Dhabi families." className="w-full h-auto" loading="lazy" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Mock Run-Ups</h3>
              <p className="text-sm text-[#46535E]">Sessions ramp up in the weeks before each school mock.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Holiday Intensives</h3>
              <p className="text-sm text-[#46535E]">Winter and spring breaks used for focused catch-up blocks.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Coursework Crunches</h3>
              <p className="text-sm text-[#46535E]">Lighter weeks when Extended Essay and IA deadlines land together.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Travel Continuity</h3>
              <p className="text-sm text-[#46535E]">The same tutor keeps sessions running while your family travels abroad.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Ramadan Timing</h3>
              <p className="text-sm text-[#46535E]">Slots move to late-evening or pre-Iftar through the holy month.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Exam-Week Rest</h3>
              <p className="text-sm text-[#46535E]">Sessions pause during the April to May window so students recover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 ONE TUTOR PER SUBJECT, MATCHED TO YOU */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14304D] mb-3">One Tutor Per Subject, Matched to You</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Chosen by subject and level; each tutor's focus sits below.</p>
          </div>

          <div className="mb-8 max-w-4xl mx-auto">
            <img src="/ib-tutor-abu-dhabi-subject-icons.svg" alt="Six subject icons for the IB subjects Ustaad tutors in Abu Dhabi." className="w-full h-auto opacity-90" loading="lazy" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
            <a href="/ib-maths-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Maths Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• AA and AI routes</li>
                <li>• Non-calculator and calculator papers</li>
                <li>• The maths exploration</li>
                <li>• Technique for SL and HL</li>
              </ul>
            </a>
            <a href="/ib-biology-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Biology Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• SL and HL syllabus</li>
                <li>• Applying concepts to data</li>
                <li>• The scientific investigation</li>
                <li>• Extended response questions</li>
              </ul>
            </a>
            <a href="/ib-physics-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Physics Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• SL and HL content</li>
                <li>• Data and practical questions</li>
                <li>• The scientific investigation</li>
                <li>• Extended written answers</li>
              </ul>
            </a>
            <a href="/ib-english-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB English Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• English A and English B</li>
                <li>• Spoken-assessment coaching</li>
                <li>• Paper 1 unseen analysis</li>
                <li>• Higher-level essay writing</li>
              </ul>
            </a>
            <a href="/ib-chemistry-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Chemistry Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• SL and HL depth</li>
                <li>• Reactivity and analysis questions</li>
                <li>• The scientific investigation</li>
                <li>• Structured calculation papers</li>
              </ul>
            </a>
            <a href="/ib-economics-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Economics Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• SL and HL papers</li>
                <li>• Diagram-led answers</li>
                <li>• The commentary portfolio</li>
                <li>• Data-response technique</li>
              </ul>
            </a>
          </div>
          <div className="text-center">
            <a href="/ib-curriculum" className="text-sm font-bold text-[#1A6A63] hover:underline">See full subject list and core overview →</a>
          </div>
        </div>
      </section>

      {/* 6 WHEN ABU DHABI PARENTS TEND TO CALL */}
      <section className="py-14 sm:py-16 bg-[#F6F8F9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14304D] mb-3">When Abu Dhabi Parents Tend to Call</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Four everyday signals families notice before that first phone call.</p>
          </div>
          
          <div className="mb-10 max-w-4xl mx-auto">
            <img src="/ib-tutor-abu-dhabi-parent-signal-icons.svg" alt="Four everyday signs Abu Dhabi parents notice before booking IB tutoring." className="w-full h-auto" loading="lazy" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-2xl border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">The Slipping Prediction</h3>
              <p className="text-sm text-[#46535E]">Predicted grades slip below the target on two straight reports.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Long Nights, Little Progress</h3>
              <p className="text-sm text-[#46535E]">Hours at the desk, yet the topic list barely shrinks.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Coursework Left Late</h3>
              <p className="text-sm text-[#46535E]">TOK and Extended Essay tasks keep sliding down the list.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-[#E6EBEE]">
              <h3 className="font-bold text-[#14304D] mb-2">Gone Quiet About It</h3>
              <p className="text-sm text-[#46535E]">A once-strong subject that never comes up at dinner now.</p>
            </div>
          </div>
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs text-gray-500">If two or more signals ring true, the free first session is the quickest way to know whether tutoring will help.</p>
          </div>
        </div>
      </section>

      {/* 7 BETWEEN-SESSION HELP BY MESSAGE */}
      <section className="py-14 sm:py-16 bg-[#FAFAFA] border-y border-slate-200/80 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_450px] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A6A63]/10 text-[#1A6A63] text-xs font-bold uppercase tracking-wider mb-4">
                <MessageCircle className="h-3 w-3" /> STUCK ON TONIGHT'S QUESTION?
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#14304D] mb-4">
                Photograph the Problem, Get It Explained Within the Hour
              </h2>
              <p className="text-base text-[#46535E] leading-relaxed mb-6">
                SL or HL questions across your child's subjects, answered by a specialist tutor.
              </p>
              
              <div className="flex items-center gap-2 mb-8 text-sm font-semibold text-[#14304D]">
                <Clock className="w-4 h-4 text-[#C7A24A]" /> Most Abu Dhabi messages answered inside fifteen minutes.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full px-8 py-3.5 text-[15px] transition shadow-lg shadow-[#25D366]/25 transform hover:-translate-y-0.5 active:scale-95">
                  <MessageCircle className="w-5 h-5" /> Message a Tutor
                </a>
                <p className="text-xs text-gray-500 max-w-[200px] leading-tight">
                  No account, no card. One clear photo of the question is enough.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[320px]">
              <img src="/ib-tutor-abu-dhabi-whatsapp-help-mockup.webp" alt="A WhatsApp thread where a Ustaad tutor answers an Abu Dhabi student's IB question with worked steps." className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 8 ONE ABU DHABI FAMILY'S IB YEAR */}
      <section className="py-16 sm:py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #060f22 0%, #14304D 50%, #1A6A63 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <MessageSquareQuote className="w-12 h-12 text-white/20 mx-auto mb-6" />
          
          <div className="flex justify-center mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-[#f0c96a] fill-current" />)}
          </div>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
            "The sessions transformed how my daughter approached HL Chemistry. Her tutor guided her through the Internal Assessment perfectly, and her predicted points jumped from a 4 to a 6 just in time for university applications."
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1A6A63] border border-white/20 flex items-center justify-center text-lg font-bold">
              FA
            </div>
            <div className="text-left">
              <div className="font-bold">Fatima A.</div>
              <div className="text-sm text-white/70">Al Reem Island, Abu Dhabi · Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 BEFORE YOU BOOK: ABU DHABI QUESTIONS */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14304D] mb-3">Before You Book: Abu Dhabi Questions</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Seven scheduling and delivery questions we hear most from local families.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`border ${isOpen ? 'border-[#1A6A63]/30 bg-[#1A6A63]/[0.02]' : 'border-slate-200 bg-white'} rounded-2xl overflow-hidden transition-all duration-300`}>
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold pr-4 ${isOpen ? 'text-[#1A6A63]' : 'text-[#14304D]'}`}>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1A6A63]' : 'text-gray-400'}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 text-sm text-[#46535E] leading-relaxed border-t border-[#1A6A63]/10 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALSO FOR ABU DHABI FAMILIES (Internal Linking Grid) */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#14304D] mb-8 text-center">Related Support Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/ib-curriculum" className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#1A6A63]/30 hover:shadow-md transition block">
              <h3 className="font-bold text-[#14304D] group-hover:text-[#1A6A63] transition flex justify-between items-center mb-1">
                IB Programme Hub <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-xs text-gray-500">For the full MYP, SL and HL breakdown and Core overview.</p>
            </a>
            <a href="/ib-sciences-tutor-abu-dhabi" className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#1A6A63]/30 hover:shadow-md transition block">
              <h3 className="font-bold text-[#14304D] group-hover:text-[#1A6A63] transition flex justify-between items-center mb-1">
                IB Sciences Tutor Abu Dhabi <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-xs text-gray-500">For Physics, Chemistry, Biology and the scientific investigation.</p>
            </a>
            <a href="/myp-tutor-abu-dhabi" className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#1A6A63]/30 hover:shadow-md transition block">
              <h3 className="font-bold text-[#14304D] group-hover:text-[#1A6A63] transition flex justify-between items-center mb-1">
                MYP Tutor Abu Dhabi <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-xs text-gray-500">For Grades 6 to 10, ahead of the Diploma years.</p>
            </a>
            <a href="/ib-maths-tutor-abu-dhabi" className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#1A6A63]/30 hover:shadow-md transition block">
              <h3 className="font-bold text-[#14304D] group-hover:text-[#1A6A63] transition flex justify-between items-center mb-1">
                IB Maths Tutor Abu Dhabi <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-xs text-gray-500">For AA, AI, the exploration and SL or HL papers.</p>
            </a>
            <a href="/ib-english-tutor-abu-dhabi" className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#1A6A63]/30 hover:shadow-md transition block">
              <h3 className="font-bold text-[#14304D] group-hover:text-[#1A6A63] transition flex justify-between items-center mb-1">
                IB English Tutor Abu Dhabi <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-xs text-gray-500">For English A and B and spoken-assessment technique.</p>
            </a>
            <a href="/igcse-tutor-abu-dhabi" className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#1A6A63]/30 hover:shadow-md transition block">
              <h3 className="font-bold text-[#14304D] group-hover:text-[#1A6A63] transition flex justify-between items-center mb-1">
                IGCSE Tutor Abu Dhabi <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-xs text-gray-500">For Year 10 and 11 in British-curriculum schools.</p>
            </a>
          </div>
        </div>
      </section>

      {/* 10 TWO SIMPLE WAYS TO START */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14304D] mb-3">Two Simple Ways to Start</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Both free, both online, neither asking for any commitment.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#C7A24A]/10 text-[#C7A24A] flex items-center justify-center mb-5">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#14304D] mb-3">A Free First Session</h3>
              <p className="text-sm text-[#46535E] mb-6">Thirty online minutes with a subject-matched IB tutor, cost-free.</p>
              <a href={BOOKING} className="mt-auto w-full inline-flex items-center justify-center bg-[#C7A24A] text-white font-bold rounded-xl px-6 py-3.5 text-[15px] hover:bg-[#b59240] transition">
                Book a Free Session
              </a>
            </div>
            
            <div className="bg-[#f8fafc] rounded-3xl p-8 border border-slate-200 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5">
                <MessageCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#14304D] mb-3">A Question by Message</h3>
              <p className="text-sm text-[#46535E] mb-6">Send any IB question and get a worked reply quickly.</p>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold rounded-xl px-6 py-3.5 text-[15px] hover:bg-[#20bd5a] transition">
                <MessageCircle className="w-5 h-5" /> Ask on WhatsApp
              </a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            First session free. Evening, weekend and Ramadan slots. Serving Abu Dhabi families, delivered online across the UAE. Ustaad has operated in the UAE since 2015.
          </div>
        </div>
      </section>
    </Layout>
  );
}
