import { useState, useEffect, useRef, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Award, BookOpen, CheckCircle, ChevronDown, Clock, GraduationCap, MapPin,
  MessageCircle, MessageSquare, PenTool, ShieldCheck, Sparkles, Star, Target,
  Users, ArrowRight, ArrowRightLeft, Calculator, FileText, Calendar, Compass,
  Layers, CheckCircle2, TrendingUp, AlertTriangle, MessageSquareQuote, Video, Timer
} from 'lucide-react';
import { Layout, GoldButton, StatsBar, SchoolsMarquee, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, singleReviewSchema, reviewSchema } from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20A-Level%20tutoring%20support%20in%20Abu%20Dhabi.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const abuDhabiSchoolLogos = [
  { name: 'The British School Al Khubairat', file: 'british-school-al-khubairat-abu-dhabi.png', alt: 'The British School Al Khubairat logo, BSAK Abu Dhabi A-Level school', scale: 1.25 },
  { name: 'Cranleigh Abu Dhabi', file: 'cranleigh.png', alt: 'Cranleigh Abu Dhabi logo, A-Level school on Saadiyat Island', scale: 1.25 },
  { name: 'Brighton College Abu Dhabi', file: 'brighton.png', alt: 'Brighton College Abu Dhabi logo, preparing students for A-Level', scale: 1.25 },
  { name: 'Repton School Abu Dhabi', file: 'repton.png', alt: 'Repton School Abu Dhabi logo, A-Level school in Abu Dhabi', scale: 1.25 },
  { name: 'Yasmina British Academy', file: 'al-yasmina-academy-abu-dhabi.png', alt: 'Yasmina British Academy logo, Al Yasmina Abu Dhabi A-Level school', scale: 1.25 },
  { name: 'Amity International School Abu Dhabi', file: 'amity.png', alt: 'Amity International School Abu Dhabi logo', scale: 1.25 },
  { name: 'GEMS Cambridge International School Abu Dhabi', file: 'gems-cambridge-international-school-abu-dhabi.png', alt: 'GEMS Cambridge International School Abu Dhabi logo', scale: 1.25 },
  { name: 'The Cambridge High School Abu Dhabi', file: 'gems-wa.png', alt: 'The Cambridge High School Abu Dhabi logo', scale: 1.25 },
  { name: 'Abu Dhabi International School', file: 'al-bateen.png', alt: 'Abu Dhabi International School logo', scale: 1.25 },
  { name: 'Nord Anglia International School Abu Dhabi', file: 'nord-anglia.png', alt: 'Nord Anglia International School Abu Dhabi logo', scale: 1.25 },
  { name: 'Belvedere British School Abu Dhabi', file: 'belvedere.png', alt: 'Belvedere British School Abu Dhabi logo', scale: 1.25 },
];

const GridBackground = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'algrid-l' : 'algrid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'algrid-l' : 'algrid-d'})`} />
  </svg>
);

type RebuildTechnique = { notation: string; icon: ReactNode; title: string; desc: string };

const REBUILD_TECHNIQUES: RebuildTechnique[] = [
  { notation: '01', icon: <PenTool className="w-5 h-5" />, title: 'Method Discipline', desc: 'Every method step written out for Pure Maths and Physics working papers.' },
  { notation: '02', icon: <Layers className="w-5 h-5" />, title: 'Evaluation Chains', desc: 'Economics essays need reasoning chains, not lists of points.' },
  { notation: '03', icon: <Clock className="w-5 h-5" />, title: 'Data-Response Timing', desc: 'Physics data-response and practical questions drilled to full exam length.' },
  { notation: '04', icon: <BookOpen className="w-5 h-5" />, title: 'Precise Definitions', desc: 'Biology and Psychology terms exactly as mark schemes use them.' },
  { notation: '05', icon: <Calculator className="w-5 h-5" />, title: 'Diagram Accuracy', desc: 'Axis labels, units and best-fit lines to exam-marker standard.' },
  { notation: '06', icon: <ArrowRightLeft className="w-5 h-5" />, title: 'Source Synthesis', desc: 'History and English link two extracts without summarising either.' },
];

const FAQS = [
  {
    q: "My child has Year 13 mocks in November. What's the shortest useful prep window?",
    a: "Six to eight weekly sessions is the window most Year 13 families notice a clear grade shift from. Start by the second week of September to fit a diagnostic, a weak-topic rebuild and one full mock drill before the November window opens."
  },
  {
    q: "Can practical endorsement work be done online without lab equipment?",
    a: "Yes. Practical Endorsement itself is a pass or fail award set by your child's school. What the tutor covers online is the written exam questions on practicals: method design, expected observations, sources of error, and the language mark schemes reward."
  },
  {
    q: "Does the tutor mark my child's returned mock papers in the session?",
    a: "Yes. Any school mock or past paper already sat is opened on screen and marked live against the actual board mark scheme. Your child sees exactly which mark rewarded which sentence, not just a grade letter from school."
  },
  {
    q: "Can the NEA coursework essay be planned and drafted online?",
    a: "Yes. NEA coursework across English Literature (7712 or 9ET0), History (7042) and equivalent Edexcel or OCR components is supported from title through outline, first draft and structural feedback. Final wording stays your child's own work."
  },
  {
    q: "My child's school runs Cambridge for sciences and Edexcel for Maths. Can you match both?",
    a: "Yes. Mixed-board schedules are common at Abu Dhabi British-curriculum schools like BSAK, Cranleigh and Repton. We match tutor by subject and board, so a Cambridge 9702 Physics tutor and an Edexcel Mathematics tutor share your child's weekly schedule."
  },
  {
    q: "If my child needs UCAT prep alongside A-Levels, how do we timetable it?",
    a: "UCAT coaching runs as an extra weekly slot or as two-week intensive blocks before the test date. UCAT registration closes late September, so most Abu Dhabi families start prep in July or August. LNAT and MAT run on their own test dates and are coached in the same intensive-block format."
  },
  {
    q: "We only need help for the final six weeks before A-Level papers. Is that possible?",
    a: "Yes. Three online sessions per week for the final six weeks, focused only on the papers still to be sat. Content teaching is dropped. Sessions become past-paper drills, mark-scheme discipline and grade-boundary work only."
  }
];

