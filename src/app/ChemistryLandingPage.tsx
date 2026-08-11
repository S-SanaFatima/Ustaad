import { useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  FlaskConical, Atom, BookOpen, Calculator, PenTool, ShieldCheck,
  CheckCircle2, ArrowRight, X,
  ChevronDown, ChevronLeft, ChevronRight, FileSearch, Wrench, Timer,
  ClipboardCheck, Brain, Target, Star, MessageCircle,
  MapPin, Phone, Mail,
} from 'lucide-react';
import { Layout, GoldButton, FinalCTA, StatsBar, SchoolsMarquee } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';
import RelatedContent from './shared/RelatedContent';

const BOOKING = '/contact#form';

const ChemGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'cgrid-l' : 'cgrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'cgrid-l' : 'cgrid-d'})`} />
  </svg>
);

type Step = { n: string; icon: ReactNode; title: string; desc: string };
type Challenge = { notation: string; icon: ReactNode; title: string; problem: string };

function ChallengesAccordion({ challenges }: { challenges: Challenge[] }) {
  const [active, setActive] = useState<number>(-1);
  return (
    <div className="relative">
      <div className="flex flex-col gap-[10px]">
        {challenges.map((c, i) => {
          const isOpen = active === i;
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms ease, color 300ms ease', cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff' }}
                >
                  <span className="flex items-center justify-center w-full h-full">{c.icon}</span>
                </button>
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex-1 flex items-center gap-3 text-left rounded-full border"
                  style={{ minHeight: '48px', padding: '8px 14px', cursor: 'pointer', background: 'transparent', borderColor: 'rgba(15,74,155,0.1)' }}
                >
                  <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{c.title}</span>
                  <span className="flex-shrink-0 flex items-center justify-center" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }} className="overflow-hidden">
                    <div className="ml-[52px] mt-1">
                      <div className="rounded-2xl px-4 py-3" style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.06) 0%, rgba(30,91,168,0.03) 100%)', border: '1px solid rgba(15,74,155,0.12)', backdropFilter: 'blur(8px)' }}>
                        <p className="text-[13px] text-[#3a4f6e] leading-relaxed">{c.problem}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const PARENT_REVIEWS = [
  { name: 'Fares Al Kindi', initials: 'FK', location: 'Abu Dhabi, UAE', text: 'I had a great experience with Ustaad. They truly provide some of the Best Tutors in Abu Dhabi. The teaching style is clear, professional, and very supportive.' },
  { name: 'Wadeema Al M', initials: 'WA', location: 'Abu Dhabi, UAE', text: 'Very good tutoring institute with supportive tutor and clear teaching methods. Would definitely recommend to anyone looking for quality education.' },
  { name: 'Sumayya Alamri', initials: 'SA', location: 'Abu Dhabi, UAE', text: 'I had a very good experience with Ustaad for my daughter — her tutor is one of the best I have experienced. He explains the concepts very well.' },
  { name: 'Humaid Khalaf', initials: 'HK', location: 'Abu Dhabi, UAE', text: 'A very good place if you want a good teacher for your studies. The tutors really know how to make difficult topics easy to understand.' },
  { name: 'Zayed Al Teneiji', initials: 'ZT', location: 'Abu Dhabi, UAE', text: 'Best tutoring institution in Abu Dhabi. The tutors are extremely knowledgeable and really care about student success in exams.' },
  { name: 'Ahmed Als', initials: 'AA', location: 'Abu Dhabi, UAE', text: 'One of the best tutors in Abu Dhabi — his teaching method is very focused and effective. He breaks down complex concepts into simple steps and ensures full understanding.' },
];

