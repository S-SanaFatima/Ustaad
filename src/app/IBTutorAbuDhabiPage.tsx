import { useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'motion/react';
import {
  CheckCircle, ChevronDown, Clock, MapPin,
  MessageCircle, Star, Target, Users, ArrowRight,
  Calculator, BookOpen, Compass, Layers, CheckCircle2, GraduationCap,
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

const SIGNALS = [
  {
    title: "The Slipping Prediction",
    shortTitle: "Slipping Grade",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>,
    largeIcon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>,
    desc: "Predicted grades slip below the target on two straight reports."
  },
  {
    title: "Long Nights, Little Progress",
    shortTitle: "Long Nights",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    largeIcon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    desc: "Hours at the desk, yet the topic list syllabus content barely shrinks."
  },
  {
    title: "Coursework Left Late",
    shortTitle: "Late Coursework",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    largeIcon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    desc: "TOK and Extended Essay tasks keep sliding down the checklist as mock exams cluster."
  },
  {
    title: "Gone Quiet About It",
    shortTitle: "Quiet Student",
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>,
    largeIcon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>,
    desc: "A once-strong subject that never comes up in dinner conversations anymore."
  }
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


function TiltCard({ children, className, style, delay, ...props }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: '0 30px 60px -15px rgba(15, 74, 155, 0.12), 0 15px 30px -10px rgba(15, 74, 155, 0.08)'
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        ...style
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default function IBTutorAbuDhabiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [activeOrigamiIndex, setActiveOrigamiIndex] = useState<number | null>(0);

  return (
    <Layout>
      <SEOHead
        title="IB Tutor Abu Dhabi | Online MYP, SL & HL Tuition"
        description="Private online IB tutoring for Abu Dhabi families. Subject-matched MYP, SL and HL tutors, flexible weekly slots and between-session help. First session free."
        canonical="/ib-tutor-abu-dhabi"
        schema={[
          cityLocalBusinessSchema('Abu Dhabi', 'IB Tutoring'),
          breadcrumbSchema([
            { name: 'Home', url: 'https://ustaad.ae' },
            { name: 'IB Curriculum', url: 'https://ustaad.ae/ib-curriculum' },
            { name: 'IB Tutor Abu Dhabi', url: 'https://ustaad.ae/ib-tutor-abu-dhabi' }
          ]),
          serviceSchema('Online IB Tutoring', 'Expert MYP and Diploma tutoring for Abu Dhabi students.'),
          faqSchema(FAQS),
          reviewSchema('Ustaad - Online IB Tutor Abu Dhabi', [
            {
              author: 'Fatima A.',
              reviewBody: "The sessions transformed how my daughter approached HL Chemistry. Her tutor guided her through the Internal Assessment perfectly, and her predicted points jumped from a 4 to a 6 just in time for university applications.",
              ratingValue: 5
            }
          ])
        ]}
      />

      {/* HERO SECTION */}
      <section className="relative -mt-16 overflow-hidden bg-[#060f22] flex flex-col items-center justify-center md:min-h-[75vh]">
        {/* Background SVG decorative canvas on desktop */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 md:opacity-100">
          <svg viewBox="0 0 1400 600" preserveAspectRatio="xMaxYMid slice" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <defs>
              <linearGradient id="ibGrowthGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#5fd3e6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#5fd3e6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#22b8cd" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="ibHexGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f0c96a" />
                <stop offset="100%" stopColor="#C7A24A" />
              </linearGradient>
              <radialGradient id="ibHexGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f0c96a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#060f22" stopOpacity="0" />
              </radialGradient>
              <filter id="ibglow"><feGaussianBlur stdDeviation="3" /></filter>
              <marker id="ibarrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
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
              out.push(<path key="curve" d="M 30 500 Q 140 500 240 80" fill="none" stroke="url(#ibGrowthGrad)" strokeWidth="3" filter="url(#ibglow)" />);
              out.push(<path key="curve2" d="M 30 500 Q 140 500 240 80" fill="none" stroke="url(#ibGrowthGrad)" strokeWidth="1.5" markerEnd="url(#ibarrow)" />);
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
              out.push(<circle key="hexglow" cx={HX} cy={HY} r={SIZE * 1.5} fill="url(#ibHexGlow)" />);
              out.push(<polygon key="hex1" points={pts.join(' ')} fill="none" stroke="url(#ibHexGrad)" strokeWidth="2" filter="url(#ibglow)" />);
              out.push(<polygon key="hex2" points={pts.join(' ')} fill="none" stroke="rgba(240,201,106,0.5)" strokeWidth="1" strokeDasharray="4 4" />);
              for (let i = 0; i < 3; i++) {
                out.push(<line key={`cross${i}`} x1={HX + SIZE * Math.cos(((60 * i - 30) * Math.PI) / 180)} y1={HY + SIZE * Math.sin(((60 * i - 30) * Math.PI) / 180)} x2={HX + SIZE * Math.cos(((60 * (i + 3) - 30) * Math.PI) / 180)} y2={HY + SIZE * Math.sin(((60 * (i + 3) - 30) * Math.PI) / 180)} stroke="rgba(240,201,106,0.15)" strokeWidth="1" />);
              }
              out.push(<circle key="center" cx={HX} cy={HY} r="24" fill="rgba(240,201,106,0.1)" stroke="#f0c96a" strokeWidth="1.5" />);
              out.push(<text key="alevel" x={HX} y={HY + 4} textAnchor="middle" fill="#f0c96a" fontSize="13" fontWeight="900" fontFamily="sans-serif">IB</text>);
              out.push(<text key="t1" x={HX - 110} y={HY - 50} fill="rgba(95,211,230,0.7)" fontSize="11" fontFamily="monospace">IB Math AA</text>);
              out.push(<text key="t2" x={HX + 65} y={HY - 65} fill="rgba(180,180,255,0.7)" fontSize="11" fontFamily="monospace">IB Math AI</text>);
              out.push(<text key="t3" x={HX + 75} y={HY + 60} fill="rgba(240,201,106,0.7)" fontSize="11" fontFamily="monospace">IB Physics HL</text>);
              out.push(<text key="t4" x={HX - 110} y={HY + 75} fill="rgba(95,211,230,0.6)" fontSize="11" fontFamily="monospace">IB Chemistry SL</text>);
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
            Online IB Tutor Abu Dhabi,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built for Offers
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.05rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4 italic font-medium"
          >
            Live online IB tutors matched to MYP, SL or HL.
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
              <span className="text-blue-200/50 text-[11px]">✦ No Commitment · Cancel Anytime</span>
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
      <section className="py-20 bg-[#f8fafc] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0f4a9b]/5 rounded-full blur-[100px] pointer-events-none -mt-48 -mr-48" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C7A24A]/5 rounded-full blur-[100px] pointer-events-none -mb-48 -ml-48" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">How Your Child's IB Hour Is Spent</h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                A look at the sixty minutes, from shared screen to next steps.
              </p>
            </motion.div>
          </div>
          
          {/* 3D Carousel Container */}
          <div className="relative h-[480px] w-full max-w-5xl mx-auto flex flex-col items-center justify-center overflow-hidden">
            {/* Carousel track */}
            <div className="relative w-full h-[360px] flex items-center justify-center" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
              {(() => {
                const cards = [
                  { icon: <Video className="w-8 h-8 text-[#0f4a9b]" />, title: 'One Shared Screen', desc: 'Tutor and student work the same live document together, in real time.' },
                  { icon: <FileText className="w-8 h-8 text-[#0f4a9b]" />, title: 'Drafts Reviewed First', desc: 'Current coursework drafts get feedback before any new content is taught.' },
                  { icon: <Target className="w-8 h-8 text-[#0f4a9b]" />, title: 'Target on Record', desc: 'Every session opens with the university course and points target visible.' },
                  { icon: <Calendar className="w-8 h-8 text-[#0f4a9b]" />, title: 'The Week Mapped', desc: 'We agree exactly what your child studies before the next session.' },
                  { icon: <PenTool className="w-8 h-8 text-[#0f4a9b]" />, title: 'Answers, Not Notes', desc: 'Time goes into writing full answers, not copying tidy revision notes.' },
                  { icon: <CheckCircle className="w-8 h-8 text-[#0f4a9b]" />, title: 'Written Next Steps', desc: 'Each hour ends with two or three clear actions to complete.' }
                ];
                
                return cards.map((card, i) => {
                  let offset = i - activeCarouselIndex;
                  if (offset < -3) offset += 6;
                  if (offset > 3) offset -= 6;
                  
                  const isActive = offset === 0;
                  const isVisible = Math.abs(offset) <= 2; // only show current, prev, next, and outer edges
                  
                  return (
                    <motion.div
                      key={i}
                      initial={false}
                      animate={{
                        x: offset * 280,
                        scale: isActive ? 1 : 0.82,
                        rotateY: offset * -35,
                        z: isActive ? 0 : -180,
                        opacity: isVisible ? (isActive ? 1 : 0.6) : 0,
                        zIndex: 10 - Math.abs(offset)
                      }}
                      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                      onClick={() => setActiveCarouselIndex(i)}
                      className={`absolute w-[280px] sm:w-[320px] bg-white rounded-[24px] p-8 border border-slate-100/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] cursor-pointer select-none transform-gpu flex flex-col items-center text-center backface-hidden ${isActive ? 'shadow-[0_20px_50px_-10px_rgba(15,74,155,0.15)]' : ''}`}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0f4a9b]/[0.02] via-transparent to-transparent rounded-[24px] pointer-events-none" />
                      
                      <div className="w-16 h-16 rounded-2xl bg-[#0f4a9b]/5 flex items-center justify-center mb-6" style={{ transform: 'translateZ(30px)' }}>
                        {card.icon}
                      </div>
                      
                      <h3 className="text-[20px] font-bold text-[#0a1f3d] antialiased [backface-visibility:hidden] [-webkit-font-smoothing:antialiased] mb-3" >
                        {card.title}
                      </h3>
                      
                      <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed antialiased [backface-visibility:hidden] [-webkit-font-smoothing:antialiased]" >
                        {card.desc}
                      </p>
                      
                      {isActive && (
                        <div className="absolute inset-x-8 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent rounded-full" />
                      )}
                    </motion.div>
                  );
                });
              })()}
            </div>
            
            {/* Navigation buttons */}
            <div className="flex items-center gap-6 mt-4">
              <button 
                onClick={() => setActiveCarouselIndex(prev => (prev === 0 ? 5 : prev - 1))}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#0f4a9b] hover:border-[#0f4a9b] hover:shadow-md active:scale-95 transition-all"
                aria-label="Previous step"
              >
                <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              
              {/* Indicators */}
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4, 5].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCarouselIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeCarouselIndex ? 'w-6 bg-[#0f4a9b]' : 'w-2.5 bg-slate-200'}`}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => setActiveCarouselIndex(prev => (prev === 5 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-[#0f4a9b] hover:border-[#0f4a9b] hover:shadow-md active:scale-95 transition-all"
                aria-label="Next step"
              >
                <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
            {/* 2 WHERE THE JUMP TO DIPLOMA BITES */}
      <section className="py-20 bg-slate-50/50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <GridBackground light />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gradient from-[#0f4a9b]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">Where the Jump to Diploma Bites</h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">
                The habits the Diploma assumes but classrooms rarely slow down for.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto md:pb-6" style={{ perspective: '1200px' }}>
            {[
              { 
                icon: <Calculator className="w-6 h-6 text-white" />, 
                title: 'Full Working', 
                desc: 'Maths answers written line by line, the way examiners award marks.',
                delay: 0.1
              },
              { 
                icon: <BookOpen className="w-6 h-6 text-white" />, 
                title: 'Exam Wording', 
                desc: 'Subject terms used the exact way IB question papers expect them.',
                delay: 0.2
              },
              { 
                icon: <Compass className="w-6 h-6 text-white" />, 
                title: 'Step-By-Step Answers', 
                desc: 'Economics and Psychology answers explained step by step, not scattered points.',
                delay: 0.3
              },
              { 
                icon: <Timer className="w-6 h-6 text-white" />, 
                title: 'Working to Time', 
                desc: 'Long answers practised against the clock before the real paper.',
                delay: 0.4
              },
              { 
                icon: <Layers className="w-6 h-6 text-white" />, 
                title: 'Neat Data', 
                desc: 'Science results written up with the right units and sensible rounding.',
                delay: 0.5
              },
              { 
                icon: <CheckCircle2 className="w-6 h-6 text-white" />, 
                title: 'Answering What Is Asked', 
                desc: 'Describe, explain and compare done exactly as the question asks.',
                delay: 0.6
              }
            ].map((card, i) => {
              // Stagger every second card down on desktop to break alignment
              const staggerClass = i % 2 === 1 ? 'md:translate-y-4' : '';
              
              return (
                <TiltCard
                  key={i}
                  delay={card.delay}
                  className={`bg-white rounded-[24px] p-8 border border-slate-100/80 shadow-[0_2px_4px_rgba(0,0,0,0.01),0_20px_40px_rgba(15,74,155,0.03)] relative group cursor-default transform-gpu ${staggerClass}`}
                >
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f4a9b]/[0.02] via-transparent to-transparent rounded-[24px] pointer-events-none" />
                  
                  {/* 3D Floating Icon Container */}
                  <div className="relative mb-6 flex items-center justify-center w-14 h-14" style={{ transform: 'translateZ(35px)' }}>
                    {/* Shadow puddle */}
                    <div className="absolute -bottom-1 w-10 h-2 bg-black/10 rounded-full blur-[3px] group-hover:scale-110 group-hover:opacity-75 transition-all duration-300" />
                    
                    {/* Icon wrapper with gradient + inner shadow */}
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0f4a9b] to-[#1e5bb3] text-white flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform duration-300">
                      {card.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-[20px] font-bold text-[#0a1f3d] antialiased [backface-visibility:hidden] [-webkit-font-smoothing:antialiased] mb-3 group-hover:text-[#0f4a9b] transition-colors" >
                    {card.title}
                  </h3>
                  
                  <p className="text-[14px] sm:text-[15px] text-slate-600 leading-relaxed antialiased [backface-visibility:hidden] [-webkit-font-smoothing:antialiased]" >
                    {card.desc}
                  </p>
                  
                  {/* Glowing hover line indicator */}
                  <div className="absolute inset-x-8 bottom-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>
      
            {/* 3 WHAT YOU KEEP AFTER THE FREE SESSION */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">What You Keep After the Free Session</h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed italic">Four things that stay with you, whether or not you continue.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { num: '01', title: 'Honest Starting Point', desc: 'A frank read on where your child actually sits today.' },
              { num: '02', title: 'A Two-Year Route', desc: 'The path from today to final exams sketched, not guessed.' },
              { num: '03', title: 'The Gap in Numbers', desc: 'The distance between current marks and the target, written plainly.' },
              { num: '04', title: 'A Slot Held', desc: 'A weekly Abu Dhabi time reserved, should you choose to continue.' }
            ].map((item, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-slate-100 hover:border-[#0f4a9b] transition-colors duration-300">
                <span className="block text-4xl font-light text-[#C7A24A] mb-3 select-none">{item.num}</span>
                <h3 className="font-bold text-[#0a1f3d] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
            <a href="/maths-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Maths Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• AA and AI routes</li>
                <li>• Non-calculator and calculator papers</li>
                <li>• The maths exploration</li>
                <li>• Technique for SL and HL</li>
              </ul>
            </a>
            <a href="/biology-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Biology Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• SL and HL syllabus</li>
                <li>• Applying concepts to data</li>
                <li>• The scientific investigation</li>
                <li>• Extended response questions</li>
              </ul>
            </a>
            <a href="/physics-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Physics Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• SL and HL content</li>
                <li>• Data and practical questions</li>
                <li>• The scientific investigation</li>
                <li>• Extended written answers</li>
              </ul>
            </a>
            <a href="/english" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB English Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• English A and English B</li>
                <li>• Spoken-assessment coaching</li>
                <li>• Paper 1 unseen analysis</li>
                <li>• Higher-level essay writing</li>
              </ul>
            </a>
            <a href="/chemistry-tutor-abu-dhabi" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
              <h3 className="text-xl font-extrabold text-[#14304D] mb-4">IB Chemistry Tutor</h3>
              <ul className="space-y-2 text-sm text-[#46535E]">
                <li>• SL and HL depth</li>
                <li>• Reactivity and analysis questions</li>
                <li>• The scientific investigation</li>
                <li>• Structured calculation papers</li>
              </ul>
            </a>
            <a href="/economics" className="bg-[#f8fafc] rounded-3xl p-7 border border-[#E6EBEE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
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
      <section className="py-20 bg-slate-50/50 relative overflow-hidden">
        <GridBackground light />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0f4a9b]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">When Abu Dhabi Parents Tend to Call</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">Four everyday signals families notice before that first phone call.</p>
          </div>

          {/* 3D Origami Folding Stack */}
          <div className="flex flex-col gap-4 max-w-2xl mx-auto" style={{ perspective: '1200px' }}>
            {SIGNALS.map((sig, idx) => {
              const isOpen = activeOrigamiIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 bg-white ${
                    isOpen 
                      ? 'border-[#0f4a9b]/30 shadow-[0_12px_30px_rgba(15,74,155,0.06)]' 
                      : 'border-slate-100 hover:border-slate-200/80 shadow-[0_4px_12px_rgba(0,0,0,0.01)]'
                  }`}
                >
                  <button 
                    onClick={() => setActiveOrigamiIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      {/* Interactive indicator circle */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-[#0f4a9b] text-white shadow-md shadow-[#0f4a9b]/20' : 'bg-[#0f4a9b]/5 text-[#0f4a9b]'
                      }`}>
                        {sig.icon}
                      </div>
                      <span className="font-bold text-[#0a1f3d] text-base sm:text-[17px] antialiased [-webkit-font-smoothing:antialiased]">{sig.title}</span>
                    </div>
                    
                    {/* Rotating chevron */}
                    <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 transition-transform duration-500 ${
                      isOpen ? 'rotate-180 text-[#0f4a9b] border-[#0f4a9b]/20' : ''
                    }`}>
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        {/* Shading shadow line on the hinge fold */}
                        <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />
                        
                        <div className="p-6 pt-5 bg-[#f8fafc] border-t border-slate-100/80">
                          <p className="text-slate-600 text-sm sm:text-base leading-relaxed pl-14">
                            {sig.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Footnote */}
          <div className="mt-12 text-center max-w-xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              If two or more signals ring true, the free first session is the quickest way to know whether tutoring will help.
            </p>
          </div>
        </div>
      </section>

            {/* 7 BETWEEN-SESSION HELP BY MESSAGE */}
      <section className="py-14 sm:py-16 bg-white relative overflow-hidden">
        {/* Faint grid background layer */}
        <GridBackground light />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50/60 rounded-3xl border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.01),0_20px_40px_rgba(15,74,155,0.03)] p-8 sm:p-10 relative overflow-hidden"
          >
            {/* Subtle background decoration inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0f4a9b]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="grid md:grid-cols-12 gap-8 items-center">
              
              {/* Left text column */}
              <div className="md:col-span-7 text-left relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-[11px] sm:text-xs font-bold mb-4">
                  <MessageCircle className="h-3.5 w-3.5" /> STUCK ON TONIGHT'S QUESTION?
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mb-3 leading-tight">
                  Photograph the Problem, Get It Explained
                </h3>
                
                <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed mb-6">
                  SL or HL questions across your child's subjects, answered by a specialist tutor.
                </p>
                
                <div className="flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold text-[#0a1f3d]">
                  <Clock className="w-4 h-4 text-[#C7A24A]" /> Answered inside fifteen minutes.
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <a 
                    href={WA_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-full px-6 py-3 text-sm transition-all shadow-md shadow-[#25D366]/20 transform hover:-translate-y-0.5 active:scale-95 duration-300"
                  >
                    <MessageCircle className="w-4 h-4" /> Message a Tutor
                  </a>
                  <span className="text-[11px] text-slate-500 leading-tight">No card required. Just a photo.</span>
                </div>
              </div>
              
              {/* Right animated CSS chat column */}
              <div className="md:col-span-5 flex justify-center relative z-10">
                <div className="w-full max-w-[260px] h-[200px] rounded-2xl border border-slate-100 bg-[#efeae2] p-4 flex flex-col gap-2.5 overflow-hidden relative shadow-inner text-[11px]">
                  
                  {/* Whatsapp Header */}
                  <div className="absolute top-0 inset-x-0 bg-[#075e54] text-white py-2 px-3 flex items-center gap-2 shadow-xs">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-[9px]">U</div>
                    <div>
                      <div className="font-extrabold text-[9px] leading-tight">Ustaad Help</div>
                      <div className="text-[7.5px] text-emerald-200/80 leading-none">Online</div>
                    </div>
                  </div>
                  
                  {/* Messages container */}
                  <div className="flex flex-col gap-2 mt-7">
                    {/* Message 1 (Student) */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 }}
                      className="self-end bg-[#d9fdd3] text-slate-800 p-2 rounded-lg rounded-tr-none shadow-xs max-w-[85%] text-left leading-relaxed"
                    >
                      Can someone check my step on this IB Chemistry IA? [Photo]
                    </motion.div>
                    
                    {/* Typing bubble */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2.2, 
                        times: [0, 0.15, 0.85, 1],
                        delay: 1.8 
                      }}
                      className="self-start bg-white text-slate-400 py-1.5 px-3 rounded-lg rounded-tl-none shadow-xs text-[9px] italic"
                    >
                      Tutor is writing...
                    </motion.div>

                    {/* Message 2 (Tutor reply) */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 4 }}
                      className="self-start bg-white text-slate-800 p-2 rounded-lg rounded-tl-none shadow-xs max-w-[85%] text-left leading-relaxed"
                    >
                      Yes, the oxidation states in step 3 are balanced correctly, but check the coefficient in step 4.
                    </motion.div>
                  </div>
                  
                </div>
              </div>
              
            </div>
          </motion.div>
          
        </div>
      </section>
      
      {/* 8 ONE ABU DHABI FAMILY'S IB YEAR */}
      <section className="py-16 sm:py-20 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #060f22 0%, #0a1f3d 50%, #0f4a9b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="mb-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What <span style={{ color: '#f0c96a' }}>Parents Say</span>
            </h2>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-10 shadow-2xl relative text-left">
            <div className="text-6xl font-serif text-white/20 absolute top-3 left-6 select-none pointer-events-none">“</div>
            
            <p className="relative z-10 text-white text-base sm:text-lg lg:text-xl font-medium leading-relaxed mb-8 pt-2">
              "The sessions transformed how my daughter approached HL Chemistry. Her tutor guided her through the Internal Assessment perfectly, and her predicted points jumped from a 4 to a 6 just in time for university applications."
            </p>

            <div className="flex items-center gap-3.5 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-sm shadow-inner shrink-0">
                FA
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-white text-base leading-tight">Fatima A.</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                    <CheckCircle className="w-3 h-3 text-emerald-400" /> Verified
                  </span>
                </div>
                <div className="text-blue-200/80 text-xs mt-0.5">Al Reem Island, Abu Dhabi · Verified</div>
              </div>
            </div>
          </div>

        </div>
      </section>

            {/* 9 BEFORE YOU BOOK: ABU DHABI QUESTIONS */}
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
                Honest answers to the IB questions Abu Dhabi parents ask before their first session.
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

      
      {/* 10 START YOUR IB SUPPORT */}
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
              Start Your IB Support
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
                  Thirty online minutes with a matched IB tutor, at no cost.
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

        </div>
      </section>
</Layout>
  );
}
