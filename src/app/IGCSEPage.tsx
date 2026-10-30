import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Atom, BookOpen, Briefcase, Brain, Calculator,
  Calendar, CheckCircle2, ChevronDown, Clock, Dna, FileText, FlaskConical, GraduationCap,
  HelpCircle, Landmark, Layers, Lightbulb, MapPin, MessageCircle, PenTool, Target, TrendingUp, Users, XCircle,
  School, Award,
} from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA, StatsBar, GoldButton, WhatsAppIcon, IGCSESubjectsCosmicSection, IGCSETutoringTreeSection, IGCSEFreeTrialWhiteboardSection, IGCSEWhyStudentsLoseMarksSection } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const igcseSchemaFaqs = [
  {
    q: "What is the difference between IGCSE and GCSE?",
    a: "GCSE is the qualification taught in schools in England. IGCSE is the international version, set by Cambridge and Pearson Edexcel and common in British-curriculum schools in the UAE. Our IGCSE vs GCSE guide compares the two."
  },
  {
    q: "Can students receive support for more than one IGCSE subject?",
    a: "Yes. Many students work with Ustaad across several IGCSE subjects at once."
  },
  {
    q: "How are IGCSE subjects assessed?",
    a: "Methods vary by subject and board. Typical formats include written papers, multiple-choice papers, practical work or coursework, and data-response questions."
  },
];

