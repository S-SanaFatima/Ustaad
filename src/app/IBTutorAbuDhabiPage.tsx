import { useState, useEffect, type ReactNode } from 'react';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'motion/react';
import {
  CheckCircle, ChevronDown, Clock, MapPin,
  MessageCircle, Star, Target, Users, ArrowRight,
  Calculator, BookOpen, Compass, Layers, CheckCircle2, GraduationCap, Dna, Atom, FlaskConical, LineChart,
  AlertTriangle, MessageSquareQuote, Video, PenTool, ArrowRightLeft,
  Calendar, FileText, Timer
} from 'lucide-react';
import { Layout, GoldButton, StatsBar, SchoolsMarquee, SwipeIndicator } from './shared';
import SEOHead from './shared/SEOHead';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';

const BOOKING = "/contact#form";
const WA_URL = 'https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27m%20looking%20for%20IB%20tutoring%20support%20in%20Abu%20Dhabi.%20Could%20we%20discuss%20how%20you%20can%20help%20my%20child%3F';

const abuDhabiSchoolLogos = [
  { name: 'GEMS World Academy Abu Dhabi', file: 'gems-world-academy-abu-dhabi.png', alt: 'GEMS World Academy Abu Dhabi logo', scale: 1.2 },
  { name: 'SAMA International School', file: 'sama-international-school.png', alt: 'SAMA International School Abu Dhabi logo', scale: 1.2 },
  { name: 'The British International School Abu Dhabi', file: 'bisad.png', alt: 'The British International School Abu Dhabi logo, IB programme ages 16 to 18', scale: 1.25 },
  { name: 'American International School in Abu Dhabi', file: 'aisa-abu-dhabi.png', alt: 'American International School in Abu Dhabi (AISA) logo', scale: 1.2 },
  { name: 'Aspen Heights British School', file: 'aspen-heights-british-school.png', alt: 'Aspen Heights British School Abu Dhabi logo', scale: 1.55 },
  { name: 'Emirates National School', file: 'emirates-national-school.png', alt: 'Emirates National Schools Abu Dhabi logo', scale: 1.15 },
  { name: 'Bateen World Academy', file: 'al-bateen.png', alt: 'Bateen World Academy Abu Dhabi logo', scale: 1.25 },
];

