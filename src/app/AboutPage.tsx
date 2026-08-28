import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award, Blocks, FileSearch, GraduationCap, HandHeart, Lightbulb,
  PenTool, Search, Star, Target, TrendingUp, UserCheck, Users, Calendar,
  Globe, Clock, Repeat, MapPin, MessageCircle, ChevronDown, ChevronUp, Compass, Landmark,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock, FAQAccordion } from './shared';
import TeamSection from './shared/TeamSection';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from './shared/schemas';

const aboutSchemaFaqs = [
  { q: "Who runs Ustaad?", a: "Ustaad is run by an experienced team of UAE-based educators who specialise in IGCSE, A-Level, IB and AP tutoring. Our tutors and academic leads have worked with international-curriculum students across the UAE for many years." },
  { q: "Is Ustaad a tutor marketplace or a service?", a: "Ustaad is a private tutoring service, not a directory or marketplace. We personally match every family to a curriculum-specialist tutor, oversee lesson quality, and stay accountable for the student's progress." },
  { q: "Where in the UAE do Ustaad students live?", a: "Our students join from every Emirate: Dubai (Marina, Downtown, JVC, Arabian Ranches), Abu Dhabi (Yas Island, Reem Island, Khalifa City, Al Bateen), Sharjah, Al Ain, Ajman, RAK, Fujairah and Umm Al Quwain." },
  { q: "How experienced is the Ustaad team?", a: "Our tutors and academic leads have been supporting UAE families for over a decade, with thousands of hours of one-to-one lessons behind them across the major international curriculums." },
  { q: "What curriculums do Ustaad tutors specialise in?", a: "British (IGCSE, GCSE, A-Level), American (Middle School, High School, AP, SAT), and International Baccalaureate (MYP, DP SL, DP HL). Every tutor is matched by curriculum first, then subject." },
  { q: "What makes Ustaad's approach different from other UAE tutoring services?", a: "We start from the student's actual gap, not a generic syllabus. Sessions are one-to-one, online, and led by tutors who focus on genuine understanding, so students can apply concepts when exam questions change the wording." }
];

const storyTabs = [
  {
    id: 'who-we-are',
    label: 'Who We Are',
    badge: 'WHO WE ARE',
    title: 'Led by Experienced UAE Educators',
    image: '/UpdatedImages/ustaad-personalised-one-to-one-online-lesson-abu-dhabi.webp',
    imageAlt: 'Ustaad educator delivering a personalised one-to-one online lesson',
    stat: { number: '2,500+', label: 'Students Guided', icon: Target },
    paragraphs: [
      'Ustaad is a UAE online tutoring platform led by experienced educators who have supported more than 2,500 students across Dubai, Abu Dhabi, Al Ain, and beyond through personalised one to one online tutoring over the past decade.',
      'Our tutors are qualified and certified educators trusted by UAE families across British, American, and IB curriculum programmes. Many come from classroom teaching and exam preparation backgrounds, so they understand what students are expected to do in real assessments, not just in homework tasks.',
      'We believe meaningful academic support goes beyond improving grades. It also helps students build deeper understanding, stronger study habits, independent thinking, and greater exam confidence over time.'
    ]
  },
  {
    id: 'our-story',
    label: 'Our Story',
    badge: 'OUR STORY',
    title: 'Closing the Gap in Learning',
    image: '/UpdatedImages/uae-students-closing-learning-gaps-academic-support.webp',
    imageAlt: 'UAE students working through learning gaps',
    stat: { number: '1-to-1', label: 'Personalised Focus', icon: Lightbulb },
    paragraphs: [
      'We founded Ustaad after watching capable students slowly lose confidence when learning gaps were left unaddressed for too long.',
      'Over the years, we noticed that many students struggle academically not because of lack of ability, but because they do not always receive enough individual academic support. In many classrooms, teachers manage 25 to 35 students at once. Even experienced teachers can struggle to stop for every question, revisit missed foundations, or adapt explanations for each learner within the time available.',
      'That gap matters more than many parents realise. By the time frustration becomes visible at home, confidence has often already started to decline.',
      'Ustaad was created to help close those gaps through personalised one-to-one online tutoring that gives students more space to think, ask questions, and work through confusion without feeling rushed.'
    ]
  },
  {
    id: 'what-we-believe',
    label: 'What We Believe',
    badge: 'WHAT WE BELIEVE ABOUT LEARNING',
    title: 'Understanding matters more than memorising',
    image: '/UpdatedImages/understanding-focused-tutoring-igcse-mathematics-uae.webp',
    imageAlt: 'UAE student grasping an IGCSE Mathematics concept',
    stat: { number: '100%', label: 'Concept Mastery', icon: Star },
    paragraphs: [
      'At Ustaad, we believe students learn more effectively when they genuinely understand a concept instead of only memorising formulas or repeated question patterns.',
      'We have seen many students complete familiar classwork confidently, then struggle when exam questions change the wording or test application differently. This happens often in subjects like IGCSE Mathematics, IGCSE Physics, AP Physics, AP Chemistry, and Biology.',
      'Our tutors spend time helping students understand why a method works, not only what answer to write down. Across British, American, and IB curriculum programmes, lessons focus heavily on real understanding, organised thinking, problem solving, and exam confidence.'
    ]
  }
];