function ParentsSlider() {
  const [index, setIndex] = useState(0);
  const count = PARENT_REVIEWS.length;
  const go = (i: number) => setIndex(((i % count) + count) % count);
  useEffect(() => {
    const t = setInterval(() => setIndex(p => (p + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);
  const r = PARENT_REVIEWS[index];
  return (
    <div>
      <div className="relative min-h-[230px] sm:min-h-[210px]">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="relative rounded-2xl p-5 sm:p-6 lg:p-8 overflow-hidden bg-[#f4f7fc] border border-[#0f4a9b]/15 shadow-[0_8px_30px_rgba(15,74,155,0.08)]">
            <div className="absolute top-3 left-4 text-[90px] font-black leading-none select-none pointer-events-none text-[#0f4a9b]/10" style={{ fontFamily: 'Georgia, serif' }}>“</div>
            <div className="relative z-10">
              <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, si) => <Star key={si} className="h-3.5 w-3.5 fill-[#f0c96a] text-[#f0c96a]" />)}</div>
              <p className="text-[#3a4f6e] text-[15px] sm:text-[16px] leading-[1.7] mb-5 font-medium text-justify">{r.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-extrabold text-[#0f4a9b] bg-[#0f4a9b]/15 shrink-0 border border-[#0f4a9b]/20 notranslate" translate="no">{r.initials}</div>
                <div>
                  <p className="text-[#0a1f3d] font-extrabold text-[14px] leading-tight notranslate" translate="no">{r.name}</p>
                  <p className="text-[#6C7A82] text-[11px] mt-0.5 notranslate" translate="no">{r.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-3 mt-5">
        <button onClick={() => go(index - 1)} aria-label="Previous review" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0f4a9b]/10 border border-[#0f4a9b]/20 text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white transition-all hover:-translate-x-0.5"><ChevronLeft className="h-4 w-4" /></button>
        <div className="flex items-center gap-2">{PARENT_REVIEWS.map((_, i) => <button key={i} onClick={() => go(i)} aria-label={`Go to review ${i + 1}`} className="rounded-full transition-all duration-300" style={{ width: i === index ? 22 : 8, height: 8, background: i === index ? '#0f4a9b' : 'rgba(15,74,155,0.2)' }} />)}</div>
        <button onClick={() => go(index + 1)} aria-label="Next review" className="flex items-center justify-center w-9 h-9 rounded-full bg-[#0f4a9b]/10 border border-[#0f4a9b]/20 text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white transition-all hover:translate-x-0.5"><ChevronRight className="h-4 w-4" /></button>
      </div>
    </div>
  );
}

const Eyebrow = ({ icon, text, dark = false }: { icon: React.ReactNode; text: string; dark?: boolean }) => (
  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] mb-5 border ${dark ? 'bg-white/5 border-white/15 text-blue-200' : 'bg-[#0f4a9b]/5 border-[#0f4a9b]/15 text-[#0f4a9b]'}`}>
    {icon}{text}
  </div>
);

export default function ChemistryLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const challenges: Challenge[] = [
    { notation: 'mol', icon: <FlaskConical className="h-5 w-5" />, title: 'Mole Calculations Unclear', problem: 'Moles, molar mass, and concentration calculations break down under exam conditions when steps are missed.' },
    { notation: 'eq', icon: <Calculator className="h-5 w-5" />, title: 'Equations Not Balanced', problem: 'Half-equations, ionic equations, and redox balancing lose the most avoidable marks each paper.' },
    { notation: 'org', icon: <PenTool className="h-5 w-5" />, title: 'Organic Mechanisms Incomplete', problem: 'Nucleophilic substitution, addition, and elimination mechanisms are left half-drawn or missing arrows.' },
  ];

  const steps: Step[] = [
    { n: '01', icon: <FileSearch className="h-6 w-6" />, title: 'Diagnose The Gap', desc: 'Your tutor identifies whether the gap is in calculations, equations, or organic mechanisms.' },
    { n: '02', icon: <Wrench className="h-6 w-6" />, title: 'Rebuild The Topic', desc: 'Each weak topic is rebuilt from first principles before past paper practice begins.' },
    { n: '03', icon: <Timer className="h-6 w-6" />, title: 'Drill Past Papers', desc: 'Cambridge, Edexcel, and IB chemistry papers worked weekly under timed conditions.' },
  ];

  const journey = [
    { years: 'Year 7–9', title: 'Foundation (KS3)', desc: 'KS3 chemistry builds atoms, bonding, and equation-writing habits early.', link: { label: 'Core sciences', href: '/middle-school' } },
    { years: 'Year 10–11', title: 'IGCSE / GCSE', desc: 'Cambridge 0620, Edexcel 4CH1, and GCSE Chemistry, papers 1 to 6 covered.', link: { label: 'IGCSE chemistry tutor Abu Dhabi', href: '/igcse' } },
    { years: 'Year 12–13', title: 'A-Level / IB / AP', desc: 'A-Level Chemistry, IB Chemistry SL/HL, and AP Chemistry support.', link: { label: 'A-Level chemistry tutor Abu Dhabi', href: '/a-level' } },
  ];

  const topics = [
    { icon: <Atom className="w-7 h-7" />, title: 'Atomic Structure', desc: 'Electron configuration, ionisation energy, and periodic trends taught clearly.' },
    { icon: <FlaskConical className="w-7 h-7" />, title: 'Organic Chemistry', desc: 'Reaction mechanisms, functional groups, and synthesis routes explained step by step.' },
    { icon: <Calculator className="w-7 h-7" />, title: 'Quantitative Chemistry', desc: 'Moles, titrations, yield, and concentration calculations drilled to fluency.' },
    { icon: <Brain className="w-7 h-7" />, title: 'Physical Chemistry', desc: 'Energetics, kinetics, equilibrium, and electrochemistry taught with worked examples.' },
  ];

  const paperLab = [
    { icon: <PenTool className="w-7 h-7" />, title: 'Theory Paper Drills', desc: 'Paper 1, 2, and 4 worked through with full mark scheme guidance.' },
    { icon: <FlaskConical className="w-7 h-7" />, title: 'Practical Paper Skills', desc: 'Paper 3 and 5 practical skills: data analysis, graph work, and error treatment.' },
    { icon: <ClipboardCheck className="w-7 h-7" />, title: 'Past Paper Drills', desc: 'Cambridge, Edexcel, and IB chemistry past papers worked weekly under timed conditions.' },
    { icon: <Timer className="w-7 h-7" />, title: 'Exam Technique', desc: 'Equation state symbols, significant figures, and command-word responses drilled until reflex.' },
  ];

  const assessmentSkills = [
    { icon: <PenTool className="h-6 w-6" />, title: 'Subject Specialists' },
    { icon: <ClipboardCheck className="h-6 w-6" />, title: 'Curriculum Specialists' },
    { icon: <ShieldCheck className="h-6 w-6" />, title: 'Background Checked' },
    { icon: <CheckCircle2 className="h-6 w-6" />, title: 'One-to-One Focused' },
  ];

  const compareRows = [
    { label: 'Topic diagnosis first', ustaad: 'yes', market: 'no', school: 'no' },
    { label: 'Curriculum-matched tutor', ustaad: 'yes', market: 'sometimes', school: 'yes' },
    { label: 'Weekly past paper drills', ustaad: 'yes', market: 'no', school: 'rare' },
    { label: 'Practical Paper 3/5 coverage', ustaad: 'yes', market: 'no', school: 'yes' },
    { label: 'Parent progress notes', ustaad: 'yes', market: 'no', school: 'no' },
  ];

  const gapChecks = [
    { q: 'Does your child know the formula but get the calculation wrong?', tag: 'Calculation gap' },
    { q: 'Do they write equations without balancing or state symbols?', tag: 'Equation gap' },
    { q: 'Are their organic mechanisms missing curly arrows?', tag: 'Mechanism gap' },
  ];

  const faqs: { q: string; a: React.ReactNode; plain: string }[] = [
    { q: 'My child keeps failing chemistry. Where do you start?', plain: 'We start with diagnosis, not practice. Tutors identify whether the gap sits in mole calculations, equation balancing, or organic mechanisms. The highest-impact topic is rebuilt first, then drilled with past papers.', a: <>We start with diagnosis, not practice. Tutors identify whether the gap sits in mole calculations, equation balancing, or organic mechanisms. The highest-impact topic is rebuilt first, then drilled with past papers.</> },
    { q: 'Do you offer practical paper support for Cambridge 0620 and IB Chemistry?', plain: 'Yes. Paper 3 and Paper 5 practical work, data analysis, error treatment, and graph interpretation are built in alongside theory papers from the first session.', a: <>Yes. Paper 3 and Paper 5 practical work, data analysis, error treatment, and graph interpretation are built in alongside theory papers from the first session.</> },
    { q: 'Can your tutors help with IB Chemistry HL and SL?', plain: 'Yes. We cover both IB Chemistry SL and HL syllabuses, including Internal Assessment and the full Option topics.', a: <>Yes. We cover both <a href="/dp-sl" className="text-[#0f4a9b] font-semibold underline">IB Chemistry SL</a> and <a href="/dp-hl" className="text-[#0f4a9b] font-semibold underline">HL</a> syllabuses, including Internal Assessment and the full Option topics.</> },
    { q: 'Do you support GCSE Chemistry, Edexcel A-Level, and AP Chemistry?', plain: "Yes. Tutors specialise in GCSE Chemistry, Edexcel A-Level Chemistry, AP Chemistry, and Cambridge A-Level. The right tutor is matched to your child's exact board.", a: <>Yes. Tutors specialise in <a href="/gcse" className="text-[#0f4a9b] font-semibold underline">GCSE Chemistry</a>, Edexcel <a href="/a-level" className="text-[#0f4a9b] font-semibold underline">A-Level Chemistry</a>, <a href="/ap" className="text-[#0f4a9b] font-semibold underline">AP Chemistry</a>, and Cambridge A-Level. The right tutor is matched to your child's exact board.</> },
    { q: 'Do you offer online chemistry tutor sessions across Abu Dhabi?', plain: 'Yes. Online chemistry tutor sessions are available across Abu Dhabi, including Khalifa City, Al Reem Island, Saadiyat Island, Mohammed Bin Zayed City, Al Mushrif, Al Bateen, and Yas Island.', a: <>Yes. Online chemistry tutor sessions are available across Abu Dhabi, including Khalifa City, Al Reem Island, Saadiyat Island, Mohammed Bin Zayed City, Al Mushrif, Al Bateen, and Yas Island.</> },
    { q: 'How quickly do students see real chemistry progress?', plain: 'Topic confidence usually shifts within four to six weeks. Visible mark improvement on mocks normally follows in the second assessment cycle, depending on starting level.', a: <>Topic confidence usually shifts within four to six weeks. Visible mark improvement on mocks normally follows in the second assessment cycle, depending on starting level.</> },
  ];

  const Mark = ({ v }: { v: string }) => {
    if (v === 'yes') return <CheckCircle2 className="h-4 w-4 text-[#0f4a9b] mx-auto" />;
    if (v === 'no') return <X className="h-4 w-4 text-gray-300 mx-auto" />;
    return <span className="text-[11px] text-gray-400 italic">{v}</span>;
  };

  return (
    <Layout>
      <SEOHead
        title="Chemistry Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad"
        description="Expert 1-to-1 chemistry tutors in Abu Dhabi for IGCSE, A-Level, and IB. Fix mole calculations, organic mechanisms, and past paper technique. Book a free trial."
        canonical="/chemistry-tutor-abu-dhabi"
        placename="Abu Dhabi, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Abu Dhabi',
            url: '/chemistry-tutor-abu-dhabi',
            name: 'Ustaad — Chemistry Tutor Abu Dhabi',
            description: 'Expert 1-to-1 chemistry tutors in Abu Dhabi for IGCSE, A-Level, and IB. Fix mole calculations, organic mechanisms, and past paper technique.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Curriculum', url: '/curriculum' },
            { name: 'Abu Dhabi', url: '/chemistry-tutor-abu-dhabi' },
            { name: 'Chemistry', url: '/chemistry-tutor-abu-dhabi' },
          ]),
          serviceSchema('Private Chemistry Tutoring', 'One-to-one chemistry tutors in Abu Dhabi for IGCSE, GCSE, A-Level, IB, and AP students. Trusted by Abu Dhabi families since 2015.', '/chemistry-tutor-abu-dhabi'),
          courseSchema({
            courseName: 'Chemistry Private Tutoring Abu Dhabi',
            description: 'Expert 1-to-1 chemistry tutors in Abu Dhabi for IGCSE, A-Level, and IB.',
            url: '/chemistry-tutor-abu-dhabi',
            city: 'Abu Dhabi',
          }),
          faqSchema(faqs.map(f => ({ q: f.q, a: f.plain }))),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 60%, #1e5ba8 100%)', minHeight: '68vh', display: 'flex', alignItems: 'center' }}>
        <ChemGrid />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 80% 40%, rgba(193,123,47,0.18) 0%, transparent 70%)' }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow icon={<MapPin className="h-3.5 w-3.5" />} text="Abu Dhabi · UAE" dark />
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
                Chemistry Tutor<br />
                <span style={{ background: 'linear-gradient(92deg,#f0c96a,#fde68a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Abu Dhabi</span>
              </h1>
              <p className="text-blue-100 text-lg sm:text-xl mb-8 leading-relaxed max-w-xl">
                One-to-one chemistry tutors in Abu Dhabi for IGCSE, GCSE, A-Level, IB, and AP. We rebuild weak topics and drill past papers until chemistry clicks.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['IGCSE 0620', 'A-Level', 'IB SL & HL', 'AP Chemistry', 'GCSE'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-bold text-white/80" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <GoldButton href={BOOKING} className="px-7 py-3.5 text-sm shadow-[0_0_30px_rgba(199,162,74,0.4)]">Book Your Free Trial</GoldButton>
                <a href="https://wa.me/971561249005" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white transition hover:bg-white/10" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Phone className="h-4 w-4" /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
                <img src="/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp" alt="Ustaad chemistry tutor in Abu Dhabi working through IGCSE and A-Level chemistry with a student" className="w-full h-[420px] object-cover"
                width={1200} height={800} fetchPriority="high" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,31,61,0.6) 0%, transparent 50%)' }} />
                <div className="absolute bottom-5 left-5 flex flex-col gap-2">
                  {['1-to-1 sessions', 'IGCSE · A-Level · IB'].map(t => (
                    <span key={t} className="inline-flex px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{ background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(8px)' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsBar />

      {/* ── CHALLENGES ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(15,74,155,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <Eyebrow icon={<Target className="h-4 w-4" />} text="Exam Insight" />
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                Where Chemistry{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">Marks Vanish</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">Most chemistry marks slip away in three quiet places students rarely notice.</p>
            </div>
            <ChallengesAccordion challenges={challenges} />
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(15,74,155,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight mb-1.5">
              Our Simple{' '}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">Process</span>
            </h2>
            <p className="text-gray-500 text-[13px] sm:text-[15px] max-w-2xl mx-auto leading-relaxed">Three steps from chemistry confusion to confident, independent exam practice.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 flex flex-col items-center text-center" style={{ boxShadow: '0 4px 20px rgba(15,74,155,0.08)', border: '1px solid rgba(15,74,155,0.08)' }}>
                <div className="w-12 h-12 rounded-2xl bg-[#0f4a9b]/10 flex items-center justify-center text-[#0f4a9b] mb-4">{s.icon}</div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-1">{s.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRICULUM JOURNEY ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Eyebrow icon={<BookOpen className="h-4 w-4" />} text="Curriculum Coverage" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight">Chemistry Across Every Year Group</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {journey.map((j, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #f4f7fc 0%, #ffffff 100%)', border: '1px solid rgba(15,74,155,0.1)' }}>
                <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider block mb-2">{j.years}</span>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">{j.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{j.desc}</p>
                <a href={j.link.href} className="text-xs font-bold text-[#0f4a9b] hover:underline flex items-center gap-1">{j.link.label} <ArrowRight className="h-3 w-3" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS COVERED ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Eyebrow icon={<FlaskConical className="h-4 w-4" />} text="Topics We Cover" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight">Chemistry Topics, Covered in Depth</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topics.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 flex flex-col" style={{ boxShadow: '0 4px 16px rgba(15,74,155,0.07)', border: '1px solid rgba(15,74,155,0.07)' }}>
                <div className="w-12 h-12 rounded-xl bg-[#0f4a9b]/10 flex items-center justify-center text-[#0f4a9b] mb-4">{t.icon}</div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] mb-2">{t.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST PAPER LABS ── */}
      <section className="py-10 sm:py-12 lg:py-14 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
        <ChemGrid />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Eyebrow icon={<ClipboardCheck className="h-4 w-4" />} text="Past Paper Preparation" dark />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-white leading-tight">Exam Preparation Built Into Every Session</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paperLab.map((p, i) => (
              <div key={i} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: 'rgba(199,162,74,0.25)' }}>{p.icon}</div>
                <h3 className="text-[15px] font-extrabold text-white mb-2">{p.title}</h3>
                <p className="text-[13px] text-blue-200/70 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TUTOR QUALITY ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow icon={<ShieldCheck className="h-4 w-4" />} text="Our Tutors" />
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">Chemistry Specialists, Not Generalists</h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">Every chemistry tutor is matched to the student's exact exam board and level. No generalists, no guesswork.</p>
              <div className="grid grid-cols-2 gap-4">
                {assessmentSkills.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: '#f4f7fc', border: '1px solid rgba(15,74,155,0.08)' }}>
                    <div className="text-[#0f4a9b]">{s.icon}</div>
                    <span className="text-[13px] font-bold text-[#0a1f3d]">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <ParentsSlider />
          </div>
        </div>
      </section>

      {/* ── SCHOOLS MARQUEE ── */}
      <SchoolsMarquee />

      {/* ── COMPARISON TABLE ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight">Ustaad vs. Marketplace vs. School</h2>
          </div>
          <div className="overflow-x-auto rounded-2xl" style={{ boxShadow: '0 8px 32px rgba(15,74,155,0.1)' }}>
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr style={{ background: '#0f4a9b' }}>
                  <th className="text-left px-5 py-3.5 text-white text-[13px] font-bold">Feature</th>
                  <th className="text-center px-5 py-3.5 text-white text-[13px] font-bold">Ustaad</th>
                  <th className="text-center px-5 py-3.5 text-white text-[13px] font-bold">Marketplace</th>
                  <th className="text-center px-5 py-3.5 text-white text-[13px] font-bold">School</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f4f7fc]'}>
                    <td className="px-5 py-3 text-[13px] text-[#0a1f3d] font-medium">{r.label}</td>
                    <td className="px-5 py-3 text-center"><Mark v={r.ustaad} /></td>
                    <td className="px-5 py-3 text-center"><Mark v={r.market} /></td>
                    <td className="px-5 py-3 text-center"><Mark v={r.school} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── GAP CHECK ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Eyebrow icon={<Brain className="h-4 w-4" />} text="Quick Gap Check" />
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight">Does Your Child Have a Chemistry Gap?</h2>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {gapChecks.map((g, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: '#f4f7fc', border: '1px solid rgba(15,74,155,0.08)' }}>
                <CheckCircle2 className="h-5 w-5 text-[#0f4a9b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[14px] font-semibold text-[#0a1f3d]">{g.q}</p>
                  <span className="mt-1 inline-block text-[11px] font-bold uppercase tracking-wider text-[#0f4a9b] bg-[#0f4a9b]/10 px-2.5 py-1 rounded-full">{g.tag}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <GoldButton href={BOOKING} className="px-8 py-4 text-sm shadow-[0_0_24px_rgba(199,162,74,0.3)]">Book a Free Trial to Find the Gap</GoldButton>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-tight">Chemistry Tutor FAQ</h2>
          </div>
          <div className="flex flex-col gap-[10px]">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen}
                      style={{ width: 40, height: 40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold', fontSize: '18px', border: 'none', cursor: 'pointer' }}>?</button>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen}
                      className="flex-1 flex items-center gap-3 text-left rounded-full border"
                      style={{ minHeight: '48px', padding: '8px 14px', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)', background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor: 'pointer' }}>
                      <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                      <span style={{ width: 32, height: 32, borderRadius: '50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                        <ChevronDown className="h-3.5 w-3.5" style={{ color: isOpen ? '#fff' : '#0f4a9b' }} />
                      </span>
                    </button>
                  </div>
                  <div style={{ maxHeight: isOpen ? '400px' : '0', overflow: 'hidden', transition: 'max-height 0.25s ease' }} aria-hidden={!isOpen}>
                    <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4" style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                      <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                      <span style={{ width: 32, height: 32, background: '#0f4a9b', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <MessageCircle className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT STRIP ── */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-10 text-center" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Fix Chemistry?</h2>
            <p className="text-blue-100 text-[15px] mb-6 max-w-lg mx-auto">Book a free trial and we will match your child with a chemistry specialist in Abu Dhabi.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <GoldButton href={BOOKING} className="px-7 py-3.5 text-sm shadow-[0_0_30px_rgba(199,162,74,0.4)]">Book Your Free Trial</GoldButton>
              <a href="https://wa.me/971561249005" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white border border-white/20 hover:bg-white/10 transition">
                <Phone className="h-4 w-4" /> WhatsApp Us
              </a>
              <a href="mailto:support@ustaad.ae" className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-blue-200 hover:text-white transition">
                <Mail className="h-4 w-4" /> support@ustaad.ae
              </a>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Curriculum', href: '/curriculum' },
          { name: 'Abu Dhabi', href: '/chemistry-tutor-abu-dhabi' },
          { name: 'Chemistry', href: '/chemistry-tutor-abu-dhabi' },
        ]}
        subjects={[
          { label: 'Maths Tutor Abu Dhabi', href: '/maths-tutor-abu-dhabi' },
          { label: 'Physics Tutor Abu Dhabi', href: '/physics-tutor-abu-dhabi' },
          { label: 'Biology Tutor Abu Dhabi', href: '/biology-tutor-abu-dhabi' },
          { label: 'Chemistry subject hub', href: '/chemistry' },
          { label: 'Sciences overview', href: '/sciences' },
        ]}
        curricula={[
          { label: 'IGCSE', href: '/igcse' },
          { label: 'A-Level', href: '/a-level' },
          { label: 'IB Curriculum', href: '/ib-curriculum' },
          { label: 'British Curriculum', href: '/british-curriculum' },
          { label: 'IGCSE Tutor Abu Dhabi', href: '/igcse-tutor-abu-dhabi' },
        ]}
      />
      <FinalCTA />
    </Layout>
  );
}