const FAQS = [
  { q: "How many weekly sessions do most Abu Dhabi Diploma families start with?", a: "Most begin with one or two sessions a week per subject, then adjust as mocks approach. MYP families usually start with one. We suggest the lightest schedule that still moves the predicted grade, not the heaviest." },
  { q: "Can sessions fit around school hours and Abu Dhabi traffic?", a: "Yes. Sessions run online, so there is no drive and no traffic to plan around. Most families choose after-school, early-evening or weekend slots, and we hold the same weekly time once it suits everyone at home." },
  { q: "My child learns better face to face. Does online tutoring really work?", a: "Online one-to-one keeps it personal: a shared screen, a live document, and a tutor watching your child work as it happens. Most students who prefer in-person settle within two or three sessions once the format feels familiar." },
  { q: "Will tutors follow my child's own school deadlines and assessment timeline?", a: "Yes. The plan is built around your child's school calendar, so internal assessment drafts and mock dates shape each term. Share the school's deadline list at the first session and we work backwards from it together." },
  { q: "Do you tutor IB students at Cranleigh Abu Dhabi or GEMS World Academy AD?", a: "Yes. Many of our Abu Dhabi students attend Cranleigh Abu Dhabi, GEMS World Academy, Raha International, American Community School (ACS), and British International School Abu Dhabi (BISAD). Our tutors are familiar with the specific internal assessment deadlines and term schedules used across these schools." },
  { q: "Can Tabraiz Khan tutor both Math AA and Physics for the same student?", a: "Yes. That is one of our most requested pairings. Having one tutor cover both HL Math AA and HL Physics eliminates duplicate explanations across calculus, kinematics, and vectors, creating a cohesive two-year study plan." },
  { q: "Is Ustaad available for the November IB session as well as May?", a: "Yes. While most Abu Dhabi schools sit the May exam session, we support students sitting the November examination session as well. We adjust the milestone calendar and intensive mock revision blocks by six months to align with November papers." },
  { q: "Can lessons shift to post-Iftar timing during Ramadan?", a: "Yes. During Ramadan, we offer flexible evening and post-Iftar slots to match lower afternoon energy levels and prayer schedules. Session lengths can also be adjusted dynamically without losing weekly momentum." },
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


const JUMP_HABITS = [
  {
    title: "Full Working",
    desc: "Maths answers written line by line, the exact way examiners award marks. No skipped derivations.",
    icon: <Calculator className="w-5 h-5" />
  },
  {
    title: "Exam Wording",
    desc: "Subject terms used the exact way IB question papers expect them. Zero mark loss due to generic phrasing.",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    title: "Step-By-Step Answers",
    desc: "Economics and Psychology answers explained step by step, rather than scattered bullet points.",
    icon: <Compass className="w-5 h-5" />
  },
  {
    title: "Working to Time",
    desc: "Long answers practiced against the clock, so ideas flow under pressure during active exams.",
    icon: <Timer className="w-5 h-5" />
  },
  {
    title: "Neat Data",
    desc: "Science results written up with the correct units, uncertainties, and neat graphical representations.",
    icon: <Layers className="w-5 h-5" />
  },
  {
    title: "Answering What Is Asked",
    desc: "Describe, explain, evaluate: answering the command verb first to meet mark schemes head-on.",
    icon: <CheckCircle className="w-5 h-5" />
  }
];


const TIMELINE_MILESTONES = [
  {
    month: "Sept - Oct",
    label: "IA & TOK Drafts",
    scenario: "Coursework Crunches",
    rigid: "Class pacing keeps moving, leaving students to struggle with complex IA research criteria and TOK essays alone.",
    flexible: "We temporarily pause normal syllabus tracking to focus entirely on IA draft edits, mathematical explorations, and essay outlines.",
    icon: <FileText className="w-4 h-4" />
  },
  {
    month: "Nov - Dec",
    label: "Autumn Mocks",
    scenario: "Mock Run-Ups",
    rigid: "Mock exams arrive with unaddressed concept gaps, dragging down predicted grades before key university application reviews.",
    flexible: "We double-up targeted revision sessions, clear legacy backlogs, and run intensive past-paper drills to lock in high predicted scores.",
    icon: <GraduationCap className="w-4 h-4" />
  },
  {
    month: "Dec - Jan",
    label: "Winter Break",
    scenario: "Holiday Intensives",
    rigid: "Three weeks of zero academic touchpoints leads to heavy memory fade, creating a massive catch-up burden in January.",
    flexible: "Structured holiday refreshers consolidate Term 1 material without burnout, keeping the student sharp and ready for Term 2.",
    icon: <Calendar className="w-4 h-4" />
  },
  {
    month: "Feb - March",
    label: "Term Travel",
    scenario: "Travel Continuity",
    rigid: "Family travel or school trips disrupt scheduled tutoring slots, resetting academic momentum right before final mock review weeks.",
    flexible: "Lessons switch seamlessly to online whiteboard mode anywhere globally, ensuring absolute schedule continuity and zero gaps.",
    icon: <Compass className="w-4 h-4" />
  },
  {
    month: "March - April",
    label: "Ramadan Hours",
    scenario: "Ramadan Timing",
    rigid: "Rigid slots conflict with fasting hours, family gatherings, prayer times, and lower energy levels during the afternoon.",
    flexible: "We shift schedules dynamically to late evening or morning slots, adjusting lesson length to align with the student's energy peak.",
    icon: <Clock className="w-4 h-4" />
  },
  {
    month: "May",
    label: "Final Exams",
    scenario: "Exam-Week Rest",
    rigid: "Heavy cramming directly before exam papers causes cognitive fatigue, anxiety, and mistakes on core conceptual questions.",
    flexible: "We wind down heavy lessons, shifting instead to confidence checks, formula reviews, and mental recovery to ensure peak exam-day focus.",
    icon: <Timer className="w-4 h-4" />
  }
];

const SUBJECT_TABS = [
  {
    name: "Maths",
    title: "IB Maths Tutor",
    href: "/maths-tutor-abu-dhabi",
    icon: <Calculator className="w-4 h-4" />,
    bullets: [
      "AA and AI routes",
      "Non-calculator and calculator papers",
      "The maths exploration",
      "Technique for SL and HL"
    ]
  },
  {
    name: "Biology",
    title: "IB Biology Tutor",
    href: "/biology-tutor-abu-dhabi",
    icon: <Dna className="w-4 h-4" />,
    bullets: [
      "SL and HL syllabus",
      "Applying concepts to data",
      "The scientific investigation",
      "Extended response questions"
    ]
  },
  {
    name: "Physics",
    title: "IB Physics Tutor",
    href: "/physics-tutor-abu-dhabi",
    icon: <Atom className="w-4 h-4" />,
    bullets: [
      "SL and HL content",
      "Data and practical questions",
      "The scientific investigation",
      "Extended written answers"
    ]
  },
  {
    name: "Chemistry",
    title: "IB Chemistry Tutor",
    href: "/chemistry-tutor-abu-dhabi",
    icon: <FlaskConical className="w-4 h-4" />,
    bullets: [
      "SL and HL depth",
      "Reactivity and analysis questions",
      "The scientific investigation",
      "Structured calculation papers"
    ]
  },
  {
    name: "English",
    title: "IB English Tutor",
    href: "/english",
    icon: <BookOpen className="w-4 h-4" />,
    bullets: [
      "English A and English B",
      "Spoken-assessment coaching",
      "Paper 1 unseen analysis",
      "Higher-level essay writing"
    ]
  },
  {
    name: "Economics",
    title: "IB Economics Tutor",
    href: "/economics",
    icon: <LineChart className="w-4 h-4" />,
    bullets: [
      "SL and HL papers",
      "Diagram-led answers",
      "The commentary portfolio",
      "Data-response technique"
    ]
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

function ChatHelpPreview() {
  const [phase, setPhase] = useState<'student' | 'typing' | 'reply'>('student');

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];
    const run = () => {
      if (cancelled) return;
      setPhase('student');
      timers.push(window.setTimeout(() => { if (!cancelled) setPhase('typing'); }, 700));
      timers.push(window.setTimeout(() => { if (!cancelled) setPhase('reply'); }, 2200));
      timers.push(window.setTimeout(run, 5200));
    };
    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="w-full max-w-[260px] h-[200px] rounded-2xl border border-slate-100 bg-[#efeae2] p-4 flex flex-col gap-2.5 overflow-hidden relative shadow-inner text-[11px]">
      <div className="absolute top-0 inset-x-0 bg-[#075e54] text-white py-2 px-3 flex items-center gap-2 shadow-xs z-10">
        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center font-bold text-[9px]">U</div>
        <div>
          <div className="font-extrabold text-[9px] leading-tight">Ustaad Help</div>
          <div className="text-[7.5px] text-emerald-200/80 leading-none">Online</div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-7 relative z-0">
        <AnimatePresence>
          {(phase === 'student' || phase === 'typing' || phase === 'reply') && (
            <motion.div
              key="student"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              className="self-end bg-[#d9fdd3] text-slate-800 p-2 rounded-lg rounded-tr-none shadow-xs max-w-[85%] text-left leading-relaxed"
            >
              Can someone check my step on this IB Chemistry IA? [Photo]
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {phase === 'typing' && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="self-start bg-white text-slate-400 py-1.5 px-3 rounded-lg rounded-tl-none shadow-xs text-[9px] italic flex items-center gap-1"
            >
              Tutor is writing
              <span className="inline-flex gap-0.5 ml-0.5">
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-pulse" />
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-pulse [animation-delay:120ms]" />
                <span className="w-1 h-1 rounded-full bg-slate-400 animate-pulse [animation-delay:240ms]" />
              </span>
            </motion.div>
          )}
          {phase === 'reply' && (
            <motion.div
              key="reply"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="self-start bg-white text-slate-800 p-2 rounded-lg rounded-tl-none shadow-xs max-w-[85%] text-left leading-relaxed"
            >
              Yes, the oxidation states in step 3 are balanced correctly, but check the coefficient in step 4.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function IBTutorAbuDhabiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [hourCarouselResetKey, setHourCarouselResetKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarouselIndex(prev => (prev + 1) % 6);
    }, 2400);
    return () => clearInterval(interval);
  }, [hourCarouselResetKey]);
  const [activeOrigamiIndex, setActiveOrigamiIndex] = useState<number | null>(0);
  const [openBookletIndex, setOpenBookletIndex] = useState<number | null>(null);
  const [activeSubjectTab, setActiveSubjectTab] = useState(0);
  const [activeRadarIndex, setActiveRadarIndex] = useState(0);
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  const [timelineResetKey, setTimelineResetKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTimelineIndex(prev => (prev + 1) % 6);
    }, 4800); // Auto-rotate every 4.8 seconds
    return () => clearInterval(interval);
  }, [timelineResetKey]);

  const [autoplayResetKey, setAutoplayResetKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRadarIndex(prev => (prev + 1) % 6);
    }, 2800); // auto-rotate every 2.8s
    return () => clearInterval(interval);
  }, [autoplayResetKey]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  return (
    <Layout>
      <SEOHead
        title="IB Tutor Abu Dhabi | MYP, DP SL & HL | Math AA/AI + Physics"
        description="IB tutor Abu Dhabi where one tutor connects Math AA/AI, Physics and Statistics. MYP to DP HL. Vetted by our academic and operations team. Free trial."
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
          courseSchema({
            courseName: 'IB Private Tutoring Abu Dhabi',
            description: 'Expert MYP and IB Diploma tutoring in Abu Dhabi connecting Math AA/AI, Physics, Chemistry, and Internal Assessment guidance.',
            url: '/ib-tutor-abu-dhabi',
            city: 'Abu Dhabi',
          }),
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

          {/* Hero pill badges — 5 programme tags */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="flex flex-wrap items-center justify-center gap-2 mb-5"
          >
            {['MYP', 'Diploma', 'SL & HL', 'IA, EE & TOK help', 'First Session Free'].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold text-blue-100/80"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <span className="w-1 h-1 rounded-full inline-block shrink-0" style={{ background: '#f0c96a' }} />
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }}
            className="font-extrabold tracking-tight text-white leading-[1.05] mb-3 md:mb-5 text-[clamp(1.7rem,5vw,3.4rem)] max-w-[95%] sm:max-w-none"
          >
            IB Tutor Abu Dhabi,{' '}
            <span style={{ background: 'linear-gradient(92deg,#f0c96a 0%,#fde68a 50%,#C7A24A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              from MYP to Diploma
            </span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
            className="text-blue-100/80 text-[clamp(0.88rem,2vw,1.05rem)] leading-relaxed max-w-2xl mb-6 md:mb-8 px-4 italic font-medium"
          >
            Private online IB tuition for Abu Dhabi families, matched by subject, level and exam session.
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
                Claim a Free IB Session
              </a>
              <span className="text-blue-200/50 text-[11px]">No commitment. Cancel anytime.</span>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp a question to Ustaad about IB tutoring in Abu Dhabi"
                className="text-blue-200/90 text-[12px] font-semibold underline flex items-center justify-center gap-1"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" /> or WhatsApp a question
              </a>
            </div>

            <div className="hidden sm:flex items-start justify-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href={BOOKING}
                  className="inline-flex items-center justify-center gap-2 px-7 md:px-8 h-12 rounded-full font-bold text-[15px] md:text-base text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg,#1e5bb3,#0f4a9b,#0a3a79)', boxShadow: '0 4px 18px rgba(15,74,155,0.55)' }}
                >
                  Claim a Free IB Session
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
                  <MessageCircle className="w-4 h-4" /> or WhatsApp a question
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>


      {/* TRUST PROOF — SCHOOL LOGOS */}
      <StatsBar />

      <SchoolsMarquee
        title="Trusted by IB Families Across Leading Abu Dhabi Schools"
        logoList={abuDhabiSchoolLogos}
      />

      {/* Named IB Schools Badge Row */}
      <div className="bg-white py-3 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[12px] sm:text-[13px] text-slate-500 font-medium">
            <span className="font-bold text-[#0a1f3d]">Direct curriculum alignment for:</span>{' '}
            Cranleigh AD <span className="text-[#C7A24A]">·</span> GEMS World Academy AD <span className="text-[#C7A24A]">·</span> Raha International <span className="text-[#C7A24A]">·</span> Sunmarke <span className="text-[#C7A24A]">·</span> ACS AD <span className="text-[#C7A24A]">·</span> Al Yasmina (IBDP) <span className="text-[#C7A24A]">·</span> Repton (IB pathway)
          </p>
        </div>
      </div>

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
                      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                      onClick={() => {
                        setActiveCarouselIndex(i);
                        setHourCarouselResetKey(prev => prev + 1);
                      }}
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
                onClick={() => {
                  setActiveCarouselIndex(prev => (prev === 0 ? 5 : prev - 1));
                  setHourCarouselResetKey(prev => prev + 1);
                }}
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
                    onClick={() => {
                      setActiveCarouselIndex(idx);
                      setHourCarouselResetKey(prev => prev + 1);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${idx === activeCarouselIndex ? 'w-6 bg-[#0f4a9b]' : 'w-2.5 bg-slate-200'}`}
                    aria-label={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => {
                  setActiveCarouselIndex(prev => (prev === 5 ? 0 : prev + 1));
                  setHourCarouselResetKey(prev => prev + 1);
                }}
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
      <section className="py-20 bg-white relative overflow-hidden">
        <GridBackground light />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">Where the Jump to Diploma Bites</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">The habits the Diploma assumes but classrooms rarely slow down for.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            
            {/* Left Column: Interactive 3D Compass Radar Circle */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div 
                className="relative w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] select-none shrink-0"
              >
                {/* Connection lines underneath using absolute SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none animate-fade-in" style={{ overflow: 'visible' }}>
                  {JUMP_HABITS.map((_, idx) => {
                    const isActive = activeRadarIndex === idx;
                    const angleRad = ((idx * 60 - 90) * Math.PI) / 180;
                    const radius = isMobile ? 95 : 130;
                    const center = isMobile ? 135 : 170;
                    
                    const xTarget = center + Math.cos(angleRad) * radius;
                    const yTarget = center + Math.sin(angleRad) * radius;

                    return (
                      <g key={idx}>
                        {/* Static connecting line */}
                        <line
                          x1={center}
                          y1={center}
                          x2={xTarget}
                          y2={yTarget}
                          className={`transition-all duration-500 ${
                            isActive ? 'stroke-[#C7A24A] stroke-[2px] opacity-100' : 'stroke-slate-200 stroke-[1px] opacity-50'
                          }`}
                        />
                        {/* Glow effect on the active connector line */}
                        {isActive && (
                          <line
                            x1={center}
                            y1={center}
                            x2={xTarget}
                            y2={yTarget}
                            className="stroke-[#C7A24A] stroke-[4px] opacity-25 blur-[3px]"
                          />
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* Central Compass dial */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-white border border-slate-100 shadow-[inset_0_2px_5px_rgba(15,74,155,0.03),0_10px_25px_rgba(15,74,155,0.06)] flex items-center justify-center relative">
                  
                  {/* Compass pointer arrow */}
                  <motion.div 
                    animate={{ rotate: activeRadarIndex * 60 }} 
                    transition={{ type: 'spring', stiffness: 180, damping: 18 }}
                    className="absolute w-12 h-12 flex items-center justify-center"
                  >
                    <svg className="w-8 h-8 text-[#C7A24A] transform -rotate-90 filter drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 12l-18 9v-18z" />
                    </svg>
                  </motion.div>
                </div>

                {/* Circular Nodes positioned mathematically */}
                {JUMP_HABITS.map((item, idx) => {
                  const isActive = activeRadarIndex === idx;
                  const angleRad = ((idx * 60 - 90) * Math.PI) / 180;
                  const radius = isMobile ? 95 : 130;
                  const center = isMobile ? 135 : 170;

                  const xPos = center + Math.cos(angleRad) * radius;
                  const yPos = center + Math.sin(angleRad) * radius;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveRadarIndex(idx);
                        setAutoplayResetKey(prev => prev + 1); // Reset the 4.5s autoplay timer so it resumes later
                      }}
                      className={`absolute w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md border focus:outline-none ${
                        isActive 
                          ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] scale-110 shadow-[#0f4a9b]/25 z-20' 
                          : 'bg-white text-slate-500 border-slate-100 hover:text-[#0f4a9b] hover:border-slate-200 scale-100 hover:scale-105 z-10'
                      }`}
                      style={{
                        left: `${xPos}px`,
                        top: `${yPos}px`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      title={item.title}
                    >
                      {item.icon}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Display Panel for Selected Node */}
            <div className="lg:col-span-7 flex items-center mt-8 lg:mt-0 min-h-[220px]">
              <AnimatePresence mode="wait">
                {(() => {
                  const activeHabit = JUMP_HABITS[activeRadarIndex];
                  return (
                    <motion.div
                      key={activeRadarIndex}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.15 }}
                      className="bg-slate-50/70 border border-slate-100 rounded-3xl p-8 sm:p-10 text-left w-full shadow-[0_2px_4px_rgba(0,0,0,0.01),0_15px_30px_rgba(15,74,155,0.02)] relative overflow-hidden"
                    >
                      {/* Inside gradient blur for aesthetic depth */}
                      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#0f4a9b]/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#0f4a9b] text-white flex items-center justify-center shadow-md shadow-[#0f4a9b]/20">
                          {activeHabit.icon}
                        </div>
                        <div>
                          <div className="text-[11px] text-[#C7A24A] font-extrabold uppercase tracking-wider">CRITICAL HABIT REBUILD</div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d]">{activeHabit.title}</h3>
                        </div>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed antialiased font-semibold pl-2">
                        {activeHabit.desc}
                      </p>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>
            </div>

          </div>

          {/* SECTION-C: SL vs HL Decision Helper (Inline inside §3) */}
          <div id="section-c" className="mt-16 pt-12 border-t border-slate-100">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-[0_20px_50px_rgba(10,31,60,0.06)] max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A24A]/10 border border-[#C7A24A]/25 text-[#9E7B24] text-[11px] font-extrabold uppercase tracking-widest mb-3">
                  THE DECISION HELPER
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">
                  SL vs HL: <span className="text-[#C7A24A]">the decision that matters</span>
                </h3>
              </div>

              {/* Header row */}
              <div className="grid grid-cols-12 gap-2 sm:gap-4 pb-3 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-2 sm:px-4">
                <div className="col-span-4 sm:col-span-3 self-center">Compare Across</div>
                <div className="col-span-4 sm:col-span-4 text-center py-2 px-1 sm:px-3 rounded-xl bg-sky-50 text-sky-600 font-extrabold text-[11px] sm:text-xs border border-sky-100">
                  Standard Level (SL)
                </div>
                <div className="col-span-4 sm:col-span-5 text-center py-2 px-1 sm:px-3 rounded-xl bg-gradient-to-r from-[#FEFBF3] to-[#FBF6E8] text-[#0a1f3d] font-extrabold text-[11px] sm:text-xs border border-[#C7A24A]/40 shadow-xs">
                  Higher Level (HL)
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="space-y-2.5">
                {[
                  {
                    label: "Time per week",
                    icon: <Clock className="w-4 h-4 text-slate-500" />,
                    sl: "~4 hours in-class + study",
                    hl: "~6 hours in-class + heavier study"
                  },
                  {
                    label: "Assessment depth",
                    icon: <FileText className="w-4 h-4 text-slate-500" />,
                    sl: "Paper 1 + Paper 2",
                    hl: <>Paper 1 + Paper 2 + <strong className="text-[#0a1f3d]">Paper 3</strong></>
                  },
                  {
                    label: "University fit",
                    icon: <GraduationCap className="w-4 h-4 text-slate-500" />,
                    sl: "Foundation & many Russell Group",
                    hl: <>Russell Group: <strong className="text-[#0a1f3d]">3 HLs at 6+</strong></>
                  },
                  {
                    label: "Right-fit signal",
                    icon: <CheckCircle2 className="w-4 h-4 text-slate-500" />,
                    sl: "Grade 5s at IGCSE / MYP Level 5",
                    hl: <><strong className="text-[#0a1f3d]">7s or 8s at IGCSE</strong> / MYP Level 6+</>
                  }
                ].map((row, rIdx) => (
                  <div key={rIdx} className={`grid grid-cols-12 gap-2 sm:gap-4 p-2.5 sm:p-3.5 rounded-2xl items-center ${rIdx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}`}>
                    <div className="col-span-4 sm:col-span-3 flex items-center gap-2 text-left">
                      <div className="hidden sm:flex w-7 h-7 rounded-lg bg-slate-100 items-center justify-center shrink-0">
                        {row.icon}
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-bold text-[#0a1f3d] leading-tight">{row.label}</span>
                    </div>
                    <div className="col-span-4 sm:col-span-4 bg-white p-3 rounded-xl border border-slate-100 text-[12px] sm:text-[13px] text-slate-600 leading-snug flex items-center min-h-[52px]">
                      {row.sl}
                    </div>
                    <div className="col-span-4 sm:col-span-5 bg-gradient-to-b from-[#FEFBF3] to-[#FBF6E8] p-3 rounded-xl border border-[#C7A24A]/30 text-[12px] sm:text-[13px] text-slate-700 leading-snug flex items-center min-h-[52px]">
                      <div>{row.hl}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verdict Banner */}
              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-[#061530] via-[#0A1F3C] to-[#12305A] text-white flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] flex items-center justify-center shrink-0 font-bold shadow-md">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-sm sm:text-[15px] text-slate-100 leading-relaxed text-center sm:text-left">
                  Scored <strong className="text-[#E4C069] font-bold">7+ at IGCSE</strong>? HL is the honest answer. Scraped a 6? <strong className="text-[#E4C069] font-bold">SL protects the overall Diploma score</strong>.
                </p>
              </div>

              {/* Helper CTA */}
              <div className="mt-6 text-center">
                <a
                  href="/contact#form?intent=sl-hl-advice"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-[#0a1f3d] border border-slate-300 hover:border-[#C7A24A] hover:bg-gradient-to-r hover:from-[#E4C069] hover:to-[#C9A24C] hover:text-[#0a1f3d] transition-all shadow-sm hover:shadow-md"
                >
                  Book a 30-minute SL/HL consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-A: ONE IB TUTOR. THREE SUBJECTS. ZERO HANDOFFS. */}
      <section id="section-a" className="py-20 bg-slate-50 relative overflow-hidden">
        <GridBackground light />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-[0_24px_60px_rgba(10,31,60,0.06)] relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0f4a9b]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              {/* Left Column: Copy & Value Proposition */}
              <div className="lg:col-span-6 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#C7A24A] uppercase tracking-widest mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#C7A24A]" />
                  Ustaad · IB Advantage
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] leading-tight mb-5">
                  One IB tutor.<br />
                  Three subjects. <span className="text-[#C7A24A]">Zero handoffs.</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  IB is a system, not separate courses. <strong className="text-[#0a1f3d]">HL Maths AA makes HL Physics work.</strong> Statistical reasoning turns a Chemistry IA into an argument. TOK turns an EE into a claim. When subjects connect, we match one tutor across them.
                </p>

                <ul className="space-y-3.5">
                  {[
                    { bold: "Same tutor", text: "across connected subjects" },
                    { bold: "Tighter feedback loops", text: "between lessons" },
                    { bold: "No missed context,", text: "no repeat explanations" }
                  ].map((sig, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-md bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] flex items-center justify-center shrink-0 shadow-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>
                        <strong className="text-[#0a1f3d] font-bold">{sig.bold}</strong> {sig.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: 3-Node Connected Visual Diagram */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center select-none">
                  {/* SVG Wires Connecting Nodes */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 380 380">
                    <defs>
                      <linearGradient id="diagramWireGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#E4C069" />
                        <stop offset="100%" stopColor="#C9A24C" />
                      </linearGradient>
                    </defs>
                    <path d="M 190 60 Q 200 130 190 190" fill="none" stroke="url(#diagramWireGrad)" strokeWidth="2.5" strokeDasharray="4 4" className="animate-pulse" />
                    <path d="M 310 300 Q 250 250 210 200" fill="none" stroke="url(#diagramWireGrad)" strokeWidth="2.5" strokeDasharray="4 4" className="animate-pulse" />
                    <path d="M 70 300 Q 130 250 170 200" fill="none" stroke="url(#diagramWireGrad)" strokeWidth="2.5" strokeDasharray="4 4" className="animate-pulse" />
                  </svg>

                  {/* Center Hub: One Tutor · Ustaad */}
                  <div className="absolute z-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#061530] via-[#0A1F3C] to-[#12305A] text-white flex flex-col items-center justify-center shadow-[0_16px_36px_rgba(10,31,60,0.35),0_0_0_6px_rgba(201,162,76,0.18)] text-center p-2 border border-[#C7A24A]/40">
                    <span className="text-[10px] text-[#E4C069] font-extrabold uppercase tracking-widest">ONE TUTOR</span>
                    <span className="text-lg font-serif font-bold text-white leading-tight">Ustaad</span>
                  </div>

                  {/* Top Node: HL Math AA */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-white border-2 border-[#C7A24A] rounded-2xl px-4 py-2.5 text-center shadow-lg min-w-[130px]">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">SUBJECT</div>
                    <div className="text-sm font-bold text-[#0a1f3d]">HL Math AA</div>
                    <div className="text-[10px] text-slate-500 font-medium">Paper 3 focus</div>
                  </div>

                  {/* Bottom Right Node: HL Physics */}
                  <div className="absolute bottom-2 right-0 z-10 bg-white border-2 border-[#C7A24A] rounded-2xl px-4 py-2.5 text-center shadow-lg min-w-[130px]">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">SUBJECT</div>
                    <div className="text-sm font-bold text-[#0a1f3d]">HL Physics</div>
                    <div className="text-[10px] text-slate-500 font-medium">Calc + vectors</div>
                  </div>

                  {/* Bottom Left Node: Statistics */}
                  <div className="absolute bottom-2 left-0 z-10 bg-white border-2 border-[#C7A24A] rounded-2xl px-4 py-2.5 text-center shadow-lg min-w-[130px]">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">SUBJECT</div>
                    <div className="text-sm font-bold text-[#0a1f3d]">Statistics</div>
                    <div className="text-[10px] text-slate-500 font-medium">IA data work</div>
                  </div>

                  {/* Relationship connector pills */}
                  <span className="absolute top-28 right-16 z-20 text-[10px] font-bold bg-[#F8F5EF] text-slate-600 px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                    feeds →
                  </span>
                  <span className="absolute bottom-20 right-28 z-20 text-[10px] font-bold bg-[#F8F5EF] text-slate-600 px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                    informs ↖
                  </span>
                  <span className="absolute bottom-20 left-20 z-20 text-[10px] font-bold bg-[#F8F5EF] text-slate-600 px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
                    ↗ underpins
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-B: TABRAIZ KHAN FACULTY CARD */}
      <section id="section-b" className="py-12 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A24A]/10 border border-[#C7A24A]/25 text-[#9E7B24] text-[11px] font-extrabold uppercase tracking-widest mb-2">
              FEATURED IB FACULTY
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">
              Meet Your IB Tutor: <span className="text-[#C7A24A]">Tabraiz Khan</span>
            </h2>
          </div>

          <article className="grid md:grid-cols-12 bg-white rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(10,31,60,0.12)] border border-slate-200/80 max-w-4xl mx-auto">
            {/* Left Column (Navy Dark Card with Portrait) */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#061530] via-[#0A1F3C] to-[#12305A] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C7A24A]/15 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] text-[11px] font-extrabold uppercase tracking-wider mb-5 shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5" /> IB Faculty
                </span>

                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#C7A24A]/30 shadow-2xl mb-5 bg-[#0A1F3C]">
                  <img
                    src="/images/tutors/tabraiz-khan.jpg"
                    srcSet="/images/tutors/tabraiz-khan.jpg 400w"
                    sizes="(max-width: 768px) 100vw, 360px"
                    alt="Tabraiz Khan, IB HL Math AA and Physics tutor at Ustaad"
                    width={400}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-2 border border-[#E4C069]/30 rounded-xl pointer-events-none" />
                </div>
              </div>

              {/* Signed Off Banner */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-[#C7A24A]/25 backdrop-blur-xs text-left">
                <div className="flex -space-x-2">
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] font-bold text-[10px] flex items-center justify-center border-2 border-[#0A1F3C]">
                    FZ
                  </span>
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] font-bold text-[10px] flex items-center justify-center border-2 border-[#0A1F3C]">
                    MR
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 leading-snug">
                  <strong className="text-white font-bold">Signed off</strong> by F. Zaman &amp; Mariam Rahman
                </div>
              </div>
            </div>

            {/* Right Column (Details & Subject Bridge) */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between text-left gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d] leading-tight">
                  Tabraiz Khan
                </h3>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  Cambridge Certified · IB Faculty
                </p>
              </div>

              {/* Subject Bridge Container */}
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#C7A24A] mb-2.5 flex items-center gap-2">
                  <span className="w-4 h-[1.5px] bg-[#C7A24A]" />
                  THE SUBJECT BRIDGE
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#FEFBF3] to-[#FBF6E8] border border-[#C7A24A]/30">
                  <div className="flex items-center justify-between gap-1.5 sm:gap-2 text-center">
                    <div className="flex-1 bg-white border border-[#C7A24A]/60 rounded-xl p-2.5 shadow-xs">
                      <div className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Math AA</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">HL</div>
                    </div>
                    <span className="text-[#C7A24A] font-bold text-sm shrink-0">↔</span>
                    <div className="flex-1 bg-white border border-[#C7A24A]/60 rounded-xl p-2.5 shadow-xs">
                      <div className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Physics</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">HL</div>
                    </div>
                    <span className="text-[#C7A24A] font-bold text-sm shrink-0">↔</span>
                    <div className="flex-1 bg-white border border-[#C7A24A]/60 rounded-xl p-2.5 shadow-xs">
                      <div className="font-bold text-xs sm:text-sm text-[#0a1f3d]">Statistics</div>
                      <div className="text-[10px] font-bold text-slate-500 uppercase">SL / HL</div>
                    </div>
                  </div>
                  <p className="text-center text-xs font-semibold text-[#0a1f3d] mt-3">
                    One tutor across three IB subjects.
                  </p>
                </div>
              </div>

              {/* Credentials list */}
              <ul className="space-y-2.5 border-y border-slate-100 py-4">
                {[
                  { bold: "Master's in Statistics", text: "· Cambridge Certified" },
                  { bold: "9 years", text: "across MYP, DP SL and DP HL" },
                  { bold: "Maths → Physics → Statistics", text: "bridge for HL" }
                ].map((cred, cIdx) => (
                  <li key={cIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-4 h-4 rounded-md bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] flex items-center justify-center shrink-0 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                    </span>
                    <span>
                      <strong className="text-[#0a1f3d] font-bold">{cred.bold}</strong> {cred.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action and Experience Footer */}
              <div className="flex items-center justify-between gap-4 pt-1 flex-wrap">
                <div>
                  <div className="text-2xl font-serif font-bold text-[#C7A24A] leading-none">
                    9<span className="text-sm font-sans font-semibold text-slate-500 ml-1">yrs</span>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">IB Teaching</div>
                </div>

                <a
                  href="/tutors/tabraiz-khan"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a1f3d] hover:bg-gradient-to-r hover:from-[#E4C069] hover:to-[#C9A24C] hover:text-[#0A1F3C] text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  View Full Profile
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 3 WHAT YOU KEEP AFTER THE FREE SESSION */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F8FD] via-white to-[#FFF9EF] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-br from-[#0f4a9b]/10 to-[#0a3a79]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-gradient-to-tr from-[#C7A24A]/12 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="text-center mb-12 max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A24A]/35 bg-[#C7A24A]/10 text-[#A8892A] text-[11px] font-extrabold uppercase tracking-[0.14em] mb-5">
              After the free session
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              What You Keep After the Free Session
            </h2>
            <div className="w-14 h-[3px] mx-auto rounded-full bg-gradient-to-r from-[#C7A24A] to-[#A8892A] mb-5" />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Four things that stay with you, whether or not you continue.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Honest Starting Point',
                desc: 'A frank read on where your child actually sits today.'
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: 'A Two-Year Route',
                desc: 'The path from today to final exams sketched, not guessed.'
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                ),
                title: 'The Gap in Numbers',
                desc: 'The distance between current marks and the target, written plainly.'
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'A Slot Held',
                desc: 'A weekly Abu Dhabi time reserved, should you choose to continue.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative flex items-start gap-4 rounded-2xl p-5 sm:p-6 bg-white border border-[#E5E7EB] shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_32px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/25 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#C7A24A]/70 to-transparent opacity-70" />
                <div className="absolute bottom-3 right-4 text-[42px] font-black text-[#0f4a9b]/[0.06] leading-none pointer-events-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-[0_8px_20px_rgba(15,74,155,0.25)] group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-[#0a1f3d] font-extrabold text-[15px] sm:text-base mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-10"
          >
            <GoldButton href={BOOKING} className="px-8 py-3.5 text-[15px] shadow-[0_0_24px_rgba(199,162,74,0.35)]">
              Claim Your Free IB Session
            </GoldButton>
          </motion.div>
        </div>
      </section>

            {/* 4 TUITION THAT BENDS AROUND IB DEADLINES */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <GridBackground light />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">Tuition That Bends Around IB Deadlines</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">Where our timetable moves so IB crunch weeks stay manageable.</p>
          </div>

          {/* Chronological Timeline Navigation Rail */}
          <div className="relative max-w-4xl mx-auto mb-10 sm:mb-12 px-2 sm:px-6">
            {/* Background Line Connector */}
            <div className="absolute top-[20px] sm:top-[22px] left-[36px] right-[36px] h-1 bg-slate-200 rounded-full z-0">
              <motion.div 
                className="h-full bg-[#C7A24A] rounded-full"
                animate={{ width: `${(activeTimelineIndex / 5) * 100}%` }}
                transition={{ duration: 0.35 }}
              />
            </div>

            {/* Scrollable container for mobile timeline steps */}
            <div className="flex justify-between items-center relative z-10 overflow-x-auto scrollbar-none pb-4 md:pb-0 gap-4">
              {TIMELINE_MILESTONES.map((milestone, idx) => {
                const isActive = activeTimelineIndex === idx;
                const isPassed = idx < activeTimelineIndex;
                
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveTimelineIndex(idx);
                      setTimelineResetKey(prev => prev + 1); // Reset autoplay timer so it pauses, then resumes later
                    }}
                    className="flex flex-col items-center focus:outline-none shrink-0 min-w-[72px] sm:min-w-[100px]"
                  >
                    {/* Node Circle */}
                    <div 
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#0f4a9b] border-[#0f4a9b] text-white scale-110 shadow-lg shadow-[#0f4a9b]/25' 
                          : isPassed
                            ? 'bg-[#C7A24A] border-[#C7A24A] text-white'
                            : 'bg-white border-slate-200 text-slate-400 hover:border-slate-300 hover:text-slate-600'
                      }`}
                    >
                      {milestone.icon}
                    </div>

                    {/* Milestone Labels */}
                    <span className={`hidden sm:block mt-3 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-[#0f4a9b]' : 'text-slate-400'
                    }`}>
                      {milestone.month}
                    </span>
                    <span className={`mt-1.5 sm:mt-0.5 text-[11px] sm:text-[12px] font-bold text-center transition-colors duration-300 ${
                      isActive ? 'text-[#0a1f3d]' : 'text-slate-500'
                    }`}>
                      {milestone.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Mobile swipe hint */}
            <SwipeIndicator text="Swipe across all 6 milestones" className="mt-3" />
          </div>

          {/* Before / After Adaptability Comparison Panel */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {(() => {
                const current = TIMELINE_MILESTONES[activeTimelineIndex];
                return (
                  <motion.div
                    key={activeTimelineIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_25px_rgba(15,74,155,0.03)] p-6 sm:p-8"
                  >
                    {/* Scenario header */}
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-5 mb-6 text-left">
                      <div className="w-10 h-10 rounded-xl bg-[#0f4a9b]/5 text-[#0f4a9b] flex items-center justify-center font-bold">
                        {current.icon}
                      </div>
                      <div>
                        <div className="text-[10px] text-[#C7A24A] font-extrabold uppercase tracking-widest">SCENARIO FOCUS</div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1f3d]">{current.scenario}</h3>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                      {/* Left: Rigid School Calendar (Problem) */}
                      <div className="bg-slate-50 rounded-2xl p-5 border border-dashed border-slate-200 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-slate-200/60 rounded-bl-xl text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          Rigid Pace
                        </div>
                        <div>
                          <h4 className="text-slate-700 font-extrabold text-sm uppercase tracking-wide mb-3 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Standard Classroom
                          </h4>
                          <p className="text-slate-500 text-sm leading-relaxed antialiased">
                            {current.rigid}
                          </p>
                        </div>
                      </div>

                      {/* Right: Ustaad's Flexible Schedule (Solution) */}
                      <div className="bg-[#0f4a9b]/[0.02] rounded-2xl p-5 border border-[#0f4a9b]/10 relative overflow-hidden flex flex-col justify-between shadow-[0_4px_15px_rgba(15,74,155,0.01)]">
                        <div className="absolute top-0 right-0 px-3 py-1 bg-[#C7A24A] text-white rounded-bl-xl text-[10px] font-bold uppercase tracking-wider">
                          Ustaad Flex
                        </div>
                        <div>
                          <h4 className="text-[#0a1f3d] font-extrabold text-sm uppercase tracking-wide mb-3 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A]" /> Adaptive Support
                          </h4>
                          <p className="text-[#0a1f3d] text-sm leading-relaxed font-semibold antialiased">
                            {current.flexible}
                          </p>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION-D: THE IB YEAR IN ABU DHABI */}
      <section id="section-d" className="py-20 bg-white relative overflow-hidden">
        <GridBackground light />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-[0_24px_60px_rgba(10,31,60,0.06)] relative overflow-hidden">
            {/* Ambient Background glow */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mt-20" />

            {/* Header */}
            <div className="text-left mb-10 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A24A]/10 border border-[#C7A24A]/25 text-[#9E7B24] text-[11px] font-extrabold uppercase tracking-widest mb-3">
                TIMELINE · IBDP MAY SESSION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-3">
                The IB Year <span className="text-[#C7A24A]">in Abu Dhabi</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Most Abu Dhabi IB schools sit the May session. Ustaad's tutoring block runs alongside DP1 and DP2 milestones.
              </p>
            </div>

            {/* 4-Phase Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {[
                {
                  step: "01",
                  months: "Sep – Nov",
                  window: "DP1 Baseline",
                  title: "Foundations & IA topics",
                  bullets: [
                    "Diagnostic across HL subjects",
                    "IA topic shortlisting",
                    "TOK exhibition planning"
                  ]
                },
                {
                  step: "02",
                  months: "Dec – Feb",
                  window: "Mocks & Drafts",
                  title: "DP1 mocks, IA drafts",
                  bullets: [
                    "DP1 mock exam cycle",
                    "IA draft due in most schools",
                    "EE first draft window"
                  ]
                },
                {
                  step: "03",
                  months: "Mar – Apr",
                  window: "Paper 3 & IA Final",
                  title: "DP2 sprint",
                  bullets: [
                    "DP2 mock cycle",
                    "Paper 3 practice (HL)",
                    "IA final submission"
                  ]
                },
                {
                  step: "04",
                  months: "May",
                  window: "Exam Session",
                  title: "Real papers",
                  bullets: [
                    "IBDP May exam window",
                    "Predicted grades finalised",
                    "UCAS confirmations begin"
                  ]
                }
              ].map((phase, pIdx) => (
                <div key={pIdx} className="flex flex-col items-start bg-gradient-to-b from-[#FEFBF3] to-[#FBF6E8] border border-[#C7A24A]/30 rounded-2xl p-5 sm:p-6 shadow-xs relative">
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#C7A24A] text-[#0a1f3d] font-serif font-bold text-lg flex items-center justify-center shadow-md">
                      {phase.step}
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-white/80 px-2.5 py-1 rounded-full border border-slate-200">
                      {phase.months}
                    </span>
                  </div>

                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C7A24A] mb-1">
                    {phase.window}
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#0a1f3d] mb-3 leading-snug">
                    {phase.title}
                  </h3>

                  <ul className="space-y-1.5 text-xs text-slate-600 mt-auto w-full">
                    {phase.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] shrink-0 mt-1.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Peak Window Banner */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#061530] via-[#0A1F3C] to-[#12305A] text-white flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl">
              <div className="flex items-center gap-4 text-left">
                <div className="w-11 h-11 rounded-xl bg-[#E4C069]/20 text-[#E4C069] flex items-center justify-center shrink-0 border border-[#E4C069]/30">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl">
                  The heaviest window is <strong className="text-[#E4C069] font-bold">Dec–April</strong>: mocks land, IA deadlines close, Paper 3 practice starts. Ustaad tutors ramp weekly hours here without renegotiation.
                </p>
              </div>

              <a
                href={BOOKING}
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] font-extrabold text-xs sm:text-sm hover:brightness-105 transition-all shadow-md hover:-translate-y-0.5"
              >
                Plan Your IB Year
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* November Session Footnote */}
            <div className="mt-4 p-4 rounded-xl bg-[#F8F5EF] border-l-4 border-[#C7A24A] text-left text-xs text-slate-600">
              <strong className="text-[#0a1f3d]">November-session schools:</strong> a few Aldar-network schools sit November. We shift the plan back six months.
            </div>
          </div>
        </div>
      </section>

      {/* 5 ONE TUTOR PER SUBJECT, MATCHED TO YOU */}
      <section className="py-16 bg-white relative overflow-hidden">
        <GridBackground light />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-4">One Tutor Per Subject, Matched to You</h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">Chosen by subject and level; select a subject below to see details.</p>
          </div>

          {/* Horizontal Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto mb-8">
            {SUBJECT_TABS.map((tab, idx) => {
              const isActive = activeSubjectTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSubjectTab(idx)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 border ${
                    isActive 
                      ? 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-md shadow-[#0f4a9b]/25' 
                      : 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100/60 hover:text-[#0f4a9b]'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Active Subject Details Panel */}
          <div className="max-w-3xl mx-auto mb-8 min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSubjectTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.22 }}
                className="bg-[#f8fafc] rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.02)] p-6 sm:p-8 grid md:grid-cols-12 gap-6 md:gap-8 items-start"
              >
                {/* Left detailed info and CTA */}
                <div className="md:col-span-6 flex flex-col justify-between h-full text-left">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[#0f4a9b] text-[11px] font-bold mb-3">
                      {SUBJECT_TABS[activeSubjectTab].icon} SPECIALIZED IB SUPPORT
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] mb-4">{SUBJECT_TABS[activeSubjectTab].title}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a 
                      href={SUBJECT_TABS[activeSubjectTab].href}
                      className="inline-flex items-center justify-center bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-full px-5 py-3 text-sm hover:brightness-110 hover:shadow-lg hover:shadow-[#C7A24A]/30 transition transform hover:-translate-y-0.5 active:scale-95 duration-300"
                    >
                      Syllabus details
                    </a>
                  </div>
                </div>

                {/* Right list items with checklist */}
                <div className="md:col-span-6 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 text-left">
                  <h4 className="text-[#0a1f3d] font-bold text-xs uppercase tracking-wider mb-4">Focus Areas:</h4>
                  <ul className="space-y-3">
                    {SUBJECT_TABS[activeSubjectTab].bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-slate-600 text-[14px]">
                        <svg className="w-4 h-4 text-[#C7A24A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span className="font-semibold antialiased">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="text-center">
            <a href="/ib-curriculum" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0f4a9b] hover:underline">
              See full subject list and core overview
            </a>
          </div>
        </div>
      </section>

      {/* 6 WHEN ABU DHABI PARENTS TEND TO CALL */}
      <section className="py-20 bg-slate-50/50 relative overflow-hidden">
        <GridBackground light />
        
        
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
                  SL or HL questions across subjects your child studies, answered by a specialist tutor.
                </p>
                
                <div className="flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold text-[#0a1f3d]">
                  <Clock className="w-4 h-4 text-[#C7A24A]" /> Answered inside fifteen minutes.
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                  <a 
                    href={WA_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Message an IB specialist tutor on WhatsApp"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold rounded-full px-6 py-3 text-sm transition-all shadow-md shadow-[#25D366]/20 transform hover:-translate-y-0.5 active:scale-95 duration-300"
                  >
                    <MessageCircle className="w-4 h-4" /> Message a Tutor
                  </a>
                  <span className="text-[11px] text-slate-500 leading-tight">No card required. Just a photo.</span>
                </div>
              </div>
              
              {/* Right animated CSS chat column */}
              <div className="md:col-span-5 flex justify-center relative z-10">
                <ChatHelpPreview />
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

          {/* Related Pages Internal Links */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-5">Related Pages</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                { label: 'IB Programme Hub', sublabel: 'MYP, SL, HL and Core overview', href: '/ib-curriculum' },
                { label: 'IB Maths Tutor Abu Dhabi', sublabel: 'AA, AI, the exploration and papers', href: '/maths-tutor-abu-dhabi' },
                { label: 'IB English Tutor Abu Dhabi', sublabel: 'English A and B, spoken assessment', href: '/english' },
                { label: 'IGCSE Tutor Abu Dhabi', sublabel: 'Year 10 and 11, British curriculum', href: '/igcse-tutor-abu-dhabi' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex flex-col gap-0.5 p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#0f4a9b]/20 hover:shadow-sm transition-all duration-200 group"
                >
                  <span className="text-[#0f4a9b] font-bold text-xs group-hover:underline">{link.label}</span>
                  <span className="text-slate-500 text-[11px] leading-tight">{link.sublabel}</span>
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-xs font-semibold text-gray-500 mb-14">
            First session free. Evening, weekend and Ramadan slots. Serving Abu Dhabi families, delivered online across the UAE. Ustaad has operated in the UAE since 2015.
          </p>

        </div>
      </section>
</Layout>
  );
}