export default function IGCSEPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout
      headerLogoAlt="Ustaad logo — Cambridge IGCSE and Edexcel International GCSE tutors for Years 9 to 11 across the UAE"
      footerLogoAlt="Ustaad — IGCSE English, Economics and Accounting tutors for Cambridge and Edexcel students in Umm Al Quwain"
      floatingWhatsappAlt="Send a Cambridge IGCSE or Edexcel International GCSE syllabus question to Ustaad on WhatsApp for tutor-led specification help"
    >
      <SEOHead
        title="IGCSE Tutors & Tuition UAE | Cambridge & Edexcel | Ustaad"
        description="Online 1-to-1 IGCSE tuition for Cambridge and Edexcel, Years 9 to 11. Maths, Physics, Chemistry, Biology, English and Business. Free 15-min orientation with the first lesson."
        canonical="/igcse"
        ogImage="/UpdatedImages/year-10-igcse-cambridge-0580-edexcel-4ma1-mathematics-tutor-uae.webp"
        schema={[
          localBusinessSchema,
          serviceSchema(
            "IGCSE Tutoring and Tuition in the UAE",
            "Online 1-to-1 IGCSE tuition for Cambridge and Edexcel, Years 9 to 11. Maths, Physics, Chemistry, Biology, English and Business. Free 15-min orientation with the first lesson.",
            "/igcse"
          ),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Curriculum", url: "/curriculum" },
            { name: "IGCSE", url: "/igcse" }
          ]),
          faqSchema(igcseSchemaFaqs),
        ]}
      />

      {/* ── 1. HERO ── */}
      <section className="relative w-full min-h-[520px] lg:min-h-[600px] flex items-center overflow-hidden">
        <img
          src="/UpdatedImages/year-10-igcse-cambridge-0580-edexcel-4ma1-mathematics-tutor-uae.webp"
          alt="Ustaad tutor coaching a Year 10 IGCSE student through Cambridge 0580 and Edexcel 4MA1 Mathematics specification preparation"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'blur(2px)', transform: 'scale(1.05)' }}
          width={1200}
          height={800}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 sm:via-white/60 sm:to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 w-full">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl pr-8 sm:pr-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <Landmark className="h-3.5 w-3.5" /> IGCSE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-2 sm:mb-3 leading-[1.12] tracking-tight">
              IGCSE Tutors Across the UAE
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-bold text-[#0f4a9b] mb-2.5 leading-snug">
              Online IGCSE tuition for Cambridge and Edexcel, Years 9 to 11.
            </p>
            <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3" />
            <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed max-w-xl">
              Each lesson is one-to-one and built around the papers your child will sit in Year 11.
            </p>
            {/* Cross-reference */}
            <p className="text-gray-500 text-xs sm:text-sm mb-5 leading-relaxed max-w-xl">
              Studying GCSE instead?{' '}
              <a href="/gcse" className="text-[#0f4a9b] font-semibold underline">Read about Ustaad's GCSE tutoring across AQA, OCR, and Pearson Edexcel.</a>{' '}
              Based in Dubai or Abu Dhabi? See our <a href="/igcse-tutor-dubai" className="text-[#0f4a9b] font-semibold underline">IGCSE tutor Dubai</a> and <a href="/igcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold underline">IGCSE tutor Abu Dhabi</a> pages.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 mb-2.5">
              <GoldButton
                href="/contact#form"
                className="w-auto self-start px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm shadow-[0_0_20px_rgba(199,162,74,0.35)] justify-center"
              >
                Book First IGCSE Session
              </GoldButton>
              <a
                href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20need%20an%20IGCSE%20tutor%20for"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask on WhatsApp"
                className="w-auto self-start inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
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

      <StatsBar />

      {/* ── 2. IGCSE SUBJECTS WE TUTOR (3D COSMIC GLASSMORPHIC SECTION) ── */}
      <IGCSESubjectsCosmicSection />


      {/* ── 3. HOW USTAAD TUTORS IGCSE STUDENTS (3D CONNECTED TREE INFOGRAPHIC) ── */}
      <IGCSETutoringTreeSection />


      {/* ── 4. SELECTED IGCSE TUTORS, NOT OPEN LISTINGS ── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#f5f8fc] via-[#edf3f9] to-[#f8fafc] border-t border-b border-gray-100 relative overflow-hidden select-none">
        {/* Ambient Lighting Overlay */}
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/20 rounded-full mb-3.5 sm:mb-4 shadow-sm">
                <Users className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.14em]">Our Tutors</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2.5 sm:mb-3 leading-tight tracking-tight">
                Selected IGCSE Tutors, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e6cd9]">Not Open Listings</span>
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-7 font-normal">
                Open tutor listings let anyone advertise IGCSE lessons. Ustaad's tutors are selected for the subject and board they teach, and you can read their subjects and backgrounds on our tutors page.
              </p>

              <div className="relative inline-block z-10">
                <a
                  href="/tutors"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] hover:from-[#1a5bb8] hover:to-[#0f4a9b] shadow-[0_4px_16px_rgba(15,74,155,0.25)] hover:shadow-[0_6px_20px_rgba(15,74,155,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Meet the IGCSE Tutors</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. HOW THE FREE IGCSE TRIAL WORKS (WHITEBOARD NOTEPAD SECTION) ── */}
      <IGCSEFreeTrialWhiteboardSection />


      {/* ── 6. WHY STRONG STUDENTS LOSE MARKS (EXAMINER DIAGNOSTICS) ── */}
      <IGCSEWhyStudentsLoseMarksSection />

      {/* ── 7. CAMBRIDGE OR EDEXCEL: BOARDS AND TIERS (WHITE BG, BLUE CARDS) ── */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#ffffff] relative overflow-hidden border-b border-gray-100 select-none">
        {/* Ambient Decorative Blurs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0f4a9b]/4 rounded-full blur-[120px] pointer-events-none select-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C7A24A]/4 rounded-full blur-[100px] pointer-events-none select-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-3.5 shadow-2xs">
              <GraduationCap className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Board Coverage</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 leading-tight tracking-tight">
              Cambridge or Edexcel:{' '}
              <span className="text-[#0f4a9b]">Boards and Tiers</span>
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              Two boards set IGCSE papers in UAE schools, and your child's tutor follows the one the school has chosen.
            </p>
          </div>

          {/* Desktop Comparison Table Blue Card */}
          <div className="hidden md:block bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2756] border-2 border-[#0f4a9b]/30 rounded-3xl overflow-hidden shadow-[0_16px_45px_rgba(15,74,155,0.16)] mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/15 bg-white/10">
                    <th className="py-4 px-6 text-xs font-black text-white/70 uppercase tracking-wider w-1/4">Feature</th>
                    <th className="py-4 px-6 text-sm sm:text-base font-extrabold text-[#f0d080] w-[37.5%]">Cambridge IGCSE</th>
                    <th className="py-4 px-6 text-sm sm:text-base font-extrabold text-[#f0d080] w-[37.5%]">Pearson Edexcel International GCSE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-sm sm:text-[14.5px] text-blue-100/90">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-bold text-white/80 bg-white/5">Exam series</td>
                    <td className="py-4 px-6">June and November</td>
                    <td className="py-4 px-6">Summer (May to June), plus November for selected subjects</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-6 font-bold text-white/80 bg-white/5">Grades</td>
                    <td className="py-4 px-6">A* to G, or 9 to 1 where the school chooses it</td>
                    <td className="py-4 px-6">9 to 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Dedicated Board Comparison Cards (Clean & High Readability) */}
          <div className="block md:hidden space-y-4 mb-6">
            {/* Cambridge Card */}
            <div className="bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2756] border-2 border-[#0f4a9b]/30 rounded-2xl p-5 shadow-[0_10px_30px_rgba(15,74,155,0.14)] text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-extrabold text-[#f0d080] mb-3">
                <GraduationCap className="h-3.5 w-3.5 text-[#f0d080]" />
                Cambridge IGCSE
              </div>
              <div className="space-y-3 text-xs text-blue-100/90">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-white/60 font-bold block uppercase text-[10px] tracking-wider mb-0.5">Exam series</span>
                  <span className="font-semibold text-white">June and November</span>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-white/60 font-bold block uppercase text-[10px] tracking-wider mb-0.5">Grades</span>
                  <span className="font-semibold text-white">A* to G (or 9 to 1 where school chooses)</span>
                </div>
              </div>
            </div>

            {/* Pearson Edexcel Card */}
            <div className="bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2756] border-2 border-[#0f4a9b]/30 rounded-2xl p-5 shadow-[0_10px_30px_rgba(15,74,155,0.14)] text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-extrabold text-[#f0d080] mb-3">
                <GraduationCap className="h-3.5 w-3.5 text-[#f0d080]" />
                Pearson Edexcel International GCSE
              </div>
              <div className="space-y-3 text-xs text-blue-100/90">
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-white/60 font-bold block uppercase text-[10px] tracking-wider mb-0.5">Exam series</span>
                  <span className="font-semibold text-white">Summer (May to June), plus November for selected subjects</span>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                  <span className="text-white/60 font-bold block uppercase text-[10px] tracking-wider mb-0.5">Grades</span>
                  <span className="font-semibold text-white">9 to 1 (linear numerical scale)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core and Extended Pathways Side by Side (Blue Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Core Card */}
            <div className="bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2756] border-2 border-[#0f4a9b]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(15,74,155,0.14)] hover:border-[#f0d080]/50 hover:-translate-y-1 transition-all duration-300 group text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 border border-white/20 rounded-full text-xs font-bold text-[#f0d080] uppercase tracking-wider mb-3 sm:mb-4">
                  <Layers className="h-3.5 w-3.5 text-[#f0d080]" />
                  Option A
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 group-hover:text-[#f0d080] transition-colors">Core Pathway</h3>
                <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed font-normal">
                  For students aiming at a steady pass on the core topics. Tutoring locks the essentials in and keeps confidence steady through the exam.
                </p>
              </div>
            </div>

            {/* Extended Card */}
            <div className="bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2756] border-2 border-[#0f4a9b]/30 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(15,74,155,0.14)] hover:border-[#f0d080]/50 hover:-translate-y-1 transition-all duration-300 group text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C7A24A]/25 border border-[#C7A24A]/40 rounded-full text-xs font-bold text-[#f0d080] uppercase tracking-wider mb-3 sm:mb-4">
                  <TrendingUp className="h-3.5 w-3.5 text-[#f0d080]" />
                  Option B
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 group-hover:text-[#f0d080] transition-colors">Extended Pathway</h3>
                <p className="text-blue-100/90 text-xs sm:text-sm leading-relaxed font-normal">
                  For students aiming at top grades across the full syllabus. Tutoring covers every topic and trains for the toughest exam questions.
                </p>
              </div>
            </div>
          </div>

          {/* Dubai & Abu Dhabi IGCSE Tutoring Banner */}
          <div className="mt-8 bg-gradient-to-r from-slate-50 to-blue-50/50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0a1f3d]">Looking for local one-to-one IGCSE tutors in Dubai?</p>
                <p className="text-xs text-gray-600">Connect with Cambridge and Edexcel specialists across all Dubai communities.</p>
              </div>
            </div>
            <a
              href="/igcse-tutor-dubai"
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0f4a9b] hover:bg-[#1a5bb8] shadow-sm transition whitespace-nowrap self-start sm:self-auto"
            >
              IGCSE Tutor Dubai
            </a>
          </div>

        </div>
      </section>

      {/* ── 8. IGCSE TO A-LEVEL TRANSITION (WHITE BG, BLUE CARD, DYNAMIC FONT SCROLL ANIMATIONS) ── */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#ffffff] relative overflow-hidden border-b border-gray-100 select-none">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0f4a9b]/4 rounded-full blur-[100px] pointer-events-none select-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C7A24A]/4 rounded-full blur-[90px] pointer-events-none select-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 lg:items-center justify-between">

            {/* Left: Heading with dynamic font and text scroll animations */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.1 },
                },
              }}
              className="lg:w-[360px] xl:w-[400px] flex-shrink-0 text-left"
            >
              {/* Animated Eyebrow Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: -10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0f4a9b]/8 border border-[#0f4a9b]/15 rounded-full mb-4 shadow-2xs"
              >
                <GraduationCap className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Next Steps</span>
              </motion.div>
              
              {/* Animated Heading */}
              <h2 className="text-3xl lg:text-4xl xl:text-[40px] font-extrabold text-[#0a1f3d] mb-3 leading-[1.15] tracking-tight">
                <span className="inline-block overflow-hidden mr-2">
                  <motion.span
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
                    }}
                    className="inline-block"
                  >
                    IGCSE
                  </motion.span>
                </span>{' '}
                <span className="inline-block overflow-hidden mr-2">
                  <motion.span
                    variants={{
                      hidden: { y: "100%", opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
                    }}
                    className="inline-block"
                  >
                    to
                  </motion.span>
                </span>{' '}
                <br />
                <span className="inline-block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: "100%", opacity: 0, filter: "blur(4px)" },
                      visible: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
                    }}
                    className="inline-block text-[#0f4a9b]"
                  >
                    A-Level Transition
                  </motion.span>
                </span>
              </h2>
              
              {/* Animated Subtitle */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } },
                }}
                className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal"
              >
                How IGCSE results shape the A-Level choices and university options that follow.
              </motion.p>
            </motion.div>

            {/* Right: Blue Gradient Card with repeating scroll animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 35, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.55, ease: "easeOut" },
                },
              }}
              className="flex-1"
            >
              <div className="relative rounded-3xl p-7 sm:p-9 lg:p-10 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a2756] border-2 border-[#0f4a9b]/30 shadow-[0_16px_45px_rgba(15,74,155,0.22)] overflow-hidden">
                
                {/* Decorative Ambient Background Glow inside Card */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#C7A24A]/15 rounded-full blur-2xl pointer-events-none" />

                {/* Animated Gold Accent Indicator Line */}
                <motion.div
                  variants={{
                    hidden: { width: 0, opacity: 0 },
                    visible: { width: 44, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
                  }}
                  className="h-1 bg-gradient-to-r from-[#C7A24A] via-[#f5d77f] to-[#C7A24A] rounded-full mb-5 relative z-10 shadow-sm"
                />

                {/* Card Text Content with Animated Reveal */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
                  }}
                  className="text-blue-50/95 text-sm sm:text-[15.5px] leading-relaxed font-normal relative z-10"
                >
                  At the end of Year 11, your child narrows from eight or more IGCSE subjects to three or four A-Levels. That choice shapes which university courses stay open. Strong IGCSE grades keep the right{' '}
                  <a
                    href="/a-level"
                    className="font-bold underline decoration-[#f0d080] underline-offset-4 text-[#f0d080] hover:text-white transition-colors"
                  >
                    A-Level
                  </a>{' '}
                  combination in reach, and our tutors help families plan the mix with the chosen course in view.
                </motion.p>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 9. IGCSE TUTORS IN EVERY EMIRATE ── */}
      <section className="py-20 bg-[#F4F8FD] relative overflow-hidden isolate border-b border-gray-100">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,74,155,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,74,155,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 border border-[#0f4a9b]/20 rounded-full mb-3">
                <MapPin className="h-3.5 w-3.5 text-[#0f4a9b]" />
                <span className="text-[#0f4a9b] text-[11px] font-extrabold uppercase tracking-[0.15em]">Across the UAE</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight">
                IGCSE Tutors{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">
                  in Every Emirate
                </span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base font-medium max-w-lg md:text-right leading-relaxed">
              Online IGCSE lessons in all seven emirates, for Cambridge and Edexcel.
            </p>
          </div>

          {/* Cards Grid / Mobile Horizontal Scroll */}
          <div className="flex overflow-x-auto pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 snap-x snap-mandatory scroll-smooth no-scrollbar">
            {[
              {
                city: "Abu Dhabi",
                note: "Capital of the UAE",
                image: "/images/emirates/abu-dhabi.jpg",
                href: "/igcse-tutor-abu-dhabi",
              },
              {
                city: "Dubai",
                note: "Most populous · All boards",
                image: "/images/emirates/dubai.jpg",
                href: "/igcse-tutor-dubai",
              },
              {
                city: "Sharjah",
                note: "Growing IGCSE community",
                image: "/images/emirates/sharjah.jpg",
                href: "/contact#form",
              },
              {
                city: "Ajman",
                note: "Cambridge & Edexcel",
                image: "/images/emirates/ajman.jpg",
                href: "/contact#form",
              },
              {
                city: "Al Ain",
                note: "Cambridge focused",
                image: "/images/emirates/al-ain.jpg",
                href: "/contact#form",
              },
              {
                city: "Ras Al Khaimah",
                note: "Northern Emirates",
                image: "/images/emirates/ras-al-khaimah.jpg",
                href: "/contact#form",
              },
              {
                city: "Fujairah",
                note: "East coast",
                image: "/images/emirates/fujairah.jpg",
                href: "/contact#form",
              },
              {
                city: "Umm Al Quwain",
                note: "Smallest by population",
                image: "/images/emirates/umm-al-quwain.jpg",
                href: "/contact#form",
              },
            ].map((item, i) => (
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
                    alt={`${item.city} IGCSE Tutors`}
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
                      Cambridge <span className="text-[#C7A24A] font-bold">✓</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      Edexcel <span className="text-[#C7A24A] font-bold">✓</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      1-to-1 <span className="text-[#C7A24A] font-bold">✓</span>
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

      {/* ── 10. IGCSE TUTORING FAQS ── */}
      <section id="faqs" className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-start">

            {/* Left: Heading */}
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-4">
                <GradientHeadingText text="IGCSE Tutoring FAQs" />
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Common questions from parents and students about IGCSE tutoring.
              </p>
            </div>

            {/* Right: Accordion */}
            <div className="flex flex-col gap-[10px] w-full">
              {([
                {
                  q: "What is the difference between IGCSE and GCSE?",
                  a: (
                    <>
                      GCSE is the qualification taught in schools in England. IGCSE is the international version, set by Cambridge and Pearson Edexcel and common in British-curriculum schools in the UAE. Our{' '}
                      <a href="/blogs/igcse-vs-gcse-curriculum-differences-uae" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                        IGCSE vs GCSE guide
                      </a>{' '}
                      compares the two.
                    </>
                  ),
                },
                {
                  q: "Can students receive support for more than one IGCSE subject?",
                  a: "Yes. Many students work with Ustaad across several IGCSE subjects at once.",
                },
                {
                  q: "How are IGCSE subjects assessed?",
                  a: "Methods vary by subject and board. Typical formats include written papers, multiple-choice papers, practical work or coursework, and data-response questions.",
                },
              ] as { q: string; a: React.ReactNode }[]).map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40, height: 40, minWidth: 40, minHeight: 40,
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
                          minHeight: '48px', padding: '8px 14px', cursor: 'pointer',
                          background: 'transparent', borderColor: 'rgba(15,74,155,0.1)',
                        }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                        <span
                          className="flex-shrink-0 flex items-center justify-center"
                          style={{
                            width: 32, height: 32, minWidth: 32, minHeight: 32,
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
                          style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}
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

      {/* ── 11. BOOK AN IGCSE TUTOR (FINAL CTA) ── */}
      <FinalCTA
        title="Book an IGCSE Tutor"
        subtitle="One subject or several, Cambridge or Edexcel."
        button1Text="Book First IGCSE Session"
        button1Href="/contact#form"
        subtext1="No commitment. Cancel anytime."
      />

    </Layout>
  );
}
