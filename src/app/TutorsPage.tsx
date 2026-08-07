import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award, BarChart3, BookOpen, ChevronDown, ClipboardList, Flag, Globe, GraduationCap, Landmark, Layers,
  Lightbulb, MessageCircle, MessageSquare, PenLine, Phone, RotateCw, ShieldCheck, Star, Target, TrendingUp, UserCheck,
  Users,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock} from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from './shared/schemas';

const tutorsSchemaFaqs = [
  { q: "How are tutors selected at Ustaad?", a: "Every tutor completes an academic review and teaching assessment before working with students." },
  { q: "Do tutors follow the student's school curriculum?", a: "Yes. Tutors teach according to the student's curriculum, school topics, and exam requirements." },
  { q: "Are lessons online or in person?", a: "Lessons are held live online, one-to-one, on a calm and distraction-free platform that works on laptops and tablets." },
  { q: "Can students change tutors if needed?", a: "Yes. If a tutor is not the right fit, we can recommend an alternative." },
  { q: "Do tutors help with revision and exam preparation?", a: "As exams approach, tutors focus on revision, past papers, mock tests, and timed answer practice." },
  { q: "Are lessons flexible around school schedules?", a: "Yes. Lessons are arranged around school hours, activities, and exam periods whenever possible." },
];

