import { useState, useRef, useEffect } from 'react';
import { 
  Star, GraduationCap, Award, BookOpen, CheckCircle,
  MessageCircle, ChevronDown, ChevronLeft, ChevronRight, HelpCircle, TrendingUp, Clock,
  Shield, Brain, ArrowRight, Library, Building,
  Atom, Calculator, FlaskConical, Dna, Briefcase, Lightbulb,
  Sigma, ShieldCheck, Leaf, PenTool,
  Landmark, Globe, Compass, Rocket, LineChart, Microscope, Settings, 
  Search, UserCheck, HeartHandshake, BarChart3, BookMarked,
  Zap, Target, Calendar, FileCheck, BrainCircuit, ClipboardList, CalendarClock, BookText,
  ClipboardCheck, Layers, EyeOff, AlertTriangle, Crosshair, UserPlus, FileStack, Gauge, Timer, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, GradientHeadingText, GoldButton, BritishLandmarkWatermark, AmericanLandmarkWatermark, IBWorldWatermark, FinalCTA, StatsBar } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, faqSchema, reviewsSchema } from './shared/schemas';
import AskExpertSection from './AskExpertSection';

const REVIEWS = [
  { name: "Fares Al Kindi",    initials: "FK", location: "Abu Dhabi, UAE", text: "I had a great experience with Ustaad. They truly provide some of the Best Tutors in Abu Dhabi. The teaching style is clear, professional, and very supportive." },
  { name: "Sumayya Alamri",    initials: "SA", location: "Abu Dhabi, UAE", text: "I had very good experience with Ustad for my daughter… her math teacher is one of the best tutors I experienced. He explains the concepts very well." },
  { name: "Wadeema Al M",      initials: "WA", location: "Abu Dhabi, UAE", text: "Very good tutoring institute with supportive tutor and clear teaching methods. Would definitely recommend to anyone looking for quality education." },
  { name: "Humaid Khalaf",     initials: "HK", location: "Abu Dhabi, UAE", text: "very good site if you want a good teacher for your studies. The tutors really know how to make difficult topics easy to understand." },
  { name: "Zayed Al Teneiji",  initials: "ZT", location: "Abu Dhabi, UAE", text: "Best tutoring institution in Abu Dhabi. The tutors are extremely knowledgeable and really care about student success in exams." },
  { name: "Nouf Al Mansouri",  initials: "NM", location: "Abu Dhabi, UAE", text: "Being a teacher, I found them as the most professional and organized service provider, they really care and organize lessons as per student learning speed." },
  { name: "Elyazia Alkaabi",   initials: "EA", location: "Abu Dhabi, UAE", text: "He is a very good teacher, he makes the lessons easier to understand and has good ways of getting the information in my mind easily." },
  { name: "Omar Howwar",       initials: "OH", location: "Dubai, UAE",     text: "Sincere, encouraging, and passionate for his work. He put sufficient effort to elevate the education and knowledge of my son significantly." },
  { name: "Mohamed Al Hamed",  initials: "MH", location: "Abu Dhabi, UAE", text: "Ustaad is the best online institute in Abu Dhabi, they tutored me throughout university and are now consistently tutoring my siblings and cousins." },
  { name: "James T.",          initials: "JT", location: "Dubai, UAE",     text: "I started tutoring for A-Level Physics about three months before my exams. My tutor was incredibly patient and broke down complex topics like electromagnetic induction into simple, intuitive steps. I ended up getting an A*." },
  { name: "Ahmed Als",         initials: "AA", location: "Abu Dhabi, UAE", text: "One of the best math tutors in Abu Dhabi, his teaching method is very focused and effective. He breaks down complex mathematical concepts into simple steps and ensures full understanding." },
];

