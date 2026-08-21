import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Calculator, MessageSquareQuote, List, ArrowRightLeft, FlaskConical, PenTool,
  CheckCircle2, ArrowRight, ChevronDown, Sparkles, Target, Star, MessageCircle, BookOpen, Video, Timer,
  MapPin
} from 'lucide-react';
import { Layout, GoldButton, StatsBar, SchoolsMarquee } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20support%20with%20GCSE.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const gcseSchoolLogos = [
  { name: 'The British School Al Khubairat', file: 'british-school-al-khubairat-abu-dhabi.png', alt: 'The British School Al Khubairat logo, an outstanding British curriculum school in Abu Dhabi for GCSE and IGCSE', scale: 1.25 },
  { name: 'Brighton College Abu Dhabi', file: 'brighton.png', alt: 'Brighton College Abu Dhabi logo, a leading British school in the capital preparing students for GCSE and A-Level', scale: 1.25 },
  { name: 'Cranleigh Abu Dhabi', file: 'cranleigh.png', alt: 'Cranleigh Abu Dhabi logo, a premium British curriculum school on Saadiyat Island offering GCSE and IGCSE', scale: 1.25 },
  { name: 'The British International School Abu Dhabi', file: 'bisad.png', alt: 'The British International School Abu Dhabi logo, a Nord Anglia GCSE and IGCSE school in the capital', scale: 1.25 },
  { name: 'Al Yasmina Academy', file: 'al-yasmina-academy-abu-dhabi.png', alt: 'Al Yasmina Academy logo, a popular British curriculum school in Khalifa City Abu Dhabi for GCSE students', scale: 1.25 },
  { name: 'GEMS Cambridge International School Abu Dhabi', file: 'gems-cambridge-international-school-abu-dhabi.png', alt: 'GEMS Cambridge International School Abu Dhabi logo, a Cambridge GCSE and IGCSE school in the capital', scale: 1.25 },
  { name: 'Repton School Abu Dhabi', file: 'repton.png', alt: 'Repton School Abu Dhabi logo, a British and IB school in Abu Dhabi for GCSE and IGCSE', scale: 1.25 },
  { name: 'Nord Anglia International School Abu Dhabi', file: 'nord-anglia.png', alt: 'Nord Anglia International School Abu Dhabi logo, a premium British curriculum school in Abu Dhabi for GCSE', scale: 1.25 },
];

const GcseGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'ggrid-l' : 'ggrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'ggrid-l' : 'ggrid-d'})`} />
  </svg>
);

type Challenge = { notation: string; icon: ReactNode; title: string; problem: string };

const CHALLENGES: Challenge[] = [
  { notation: '01', icon: <Calculator className="w-5 h-5" />, title: 'Paper 1 Non-Calc', problem: 'Paper 1 Maths exposes gaps that later calculator papers hide.' },
  { notation: '02', icon: <MessageSquareQuote className="w-5 h-5" />, title: 'Set Text Recall', problem: 'English Literature answers thin without exact quotations memorised.' },
  { notation: '03', icon: <List className="w-5 h-5" />, title: 'Six-Mark Structure', problem: 'Six-mark science needs three linked points, not one long paragraph.' },
  { notation: '04', icon: <ArrowRightLeft className="w-5 h-5" />, title: 'Formula Rearranging', problem: 'Physics loses marks when v=u+at or F=ma cannot be rearranged.' },
  { notation: '05', icon: <FlaskConical className="w-5 h-5" />, title: 'Practical Language', problem: 'Required practical questions expect specific method language examiners reward.' },
  { notation: '06', icon: <PenTool className="w-5 h-5" />, title: 'Method Marks', problem: 'Maths method marks vanish when only the final answer is written.' },
];

