import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, BookOpen, Brain, Briefcase, Calculator, ChevronDown, ChevronRight,
  Dna, FileText, FlaskConical, GraduationCap, HelpCircle, Landmark,
  MapPin, MessageCircle, PenTool, Target, TrendingUp, Lightbulb,
  ArrowRight, ShieldCheck, Check, Sparkles, Award, Star,
  School, CheckCircle2,
} from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA, StatsBar, GoldButton, WhatsAppIcon, ALevelFreeTrialWhiteboardSection } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const aLevelSchemaFaqs = [
  {
    q: "Are A-Level lessons online or in person?",
    a: "All lessons are live, one-to-one and online. A student in Dubai, Sharjah or Al Ain has the same choice of tutors, with no travel time."
  },
  {
    q: "Can we book a tutor for one A-Level subject only?",
    a: "Yes. You can start with a single subject and add another later; each subject has its own specialist tutor."
  },
  {
    q: "Which A-Level exam boards do you support?",
    a: "Cambridge International, Pearson Edexcel International, AQA, and OCR. Tutors are paired with the exact specification your child's school sits."
  },
  {
    q: "How many A-Level subjects should students take?",
    a: "Most students take three subjects, sometimes four where Further Mathematics fits the timetable. The right combination depends on the universities and courses being considered."
  },
  {
    q: "Do you help students prepare for university entrance tests?",
    a: "Yes. Tutors prepare students for admissions tests such as the UCAT, LNAT and TMUA, alongside their A-Level subjects."
  },
  {
    q: "When should A-Level preparation realistically begin?",
    a: "The strongest results come from steady support across both Year 12 and Year 13. Catching ground earlier in Year 12 is much easier than catching up in the months before final papers."
  },
  {
    q: "Do you support the Extended Project Qualification (EPQ)?",
    a: "Yes. EPQ support covers topic choice, research planning, written drafts, and presentation rehearsal, all aligned with how examiners mark each section."
  },
  {
    q: "What is the difference between AS-Level and A-Level?",
    a: "AS-Level is the first half of the A-Level course. With Cambridge International and Pearson Edexcel International, students can sit AS papers in Year 12; AQA and OCR A-Levels are linear, with every paper at the end of Year 13."
  },
  {
    q: "Can A-Level support also help with predicted grades?",
    a: "Yes. Predicted grades carry significant weight in university applications, and stronger preparation through Year 12 directly improves the predicted grades a school will issue."
  },
];

const WA_URL = "https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20need%20an%20A-Level%20tutor%20for";

const UAE_EMIRATES = [
  {
    city: "Abu Dhabi",
    tutors: "50+ Tutors",
    note: "Capital of the UAE",
    image: "/images/emirates/abu-dhabi.jpg",
    href: "/a-level-tutor-abu-dhabi",
    tags: "abu dhabi capital cambridge edexcel aqa maths physics chemistry biology year 12 13",
  },
  {
    city: "Dubai",
    tutors: "50+ Tutors",
    note: "Most populous emirate",
    image: "/images/emirates/dubai.jpg",
    href: "/a-level-tutor-dubai",
    tags: "dubai burj khalifa downtown cambridge edexcel aqa further maths statistics year 12 13",
  },
  {
    city: "Sharjah",
    tutors: "40+ Tutors",
    note: "Growing A-Level community",
    image: "/images/emirates/sharjah.jpg",
    href: "/contact#form",
    tags: "sharjah cultural heritage british schools aqa edexcel",
  },
  {
    city: "Ajman",
    tutors: "60+ Tutors",
    note: "British system schools",
    image: "/images/emirates/ajman.jpg",
    href: "/contact#form",
    tags: "ajman coastal british schools a level teachers",
  },
  {
    city: "Al Ain",
    tutors: "50+ Tutors",
    note: "Garden City",
    image: "/images/emirates/al-ain.jpg",
    href: "/contact#form",
    tags: "al ain garden city oasis jebel hafeet cambridge edexcel",
  },
  {
    city: "Ras Al Khaimah",
    tutors: "20+ Tutors",
    note: "Northern Emirates",
    image: "/images/emirates/ras-al-khaimah.jpg",
    href: "/contact#form",
    tags: "ras al khaimah rak northern emirates mountains coastal a level",
  },
  {
    city: "Fujairah",
    tutors: "30+ Tutors",
    note: "East coast",
    image: "/images/emirates/fujairah.jpg",
    href: "/contact#form",
    tags: "fujairah east coast gulf ocean live online tutoring",
  },
  {
    city: "Umm Al Quwain",
    tutors: "50+ Tutors",
    note: "Smallest by population",
    image: "/images/emirates/umm-al-quwain.jpg",
    href: "/contact#form",
    tags: "umm al quwain uaq coastal private tutoring year 12 13",
  },
];

