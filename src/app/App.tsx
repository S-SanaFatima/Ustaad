import { useState, useRef, useEffect } from 'react';
import { 
  Star, GraduationCap, Award, BookOpen, CheckCircle,
  MessageCircle, ChevronDown, ChevronLeft, ChevronRight, HelpCircle, TrendingUp, Clock,
  Shield, Brain, Library, Building,
  Atom, Calculator, FlaskConical, Dna, Briefcase, Lightbulb, Wrench,
  Sigma, ShieldCheck, Leaf, PenTool,
  Landmark, Globe, Compass, Rocket, LineChart, Microscope, Settings, 
  Search, UserCheck, HeartHandshake, BarChart3, BookMarked,
  Zap, Target, Calendar, FileCheck, BrainCircuit, ClipboardList, CalendarClock, BookText,
  ClipboardCheck, Layers, EyeOff, AlertTriangle, Crosshair, UserPlus, FileStack, Gauge, Timer, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, GradientHeadingText, GoldButton, BritishLandmarkWatermark, AmericanLandmarkWatermark, IBWorldWatermark, FinalCTA, StatsBar, CTA_SUBTEXT } from './shared';
import SEOHead from './shared/SEOHead';
import BackToSchoolPopup from './shared/BackToSchoolPopup';
import { localBusinessSchema, breadcrumbSchema, faqSchema, reviewsSchema, organizationSchema, websiteSchema } from './shared/schemas';
import AskExpertSection from './AskExpertSection';
import { ExplodedViewSection, AchievementCoinsSection, HowUstaadWorksSection, WhyFamiliesChooseSection, StudentStruggleSection, AcademicExpertiseSection } from './shared';

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
              className="bg-white rounded-2xl p-6 lg:p-7 border border-gray-100 shadow-[0_6px_28px_rgba(15,74,155,0.08)] hover:shadow-[0_16px_40px_rgba(15,74,155,0.14)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />
              <div className="flex items-start justify-between mb-3">
                <div className="text-[52px] leading-[0.75] font-serif text-[#0f4a9b]/10 group-hover:text-[#0f4a9b]/20 transition-colors select-none">"</div>
                <div className="flex gap-0.5 mt-1 group-hover:scale-105 transition-transform duration-200">
                  {[1,2,3,4,5].map(j => <Star key={j} className="h-4 w-4 fill-[#C7A24A] text-[#C7A24A]" />)}
                </div>
              </div>
              <p className="text-[#374151] group-hover:text-[#111827] transition-colors duration-200 text-[15px] lg:text-base leading-[1.8] mb-5">"{REVIEWS[active].text}"</p>
              <div className="border-t border-gray-100 mb-4" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gradient-to-br from-[#0f4a9b] to-[#1e5ba8] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[0_2px_8px_rgba(15,74,155,0.28)] group-hover:scale-110 transition-transform duration-300 notranslate flex-shrink-0" translate="no">
                  {REVIEWS[active].initials}
                </div>
                <div>
                  <div className="font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 text-sm notranslate" translate="no">{REVIEWS[active].name}</div>
                  <div className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5 notranslate" translate="no">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
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
        <button onClick={() => go(active - 1)} aria-label="Previous" className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all duration-200">
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
        <button onClick={() => go(active + 1)} aria-label="Next" className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0f4a9b] hover:bg-[#0f4a9b] hover:text-white hover:border-[#0f4a9b] transition-all duration-200">
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
    organizationSchema,
    websiteSchema,
    localBusinessSchema,
    breadcrumbSchema([{ name: "Home", url: "/" }]),
    faqSchema(FAQ_ITEMS.map(f => ({ q: f.q, a: f.aText }))),
    ...reviewsSchema,
  ],
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
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

  return (
    <Layout>
      <SEOHead {...homepageSEO} />
      <BackToSchoolPopup open={showWelcomePopup} onClose={() => setShowWelcomePopup(false)} />
      {/* Hero Section */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-20 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-[#A8892A] text-xs sm:text-sm font-bold rounded-full mb-4 sm:mb-6 border-2 border-[#C7A24A]/60 shadow-[0_0_20px_rgba(199,162,74,0.18)]">
                <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#C7A24A]" /> Trusted by UAE families since 2015.
              </div>
              
              <h1 className="text-[1.75rem] leading-[1.15] sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0a1f3d] mb-4 sm:leading-[1.1] tracking-tight">
                <GradientHeadingText text="Trusted Private Tutors Across the UAE" />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-5 sm:mb-6" />
              
              <p className="text-gray-600 text-[15px] sm:text-base lg:text-lg mb-7 sm:mb-10 leading-relaxed max-w-xl">
                Ustaad is a premium private tutoring service in the UAE, offering online 1-to-1 lessons for IGCSE, GCSE, A-Level, IB and American curriculum students.
              </p>

              <div className="flex flex-col gap-4 mb-4">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex flex-col gap-2 w-full sm:w-auto">
                    <GoldButton className="w-full sm:w-auto px-8 py-3.5 text-sm hero-cta">
                      Book Your Free Trial
                    </GoldButton>
                    <p className="text-xs text-gray-400 font-medium text-center sm:text-left tracking-wide">{CTA_SUBTEXT}</p>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Right Image Container - Safely using standard IMG tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[220px] sm:h-[400px] lg:h-[600px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-4 sm:border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/private-tutor-student-1-to-1-session-uae.webp"
                alt="Private online tutor teaching a UAE student one to one"
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

      {/* Why Students Struggle (3D Examination Clipboards) */}
      <StudentStruggleSection />

      {/* How Ustaad Helps (Exploded View Assembly) */}
      <ExplodedViewSection />

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
              <motion.a
                href={curr.href}
                key={i}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.16, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-white rounded-2xl border border-gray-200/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_50px_rgba(15,74,155,0.14)] hover:border-[#0f4a9b]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col group min-h-[260px] overflow-hidden"
              >
                {/* Watermarked icon background with smooth hover scale */}
                <div className="absolute right-2 bottom-2 w-28 h-28 opacity-[0.60] group-hover:opacity-85 group-hover:scale-110 transition-all duration-500 pointer-events-none text-[#0f4a9b]">
                  {curr.watermark}
                </div>
                
                <div className="w-11 h-11 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center mb-4 z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-md">
                  <div>{curr.icon}</div>
                </div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-200 mb-2 leading-tight z-10">
                  {curr.title}
                </h3>
                
                {/* Gold divider line that expands smoothly on card hover */}
                <div className="w-10 h-[2px] bg-[#C7A24A] mb-3 group-hover:w-16 transition-all duration-300" />
                
                <p className="text-[#6B7280] group-hover:text-[#374151] transition-colors duration-200 text-sm leading-relaxed z-10 flex-1">
                  {curr.desc}
                </p>
                <div className="mt-6 z-10">
                  <span className="text-sm font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors flex items-center gap-1.5">
                    <span>Explore Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300 text-[#0f4a9b]" />
                  </span>
                </div>
              </motion.a>
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
              <div key={logo.file} title={logo.alt.split(' logo')[0]} className="shrink-0 w-[140px] sm:w-[220px] md:w-[280px] h-[80px] sm:h-[120px] md:h-[150px] flex items-center justify-center px-3 sm:px-4 cursor-default relative transition-all duration-300 hover:scale-110 hover:-translate-y-1">
                <img src={`/school-logos/${logo.file}`} alt={logo.alt} className="w-full h-full max-h-[64px] sm:max-h-[100px] md:max-h-[120px] object-contain filter drop-shadow-sm mix-blend-multiply" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Expertise (Subjects with Bespoke Interactive Artifacts) */}
      <AcademicExpertiseSection />

      {/* ── Ask an Expert (B1) ── */}
      <AskExpertSection />

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* How Ustaad Works */}
      <HowUstaadWorksSection />

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-[#0f4a9b]/30 to-transparent" />
      </div>

      {/* Why Families Choose Ustaad (Sticky Scroll Layout) */}
      <WhyFamiliesChooseSection />

      <AchievementCoinsSection />

      {/* What Parents Say */}
      <section id="reviews" className="py-14 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-white text-[#0a1f3d] text-xs font-bold rounded-full border border-[#0f4a9b]/15 shadow-[0_4px_16px_rgba(15,74,155,0.08)] mb-5 notranslate" translate="no">
              <svg viewBox="0 0 48 48" className="w-5 h-5 shrink-0" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span className="text-sm font-extrabold text-[#0a1f3d]">5.0</span>
              <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className="h-3.5 w-3.5 fill-[#C7A24A] text-[#C7A24A]" />
                ))}
              </span>
              <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Google Reviews</span>
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
              className="inline-flex items-center justify-center font-bold rounded-xl px-8 py-4 text-base transition hover:brightness-110 shadow-[0_8px_16px_rgba(15,74,155,0.25)] hover:shadow-[0_12px_20px_rgba(15,74,155,0.35)] hover:-translate-y-0.5"
              style={{ background: '#0f4a9b', color: '#ffffff', textDecoration: 'none' }}
            >
              Explore All Articles From Ustaad UAE
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
                        className="flex-1 flex items-center gap-3 text-left rounded-full border group hover:border-[#0f4a9b]/30 hover:bg-blue-50/20 transition-all duration-200"
                        style={{ minHeight:'48px', padding:'8px 14px', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)', background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor:'pointer' }}>
                        <span className="flex-1 font-semibold text-[#0a1f3d] group-hover:text-[#0f4a9b] text-[14px] leading-snug transition-colors duration-200">{faq.q}</span>
                        <span className="group-hover:scale-105 transition-transform duration-200" style={{ width:32, height:32, borderRadius:'50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.2s' }}>
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
                      <div className="ml-0 sm:ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
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
