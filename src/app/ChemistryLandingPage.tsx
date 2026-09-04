import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Calculator, MessageSquareQuote, List, ArrowRightLeft, FlaskConical, PenTool,
  CheckCircle2, ChevronDown, Sparkles, Target, Star, MessageCircle, BookOpen, Video, Timer,
  MapPin, Atom, Brain, X, ArrowRight, ShieldCheck, ClipboardCheck, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Layout, StatsBar, GoldButton, SchoolsMarquee, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20support%20with%20Chemistry.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const chemistrySchoolLogos = [
  { name: 'The British School Al Khubairat', file: 'british-school-al-khubairat-abu-dhabi.png', alt: 'The British School Al Khubairat logo, an Abu Dhabi school for IGCSE and A-Level chemistry', scale: 1.25 },
  { name: 'Repton School Abu Dhabi', file: 'repton.png', alt: 'Repton School Abu Dhabi logo, a British and IB school in the capital offering IGCSE and A-Level chemistry', scale: 1.25 },
  { name: 'Raha International School', file: 'raha.png', alt: 'Raha International School logo, an Abu Dhabi IB school with strong chemistry and sciences' },
  { name: 'GEMS Cambridge International School Abu Dhabi', file: 'gems-cambridge-international-school-abu-dhabi.png', alt: 'GEMS Cambridge International School Abu Dhabi logo, a Cambridge school for IGCSE and A-Level chemistry', scale: 1.25 },
  { name: 'Belvedere British School', file: 'belvedere.png', alt: 'Belvedere British School logo, a British curriculum school in Abu Dhabi teaching IGCSE chemistry', scale: 1.25 },
  { name: 'Merryland International School', file: 'merryland.png', alt: 'Merryland International School logo, an Abu Dhabi British school supporting IGCSE chemistry students', scale: 1.25 },
];

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

const CHALLENGES = [
  { notation: '01', icon: <Calculator className="w-5 h-5" />, title: 'Mole Calculations Unclear', problem: 'Most chemistry marks slip away in three quiet places students rarely notice.' },
  { notation: '02', icon: <PenTool className="w-5 h-5" />, title: 'Equations Not Balanced', problem: 'Most chemistry marks slip away in three quiet places students rarely notice.' },
  { notation: '03', icon: <FlaskConical className="w-5 h-5" />, title: 'Organic Mechanisms Incomplete', problem: 'Most chemistry marks slip away in three quiet places students rarely notice.' },
];

const FAQS = [
  { q: 'My child keeps failing chemistry. Where do you start?', a: "We start with diagnosis, not practice. Tutors identify whether the gap sits in mole calculations, equation balancing, or organic mechanisms. The highest-impact topic is rebuilt first, then drilled with past papers." },
  { q: 'Do you offer practical paper support for Cambridge 0620 and IB Chemistry?', a: "Yes. Paper 3 and Paper 5 practical work, data analysis, error treatment, and graph interpretation are built in alongside theory papers from the first session." },
  { q: 'Can your tutors help with IB Chemistry HL and SL?', a: "Yes. We cover both IB Chemistry SL and HL syllabuses, including Internal Assessment and the full Option topics." },
  { q: 'Do you support GCSE Chemistry, Edexcel A-Level, and AP Chemistry?', a: "Yes. Tutors specialise in GCSE Chemistry, Edexcel A-Level Chemistry, AP Chemistry, and Cambridge A-Level. The right tutor is matched to your child's exact board." },
  { q: 'Do you offer online chemistry tutor sessions across Abu Dhabi?', a: "Yes. Online chemistry tutor sessions are available across Abu Dhabi, including Khalifa City, Al Reem Island, Saadiyat Island, Mohammed Bin Zayed City, Al Mushrif, Al Bateen, and Yas Island." },
  { q: 'How quickly do students see real chemistry progress?', a: "Topic confidence usually shifts within four to six weeks. Visible mark improvement on mocks normally follows in the second assessment cycle, depending on starting level." },
];

