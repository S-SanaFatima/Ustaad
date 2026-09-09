import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  Calculator, MessageSquareQuote, List, ArrowRightLeft, FlaskConical, PenTool,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Star, MessageCircle, BookOpen, Video, Timer,
  MapPin, Atom, Dna, Briefcase, LineChart, ClipboardList, X, Users, ShieldCheck,
  Clock, TrendingUp, Target, ArrowRight, Laptop, Building2,
} from 'lucide-react';
import { Layout, StatsBar, SchoolsMarquee, FinalCTA, DUBAI_SCHOOL_LOGOS } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, reviewSchema } from './shared/schemas';

const PARENT_REVIEWS = [
  {
    initials: 'NM',
    name: 'Nadia M., Emirates Hills, Dubai',
    subject: 'Verified Google review · Cambridge IGCSE Mathematics (0580)',
    text: 'The online setup worked seamlessly for our son in Emirates Hills. His Cambridge Mathematics tutor analyzed past papers live and explained exactly where marks were lost. He improved from a grade 6 to a strong grade 8 on his final exams.',
  },
  {
    initials: 'ZA',
    name: 'Zain A., Jumeirah, Dubai',
    subject: 'Verified Google review · Edexcel IGCSE Physics (4PH1)',
    text: 'Our daughter kept losing marks on formula calculation questions even though she understood the concepts. Her Edexcel Physics tutor drilled formula rearranging and unit conversion until it became second nature. Her mock scores jumped two grades within one term.',
  },
  {
    initials: 'FH',
    name: 'Farah H., Arabian Ranches, Dubai',
    subject: 'Verified Google review · Cambridge IGCSE Biology (0610)',
    text: 'Six-mark extended response questions in Biology were a major hurdle. The tutor provided structured mark scheme frameworks and keywords for every unit. Her predicted grade rose from a 5 to a solid 8.',
  },
  {
    initials: 'RK',
    name: 'Rashid K., Dubai Hills, Dubai',
    subject: 'Verified Google review · Edexcel IGCSE Chemistry (4CH1)',
    text: 'Stoichiometry and mole calculations were creating frustration. Interactive problem-solving sessions and timed past paper practice turned things around quickly. He entered the final exams confident and achieved an 8.',
  },
];

const BOOKING = '/contact#form';
const WA_URL =
  'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20an%20IGCSE%20tutor%20in%20Dubai.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const IgcseGrid = ({ light = false }: { light?: boolean }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
    <defs>
      <pattern id={light ? 'igcse-dubai-grid-l' : 'igcse-dubai-grid-d'} width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M 44 0 L 0 0 0 44" fill="none" stroke={light ? 'rgba(15,74,155,0.06)' : 'rgba(255,255,255,0.05)'} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${light ? 'igcse-dubai-grid-l' : 'igcse-dubai-grid-d'})`} />
  </svg>
);

type Challenge = { icon: ReactNode; title: string; problem: string };

const CHALLENGES: Challenge[] = [
  { icon: <List className="w-5 h-5" />, title: 'Six-Mark Biology Answers', problem: 'Six-mark Biology questions demand exact examiner keywords rather than long descriptions.' },
  { icon: <ArrowRightLeft className="w-5 h-5" />, title: 'Formula Rearranging', problem: 'Physics marks are lost when equation substitution and unit conversions are not fluent.' },
  { icon: <Calculator className="w-5 h-5" />, title: 'Stoichiometry & Moles', problem: 'Chemistry mole calculations require clear multi-step workings to secure method marks.' },
  { icon: <MessageSquareQuote className="w-5 h-5" />, title: 'Literature Quote Analysis', problem: 'English essay responses stay thin without structured text quotes and contextual analysis.' },
  { icon: <FlaskConical className="w-5 h-5" />, title: 'Experimental Procedures', problem: 'Paper 6 and Paper 4 practical questions expect precise lab methods and graph interpretation.' },
  { icon: <PenTool className="w-5 h-5" />, title: 'Timed Paper Pacing', problem: 'Students run out of time on long-answer questions without disciplined paper timing practice.' },
];

