import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, type Variants } from 'motion/react';
import {
  ShieldCheck,
  Check,
  Award,
  BookOpen,
  ChevronDown,
  GraduationCap,
  Briefcase,
  Layers,
  ArrowRight,
  Clock,
  Calendar,
  Sparkles,
  HelpCircle,
  Star,
  Lock,
  Zap,
} from 'lucide-react';
import { Layout, WhatsAppIcon, SwipeIndicator } from './shared';


import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, faqSchema, localBusinessSchema, personSchema } from './shared/schemas';
import { getTutorBySlug, TUTORS } from '../content/tutors';

const aboutSectionContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const eyebrowVariants: Variants = {
  hidden: { opacity: 0, y: -12, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const bulletsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const bulletItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const checkIconVariants: Variants = {
  hidden: {
    scale: 0,
    rotate: -45,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 420,
      damping: 22,
    },
  },
};

const certCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const curriculumSectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const curriculumItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const availabilityContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const availabilityCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const stepsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const stepCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 26,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const faqContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

const faqItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TutorProfilePage({ tutorSlug }: { tutorSlug?: string }) {
  const { pathname } = useLocation();
  const slug = tutorSlug || pathname.replace(/^\/tutors\//, '').replace(/\/$/, '');
  const tutor = getTutorBySlug(slug) || TUTORS['tabraiz-khan'];

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  const viewportConfig = { once: isMobile, amount: isMobile ? 0.08 : 0.2 };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tutors', url: '/tutors' },
    { name: tutor.name, url: `/tutors/${tutor.slug}` },
  ];

  const schemas = [
    localBusinessSchema,
    breadcrumbSchema(breadcrumbs),
    personSchema({
      name: tutor.name,
      url: `https://ustaad.ae/tutors/${tutor.slug}`,
      image: `https://ustaad.ae${tutor.photo}`,
      jobTitle: tutor.role,
      description: tutor.subhead,
    }),
    faqSchema(tutor.faqs),
  ];

  const getTrustIcon = (type: string) => {
    switch (type) {
      case 'experience':
        return <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />;
      case 'subjects':
        return <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />;
      case 'qualification':
        return <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />;
      case 'certification':
        return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />;
      case 'curricula':
        return <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />;
      default:
        return <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />;
    }
  };

  return (
    <Layout>
      <SEOHead
        title={tutor.seo.title}
        description={tutor.seo.description}
        canonical={`/tutors/${tutor.slug}`}
        ogImage={tutor.photo}
        schema={schemas}
      />

      {/* ── 1. HERO SECTION (SIGNATURE USTAAD DARK NAVY & GOLD THEME) ── */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 pb-10 sm:pb-14 lg:pb-20 bg-gradient-to-br from-[#0a3a79] via-[#072852] to-[#041935] border-b border-[#0f4a9b]/30 overflow-hidden text-white">
        {/* Soft atmospheric ambient glow lights */}
        <div className="absolute top-0 right-0 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-br from-[#0f4a9b]/25 via-[#C7A24A]/10 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] bg-gradient-to-tr from-[#C7A24A]/12 via-[#0f4a9b]/15 to-transparent rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

        {/* Delicate geometric blueprint grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(#f0c96a 1px, transparent 1px), linear-gradient(90deg, #f0c96a 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
          }}
        />

        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_450px] gap-8 sm:gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Content & Mobile Portrait */}
            <div className="flex flex-col text-left">
              
              {/* Mobile Medium Luxury Portrait (Mobile only) */}
              <div className="flex flex-col items-center text-center lg:hidden mb-5">
                <div className="relative w-[175px] sm:w-[210px] aspect-[1/1.16] rounded-2xl overflow-hidden bg-[#061e3d]/90 border-2 border-[#C7A24A]/60 shadow-[0_14px_36px_rgba(0,0,0,0.5)] mb-3 group">
                  <img
                    src={tutor.photo}
                    alt={tutor.imageAlt}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041935]/60 via-transparent to-black/10" />

                  {/* Verification Badge (Compact for Mobile) */}
                  <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-gradient-to-r from-[#0f4a9b]/95 to-[#0b3d80]/95 backdrop-blur-md border border-blue-400/30 shadow-sm">
                    <div className="w-3.5 h-3.5 rounded bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20">
                      <ShieldCheck className="w-2 h-2 stroke-[2.5] text-blue-200" />
                    </div>
                    <div className="text-left leading-none">
                      <div className="text-[6.5px] font-black uppercase tracking-wider text-blue-200 mb-0.5">
                        TOP 1% FACULTY
                      </div>
                      <div className="text-[7.5px] font-bold text-white">
                        Ustaad Verified
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2">
                  <span className="text-[#f0c96a] font-extrabold text-[11px] sm:text-xs tracking-[0.2em] uppercase">
                    {tutor.slug === 'fahad-khan' ? 'SENIOR MATHEMATICS FELLOW' : 'CAMBRIDGE CERTIFIED FACULTY'}
                  </span>
                </div>
              </div>

              {/* Desktop Eyebrow with sleek golden hairline (Desktop only) */}
              <div className="hidden lg:flex items-center gap-2.5 mb-3">
                <span className="text-[#f0c96a] font-extrabold text-xs tracking-[0.22em] uppercase">
                  {tutor.slug === 'fahad-khan' ? 'SENIOR MATHEMATICS FELLOW' : 'CAMBRIDGE CERTIFIED FACULTY'}
                </span>
                <div className="h-[1.5px] w-14 bg-gradient-to-r from-[#f0c96a] to-transparent" />
              </div>

              {/* Main Authority Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] font-extrabold text-white leading-[1.15] lg:leading-[1.1] tracking-tight mb-3 sm:mb-4 text-center sm:text-left">
                Master Clarity with{' '}
                <span className="text-[#f0c96a] font-serif italic block sm:inline">
                  {tutor.name}
                </span>
              </h1>

              {/* Bio / Subhead */}
              <p className="text-blue-100/90 text-sm sm:text-base lg:text-[16.5px] leading-relaxed mb-6 sm:mb-8 max-w-2xl font-normal text-center sm:text-left">
                {tutor.subhead}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4">
                <a
                  href={tutor.trialUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-[#C7A24A] via-[#A8892A] to-[#7A5E10] shadow-[0_8px_24px_rgba(199,162,74,0.35)] hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book a Free Trial</span>
                </a>

                <a
                  href={tutor.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20ba59] shadow-[0_8px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>

                </a>
              </div>

              {/* Micro-Assurance Footer */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-blue-200/80 font-medium text-center sm:text-left">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#f0c96a]" /> No credit card required
                </span>
                <span className="text-blue-300/60">·</span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-300 stroke-[2.5]" /> Free 1-on-1 diagnostic lesson included
                </span>
              </div>

            </div>

            {/* Right Column: Clean Luxury Framed Portrait (Desktop only) */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
                <div className="relative w-full aspect-[1/1.16] rounded-3xl overflow-hidden bg-[#061e3d]/80 border-2 border-[#C7A24A]/40 shadow-[0_24px_60px_rgba(0,0,0,0.5)] group">
                  <img
                    src={tutor.photo}
                    alt={tutor.imageAlt}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041935]/60 via-transparent to-black/10" />

                  {/* Verification Badge covering watermark */}
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-gradient-to-r from-[#0f4a9b]/95 to-[#0b3d80]/95 backdrop-blur-md border border-blue-400/30 shadow-[0_8px_24px_rgba(11,61,128,0.5)]">
                    <div className="w-7 h-7 rounded-xl bg-white/15 text-white flex items-center justify-center shrink-0 border border-white/20 shadow-xs">
                      <ShieldCheck className="w-4 h-4 stroke-[2.5] text-blue-200" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase tracking-wider text-blue-200 leading-none mb-1">
                        TOP 1% FACULTY
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-white leading-none">
                        Ustaad Verified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. 4-ITEM CREDENTIAL TRUST BAR (WHITE SURFACE, ROYAL BLUE ACCENTS) ── */}
      <section className="bg-white py-5 sm:py-8 border-b border-[#0f4a9b]/10 shadow-xs">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
            {tutor.trustItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/12 hover:border-[#C7A24A]/50 transition-all hover:shadow-sm"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0b3d80] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  {getTrustIcon(item.type)}
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#0f4a9b] font-extrabold mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base font-extrabold text-[#0a1f3d] leading-snug break-words">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ABOUT SECTION (ANIMATED KINETIC TYPOGRAPHY, BLUE HEADINGS & GOLD BULLETS) ── */}
      <section className="py-14 sm:py-20 bg-[#f8fafd] border-b border-[#0f4a9b]/10 overflow-hidden">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={aboutSectionContainerVariants}
            className="max-w-3xl"
          >
            {/* Eyebrow badge */}
            <motion.div
              variants={eyebrowVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#C7A24A]/10 text-[#A8892A] text-xs font-extrabold rounded-full mb-3 border border-[#C7A24A]/30 uppercase tracking-wider"
            >
              {tutor.about.eyebrow}
            </motion.div>

            {/* Kinetic Typography Font Animation for Heading */}
            <motion.h2
              variants={titleContainerVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight mb-8 leading-tight"
            >
              <span className="inline">
                {tutor.about.titlePrefix.trim().split(/\s+/).map((word, idx) => (
                  <motion.span
                    key={`prefix-${idx}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.28em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>{' '}
              <span className="inline">
                {tutor.about.titleAccent.trim().split(/\s+/).map((word, idx) => (
                  <motion.span
                    key={`accent-${idx}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.28em] text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h2>

            {/* About Bulleted List with Re-triggerable Staggered Font & Icon Animation */}
            <motion.ul
              variants={bulletsContainerVariants}
              className="flex flex-col gap-3.5 mb-8"
            >
              {tutor.about.bullets.map((bullet, idx) => (
                <motion.li
                  key={idx}
                  variants={bulletItemVariants}
                  className="flex items-start gap-3 text-[#0a1f3d]/85 text-sm sm:text-base leading-relaxed"
                >
                  <motion.span
                    variants={checkIconVariants}
                    className="w-5 h-5 rounded-md bg-gradient-to-br from-[#0f4a9b] to-[#0A1F3C] text-[#C7A24A] border border-[#C7A24A]/30 grid place-items-center flex-shrink-0 mt-0.5 text-xs shadow-xs font-bold"
                  >
                    ✓
                  </motion.span>
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Official Certification Card */}
            {tutor.about.certification && (
              <motion.div
                variants={certCardVariants}
                className="flex items-center gap-4 bg-gradient-to-br from-[#0A1F3C] via-[#061530] to-[#082d61] text-white p-5 sm:p-6 rounded-2xl border-2 border-[#C7A24A]/40 shadow-lg max-w-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C7A24A]/20 text-[#C7A24A] border border-[#C7A24A]/40 grid place-items-center flex-shrink-0">
                  <Award className="w-6 h-6 text-[#C7A24A]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#C7A24A] font-extrabold mb-0.5">
                    Official Qualification
                  </div>
                  <div className="text-base sm:text-lg font-extrabold text-white">
                    {tutor.about.certification}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── 4. WHAT TUTOR TEACHES (CENTER-ALIGNED, REFINED & PROFESSIONAL) ── */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-[#0f4a9b]/10 overflow-hidden">
        {/* Soft atmospheric radial background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_15%,rgba(15,74,155,0.04),transparent_75%)] pointer-events-none" />

        <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={curriculumSectionVariants}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Centered Eyebrow Pill */}
            <motion.div
              variants={eyebrowVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 text-[#0f4a9b] text-xs font-extrabold rounded-full mb-4 border border-[#0f4a9b]/15 uppercase tracking-wider shadow-xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#0f4a9b]" />
              <span>Curriculum Mastery</span>
            </motion.div>

            {/* Centered Heading */}
            <motion.h2
              variants={titleContainerVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight mb-4 leading-tight"
            >
              Subjects &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]">Curricula Covered</span>
            </motion.h2>

            {/* Centered Subtitle */}
            <motion.p
              variants={curriculumItemVariants}
              className="text-[#475467] text-sm sm:text-base leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
            >
              Targeted 1-on-1 preparation aligned with actual school schemes of work and board mark schemes.
            </motion.p>

            {/* Core Subjects Spotlight */}
            <motion.div variants={curriculumItemVariants} className="mb-10">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[#0f4a9b] mb-4 bg-[#f8fafd] px-3.5 py-1.5 rounded-full border border-[#0f4a9b]/10 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#C7A24A] animate-pulse" />
                <span>Core Subject Expertise</span>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {tutor.subjects.hero.map((subject, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#C7A24A] via-[#B8933D] to-[#A8892A] text-white font-extrabold text-sm sm:text-base border border-[#E6C575]/50 shadow-[0_8px_24px_rgba(199,162,74,0.32)] hover:brightness-105 hover:shadow-[0_12px_28px_rgba(199,162,74,0.45)] transition-all duration-300 flex items-center gap-2.5 cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <span className="tracking-tight">{subject}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Exam Boards & Curricula Glass Card */}
            <motion.div
              variants={curriculumItemVariants}
              className="bg-gradient-to-b from-[#f8fafd] to-[#f2f6fc] rounded-3xl p-6 sm:p-8 border border-[#0f4a9b]/10 shadow-xs max-w-2xl mx-auto"
            >
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#0a1f3d]/70 mb-4">
                Accredited Exam Boards &amp; Curricula
              </div>
              <div className="flex flex-wrap justify-center gap-2.5">
                {tutor.subjects.curricula.map((curr, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white font-bold text-xs sm:text-sm border border-[#0f4a9b]/30 shadow-xs hover:border-[#C7A24A]/80 hover:shadow-md hover:shadow-[#0f4a9b]/25 transition-all duration-200 cursor-default select-none"
                  >
                    {curr}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Refined Academic Standard Micro-Bar */}
            <motion.div
              variants={curriculumItemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-[#475467]"
            >
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C7A24A] flex-shrink-0" />
                <span>Official Board Mark Schemes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C7A24A] flex-shrink-0" />
                <span>Past Papers &amp; Examiner Notes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#C7A24A] flex-shrink-0" />
                <span>Weekly Exam-Condition Practice</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. WEEKLY AVAILABILITY (INTERACTIVE, REFINED & ANIMATED ON DESKTOP & MOBILE) ── */}
      <section className="relative py-16 sm:py-24 bg-[#f8fafd] border-b border-[#0f4a9b]/10 overflow-hidden">
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_15%,rgba(199,162,74,0.06),transparent_75%)] pointer-events-none" />

        <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={availabilityContainerVariants}
            className="w-full"
          >
            {/* Centered Header */}
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
              <motion.div
                variants={eyebrowVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C7A24A]/10 text-[#A8892A] text-xs font-extrabold rounded-full mb-3 border border-[#C7A24A]/30 uppercase tracking-wider shadow-xs"
              >
                <Clock className="w-3.5 h-3.5 text-[#A8892A]" />
                <span>Live Schedule</span>
              </motion.div>
              <motion.h2
                variants={titleContainerVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight mb-3 leading-tight"
              >
                Weekly <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]">Availability</span>
              </motion.h2>
              <motion.p
                variants={curriculumItemVariants}
                className="text-[#475467] text-sm sm:text-base leading-relaxed font-medium"
              >
                All times in UAE local time (GST · GMT+4). Slots update as bookings fill in.
              </motion.p>
            </div>

            {/* Mobile Swipe Hint */}
            <SwipeIndicator text="Swipe horizontally to view all days" className="mb-4" />

            {/* 7-Day Schedule: Horizontal Scroll on Mobile, 7-Col Grid on Desktop */}
            <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden mb-8">
              {tutor.availability.schedule.map((slot, idx) => (
                <motion.div
                  key={idx}
                  variants={availabilityCardVariants}
                  whileHover={slot.active ? { y: -6, scale: 1.02 } : { y: -2 }}
                  whileTap={slot.active ? { scale: 0.98 } : undefined}
                  className={`group relative rounded-2xl p-4 sm:p-4.5 border flex flex-col min-h-[160px] w-[145px] sm:w-auto flex-shrink-0 snap-start transition-all duration-300 select-none overflow-hidden ${
                    slot.active
                      ? 'bg-gradient-to-b from-white to-[#FDFBF7] border-2 border-[#C7A24A]/45 shadow-[0_4px_16px_rgba(199,162,74,0.12)] hover:border-[#C7A24A] hover:shadow-[0_16px_32px_rgba(199,162,74,0.22)] cursor-default'
                      : 'bg-white/60 border-slate-200/70 opacity-60 hover:opacity-85 hover:border-slate-300'
                  }`}
                >
                  {/* Subtle hover gradient illumination on active card */}
                  {slot.active && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#C7A24A]/0 via-transparent to-[#C7A24A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  )}

                  {/* Day Header with Live Radar Pulse */}
                  <div
                    className={`text-xs uppercase font-extrabold tracking-wider mb-3 pb-2.5 border-b flex items-center justify-between ${
                      slot.active
                        ? 'text-[#0a1f3d] border-[#0f4a9b]/10 group-hover:text-[#0f4a9b] transition-colors'
                        : 'text-gray-400 border-gray-100'
                    }`}
                  >
                    <span className="font-black">{slot.day}</span>
                    {slot.active ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold text-emerald-600 tracking-wider">Open</span>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                      </div>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    )}
                  </div>

                  {/* Slot Pills with Interactive Hover / Touch */}
                  {slot.active ? (
                    <div className="flex flex-col gap-2 mt-auto">
                      {slot.slots.map((s, sIdx) => (
                        <motion.div
                          key={sIdx}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="relative bg-gradient-to-r from-[#0b3d80] via-[#0e4895] to-[#0b3d80] text-white text-[11px] sm:text-xs font-bold py-2 px-2.5 rounded-xl text-center border border-[#C7A24A]/40 shadow-xs hover:border-[#C7A24A] hover:shadow-[0_4px_14px_rgba(11,61,128,0.28)] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 group/slot"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] group-hover/slot:scale-125 transition-transform" />
                          <span>{s}</span>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-auto text-center py-2">
                      <span className="text-[11px] text-gray-400 italic font-medium">Not available</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability Note Banner with Refined Styling */}
            <motion.div
              variants={curriculumItemVariants}
              whileHover={{ scale: 1.01 }}
              className="p-4 sm:p-5 bg-white rounded-2xl border-l-4 border-l-[#C7A24A] border-y border-r border-[#0f4a9b]/10 text-xs sm:text-sm text-[#0a1f3d] shadow-sm font-semibold max-w-2xl mx-auto flex items-center gap-3.5 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-9 h-9 rounded-xl bg-[#C7A24A]/15 text-[#A8892A] border border-[#C7A24A]/30 grid place-items-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-[#A8892A]" />
              </div>
              <div className="leading-relaxed">
                {tutor.availability.note}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. QUALITY ASSURANCE & LEADERSHIP VETTING (CLASSY 3D ACADEMIC VERIFICATION DECK) ── */}
      <section className="relative py-14 sm:py-20 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 overflow-hidden border-b border-slate-100">
        {/* Soft background ambient radial lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-[#0b3d80]/6 via-[#C7A24A]/8 to-[#0b3d80]/6 rounded-full blur-[120px] pointer-events-none" />

        {/* Delicate Academic Blueprint Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#0b3d80 1px, transparent 1px), linear-gradient(90deg, #0b3d80 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />

        {/* Elegant Background Academic Watermarks (School Caps, Books, Badges & Crests) */}
        <div className="absolute -left-6 sm:left-4 top-8 sm:top-10 text-[#0b3d80]/[0.06] pointer-events-none select-none -rotate-12">
          <GraduationCap className="w-36 h-36 sm:w-52 sm:h-52 lg:w-64 lg:h-64 stroke-[0.7]" />
        </div>

        <div className="absolute -right-8 sm:right-6 top-10 sm:top-14 text-[#C7A24A]/[0.09] pointer-events-none select-none rotate-12">
          <BookOpen className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 stroke-[0.7]" />
        </div>

        <div className="absolute -left-8 sm:left-8 bottom-6 sm:bottom-10 text-[#C7A24A]/[0.08] pointer-events-none select-none rotate-6">
          <Award className="w-28 h-28 sm:w-44 sm:h-44 lg:w-52 lg:h-52 stroke-[0.7]" />
        </div>

        <div className="absolute -right-6 sm:right-10 bottom-8 sm:bottom-12 text-[#0b3d80]/[0.06] pointer-events-none select-none -rotate-6">
          <ShieldCheck className="w-36 h-36 sm:w-52 sm:h-52 lg:w-60 lg:h-60 stroke-[0.7]" />
        </div>

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={curriculumSectionVariants}
            className="max-w-4xl mx-auto"
          >
            {/* Header / Eyebrow on White */}
            <div className="text-center mb-8 sm:mb-10">
              <motion.div
                variants={eyebrowVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0b3d80]/8 text-[#0b3d80] text-xs font-extrabold rounded-full mb-3.5 border border-[#0b3d80]/15 uppercase tracking-widest shadow-2xs"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C7A24A]" />
                <span>Academic Quality Assurance</span>
              </motion.div>

              <motion.h2
                variants={titleContainerVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight mb-2.5 leading-tight"
              >
                {tutor.name} was <span className="text-[#0b3d80]">personally screened</span>.
              </motion.h2>

              <motion.p
                variants={curriculumItemVariants}
                className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto font-normal"
              >
                Every Ustaad educator is audited and approved by our academic leadership before a single lesson is delivered.
              </motion.p>
            </div>

            {/* Classy 3D Stats-Blue Executive Verification Card */}
            <motion.div
              variants={curriculumItemVariants}
              whileHover={{ y: -4, scale: 1.008 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-gradient-to-br from-[#0b3d80] via-[#09326b] to-[#06244f] rounded-3xl p-6 sm:p-8 md:p-9 text-white shadow-[0_24px_55px_rgba(11,61,128,0.28),0_0_35px_rgba(199,162,74,0.16)] border border-[#C7A24A]/45 overflow-hidden"
              style={{ perspective: '1200px' }}
            >
              {/* Dual Metallic Gold Accent Bars (Top & Bottom hairline) */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0b3d80] via-[#C7A24A] to-[#0b3d80]" />
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C7A24A]/40 to-transparent" />

              {/* Geometric Fine Guilloche Blueprint Matrix */}
              <div
                className="absolute inset-0 pointer-events-none opacity-15"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '36px 36px',
                  maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)',
                }}
              />

              {/* Ambient Luxury Gold Radial Glow */}
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br from-[#C7A24A]/25 to-transparent blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-[#1e5ba8]/25 blur-3xl pointer-events-none" />

              {/* Card Header Bar with Official Gold Crest */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/12 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E6C575] via-[#C7A24A] to-[#A8892A] shadow-[0_2px_10px_rgba(199,162,74,0.35)] flex items-center justify-center text-[#0a1f3d] shrink-0 border border-amber-200/50">
                    <ShieldCheck className="w-5 h-5 text-[#0a1f3d]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-extrabold text-white tracking-wide uppercase">
                      Official Faculty Sign-off
                    </span>
                    <span className="block text-[11px] font-semibold text-[#E6C575]">
                      UAE Academic Standards Clearance · Tier 1
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/20 text-[11px] font-bold text-white/90 self-start sm:self-auto backdrop-blur-xs shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Active Faculty</span>
                </div>
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
                
                {/* Left Side: Executive Leadership Vetting Pods (7 Cols) */}
                <div className="md:col-span-7 flex flex-col justify-center gap-3">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wide mb-1">
                      Leadership Approval Team
                    </h3>
                    <p className="text-xs text-white/70">
                      Vetted through live classroom observation &amp; subject evaluation.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    {/* F. Zaman */}
                    <div className="group relative flex items-center gap-3 bg-gradient-to-b from-white/[0.12] to-white/[0.06] border border-white/20 hover:border-[#E6C575] p-3 sm:p-3.5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:bg-white/[0.16] cursor-default">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#E6C575] ring-offset-2 ring-offset-[#0b3d80] shadow-sm flex-shrink-0 bg-white">
                        <img
                          src="/images/team/f-zaman-v3.jpg"
                          alt="F. Zaman, Founder and Academic Director at Ustaad"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-extrabold text-sm text-white leading-snug group-hover:text-[#E6C575] transition-colors">
                          F. Zaman
                        </div>
                        <div className="text-[11px] text-[#E6C575] font-bold mt-0.5 leading-tight">
                          Academic Director
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Mariam Rahman */}
                    <div className="group relative flex items-center gap-3 bg-gradient-to-b from-white/[0.12] to-white/[0.06] border border-white/20 hover:border-[#E6C575] p-3 sm:p-3.5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:bg-white/[0.16] cursor-default">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#E6C575] ring-offset-2 ring-offset-[#0b3d80] shadow-sm flex-shrink-0 bg-white">
                        <img
                          src="/images/team/mariam-rahman-v1.jpg"
                          alt="Mariam Rahman, Tutor Quality and Development Lead at Ustaad"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-extrabold text-sm text-white leading-snug group-hover:text-[#E6C575] transition-colors">
                          Mariam Rahman
                        </div>
                        <div className="text-[11px] text-[#E6C575] font-bold mt-0.5 leading-tight">
                          Tutor Quality Lead
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 text-emerald-300">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: 3 Classy Vetting Tiles (5 Cols) with Staggered Scroll Animation */}
                <div className="md:col-span-5 md:border-l md:border-white/15 md:pl-6 flex flex-col justify-center gap-2.5">
                  {[
                    {
                      Icon: Award,
                      title: 'Top 5% UAE Faculty Screened',
                      subtitle: 'Strict subject-depth & pedagogy audit',
                    },
                    {
                      Icon: BookOpen,
                      title: 'Live Classroom Mock Audited',
                      subtitle: 'Exam-board mark scheme pacing',
                    },
                    {
                      Icon: Sparkles,
                      title: 'Direct Academic Oversight',
                      subtitle: 'Continuous student progress reviews',
                    },
                  ].map((tile, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 24, y: 8 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={viewportConfig}
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + idx * 0.16,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ scale: 1.02, x: 3 }}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.07] border border-white/10 hover:border-[#E6C575]/60 hover:bg-white/[0.12] transition-all duration-300 cursor-default shadow-2xs"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] text-[#0a1f3d] flex items-center justify-center shrink-0 shadow-xs font-black text-xs">
                        <tile.Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-extrabold text-white leading-tight">{tile.title}</div>
                        <div className="text-[10.5px] text-white/70">{tile.subtitle}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. GETTING STARTED: 3 TRIAL STEPS (INTERACTIVE CARDS, CENTER-ALIGNED & ANIMATED) ── */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-[#0f4a9b]/10 overflow-hidden">
        {/* Soft atmospheric radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_15%,rgba(15,74,155,0.04),transparent_75%)] pointer-events-none" />

        <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={stepsContainerVariants}
            className="w-full"
          >
            {/* Centered Section Header */}
            <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-14">
              <motion.div
                variants={eyebrowVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/8 text-[#0f4a9b] text-xs font-extrabold rounded-full mb-3.5 border border-[#0f4a9b]/15 uppercase tracking-wider shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0f4a9b]" />
                <span>Getting Started</span>
              </motion.div>
              <motion.h2
                variants={titleContainerVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight mb-3.5 leading-tight"
              >
                How a trial with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]">{tutor.name}</span> works.
              </motion.h2>
              <motion.p
                variants={curriculumItemVariants}
                className="text-[#475467] text-sm sm:text-base leading-relaxed font-medium"
              >
                Three simple steps to experience our tailored 1-on-1 methodology before committing.
              </motion.p>
            </div>

            {/* 3 Interactive Cards with Desktop & Mobile Hover/Tap Feedback */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
              {/* Card 01 */}
              <motion.div
                variants={stepCardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-b from-[#f8fafd] to-white p-7 sm:p-8 rounded-3xl border border-[#0f4a9b]/12 shadow-[0_4px_20px_rgba(11,61,128,0.05)] hover:border-[#C7A24A] hover:shadow-[0_20px_40px_rgba(199,162,74,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default select-none"
              >
                {/* Top Gold Accent Bar on Hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C7A24A] via-[#E6C575] to-[#C7A24A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle Ambient Hover Glow */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#C7A24A]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-[#C7A24A] via-[#D4B25E] to-[#8C6D23] bg-clip-text text-transparent tracking-tighter group-hover:scale-105 transition-transform duration-300 inline-block">
                      01
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/8 px-2.5 py-1 rounded-full border border-[#0f4a9b]/15">
                      Step 1
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2.5 group-hover:text-[#0f4a9b] transition-colors">
                    Send a short brief
                  </h3>
                  <p className="text-[#3a4f6e] text-sm sm:text-[15px] leading-relaxed font-medium">
                    Tell us your child's year, board, current grade, and where they're stuck. Two lines is enough.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#C7A24A] group-hover:text-[#A8892A] transition-colors">
                  <span>Fast 10-minute response</span>
                </div>
              </motion.div>

              {/* Card 02 */}
              <motion.div
                variants={stepCardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-b from-[#f8fafd] to-white p-7 sm:p-8 rounded-3xl border border-[#0f4a9b]/12 shadow-[0_4px_20px_rgba(11,61,128,0.05)] hover:border-[#C7A24A] hover:shadow-[0_20px_40px_rgba(199,162,74,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default select-none"
              >
                {/* Top Gold Accent Bar on Hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C7A24A] via-[#E6C575] to-[#C7A24A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle Ambient Hover Glow */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#C7A24A]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-[#C7A24A] via-[#D4B25E] to-[#8C6D23] bg-clip-text text-transparent tracking-tighter group-hover:scale-105 transition-transform duration-300 inline-block">
                      02
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/8 px-2.5 py-1 rounded-full border border-[#0f4a9b]/15">
                      Step 2
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2.5 group-hover:text-[#0f4a9b] transition-colors">
                    Pick a slot with {tutor.name}
                  </h3>
                  <p className="text-[#3a4f6e] text-sm sm:text-[15px] leading-relaxed font-medium">
                    We share his open slots, you choose one that fits your child's routine. The trial runs 30 minutes, free of charge.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#C7A24A] group-hover:text-[#A8892A] transition-colors">
                  <span>100% Free · No Card Required</span>
                </div>
              </motion.div>

              {/* Card 03 */}
              <motion.div
                variants={stepCardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-b from-[#f8fafd] to-white p-7 sm:p-8 rounded-3xl border border-[#0f4a9b]/12 shadow-[0_4px_20px_rgba(11,61,128,0.05)] hover:border-[#C7A24A] hover:shadow-[0_20px_40px_rgba(199,162,74,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default select-none"
              >
                {/* Top Gold Accent Bar on Hover */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#C7A24A] via-[#E6C575] to-[#C7A24A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle Ambient Hover Glow */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#C7A24A]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-[#C7A24A] via-[#D4B25E] to-[#8C6D23] bg-clip-text text-transparent tracking-tighter group-hover:scale-105 transition-transform duration-300 inline-block">
                      03
                    </span>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/8 px-2.5 py-1 rounded-full border border-[#0f4a9b]/15">
                      Step 3
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2.5 group-hover:text-[#0f4a9b] transition-colors">
                    Continue only if it clicks
                  </h3>
                  <p className="text-[#3a4f6e] text-sm sm:text-[15px] leading-relaxed font-medium">
                    After the trial you decide. If it's not the right fit, we'll match you with a different Ustaad tutor at no cost.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#C7A24A] group-hover:text-[#A8892A] transition-colors">
                  <span>Zero Pressure · Family Match Guarantee</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. QUESTIONS PARENTS ASK (REFINED, CARD-BASED FAQ ACCORDION) ── */}
      <section className="relative py-16 sm:py-24 bg-[#f8fafd] border-b border-[#0f4a9b]/10 overflow-hidden">
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_15%,rgba(199,162,74,0.05),transparent_75%)] pointer-events-none" />

        <div className="relative max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={faqContainerVariants}
            className="max-w-3xl mx-auto"
          >
            {/* Centered Header */}
            <div className="text-center mb-10 sm:mb-12">
              <motion.div
                variants={eyebrowVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#C7A24A]/10 text-[#A8892A] text-xs font-extrabold rounded-full mb-3.5 border border-[#C7A24A]/30 uppercase tracking-wider shadow-xs"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#A8892A]" />
                <span>Frequently Asked Questions</span>
              </motion.div>
              <motion.h2
                variants={titleContainerVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight mb-3 leading-tight"
              >
                Booking {tutor.name} · <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79]">The Details</span>.
              </motion.h2>
              <motion.p
                variants={curriculumItemVariants}
                className="text-[#475467] text-sm sm:text-base leading-relaxed font-medium max-w-xl mx-auto"
              >
                Clear answers to common questions about lesson setup, trial format, and scheduling.
              </motion.p>
            </div>

            {/* Refined Card-Based Accordion List */}
            <div className="flex flex-col gap-3 sm:gap-3.5">
              {tutor.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div
                    key={idx}
                    variants={faqItemVariants}
                    className={`group rounded-2xl border transition-all duration-300 overflow-hidden select-none ${
                      isOpen
                        ? 'bg-white border-[#C7A24A]/60 shadow-[0_8px_24px_rgba(199,162,74,0.12)] ring-1 ring-[#C7A24A]/25'
                        : 'bg-white border-[#0f4a9b]/10 shadow-[0_2px_10px_rgba(11,61,128,0.03)] hover:border-[#C7A24A]/40 hover:shadow-md'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between text-left p-4.5 sm:p-5 gap-3.5 cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 transition-colors duration-200 ${
                            isOpen
                              ? 'bg-[#C7A24A] text-[#0a1f3d]'
                              : 'bg-[#0f4a9b]/8 text-[#0f4a9b] group-hover:bg-[#C7A24A]/15 group-hover:text-[#A8892A]'
                          }`}
                        >
                          Q
                        </span>
                        <span
                          className={`font-bold text-sm sm:text-[15px] leading-snug transition-colors duration-200 ${
                            isOpen ? 'text-[#0f4a9b]' : 'text-[#0a1f3d] group-hover:text-[#0f4a9b]'
                          }`}
                        >
                          {faq.q}
                        </span>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                          isOpen
                            ? 'rotate-180 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-white shadow-xs'
                            : 'bg-[#f4f7fc] text-[#0f4a9b] group-hover:bg-[#0f4a9b] group-hover:text-white'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </button>

                    {/* Animated Answer Body */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-5.5 sm:pb-5.5 pt-1 text-[#475467] text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-normal pl-13 sm:pl-14">
                        {faq.a}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. FINAL BOOKING CTA SECTION (MEDIUM-SIZED OVAL/ROUNDED FLOATING CARD) ── */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(15,74,155,0.03),transparent_80%)] pointer-events-none" />

        <div className="max-w-[860px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={curriculumSectionVariants}
            className="relative rounded-[2.5rem] sm:rounded-[3.5rem] p-8 sm:p-12 lg:p-14 text-center text-[#FBF9F4] overflow-hidden shadow-[0_20px_60px_rgba(11,61,128,0.26)] border-2 border-[#C7A24A]/35"
            style={{
              background:
                'radial-gradient(1200px 500px at 15% 20%, rgba(199,162,74,0.22), transparent 60%), radial-gradient(1000px 500px at 85% 90%, rgba(15,74,155,0.65), transparent 65%), linear-gradient(180deg, #0e448c 0%, #0b3d80 50%, #082d61 100%)',
            }}
          >
            {/* Subtle geometric blueprint grid */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
              }}
            />

            <div className="relative z-10 max-w-xl mx-auto">
              <motion.h2
                variants={titleContainerVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3.5 leading-tight"
              >
                Ready to book <span className="text-[#E6C575]">{tutor.name}</span>?
              </motion.h2>
              <motion.p
                variants={curriculumItemVariants}
                className="text-white/85 text-sm sm:text-base leading-relaxed mb-7 max-w-md mx-auto font-normal"
              >
                Start with a free 30-minute trial. No card. No commitment. Just a chance to see how your child works with him.
              </motion.p>

              <motion.div
                variants={curriculumItemVariants}
                className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
              >
                <a
                  href={tutor.trialUrl}
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-[#C7A24A] via-[#B8933D] to-[#A8892A] shadow-[0_8px_24px_rgba(199,162,74,0.35)] hover:brightness-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  <span>Book a Free Trial</span>
                </a>

                <a
                  href={tutor.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>

                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