export default function ALevelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="A-Level Tutors in Dubai, Abu Dhabi & UAE | Ustaad"
        description="Online 1-to-1 AS and A-Level tutors for Cambridge, Edexcel, AQA and OCR. Maths, Physics, Chemistry, Biology and more. Free 30-minute trial."
        canonical="/a-level"
        ogImage="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema(
            "Private A-Level Tutoring UAE",
            "Online 1-to-1 AS and A-Level tutors for Cambridge, Edexcel, AQA and OCR. Maths, Physics, Chemistry, Biology and more. Free 30-minute trial.",
            "/a-level"
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Curriculum", url: "/curriculum" },
            { name: "A-Level", url: "/a-level" }
          ]),
          faqSchema(aLevelSchemaFaqs),
        ]}
      />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative w-full min-h-[520px] lg:min-h-[580px] xl:min-h-[620px] flex items-center overflow-hidden">
        {/* Background image with blur */}
        <img
          src="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp"
          srcSet="/UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.webp 1x, /UpdatedImages/a-level-tutoring-cambridge-aqa-edexcel-students-uae.jpeg 2x"
          alt="Ustaad tutor supporting Year 12 and Year 13 A-Level students through Cambridge Edexcel and AQA exam preparation across the UAE"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
          width={1200}
          height={800}
          fetchPriority="high"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl pr-6 sm:pr-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3 sm:mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Landmark className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> A-Level
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#0a1f3d] mb-2 leading-[1.15] tracking-tight">
              A-Level Tutors in Dubai and Across the UAE
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0f4a9b] mb-2.5 leading-snug">
              AS and A-Level subject specialists for Year 12 and Year 13.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3" />
            <p className="text-gray-700 text-sm sm:text-base mb-2.5 leading-relaxed max-w-xl">
              One-to-one online tutoring for Cambridge, Edexcel, AQA and OCR. Your child works with a tutor who teaches their subject and follows their school's specification.
            </p>
            <p className="text-[#0f4a9b] text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
              <a href="/a-level-tutor-dubai" className="underline font-bold hover:text-[#0a1f3d]">
                Based in Dubai? See our A-Level Tutor Dubai page.
              </a>{' '}
              Based in Abu Dhabi? See our dedicated{' '}
              <a href="/a-level-tutor-abu-dhabi" className="underline font-bold hover:text-[#0a1f3d]">
                A-Level Tutor Abu Dhabi
              </a>{' '}
              page.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3 mb-2.5">
              <GoldButton
                href="/contact#form"
                className="w-auto self-start px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)] text-center justify-center"
              >
                Book a Free A-Level Trial
              </GoldButton>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask on WhatsApp"
                className="w-auto self-start inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-gray-500 font-medium tracking-wide">
              No commitment. Cancel anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* ── SECTION 2: A-LEVEL SUBJECTS WE COVER ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-gradient-to-b from-[#f8faff] via-white to-[#f4f8fd] relative overflow-hidden border-b border-gray-100">
        {/* Soft Ambient Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-[#0f4a9b]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-6 right-1/4 w-[350px] h-[250px] bg-[#C7A24A]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-2">
              <span className="text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em]">Curriculum Coverage</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#0a1f3d] mb-1.5 tracking-tight">
              A-Level Subjects We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                Cover
              </span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed">
              Choose a subject to see how we teach it.
            </p>
          </div>

          {/* 3D Animated Subject Cards Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="flex overflow-x-auto pb-3 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5 snap-x snap-mandatory scroll-smooth no-scrollbar mb-5">
              {[
                {
                  num: "01",
                  name: "A-Level Maths",
                  desc: "Partial Fractions · Projectiles · Radian Measure",
                  href: "/maths",
                  graphic: (
                    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,74,155,0.18)]" fill="none">
                      <defs>
                        <linearGradient id="mathsPlate" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                          <stop offset="50%" stopColor="#e8f1fd" stopOpacity="0.85" />
                          <stop offset="100%" stopColor="#cfe0f9" stopOpacity="0.9" />
                        </linearGradient>
                        <linearGradient id="mathsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0f4a9b" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                      <rect x="22" y="18" width="116" height="104" rx="22" fill="url(#mathsPlate)" stroke="#ffffff" strokeWidth="2.5" />
                      <rect x="24" y="20" width="112" height="100" rx="20" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.4" />
                      {/* 3D Embossed Sigma Symbol */}
                      <path d="M 98 42 L 54 42 L 76 70 L 54 98 L 98 98" stroke="url(#mathsGrad)" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 98 42 L 54 42 L 76 70 L 54 98 L 98 98" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" />
                      {/* Matrix accents */}
                      <circle cx="112" cy="44" r="3.5" fill="#3b82f6" fillOpacity="0.8" />
                      <circle cx="112" cy="70" r="3.5" fill="#C7A24A" />
                      <circle cx="112" cy="96" r="3.5" fill="#3b82f6" fillOpacity="0.8" />
                    </svg>
                  ),
                },
                {
                  num: "02",
                  name: "A-Level Physics",
                  desc: "Quantum Phenomena · Electric Fields · Particle Physics",
                  href: "/physics",
                  graphic: (
                    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_10px_20px_rgba(37,99,235,0.22)]" fill="none">
                      <defs>
                        <linearGradient id="atomCore" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#60a5fa" />
                          <stop offset="50%" stopColor="#1d4ed8" />
                          <stop offset="100%" stopColor="#0a254a" />
                        </linearGradient>
                        <radialGradient id="atomGlow" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.9" />
                          <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="80" cy="70" r="38" fill="url(#atomGlow)" />
                      {/* 3D Orbital Rings */}
                      <ellipse cx="80" cy="70" rx="58" ry="22" stroke="#93c5fd" strokeWidth="3" strokeOpacity="0.85" transform="rotate(-30 80 70)" />
                      <ellipse cx="80" cy="70" rx="58" ry="22" stroke="#3b82f6" strokeWidth="3" strokeOpacity="0.85" transform="rotate(30 80 70)" />
                      <ellipse cx="80" cy="70" rx="58" ry="20" stroke="#C7A24A" strokeWidth="2.5" strokeOpacity="0.9" transform="rotate(90 80 70)" />
                      {/* Central Quantum Nucleus */}
                      <circle cx="80" cy="70" r="14" fill="url(#atomCore)" stroke="#ffffff" strokeWidth="2.5" />
                      <circle cx="76" cy="66" r="4" fill="#ffffff" fillOpacity="0.8" />
                      {/* Electron Nodes */}
                      <circle cx="124" cy="46" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="36" cy="94" r="5" fill="#C7A24A" stroke="#ffffff" strokeWidth="1.5" />
                      <circle cx="80" cy="18" r="4.5" fill="#60a5fa" stroke="#ffffff" strokeWidth="1.5" />
                    </svg>
                  ),
                },
                {
                  num: "03",
                  name: "A-Level Chemistry",
                  desc: "Aromatic Chemistry · Entropy Changes · Amino Acids",
                  href: "/chemistry",
                  graphic: (
                    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_10px_20px_rgba(199,162,74,0.22)]" fill="none">
                      <defs>
                        <linearGradient id="chemFlask" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#e2edfc" stopOpacity="0.7" />
                        </linearGradient>
                        <linearGradient id="chemLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="50%" stopColor="#d97706" />
                          <stop offset="100%" stopColor="#b45309" />
                        </linearGradient>
                      </defs>
                      {/* 3D Glass Flask Body */}
                      <path d="M 72 20 L 88 20 L 88 48 L 126 112 C 130 118, 126 126, 118 126 L 42 126 C 34 126, 30 118, 34 112 L 72 48 Z" fill="url(#chemFlask)" stroke="#cbd5e1" strokeWidth="3" />
                      <rect x="68" y="16" width="24" height="6" rx="3" fill="#cbd5e1" stroke="#ffffff" strokeWidth="1.5" />
                      {/* Amber Liquid with Reflections */}
                      <path d="M 52 88 L 108 88 L 122 114 C 124 118, 122 122, 116 122 L 44 122 C 38 122, 36 118, 38 114 Z" fill="url(#chemLiquid)" opacity="0.9" />
                      <ellipse cx="80" cy="88" rx="28" ry="6" fill="#fbbf24" opacity="0.8" />
                      {/* Highlights & Bubbles */}
                      <path d="M 44 108 L 74 52" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                      <circle cx="74" cy="102" r="3.5" fill="#ffffff" opacity="0.75" />
                      <circle cx="86" cy="96" r="2.5" fill="#ffffff" opacity="0.8" />
                      <circle cx="92" cy="108" r="3" fill="#ffffff" opacity="0.6" />
                    </svg>
                  ),
                },
                {
                  num: "04",
                  name: "A-Level Biology",
                  desc: "Gene Expression · Nervous Coordination · Populations",
                  href: "/biology",
                  graphic: (
                    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_10px_20px_rgba(199,162,74,0.2)]" fill="none">
                      <defs>
                        <linearGradient id="bioStrandA" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fbbf24" />
                          <stop offset="50%" stopColor="#d97706" />
                          <stop offset="100%" stopColor="#92400e" />
                        </linearGradient>
                        <linearGradient id="bioStrandB" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#93c5fd" />
                          <stop offset="50%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#1e40af" />
                        </linearGradient>
                      </defs>
                      {/* 3D DNA Helix Rungs */}
                      <line x1="42" y1="36" x2="118" y2="44" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="42" cy="36" r="5" fill="#d97706" />
                      <circle cx="118" cy="44" r="5" fill="#3b82f6" />

                      <line x1="56" y1="62" x2="104" y2="68" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="56" cy="62" r="5" fill="#d97706" />
                      <circle cx="104" cy="68" r="5" fill="#3b82f6" />

                      <line x1="104" y1="88" x2="56" y2="94" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="104" cy="88" r="5" fill="#d97706" />
                      <circle cx="56" cy="94" r="5" fill="#3b82f6" />

                      <line x1="118" y1="114" x2="42" y2="122" stroke="#e2e8f0" strokeWidth="4" strokeLinecap="round" />
                      <circle cx="118" cy="114" r="5" fill="#d97706" />
                      <circle cx="42" cy="122" r="5" fill="#3b82f6" />

                      {/* Twisted 3D Helical Ribbons */}
                      <path d="M 38 24 C 44 48, 114 60, 116 80 C 118 100, 48 112, 42 134" stroke="url(#bioStrandA)" strokeWidth="6" strokeLinecap="round" />
                      <path d="M 122 24 C 116 48, 46 60, 44 80 C 42 100, 112 112, 118 134" stroke="url(#bioStrandB)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  num: "05",
                  name: "A-Level English",
                  desc: "Tragedy · Poetry Comparison · Unseen Prose Analysis",
                  href: "/english",
                  graphic: (
                    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_8px_16px_rgba(15,74,155,0.15)]" fill="none">
                      <defs>
                        <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#bfdbfe" />
                          <stop offset="100%" stopColor="#60a5fa" />
                        </linearGradient>
                        <linearGradient id="bookPage" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#f1f5f9" />
                        </linearGradient>
                      </defs>
                      {/* Open 3D Book Base Spine */}
                      <path d="M 80 114 C 54 106, 26 108, 16 114 L 16 42 C 26 36, 54 34, 80 42 C 106 34, 134 36, 144 42 L 144 114 C 134 108, 106 106, 80 114 Z" fill="url(#bookCover)" stroke="#93c5fd" strokeWidth="2.5" />
                      {/* Left and Right 3D Pages */}
                      <path d="M 80 110 C 56 102, 30 104, 22 108 L 22 40 C 30 36, 56 34, 80 40 Z" fill="url(#bookPage)" stroke="#cbd5e1" strokeWidth="1.5" />
                      <path d="M 80 110 C 104 102, 130 104, 138 108 L 138 40 C 130 36, 104 34, 80 40 Z" fill="url(#bookPage)" stroke="#cbd5e1" strokeWidth="1.5" />
                      {/* Page Text Lines */}
                      <line x1="34" y1="52" x2="68" y2="49" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="34" y1="64" x2="68" y2="61" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="34" y1="76" x2="60" y2="73" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

                      <line x1="92" y1="49" x2="126" y2="52" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="92" y1="61" x2="126" y2="64" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="92" y1="73" x2="118" y2="76" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Center Golden Bookmark Ribbon */}
                      <path d="M 80 34 L 80 96 L 85 90 L 90 96 L 90 34 Z" fill="#C7A24A" />
                    </svg>
                  ),
                },
                {
                  num: "06",
                  name: "A-Level Business",
                  desc: "Business Strategy · Globalisation · Change Management",
                  href: "/business",
                  graphic: (
                    <svg viewBox="0 0 160 140" className="w-full h-full drop-shadow-[0_10px_20px_rgba(199,162,74,0.22)]" fill="none">
                      <defs>
                        <linearGradient id="barGold1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fef3c7" />
                          <stop offset="50%" stopColor="#f59e0b" />
                          <stop offset="100%" stopColor="#b45309" />
                        </linearGradient>
                        <linearGradient id="barGold2" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fffbeb" />
                          <stop offset="50%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                      </defs>
                      {/* 3D Platform Ground */}
                      <ellipse cx="80" cy="120" rx="55" ry="12" fill="#e2e8f0" opacity="0.7" />
                      {/* Pillar 1 (Small) */}
                      <rect x="36" y="80" width="20" height="38" rx="4" fill="url(#barGold1)" stroke="#ffffff" strokeWidth="1.5" />
                      <ellipse cx="46" cy="80" rx="10" ry="4" fill="url(#barGold2)" />
                      {/* Pillar 2 (Medium) */}
                      <rect x="66" y="58" width="22" height="60" rx="4" fill="url(#barGold1)" stroke="#ffffff" strokeWidth="1.5" />
                      <ellipse cx="77" cy="58" rx="11" ry="4.5" fill="url(#barGold2)" />
                      {/* Pillar 3 (Large) */}
                      <rect x="98" y="32" width="24" height="86" rx="5" fill="url(#barGold1)" stroke="#ffffff" strokeWidth="2" />
                      <ellipse cx="110" cy="32" rx="12" ry="5" fill="url(#barGold2)" />
                      {/* Rising 3D Trend Arrow */}
                      <path d="M 32 76 L 68 50 L 102 24 L 126 14" stroke="#0f4a9b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <polygon points="132,12 120,12 126,24" fill="#0f4a9b" />
                    </svg>
                  ),
                },
              ].map((subj, i) => (
                <motion.a
                  key={subj.name}
                  href={subj.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl lg:rounded-[24px] p-4 sm:p-5 bg-gradient-to-br from-white via-white/95 to-[#f3f7fd]/90 backdrop-blur-xl border border-white/80 hover:border-[#0f4a9b]/35 shadow-[0_10px_28px_rgba(15,74,155,0.06)] hover:shadow-[0_18px_40px_rgba(15,74,155,0.14)] transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[140px] sm:min-h-[150px] shrink-0 w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none snap-center block select-none"
                >
                  {/* Subtle Inner Lighting Highlights */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-[#0f4a9b]/[0.03] pointer-events-none rounded-2xl lg:rounded-[24px]" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0f4a9b]/8 to-[#C7A24A]/8 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Bar: Number Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-7 h-7 rounded-full bg-[#0a254a] text-white text-[11px] font-black flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#0f4a9b] transition-all duration-300">
                      <span>{subj.num}</span>
                    </div>
                  </div>

                  {/* Card Body with Right-aligned 3D Graphic */}
                  <div className="relative z-10 mt-3 sm:mt-4 flex items-end justify-between gap-2">
                    <div className="flex-1 pr-1.5">
                      <h3 className="text-base sm:text-lg font-black text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug tracking-tight">
                        {subj.name}
                      </h3>
                      <p className="text-gray-500 group-hover:text-gray-700 text-[11px] sm:text-xs font-medium leading-relaxed mt-1 transition-colors line-clamp-2">
                        {subj.desc}
                      </p>
                    </div>

                    {/* 3D Subject Artwork Graphic */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex-shrink-0 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out pointer-events-none select-none -mb-1 -mr-1">
                      {subj.graphic}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Mobile Swipe Hint (Clean text only, no dots, no arrows) */}
            <div className="sm:hidden text-center -mt-2 mb-4 text-xs font-semibold text-gray-500 tracking-wide">
              Swipe to see more
            </div>

            {/* Also Available Capsule */}
            <div className="flex justify-center pt-1">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/95 border border-gray-200/90 shadow-[0_4px_14px_rgba(15,74,155,0.06)] text-xs text-gray-600">
                <span className="font-bold text-[#0a1f3d]">Also Available:</span>
                <span>
                  Further Mathematics,{' '}
                  <a href="/economics" className="text-[#0f4a9b] font-bold underline hover:text-[#0a254a] transition-colors">
                    Economics
                  </a>{' '}
                  &amp; Computer Science
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW USTAAD TUTORS A-LEVEL STUDENTS ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-3 tracking-tight">
              How Ustaad Tutors <span className="text-[#0f4a9b]">A-Level Students</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm lg:text-base font-medium leading-relaxed">
              The Ustaad Approach: A 4-Step Methodology across Two A-Level Years.
            </p>
          </div>

          {/* Connected 4-Step Track Grid (Fits 1 screen on Mobile & Desktop) */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5 items-stretch">
              {[
                {
                  num: "1",
                  title: "Address Gaps Early",
                  desc: "Year 11 trigonometry gaps surface in Year 12 Mechanics within the first half-term.",
                  icon: <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#0284c7]" strokeWidth={2.2} />,
                  bgGradient: "from-[#f0f7ff] via-[#f3f9ff] to-[#e6f2fd]",
                  border: "border-[#bfdbfe]/80",
                  shadow: "shadow-[0_8px_24px_rgba(2,132,199,0.06)]",
                  hoverBorder: "hover:border-[#0284c7]/50",
                  badgeColor: "text-[#0284c7]",
                  nodeColor: "#0284c7",
                  wm: (
                    <svg viewBox="0 0 100 100" className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-[#0284c7]/[0.10] pointer-events-none select-none" fill="none" stroke="currentColor">
                      <circle cx="50" cy="50" r="44" strokeWidth="2" />
                      <circle cx="50" cy="50" r="32" strokeWidth="2" />
                      <circle cx="50" cy="50" r="20" strokeWidth="2" />
                      <circle cx="50" cy="50" r="7" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  num: "2",
                  title: "Mixed-Topic Practice",
                  desc: "Tutors set questions that combine two or more topics, the format the higher-mark papers use.",
                  icon: <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-[#10b981]" strokeWidth={2.2} />,
                  bgGradient: "from-[#f0fdf4] via-[#f3fcf6] to-[#e4f8ed]",
                  border: "border-[#bbf7d0]/80",
                  shadow: "shadow-[0_8px_24px_rgba(16,185,129,0.06)]",
                  hoverBorder: "hover:border-[#10b981]/50",
                  badgeColor: "text-[#10b981]",
                  nodeColor: "#10b981",
                  wm: (
                    <svg viewBox="0 0 100 100" className="absolute -top-2 right-0 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-[#10b981]/[0.18] pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M 50 90 L 50 48" />
                      <path d="M 50 48 C 50 32, 28 28, 22 14" />
                      <path d="M 50 48 C 50 32, 72 28, 78 14" />
                      <path d="M 50 64 C 38 52, 28 52, 16 42" />
                      <path d="M 50 64 C 62 52, 72 52, 84 42" />
                      <circle cx="22" cy="14" r="3.5" fill="currentColor" />
                      <circle cx="78" cy="14" r="3.5" fill="currentColor" />
                      <circle cx="16" cy="42" r="3" fill="currentColor" />
                      <circle cx="84" cy="42" r="3" fill="currentColor" />
                      <circle cx="50" cy="28" r="3.5" fill="currentColor" />
                    </svg>
                  ),
                },
                {
                  num: "3",
                  title: "Past-Paper Marking",
                  desc: "Timed papers are marked against the board's mark scheme, and every lost mark is explained.",
                  icon: <PenTool className="w-4 h-4 sm:w-5 sm:h-5 text-[#d97706]" strokeWidth={2.2} />,
                  bgGradient: "from-[#fffbf0] via-[#fefaf3] to-[#fef1db]",
                  border: "border-[#fed7aa]/80",
                  shadow: "shadow-[0_8px_24px_rgba(217,119,6,0.06)]",
                  hoverBorder: "hover:border-[#d97706]/50",
                  badgeColor: "text-[#d97706]",
                  nodeColor: "#d97706",
                  wm: (
                    <svg viewBox="0 0 100 100" className="absolute bottom-1 right-1 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-[#d97706]/[0.15] pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="25" y="15" width="50" height="65" rx="6" />
                      <line x1="35" y1="30" x2="65" y2="30" />
                      <line x1="35" y1="42" x2="65" y2="42" />
                      <line x1="35" y1="54" x2="55" y2="54" />
                      <path d="M 60 70 L 78 52 L 86 60 L 68 78 Z" />
                      <path d="M 60 70 L 56 82 L 68 78 Z" />
                    </svg>
                  ),
                },
                {
                  num: "4",
                  title: "Two-Year Rhythm",
                  badge: "Year 12 → 13",
                  desc: "Year 12 school exams in the summer term, Year 13 mocks in the winter term, final papers from May.",
                  icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#8b5cf6]" strokeWidth={2.2} />,
                  bgGradient: "from-[#f8f6ff] via-[#fbfaff] to-[#efe9ff]",
                  border: "border-[#ddd6fe]/80",
                  shadow: "shadow-[0_8px_24px_rgba(139,92,246,0.06)]",
                  hoverBorder: "hover:border-[#8b5cf6]/50",
                  badgeColor: "text-[#8b5cf6]",
                  nodeColor: "#8b5cf6",
                  wm: (
                    <svg viewBox="0 0 100 100" className="absolute bottom-2 right-2 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-[#8b5cf6]/[0.18] pointer-events-none select-none" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M 15 80 L 35 60 L 55 70 L 85 25" />
                      <polyline points="72,25 85,25 85,38" />
                      <line x1="10" y1="85" x2="90" y2="85" strokeWidth="1.5" strokeOpacity="0.6" />
                    </svg>
                  ),
                },
              ].map((step, i, arr) => (
                <div key={step.title} className="relative flex flex-col">
                  {/* Desktop Inter-Card Connecting Bridge with Dual Nodes */}
                  {i < arr.length - 1 && (
                    <div className="hidden lg:flex items-center absolute -right-[23px] top-1/2 -translate-y-1/2 z-20 pointer-events-none w-[26px]">
                      <div className="w-full flex items-center justify-between">
                        <div
                          className="w-2.5 h-2.5 rounded-full border-2 bg-white shadow-sm"
                          style={{ borderColor: step.nodeColor }}
                        />
                        <div
                          className="flex-1 h-[2px]"
                          style={{
                            background: `linear-gradient(to right, ${step.nodeColor}, ${arr[i + 1].nodeColor})`,
                            opacity: 0.8,
                          }}
                        />
                        <div
                          className="w-2.5 h-2.5 rounded-full border-2 bg-white shadow-sm"
                          style={{ borderColor: arr[i + 1].nodeColor }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Mobile 2x2 Horizontal Track Connectors between Col 1 & 2 */}
                  {(i === 0 || i === 2) && (
                    <div className="flex lg:hidden items-center absolute -right-[15px] top-1/2 -translate-y-1/2 z-20 pointer-events-none w-[17px]">
                      <div className="w-full flex items-center justify-between">
                        <div
                          className="w-2 h-2 rounded-full border-2 bg-white shadow-sm"
                          style={{ borderColor: step.nodeColor }}
                        />
                        <div
                          className="flex-1 h-[1.5px]"
                          style={{
                            background: `linear-gradient(to right, ${step.nodeColor}, ${arr[i + 1].nodeColor})`,
                            opacity: 0.8,
                          }}
                        />
                        <div
                          className="w-2 h-2 rounded-full border-2 bg-white shadow-sm"
                          style={{ borderColor: arr[i + 1].nodeColor }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className={`relative rounded-xl sm:rounded-2xl lg:rounded-[22px] p-3.5 sm:p-5 lg:p-6 bg-gradient-to-b ${step.bgGradient} border ${step.border} ${step.hoverBorder} ${step.shadow} hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col justify-between h-full min-h-[145px] sm:min-h-[190px] lg:min-h-[210px] select-none`}
                  >
                    {/* Background Subtle Watermark */}
                    {step.wm}

                    {/* Top Header: Icon & Optional Badge */}
                    <div className="relative z-10 flex items-center justify-between mb-2 sm:mb-4">
                      <div className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl bg-white shadow-sm border border-black/5 flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      {step.badge && (
                        <span className="text-[9px] sm:text-[11px] font-semibold text-[#7c3aed] bg-purple-100/70 border border-purple-200/60 px-1.5 sm:px-2.5 py-0.5 rounded-full">
                          {step.badge}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1">
                      <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#0a1f3d] mb-1 sm:mb-1.5 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-[10px] sm:text-xs lg:text-[13px] font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom-Right Step Number */}
                    <div className="relative z-10 flex justify-end mt-1.5 sm:mt-3">
                      <span className={`text-xs sm:text-sm font-black ${step.badgeColor}`}>
                        {step.num}
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MEET THE A-LEVEL TUTORS ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#f5f8fc] via-[#edf3f9] to-[#f8fafc] border-t border-gray-100 relative overflow-hidden select-none">
        {/* Ambient Satin Silk Lighting Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(255,255,255,0.85),transparent_70%)] pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Cool Box Container */}
          <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-[#0f4a9b]/15 shadow-[0_20px_50px_rgba(15,74,155,0.08)] p-8 sm:p-12 lg:p-14 overflow-hidden text-center transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,74,155,0.12)]">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b]" />

            {/* Ambient Radial Color Halos */}
            <div className="absolute -top-16 -left-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* ── COLORFUL BACKGROUND SCHOOL & ACADEMIC ICONS ── */}
            <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
              {/* Top-Left: School Icon Badge (Royal Blue) */}
              <div className="absolute top-5 left-5 sm:top-7 sm:left-8 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/5 border border-blue-400/25 shadow-sm -rotate-12">
                <School className="w-5 h-5 sm:w-6 sm:h-6 text-[#0f4a9b]" />
              </div>

              {/* Bottom-Left: Graduation Cap Badge (Purple) */}
              <div className="absolute bottom-5 left-6 sm:bottom-8 sm:left-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-purple-500/15 to-indigo-600/5 border border-purple-400/25 shadow-sm rotate-6">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>

              {/* Top-Right: Award / Medal Badge (Gold / Amber) */}
              <div className="absolute top-5 right-5 sm:top-7 sm:right-8 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-br from-amber-500/15 to-[#C7A24A]/10 border border-amber-400/30 shadow-sm rotate-12">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7A24A]" />
              </div>

              {/* Bottom-Right: Book / Syllabus Badge (Emerald) */}
              <div className="absolute bottom-5 right-6 sm:bottom-8 sm:right-10 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 border border-emerald-400/25 shadow-sm -rotate-6">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
              </div>

              {/* Mid-Left Subtle Check Badge (Teal) */}
              <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-3 items-center justify-center w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-400/20 shadow-sm -rotate-6">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
              </div>

              {/* Mid-Right Subtle Target Badge (Rose) */}
              <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-3 items-center justify-center w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-400/20 shadow-sm rotate-6">
                <Target className="w-4 h-4 text-rose-600" />
              </div>

              {/* Large Soft Background Watermark Doodles */}
              <School className="absolute -top-6 left-1/3 w-32 h-32 text-[#0f4a9b]/[0.025] -rotate-12" />
              <Award className="absolute -bottom-10 right-1/3 w-36 h-36 text-[#C7A24A]/[0.03] rotate-12" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              {/* Section Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/20 rounded-full mb-3.5 sm:mb-4 shadow-sm">
                <GraduationCap className="h-4 w-4 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-bold uppercase tracking-[0.15em]">
                  Our Educators
                </span>
              </div>

              {/* Website Standard Sans-serif Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] tracking-tight mb-2.5 sm:mb-3 leading-tight">
                Meet the A-Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e6cd9]">Tutors</span>
              </h2>

              {/* Description Paragraph */}
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-normal leading-relaxed mb-6 sm:mb-7">
                See who tutors our A-Level students. Each profile lists the tutor's subjects, exam boards and background, so you know who is teaching before the first lesson.
              </p>

              {/* Standard CTA Button */}
              <div className="relative inline-block z-10">
                <a
                  href="/tutors"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] hover:from-[#1a5bb8] hover:to-[#0f4a9b] shadow-[0_4px_16px_rgba(15,74,155,0.25)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Meet the Ustaad tutors</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: QUALITY A-LEVEL TUTORING AT A FAIR COST ── */}
      <section className="py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(15,74,155,0.25)] border border-white/15">
            {/* Background Ambient Glows & Watermark */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <ShieldCheck className="absolute -bottom-10 right-4 w-72 h-72 text-white/[0.03] pointer-events-none select-none" strokeWidth={0.8} />

            <div className="relative z-10 max-w-3xl">
              {/* Animated Screened Academic Quality Pill */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold mb-4 shadow-sm"
              >
                <ShieldCheck className="h-4 w-4 text-[#C7A24A]" />
                <span className="tracking-wide">Screened Academic Quality</span>
              </motion.div>

              {/* Animated Heading with Staggered Word Reveal */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07 } },
                }}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight flex flex-wrap gap-x-2.5"
              >
                {["Quality", "A-Level", "Tutoring", "at", "a"].map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 16, filter: "blur(5px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 16, scale: 0.94, filter: "blur(5px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
                    },
                  }}
                  className="bg-gradient-to-r from-[#C7A24A] via-[#E2C775] to-[#A8892A] bg-clip-text text-transparent inline-block font-black drop-shadow-[0_2px_12px_rgba(199,162,74,0.35)]"
                >
                  Fair Cost
                </motion.span>
              </motion.h2>

              {/* Animated Expanding Gold Underline Bar */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-5"
              />

              {/* Animated Description Text */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
                className="text-blue-100/90 text-sm sm:text-base leading-relaxed text-justify font-normal"
              >
                Tutor marketplaces list hundreds of profiles and leave parents to judge who can teach. At Ustaad, our academic team screens every A-Level tutor before they take a student, so you are not paying to find out. Families get specialist one-to-one teaching at a cost-effective rate, with the fee agreed before the first paid lesson.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: HOW THE FREE A-LEVEL TRIAL WORKS ── */}
      <ALevelFreeTrialWhiteboardSection />

      {/* ── SECTION 7: WHY A-LEVEL IS HARDER THAN GCSE ── */}
      {/* ── SECTION 7: WHY A-LEVEL IS HARDER THAN GCSE ── */}
      <section className="py-8 sm:py-14 lg:py-20 bg-gradient-to-b from-white via-[#f8faff] to-[#f2f6fc] border-t border-gray-100 relative overflow-hidden">
        {/* Soft Ambient Brand Glows */}
        <div className="absolute top-1/4 -left-20 w-[450px] h-[350px] bg-[#0f4a9b]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[400px] h-[300px] bg-[#C7A24A]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-14 xl:gap-16 lg:items-start">
            {/* Left: Heading & Intro */}
            <div className="lg:w-[320px] xl:w-[360px] flex-shrink-0 lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-2.5 sm:mb-4">
                <span className="text-[#0f4a9b] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em]">
                  The Step Up
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[38px] font-black text-[#0a1f3d] mb-1.5 sm:mb-3 tracking-tight leading-[1.15]">
                Why A-Level Is <br className="hidden sm:inline" />
                Harder Than <span className="text-[#0f4a9b]">GCSE</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-base leading-relaxed max-w-md">
                Four changes after Year 11 that catch strong GCSE students out.
              </p>
            </div>

            {/* Right: 4 Connected Sequential Step Cards - Swipeable Track on Mobile, Grid on Desktop */}
            <div className="flex-1 flex overflow-x-auto pb-3 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 snap-x snap-mandatory scroll-smooth no-scrollbar items-stretch relative">
              {/* Card 1: New Content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_16px_rgba(15,74,155,0.05)] hover:shadow-[0_10px_25px_rgba(15,74,155,0.1)] transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between relative group overflow-visible w-[75vw] max-w-[270px] sm:w-auto sm:max-w-none shrink-0 snap-center"
              >
                <div>
                  {/* Visual Image 1: Physics & Advanced Calculus Lab Setup */}
                  <div className="h-32 sm:h-40 w-full rounded-xl overflow-hidden mb-2.5 sm:mb-3 relative bg-gray-100 border border-gray-100 select-none">
                    <img
                      src="/UpdatedImages/a-level-harder-1-new-content.jpg"
                      alt="A-Level New Content - Classical mechanics and advanced mathematics"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Watermark Step Number */}
                    <span className="absolute top-1.5 right-2 text-2xl sm:text-3xl font-black text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] pointer-events-none select-none">
                      1
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0a1f3d] mb-1 group-hover:text-[#0f4a9b] transition-colors">
                    New Content
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">
                    More specific and abstract topics. E.g., A-Level Maths includes Calculus and Statistics far beyond IGCSE scope. Sciences introduce new mechanisms.
                  </p>
                </div>

                {/* Desktop Chevron Pointer to next card */}
                <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-gray-200 shadow-xs items-center justify-center text-gray-400 pointer-events-none">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </motion.div>

              {/* Card 2: Depth over Breadth */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_16px_rgba(15,74,155,0.05)] hover:shadow-[0_10px_25px_rgba(15,74,155,0.1)] transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between relative group overflow-visible w-[75vw] max-w-[270px] sm:w-auto sm:max-w-none shrink-0 snap-center"
              >
                <div>
                  {/* Visual Image 2: Depth Over Breadth 3D Apparatus */}
                  <div className="h-32 sm:h-40 w-full rounded-xl overflow-hidden mb-2.5 sm:mb-3 relative bg-gray-100 border border-gray-100 select-none">
                    <img
                      src="/UpdatedImages/a-level-harder-2-depth-over-breadth.png"
                      alt="Depth over Breadth - Specialised A-Level Knowledge"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Watermark Step Number */}
                    <span className="absolute top-1.5 right-2 text-2xl sm:text-3xl font-black text-gray-800/80 drop-shadow-[0_1px_3px_rgba(255,255,255,0.8)] pointer-events-none select-none">
                      2
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0a1f3d] mb-1 group-hover:text-[#0f4a9b] transition-colors">
                    Depth over Breadth
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">
                    Go from broad knowledge of 8+ GCSEs to deep, specialist knowledge of 3-4 subjects. Marks reflect critical analysis.
                  </p>
                </div>

                {/* Desktop Chevron Pointer to next card */}
                <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-gray-200 shadow-xs items-center justify-center text-gray-400 pointer-events-none">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </motion.div>

              {/* Card 3: Developed Argumentation */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.16 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_16px_rgba(15,74,155,0.05)] hover:shadow-[0_10px_25px_rgba(15,74,155,0.1)] transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between relative group overflow-visible w-[75vw] max-w-[270px] sm:w-auto sm:max-w-none shrink-0 snap-center"
              >
                <div>
                  {/* Visual Image 3: Student Working on Argumentation & Evidence Evaluation */}
                  <div className="h-32 sm:h-40 w-full rounded-xl overflow-hidden mb-2.5 sm:mb-3 relative bg-gray-100 border border-gray-100 select-none">
                    <img
                      src="/UpdatedImages/a-level-harder-3-developed-argumentation.jpg"
                      alt="Developed Argumentation - Essay writing and evidence evaluation"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Watermark Step Number */}
                    <span className="absolute top-1.5 right-2 text-2xl sm:text-3xl font-black text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] pointer-events-none select-none">
                      3
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0a1f3d] mb-1 group-hover:text-[#0f4a9b] transition-colors">
                    Developed Argumentation
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">
                    Long essay answers and coursework are common in History, English Literature and Business, with marks for structure, evidence and evaluation.
                  </p>
                </div>

                {/* Desktop Chevron Pointer to next card */}
                <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-gray-200 shadow-xs items-center justify-center text-gray-400 pointer-events-none">
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </motion.div>

              {/* Card 4: Greater Self-Management */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.24 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_16px_rgba(15,74,155,0.05)] hover:shadow-[0_10px_25px_rgba(15,74,155,0.1)] transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between relative group overflow-hidden w-[75vw] max-w-[270px] sm:w-auto sm:max-w-none shrink-0 snap-center"
              >
                <div>
                  {/* Visual Image 4: Student Managing Study Time in Library */}
                  <div className="h-32 sm:h-40 w-full rounded-xl overflow-hidden mb-2.5 sm:mb-3 relative bg-gray-100 border border-gray-100 select-none">
                    <img
                      src="/UpdatedImages/a-level-harder-4-greater-self-management.png"
                      alt="Greater Self-Management - Independent study and schedule management"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Watermark Step Number */}
                    <span className="absolute top-1.5 right-2 text-2xl sm:text-3xl font-black text-white/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)] pointer-events-none select-none">
                      4
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0a1f3d] mb-1 group-hover:text-[#0f4a9b] transition-colors">
                    Greater Self-Management
                  </h3>
                  <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed">
                    Less time in class, more expectation for independent reading, practice, and revision. Own your learning journey.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mobile Swipe Hint (Clean text only, no dots, no arrows) */}
            <div className="sm:hidden text-center mt-3 text-xs font-semibold text-gray-500 tracking-wide">
              Swipe to see more
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: UNIVERSITY PATHWAYS AND COMPETITIVE ADMISSIONS ── */}
      <section className="py-6 sm:py-10 lg:py-16 bg-gradient-to-b from-[#f8faff] via-white to-[#f4f8fd] relative overflow-hidden border-t border-gray-100">
        {/* Soft Ambient Brand Glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-[#0f4a9b]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-6 right-1/4 w-[400px] h-[250px] bg-[#C7A24A]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
          {/* Section Header on Light Background */}
          <div className="text-center mb-4 sm:mb-6 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-1.5 sm:mb-2">
              <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-[0.16em]">
                University Pathways
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-black text-[#0a1f3d] mb-1 tracking-tight leading-tight">
              University Pathways and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                Competitive Admissions
              </span>
            </h2>
            <p className="text-gray-500 text-[11px] sm:text-xs lg:text-sm font-medium leading-relaxed max-w-xl mx-auto">
              How A-Level choices shape university access and competitive degree applications.
            </p>
          </div>

          {/* Blue Container Card */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#0f4a9b]/30 overflow-hidden shadow-[0_12px_40px_rgba(15,74,155,0.16)] bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79] text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10 items-stretch">
              
              {/* Left Column: Guidance Points & Note */}
              <div className="lg:col-span-5 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between gap-2.5 sm:gap-4">
                <div>
                  <div className="w-8 sm:w-10 h-1 bg-gradient-to-r from-[#C7A24A] via-[#E5C368] to-[#987820] rounded-full mb-2.5 sm:mb-3.5 shadow-[0_0_8px_rgba(199,162,74,0.4)]" />
                  <div className="space-y-2 sm:space-y-3 text-[11px] sm:text-xs lg:text-[13px] text-blue-50/95 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C368] mt-1 shrink-0 shadow-[0_0_6px_rgba(229,195,104,0.8)]" />
                      <p className="text-left">Every offer letter turns on two things: A-Level grades and the subjects behind them.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C368] mt-1 shrink-0 shadow-[0_0_6px_rgba(229,195,104,0.8)]" />
                      <p className="text-left">Medicine, engineering, and law each set their own non-negotiable subject combinations and minimum grades.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5C368] mt-1 shrink-0 shadow-[0_0_6px_rgba(229,195,104,0.8)]" />
                      <p className="text-left">
                        Ustaad guides A-Level choices in{' '}
                        <a href="/igcse" className="font-bold underline text-[#E5C368] hover:text-[#fff5d6] transition-colors">
                          Year 11
                        </a>{' '}
                        and protects each predicted grade through finals.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 sm:pt-2.5 border-t border-white/10 text-[10px] sm:text-[11px] text-blue-200/70 italic text-left">
                  Requirements differ by university, so check each course page before choosing.
                </div>
              </div>

              {/* Right Column: Degree Table */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="w-full">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr className="bg-white/[0.08] border-b border-white/10">
                        <th className="py-2 sm:py-2.5 px-3 sm:px-5 font-black text-[10px] sm:text-xs text-[#E5C368] uppercase tracking-wider w-[36%] sm:w-[32%] align-middle">
                          Degree
                        </th>
                        <th className="py-2 sm:py-2.5 px-3 sm:px-5 font-black text-[10px] sm:text-xs text-[#E5C368] uppercase tracking-wider align-middle">
                          A-Level subjects usually expected
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-[10.5px] sm:text-xs lg:text-[13px]">
                      {[
                        { degree: "Medicine", expected: "Chemistry, plus Biology at most universities" },
                        { degree: "Engineering", expected: "Maths and Physics" },
                        { degree: "Economics", expected: "Maths" },
                        { degree: "Computer Science", expected: "Maths" },
                        { degree: "Law", expected: "No fixed subjects; an essay subject helps" },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.04] transition-colors">
                          <td className="py-1.5 sm:py-2.5 px-3 sm:px-5 font-bold text-white align-middle truncate">
                            {row.degree}
                          </td>
                          <td className="py-1.5 sm:py-2.5 px-3 sm:px-5 text-blue-100/90 leading-tight sm:leading-snug align-middle">
                            {row.expected}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: A-LEVEL TUTORS ACROSS THE UAE ── */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#fafcff] via-white to-[#f5f8fd] relative overflow-hidden border-y border-gray-100">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] bg-[#0f4a9b]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[320px] bg-[#C7A24A]/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-3.5">
                <MapPin className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Across the UAE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight">
                A-Level Tutors{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                  Across the UAE
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base font-medium max-w-lg md:text-right leading-relaxed">
              Online lessons for Year 12 and 13 students in all seven emirates.
            </p>
          </div>

          {/* Cards Grid / Mobile Horizontal Scroll */}
          <div className="flex overflow-x-auto pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 snap-x snap-mandatory scroll-smooth no-scrollbar">
            {UAE_EMIRATES.map((item, i) => (
              <motion.a
                key={item.city}
                href={item.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-[#C7A24A]/70 shadow-[0_12px_32px_rgba(7,19,36,0.35)] hover:shadow-[0_20px_45px_rgba(15,74,155,0.45)] transition-all duration-500 p-6 flex flex-col justify-between min-h-[200px] group select-none block shrink-0 w-[82vw] max-w-[310px] sm:w-auto sm:max-w-none snap-center"
              >
                {/* Real Photographic Background with Rich Dark Overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.city} A-Level Tutors`}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/95 via-[#0b1b33]/85 to-[#081528]/70 group-hover:via-[#0b1b33]/75 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,162,74,0.18),transparent_70%)] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Card Content - Top */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight group-hover:text-amber-100 transition-colors drop-shadow-sm">
                        {item.city}
                      </h3>
                      <p className="text-xs font-semibold text-[#C7A24A] mt-1">
                        {item.note}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[#C7A24A] flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#C7A24A]/20 group-hover:border-[#C7A24A]/50 transition-all shrink-0">
                      <MapPin className="h-4 w-4 text-[#C7A24A]" />
                    </div>
                  </div>
                </div>

                {/* Card Content - Bottom */}
                <div className="relative z-10 mt-6 pt-3 border-t border-white/15">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-blue-200/80 mb-1.5">
                    Curriculum Alignment
                  </p>
                  <div className="flex items-center gap-2.5 text-[11px] font-semibold text-white/95">
                    <span className="inline-flex items-center gap-1">
                      British <span className="text-[#C7A24A] font-bold">✓</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      IB <span className="text-[#C7A24A] font-bold">✓</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      American <span className="text-[#C7A24A] font-bold">✓</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Mobile Swipe Hint (Clean text only, no dots, no arrows) */}
          <div className="sm:hidden text-center mt-3 text-xs font-semibold text-gray-500 tracking-wide">
            Swipe to see more
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FAQS ── */}
      <section id="faqs" className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-start">
            <div className="flex flex-col items-start text-left lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-3">
                A-Level Tutoring{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                  FAQs
                </span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Common questions from parents and students about A-Level tutoring.
              </p>
            </div>

            <div className="flex flex-col gap-[10px]">
              {aLevelSchemaFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40,
                          height: 40,
                          minWidth: 40,
                          minHeight: 40,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease',
                          border: 'none',
                          boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        <span className="flex items-center justify-center w-full h-full">?</span>
                      </button>
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border"
                        style={{
                          minHeight: '48px',
                          padding: '8px 14px',
                          cursor: 'pointer',
                          background: 'transparent',
                          borderColor: 'rgba(15,74,155,0.1)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">
                          {faq.q}
                        </span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32,
                            height: 32,
                            minWidth: 32,
                            minHeight: 32,
                            borderRadius: '50%',
                            background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                            color: isOpen ? '#fff' : '#0f4a9b',
                            transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          }}
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                        </span>
                      </button>
                    </div>
                    {isOpen && (
                      <div
                        className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                        style={{
                          background: '#f8fafc',
                          borderColor: 'rgba(15,74,155,0.15)',
                          boxShadow: '0 4px 16px rgba(15,74,155,0.06)',
                        }}
                      >
                        <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                        <span
                          className="flex-shrink-0 flex items-center justify-center rounded-full"
                          style={{
                            width: 32,
                            height: 32,
                            minWidth: 32,
                            minHeight: 32,
                            background: '#0f4a9b',
                            color: '#fff',
                          }}
                        >
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

      {/* ── SECTION 11: BOOK AN A-LEVEL TUTOR (FINAL CTA) ── */}
      <FinalCTA
        title="Book an A-Level Tutor"
        subtitle="Your offer, on track."
        button1Text="Book a Free A-Level Trial"
        button1Href="/contact#form"
        subtext1="No commitment. Cancel anytime."
      />
    </Layout>
  );
}