function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const n = REVIEWS.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(i => (i + 1) % n), 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const go = (idx: number) => { setActive((idx + n) % n); startTimer(); };

  const prevIdx = (active - 1 + n) % n;
  const nextIdx = (active + 1) % n;

  const VISIBLE_DOTS = Math.min(3, n);
  const dotStart = Math.max(0, Math.min(active - 1, n - VISIBLE_DOTS));
  const dotIndices = Array.from({ length: VISIBLE_DOTS }, (_, i) => dotStart + i);

  const SideCard = ({ idx }: { idx: number }) => (
    <div className="hidden sm:block w-[26%] shrink-0 opacity-45 hover:opacity-70 transition duration-300 blur-[1.5px] hover:blur-0">
      <button className="w-full text-left cursor-pointer" onClick={() => go(idx)}>
        <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm relative overflow-hidden flex flex-col gap-3">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]" />
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(j => <Star key={j} className="h-3 w-3 fill-[#C7A24A] text-[#C7A24A]" />)}
          </div>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">"{REVIEWS[idx].text}"</p>
          <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
            <div className="w-7 h-7 bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] rounded-full flex items-center justify-center text-white font-bold text-[10px] notranslate flex-shrink-0" translate="no">
              {REVIEWS[idx].initials}
            </div>
            <span className="font-bold text-[#0a1f3d] text-xs notranslate truncate" translate="no">{REVIEWS[idx].name}</span>
          </div>
        </div>
      </button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 lg:gap-5">
        <SideCard idx={prevIdx} />

        {/* Center card */}
        <div className="flex-1 min-w-0 overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="bg-white rounded-xl p-6 lg:p-7 border border-gray-100 shadow-[0_4px_24px_rgba(15,74,155,0.09)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-start justify-between mb-3">
                <div className="text-[52px] leading-[0.75] font-serif text-[#0f4a9b]/10 select-none">"</div>
                <div className="flex gap-0.5 mt-1">
                  {[1,2,3,4,5].map(j => <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />)}
                </div>
              </div>
              <p className="text-[#374151] text-[15px] lg:text-base leading-[1.8] mb-5">"{REVIEWS[active].text}"</p>
              <div className="border-t border-gray-100 mb-4" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] notranslate flex-shrink-0" translate="no">
                  {REVIEWS[active].initials}
                </div>
                <div>
                  <div className="font-extrabold text-[#0a1f3d] text-sm notranslate" translate="no">{REVIEWS[active].name}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5 notranslate" translate="no">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block" />
                    {REVIEWS[active].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <SideCard idx={nextIdx} />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <button onClick={() => go(active - 1)} aria-label="Previous" className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all duration-200">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {dotIndices.map((idx, pos) => (
            <button
              key={idx}
              onClick={() => go(idx)}
              aria-label={`Review ${pos + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === active ? 'w-6 bg-[#0f4a9b]' : 'w-1.5 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
        <button onClick={() => go(active + 1)} aria-label="Next" className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all duration-200">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

const SCHOOL_LOGOS = [
  { file: 'cranleigh.png',      alt: 'Cranleigh Abu Dhabi logo. Ustaad supports Cranleigh students at IGCSE and A-Level with British curriculum tutoring.' },
  { file: 'dubai.png',          alt: 'Dubai College logo. Ustaad tutors Dubai College students preparing for IGCSE and A-Level maths, physics, and chemistry.' },
  { file: 'nord-anglia.png',    alt: 'Nord Anglia International School Dubai logo. Ustaad supports Nord Anglia IB MYP and Diploma students across core subjects.' },
  { file: 'dwight.png',         alt: 'Dwight School Dubai logo. Ustaad tutors Dwight IB Diploma students in Higher Level maths, sciences, and Extended Essay.' },
  { file: 'gems-ma.png',        alt: 'GEMS Modern Academy logo. Ustaad supports GEMS Modern students across CBSE, IGCSE, and IB curriculum subjects.' },
  { file: 'rgs.png',            alt: 'Royal Grammar School Guildford Dubai logo. Ustaad tutors RGS Dubai students at GCSE and A-Level across STEM subjects.' },
  { file: 'victory_heights.png',alt: 'Victory Heights Primary School logo. Ustaad supports VHPS primary years students in maths, English, and Year 6 SATs.' },
  { file: 'gems-oois.png',      alt: 'Our Own Indian School Dubai logo. Ustaad tutors Our Own students across CBSE and ICSE with subject specialists.' },
  { file: 'raha.png',           alt: 'Raha International School logo. Ustaad supports Raha IB MYP and Diploma students in Maths AA, Physics, and Chemistry.' },
  { file: 'repton.png',         alt: 'Repton School Abu Dhabi logo. Ustaad tutors Repton Abu Dhabi students through IGCSE, A-Level, and IB Diploma.' },
  { file: 'gems-wis.png',       alt: 'Wellington International School Dubai logo. Ustaad supports Wellington students from Year 7 through IGCSE and A-Level.' },
  { file: 'jess.png',           alt: 'JESS Dubai logo. Ustaad tutors Jumeirah English Speaking School students preparing for IGCSE and A-Level exams.' },
  { file: 'the_english.png',    alt: 'The English College Dubai logo. Ustaad supports English College students through GCSE, IGCSE, and A-Level subjects.' },
  { file: 'safa.png',           alt: 'Safa British School logo. Ustaad tutors Safa British School students from Year 7 through GCSE and A-Level.' },
  { file: 'pristine.png',       alt: 'Pristine Private School logo. Ustaad supports Pristine students with CBSE core subject tutoring across Years 6 to 12.' },
  { file: 'sunmarke.png',       alt: 'Sunmarke School logo. Ustaad tutors Sunmarke students through IGCSE and A-Level in maths, sciences, and English.' },
  { file: 'deira.png',          alt: 'Deira International School logo. Ustaad supports DIS IB MYP and Diploma students with curriculum-matched tutors.' },
  { file: 'brighton.png',       alt: 'Brighton College Abu Dhabi logo. Ustaad supports Brighton College students from Year 7 through IGCSE and A-Level.' },
  { file: 'amity.png',          alt: 'Amity International School logo. Ustaad tutors Amity students across CBSE, IGCSE, and A-Level curriculum subjects.' },
  { file: 'gems-wa.png',        alt: 'GEMS Wellington Academy logo. Ustaad tutors GEMS Wellington Academy students through IGCSE and A-Level across STEM subjects.' },
];

// FAQ data with JSX answers (for UI) and plain text (for JSON-LD schema)
const FAQ_ITEMS: { q: string; a: React.ReactNode; aText: string }[] = [
  {
    q: 'How is Ustaad different from a tutor marketplace?',
    a: <>We are a managed tutoring service, not a marketplace. We select and vet every tutor, stay involved throughout, and adjust the match if sessions are not working. <a href="/how-it-works" className="text-[#0f4a9b] font-medium hover:underline">See how Ustaad works →</a></>,
    aText: 'We are a managed tutoring service, not a marketplace. We select and vet every tutor, stay involved throughout, and adjust the match if sessions are not working.',
  },
  {
    q: 'Which curriculums and exam boards does Ustaad cover?',
    a: <>We cover every major international curriculum taught in the UAE — IGCSE, GCSE, A-Level (Edexcel, Cambridge, AQA), IB (MYP and DP SL/HL), American Curriculum (AP, SAT, Common Core), and more. <a href="/curriculum" className="text-[#0f4a9b] font-medium hover:underline">Explore each curriculum in detail →</a></>,
    aText: 'We cover every major international curriculum taught in the UAE — IGCSE, GCSE, A-Level (Edexcel, Cambridge, AQA), IB (MYP and DP SL/HL), American Curriculum (AP, SAT, Common Core), and more.',
  },
  {
    q: 'Can I get a tutor who has actually taught at a UAE school?',
    a: <>Most of our tutors have direct experience in UAE schools or with UAE-specific exam boards. We match based on curriculum expertise, not just subject knowledge. <a href="/tutors" className="text-[#0f4a9b] font-medium hover:underline">Meet our tutors →</a></>,
    aText: 'Most of our tutors have direct experience in UAE schools or with UAE-specific exam boards. We match based on curriculum expertise, not just subject knowledge.',
  },
  {
    q: 'How quickly will my child see real improvement?',
    a: <>Most students notice a change in confidence and clarity within four to six sessions. Grade improvement typically shows within one term of consistent sessions.</>,
    aText: 'Most students notice a change in confidence and clarity within four to six sessions. Grade improvement typically shows within one term of consistent sessions.',
  },
  {
    q: 'What happens in the free trial session?',
    a: <>The trial session focuses on the student&apos;s actual work — a topic they are currently studying or a past paper question they found difficult. There is no scripted demo. <a href="/contact#form" className="text-[#0f4a9b] font-medium hover:underline">Book a free trial →</a></>,
    aText: "The trial session focuses on the student's actual work — a topic they are currently studying or a past paper question they found difficult. There is no scripted demo.",
  },
  {
    q: 'My child has exams in a few weeks. Is it too late to start?',
    a: <>No. Short-lead tutoring is one of our most common requests. We prioritise high-impact exam topics and exam technique quickly. <a href="/exam-preparation" className="text-[#0f4a9b] font-medium hover:underline">See our exam preparation approach →</a></>,
    aText: 'No. Short-lead tutoring is one of our most common requests. We prioritise high-impact exam topics and exam technique quickly.',
  },
  {
    q: 'How much does private tutoring cost in the UAE?',
    a: <>Rates depend on the subject, level, and session frequency. We are transparent about pricing from the first call — no hidden fees. <a href="/contact#form" className="text-[#0f4a9b] font-medium hover:underline">Contact us for a quote →</a></>,
    aText: 'Rates depend on the subject, level, and session frequency. We are transparent about pricing from the first call — no hidden fees.',
  },
];

const homepageSEO = {
  title: "Private Tutors UAE | IGCSE, IB & A-Level | Ustaad",
  description: "Trusted private tutors in the UAE for IGCSE, A-Level, IB, and American curriculum students. Online 1-to-1 across all emirates. Free trial.",
  canonical: "/",
  ogImage: "/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp",
  schema: [
    localBusinessSchema,
    breadcrumbSchema([{ name: "Home", url: "/" }]),
    faqSchema(FAQ_ITEMS.map(f => ({ q: f.q, a: f.aText }))),
    ...reviewsSchema,
  ],
};

const WELCOME_CHAT_SLIDES = [
  {
    teacherName: "Ms. Layla",
    teacherRole: "Maths Tutor",
    initials: "LA",
    avatarBg: "linear-gradient(135deg, #0e2a47 0%, #174070 100%)",
    subject: "Maths",
    question: "Can you help with quadratics?",
    answer: "Sure! For x² - 5x + 6 = 0, factor as (x-2)(x-3). So x = 2 or x = 3.",
  },
  {
    teacherName: "Mr. Omar",
    teacherRole: "Physics Tutor",
    initials: "OM",
    avatarBg: "linear-gradient(135deg, #103e75 0%, #1d5fa8 100%)",
    subject: "Physics",
    question: "Stuck on Newton's second law.",
    answer: "Happy to help. F = ma. If m = 4 kg and a = 3 m/s², then F = 12 N.",
  },
  {
    teacherName: "Ms. Fatima",
    teacherRole: "Chemistry Tutor",
    initials: "FA",
    avatarBg: "linear-gradient(135deg, #1b6845 0%, #2d8a5e 100%)",
    subject: "Chemistry",
    question: "How do I balance H₂ + O₂ → H₂O?",
    answer: "Balance as 2H₂ + O₂ → 2H₂O. Two H₂ give 4 H atoms; 2 H₂O uses them all.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [activeWelcomeSlide, setActiveWelcomeSlide] = useState(0);
  const logosMarqueeRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Clone the school logos set at runtime so HTML only contains 20 logos (SEO/a11y)
  useEffect(() => {
    const container = logosMarqueeRef.current;
    if (!container) return;
    const firstSet = container.querySelector('.school-logos-set') as HTMLElement | null;
    if (!firstSet || container.querySelector('[aria-hidden="true"].school-logos-set')) return;
    const clone = firstSet.cloneNode(true) as HTMLElement;
    clone.setAttribute('aria-hidden', 'true');
    container.appendChild(clone);
  }, []);

  useEffect(() => {
    setShowWelcomePopup(true);
  }, []);

  useEffect(() => {
    if (!showWelcomePopup) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showWelcomePopup]);

  useEffect(() => {
    if (!showWelcomePopup) return;
    const timer = setInterval(() => {
      setActiveWelcomeSlide((prev) => (prev + 1) % WELCOME_CHAT_SLIDES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [showWelcomePopup]);

  const currentSlide = WELCOME_CHAT_SLIDES[activeWelcomeSlide];

  return (
    <Layout>
      <SEOHead {...homepageSEO} />
      {showWelcomePopup && (
        <div
          className="fixed inset-0 z-[9999] bg-[#0e1d3f]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowWelcomePopup(false)}
        >
          <div
            className="relative w-full max-w-[650px] bg-white rounded-[20px] shadow-[0_24px_70px_rgba(10,31,61,0.5)] overflow-visible mx-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button — shifts inward on very small screens to avoid edge clipping */}
            <button
              type="button"
              aria-label="Close welcome popup"
              onClick={() => setShowWelcomePopup(false)}
              className="absolute -top-3 -right-1 sm:-top-4 sm:-right-4 z-50 w-8 h-8 rounded-full bg-[#ef4444] border-2 border-white shadow-md flex items-center justify-center text-white hover:bg-[#dc2626] transition-all"
            >
              <X className="w-4 h-4" strokeWidth={2.5} />
            </button>

            {/* Animated Color Gradient Background */}
            <motion.div 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity }}
              style={{ 
                backgroundSize: "300% 300%",
                backgroundImage: "linear-gradient(-45deg, #f0f7ff, #fff0f5, #f0fff4, #fff9e6)"
              }}
              className="flex flex-col p-5 sm:p-8 rounded-[20px] overflow-hidden relative items-center text-center w-full"
            >

              {/* Floating 3D Elements */}
              <motion.div 
                className="absolute top-4 left-4 sm:top-8 sm:left-8 z-0 flex items-center justify-center p-2 sm:p-3 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(15,74,155,0.12)] scale-75 sm:scale-100"
                animate={{ y: [0, -15, 0], x: [0, 10, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              >
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#0f4a9b]" strokeWidth={1.5} />
              </motion.div>
              <motion.div 
                className="absolute bottom-6 right-4 sm:bottom-10 sm:right-8 z-0 flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(37,211,102,0.12)] scale-75 sm:scale-100"
                animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              >
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-[#25D366]" strokeWidth={1.5} />
              </motion.div>
              <motion.div 
                className="absolute top-1/2 right-4 sm:right-12 z-0 flex items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white/40 backdrop-blur-sm border border-white/70 shadow-[0_8px_20px_rgba(199,162,74,0.15)] scale-75 sm:scale-100"
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 2 }}
              >
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-[#C7A24A]" strokeWidth={1.5} />
              </motion.div>
              <motion.div 
                className="absolute top-8 right-16 sm:top-12 sm:right-24 z-0 flex items-center justify-center p-2 sm:p-2.5 rounded-xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-lg scale-75 sm:scale-100"
                animate={{ y: [0, 15, 0], scale: [1, 0.9, 1] }}
                transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
              >
                <Atom className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff9a9e]" strokeWidth={1.5} />
              </motion.div>
              <motion.div 
                className="absolute bottom-12 left-4 sm:bottom-16 sm:left-12 z-0 flex items-center justify-center p-2 sm:p-3 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-lg scale-75 sm:scale-100"
                animate={{ y: [0, -15, 0], x: [0, -10, 0], rotate: [0, -15, 15, 0] }}
                transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
              >
                <Globe className="w-5 h-5 sm:w-7 sm:h-7 text-[#9c27b0]" strokeWidth={1.5} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="inline-flex items-center rounded-full bg-[#f7f1df]/90 backdrop-blur-sm border border-[#eadfbc] px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-[#8a6a2f] font-extrabold shadow-sm mb-3 sm:mb-4">
                  Stuck on a question? Ask us
                </div>

                <h3 className="text-xl sm:text-[24px] text-[#0a1f3d] font-serif font-bold mb-2.5 sm:mb-3 leading-[1.25]">
                  Get a <span className="italic text-[#b8883f]">free written</span> solution in 15 minutes.
                </h3>

                <p className="text-[#5f6f86] text-[12px] sm:text-[13px] leading-relaxed mb-5 max-w-[480px]">
                  Send us any homework question your child is stuck on. A UAE subject specialist will reply with a worked solution, completely free.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-start sm:items-center gap-2.5 sm:gap-x-5 sm:gap-y-2.5 mb-6 w-full max-w-[480px] mx-auto text-left sm:text-center">
                  <div className="flex items-center gap-2 text-[12px] text-[#344e72] font-semibold bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                    12 min average reply time
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#344e72] font-semibold bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                    IGCSE, A-Level, IB & American
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-[#344e72] font-semibold bg-white/40 px-3 py-1.5 rounded-full border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-sm">
                    <CheckCircle className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                    Hundreds of questions answered
                  </div>
                </div>

                <a
                  href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20book%20my%20first%2030-minute%20session%20with%20a%20subject%20and%20curriculum-fit%20tutor."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-[280px] inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] hover:bg-[#1fb858] text-white font-extrabold text-[14px] sm:text-[15px] py-3 sm:py-3.5 transition-all shadow-[0_8px_16px_rgba(37,211,102,0.25)] hover:shadow-[0_12px_20px_rgba(37,211,102,0.35)] hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  Ask on WhatsApp
                </a>
                
                <p className="mt-3.5 text-[10px] sm:text-[11px] text-[#9aa5b5] font-medium">
                  No sign-up. No credit card. Just send your question.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-[#A8892A] text-sm font-bold rounded-full mb-6 border-2 border-[#C7A24A]/60 shadow-[0_0_20px_rgba(199,162,74,0.18)]">
                <Shield className="h-4 w-4 text-[#C7A24A]" /> Trusted by UAE families since 2015.
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text="Trusted Private Tutors Across the UAE" />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              
              <p className="text-gray-600 text-base lg:text-lg mb-10 leading-relaxed max-w-xl">
                Private 1-to-1 tutoring across Dubai, Abu Dhabi, and the UAE for IGCSE, GCSE, A-Level, IB, and American curriculum students.
              </p>

              <div className="flex flex-col gap-4 mb-4">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex flex-col gap-2">
                    <GoldButton className="w-full sm:w-auto px-8 py-3.5 text-sm hero-cta">
                      Book Your Free Trial
                    </GoldButton>
                    <p className="text-xs text-gray-400 font-medium text-center sm:text-left tracking-wide">✦ No Commitment · Cancel Anytime</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Image Container - Safely using standard IMG tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp"
                alt="Ustaad private tutor guiding a UAE student through a focused 1-to-1 IGCSE and A-Level lesson in Dubai"
                width={800}
                height={600}
                fetchPriority="high"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent"></div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* ── STATS BAR (below hero, above Why Students Struggle) ── */}
      <StatsBar />

      {/* Why Students Struggle (Vertical Cards) */}
      <section className="py-20 bg-[#F4F8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Why Students Struggle" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Many students work hard, but still feel unsure where things are going wrong.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Brain className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />,
                title: "Confusion",
                desc: "They follow lessons in class, but struggle to apply concepts independently.",
              },
              {
                icon: <EyeOff className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />,
                title: "Unfocused Revision",
                desc: "They study for hours without knowing which topics need more attention.",
              },
              {
                icon: <AlertTriangle className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />,
                title: "Academic Pressure",
                desc: "After repeated academic pressure and setbacks, the subject starts feeling heavier.",
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col items-start text-left shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 relative overflow-hidden"
              >
                <div className="w-14 h-14 bg-[#E2E8F0] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#0f4a9b]/10 group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                </div>
                <h3 className="text-xl font-extrabold text-[#1F3F66] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Ustaad Helps (White Background) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Ustaad Helps" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              With the right guidance, difficult topics start feeling more manageable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Lightbulb className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />,
                title: "Learning Feels Easier",
                desc: "In private sessions, tutors explain concepts clearly without rushing weak areas.",
              },
              {
                icon: <ClipboardList className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />,
                title: "Guided Practice",
                desc: "We walk students through past papers, exam revision, and exam techniques.",
              },
              {
                icon: <TrendingUp className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />,
                title: "Tangible Improvement",
                desc: "With time, students begin approaching difficult topics with greater ease.",
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col items-start text-left shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="w-14 h-14 bg-[#E2E8F0] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#0f4a9b]/10 group-hover:scale-110 transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                </div>
                <h3 className="text-xl font-extrabold text-[#1F3F66] mb-3">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Curriculum We Specialize in */}
      <section id="curriculum" className="py-20 bg-[#F7FAFE] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#0a1f3d] mb-4 tracking-tight">
              <GradientHeadingText text="Curriculum We Support" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg font-medium">We provide individual online tutoring across the major international curriculums followed in the UAE.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "British Curriculum",
                desc: "Structured academic support for students following UK educational pathways.",
                icon: <BookOpen className="h-6 w-6 text-white" strokeWidth={2.5} />,
                watermark: <BritishLandmarkWatermark className="w-28 h-28 opacity-[0.50]" />,
                href: "/british-curriculum",
              },
              {
                title: "American Curriculum",
                desc: "Focused guidance designed around coursework, assessments, and progression.",
                icon: <GraduationCap className="h-6 w-6 text-white" strokeWidth={2.5} />,
                watermark: <AmericanLandmarkWatermark className="w-28 h-28 opacity-[0.50]" />,
                href: "/american-curriculum",
              },
              {
                title: "IB Curriculum",
                desc: "Subject support built for academically demanding and globally recognized programmes.",
                icon: <Library className="h-6 w-6 text-white" strokeWidth={2.5} />,
                watermark: <IBWorldWatermark className="w-28 h-28 text-[#0f4a9b] opacity-[0.50]" />,
                href: "/ib-curriculum",
              }
            ].map((curr, i) => (
              <a href={curr.href} key={i} className="relative bg-white rounded-[20px] border border-[#E5E7EB] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all flex flex-col group min-h-[260px] overflow-hidden">
                {/* Watermarked icon background - 0.60 for British/American, IB has 0.50 for 0.30 final */}
                <div className="absolute right-2 bottom-2 w-28 h-28 opacity-[0.60] pointer-events-none text-[#0f4a9b]">
                  {curr.watermark}
                </div>
                
                <div className="w-11 h-11 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center mb-4 z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">{curr.icon}</div>
                </div>
                <h3 className="text-lg font-extrabold text-[#1F3F66] mb-2 leading-tight z-10">{curr.title}</h3>
                
                {/* Gold divider line below heading */}
                <div className="w-10 h-[2px] bg-[#C7A24A] mb-3"></div>
                
                <p className="text-[#6B7280] text-sm leading-relaxed z-10 flex-1">{curr.desc}</p>
                <div className="flex items-center gap-3 mt-6 z-10">
                  <span className="text-sm font-bold text-[#1F3F66] group-hover:text-[#0f4a9b] transition-colors">Explore Curriculum</span>
                  <span className="w-8 h-8 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center group-hover:border-[#0f4a9b] group-hover:text-[#0f4a9b] transition-colors text-[#1F3F66]">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <GoldButton href="/curriculum" className="px-10 py-4 text-base shadow-[0_0_20px_rgba(199,162,74,0.35)]">
              View Curriculum Details
            </GoldButton>
          </div>
        </div>
      </section>

      {/* Trusted by UAE Students (Full Tile Logos Section) - Marquee Overwrite Fixed */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-[#0a1f3d]">
            <GradientHeadingText text="Trusted By UAE Students" />
          </h2>
        </div>

        {/* Single logo set in HTML; JS clones it for the infinite scroll (SEO/a11y: each logo appears once in DOM) */}
        <div className="flex w-full overflow-hidden group" ref={logosMarqueeRef}>
          <div className="school-logos-set flex shrink-0 animate-marquee-slower gap-5 items-center py-4 pr-5 min-w-full">
            {SCHOOL_LOGOS.map((logo) => (
              <div key={logo.file} title={logo.alt.split(' logo')[0]} className="shrink-0 w-[130px] h-[130px] flex items-center justify-center rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(15,74,155,0.07),inset_0_0_0_1px_rgba(15,74,155,0.06)] p-3.5 hover:shadow-[0_4px_20px_rgba(15,74,155,0.13)] hover:border-[#0f4a9b]/20 transition-all duration-300 cursor-default">
                <img src={`/school-logos/${logo.file}`} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Expertise (Subjects) EXACT Design requested with relevant watermarks */}
      <section id="subjects" className="py-20 bg-[#F4F8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#0a1f3d] mb-4 tracking-tight">
              <GradientHeadingText text="Academic Expertise" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg font-medium">
              Ustaad offers expert support across the subjects students often find most challenging.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl mx-auto mb-10">
            {[
              { 
                title: "Mathematics", 
                desc: "Building logical thinking through mathematics.", 
                icon: <Calculator className="h-6 w-6 text-white" strokeWidth={2.5} />,
                watermark: <Calculator className="h-20 w-20 text-[#0f4a9b]" strokeWidth={1.5} />,
                href: "/maths",
              },
              { 
                title: "Physics", 
                desc: "Exploring motion, energy, and the world around us.", 
                icon: <Atom className="h-6 w-6 text-white" strokeWidth={2.5} />,
                watermark: <Atom className="h-20 w-20 text-[#0f4a9b]" strokeWidth={1.5} />,
                href: "/physics",
              },
              { 
                title: "Chemistry", 
                desc: "Making complex chemical ideas easier to understand.", 
                icon: <FlaskConical className="h-6 w-6 text-white" strokeWidth={2.5} />,
                watermark: <FlaskConical className="h-20 w-20 text-[#0f4a9b]" strokeWidth={1.5} />,
                href: "/chemistry",
              },
              { 
                title: "Biology", 
                desc: "Exploring how living systems grow and function.", 
                icon: <Leaf className="h-6 w-6 text-white" strokeWidth={2.5} />,
                watermark: <Leaf className="h-20 w-20 text-[#0f4a9b]" strokeWidth={1.5} />,
                href: "/biology",
              },
            ].map((subj, i) => (
              <a href={subj.href} key={i} className="relative bg-white rounded-[20px] border border-[#E5E7EB] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all flex flex-col cursor-pointer group overflow-hidden min-h-[260px]">
                {/* Watermarked icon background */}
                <div className="absolute right-2 bottom-2 w-24 h-24 opacity-[0.30] pointer-events-none text-[#0f4a9b]">
                  {subj.watermark}
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 z-10 group-hover:scale-110 transition-transform duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">{subj.icon}</div>
                </div>
                <h3 className="text-xl font-extrabold text-[#1F3F66] mb-2 relative z-10">{subj.title}</h3>
                
                {/* Gold divider line below heading */}
                <div className="w-10 h-[2px] bg-[#C7A24A] mb-3"></div>
                
                <p className="text-[#6B7280] text-sm leading-relaxed relative z-10 flex-1">{subj.desc}</p>
                <div className="mt-6 z-10 flex items-center gap-3">
                  <span className="text-sm font-bold text-[#1F3F66] group-hover:text-[#0f4a9b] transition-colors">Explore Subject</span>
                  <span className="w-9 h-9 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center group-hover:border-[#0f4a9b] group-hover:text-[#0f4a9b] transition-colors text-[#1F3F66]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <GoldButton href="/subjects" className="px-10 py-4 text-base shadow-[0_0_20px_rgba(199,162,74,0.35)]">
              View All Subjects
            </GoldButton>
          </div>
        </div>
      </section>

      {/* ── Ask an Expert (B1) ── */}
      <AskExpertSection />

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* How Ustaad Works */}
      <section id="how" className="py-20 bg-[#F4F8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="How Ustaad Works" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg">A simple process that helps students study with more direction.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-[#0f4a9b]/20 to-transparent z-0"></div>
            
            {[
              {
                step: "Step 1",
                title: "Understand the Gap",
                desc: "Our tutors identify where the student is struggling and what's causing it.",
                icon: <Search className="h-9 w-9 text-[#0f4a9b]" strokeWidth={2} />
              },
              {
                step: "Step 2",
                title: "Learn with Purpose",
                desc: "Tutors design lessons around the student's pace and curriculum.",
                icon: <ClipboardCheck className="h-9 w-9 text-[#0f4a9b]" strokeWidth={2} />
              },
              {
                step: "Step 3",
                title: "Consistent Progress",
                desc: "Students usually advance once things start making more sense.",
                icon: <TrendingUp className="h-9 w-9 text-[#0f4a9b]" strokeWidth={2} />
              }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                {/* Circular Icon Container with white shadow stroke */}
                <div className="w-20 h-20 bg-[#EAF2FB] rounded-full flex items-center justify-center mb-4 shadow-[0_0_0_4px_white,0_4px_15px_rgba(0,0,0,0.08)]">
                  {step.icon}
                </div>
                {/* Step Label - Black */}
                <span className="text-black font-bold text-sm mb-2">{step.step}</span>
                {/* Title */}
                <h3 className="text-xl font-extrabold text-[#1F3F66] mb-2">{step.title}</h3>
                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* Why Families Choose Ustaad (Vertical Layout Enforced with Watermarks) */}
      <section id="why" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Why Families Choose Ustaad" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg">Ustaad goes beyond tutoring by offering academic guidance built around solid basics, confidence, and measurable progress.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
            {[
              { title: "Focus from the Start", desc: "We understand what needs attention and how to improve it.", icon: <Crosshair className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} /> },
              { title: "Carefully Matched Tutors", desc: "Tutors are selected based on the student's learning needs and curriculum.", icon: <UserPlus className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} /> },
              { title: "Stronger Study Habits", desc: "Students make progress through lessons designed to develop academic habits over time.", icon: <BarChart3 className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} /> },
              { title: "Weekly Past Paper Practice", desc: "Exam practice sessions help students improve accuracy, timing, and readiness.", icon: <FileStack className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} /> },
              { title: "Focused Exam Preparation", desc: "Revision sessions are planned before exams to strengthen concepts and refresh topics.", icon: <Target className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} /> },
              { title: "Flexible Around School Life", desc: "Lessons are scheduled in a way that fits the student's routine.", icon: <Clock className="h-10 w-10 text-[#0f4a9b]" strokeWidth={2} /> }
            ].map((trust, i) => (
              <div key={i} className="bg-white rounded-[20px] border border-[#E5E7EB] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden group">
                {/* Blue gradient top indicator line */}
                <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent opacity-40"></div>
                {/* 3D Multi-tone Icon - No Background */}
                <div className="mb-6 mt-2 group-hover:scale-110 transition-transform duration-300">
                  {trust.icon}
                </div>
                <h3 className="text-lg font-extrabold text-[#1F3F66] mb-2">{trust.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{trust.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Progress. Proven Results. */}
      <section className="py-20 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Real Progress. Steady Results.
            </h2>
            <p className="text-blue-100 text-base lg:text-lg">Ustaad focuses on improvement that students and parents can visibly notice over time.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
            {[
              { val: "Grade Improvement", title: "A progressive approach that helps students improve step by step.", icon: <Gauge className="h-8 w-8 text-white" strokeWidth={2} /> },
              { val: "Better Exam Readiness", title: "Regular revision and practice build familiarity with exam structure and timings.", icon: <Timer className="h-8 w-8 text-white" strokeWidth={2} /> },
              { val: "Greater Exam Comfort", title: "Timed exam practice helps students feel prepared for difficult questions.", icon: <Award className="h-8 w-8 text-white" strokeWidth={2} /> },
              { val: "Solid Understanding", title: "Each lesson helps students build better retention over time.", icon: <BookMarked className="h-8 w-8 text-white" strokeWidth={2} /> }
            ].map((res, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-[24px] p-8 flex flex-col items-start text-left backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center text-white mb-6 shadow-[0_0_20px_rgba(199,162,74,0.4)]">
                  {res.icon}
                </div>
                <div className="text-2xl font-extrabold text-white mb-3">{res.val}</div>
                <p className="text-blue-100 text-base leading-relaxed">{res.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Parents Say */}
      <section id="reviews" className="py-14 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4a9b]/10 text-[#0f4a9b] text-xs font-bold uppercase tracking-wider rounded-full border border-[#0f4a9b]/20 mb-5">
              <Star className="h-3.5 w-3.5 fill-[#0f4a9b]" />
              <span>5.0 on Google Reviews</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="What Parents Say" />
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Real feedback from UAE families who've seen genuine progress and confidence grow.
            </p>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ── Insights From Editorial Team (B2) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#c17b2f', letterSpacing: '0.1em' }}>
            FROM OUR EDITORIAL TEAM
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            Insights From the Ustaad Editorial Team
          </h2>
          <p className="text-gray-600 text-base lg:text-lg mb-8 leading-relaxed">
            Guidance for UAE parents on curriculum, exam preparation, and academic support, written by the{' '}
            <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">Ustaad editorial team</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/blogs"
              className="inline-flex items-center justify-center font-bold rounded-xl px-8 py-4 text-base transition hover:brightness-110"
              style={{ background: '#0a1f3d', color: '#ffffff', textDecoration: 'none' }}
            >
              Explore All Articles From Ustaad UAE →
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-400">New articles published regularly by our editorial team.</p>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="faqs" className="py-8 lg:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <HelpCircle className="h-3.5 w-3.5" />
                <span className="text-xs uppercase tracking-wider">Common Questions</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">Clear answers about our tutoring approach, structure, and policies.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {FAQ_ITEMS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <button onClick={() => toggleFaq(i)}
                        aria-expanded={isOpen}
                        style={{ width:40, height:40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:'bold', fontSize:'18px', border:'none', cursor:'pointer' }}>?</button>
                      <button onClick={() => toggleFaq(i)}
                        aria-expanded={isOpen}
                        className="flex-1 flex items-center gap-3 text-left rounded-full border"
                        style={{ minHeight:'48px', padding:'8px 14px', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)', background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor:'pointer' }}>
                        <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                        <span style={{ width:32, height:32, borderRadius:'50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.2s' }}>
                          <ChevronDown className="h-3.5 w-3.5" style={{ color: isOpen ? '#fff' : '#0f4a9b' }} />
                        </span>
                      </button>
                    </div>
                    {/* Answer always rendered in DOM for SEO — max-height CSS controls visibility */}
                    <div
                      style={{
                        maxHeight: isOpen ? '400px' : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.25s ease',
                      }}
                      aria-hidden={!isOpen}
                    >
                      <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                        style={{ background:'#f8fafc', borderColor:'rgba(15,74,155,0.15)', boxShadow:'0 4px 16px rgba(15,74,155,0.06)' }}>
                        <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                        <span style={{ width:32, height:32, background:'#0f4a9b', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                          <MessageCircle className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />

      {/* Required CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 100s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee-slow 30s linear infinite;
        }
        .animate-marquee-slower {
          animation: marquee-slow 160s linear infinite;
        }
      `}</style>
    </Layout>
  );
}