// FAQ Accordion Component - matching homepage style
function FAQAccordion() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How are tutors selected at Ustaad?", a: "Every tutor completes an academic review and teaching assessment before working with students." },
    { q: "Do tutors follow the student's school curriculum?", a: "Yes. Tutors teach according to the student's curriculum, school topics, and exam requirements." },
    { q: "Are lessons online or in person?", a: "Lessons are held live online, one-to-one, on a calm and distraction-free platform that works on laptops and tablets." },
    { q: "Can students change tutors if needed?", a: "Yes. If a tutor is not the right fit, we can recommend an alternative." },
    { q: "Do tutors help with revision and exam preparation?", a: "As exams approach, tutors focus on revision, past papers, mock tests, and timed answer practice." },
    { q: "Are lessons flexible around school schedules?", a: "Yes. Lessons are arranged around school hours, activities, and exam periods whenever possible." },
  ];

  return (
    <div className="flex flex-col gap-[10px]">
      {faqs.map((faq, i) => {
        const isOpen = activeFaq === i;
        return (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveFaq(isOpen ? null : i)}
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 40, height: 40, minWidth: 40, minHeight: 40,
                  background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                  color: isOpen ? '#fff' : '#0f4a9b',
                  transition: 'background 300ms ease, color 300ms ease',
                  cursor: 'pointer', border: 'none',
                  boxShadow: 'inset 0 0 0 2px #fff',
                }}
              >
                <span className="font-extrabold text-base">?</span>
              </button>
              <button
                onClick={() => setActiveFaq(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex-1 flex items-center gap-3 text-left rounded-full border"
                style={{
                  minHeight: '48px', padding: '8px 14px', cursor: 'pointer',
                  background: 'transparent',
                  borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)',
                }}
              >
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                <span
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%',
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
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="ml-[52px]"
                >
                  <div
                    className="flex items-start gap-3 rounded-2xl border p-4"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}
                  >
                    <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                    <span
                      className="flex-shrink-0 flex items-center justify-center rounded-full"
                      style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

const CITY_NAMES: Record<string, string> = {
  'abu-dhabi': 'Abu Dhabi',
  'al-ain': 'Al Ain',
  'dubai': 'Dubai',
  'sharjah': 'Sharjah',
  'ajman': 'Ajman',
  'ras-al-khaimah': 'Ras Al Khaimah',
  'fujairah': 'Fujairah',
  'umm-al-quwain': 'Umm Al Quwain',
};

export default function TutorsPage() {
  const [searchParams] = useSearchParams();
  const [cityName, setCityName] = useState<string | null>(null);

  useEffect(() => {
    const param = searchParams.get('city');
    setCityName(param ? (CITY_NAMES[param] ?? null) : null);
  }, [searchParams]);

  return (
    <Layout>
      <SEOHead title="Our Tutors | Expert Private Tutors UAE | Ustaad" description="Meet Ustaad's expert private tutors in UAE. Curriculum-specialist educators for IGCSE, A-Level, IB, and American curriculum. Trusted by 2,500+ families across Dubai & Abu Dhabi." canonical="/tutors" ogImage="/UpdatedImages/curriculum-specialist-tutor-igcse-chemistry-past-paper-sharjah.webp" schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Tutors", url: "/tutors" }]), faqSchema(tutorsSchemaFaqs)]} />
      {/* ── HERO ── */}
      <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <Users className="h-4 w-4" /> {cityName ? `Private Tutors in ${cityName}` : 'Our Tutors'}
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text={cityName ? `Expert Tutors in ${cityName}` : 'Learn from the Right Tutor'} />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              <p className="text-gray-600 text-base sm:text-lg mb-10 leading-relaxed max-w-xl">
                UAE tutors chosen for curriculum fit, subject depth, and clear teaching.
              </p>
              <HeroCTABlock className="mb-4" trustText="✦ No Commitment · Cancel Anytime">
                Book Your Free Trial
              </HeroCTABlock>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/curriculum-specialist-tutor-igcse-chemistry-past-paper-sharjah.webp"
                alt="Curriculum-specialist Ustaad tutor walking an IGCSE Chemistry student through exam-board past paper practice in Sharjah"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1200} height={800} fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── THE RIGHT TUTOR, GUARANTEED ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-4 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              <Landmark className="h-4 w-4" /> Every Curriculum
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-3">
              <GradientHeadingText text="The Right Tutor: Guaranteed." />
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed text-center">
              Specialist tutors for the British, American, and IB curricula followed across the UAE.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                flag: (
                  <svg viewBox="0 0 60 36" width="60" height="36" className="rounded-md shadow-sm mb-5" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="36" fill="#012169"/>
                    <path d="M0,0 L60,36 M60,0 L0,36" stroke="white" strokeWidth="7.2"/>
                    <path d="M0,0 L60,36 M60,0 L0,36" stroke="#C8102E" strokeWidth="4.8"/>
                    <path d="M30,0 V36 M0,18 H60" stroke="white" strokeWidth="12"/>
                    <path d="M30,0 V36 M0,18 H60" stroke="#C8102E" strokeWidth="7.2"/>
                  </svg>
                ),
                badge: "IGCSE • GCSE • A-Level",
                title: "British Curriculum Tutors",
                desc: "Tutoring for IGCSE, GCSE, and A-Level subjects, focused on school topics, revision, and exam preparation.",
                cta: "View Curriculum →",
                ctaHref: "/british-curriculum",
                discover: "Request a Tutor Match",
                discoverIcon: <Landmark className="h-4 w-4 text-[#0f4a9b]" />,
              },
              {
                flag: (
                  <svg viewBox="0 0 60 36" width="60" height="36" className="rounded-md shadow-sm mb-5" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="36" fill="#B22234"/>
                    <rect y="2.77" width="60" height="2.77" fill="white"/>
                    <rect y="8.31" width="60" height="2.77" fill="white"/>
                    <rect y="13.85" width="60" height="2.77" fill="white"/>
                    <rect y="19.38" width="60" height="2.77" fill="white"/>
                    <rect y="24.92" width="60" height="2.77" fill="white"/>
                    <rect y="30.46" width="60" height="2.77" fill="white"/>
                    <rect width="24" height="19.38" fill="#3C3B6E"/>
                    <g fill="white">
                      {[0,1,2,3,4].map(row => [0,1,2,3,4,5].slice(0, row % 2 === 0 ? 6 : 5).map((col, ci) => (
                        <circle key={`${row}-${ci}`} cx={row % 2 === 0 ? 2 + col * 4 : 4 + col * 4} cy={2 + row * 3.6} r="0.9"/>
                      )))}
                    </g>
                  </svg>
                ),
                badge: "School Support • AP • SAT",
                title: "American Curriculum Tutors",
                desc: "Tutoring for AP and school-level subjects, matched to classroom work, assignments, and assessments.",
                cta: "View Curriculum →",
                ctaHref: "/american-curriculum",
                discover: "Request a Tutor Match",
                discoverIcon: <Flag className="h-4 w-4 text-[#0f4a9b]" />,
              },
              {
                flag: (
                  <div className="w-[60px] h-[36px] rounded-md shadow-sm mb-5 bg-[#0f4a9b] flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                ),
                badge: "MYP • SL • HL",
                title: "IB Curriculum Tutors",
                desc: "Tutoring for IB MYP and Diploma Programme subjects, shaped to coursework, subject demands, and exams.",
                cta: "View Curriculum →",
                ctaHref: "/ib-curriculum",
                discover: "Request a Tutor Match",
                discoverIcon: <Globe className="h-4 w-4 text-[#0f4a9b]" />,
              },
            ].map((c, i) => (
              <div key={i} className="relative bg-white border border-[#E5E7EB] rounded-2xl p-5 flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(199,162,74,0.18)] hover:border-[#C7A24A]/60 transition-all overflow-hidden group">
                {/* Golden top bar — transparent → gold → transparent */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />
                {/* Flag */}
                {c.flag}
                {/* Title */}
                <h3 className="text-base font-extrabold text-[#0a1f3d] mb-2">{c.title}</h3>
                {/* Badge below title */}
                {c.badge && (
                  <div className="inline-flex items-center self-start px-2 py-0.5 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-sm mb-3">
                    {c.badge}
                  </div>
                )}
                {/* Description */}
                <p className="text-gray-600 text-[13px] leading-relaxed mb-3 z-10">{c.desc}</p>
                {/* Golden gradient accent line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-4" />
                {/* CTA */}
                <a href={c.ctaHref} className="mt-auto inline-flex items-center justify-center w-full px-4 py-2.5 bg-transparent border-2 border-[#0f4a9b]/30 text-[#0a1f3d] font-bold text-[13px] rounded-xl hover:border-[#0f4a9b] hover:text-[#0f4a9b] transition-all">
                  {c.cta}
                </a>
                {/* Discover link - gold gradient button */}
                <GoldButton href={c.ctaHref} className="mt-2.5 w-full py-2.5 text-[13px] shadow-[0_0_15px_rgba(199,162,74,0.3)]">
                  {c.discover}
                </GoldButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE CHOOSE OUR TUTORS ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
              <Star className="h-4 w-4" /> The Ustaad Standard
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="How We Select Our Tutors" />
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed text-center">Every tutor passes a four-part evaluation before joining Ustaad.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12">
            {[
              { title: "Curriculum Knowledge",    desc: "Candidates show strong curriculum command across academic levels and expectations.",                                           icon: <BookOpen   className="h-8 w-8" /> },
              { title: "Teaching Assessment",     desc: "We assess explanation clarity, lesson flow, and student response carefully.",                                                 icon: <Target     className="h-8 w-8" /> },
              { title: "Subject Expertise",       desc: "Academic qualifications and relevant subject experience are reviewed before approval.",                                       icon: <Award      className="h-8 w-8" /> },
              { title: "Professional Standards",  desc: "Communication, preparation, punctuality, and reliability are assessed throughout selection.",                                 icon: <ShieldCheck className="h-8 w-8" /> },
            ].map((m, i) => (
              <div key={i} className="relative rounded-2xl p-5 flex flex-col items-center text-center backdrop-blur-xl bg-white/60 border border-[#0f4a9b]/10 shadow-[0_8px_32px_rgba(15,74,155,0.08)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/20 transition-all duration-300 overflow-hidden group">
                {/* Blue gradient top indicator */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                {/* Frosted glass blobs */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#0f4a9b]/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#0f4a9b]/5 rounded-full blur-2xl pointer-events-none" />
                {/* Icon — blue gradient, no background */}
                <div className="relative z-10 mb-4 text-transparent bg-clip-text" style={{ filter: 'drop-shadow(0 0 8px rgba(15,74,155,0.3))' }}>
                  {React.cloneElement(m.icon, { className: 'h-8 w-8', style: { stroke: 'url(#blueGrad)' } })}
                </div>
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e5ba8" />
                      <stop offset="100%" stopColor="#0a3a79" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className="text-[14px] font-extrabold text-[#0a1f3d] mb-2 z-10 relative">{m.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed z-10 relative">{m.desc}</p>
              </div>
            ))}
          </div>
          {/* Glass frosted bar - blue gradient theme */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] rounded-2xl p-5 lg:p-6 shadow-[0_10px_40px_rgba(15,74,155,0.3)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C7A24A]/10 to-transparent pointer-events-none" />
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/15 border border-white/30 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <p className="text-white/95 text-[14px] lg:text-[15px] leading-relaxed text-center">
                  Our tutors are subject specialists with verified teaching experience, who pass a thorough review before joining Ustaad. Our approach aligns with KHDA and ADEK assessment expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── FROM ENQUIRY TO FIRST LESSON ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="From Enquiry to First Lesson" />
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed text-center">A simple process built around your requirements and finding the most suitable tutor.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Initial Consultation", desc: "A conversation about your child's subjects, school, and requirements.", icon: <Phone className="h-6 w-6 text-white" /> },
              { step: "2", title: "Tutor Match", desc: "We recommend the right tutors based on curriculum, subject, and level.", icon: <UserCheck className="h-6 w-6 text-white" /> },
              { step: "3", title: "Trial Lesson", desc: "A first lesson arranged at a convenient time for your family.", icon: <BookOpen className="h-6 w-6 text-white" /> },
              { step: "4", title: "Ongoing Support", desc: "Regular lessons scheduled around academic goals and family commitments.", icon: <TrendingUp className="h-6 w-6 text-white" /> },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-[#E5E7EB] p-5 flex flex-col items-start text-left shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/20 transition-all duration-300 overflow-hidden group" style={{ minHeight: 180 }}>
                {/* Watermarked step number - bottom right */}
                <div className="absolute bottom-3 right-3 text-[70px] font-extrabold text-[#0f4a9b]/[0.08] leading-none pointer-events-none select-none z-0 tracking-tighter">
                  {item.step}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(15,74,155,0.35)] z-10">{item.icon}</div>
                <h3 className="text-[14px] font-extrabold text-[#0a1f3d] mb-2 z-10">{item.title}</h3>
                <p className="text-gray-500 text-[13px] font-medium z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT FROM A LESSON ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.1)]">
              <BookOpen className="h-4 w-4" /> Inside a Lesson
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              <GradientHeadingText text="What to Expect From a Lesson" />
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed text-center">Each online lesson follows a steady pace, so topics are covered thoroughly without feeling rushed.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { title: "Topic Introduction",   desc: "The lesson begins with the day's topic, with time for any early questions.",                                                              icon: <MessageSquare className="h-7 w-7" /> },
              { title: "Question Practice",    desc: "The student works through practice questions while the tutor watches for small mistakes.",                                               icon: <PenLine       className="h-7 w-7" /> },
              { title: "Quick Recap",          desc: "Recent topics are briefly reviewed to keep them fresh in the student's mind.",                                                          icon: <RotateCw      className="h-7 w-7" /> },
              { title: "Exam Practice",        desc: "Closer to exams, lessons cover timed questions, written answers, and exam-board past papers.",                                          icon: <ClipboardList className="h-7 w-7" /> },
            ].map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-[#E5E7EB] p-5 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.12)] hover:-translate-y-1 hover:border-[#0f4a9b]/40 hover:ring-2 hover:ring-[#0f4a9b]/20 transition-all duration-300 overflow-hidden group">
                {/* Blue gradient top indicator */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#0f4a9b]/50 to-transparent" />
                {/* Icon — blue gradient stroke, no background */}
                <div className="mb-3 mt-2 relative z-10" style={{ filter: 'drop-shadow(0 0 8px rgba(15,74,155,0.25))' }}>
                  {React.cloneElement(item.icon, { style: { stroke: 'url(#blueGradLesson)' } })}
                </div>
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="blueGradLesson" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e5ba8" />
                      <stop offset="100%" stopColor="#0a3a79" />
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className="text-[14px] font-extrabold text-[#0a1f3d] mb-2 z-10 relative">{item.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed z-10 relative">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── YOUR PRIVACY ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a3a79]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="w-14 h-14 bg-white/15 border border-white/30 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4 text-center">
              Your Privacy
            </h2>
            <p className="text-white/90 text-[15px] leading-relaxed text-center">
              Privacy matters to many families. We honour your privacy. Student information, lesson content, and academic discussions remain confidential and protected.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE IDEA BEHIND USTAAD ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_20px_rgba(15,74,155,0.35)]">
            <Lightbulb className="h-7 w-7 text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4">
            The Idea Behind Ustaad
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl mx-auto text-center">
            We started Ustaad because we believe one-to-one teaching, done with care, changes a student's relationship with their subject. Every tutor we work with shares that view. We hope to work with your family.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Prefer to read first? See{' '}
            <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">who writes our guidance</a>
            {' '}for UAE parents.
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0f4a9b]/40 to-transparent" />

      {/* ── FAQ ── */}
      <section className="py-8 sm:py-10 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.1)]">
                <MessageCircle className="h-4 w-4" /> FAQ
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Parents Often{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ask</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Honest answers to the questions families ask before their first session.
              </p>
            </div>
            {/* Right: Accordion */}
            <div>
              <FAQAccordion />
            </div>
          </div>
        </div>
      </section>

      
      {/* UAE Curriculum Support Guarantee */}
      <section className="py-12 bg-[#f8fafe] border-y border-[#0f4a9b]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">Ustaad Academic Excellence</span>
          <h2 className="text-2xl font-extrabold text-[#0a1f3d] mt-3 mb-3">Personalised 1-to-1 Mentorship Tailored to UAE Schools</h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">Every lesson at Ustaad is structured around your child's specific school syllabus, target grades, and assessment schedule. Whether preparing for upcoming term exams, resolving concept gaps, or practicing past-paper techniques, our specialist tutors deliver dedicated 1-to-1 guidance online across Dubai, Abu Dhabi, Sharjah, and all UAE emirates.</p>
          <div className="grid sm:grid-cols-3 gap-4 text-xs text-left max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-bold text-[#0a1f3d] mb-1">1-to-1 Custom Pace</h3>
              <p className="text-gray-500 leading-relaxed">Lessons adapt to your child's learning speed without classroom distraction or peer pressure.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-bold text-[#0a1f3d] mb-1">Exam Board Precision</h3>
              <p className="text-gray-500 leading-relaxed">Coverage directly aligned with Cambridge, Edexcel, AQA, IB, and AP mark schemes.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
              <h3 className="font-bold text-[#0a1f3d] mb-1">Flexible UAE Timings</h3>
              <p className="text-gray-500 leading-relaxed">After-school and weekend session slots planned around UAE school terms and mock weeks.</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        title="Arrange a Conversation"
        subtitle="A short conversation, before any commitment. We'll discuss your child's subjects, school, and what you're hoping tutoring will change."
        button1Text="Get Matched with a Tutor"
        button2Text="Ask Your Question"
      />

    </Layout>
  );
}