const FAQS = [
  { q: 'What is the difference between Cambridge and Edexcel IGCSE in Dubai schools?', a: 'Cambridge (CIE) and Edexcel are the two main exam boards used by British schools in Dubai. While core concepts are similar, question formats, command words, and mark schemes differ. Our tutors specialize in the exact exam board your child is taking to maximize performance.' },
  { q: 'Is Year 10 too early to start private IGCSE tutoring in Dubai?', a: 'Starting in Year 10 allows students to build solid foundational understanding and prevent learning gaps before Year 11 mock exams. Early prep reduces stress and builds exam confidence over time.' },
  { q: 'Can your tutors stretch high-achieving students aiming for grade 8 or 9?', a: 'Yes. For high-achieving students, sessions focus on advanced problem-solving, tricky command words, and mark scheme precision that distinguishes grade 8 and 9 candidates.' },
  { q: 'My child understands the lessons but underperforms in timed exams. How do you help?', a: 'We bridge the gap between classroom understanding and exam execution. Tutors conduct timed past paper practice, teach time allocation strategies, and train students on examiner mark schemes.' },
  { q: 'Do you provide online IGCSE tutoring across all Dubai communities?', a: 'Yes. Our live 1-to-1 online tutoring platform serves families in Emirates Hills, Jumeirah, Arabian Ranches, Dubai Hills, Downtown Dubai, Palm Jumeirah, Dubai Marina, and across the UAE.' },
  { q: 'How are lessons structured for maximum engagement?', a: 'Each 1-to-1 session includes live interactive whiteboards, past paper question walkthroughs, immediate feedback, and recorded session access for post-lesson revision.' },
  { q: 'How quickly can we get matched with a specialized IGCSE tutor?', a: 'After you submit your requirements, our academic advisory team reviews your child school, subject, and exam board to introduce a matched tutor within 15 minutes during working hours.' },
];