const REGION_COMMUNITIES = [
  {
    id: "abu-dhabi",
    name: "Abu Dhabi",
    icon: MapPin,
    badge: "11 Key Neighborhoods",
    gradient: "from-[#0f4a9b] to-[#0a3a79]",
    badgeBg: "bg-[#0f4a9b]/10 text-[#0f4a9b] border-[#0f4a9b]/20 hover:bg-[#0f4a9b]/20",
    items: [
      "Khalifa City", "Mohammed Bin Zayed City", "Al Bateen", "Yas Island", 
      "Reem Island", "Shakhbout City", "Saadiyat Island", "Al Reef", 
      "Al Raha", "Corniche", "Al Mushrif"
    ]
  },
  {
    id: "al-ain",
    name: "Al Ain",
    icon: Compass,
    badge: "8 Key Neighborhoods",
    gradient: "from-[#0a3a79] to-[#0d2c58]",
    badgeBg: "bg-[#0f4a9b]/10 text-[#0f4a9b] border-[#0f4a9b]/20 hover:bg-[#0f4a9b]/20",
    items: [
      "Al Jimi", "Al Muwaiji", "Al Foah", "Al Yahar", 
      "Zakher", "Al Khabisi", "Al Bateen (Al Ain)", "Al Maqam"
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    icon: Star,
    badge: "16 Key Neighborhoods",
    gradient: "from-[#C7A24A] to-[#a6863b]",
    badgeBg: "bg-[#C7A24A]/15 text-[#8c6b1d] border-[#C7A24A]/30 hover:bg-[#C7A24A]/25",
    items: [
      "Dubai Marina", "Jumeirah", "Jumeirah Village Circle (JVC)", "Business Bay", 
      "Emirates Hills", "Arabian Ranches", "Jumeirah Beach Residence (JBR)", 
      "Downtown Dubai", "Motor City", "Jebel Ali", "Dubai Hills", 
      "Damac Hills", "Palm Jumeirah", "Al Barsha", "Meydan", "MBR City"
    ]
  },
  {
    id: "sharjah-ne",
    name: "Sharjah & Northern Emirates",
    icon: Globe,
    badge: "10 Key Regions",
    gradient: "from-[#0f4a9b] to-[#0a3a79]",
    badgeBg: "bg-[#0f4a9b]/10 text-[#0f4a9b] border-[#0f4a9b]/20 hover:bg-[#0f4a9b]/20",
    items: [
      "Al Majaz", "Al Nahda", "Muwaileh", "Al Khan", "Al Qasba", 
      "Al Taawun", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"
    ]
  }
];

export default function AboutPage() {
  const [activeStoryTab, setActiveStoryTab] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [activeCommunityIndex, setActiveCommunityIndex] = useState(0);

  return (
    <Layout>
      <SEOHead
        title="About Ustaad — Premium Private Tutors Across the UAE"
        description="Ustaad is a premium 1-to-1 private tutoring service for IGCSE, A-Level, IB and AP students across Dubai, Abu Dhabi and the UAE. Trusted by 2,500+ UAE families."
        canonical="/about"
        ogImage="/UpdatedImages/experienced-uae-educator-online-tutoring-session.webp"
        preloadHeroImage="/UpdatedImages/experienced-uae-educator-online-tutoring-session.webp"
        schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }]), faqSchema(aboutSchemaFaqs)]}
      />
      {/* ── HERO ── */}
      <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-gradient-to-br from-[#F4F8FD] via-white to-[#fcfaf5]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0f4a9b]/10 to-[#C7A24A]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0f4a9b]/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
                <Users className="h-4 w-4" /> About Ustaad
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight relative z-10">
                {/* Ambient SVG Wash */}
                <motion.div 
                  className="absolute -inset-12 z-[-1] rounded-full blur-[50px] pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(15,74,155,0.12) 0%, rgba(199,162,74,0.08) 100%)' }}
                  animate={{ 
                    x: ['-2%', '2%', '-2%'],
                    y: ['-2%', '2%', '-2%'],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
                />
                <GradientHeadingText text="Structured Learning. Real Academic Progress." />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Ustaad helps students build stronger study foundations, work through learning gaps with patience, and move forward with steadier performance across the school year.
              </p>
              <HeroCTABlock className="mb-4" trustText="✦ No commitment, cancel anytime.">
                Book Your Free Trial
              </HeroCTABlock>
              <p className="text-sm text-gray-500 mt-4">
                <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">Meet the editorial team</a>
                {' '}behind Ustaad’s parent guides and study articles.
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[400px] lg:h-[580px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/experienced-uae-educator-online-tutoring-session.webp"
                srcSet="/UpdatedImages/experienced-uae-educator-online-tutoring-session.webp 1x, /UpdatedImages/experienced-uae-educator-online-tutoring-session.jpeg 2x"
                alt="Experienced Ustaad educator leading an online tutoring session for a UAE student across Dubai and Abu Dhabi"
                width={1200}
                height={800}
                fetchPriority="high"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <div className="mt-10">
        <StatsBar />
      </div>

      {/* ── MERGED STORY SECTION (Tabbed Scrollytelling) ── */}
      <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Option Selector Tabs */}
          <div className="flex justify-center mb-8 sm:mb-14">
            <div className="inline-flex p-1 sm:p-1.5 bg-[#0a1f3d]/5 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-sm max-w-full overflow-x-auto no-scrollbar gap-1 sm:gap-1.5 w-full sm:w-auto justify-start sm:justify-center">
              {storyTabs.map((tab, idx) => {
                const isActive = activeStoryTab === idx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveStoryTab(idx)}
                    className={`relative px-4 py-2 sm:px-7 sm:py-3.5 rounded-xl font-bold text-xs sm:text-base transition-all duration-300 whitespace-nowrap flex items-center gap-2 flex-1 sm:flex-none justify-center ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] text-white shadow-[0_8px_20px_rgba(15,74,155,0.25)]' 
                        : 'text-gray-600 hover:text-[#0a1f3d] hover:bg-white/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeStoryPill"
                        className="absolute inset-0 bg-gradient-to-r from-[#0f4a9b] to-[#0a3a79] rounded-xl z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                      <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isActive ? 'bg-[#C7A24A]' : 'bg-gray-300'}`} />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Content View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStoryTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-[24px] sm:rounded-[36px] p-5 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,74,155,0.08)] border border-gray-100"
            >
              {/* Image Column */}
              <div className="relative rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-[0_15px_40px_rgba(15,74,155,0.12)] border-2 sm:border-4 border-gray-100 group order-2 lg:order-1">
                <img 
                  src={storyTabs[activeStoryTab].image} 
                  alt={storyTabs[activeStoryTab].imageAlt} 
                  className="w-full h-[240px] sm:h-[440px] object-cover group-hover:scale-105 transition duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/50 via-transparent to-transparent" />
                
                {/* Floating Stat Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-gray-100 block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center text-white shadow-md flex-shrink-0">
                      {(() => {
                        const StatIcon = storyTabs[activeStoryTab].stat.icon;
                        return <StatIcon className="h-4 w-4 sm:h-5 sm:w-5" />;
                      })()}
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#0a1f3d]">{storyTabs[activeStoryTab].stat.number}</div>
                      <div className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wide">{storyTabs[activeStoryTab].stat.label}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#0f4a9b]/5 text-[#0f4a9b] text-[11px] sm:text-xs font-bold rounded-full mb-3.5 sm:mb-4 border border-[#0f4a9b]/10 uppercase tracking-wider">
                  {storyTabs[activeStoryTab].badge}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0a1f3d] mb-4 sm:mb-5 leading-tight">
                  <GradientHeadingText text={storyTabs[activeStoryTab].title} />
                </h2>
                
                <div className="space-y-3 sm:space-y-4">
                  {storyTabs[activeStoryTab].paragraphs.map((pText, pIdx) => (
                    <p key={pIdx} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {pText}
                    </p>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>



      {/* ── WHY WE BUILT USTAAD ONLINE ── */}
      <section className="py-20 bg-[#F4F8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C7A24A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20">
              Why We Built Ustaad Online
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Why Ustaad Chose Online Learning" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              We built Ustaad around how students learn best today, with flexibility, consistency, and access to experienced tutors without location limits.
            </p>
          </div>

          {(() => {
            const features = [
              { title: "Revisit Lessons Anytime", desc: "Students can go back to recorded lessons during revision, mock exams, and final exam preparation whenever they need support.", icon: <Repeat className="h-6 w-6 text-white" strokeWidth={1.5} />, num: "01" },
              { title: "Access Experienced Tutors Anywhere", desc: "Online learning gives students access to the right academic support regardless of where they are located.", icon: <Globe className="h-6 w-6 text-white" strokeWidth={1.5} />, num: "02" },
              { title: "Learn With the Same Tutor", desc: "Having the same tutor long term helps students feel more comfortable, supported, and consistent throughout the academic year.", icon: <UserCheck className="h-6 w-6 text-white" strokeWidth={1.5} />, num: "03" },
              { title: "Flexible Around Student Schedules", desc: "Lessons are planned to fit naturally around school timings, extracurricular activities, and family routines.", icon: <Clock className="h-6 w-6 text-white" strokeWidth={1.5} />, num: "04" },
            ];
            return (
              <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left side: Tabs */}
                <div className="w-full lg:w-[35%] flex flex-col gap-3">
                  {features.map((f, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveFeatureTab(i)}
                      className={`group text-left px-6 py-5 rounded-[20px] transition-all duration-500 font-semibold text-[17px] border relative overflow-hidden ${
                        activeFeatureTab === i 
                          ? 'text-white border-transparent shadow-[0_12px_40px_rgba(15,74,155,0.3)] lg:translate-x-3' 
                          : 'bg-white text-gray-500 border-[#E5E7EB] hover:bg-gray-50 hover:text-[#0f4a9b] hover:border-[#0f4a9b]/30'
                      }`}
                    >
                      {/* Active Background with gradient animation */}
                      {activeFeatureTab === i && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f4a9b] via-[#1a65c9] to-[#0f4a9b] bg-[length:200%_auto] animate-gradient-slow z-0" />
                      )}
                      <div className="relative z-10 flex items-center gap-5">
                        <span className={`text-xl font-bold transition-colors duration-300 ${activeFeatureTab === i ? 'text-[#C7A24A]' : 'text-gray-300 group-hover:text-[#0f4a9b]/50'}`}>{f.num}</span>
                        <span>{f.title}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Right side: Content */}
                <div className="w-full lg:w-[65%] bg-gradient-to-br from-[#0a1f3d] via-[#0f4a9b] to-[#0a1f3d] bg-[length:200%_auto] animate-gradient-slow rounded-[32px] p-6 lg:p-8 shadow-[0_20px_50px_rgba(15,74,155,0.25)] relative overflow-hidden min-h-[340px] flex flex-col justify-center border border-[#0f4a9b]/50">
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#C7A24A]/10 to-transparent rounded-full blur-[80px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
                  
                  {features.map((f, i) => (
                    <motion.div 
                      key={i}
                      initial={false}
                      animate={{ 
                        opacity: activeFeatureTab === i ? 1 : 0, 
                        y: activeFeatureTab === i ? 0 : 20,
                        scale: activeFeatureTab === i ? 1 : 0.95,
                        zIndex: activeFeatureTab === i ? 10 : 0
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute inset-6 lg:inset-10 flex flex-col justify-center ${activeFeatureTab === i ? 'pointer-events-auto' : 'pointer-events-none'}`}
                    >
                      {/* Illustration area */}
                      <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-[16px] flex items-center justify-center mb-6 border border-white/10 relative">
                        {/* Animated background glow */}
                        <motion.div 
                           animate={{ rotate: 360 }}
                           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                           className="absolute inset-0 rounded-[16px] bg-gradient-to-tr from-[#C7A24A]/40 to-transparent blur-md"
                        />
                        <div className="w-10 h-10 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-[10px] flex items-center justify-center shadow-[0_10px_25px_rgba(199,162,74,0.4)] relative z-10">
                          {f.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-[28px] lg:text-[34px] font-bold text-white mb-4 leading-tight tracking-tight">{f.title}</h3>
                      <div className="w-16 h-[3px] bg-gradient-to-r from-[#C7A24A] to-[#f0d080] mb-6 rounded-full" />
                      <p className="text-gray-300 text-[17px] leading-relaxed max-w-xl">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ── SUPPORTING STUDENTS ACROSS THE UAE (3-Card Grid Layout) ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-blue-50/30 to-[#0f4a9b]/5 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#0f4a9b]/5 via-[#C7A24A]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0f4a9b 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 text-[#0f4a9b] text-xs font-bold rounded-full mb-4 border border-[#0f4a9b]/10 uppercase tracking-wider">
              <MapPin className="h-3.5 w-3.5" /> Supporting Students Across the UAE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0a1f3d] leading-tight">
              <GradientHeadingText text="Online Tutoring in Every Community" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mt-3">
              Our students join lessons from communities across Dubai, Abu Dhabi, Al Ain, Sharjah & the Northern Emirates.
            </p>
          </div>

          {/* 3D Floating Card Deck with Stacked-to-Split Fan-Out Animation */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 max-w-6xl mx-auto pt-6 pb-8 items-stretch relative"
          >
            {/* Card 1: Abu Dhabi & Al Ain (Starts Stacked Center -> Fans Out Left) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: "70%", rotate: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, x: 0, rotate: -3, scale: 1, y: 16, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
              }}
              className="bg-white rounded-[28px] shadow-[0_20px_50px_rgba(15,74,155,0.12)] border border-gray-100 flex flex-col justify-between overflow-hidden hover:rotate-0 hover:translate-y-0 transition-all duration-400 ease-out group z-10"
            >
              {/* Slanted Header Banner */}
              <div className="py-5 px-6 bg-gradient-to-r from-[#0f4a9b] via-[#0d2c58] to-[#0a1f3d] text-white flex items-center justify-center gap-3 relative overflow-hidden text-center shrink-0">
                <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-inner shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  Abu Dhabi & Al Ain
                </h3>
              </div>

              {/* Card Body - Pill Tags */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-gray-50/60 to-white">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {[
                    "Khalifa City", "Mohammed Bin Zayed City", "Al Bateen", "Yas Island", 
                    "Reem Island", "Shakhbout City", "Saadiyat Island", "Al Reef", 
                    "Al Raha", "Corniche", "Al Mushrif", "Al Jimi (Al Ain)"
                  ].map((comm, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 bg-white text-[#0a1f3d] font-bold text-xs rounded-2xl shadow-sm border border-gray-200/80 hover:bg-[#0f4a9b] hover:text-white transition-all duration-200 cursor-default"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: Dubai (Appears First in Center, Elevates) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1.05, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="bg-white rounded-[28px] shadow-[0_30px_70px_rgba(199,162,74,0.22)] border-2 border-[#C7A24A]/40 flex flex-col justify-between overflow-hidden lg:-translate-y-2 z-20 hover:scale-108 transition-all duration-400 ease-out group"
            >
              {/* Gold Header Banner */}
              <div className="py-5 px-6 bg-gradient-to-r from-[#C7A24A] via-[#d4af53] to-[#a6863b] text-white flex items-center justify-center gap-3 relative overflow-hidden text-center shrink-0">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-inner shrink-0">
                  <Star className="h-5 w-5 fill-white" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  Dubai
                </h3>
              </div>

              {/* Card Body - Pill Tags */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-amber-50/30 to-white">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {[
                    "Dubai Marina", "Jumeirah", "Jumeirah Village Circle (JVC)", "Business Bay", 
                    "Emirates Hills", "Arabian Ranches", "Jumeirah Beach Residence (JBR)", 
                    "Downtown Dubai", "Motor City", "Jebel Ali", "Dubai Hills"
                  ].map((comm, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 bg-white text-[#0a1f3d] font-bold text-xs rounded-2xl shadow-sm border border-amber-200/80 hover:bg-[#C7A24A] hover:text-white transition-all duration-200 cursor-default"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 3: Sharjah & Northern Emirates (Starts Stacked Center -> Fans Out Right) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: "-70%", rotate: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, x: 0, rotate: 3, scale: 1, y: 16, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.35 } }
              }}
              className="bg-white rounded-[28px] shadow-[0_20px_50px_rgba(15,74,155,0.12)] border border-gray-100 flex flex-col justify-between overflow-hidden hover:rotate-0 hover:translate-y-0 transition-all duration-400 ease-out group z-10"
            >
              {/* Slanted Header Banner */}
              <div className="py-5 px-6 bg-gradient-to-r from-[#0a1f3d] via-[#0d2c58] to-[#0f4a9b] text-white flex items-center justify-center gap-3 relative overflow-hidden text-center shrink-0">
                <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-inner shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  Sharjah & Northern Emirates
                </h3>
              </div>

              {/* Card Body - Pill Tags */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-gray-50/60 to-white">
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {[
                    "Al Majaz (Sharjah)", "Al Nahda (Sharjah)", "Muwaileh (Sharjah)", 
                    "Al Khan (Sharjah)", "Al Qasba (Sharjah)", "Al Taawun (Sharjah)", 
                    "Ajman", "Ras Al Khaimah", "Fujairah"
                  ].map((comm, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 bg-white text-[#0a1f3d] font-bold text-xs rounded-2xl shadow-sm border border-gray-200/80 hover:bg-[#0f4a9b] hover:text-white transition-all duration-200 cursor-default"
                    >
                      {comm}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── ASK YOUR QUESTIONS ── */}
      <section className="py-12 lg:py-16 bg-gray-50 relative overflow-hidden flex justify-center">
        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-[32px] p-px overflow-hidden shadow-[0_25px_60px_rgba(15,74,155,0.18)] group transition-shadow duration-500">
            
            {/* Spinning Border Highlight */}
            <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0a1f3d_0%,#C7A24A_50%,#0f4a9b_100%)] animate-[spin_6s_linear_infinite] opacity-40 group-hover:opacity-80 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-[#0a1f3d] via-[#0d2c58] to-[#0f4a9b] rounded-[31px] p-8 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 overflow-hidden h-full">

              {/* FLOATING SCHOOL & EDUCATION BACKGROUND BADGES */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Floating Graduation Cap (Top Left) */}
                <div className="absolute top-6 left-12 w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-[#C7A24A] flex items-center justify-center shadow-lg animate-float-slow opacity-60">
                  <GraduationCap className="w-6 h-6" />
                </div>

                {/* Floating Book / Pen (Top Center) */}
                <div className="absolute top-4 left-[45%] w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-blue-300 flex items-center justify-center shadow-lg animate-float-drift animate-float-delay-1 opacity-50">
                  <PenTool className="w-5 h-5" />
                </div>

                {/* Floating Star (Top Right) */}
                <div className="absolute top-8 right-24 w-9 h-9 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 flex items-center justify-center shadow-lg animate-float-slow animate-float-delay-2 opacity-60">
                  <Star className="w-5 h-5 fill-amber-300" />
                </div>

                {/* Floating Award (Bottom Left) */}
                <div className="absolute bottom-6 left-28 w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-emerald-300 flex items-center justify-center shadow-lg animate-float-drift animate-float-delay-3 opacity-50">
                  <Award className="w-5 h-5" />
                </div>

                {/* Floating Target (Bottom Right) */}
                <div className="absolute bottom-5 right-40 w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-[#C7A24A] flex items-center justify-center shadow-lg animate-float-slow animate-float-delay-1 opacity-60">
                  <Target className="w-6 h-6" />
                </div>

                {/* Floating Lightbulb (Bottom Center) */}
                <div className="absolute bottom-4 left-[55%] w-9 h-9 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-yellow-300 flex items-center justify-center shadow-lg animate-float-drift opacity-40">
                  <Lightbulb className="w-5 h-5" />
                </div>
              </div>

              {/* Ambient Glow Orbs */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#C7A24A]/20 rounded-full blur-[90px] pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/20 rounded-full blur-[90px] pointer-events-none" />

              {/* Left: 15 Mins Pop-up Box */}
              <div className="flex-shrink-0 relative z-20 w-full md:w-auto flex justify-center">
                <div className="relative group/time cursor-default">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#C7A24A] to-[#25D366] rounded-[24px] blur opacity-30 group-hover/time:opacity-60 transition duration-500" />
                  
                  <div className="relative flex flex-col items-center justify-center gap-3 rounded-[22px] border border-white/15 bg-white/10 backdrop-blur-xl px-7 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[150px] transition-transform duration-500 hover:-translate-y-1">
                    
                    {/* Live Online Badge */}
                    <div className="absolute -top-3 flex items-center justify-center bg-[#25D366] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg shadow-green-500/30 z-20">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse" />
                      ~15m Reply
                    </div>

                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 flex items-center justify-center text-white mb-1 shadow-inner p-3">
                      <Clock className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-4xl font-black text-white tracking-tight leading-none mb-1 drop-shadow-md">
                        15
                      </span>
                      <span className="text-xs font-bold text-[#C7A24A] uppercase tracking-widest">
                        Minutes
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle: Content */}
              <div className="flex-1 text-center md:text-left relative z-20 max-w-lg">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                  Have a Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A24A] via-[#f3d994] to-[#C7A24A]">Question?</span>
                </h2>
                <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed font-light">
                  Through our <span className="font-semibold text-white">Ask Your Questions</span> feature, students can send questions directly to tutors and typically receive teaching support or worked solutions within <span className="font-semibold text-[#C7A24A]">around 15 minutes</span>.
                </p>
              </div>

              {/* Right: WhatsApp CTA Button */}
              <div className="flex-shrink-0 relative z-20 w-full md:w-auto flex justify-center">
                <a 
                  href="https://wa.me/971561249005?text=Hello%20Ustaad!%20I%20have%20a%20quick%20question%20regarding%20online%20tutoring." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Chat with Ustaad on WhatsApp"
                  className="group/wa relative block"
                >
                  <div className="absolute inset-0 bg-[#25D366] rounded-full blur-[18px] opacity-40 group-hover/wa:opacity-80 group-hover/wa:blur-[25px] transition-all duration-300" />
                  <div className="relative flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all duration-300 transform group-hover/wa:scale-[1.04] group-hover/wa:-translate-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                    Chat on WhatsApp
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <TeamSection />

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
                Questions About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Ustaad</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Everything you need to know about our approach and team.
              </p>
            </div>
            {/* Right: Accordion */}
            <div>
              <FAQAccordion faqs={aboutSchemaFaqs} />
            </div>
          </div>
        </div>
      </section>


      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
          animation-delay: -3s;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-float-delayed {
            animation: none;
          }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes radar-pulse {
          0%, 15%, 100% { transform: scale(1); background: white; color: #374151; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); border-color: #e5e7eb; z-index: 10; }
          3% { transform: scale(1.15); background: #0f4a9b; color: white; box-shadow: 0 10px 25px -5px rgba(15,74,155,0.5); border-color: #0f4a9b; z-index: 50; }
        }
      `}</style>
    </Layout>
  );
}