const FAQS = [
  { q: 'Do you tutor AQA, OCR and Pearson Edexcel GCSE online?', a: "Yes. All three domestic UK boards are tutored one-to-one online. The tutor is matched to your child's exact board before the free first lesson, not after. Sending the school's exam board name in the initial WhatsApp saves a step." },
  { q: 'My child sits Year 11 mocks in November. When should we start?', a: "Ideally by the second week of September. Six weekly online sessions before the November mock is the shortest window most Year 11 families notice a clear grade shift from. Later starts still help; the visible gain usually shows at the February mock instead." },
  { q: 'Do you cover Combined Science online, or only Separate Sciences?', a: "Both. Combined Science students (AQA Trilogy 8464 or Edexcel 1SC0) get one or two tutors across biology, chemistry and physics. Separate Sciences students get one specialist per science. Section 5 above routes you to each subject page and the main science hub." },
  { q: 'Can online tutoring cover GCSE required practicals?', a: "Yes. AQA Trilogy has 21 required practicals across the three sciences; Edexcel Combined has 18. Online sessions walk through the method, expected observations, sources of error and the exam question language examiners look for. Physical apparatus is not needed for the exam questions." },
  { q: 'Does the tutor mark my child\'s mock papers?', a: "Yes. School mocks and past papers your child has attempted are marked live against the actual board mark scheme. This is more useful than a returned grade because your child sees exactly where each mark was earned or lost." },
  { q: 'Can you help with GCSE English Literature set texts online?', a: "Yes. Macbeth, An Inspector Calls, A Christmas Carol and the AQA Power and Conflict or Love and Relationships anthology are all supported. Sessions build a working quotation bank and rehearse the paragraph structure examiners reward on the 30-mark and 34-mark essay questions." },
  { q: 'My child takes AQA in one subject and Edexcel in another. Is that fine?', a: "Yes and it is more common than parents expect. Many Abu Dhabi British-curriculum schools mix boards across subjects. We match tutor by subject and board, not by school, so an AQA Biology tutor and an Edexcel Maths tutor sit side by side in your child's weekly schedule." },
  { q: 'What if we only need help for the final six weeks before GCSE papers?', a: "A short pre-exam programme is available. Three online sessions per week in the last six weeks, focused only on the papers still to be sat, past-paper drills and grade-boundary work. Content teaching is dropped; exam technique and mark-scheme discipline replace it." },
];