function ChallengesAccordion({ challenges }: { challenges: typeof CHALLENGES }) {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="relative">
      <div className="flex flex-col gap-[10px]">
        {challenges.map((c, i) => {
          const isOpen = active === i;
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <button onClick={() => setActive(isOpen ? -1 : i)} className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 40, height: 40, minWidth: 40, minHeight: 40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition: 'background 300ms ease, color 300ms ease', cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff' }}>
                  <span className="flex items-center justify-center w-full h-full">{c.icon}</span>
                </button>
                <button onClick={() => setActive(isOpen ? -1 : i)} aria-expanded={isOpen} className="flex-1 flex items-center gap-3 text-left rounded-full border" style={{ minHeight: '48px', padding: '8px 14px', cursor: 'pointer', background: 'transparent', borderColor: 'rgba(15,74,155,0.1)' }}>
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

export default function ChemistryLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="Chemistry Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad"
        description="Expert 1-to-1 chemistry tutors in Abu Dhabi for IGCSE, A-Level, and IB. Fix mole calculations, organic mechanisms, and past paper technique."
        canonical="/chemistry-tutor-abu-dhabi"
        placename="Abu Dhabi, UAE"
        schema={[
          cityLocalBusinessSchema({ city: 'Abu Dhabi', url: '/chemistry-tutor-abu-dhabi', name: 'Ustaad — Chemistry Tutor Abu Dhabi', description: 'Expert 1-to-1 chemistry tutors in Abu Dhabi.' }),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'Abu Dhabi', url: '/chemistry-tutor-abu-dhabi' }, { name: 'Chemistry', url: '/chemistry-tutor-abu-dhabi' }]),
          serviceSchema('Private Chemistry Tutoring', 'One-to-one chemistry tutors in Abu Dhabi.', '/chemistry-tutor-abu-dhabi'),
          faqSchema(FAQS.map(f => ({ q: f.q, a: f.a }))),
        ]}
      />

      {/* ── SECTION 01: HERO CANVAS ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/UpdatedImages/igcse-study-hero.jpg"
            alt="Chemistry Tutor Abu Dhabi Background"
            className="w-full h-full object-cover opacity-25 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060f22]/70 via-[#060f22]/40 to-[#060f22]" />
        </div>
        
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <radialGradient id="atomGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#060f22" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <circle cx="700" cy="300" r="300" fill="url(#atomGlow)"/>
          </svg>
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">
          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <MapPin className="w-3 h-3 text-[#f0c96a]" />
            <span className="text-blue-100/80 text-[11px] sm:text-[12px] font-semibold">Abu Dhabi · UAE</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="font-extrabold tracking-tight text-white leading-[1.05] mb-3 md:mb-5 text-[clamp(1.5rem,5vw,3.4rem)] max-w-[90%] sm:max-w-none">
            Chemistry Tutor{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Abu Dhabi
            </span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }} className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.02rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4 italic">
            One-to-one chemistry tutors in Abu Dhabi for IGCSE, GCSE, A-Level, IB, and AP. We rebuild weak topics and drill past papers until chemistry clicks.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['IGCSE 0620', 'A-Level', 'IB SL & HL', 'AP Chemistry', 'GCSE'].map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-[11px] font-bold text-white/80 border border-white/15 bg-white/10">{tag}</span>
            ))}
          </div>

          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a href={BOOKING} className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full font-bold text-white transition-all hover:-translate-y-0.5 bg-gradient-to-r from-[#1e5bb3] to-[#0a3a79]">Book Your Free Trial</a>
            <a href={WA_URL} className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-full font-bold text-white transition-all hover:-translate-y-0.5 bg-[#25D366] hover:bg-[#1eb657] shadow-[0_4px_14px_rgba(37,211,102,0.3)]"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 02: STATS BAR ── */}
      <StatsBar />

      {/* ── SECTION 03: WHERE CHEMISTRY MARKS VANISH ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc] relative overflow-hidden">
        <ChemGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5"><Target className="h-4 w-4" /><span className="text-sm font-bold">Exam Insight</span></div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">Where Chemistry <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">Marks Vanish</span></h2>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">Most chemistry marks slip away in three quiet places students rarely notice.</p>
            </div>
            <ChallengesAccordion challenges={CHALLENGES} />
          </div>
        </div>
      </section>

      {/* ── SECTION 04: OUR SIMPLE PROCESS ── */}
      <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">Our Simple Process</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Three steps from chemistry confusion to confident, independent exam practice.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Diagnose The Gap', desc: 'Your tutor identifies whether the gap is in calculations, equations, or organic mechanisms.', icon: <CheckCircle2 className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: 'Rebuild The Topic', desc: 'Each weak topic is rebuilt from first principles before past paper practice begins.', icon: <Brain className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: 'Drill Past Papers', desc: 'Cambridge, Edexcel, and IB chemistry papers worked weekly under timed conditions.', icon: <BookOpen className="w-5 h-5 text-[#0f4a9b]" /> }
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(15,74,155,0.15)' }} className="flex flex-col items-center text-center px-4 py-8 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.04)] transition-all duration-300">
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] flex items-center justify-center mb-4">{s.icon}</div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-2">{s.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 05: CURRICULUM COVERAGE ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">Curriculum Coverage</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Chemistry Across Every Year Group</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-[#0f4a9b]/10 hover:shadow-[0_12px_40px_rgba(15,74,155,0.12)] hover:-translate-y-1.5 transition-all duration-300">
              <h3 className="font-bold text-[#0f4a9b] text-sm mb-1">Year 7–9</h3>
              <h4 className="text-lg font-extrabold text-[#0a1f3d] mb-3">Foundation (KS3)</h4>
              <p className="text-sm text-gray-600 mb-4 h-16">KS3 chemistry builds atoms, bonding, and equation-writing habits early.</p>
              <a href="/middle-school" className="text-sm font-bold text-[#0f4a9b] hover:underline">Core sciences →</a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#0f4a9b]/10 hover:shadow-[0_12px_40px_rgba(15,74,155,0.12)] hover:-translate-y-1.5 transition-all duration-300">
              <h3 className="font-bold text-[#0f4a9b] text-sm mb-1">Year 10–11</h3>
              <h4 className="text-lg font-extrabold text-[#0a1f3d] mb-3">IGCSE / GCSE</h4>
              <p className="text-sm text-gray-600 mb-4 h-16">Cambridge 0620, Edexcel 4CH1, and GCSE Chemistry, papers 1 to 6 covered.</p>
              <a href="/igcse" className="text-sm font-bold text-[#0f4a9b] hover:underline">IGCSE chemistry tutor Abu Dhabi →</a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#0f4a9b]/10 hover:shadow-[0_12px_40px_rgba(15,74,155,0.12)] hover:-translate-y-1.5 transition-all duration-300">
              <h3 className="font-bold text-[#0f4a9b] text-sm mb-1">Year 12–13</h3>
              <h4 className="text-lg font-extrabold text-[#0a1f3d] mb-3">A-Level / IB / AP</h4>
              <p className="text-sm text-gray-600 mb-4 h-16">A-Level Chemistry, IB Chemistry SL/HL, and AP Chemistry support.</p>
              <a href="/a-level" className="text-sm font-bold text-[#0f4a9b] hover:underline">A-Level chemistry tutor Abu Dhabi →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 06: TOPICS WE COVER (Matched to Screenshot) ── */}
      <section className="py-14 lg:py-18 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-white border border-[#0f4a9b]/20 text-[#0f4a9b] rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm mb-5">
              <FlaskConical className="w-4 h-4" /> TOPICS WE COVER
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">Chemistry Topics, Covered in Depth</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: 'Atomic Structure', desc: 'Electron configuration, ionisation energy, and periodic trends taught clearly.', icon: <Atom className="w-6 h-6 text-[#0f4a9b]" /> },
              { title: 'Organic Chemistry', desc: 'Reaction mechanisms, functional groups, and synthesis routes explained step by step.', icon: <FlaskConical className="w-6 h-6 text-[#0f4a9b]" /> },
              { title: 'Quantitative Chemistry', desc: 'Moles, titrations, yield, and concentration calculations drilled to fluency.', icon: <Calculator className="w-6 h-6 text-[#0f4a9b]" /> },
              { title: 'Physical Chemistry', desc: 'Energetics, kinetics, equilibrium, and electrochemistry taught with worked examples.', icon: <Brain className="w-6 h-6 text-[#0f4a9b]" /> },
            ].map((topic, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-[24px] shadow-[0_4px_24px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_40px_rgba(15,74,155,0.12)] hover:-translate-y-1.5 transition-all duration-300 border border-gray-50 flex flex-col items-start text-left h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#f4f7fc] border border-gray-100 flex items-center justify-center mb-6 shrink-0 shadow-inner">
                  {topic.icon}
                </div>
                <h4 className="text-[17px] font-extrabold text-[#0a1f3d] mb-3">{topic.title}</h4>
                <p className="text-[14px] text-gray-500 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: PAST PAPER PREPARATION (Matched to Screenshot) ── */}
      <section className="py-16 lg:py-20 relative bg-[#0a3a79] text-white">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a3a79]/50 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm mb-5 backdrop-blur-sm">
              <ClipboardCheck className="w-4 h-4" /> PAST PAPER PREPARATION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Exam Preparation Built Into Every Session</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { title: 'Theory Paper Drills', desc: 'Paper 1, 2, and 4 worked through with full mark scheme guidance.', icon: <PenTool className="w-5 h-5 text-white" /> },
              { title: 'Practical Paper Skills', desc: 'Paper 3 and 5 practical skills: data analysis, graph work, and error treatment.', icon: <FlaskConical className="w-5 h-5 text-white" /> },
              { title: 'Past Paper Drills', desc: 'Cambridge, Edexcel, and IB chemistry past papers worked weekly under timed conditions.', icon: <ClipboardCheck className="w-5 h-5 text-white" /> },
              { title: 'Exam Technique', desc: 'Equation state symbols, significant figures, and command-word responses drilled until reflex.', icon: <Timer className="w-5 h-5 text-white" /> },
            ].map((item, i) => (
              <div key={i} className="bg-[#1e5ba8] p-6 sm:p-8 rounded-[24px] border border-[#1e5ba8] shadow-sm hover:shadow-[0_12px_32px_rgba(10,31,61,0.4)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-start h-full cursor-default">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 shrink-0 bg-white/5">
                  {item.icon}
                </div>
                <h4 className="text-[17px] font-extrabold text-white mb-3 leading-snug">{item.title}</h4>
                <p className="text-[14px] text-blue-100/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 08: OUR TUTORS (Matched to Screenshot & Centered) ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-5 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" /> OUR TUTORS
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            Chemistry Specialists, Not Generalists
          </h2>
          <p className="text-gray-600 text-[15px] mb-8 leading-relaxed max-w-2xl mx-auto">
            Every chemistry tutor is matched to the student's exact exam board and level. No generalists, no guesswork.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <ShieldCheck className="w-5 h-5 text-[#0f4a9b]" />, text: 'Subject Specialists' },
              { icon: <ClipboardCheck className="w-5 h-5 text-[#0f4a9b]" />, text: 'Curriculum Specialists' },
              { icon: <CheckCircle2 className="w-5 h-5 text-[#0f4a9b]" />, text: 'Background Checked' },
              { icon: <CheckCircle2 className="w-5 h-5 text-[#0f4a9b]" />, text: 'One-to-One Focused' },
            ].map((tag, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-4 bg-[#f4f7fc] border border-gray-100 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                {tag.icon}
                <span className="font-extrabold text-[#0a1f3d] text-[14px]">{tag.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 08: TRUSTED BY SCHOOLS MARQUEE (Matched to Screenshot) ── */}
      <SchoolsMarquee logoList={chemistrySchoolLogos} />

      {/* ── SECTION 09: USTAAD VS MARKETPLACE (Matched to Screenshot) ── */}
      <section className="py-14 lg:py-18 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#0a1f3d] mb-8">Ustaad vs. Marketplace vs. School</h2>
          <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 overflow-hidden max-w-3xl mx-auto">
            <div className="grid grid-cols-4 bg-[#1e5ba8] text-white font-bold text-[14px] py-4 px-3 text-center items-center">
              <div className="text-left pl-2 col-span-1">Feature</div>
              <div>Ustaad</div>
              <div>Marketplace</div>
              <div>School</div>
            </div>
            {[
              { f: 'Topic diagnosis first', u: 'yes', m: 'no', s: 'no' },
              { f: 'Curriculum-matched tutor', u: 'yes', m: 'sometimes', s: 'yes' },
              { f: 'Weekly past paper drills', u: 'yes', m: 'no', s: 'rare' },
              { f: 'Practical Paper 3/5 coverage', u: 'yes', m: 'no', s: 'yes' },
              { f: 'Parent progress notes', u: 'yes', m: 'no', s: 'no' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-4 py-3 px-3 text-[13px] text-center items-center border-b border-gray-50 hover:bg-[#f4f7fc] transition-colors duration-300 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <div className="text-left font-extrabold text-[#0a1f3d] col-span-1 pl-2">{row.f}</div>
                <div className="font-bold flex justify-center">
                  <div className="w-5 h-5 rounded-full border border-[#0f4a9b] text-[#0f4a9b] flex items-center justify-center bg-white shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-gray-400 italic text-xs">
                  {row.m === 'no' ? <X className="w-4 h-4 mx-auto opacity-30" /> : <span className="font-normal">{row.m}</span>}
                </div>
                <div className="text-gray-400 italic text-xs">
                  {row.s === 'no' ? <X className="w-4 h-4 mx-auto opacity-30" /> : row.s === 'yes' ? <div className="w-5 h-5 rounded-full border border-[#0f4a9b] text-[#0f4a9b] flex items-center justify-center bg-white shadow-sm mx-auto"><CheckCircle2 className="w-3.5 h-3.5" /></div> : <span className="font-normal">{row.s}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 09.5: FEATURED REVIEW (Matched to Screenshot) ── */}
      <section className="py-16 sm:py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              From an <span style={{ color: '#f0c96a' }}>Abu Dhabi Family</span>
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs text-white/90 font-semibold self-start sm:self-auto">
              <span className="text-[#f0c96a] tracking-tighter">★★★★★</span>
              <span>Verified</span>
            </div>
          </div>
          
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-2xl relative text-left">
            <div className="text-6xl font-serif text-white/15 absolute top-3 left-6 select-none pointer-events-none">“</div>
            <p className="relative z-10 text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-6 pt-2">
              I had a great experience with Ustaad. They truly provide some of the Best Tutors in Abu Dhabi. The teaching style is clear, professional, and very supportive.
            </p>
            
            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-sm shadow-inner shrink-0">
                FA
              </div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">Fares Al Kindi</div>
                <div className="text-blue-200/70 text-xs mt-0.5">Abu Dhabi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: QUICK GAP CHECK (Matched to Screenshot) ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 text-[#0f4a9b] rounded-full text-xs font-bold mb-5 uppercase tracking-widest shadow-sm">
            <span className="flex items-center justify-center gap-1.5"><ShieldCheck className="w-4 h-4" /> QUICK GAP CHECK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-10">Does Your Child Have a Chemistry Gap?</h2>
          
          <div className="flex flex-col gap-5 max-w-3xl mx-auto mb-10 text-left">
            <div className="bg-white p-6 rounded-2xl flex items-start gap-4 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
              <div className="w-6 h-6 rounded-full border-2 border-[#0f4a9b] text-[#0f4a9b] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-[15px] font-semibold text-[#0a1f3d]">Does your child know the formula but get the calculation wrong?</span>
                <span className="text-[11px] font-extrabold bg-[#f4f7fc] text-[#0f4a9b] px-3 py-1 rounded-full uppercase tracking-widest w-fit">Calculation gap</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl flex items-start gap-4 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
              <div className="w-6 h-6 rounded-full border-2 border-[#0f4a9b] text-[#0f4a9b] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-[15px] font-semibold text-[#0a1f3d]">Do they write equations without balancing or state symbols?</span>
                <span className="text-[11px] font-extrabold bg-[#f4f7fc] text-[#0f4a9b] px-3 py-1 rounded-full uppercase tracking-widest w-fit">Equation gap</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl flex items-start gap-4 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default">
              <div className="w-6 h-6 rounded-full border-2 border-[#0f4a9b] text-[#0f4a9b] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <span className="text-[15px] font-semibold text-[#0a1f3d]">Are their organic mechanisms missing curly arrows?</span>
                <span className="text-[11px] font-extrabold bg-[#f4f7fc] text-[#0f4a9b] px-3 py-1 rounded-full uppercase tracking-widest w-fit">Mechanism gap</span>
              </div>
            </div>
          </div>
          
          <a href={BOOKING} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white transition-all bg-[#a58638] hover:bg-[#8e722f] shadow-sm">Book a Free Trial to Find the Gap</a>
        </div>
      </section>

      {/* ── SECTION 11: FAQS ── */}
      <section className="py-16 sm:py-20 bg-[#f4f7fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] text-center mb-10">Chemistry Tutor FAQ</h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-gray-100 rounded-full overflow-hidden bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ boxShadow: isOpen ? '0 12px 30px rgba(15,74,155,0.08)' : 'none' }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full text-left px-6 py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full bg-[#f4f7fc] text-[#0f4a9b] flex items-center justify-center font-extrabold text-[15px]">?</span>
                      <span className="font-semibold text-[#0a1f3d] text-[15px]">{faq.q}</span>
                    </div>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#f4f7fc] text-[#0f4a9b]' : 'bg-[#f4f7fc] text-[#0f4a9b]'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-16 pb-5 text-[14px] text-gray-600 leading-relaxed pt-1">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: FINAL CTA & RELATED ── */}
      <section className="bg-[#f4f7fc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative -top-10">
          <div className="rounded-3xl p-10 text-center shadow-lg bg-[#0a3a79]">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Fix Chemistry?</h2>
            <p className="text-blue-100/90 text-[15px] mb-8 max-w-lg mx-auto">Book a free trial and we will match your child with a chemistry specialist in Abu Dhabi.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={BOOKING} className="inline-flex items-center justify-center px-8 h-12 rounded-xl font-bold text-white transition-all bg-[#a58638] hover:bg-[#8e722f] shadow-[0_0_20px_rgba(165,134,56,0.5)]">Book Your Free Trial</a>
              <a href={WA_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-xl font-bold text-white transition-all bg-[#25D366] hover:bg-[#1eb657] shadow-[0_4px_14px_rgba(37,211,102,0.3)]"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
              <a href="mailto:support@ustaad.ae" className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all">support@ustaad.ae</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Related Subjects</h3>
              <p className="text-sm text-gray-500 mb-6">Explore neighbouring subjects families often book alongside this page.</p>
              <ul className="space-y-4">
                <li><a href="/maths-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> Maths Tutor Abu Dhabi</a></li>
                <li><a href="/physics-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> Physics Tutor Abu Dhabi</a></li>
                <li><a href="/biology-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> Biology Tutor Abu Dhabi</a></li>
                <li><a href="/chemistry" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> Chemistry subject hub</a></li>
                <li><a href="/sciences" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> Sciences overview</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Related Curricula</h3>
              <p className="text-sm text-gray-500 mb-6">Match tutoring to the board and pathway your school follows.</p>
              <ul className="space-y-4">
                <li><a href="/igcse" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> IGCSE</a></li>
                <li><a href="/a-level" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> A-Level</a></li>
                <li><a href="/ib-curriculum" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> IB Curriculum</a></li>
                <li><a href="/british-curriculum" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> British Curriculum</a></li>
                <li><a href="/igcse-tutor-abu-dhabi" className="text-[#0f4a9b] font-bold text-[15px] hover:underline"> IGCSE Tutor Abu Dhabi</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA title="Find the Right Tutor for Your Curriculum" description="Get matched with an expert tutor for your subject and curriculum." />
    </Layout>
  );
}