function ReviewsScroller() {
  const n = PARENT_REVIEWS.length;
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % n), 5500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (idx: number) => {
    setActive(((idx % n) + n) % n);
    startTimer();
  };

  const prevIdx = (active - 1 + n) % n;
  const nextIdx = (active + 1) % n;

  const SideCard = ({ idx }: { idx: number }) => (
    <button
      type="button"
      onClick={() => go(idx)}
      className="hidden md:block w-[22%] shrink-0 text-left opacity-40 hover:opacity-70 transition duration-300"
      aria-label={`Show review by ${PARENT_REVIEWS[idx].name}`}
    >
      <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden h-full">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />
        <div className="flex gap-0.5 mb-2">
          {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-3 w-3 fill-[#C7A24A] text-[#C7A24A]" />)}
        </div>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">&ldquo;{PARENT_REVIEWS[idx].text}&rdquo;</p>
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-[10px] notranslate shrink-0" translate="no">
            {PARENT_REVIEWS[idx].initials}
          </div>
          <span className="font-bold text-[#0a1f3d] text-xs notranslate truncate" translate="no">{PARENT_REVIEWS[idx].name.split(',')[0]}</span>
        </div>
      </div>
    </button>
  );

  const r = PARENT_REVIEWS[active];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-stretch gap-3 lg:gap-4">
        <SideCard idx={prevIdx} />

        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_8px_32px_rgba(15,74,155,0.10)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((j) => <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f4a9b]/70 bg-[#0f4a9b]/6 px-2.5 py-1 rounded-full">Google · Verified</span>
              </div>
              <p className="text-[#374151] text-[15px] sm:text-base leading-relaxed mb-5">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate shrink-0" translate="no">
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-extrabold text-[#0a1f3d] text-sm notranslate truncate" translate="no">{r.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5 truncate">{r.subject.replace('Verified Google review · ', '')}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <SideCard idx={nextIdx} />
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          type="button"
          onClick={() => go(active - 1)}
          aria-label="Previous review"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5">
          {PARENT_REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(active + 1)}
          aria-label="Next review"
          className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function IgcseTutorDubaiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const serviceNode = {
    ...serviceSchema('IGCSE Tutoring Dubai', 'Expert online IGCSE tutors in Dubai. Cambridge and Edexcel specialists. Private 1-to-1 live lessons and free trial.', '/igcse-tutor-dubai'),
    areaServed: { '@type': 'City', name: 'Dubai' },
  };

  return (
    <Layout>
      <SEOHead
        title="IGCSE Tutor Dubai | Cambridge & Edexcel Specialists | Ustaad"
        description="Expert online IGCSE tutors in Dubai for Cambridge and Edexcel. Private 1-to-1 tutoring for Mathematics, Sciences, English and Business. Book a free trial today."
        canonical="/igcse-tutor-dubai"
        ogImage="/UpdatedImages/private-subject-tutoring-igcse-ib-a-level-uae.webp"
        placename="Dubai, UAE"
        schema={[
          cityLocalBusinessSchema({
            city: 'Dubai',
            url: '/igcse-tutor-dubai',
            name: 'Ustaad, IGCSE Tutor Dubai',
            description: 'Expert online IGCSE tutors in Dubai. Cambridge and Edexcel specialists. Private 1-to-1 lessons, recorded sessions, and free trial.',
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'IGCSE', url: '/igcse' },
            { name: 'IGCSE Tutor Dubai', url: '/igcse-tutor-dubai' },
          ]),
          serviceNode,
          faqSchema(FAQS),
          reviewSchema('Ustaad, Online IGCSE Tutor Dubai', PARENT_REVIEWS.map((r) => ({
            author: r.name.split(',')[0].trim(),
            reviewBody: r.text,
            ratingValue: 5,
          }))),
        ]}
      />

      {/* ── HERO ── */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          
          {/* Desktop SVG graphics positioned cleanly at margins */}
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full hidden md:block" aria-hidden="true">
            <defs>
              <linearGradient id="igcseDubaiGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="igcseDubaiHexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a" />
                <stop offset="100%" stopColor="#C7A24A" />
              </linearGradient>
              <radialGradient id="igcseDubaiHexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
              </radialGradient>
              <filter id="igcsePglow"><feGaussianBlur stdDeviation="3" /></filter>
              <marker id="igcseArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="rgba(95,211,230,0.8)" />
              </marker>
            </defs>
            {(() => {
              const dots: ReactNode[] = [];
              for (let x = 40; x < 1400; x += 55)
                for (let y = 30; y < 600; y += 55)
                  dots.push(<circle key={`d${x}${y}`} cx={x} cy={y} r="1" fill="rgba(255,255,255,0.03)" />);
              return dots;
            })()}

            {/* Left growth trajectory line & label */}
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#igcseDubaiGrad)" strokeWidth="3" filter="url(#igcsePglow)" />
            <path d="M 40 480 Q 200 460 360 140" fill="none" stroke="url(#igcseDubaiGrad)" strokeWidth="1.5" markerEnd="url(#igcseArrow)" />
            <line x1="30" y1="480" x2="380" y2="480" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="40" y1="490" x2="40" y2="100" stroke="rgba(95,211,230,0.15)" strokeWidth="1" strokeDasharray="6 6" />
            <text x="350" y="115" fill="rgba(95,211,230,0.85)" fontSize="13" fontFamily="monospace" fontWeight="bold">Target: Grade 8/9</text>
            <text x="350" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Final Exams</text>
            <text x="45" y="500" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">Baseline</text>

            {/* Right IGCSE Hexagon badge — pushed to far right X=1280 */}
            {(() => {
              const HX = 1270;
              const HY = 240;
              const SIZE = 80;
              const pts = [];
              for (let i = 0; i < 6; i++) {
                const angle_rad = (Math.PI / 180) * (60 * i - 30);
                pts.push(`${HX + SIZE * Math.cos(angle_rad)},${HY + SIZE * Math.sin(angle_rad)}`);
              }
              return (
              <>
                <circle cx={HX} cy={HY} r={SIZE * 1.5} fill="url(#igcseDubaiHexGlow)" />
                <polygon points={pts.join(' ')} fill="none" stroke="url(#igcseDubaiHexGrad)" strokeWidth="2" filter="url(#igcsePglow)" />
                <polygon points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx={HX} cy={HY} r="25" fill="rgba(240,201,106,0.1)" stroke="#f0c96a" strokeWidth="1.5" />
                <text x={HX} y={HY + 5} textAnchor="middle" fill="#f0c96a" fontSize="15" fontWeight="900" fontFamily="sans-serif">IGCSE</text>
                <text x={HX - 100} y={HY - 65} fill="rgba(95,211,230,0.7)" fontSize="11" fontFamily="monospace">CIE 0580</text>
                <text x={HX + 45} y={HY - 75} fill="rgba(180,180,255,0.7)" fontSize="11" fontFamily="monospace">CIE 0625</text>
                <text x={HX + 60} y={HY + 75} fill="rgba(240,201,106,0.7)" fontSize="11" fontFamily="monospace">Edexcel 4MA1</text>
              </>
              );
            })()}
          </svg>

          {/* Clean ambient background glowing accents on mobile */}
          <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#0f4a9b]/25 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-0 w-[200px] h-[200px] bg-[#C7A24A]/15 rounded-full blur-[80px]" />
          </div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-20 md:pb-14 max-w-5xl w-full">

          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-3" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#f0c96a' }} />
            <span className="text-blue-100/90 text-[11px] sm:text-[12px] font-semibold tracking-wide">ONLINE IGCSE TUITION · DUBAI</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }} className="font-extrabold tracking-tight text-white leading-[1.08] mb-3 md:mb-5 text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] max-w-[95%] sm:max-w-none">
            IGCSE Tutors in Dubai{' '}
            <span className="block sm:inline" style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Who Elevate Grades</span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} className="text-blue-100/80 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-2xl mb-6 md:mb-8 px-2 italic">
            One-to-one tutoring with Cambridge and Edexcel specialists. First lesson free.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } } }} className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none px-4">
            <div className="sm:hidden w-full flex flex-col items-center gap-3">
              <a
                href={BOOKING}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[15px] text-white transition-all hover:-translate-y-0.5 text-center active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 6px 20px rgba(15,74,155,0.45)' }}
              >
                Book Your Free Trial
              </a>
              <span className="text-blue-200/60 text-[11px]">✦ No Commitment · Cancel Anytime</span>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-[15px] text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20 active:scale-[0.98]">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
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
                <p className="text-blue-200/50 text-[11px]">✦ No Commitment · Cancel Anytime</p>
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

      {/* ── SCHOOL LOGOS MARQUEE ── */}
      <SchoolsMarquee
        title="Trusted by IGCSE Students Across Leading Dubai Schools"
        logoList={DUBAI_SCHOOL_LOGOS}
      />

      {/* ── STATS BAR ── */}
      <section className="py-8 bg-white">
        <StatsBar customText="Empowering IGCSE Students Across Dubai to Reach Grade 8 & 9" />
      </section>

      {/* ── PARENT REVIEWS CAROUSEL ── */}
      <section className="py-14 lg:py-20 bg-slate-50 relative overflow-hidden">
        <IgcseGrid light />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
              Verified Parent Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mt-3">
              What Dubai Parents Say About Ustaad IGCSE Tutoring
            </h2>
          </div>
          <ReviewsScroller />
        </div>
      </section>

      {/* ── COMMON IGCSE CHALLENGES ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
              Targeted Exam Repair
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mt-3">
              Common IGCSE Exam Hurdles We Fix
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
              IGCSE exam boards test exam technique as much as subject knowledge. Our tutors address exact mark loss areas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CHALLENGES.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-md hover:border-[#0f4a9b]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center mb-4">
                    {c.icon}
                  </div>
                  <h3 className="font-extrabold text-[#0a1f3d] text-base mb-2">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{c.problem}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE IGCSE SUBJECTS ── */}
      <section className="py-14 lg:py-20 bg-slate-900 text-white relative overflow-hidden">
        <IgcseGrid />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#f0c96a] text-xs font-extrabold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Specialized Tutoring
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-3">
              IGCSE Subjects We Cover in Dubai
            </h2>
            <p className="text-blue-100/70 text-sm sm:text-base max-w-2xl mx-auto mt-2">
              Expert 1-to-1 support across Cambridge (CIE) and Pearson Edexcel specifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'IGCSE Mathematics',
                icon: <Calculator className="w-6 h-6 text-[#f0c96a]" />,
                desc: 'Cambridge 0580 Extended & Edexcel 4MA1. Algebra, trigonometry, vectors, coordinate geometry, and past paper mark scheme mastery.',
              },
              {
                title: 'IGCSE Physics',
                icon: <Atom className="w-6 h-6 text-[#f0c96a]" />,
                desc: 'Cambridge 0625 & Edexcel 4PH1. Energy, electricity, forces, waves, and structured equation substitution training.',
              },
              {
                title: 'IGCSE Chemistry',
                icon: <FlaskConical className="w-6 h-6 text-[#f0c96a]" />,
                desc: 'Cambridge 0620 & Edexcel 4CH1. Stoichiometry, organic chemistry, electrolysis, atomic structure, and paper 6 practical methods.',
              },
              {
                title: 'IGCSE Biology',
                icon: <Dna className="w-6 h-6 text-[#f0c96a]" />,
                desc: 'Cambridge 0610 & Edexcel 4BI1. Genetics, ecology, enzymes, transport in plants, and 6-mark structured examiner keywords.',
              },
              {
                title: 'IGCSE Business & Economics',
                icon: <Briefcase className="w-6 h-6 text-[#f0c96a]" />,
                desc: 'Cambridge 0450/0455 & Edexcel 4BS1/4EC1. Case study analysis, financial ratios, market structures, and 9-mark evaluation techniques.',
              },
              {
                title: 'IGCSE English Language & Literature',
                icon: <BookOpen className="w-6 h-6 text-[#f0c96a]" />,
                desc: 'Cambridge 0500/0475 & Edexcel 4EA1/4ET1. Directed writing, text response essays, language analysis, and quotation recall frameworks.',
              },
            ].map((sub, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  {sub.icon}
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">{sub.title}</h3>
                <p className="text-xs sm:text-sm text-blue-100/70 leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAM BOARDS BREAKDOWN ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
              Exam Board Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mt-3">
              Cambridge (CIE) & Pearson Edexcel IGCSE Preparation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2">
              Every lesson uses past papers, mark schemes, and command word guides specific to your child exam board.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
              <div className="inline-block px-3 py-1 bg-[#0f4a9b] text-white text-xs font-extrabold rounded-md mb-4">
                CAMBRIDGE (CIE) IGCSE
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-3">Core & Extended Paper Mastery</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Cambridge IGCSE exams emphasize technical accuracy, core vs extended tier differentiation, and alternative to practical paper 6 methods.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                  <span>Mathematics 0580 (Core & Extended)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                  <span>Sciences 0625 / 0620 / 0610 (Paper 2, 4 & 6)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                  <span>English First Language 0500 & Literature 0475</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200">
              <div className="inline-block px-3 py-1 bg-[#C7A24A] text-[#0a1f3d] text-xs font-extrabold rounded-md mb-4">
                PEARSON EDEXCEL IGCSE
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-3">Specification A & B Preparation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Edexcel IGCSE exams place strong weight on structured multi-step calculations, case study application, and clear 6 to 9-mark extended answers.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A24A] shrink-0" />
                  <span>Mathematics 4MA1 (Higher & Foundation)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A24A] shrink-0" />
                  <span>Double & Triple Sciences 4PH1 / 4CH1 / 4BI1</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C7A24A] shrink-0" />
                  <span>Business 4BS1 & Economics 4EC1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW ONLINE TUTORING WORKS ── */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
              Interactive Learning Platform
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mt-3">
              How Online IGCSE Tutoring Works for Dubai Students
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0f4a9b] flex items-center justify-center mb-4 font-extrabold text-lg">
                1
              </div>
              <h3 className="font-extrabold text-[#0a1f3d] text-lg mb-2">Diagnostic Assessment</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We review your child school, target grades, and current weak areas to pair them with a specialist tutor who knows their exact exam board.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C7A24A] flex items-center justify-center mb-4 font-extrabold text-lg">
                2
              </div>
              <h3 className="font-extrabold text-[#0a1f3d] text-lg mb-2">Live 1-to-1 Interactive Sessions</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Lessons feature real-time digital whiteboards, live past paper solving, immediate feedback, and session recordings for easy exam revision.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 font-extrabold text-lg">
                3
              </div>
              <h3 className="font-extrabold text-[#0a1f3d] text-lg mb-2">Continuous Progress Tracking</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Parents receive regular progress updates after lessons and mock assessments, keeping learning on track for grade 8 and 9 outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS SECTION ── */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest bg-[#0f4a9b]/8 px-3 py-1 rounded-full border border-[#0f4a9b]/15">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mt-3">
              Questions About IGCSE Tutoring in Dubai
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-[#0a1f3d] flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#0f4a9b] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-white border-t border-slate-100"
                      >
                        <div className="p-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
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

      {/* ── FINAL CALL TO ACTION ── */}
      <FinalCTA
        title="Start Your Child IGCSE Success Journey Today"
        subtitle="Book a free 30-minute trial session with a Dubai specialist IGCSE tutor."
        button1Text="Book Your Free Trial"
        button1Href={BOOKING}
      />

      {/* ── REDESIGNED UAE ASSISTANCE & SEO TRUST SECTION ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-slate-100/70 border-t border-gray-200/70 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#0f4a9b]/5 via-[#C7A24A]/5 to-[#0a3a79]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/10 text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[#0f4a9b]/20">
              <Building2 className="w-3.5 h-3.5" />
              <span>UAE Academic Assistance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              Fast, Friendly Assistance for Dubai Families
            </h2>
            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/80 shadow-sm text-left sm:text-center">
              <p>
                Our academic advisory team is available Sunday through Saturday to assist parents and students across Dubai (Emirates Hills, Jumeirah, Arabian Ranches, Dubai Hills, Downtown, Palm Jumeirah) and all UAE emirates. Whether you have questions regarding Cambridge 0580/0625/0620 or Edexcel 4MA1/4PH1/4CH1 tutor availability, lesson schedules, or exam preparation, we respond quickly to ensure your child receives timely support.
              </p>
              <p className="pt-2 font-medium text-[#0f4a9b]">
                For urgent matching requests or immediate lesson bookings, contact us directly on WhatsApp for real-time guidance from our UAE tutoring coordinators.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0f4a9b] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-[#0a1f3d] text-base mb-2">
                  Trusted by 2,500+ Families Across Dubai & UAE
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our dedicated tutoring team supports students in British (IGCSE, GCSE, A-Level), IB (MYP, DP), and American (AP, SAT) curricula. All inquiries receive a response within 15 minutes during working hours.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#C7A24A] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-[#0a1f3d] text-base mb-2">
                  Comprehensive Private Tutoring Across Dubai Communities
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our online tutoring platform connects students in Downtown Dubai, Dubai Marina, Jumeirah, Arabian Ranches, Emirates Hills, and Palm Jumeirah with specialist educators. Book your 30-minute free trial session today to get started.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-[#0a1f3d] text-base mb-2">
                  Tailored Academic Tutoring
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Whether you require short-term exam prep, intensive mock revision, or weekly academic tutoring, Ustaad pairs your child with top-rated private tutors across all Dubai communities.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        <div className="text-center text-xs font-semibold text-gray-500 py-3.5 bg-slate-100 border-t border-gray-200 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
          <span>Friendly Academic Consultation Guaranteed · Response within 15 mins during UAE office hours.</span>
        </div>
      </section>

    </Layout>
  );
}