function ChallengesAccordion({ challenges }: { challenges: Challenge[] }) {
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

export default function GCSETutorAbuDhabiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="Online GCSE Tutor Abu Dhabi | AQA, OCR, Edexcel"
        description="Live online GCSE tutors for Abu Dhabi families. AQA, OCR and Pearson Edexcel. Foundation and Higher tier support in Years 10 and 11. First lesson free."
        canonical="/gcse-tutor-abu-dhabi"
        ogImage="/UpdatedImages/gcse-tutor-abu-dhabi-online-year-11-session.webp"
        placename="Abu Dhabi, UAE"
        schema={[
          cityLocalBusinessSchema({ city: 'Abu Dhabi', url: '/gcse-tutor-abu-dhabi', name: 'Ustaad — GCSE Tutor Abu Dhabi', description: 'Live online GCSE tutors for Abu Dhabi families. AQA, OCR and Pearson Edexcel. Foundation and Higher tier support in Years 10 and 11.' }),
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'GCSE', url: '/gcse' }, { name: 'GCSE Tutor Abu Dhabi', url: '/gcse-tutor-abu-dhabi' }]),
          serviceSchema('GCSE Tutor Abu Dhabi', 'Live online GCSE tutors matched to your child\'s board and syllabus.', '/gcse-tutor-abu-dhabi'),
        ]}
      />

      {/* ── SECTION 01: HERO CANVAS ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img src="/UpdatedImages/gcse-tutor-abu-dhabi-online-year-11-session.webp" alt="Abu Dhabi Year 11 student in a live online GCSE session with a Ustaad tutor working through an AQA past paper." className="w-full h-full object-cover opacity-40 md:opacity-25 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060f22]/60 via-[#060f22]/30 to-[#060f22]" />
        </div>

        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 md:opacity-100">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="growthGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1"/>
              </linearGradient>
              <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a"/>
                <stop offset="100%" stopColor="#C7A24A"/>
              </linearGradient>
              <radialGradient id="hexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#060f22" stopOpacity="0"/>
              </radialGradient>
              <filter id="pglow"><feGaussianBlur stdDeviation="3"/></filter>
              <marker id="arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(95,211,230,0.8)"/>
              </marker>
            </defs>

            {(() => {
              const dots: ReactNode[] = [];
              for (let x = 40; x < 1400; x += 55) for (let y = 30; y < 600; y += 55)
                dots.push(<circle key={`d${x}${y}`} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.03)"/>);
              return dots;
            })()}

            {/* Growth Curve */}
            {(() => {
              const out: ReactNode[] = [];
              // Exponential growth curve path
              out.push(<path key="curve" d="M 50 450 Q 300 450 600 150" fill="none" stroke="url(#growthGrad)" strokeWidth="3" filter="url(#pglow)"/>);
              out.push(<path key="curve2" d="M 50 450 Q 300 450 600 150" fill="none" stroke="url(#growthGrad)" strokeWidth="1.5" markerEnd="url(#arrow)"/>);
              
              // Axis lines
              out.push(<line key="xaxis" x1="40" y1="450" x2="650" y2="450" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6"/>);
              out.push(<line key="yaxis" x1="50" y1="460" x2="50" y2="100" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6"/>);
              
              // Labels
              out.push(<text key="lbl_grade" x="590" y="130" fill="rgba(95,211,230,0.8)" fontSize="14" fontFamily="monospace" fontWeight="bold">Target: Grade 9</text>);
              out.push(<text key="lbl_time" x="600" y="470" fill="rgba(255,255,255,0.4)" fontSize="12" fontFamily="monospace">Exam Week</text>);
              out.push(<text key="lbl_start" x="60" y="470" fill="rgba(255,255,255,0.4)" fontSize="12" fontFamily="monospace">Current</text>);
              
              return out;
            })()}

            {/* Glowing Hexagon Network */}
            {(() => {
              const out: ReactNode[] = [];
              const HX = 1100, HY = 250, SIZE = 90;
              
              // Hexagon points
              const pts = [];
              for(let i=0; i<6; i++) {
                const angle_deg = 60 * i - 30;
                const angle_rad = Math.PI / 180 * angle_deg;
                pts.push(`${HX + SIZE * Math.cos(angle_rad)},${HY + SIZE * Math.sin(angle_rad)}`);
              }
              
              out.push(<circle key="hexglow" cx={HX} cy={HY} r={SIZE*1.5} fill="url(#hexGlow)"/>);
              out.push(<polygon key="hex1" points={pts.join(' ')} fill="none" stroke="url(#hexGrad)" strokeWidth="2" filter="url(#pglow)"/>);
              out.push(<polygon key="hex2" points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4"/>);
              
              // Inner connections
              for(let i=0; i<3; i++) {
                out.push(<line key={`cross${i}`} x1={HX + SIZE * Math.cos((60*i-30)*Math.PI/180)} y1={HY + SIZE * Math.sin((60*i-30)*Math.PI/180)} x2={HX + SIZE * Math.cos((60*(i+3)-30)*Math.PI/180)} y2={HY + SIZE * Math.sin((60*(i+3)-30)*Math.PI/180)} stroke="rgba(240,201,106,0.15)" strokeWidth="1"/>);
              }
              
              // Center node
              out.push(<circle key="center" cx={HX} cy={HY} r="25" fill="rgba(240,201,106,0.1)" stroke="#f0c96a" strokeWidth="1.5"/>);
              out.push(<text key="astar" x={HX} y={HY + 6} textAnchor="middle" fill="#f0c96a" fontSize="18" fontWeight="900" fontFamily="sans-serif">GCSE</text>);
              
              // Floating tags around hexagon
              out.push(<text key="t1" x={HX - 140} y={HY - 60} fill="rgba(95,211,230,0.7)" fontSize="12" fontFamily="monospace">AQA 8464</text>);
              out.push(<text key="t2" x={HX + 90} y={HY - 80} fill="rgba(180,180,255,0.7)" fontSize="12" fontFamily="monospace">E = mc²</text>);
              out.push(<text key="t3" x={HX + 120} y={HY + 70} fill="rgba(240,201,106,0.7)" fontSize="12" fontFamily="monospace">Edexcel 1SC0</text>);
              out.push(<text key="t4" x={HX - 130} y={HY + 90} fill="rgba(95,211,230,0.6)" fontSize="12" fontFamily="monospace">Macbeth</text>);
              
              return out;
            })()}
          </svg>
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">
          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2.5" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/80 text-[11px] sm:text-[12px] font-semibold">Trusted by Abu Dhabi families since 2015</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }} className="font-extrabold tracking-tight text-white leading-[1.05] mb-3 md:mb-5 text-[clamp(1.5rem,5vw,3.4rem)] max-w-[90%] sm:max-w-none">
            GCSE Tutor Abu Dhabi,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Online One-to-One Sessions</span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.02rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4 italic">
            Live online GCSE tutors matched to your child's board and syllabus.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['Year 10', 'Year 11', 'Foundation & Higher', 'First Lesson Free'].map(tag => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-[11px] font-bold text-white/80" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>{tag}</span>
            ))}
          </div>

          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full px-4">
            <div className="sm:hidden w-full max-w-[340px] flex flex-col items-center gap-2.5 p-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
              <a href={BOOKING} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}>Book Your Free Trial</a>
              <a href={WA_URL} className="text-blue-200/80 text-[12px] underline flex items-center justify-center gap-1"><MessageCircle className="w-3 h-3" /> WhatsApp Us</a>
            </div>

            <div className="hidden sm:flex items-center justify-center gap-4">
              <a href={BOOKING} className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5" style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 18px rgba(15,74,155,0.55)' }}>Book Your Free Trial</a>
              <span className="text-blue-200/50">or</span>
              <a href={WA_URL} className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-full font-bold text-[14px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SECTION 02: FLOATING STATS BAR ── */}
      <StatsBar />

      {/* ── SECTION 03: SCHOOLS MARQUEE ── */}
      <SchoolsMarquee logoList={gcseSchoolLogos} />

      {/* ── SECTION 04: HOW ONLINE GCSE SESSIONS RUN ── */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">How Online GCSE Sessions Run</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Live past papers, marked in real time, with your child on screen.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Live Past Papers', desc: 'AQA, OCR and Edexcel past papers opened on screen together.', icon: <BookOpen className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: 'Live Mark Scheme', desc: 'Answers marked in the same session against the board scheme.', icon: <CheckCircle2 className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: 'Real Paper Timing', desc: 'Non-calculator and calculator papers drilled to full exam length.', icon: <Timer className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: 'Session Recordings', desc: 'Every session recorded so tricky topics can be rewatched later.', icon: <Video className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: 'Weekly Homework', desc: 'Homework built from your child\'s own school past-paper booklet.', icon: <PenTool className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: 'Fortnightly Report', desc: 'A short parent note every two weeks on progress and gaps.', icon: <Target className="w-5 h-5 text-[#0f4a9b]" /> },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }} className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.04)] cursor-default">
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] flex items-center justify-center mb-3">{s.icon}</div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{s.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: WHERE GCSE MARKS VANISH (Accordion) ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc] relative overflow-hidden">
        <GcseGrid light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5"><Target className="h-4 w-4" /><span className="text-sm font-bold">Exam Insight</span></div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">Six Places GCSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">Students Lose Marks</span></h2>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">The per-paper mark leaks we fix on repeat, week after week.</p>
            </div>
            <ChallengesAccordion challenges={CHALLENGES} />
          </div>
        </div>
      </section>

      {/* ── SECTION 05: WHAT YOUR FREE FIRST LESSON DELIVERS ── */}
      <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">Trial Outcomes</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">What Your Free First Lesson Delivers</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Four concrete outcomes your child and you leave the trial holding.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { title: 'Mock Paper Review', desc: 'Your child\'s latest mock walked through, question by question, live.' },
              { title: 'Weak Topic Named', desc: 'One specific weak topic named before the trial lesson ends.' },
              { title: 'Target Grade Set', desc: 'The gap between mock grade and school target confirmed in numbers.' },
              { title: 'Weekly Slot Booked', desc: 'A recurring Abu Dhabi weekly slot agreed before the call closes.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#0f4a9b]/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] hover:-translate-y-1 hover:border-[#0f4a9b]/20 transition-all duration-300 flex items-start gap-4 cursor-pointer active:scale-[0.98] active:shadow-sm">
                <div className="text-3xl font-black text-[#0f4a9b]/40 leading-none mt-1">{(i+1).toString().padStart(2, '0')}</div>
                <div>
                  <h3 className="text-lg font-extrabold mb-2 text-[#0f4a9b]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#3a4f6e] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 06: EVERY GCSE TERM, SUPPORTED ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">Academic Planning</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">Every GCSE Term, Supported</h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto italic">How the GCSE year unfolds inside our weekly online sessions.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              { title: 'Sept Diagnostic', desc: 'Year 10 and Year 11 diagnostics run in the first fortnight.', m: 'Sep' },
              { title: 'Nov Mock Push', desc: 'AQA, OCR and Edexcel past papers timed to full paper length.', m: 'Nov' },
              { title: 'Winter Intensive', desc: 'Two or three online sessions per week over the December break.', m: 'Dec' },
              { title: 'Feb Mock Marking', desc: 'Second-mock papers marked live against the board mark scheme.', m: 'Feb' },
              { title: 'Easter Revision', desc: 'Six-marker and extended response rehearsal for Higher tier students.', m: 'Apr' },
              { title: 'Exam Mornings', desc: 'A fifteen-minute WhatsApp check-in before each May or June paper.', m: 'May' },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,74,155,0.15)' }} className="rounded-2xl p-5 flex items-start gap-4 cursor-default" style={{ background: 'rgba(15,74,155,0.06)', border: '1px solid rgba(15,74,155,0.15)', transition: 'border-color 200ms ease' }}>
                <div className="w-12 h-12 rounded-xl bg-[#0f4a9b]/10 flex flex-col items-center justify-center shrink-0 border border-[#0f4a9b]/20">
                  <span className="text-[10px] font-bold text-[#0f4a9b] uppercase">{p.m}</span>
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{p.title}</h3>
                  <p className="text-[13px] text-[#3a4f6e] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 07: GCSE SCIENCE SUPPORT ── */}
      <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">Curriculum Hub</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">GCSE Science Support, All in One Place</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">Whichever science route your school follows, matched to the right tutor.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {[
              { Icon: ArrowRightLeft, title: 'Physics Tutor Abu Dhabi', body: 'For forces, motion, waves, electricity and the required practicals.', linkText: 'Physics Tutor Abu Dhabi', href: '/physics-tutor-abu-dhabi' },
              { Icon: FlaskConical, title: 'Chemistry Tutor Abu Dhabi', body: 'For bonding, quantitative chemistry, organic routes and rates.', linkText: 'Chemistry Tutor Abu Dhabi', href: '/chemistry-tutor-abu-dhabi' },
              { Icon: BookOpen, title: 'Biology Tutor Abu Dhabi', body: 'For cells, homeostasis, ecology, inheritance and required practicals.', linkText: 'Biology Tutor Abu Dhabi', href: '/biology-tutor-abu-dhabi' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#0f4a9b]/10 p-6 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_32px_rgba(15,74,155,0.18)] hover:-translate-y-1.5 hover:border-[#0f4a9b]/30 transition-all duration-300 flex flex-col cursor-pointer active:scale-[0.98] active:shadow-sm">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{ background: 'rgba(15,74,155,0.08)' }}><item.Icon className="h-6 w-6 text-[#0f4a9b]" strokeWidth={2} /></div>
                <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2 leading-snug">{item.title}</h3>
                <p className="text-[14px] text-[#3a4f6e] leading-relaxed flex-1 mb-4">{item.body}</p>
                <a href={item.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0f4a9b] hover:text-[#1e5ba8] transition-colors">{item.linkText} <span aria-hidden="true">→</span></a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 08: GCSE ENGLISH BOOKS ── */}
      <section className="py-14 lg:py-18 bg-[#f4f7fc] relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">Set Texts</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">Help With the Books and Poems in GCSE English</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">The set texts your child studies, made easier to remember for the exam.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-6">
            {[
              { title: 'Macbeth', desc: 'We help your child learn the key quotes and what they mean.' },
              { title: 'An Inspector Calls', desc: 'We build clear answers to the themes teachers ask about most.' },
              { title: 'A Christmas Carol', desc: 'We walk through Scrooge\'s story with quotes ready for the exam.' },
              { title: 'Poetry Anthology', desc: 'We compare the poems your child needs, side by side and simply.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#0f4a9b]/20 transition-all duration-300 flex flex-col items-start cursor-pointer active:scale-[0.98] active:shadow-sm">
                <BookOpen className="w-8 h-8 text-[#0f4a9b]/60 mb-4" />
                <h3 className="text-[16px] font-extrabold mb-2 text-[#0a1f3d]">{item.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-500 max-w-2xl mx-auto bg-white/60 py-2 rounded-full border border-gray-200/60">If your child's school follows the Edexcel English Literature set instead, we match to that at the booking stage.</p>
        </div>
      </section>

      {/* ── SECTION 09: WHATSAPP ── */}
      <section className="py-14 lg:py-18 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#25D366]/5 border-2 border-[#25D366]/20 rounded-[32px] p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#25D366]/10 border border-[#25D366]/20 text-[#128C7E] rounded-full text-xs font-bold mb-3 uppercase tracking-widest"><MessageCircle className="w-4 h-4" /> STUCK ON A GCSE QUESTION?</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">Send it, Get a Worked Answer in 15 Minutes</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-2">One GCSE question, one worked answer, fifteen minutes.</p>
              <p className="text-gray-600 text-sm sm:text-[15px] max-w-lg mx-auto mb-6">AQA, OCR or Pearson Edexcel GCSE questions answered within 15 minutes.</p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm text-[12px] font-bold text-[#0a1f3d]"><Timer className="w-4 h-4 text-[#25D366]" /> Average reply time 12 minutes during Abu Dhabi hours</div>
              </div>
              <a href={WA_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b958] text-white px-8 py-4 rounded-2xl font-extrabold text-[15px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:-translate-y-0.5 transition"><MessageCircle className="w-5 h-5" /> Ask on WhatsApp</a>
              <p className="mt-4 text-[12px] text-gray-500 font-medium">No sign-up. No credit card. Send a photo of the question.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: WHAT PARENTS SAY (Single Quote) ── */}
      <section className="py-16 lg:py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f4a9b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">From an <span style={{ color: '#f0c96a' }}>Abu Dhabi Family</span></h2>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs text-white/90 font-semibold self-start sm:self-auto"><span className="text-[#f0c96a] tracking-tighter">★★★★★</span><span>Verified</span></div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-2xl relative text-left">
            <div className="text-6xl font-serif text-white/15 absolute top-3 left-6 select-none pointer-events-none">“</div>
            <p className="relative z-10 text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-6 pt-2">The live past paper marking made a huge difference to my daughter's confidence. Her AQA Science tutor in Abu Dhabi explained exactly where the marks were slipping. Highly recommend the online setup.</p>
            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-sm shadow-inner shrink-0">SA</div>
              <div>
                <div className="font-extrabold text-white text-base leading-tight">Sarah A., Reem Island, Abu Dhabi</div>
                <div className="text-blue-200/70 text-xs mt-0.5">Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FAQS ── */}
      <section className="py-16 sm:py-20 bg-[#f4f7fc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-[15px]">Eight questions Abu Dhabi parents actually ask before booking online GCSE support.</p>
          </div>
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300" style={{ boxShadow: isOpen ? '0 10px 30px rgba(15,74,155,0.06)' : '0 2px 10px rgba(0,0,0,0.02)' }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full text-left px-5 py-4 flex items-center justify-between gap-4">
                    <span className="font-bold text-[#0a1f3d] text-[15px]">{faq.q}</span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#0f4a9b] text-white' : 'bg-[#f4f7fc] text-[#0f4a9b]'}`}>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="px-5 pb-5 text-[14px] text-gray-600 leading-relaxed border-t border-gray-50 mt-1 pt-4">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 12: START ONLINE GCSE SUPPORT ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4">Start Online GCSE Support</h2>
            <p className="text-gray-600 text-[15px]">Two free ways to begin, both delivered live online.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#f4f7fc] p-8 rounded-[24px] border border-[#0f4a9b]/10 flex flex-col items-center text-center hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#f0c96a]/20 text-[#b8883f] flex items-center justify-center mb-5"><Star className="w-8 h-8 fill-current" /></div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">Free First Lesson</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed">Thirty online minutes with a matched GCSE tutor, at no cost.</p>
              <a href={BOOKING} className="w-full bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] hover:brightness-110 text-white py-3 rounded-xl font-bold transition transform flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(199,162,74,0.3)] hover:shadow-lg hover:shadow-[#C7A24A]/40 hover:-translate-y-0.5 active:scale-95">Book First Lesson</a>
            </div>
            <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgba(37,211,102,0.08)] border border-[#25D366]/20 flex flex-col items-center text-center hover:shadow-[0_12px_40px_rgba(37,211,102,0.15)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-5"><MessageCircle className="w-8 h-8" /></div>
              <h3 className="text-[18px] font-extrabold text-[#0a1f3d] mb-2">WhatsApp a Question</h3>
              <p className="text-[14px] text-gray-500 mb-6 leading-relaxed">Send any past-paper question and get a reply in fifteen minutes.</p>
              <a href={WA_URL} target="_blank" rel="noopener" className="w-full bg-[#25D366] hover:bg-[#20b958] text-white py-3 rounded-xl font-bold transition flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" /> Message Us</a>
            </div>
          </div>
          <p className="text-center text-[13px] text-gray-500 font-medium mb-10">First lesson free. Weekend, evening and Ramadan slots. UAE-registered since 2015.</p>
          
          <div className="bg-[#f4f7fc] rounded-3xl p-6 sm:p-8 border border-gray-100">
            <h4 className="text-[15px] font-bold text-[#0a1f3d] mb-6 border-b border-gray-200 pb-4">Related pages</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div><a href="/gcse" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">GCSE Hub (All Subjects)</a><p className="text-[12px] text-gray-500">For board comparison, subject list and the full GCSE framework.</p></div>

              <div><a href="/maths-tutor-abu-dhabi" className="text-[14px] font-bold text-[#0f4a9b] hover:underline block mb-1">Maths Tutor Abu Dhabi</a><p className="text-[12px] text-gray-500">For non-calc drills, Paper 1 timing and Higher tier prep.</p></div>
              <div><span className="text-[14px] font-bold text-[#0f4a9b] block mb-1">English Tutor Abu Dhabi</span><p className="text-[12px] text-gray-500">For English Language reading and Literature essay support.</p></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