function RebuildAccordion({ items }: { items: RebuildTechnique[] }) {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="relative">
      <div className="flex flex-col gap-[10px]">
        {items.map((item, i) => {
          const isOpen = active === i;
          return (
            <div key={i} className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 40, height: 40, minWidth: 40, minHeight: 40,
                    background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                    color: isOpen ? '#fff' : '#0f4a9b',
                    transition: 'background 300ms ease, color 300ms ease',
                    cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff'
                  }}
                >
                  <span className="flex items-center justify-center w-full h-full">{item.icon}</span>
                </button>

                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex-1 flex items-center gap-3 text-left rounded-full border"
                  style={{ minHeight: '48px', padding: '8px 14px', cursor: 'pointer', background: 'transparent', borderColor: 'rgba(15,74,155,0.1)' }}
                >
                  <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{item.title}</span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{
                      width: 32, height: 32, minWidth: 32, minHeight: 32, borderRadius: '50%',
                      background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                      color: isOpen ? '#fff' : '#0f4a9b',
                      transition: 'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="ml-[52px] mt-1">
                      <div className="rounded-2xl px-4 py-3" style={{ background: 'linear-gradient(135deg, rgba(15,74,155,0.06) 0%, rgba(30,91,168,0.03) 100%)', border: '1px solid rgba(15,74,155,0.12)', backdropFilter: 'blur(8px)' }}>
                        <p className="text-[13px] text-[#3a4f6e] leading-relaxed">{item.desc}</p>
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

const UNIVERSITIES = [
  { idx: "01", name: "Imperial College London", country: "United Kingdom" },
  { idx: "02", name: "University College London", country: "United Kingdom" },
  { idx: "03", name: "King's College London", country: "United Kingdom" },
  { idx: "04", name: "University of Warwick", country: "United Kingdom" },
  { idx: "05", name: "University of Edinburgh", country: "United Kingdom" },
  { idx: "06", name: "London School of Economics", country: "United Kingdom" },
  { idx: "07", name: "NYU Abu Dhabi", country: "United Arab Emirates" },
  { idx: "08", name: "Khalifa University", country: "United Arab Emirates" },
  { idx: "09", name: "UAE University", country: "United Arab Emirates" },
  { idx: "10", name: "McGill University", country: "Canada" },
];

const SAMPLE_WEEK_EVENTS = [
  { 
    t: 'live',  
    pos: 10.5, 
    type: 'Live session',        
    title: 'Chemistry 9701, one to one over video', 
    sub: 'Board specific worked examples, misconceptions unpicked.', 
    when: 'Mon 18:30, 60 min',
    accentColor: '#0f4a9b',
    icon: Clock
  },
  { 
    t: 'ayq',   
    pos: 35,   
    type: 'Ask Your Question',   
    title: 'Send a question, worked reply back',    
    sub: 'Stuck on a past paper part. Tutor sends a step by step solution the same day.', 
    when: 'Wed anytime, ~15 min reply',
    accentColor: '#F59E0B',
    icon: MessageCircle
  },
  { 
    t: 'drill', 
    pos: 72,   
    type: 'Past paper drill',    
    title: 'Physics 9702, timed and walked through', 
    sub: 'Under real conditions, then mark scheme line by line.', 
    when: 'Sat 10:00, 90 min',
    accentColor: '#10B981',
    icon: FileText
  },
  { 
    t: 'note',  
    pos: 95,   
    type: 'Progress note',       
    title: 'Weekly note to parents',                 
    sub: 'What was covered, what is on track, what needs another look.', 
    when: 'Sun evening',
    accentColor: '#8B5CF6',
    icon: CheckCircle2
  }
];

export default function ALevelTutorAbuDhabiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedBoard, setSelectedBoard] = useState<'cambridge' | 'edexcel' | 'oxford' | 'ocr'>('cambridge');
  const [activeUniIdx, setActiveUniIdx] = useState(0);
  const [isUniPaused, setIsUniPaused] = useState(false);
  const uniListRef = useRef<HTMLDivElement>(null);
  const uniItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [markerTop, setMarkerTop] = useState(0);

  const [activeWeekEvent, setActiveWeekEvent] = useState(0);
  const [isWeekPaused, setIsWeekPaused] = useState(false);

  useEffect(() => {
    if (isUniPaused) return;
    const timer = setInterval(() => {
      setActiveUniIdx((prev) => (prev + 1) % UNIVERSITIES.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [isUniPaused]);

  useEffect(() => {
    const activeEl = uniItemRefs.current[activeUniIdx];
    const listEl = uniListRef.current;
    if (activeEl && listEl) {
      const listRect = listEl.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      const top = itemRect.top - listRect.top + (itemRect.height - 28) / 2;
      setMarkerTop(top);
    }
  }, [activeUniIdx]);

  useEffect(() => {
    if (isWeekPaused) return;
    const startTime = Date.now();
    const cycleDuration = 12000;

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) % cycleDuration;
      const pct = (elapsed / cycleDuration) * 100;

      let activeIdx = 0;
      for (let i = 0; i < SAMPLE_WEEK_EVENTS.length; i++) {
        if (pct >= SAMPLE_WEEK_EVENTS[i].pos - 5) {
          activeIdx = i;
        }
      }
      setActiveWeekEvent(activeIdx);
    }, 100);

    return () => clearInterval(interval);
  }, [isWeekPaused]);

  return (
    <Layout>
      <SEOHead
        title="Online A-Level Tutor Abu Dhabi | Cambridge & Edexcel"
        description="Live online A-Level tutors for Abu Dhabi families. Cambridge, Edexcel, Oxford AQA and OCR support for Years 12 and 13. First lesson free."
        canonical="/a-level-tutor-abu-dhabi"
        ogImage="/UpdatedImages/a-level-tutor-abu-dhabi-online-year-13-session.webp"
        preloadHeroImage="/UpdatedImages/a-level-tutor-abu-dhabi-online-year-13-session.webp"
        placename="Abu Dhabi, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Abu Dhabi',
            url: '/a-level-tutor-abu-dhabi',
            name: 'Ustaad — A-Level Tutor Abu Dhabi',
            description: 'Live online A-Level tutors for Abu Dhabi families. Cambridge, Edexcel, Oxford AQA and OCR support for Years 12 and 13.'
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'A-Level', url: '/a-level' },
            { name: 'A-Level Tutor Abu Dhabi', url: '/a-level-tutor-abu-dhabi' }
          ]),
          serviceSchema(
            'A-Level Tutor Abu Dhabi',
            'Live online A-Level tutors for Abu Dhabi families. Cambridge, Edexcel, Oxford AQA and OCR support.',
            '/a-level-tutor-abu-dhabi'
          ),
          faqSchema(FAQS),
          reviewSchema('Ustaad — Online A-Level Tutor Abu Dhabi', [
            {
              author: 'Rashid H.',
              reviewBody: "Our daughter was struggling with A-Level Chemistry mechanisms and physics past paper timing at BSAK in Abu Dhabi. Working online with Ustaad's board specialists turned her predicted B into an A* in Cambridge 9701, securing her offer for Medicine.",
              ratingValue: 5,
            },
          ]),
        ]}
      />

      {/* ── SECTION 01: HERO CANVAS (Exact design & hero SVG canvas matching GCSE/IGCSE pages) ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        {/* Background SVG decorative canvas on desktop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 md:opacity-100">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="alGrowthGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="alHexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a" />
                <stop offset="100%" stopColor="#C7A24A" />
              </linearGradient>
              <radialGradient id="alHexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
              </radialGradient>
              <filter id="alglow"><feGaussianBlur stdDeviation="3" /></filter>
              <marker id="alarrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(95,211,230,0.8)" />
              </marker>
            </defs>

            {/* Dot Grid */}
            {(() => {
              const dots: ReactNode[] = [];
              for (let x = 40; x < 1400; x += 55) for (let y = 30; y < 600; y += 55)
                dots.push(<circle key={`d${x}${y}`} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.03)" />);
              return dots;
            })()}

            {/* Growth Curve (Kept to far left margin X: 30..240) */}
            {(() => {
              const out: ReactNode[] = [];
              out.push(<path key="curve" d="M 30 500 Q 140 500 240 80" fill="none" stroke="url(#alGrowthGrad)" strokeWidth="3" filter="url(#alglow)" />);
              out.push(<path key="curve2" d="M 30 500 Q 140 500 240 80" fill="none" stroke="url(#alGrowthGrad)" strokeWidth="1.5" markerEnd="url(#alarrow)" />);
              out.push(<line key="xaxis" x1="20" y1="500" x2="280" y2="500" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />);
              out.push(<line key="yaxis" x1="30" y1="510" x2="30" y2="70" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />);
              out.push(<text key="lbl_offer" x="140" y="65" fill="rgba(95,211,230,0.8)" fontSize="12" fontFamily="monospace" fontWeight="bold">Target: UCAS Offer</text>);
              out.push(<text key="lbl_mocks" x="160" y="520" fill="rgba(255,255,255,0.35)" fontSize="11" fontFamily="monospace">Autumn Mocks</text>);
              out.push(<text key="lbl_start" x="30" y="520" fill="rgba(255,255,255,0.35)" fontSize="11" fontFamily="monospace">Year 12 Start</text>);
              return out;
            })()}

            {/* Glowing Hexagon Network (Kept to far right margin HX: 1280) */}
            {(() => {
              const out: ReactNode[] = [];
              const HX = 1280, HY = 240, SIZE = 75;
              const pts = [];
              for (let i = 0; i < 6; i++) {
                const angle_deg = 60 * i - 30;
                const angle_rad = (Math.PI / 180) * angle_deg;
                pts.push(`${HX + SIZE * Math.cos(angle_rad)},${HY + SIZE * Math.sin(angle_rad)}`);
              }
              out.push(<circle key="hexglow" cx={HX} cy={HY} r={SIZE * 1.5} fill="url(#alHexGlow)" />);
              out.push(<polygon key="hex1" points={pts.join(' ')} fill="none" stroke="url(#alHexGrad)" strokeWidth="2" filter="url(#alglow)" />);
              out.push(<polygon key="hex2" points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4" />);
              for (let i = 0; i < 3; i++) {
                out.push(<line key={`cross${i}`} x1={HX + SIZE * Math.cos(((60 * i - 30) * Math.PI) / 180)} y1={HY + SIZE * Math.sin(((60 * i - 30) * Math.PI) / 180)} x2={HX + SIZE * Math.cos(((60 * (i + 3) - 30) * Math.PI) / 180)} y2={HY + SIZE * Math.sin(((60 * (i + 3) - 30) * Math.PI) / 180)} stroke="rgba(240,201,106,0.15)" strokeWidth="1" />);
              }
              out.push(<circle key="center" cx={HX} cy={HY} r="24" fill="rgba(240,201,106,0.1)" stroke="#f0c96a" strokeWidth="1.5" />);
              out.push(<text key="alevel" x={HX} y={HY + 4} textAnchor="middle" fill="#f0c96a" fontSize="13" fontWeight="900" fontFamily="sans-serif">A-Level</text>);
              out.push(<text key="t1" x={HX - 110} y={HY - 50} fill="rgba(95,211,230,0.7)" fontSize="11" fontFamily="monospace">Cambridge 9709</text>);
              out.push(<text key="t2" x={HX + 65} y={HY - 65} fill="rgba(180,180,255,0.7)" fontSize="11" fontFamily="monospace">Edexcel 9MA0</text>);
              out.push(<text key="t3" x={HX + 75} y={HY + 60} fill="rgba(240,201,106,0.7)" fontSize="11" fontFamily="monospace">AQA Physics 7408</text>);
              out.push(<text key="t4" x={HX - 110} y={HY + 75} fill="rgba(95,211,230,0.6)" fontSize="11" fontFamily="monospace">OCR Chemistry A</text>);
              return out;
            })()}
          </svg>
        </div>

          {/* Hero Content Box */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full"
          >

          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/80 text-[11px] sm:text-[12px] font-semibold">Trusted by Abu Dhabi families since 2015</span>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.05] mb-3 md:mb-5 text-[clamp(1.7rem,5vw,3.4rem)] max-w-[95%] sm:max-w-none"
          >
            Online A-Level Tutor Abu Dhabi,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built for Offers
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.05rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4 italic font-medium"
          >
            Live online A-Level tutors matched to Cambridge, Edexcel, OxfordAQA or OCR.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full px-4 mt-2"
          >
            <div className="sm:hidden w-full max-w-[340px] flex flex-col items-center gap-2.5 p-3.5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)' }}>
              <a
                href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5 text-center"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}
              >
                Book Your Free Trial
              </a>
              <span className="text-blue-200/50 text-[11px]">No commitment. Cancel anytime.</span>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-blue-200/90 text-[12px] font-semibold underline flex items-center justify-center gap-1">
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> WhatsApp Us
              </a>
            </div>

            <div className="hidden sm:flex items-start justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={BOOKING}
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 18px rgba(15,74,155,0.55)' }}
                >
                  Book Your Free Trial
                </a>
                <p className="text-blue-200/50 text-[11px]">No commitment. Cancel anytime.</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Ustaad on WhatsApp"
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[14px] md:text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── NEW SECTION 1: TRUST PROOF STRIP ── */}
      <section className="py-5 bg-[#FAFAFA] border-y border-slate-200/80">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-3">
            {['Cambridge', 'Edexcel', 'Oxford AQA', 'OCR'].map((board) => (
              <span
                key={board}
                className="px-4 py-1.5 rounded-full bg-[#F1F5F9] text-[#0a1f3d] text-xs font-bold border border-slate-200/80 hover:bg-[#E2E8F0] transition-colors cursor-default"
              >
                {board}
              </span>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mb-1">
            Trusted by A-Level families at BSAK, Cranleigh Abu Dhabi, Repton, Raha and Brighton College Abu Dhabi.
          </p>
          <p className="text-[11px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider">
            Aligned with KHDA and ADEK tutor standards.
          </p>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <StatsBar />

      {/* ── SCHOOLS MARQUEE ── */}
      <SchoolsMarquee
        title="Trusted by A-Level Families From Top Abu Dhabi Schools"
        logoList={abuDhabiSchoolLogos}
      />

      {/* ── NEW SECTION 2: UNIVERSITIES WHERE A-LEVEL OFFERS LANDED (Minimal Editorial Reveal) ── */}
      <section 
        className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-left mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e5ba8]/5 border border-[#1e5ba8]/10 text-[#1e5ba8] text-xs font-bold mb-3.5">
              <GraduationCap className="h-3.5 w-3.5" /> Proven University Destinations
            </div>
            <h2 id="uu-heading" className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0a1f3d] tracking-tight mb-2">
              Where Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">A-Level Students Received Offers</span>
            </h2>
            <p className="text-sm sm:text-[14.5px] text-[#64748B] leading-relaxed max-w-2xl">
              A rotating selection of UK, US and UAE destinations where recent Ustaad A-Level students have received university offers.
            </p>
          </div>

          {/* Two-Column Stage */}
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-stretch">
            
            {/* Featured Card */}
            <article className="relative bg-white border border-slate-200/90 rounded-[20px] p-8 sm:p-10 min-h-[300px] sm:min-h-[320px] overflow-hidden flex flex-col justify-between shadow-xs isolate">
              {/* Radial gradient background accent matching website theme */}
              <div 
                className="absolute inset-0 pointer-events-none z-0 transition-all duration-700" 
                style={{ background: 'radial-gradient(600px 300px at 0% 0%, rgba(30,91,168,0.08), transparent 60%)' }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeUniIdx}
                  initial={{ opacity: 0, filter: 'blur(6px)', y: 6 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  exit={{ opacity: 0, filter: 'blur(4px)', y: -4 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10"
                >
                  <div className="font-mono text-xs font-semibold text-[#64748B] tracking-wider mb-4">
                    {UNIVERSITIES[activeUniIdx].idx} / {String(UNIVERSITIES.length).padStart(2, '0')}
                  </div>

                  <div>
                    <span className="inline-block text-[11px] font-bold tracking-[0.14em] uppercase text-[#1e5ba8] bg-[#1e5ba8]/5 border border-[#1e5ba8]/10 px-3 py-1 rounded-full mb-4">
                      {UNIVERSITIES[activeUniIdx].country}
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0f4a9b] tracking-tight leading-[1.1]">
                      {UNIVERSITIES[activeUniIdx].name}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Footer Meta Indicator */}
              <div className="relative z-10 mt-6 pt-4 flex items-center gap-2.5 text-xs sm:text-[13px] text-[#64748B] font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1e5ba8] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1e5ba8]"></span>
                </span>
                <span>Offer received in a recent A-Level cycle</span>
              </div>

              {/* Progress Bar */}
              <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#F1F5F9] z-10 overflow-hidden">
                <motion.div
                  key={activeUniIdx}
                  initial={{ width: "0%" }}
                  animate={{ width: isUniPaused ? undefined : "100%" }}
                  transition={{ duration: 3.6, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#1e5ba8] via-[#0f4a9b] to-[#0a3a79]"
                />
              </div>
            </article>

            {/* Index List */}
            <nav ref={uniListRef} className="relative pl-5 flex flex-col justify-center border-l border-slate-200 py-1" aria-label="All universities">
              {/* Sliding Marker */}
              <div 
                className="absolute left-[-1.5px] w-[3px] h-[28px] bg-[#1e5ba8] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                style={{ transform: `translateY(${markerTop}px)` }}
              />

              {UNIVERSITIES.map((uni, idx) => {
                const isActive = idx === activeUniIdx;
                return (
                  <div
                    key={idx}
                    ref={(el) => (uniItemRefs.current[idx] = el)}
                    onClick={() => setActiveUniIdx(idx)}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveUniIdx(idx);
                      }
                    }}
                    className={`flex items-center gap-3 py-1.5 px-1 cursor-pointer select-none transition-colors duration-300 text-sm sm:text-[15px] ${
                      isActive ? 'text-[#0a1f3d] font-extrabold' : 'text-[#94A3B8] hover:text-[#334155]'
                    }`}
                  >
                    <span className={`font-mono text-xs w-5 shrink-0 transition-colors duration-300 ${
                      isActive ? 'text-[#1e5ba8] font-bold' : 'text-[#CBD5E1]'
                    }`}>
                      {uni.idx}
                    </span>
                    <span>{uni.name}</span>
                  </div>
                );
              })}
            </nav>

          </div>
        </div>
      </section>

      {/* ── SECTION 1: INSIDE A USTAAD A-LEVEL SESSION ── */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              Inside a Ustaad A-Level Session
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              What actually happens in the sixty minutes your child is on the call.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Subject Specialists",
                desc: "Tutors focus on A-Level in their subject, not general levels.",
                icon: <GraduationCap className="w-5 h-5 text-[#0f4a9b]" />
              },
              {
                title: "UCAS-Anchored",
                desc: "Every session knows your child's target course and offer grade.",
                icon: <Target className="w-5 h-5 text-[#0f4a9b]" />
              },
              {
                title: "Long Essays Structured",
                desc: "25-mark answers broken into paragraphs before the timer starts.",
                icon: <FileText className="w-5 h-5 text-[#0f4a9b]" />
              },
              {
                title: "Board Mark Schemes",
                desc: "Cambridge, Edexcel, OxfordAQA and OCR mark schemes referenced live.",
                icon: <CheckCircle2 className="w-5 h-5 text-[#0f4a9b]" />
              },
              {
                title: "Homework Planning",
                desc: "We plan your child's study week, not just this lesson's content.",
                icon: <Calendar className="w-5 h-5 text-[#0f4a9b]" />
              },
              {
                title: "Autumn Mock Focus",
                desc: "The Autumn Year 13 mock window shapes every session plan we build.",
                icon: <Clock className="w-5 h-5 text-[#0f4a9b]" />
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }}
                className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.04)] cursor-default"
              >
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{card.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 2: WHAT WE REBUILD BETWEEN GCSE AND A-LEVEL ── */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#f4f7fc] relative overflow-hidden">
        <GridBackground light />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full mb-5">
                <PenTool className="h-4 w-4" />
                <span className="text-sm font-bold">Technique Rebuild</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                What We Rebuild Between <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">GCSE and A-Level</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed italic">
                The specific techniques schools cover fast and we drill slow.
              </p>
            </div>

            <RebuildAccordion items={REBUILD_TECHNIQUES} />
          </div>
        </div>
      </section>

      {/* ── NEW SECTION 3: CHOOSE YOUR EXAM BOARD (Interactive Chip Picker) ── */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">
            <Target className="h-3.5 w-3.5" /> Exam Board Specifics
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
            Which Exam Board Does Your Child Follow?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Select your child's exam board to see how our session plan anchors to their specific syllabus.
          </p>

          {/* Interactive Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {[
              { id: 'cambridge', label: 'Cambridge' },
              { id: 'edexcel', label: 'Edexcel' },
              { id: 'oxford', label: 'Oxford AQA' },
              { id: 'ocr', label: 'OCR' }
            ].map((chip) => {
              const isSelected = selectedBoard === chip.id;
              return (
                <button
                  key={chip.id}
                  onClick={() => setSelectedBoard(chip.id as any)}
                  className={`px-6 py-2.5 rounded-full font-extrabold text-sm transition-all duration-200 cursor-pointer shadow-sm ${
                    isSelected
                      ? 'bg-[#0f4a9b] text-white shadow-md shadow-[#0f4a9b]/20 scale-[1.03]'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/70'
                  }`}
                >
                  {chip.label}
                </button>
              );
            })}
          </div>

          {/* Board Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBoard}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-left rounded-3xl p-6 sm:p-8 bg-white border border-gray-100 shadow-[0_12px_40px_rgba(15,74,155,0.08)] relative overflow-hidden"
              style={{ borderLeft: '4px solid #C7A24A' }}
            >
              <div className="text-xs font-black uppercase tracking-widest text-[#0f4a9b] mb-4">
                For {selectedBoard === 'cambridge' ? 'Cambridge' : selectedBoard === 'edexcel' ? 'Edexcel' : selectedBoard === 'oxford' ? 'Oxford AQA' : 'OCR'} A-Level:
              </div>

              <ul className="space-y-3 text-sm sm:text-base text-gray-700 font-medium">
                {selectedBoard === 'cambridge' && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Paper 4 essay technique for 9701 Chemistry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>9702 Physics data-analysis timing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Past-paper drilling across May/June and Oct/Nov series</span>
                    </li>
                  </>
                )}
                {selectedBoard === 'edexcel' && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Core Pure and Mechanics coverage for Maths</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Unit-specific revision for 9BN0 Biology and 9CH0 Chemistry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Mark-scheme phrasing drilled line-by-line</span>
                    </li>
                  </>
                )}
                {selectedBoard === 'oxford' && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>AQA International A-Level structure differences</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Chemistry 9615 practical mark-band anchoring</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Physics 9630 required practical write-up support</span>
                    </li>
                  </>
                )}
                {selectedBoard === 'ocr' && (
                  <>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>A-Level Maths 9MA0 discrete techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Physics A H556 practical endorsement support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C7A24A] font-bold text-lg leading-none">•</span>
                      <span>Chemistry A H432 synoptic paper strategy</span>
                    </li>
                  </>
                )}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── SECTION 3: WHAT THE FREE FIRST LESSON DELIVERS ── */}
      <section className="py-14 lg:py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] rounded-full text-xs font-bold mb-3">
              Trial Outcomes
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              What the Free First Lesson Delivers
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              Four concrete outputs your child and you walk away holding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { title: "Offer Letter Match", desc: "Target course and offer grade captured in your child's plan." },
              { title: "Two-Year Roadmap", desc: "The twenty-four month journey mapped, not just next week's homework." },
              { title: "Predicted Grade Path", desc: "Gap between current mock and offer grade shown in numbers." },
              { title: "Recurring Slot Booked", desc: "Weekly Abu Dhabi time slot agreed before the trial ends." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-[#0f4a9b]/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] hover:-translate-y-1 hover:border-[#0f4a9b]/20 transition-all duration-300 flex items-start gap-4 cursor-pointer active:scale-[0.98]"
              >
                <div className="text-3xl font-black text-[#0f4a9b]/40 leading-none mt-1">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-2 text-[#0f4a9b]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#3a4f6e] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW SECTION 4: SAMPLE YEAR 13 WEEK TIMETABLE (Horizontal 7-Day Playhead Sweep) ── */}
      <section 
        className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-slate-200/80 relative overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-left mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e5ba8]/5 border border-[#1e5ba8]/10 text-[#1e5ba8] text-xs font-bold mb-3.5">
              <Clock className="h-3.5 w-3.5" /> A week with Ustaad
            </div>
            <h2 id="sw-heading" className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0a1f3d] tracking-tight mb-2">
              A Sample Week for a Year 13 A-Level Student
            </h2>
            <p className="text-sm sm:text-[14.5px] text-[#64748B] leading-relaxed max-w-2xl">
              Watch a full week move by. Live sessions, on demand help, weekend past paper drills, and a Sunday progress note, all mapped in one continuous rhythm.
            </p>
          </div>

          {/* Dynamic Caption Box above the track */}
          <div className="bg-white rounded-[18px] border border-slate-200/90 p-6 sm:p-7 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 min-h-[108px] relative overflow-hidden mb-6">
            {/* Left Color Accent Bar */}
            <div 
              className="w-2 absolute left-0 top-0 bottom-0 transition-colors duration-500 rounded-l-full" 
              style={{ backgroundColor: SAMPLE_WEEK_EVENTS[activeWeekEvent].accentColor }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeWeekEvent}
                initial={{ opacity: 0, y: 4, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -4, filter: 'blur(4px)' }}
                transition={{ duration: 0.35 }}
                className="pl-2"
              >
                <span className="block font-semibold text-[11px] tracking-[0.12em] uppercase text-slate-500 mb-1">
                  {SAMPLE_WEEK_EVENTS[activeWeekEvent].type}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1f3d] tracking-tight leading-tight">
                  {SAMPLE_WEEK_EVENTS[activeWeekEvent].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1">
                  {SAMPLE_WEEK_EVENTS[activeWeekEvent].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeWeekEvent}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35 }}
                className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg whitespace-nowrap shrink-0 self-start sm:self-center"
              >
                {SAMPLE_WEEK_EVENTS[activeWeekEvent].when}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 7-Day Track Wrapper */}
          <div className="bg-white rounded-[18px] border border-slate-200/90 p-5 sm:p-6 shadow-xs overflow-hidden">
            
            {/* Days Grid Header */}
            <div className="grid grid-cols-7 text-center font-extrabold text-xs tracking-wider uppercase text-slate-400 pb-3 border-b border-slate-100">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>

            {/* Track Bar with Playhead Sweep */}
            <div className="interactive-week-card relative h-24 my-2 border-y border-slate-200/80 bg-slate-50/40 overflow-hidden">
              {/* Day divider grid lines */}
              <div className="absolute inset-0 grid grid-cols-7 pointer-events-none divide-x divide-slate-200/60" />

              {/* Sweeping Playhead */}
              <motion.div
                animate={isWeekPaused ? {} : { left: ["0%", "100%"] }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                className="playhead-vertical-line absolute top-[-8px] bottom-[-8px] w-[2px] bg-[#0a1f3d] z-20 pointer-events-none shadow-md"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0a1f3d] ring-4 ring-[#0a1f3d]/20 shadow-lg" />
              </motion.div>

              {/* Session Markers */}
              {SAMPLE_WEEK_EVENTS.map((ev, idx) => {
                const isActive = idx === activeWeekEvent;
                const IconComp = ev.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveWeekEvent(idx)}
                    aria-label={`${ev.type} on ${ev.when}`}
                    className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-xl border-2 flex items-center justify-center transition-all duration-300 shadow-xs z-10 cursor-pointer ${
                      isActive 
                        ? 'scale-125 z-30 shadow-lg text-white' 
                        : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                    style={{
                      left: `${ev.pos}%`,
                      backgroundColor: isActive ? ev.accentColor : undefined,
                      borderColor: isActive ? ev.accentColor : undefined,
                    }}
                  >
                    <IconComp className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : ''}`} />
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center mt-5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#0f4a9b]" /> Live session
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#F59E0B]" /> Ask Your Question
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#10B981]" /> Past paper drill
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#8B5CF6]" /> Progress note
              </span>
            </div>

          </div>

          {/* Footnote */}
          <p className="mt-6 text-xs text-[#94A3B8] leading-relaxed max-w-3xl text-center mx-auto">
            Illustrative only. Every family's week is scheduled around school, extracurriculars and family plans, including Ramadan slot shifts and half term intensives.
          </p>

        </div>
      </section>

      {/* ── SECTION 4: THE SYNC BETWEEN YOUR CHILD'S CALENDAR AND OURS ── */}
      <section className="py-14 sm:py-16 bg-[#f4f7fc] relative overflow-hidden">
        <GridBackground light />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              The Sync Between Your Child's Calendar and Ours
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              Six delivery moments where our schedule shifts to fit yours.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "School Mock Sync", desc: "Weekly slots ramp up two weeks before every school mock.", icon: <Clock className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: "UCAS Deadline Sync", desc: "Application-season sessions kept light to protect writing time.", icon: <FileText className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: "Ramadan Slot Shifts", desc: "Late-evening or pre-Iftar sessions kept open through the month.", icon: <Calendar className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: "Half-Term Intensives", desc: "Winter and Easter breaks structured, not lost to phone time.", icon: <Sparkles className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: "Family Travel Weeks", desc: "Same tutor moves online-only when your family travels abroad.", icon: <MapPin className="w-5 h-5 text-[#0f4a9b]" /> },
              { title: "Exam-Week Silence", desc: "Sessions pause during exam week itself so your child rests before papers.", icon: <ShieldCheck className="w-5 h-5 text-[#0f4a9b]" /> }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }}
                className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.04)] cursor-default"
              >
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{card.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 5: A-LEVEL SUBJECT COACHES, NOT JUST TUTORS ── */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              A-Level Subject Coaches, Not Just Tutors
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              Matched by subject specialism. Topic areas covered listed below each subject.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {/* Physics Card */}
            <div className="bg-white rounded-3xl p-7 shadow-[0_12px_35px_rgba(15,74,155,0.06)] border border-gray-100 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center mb-5 shadow-md shadow-[#0f4a9b]/20">
                  <Calculator className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-4">Physics Tutor Abu Dhabi</h3>
                
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Mechanics and materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Electric and magnetic fields</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Quantum and nuclear physics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Practical endorsement questions</span>
                  </li>
                </ul>
              </div>

              <a
                href="/physics-tutor-abu-dhabi"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#0f4a9b] text-[#0f4a9b] hover:text-white font-bold text-xs sm:text-sm border border-gray-200 transition-all duration-300"
              >
                <span>View Physics Tutors</span>
              </a>
            </div>

            {/* Chemistry Card */}
            <div className="bg-white rounded-3xl p-7 shadow-[0_12px_35px_rgba(15,74,155,0.06)] border border-gray-100 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center mb-5 shadow-md shadow-[#0f4a9b]/20">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-4">Chemistry Tutor Abu Dhabi</h3>
                
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Organic reaction mechanisms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Transition metal chemistry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Spectroscopy and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Rates, kinetics, equilibria</span>
                  </li>
                </ul>
              </div>

              <a
                href="/chemistry-tutor-abu-dhabi"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#0f4a9b] text-[#0f4a9b] hover:text-white font-bold text-xs sm:text-sm border border-gray-200 transition-all duration-300"
              >
                <span>View Chemistry Tutors</span>
              </a>
            </div>

            {/* Biology Card */}
            <div className="bg-white rounded-3xl p-7 shadow-[0_12px_35px_rgba(15,74,155,0.06)] border border-gray-100 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(15,74,155,0.12)] hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center mb-5 shadow-md shadow-[#0f4a9b]/20">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-4">Biology Tutor Abu Dhabi</h3>
                
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Biochemistry and enzymes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Genetics and inheritance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Ecology, evolution, populations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C7A24A] font-bold">•</span>
                    <span>Required practical questions</span>
                  </li>
                </ul>
              </div>

              <a
                href="/biology-tutor-abu-dhabi"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gray-50 hover:bg-[#0f4a9b] text-[#0f4a9b] hover:text-white font-bold text-xs sm:text-sm border border-gray-200 transition-all duration-300"
              >
                <span>View Biology Tutors</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── NEW SECTION 5: GRADE JUMP GALLERY ── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] text-xs font-bold mb-3">
            <TrendingUp className="h-3.5 w-3.5" /> Measured Student Progress
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
            Grade Jumps We've Seen
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Concrete grade movements achieved by students working through structured 1-on-1 coaching plans.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
            {[
              {
                from: "B",
                to: "A*",
                subject: "Chemistry",
                board: "Cambridge 9701",
              },
              {
                from: "C",
                to: "A",
                subject: "Pure Maths",
                board: "Edexcel 9MA0",
              },
              {
                from: "D",
                to: "B",
                subject: "Physics",
                board: "Oxford AQA 9630",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between text-center"
              >
                {/* Big Grade Movement Display */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-slate-400">
                    {card.from}
                  </span>

                  {/* SVG Animated Arrow */}
                  <svg className="w-6 h-6 text-[#0f4a9b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>

                  <span className="text-3xl sm:text-4xl font-black text-[#0f4a9b]">
                    {card.to}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-[#0a1f3d] mb-1">
                    {card.subject}
                  </h3>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                    {card.board}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-[11px] sm:text-xs text-gray-400 font-medium">
            Anonymised outcomes from the 2023–2025 A-Level cohorts. Results vary — every plan is built around the individual student.
          </p>
        </div>
      </section>

      {/* ── SECTION 6: SIGNS YOUR A-LEVEL STUDENT NEEDS SUPPORT (Parent-Diagnostic Section) ── */}
      <section className="py-14 sm:py-16 bg-[#f4f7fc] relative overflow-hidden">
        <GridBackground light />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              Signs Your A-Level Student Needs Support
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              Four moments Abu Dhabi parents notice before booking a first lesson.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {[
              {
                title: "Mock Grades Slipping",
                desc: "A grade lower than the school target for two consecutive mocks.",
                icon: <AlertTriangle className="w-5 h-5 text-[#0f4a9b]" />
              },
              {
                title: "Homework Avoidance",
                desc: "Set homework triggers stress instead of engagement each week.",
                icon: <FileText className="w-5 h-5 text-[#0f4a9b]" />
              },
              {
                title: "Late-Night Panic",
                desc: "Your child works late but covers fewer topics each week.",
                icon: <Clock className="w-5 h-5 text-[#0f4a9b]" />
              },
              {
                title: "Confidence Slip",
                desc: "A once-strong subject now feels disorganised and overwhelming.",
                icon: <TrendingUp className="w-5 h-5 text-[#0f4a9b]" />
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(15,74,155,0.12)' }}
                className="flex flex-col items-center text-center px-4 py-6 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.04)] cursor-default"
              >
                <div className="w-11 h-11 rounded-2xl bg-white border border-[#0f4a9b]/15 shadow-[0_4px_20px_rgba(15,74,155,0.15)] flex items-center justify-center mb-3">
                  {card.icon}
                </div>
                <h3 className="text-[15px] font-extrabold text-[#0a1f3d] leading-snug mb-1">{card.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Diagnostic Note */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-4 rounded-2xl bg-[#0f4a9b]/5 border border-[#0f4a9b]/15 text-[#0f4a9b] text-xs sm:text-sm font-semibold">
              ✦ If two or more signals ring true, the free first lesson is the fastest way to know if tutoring will help.
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 7: THE A-LEVEL HOMEWORK LIFELINE ON WHATSAPP (Minimal Clean Design) ── */}
      <section className="py-14 sm:py-16 bg-[#f8fafc] border-y border-slate-200/80 relative overflow-hidden">
        <GridBackground light />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#1da851] text-xs font-bold mb-4">
            <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
            <span>INSTANT WHATSAPP SUPPORT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 leading-tight max-w-3xl mx-auto">
            Send Your A-Level Question, Get a Worked Reply in 15 Minutes
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            Cambridge, Edexcel, Oxford AQA or OCR A-Level questions answered within 15 minutes.
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask your question to Ustaad on WhatsApp"
              className="inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>

          <p className="text-gray-500 text-xs font-medium">
            No sign-up. No credit card. Send a photo of the question.
          </p>

        </div>
      </section>

      {/* ── SECTION 8: WHAT PARENTS SAY (Full-Width Dark Navy Banner Matching Screenshot Reference) ── */}
      <section className="py-16 sm:py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #060f22 0%, #0a1f3d 50%, #0f4a9b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What <span style={{ color: '#f0c96a' }}>Parents Say</span>
            </h2>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-10 shadow-2xl relative text-left">
            <div className="text-6xl font-serif text-white/20 absolute top-3 left-6 select-none pointer-events-none">“</div>
            
            <p className="relative z-10 text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-8 pt-2">
              Our daughter was struggling with A-Level Chemistry mechanisms and physics past paper timing at BSAK in Abu Dhabi. Working online with Ustaad's board specialists turned her predicted B into an A* in Cambridge 9701, securing her offer for Medicine.
            </p>

            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-sm shadow-inner shrink-0">
                RH
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-white text-base leading-tight">Rashid H.</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Verified
                  </span>
                </div>
                <div className="text-blue-200/80 text-xs mt-0.5">Abu Dhabi, UAE · A-Level Parent</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 9: WHAT ABU DHABI PARENTS ASK BEFORE THEY BOOK (2-Column Accordion Matching Reference) ── */}
      <section className="py-14 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Header Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-xs font-bold mb-4">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0f4a9b]/10 text-[10px]">?</span>
                COMMON QUESTIONS
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-3">
                Parents <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Often Ask</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Honest answers to the A-Level questions Abu Dhabi parents ask before their first session.
              </p>
            </motion.div>

            {/* Right Accordion Column */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {FAQS.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                        style={{
                          width: 40, height: 40, minWidth: 40, minHeight: 40,
                          background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                          color: isOpen ? '#fff' : '#0f4a9b',
                          transition: 'background 300ms ease, color 300ms ease',
                          cursor: 'pointer', border: 'none', boxShadow: 'inset 0 0 0 2px #fff',
                        }}
                      >
                        ?
                      </button>

                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border bg-white shadow-sm"
                        style={{ minHeight: '52px', padding: '10px 16px', cursor: 'pointer', borderColor: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.12)' }}
                      >
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{f.q}</span>
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
                          <ChevronDown className="h-4 w-4" />
                        </span>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                          className="ml-[52px] overflow-hidden"
                        >
                          <div className="flex items-start gap-3 rounded-2xl border p-4.5 bg-[#f8fafc]" style={{ borderColor: 'rgba(15,74,155,0.15)', boxShadow: '0 4px 16px rgba(15,74,155,0.06)' }}>
                            <p className="flex-1 text-gray-600 text-[13.5px] leading-relaxed">{f.a}</p>
                            <span className="flex-shrink-0 flex items-center justify-center rounded-full" style={{ width: 32, height: 32, minWidth: 32, minHeight: 32, background: '#0f4a9b', color: '#fff' }}>
                              <MessageCircle className="h-4 w-4" />
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── NEW SECTION 6: ALSO FOR ABU DHABI FAMILIES (Internal Linking Grid) ── */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/10 text-[#0f4a9b] text-xs font-bold mb-3">
            <MapPin className="h-3.5 w-3.5" /> Abu Dhabi Coverage
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-8">
            Also for Abu Dhabi Families
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {[
              { title: "IGCSE Tutor Abu Dhabi", desc: "For Year 10 and 11 support ahead of Cambridge or Edexcel IGCSE.", href: "/igcse-tutor-abu-dhabi" },
              { title: "Physics Tutor Abu Dhabi", desc: "For mechanics, electricity, waves, and practical endorsed papers.", href: "/physics-tutor-abu-dhabi" },
              { title: "Chemistry Tutor Abu Dhabi", desc: "For organic mechanisms, kinetics, and paper 4 essay technique.", href: "/chemistry-tutor-abu-dhabi" },
              { title: "Maths Tutor Abu Dhabi", desc: "For calculus, mechanics, statistics, and Pure Maths at A-Level depth.", href: "/maths-tutor-abu-dhabi" },
              { title: "Biology Tutor Abu Dhabi", desc: "For biochemistry, genetics, physiology, and required practicals.", href: "/biology-tutor-abu-dhabi" },
            ].map((card, idx) => (
              <motion.a
                key={idx}
                href={card.href}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="group bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:bg-[#F0F9FF] hover:border-[#0f4a9b]/30 transition-all duration-300 flex items-center justify-between gap-3"
              >
                <div>
                  <div className="font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] text-base mb-1 transition-colors">
                    {card.title}
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: START YOUR A-LEVEL SUPPORT ── */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3">
              Start Your A-Level Support
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
              Two free ways to begin, both delivered live online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {/* Free First Lesson Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-7 shadow-[0_12px_35px_rgba(15,74,155,0.06)] border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0f4a9b]/10 flex items-center justify-center mb-5 border border-[#0f4a9b]/20 text-[#0f4a9b]">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] mb-2">Free First Lesson</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Thirty online minutes with a matched A-Level tutor, at no cost.
                </p>
              </div>

              <a
                href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-bold text-[14px] text-white transition-all hover:-translate-y-0.5 text-center"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 16px rgba(15,74,155,0.5)' }}
              >
                Book Your Free Trial
              </a>
            </motion.div>

            {/* WhatsApp Question Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-3xl p-7 shadow-[0_12px_35px_rgba(15,74,155,0.06)] border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-5 border border-[#25D366]/20 text-[#25D366]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] mb-2">WhatsApp a Question</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Send any past-paper question and get a reply in fifteen minutes.
                </p>
              </div>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask a question on WhatsApp"
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-[14px] flex items-center justify-center gap-2 shadow-md shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </motion.div>
          </div>

          <p className="text-center text-xs font-semibold text-gray-500 mb-14">
            First lesson free. Weekend, evening and Ramadan slots. UAE-registered since 2015.
          </p>

          {/* Related Pages Grid */}
          <div className="border-t border-gray-100 pt-10">
            <h3 className="text-center text-lg font-extrabold text-[#0a1f3d] mb-6">
              Related Pages
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <a href="/a-level" className="p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-[#0f4a9b]/30 shadow-xs transition-all">
                <div className="font-extrabold text-[#0f4a9b] text-sm mb-0.5">A-Level Hub (All Subjects)</div>
                <p className="text-xs text-gray-500">For board comparison, subject list and the full A-Level framework.</p>
              </a>

              <a href="/sciences" className="p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-[#0f4a9b]/30 shadow-xs transition-all">
                <div className="font-extrabold text-[#0f4a9b] text-sm mb-0.5">Main Science Page</div>
                <p className="text-xs text-gray-500">For topic breakdowns across biology, chemistry and physics.</p>
              </a>

              <a href="/maths-tutor-abu-dhabi" className="p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-[#0f4a9b]/30 shadow-xs transition-all">
                <div className="font-extrabold text-[#0f4a9b] text-sm mb-0.5">Maths Tutor Abu Dhabi</div>
                <p className="text-xs text-gray-500">For calculus, mechanics, statistics and pure maths at A-Level depth.</p>
              </a>

              <a href="/english" className="p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-[#0f4a9b]/30 shadow-xs transition-all">
                <div className="font-extrabold text-[#0f4a9b] text-sm mb-0.5">English Tutor Abu Dhabi</div>
                <p className="text-xs text-gray-500">For Literature essay writing and Language unseen extract technique.</p>
              </a>

              <a href="/igcse-tutor-abu-dhabi" className="p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-[#0f4a9b]/30 shadow-xs transition-all">
                <div className="font-extrabold text-[#0f4a9b] text-sm mb-0.5">IGCSE Tutor Abu Dhabi</div>
                <p className="text-xs text-gray-500">For Year 10 and Year 11 support ahead of Cambridge or Edexcel IGCSE.</p>
              </a>

              <a href="/gcse-tutor-abu-dhabi" className="p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-100 hover:border-[#0f4a9b]/30 shadow-xs transition-all">
                <div className="font-extrabold text-[#0f4a9b] text-sm mb-0.5">GCSE Tutor Abu Dhabi</div>
                <p className="text-xs text-gray-500">For AQA, OCR and Edexcel GCSE support in Years 10 and 11.</p>
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
