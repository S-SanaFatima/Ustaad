import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Award, Blocks, CheckCircle, FileSearch, GraduationCap, HandHeart, Lightbulb,
  PenTool, Search, Star, Target, TrendingUp, UserCheck, Users, Calendar,
  Globe, Clock, Repeat, MapPin, MessageCircle, ChevronDown, ChevronUp,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

export default function AboutPage() {
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [whoWeAreExpanded, setWhoWeAreExpanded] = useState(false);
  const [believeExpanded, setBelieveExpanded] = useState(false);
  return (
    <Layout>
      <SEOHead
        title="About Ustaad | Private Tutoring UAE Since 2015"
        description="Learn about Ustaad, UAE's trusted private tutoring service since 2015. Over 2,500 students supported across Dubai, Abu Dhabi, Sharjah and all Emirates. Expert 1-to-1 tutors."
        canonical="/about"
        ogImage="/UpdatedImages/experienced-uae-educator-online-tutoring-session.webp"
        schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])]}
      />
      {/* ── HERO ── */}
      <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C7A24A]/10 to-[#A8892A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20 shadow-[0_0_15px_rgba(199,162,74,0.15)]">
                <Users className="h-4 w-4" /> About Ustaad
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text="Structured Learning. Real Academic Progress." />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Ustaad helps students build stronger study foundations, work through learning gaps with patience, and move forward with steadier performance across the school year.
              </p>
              <HeroCTABlock className="mb-4" trustText="✦ No Commitment · Cancel Anytime">
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

      <StatsBar />

      {/* ── WHO WE ARE + OUR STORY ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Who We Are */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className="order-2 lg:order-1 relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(15,74,155,0.1)] border-8 border-white h-[400px] lg:h-[500px] group">
              <img
                src="/UpdatedImages/ustaad-personalised-one-to-one-online-lesson-abu-dhabi.webp"
                alt="Ustaad educator delivering a personalised one-to-one online lesson to a UAE student based in Abu Dhabi"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              {/* Floating stat */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-[#0a1f3d]">2500+</div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Students Guided</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4a9b]/5 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/10">
                Who We Are
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#0a1f3d] mb-6 leading-tight">
                <GradientHeadingText text="Led by Experienced UAE Educators" />
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Ustaad is a UAE online tutoring platform led by experienced educators who have supported more than 2,500 students across Dubai, Abu Dhabi, Al Ain, and beyond through personalised one to one online tutoring over the past decade.
              </p>
              {!whoWeAreExpanded && (
                <button
                  onClick={() => setWhoWeAreExpanded(true)}
                  className="text-[#0f4a9b] font-bold text-sm mt-2 underline active:underline flex items-center gap-1"
                >
                  Read More <ChevronDown className="h-4 w-4" />
                </button>
              )}
              {whoWeAreExpanded && (
                <>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Our tutors are qualified and certified educators trusted by UAE families across British, American, and IB curriculum programmes. Many come from classroom teaching and exam preparation backgrounds, so they understand what students are expected to do in real assessments, not just in homework tasks.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We believe meaningful academic support goes beyond improving grades. It also helps students build deeper understanding, stronger study habits, independent thinking, and greater exam confidence over time.
                  </p>
                  <button
                    onClick={() => setWhoWeAreExpanded(false)}
                    className="text-[#0f4a9b] font-bold text-sm mt-4 underline flex items-center gap-1"
                  >
                    Read Less <ChevronUp className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Our Story */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C7A24A]/10 text-[#A8892A] text-sm font-bold rounded-full mb-6 border border-[#C7A24A]/20">
                OUR STORY
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-[#0a1f3d] mb-6 leading-tight">
                <GradientHeadingText text="Closing the Gap in Learning" />
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We founded Ustaad after watching capable students slowly lose confidence when learning gaps were left unaddressed for too long.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Over the years, we noticed that many students struggle academically not because of lack of ability, but because they do not always receive enough individual academic support. In many classrooms, teachers manage 25 to 35 students at once. Even experienced teachers can struggle to stop for every question, revisit missed foundations, or adapt explanations for each learner within the time available.
              </p>
              {!storyExpanded && (
                <button
                  onClick={() => setStoryExpanded(true)}
                  className="text-[#0f4a9b] font-bold text-sm mt-2 underline active:underline flex items-center gap-1"
                >
                  Read More <ChevronDown className="h-4 w-4" />
                </button>
              )}
              {storyExpanded && (
                <>
                  <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-6">
                    That gap matters more than many parents realise. By the time frustration becomes visible at home, confidence has often already started to decline.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Ustaad was created to help close those gaps through personalised one-to-one online tutoring that gives students more space to think, ask questions, and work through confusion without feeling rushed.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Today, what started as direct academic support has grown into a trusted UAE online tutoring platform supporting families across Dubai, Abu Dhabi, Al Ain, Sharjah, and beyond.
                  </p>
                  <button
                    onClick={() => setStoryExpanded(false)}
                    className="text-[#0f4a9b] font-bold text-sm mt-4 underline flex items-center gap-1"
                  >
                    Read Less <ChevronUp className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>

            <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(15,74,155,0.1)] border-8 border-white h-[400px] lg:h-[500px] group">
              <img
                src="/UpdatedImages/uae-students-closing-learning-gaps-academic-support.webp"
                alt="UAE students working through learning gaps with focused academic support from a qualified online tutor"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1200} height={800} loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(199,162,74,0.5)]">
                  <Lightbulb className="h-7 w-7" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHAT WE BELIEVE ABOUT LEARNING ── */}
      <section className="py-12 bg-[#F4F8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Outer wrapper, overflow visible so image can pop out */}
          <div className="relative">

            {/* Banner card, does NOT clip overflow */}
            <div className="relative bg-white rounded-[32px] shadow-[0_8px_40px_rgba(15,74,155,0.09)] border border-[#0f4a9b]/8 overflow-visible">
              <div className="grid lg:grid-cols-[0.75fr_1.25fr] items-center min-h-[380px]">

                {/* LEFT, image overflowing top & bottom */}
                <div className="hidden lg:flex items-center justify-center relative overflow-visible px-0">
                  {/* Image frame, overflows the card significantly */}
                  {/* Gradient border wrapper */}
                  <div
                    className="relative z-10 rounded-r-[22px] rounded-l-[32px] p-[5px] shadow-[0_24px_70px_rgba(15,74,155,0.25)]"
                    style={{ width: '100%', height: '560px', marginTop: '-90px', marginBottom: '-90px', background: 'linear-gradient(160deg, #0f4a9b, #0a3a79)' }}
                  >
                  <div className="relative rounded-[18px] overflow-hidden w-full h-full">
                    <img
                      src="/UpdatedImages/understanding-focused-tutoring-igcse-mathematics-uae.webp"
                      alt="UAE student grasping an IGCSE Mathematics concept through understanding-focused tutoring instead of rote memorisation"
                      className="w-full h-full object-cover object-center"
                width={1200} height={800} loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/20 via-transparent to-transparent" />
                  </div>
                  </div>
                </div>

                {/* Mobile-only image, normal flow */}
                <div className="lg:hidden rounded-t-[32px] overflow-hidden h-[260px]">
                  <img
                    src="/UpdatedImages/understanding-focused-tutoring-igcse-mathematics-uae.webp"
                    alt="UAE student applying chemistry and physics concepts to unfamiliar exam questions through guided AP-level tutoring"
                    className="w-full h-full object-cover"
                width={1200} height={800} loading="lazy" />
                </div>

                {/* RIGHT, Text content */}
                <div className="px-8 py-8 lg:py-10 lg:pr-12 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4a9b]/5 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/10">
                    WHAT WE BELIEVE ABOUT LEARNING
                  </div>
                  <h2 className="text-3xl lg:text-[38px] font-extrabold text-[#0a1f3d] mb-4 leading-tight">
                    <GradientHeadingText text="Understanding matters more than memorising" />
                  </h2>
                  <div className="w-12 h-[3px] bg-gradient-to-r from-[#C7A24A] to-[#f0d080] rounded-full mb-5" />
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
                    At Ustaad, we believe students learn more effectively when they genuinely understand a concept instead of only memorising formulas or repeated question patterns.
                  </p>
 <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-4">
                    We have seen many students complete familiar classwork confidently, then struggle when exam questions change the wording or test application differently. This happens often in subjects like IGCSE Mathematics, IGCSE Physics, AP Physics, AP Chemistry, and Biology.
                  </p>
                  {!believeExpanded && (
                    <button
                      onClick={() => setBelieveExpanded(true)}
                      className="text-[#0f4a9b] font-bold text-sm mt-2 underline active:underline flex items-center gap-1"
                    >
                      Read More <ChevronDown className="h-4 w-4" />
                    </button>
                  )}
                  {believeExpanded && (
                    <>
                      <p className="text-gray-500 text-sm lg:text-base leading-relaxed text-justify mb-4">
                        Our tutors spend time helping students understand why a method works, not only what answer to write down. Across British, American, and IB curriculum programmes, lessons focus heavily on real understanding, organised thinking, problem solving, and exam confidence.
                      </p>
                      <p className="text-gray-500 text-sm lg:text-base leading-relaxed text-justify">
                        For many students, that shift changes not only their academic performance, but also how they feel about the subject itself.
                      </p>
                      <button
                        onClick={() => setBelieveExpanded(false)}
                        className="text-[#0f4a9b] font-bold text-sm mt-4 underline flex items-center gap-1"
                      >
                        Read Less <ChevronUp className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>

              </div>
            </div>

          </div>

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
              <div className="space-y-6 max-w-6xl mx-auto">
                {/* Top row, 2 cards */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {features.slice(0, 2).map((f, i) => (
                    <div key={i} className="relative bg-white border border-[#E5E7EB] rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 active:shadow-[0_20px_50px_rgba(15,74,155,0.15)] active:-translate-y-1 active:ring-2 active:ring-inset active:ring-[#0f4a9b]/50 transition-all duration-300 group overflow-hidden">
                      <div className="absolute top-6 right-6 text-[64px] font-black text-[#0f4a9b]/5 leading-none select-none pointer-events-none">{f.num}</div>
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(15,74,155,0.35)] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#0f4a9b]/10 transition-all duration-300">
                        {f.icon}
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2 leading-tight">{f.title}</h3>
                      <div className="w-8 h-[2px] bg-[#C7A24A] mb-3" />
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
                {/* Bottom row, 2 cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {features.slice(2).map((f, i) => (
                    <div key={i} className="relative bg-white border border-[#E5E7EB] rounded-[24px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 active:shadow-[0_20px_50px_rgba(15,74,155,0.15)] active:-translate-y-1 active:ring-2 active:ring-inset active:ring-[#0f4a9b]/50 transition-all duration-300 group overflow-hidden">
                      <div className="absolute top-6 right-6 text-[64px] font-black text-[#0f4a9b]/5 leading-none select-none pointer-events-none">{f.num}</div>
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(15,74,155,0.35)] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#0f4a9b]/10 transition-all duration-300">
                        {f.icon}
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2 leading-tight">{f.title}</h3>
                      <div className="w-8 h-[2px] bg-[#C7A24A] mb-3" />
                      <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

        </div>
      </section>

      {/* ── SUPPORTING STUDENTS ACROSS THE UAE ── */}
      <section className="relative overflow-hidden min-h-[520px] lg:min-h-[640px] flex flex-col justify-end lg:justify-center">
        <img
          src="/UpdatedImages/ustaad-online-tutoring-students-yas-island-reem-island-dubai-marina.webp"
          alt="Ustaad online tutoring student studying from home in Yas Island, Reem Island, Khalifa City or Dubai Marina"
          className="absolute inset-0 w-full h-full object-cover object-[55%_25%] sm:object-[50%_30%] lg:object-[100%_center]"
                width={1200} height={800} loading="lazy" />

        {/* Mobile / tablet: keep upper image visible; darken only where copy sits */}
        <div
          className="absolute inset-0 lg:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,31,61,0.05) 0%, rgba(10,31,61,0.08) 28%, rgba(10,31,61,0.55) 52%, rgba(10,31,61,0.92) 72%, #0a1f3d 100%)',
          }}
        />
        <div
          className="absolute inset-0 lg:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(10,31,61,0.88) 0%, rgba(10,31,61,0.75) 70%, rgba(10,31,61,0.2) 100%)',
          }}
        />

        {/* Desktop: navy on left (copy) → transparent on right (photo) */}
        <div
          className="absolute inset-0 hidden lg:block pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, #0a1f3d 0%, #0a1f3d 38%, rgba(10,31,61,0.75) 52%, rgba(10,31,61,0) 65%)',
          }}
        />
        <div className="absolute inset-0 hidden lg:block pointer-events-none bg-gradient-to-b from-[#0a1f3d]/30 via-transparent to-[#0a1f3d]/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-12 lg:px-16 pt-36 sm:pt-44 pb-10 sm:pb-14 lg:py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 text-[#C7A24A] text-sm font-bold rounded-full mb-5 sm:mb-6 border border-[#C7A24A]/35 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
              <MapPin className="h-4 w-4" /> SUPPORTING STUDENTS ACROSS THE UAE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-white mb-4 leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
              Online tutoring that reaches<br className="hidden sm:block" /> every community
            </h2>
            <div className="w-14 h-[3px] rounded-full bg-gradient-to-r from-[#C7A24A] to-[#f0d080] mb-5 sm:mb-6" />
            <p className="text-blue-50 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
              Our students join lessons from communities across the UAE. Alongside regular tutoring sessions, we also support students during independent study when they feel stuck on a question or topic.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2">
              {[
                "Khalifa City", "Mohammed Bin Zayed City", "Al Bateen",
                "Yas Island", "Reem Island", "Jumeirah", "Shakhbout City",
                "JVC", "Business Bay", "Emirates Hills",
                "Arabian Ranches", "JBR", "Dubai Marina",
                "Motor City", "Jebel Ali",
              ].map((area) => (
                <span
                  key={area}
                  className="flex items-center justify-center text-center px-3 py-2 bg-white/15 text-white/90 text-xs font-semibold rounded-lg border border-white/20 hover:bg-white/25 hover:text-white transition-colors cursor-default backdrop-blur-md shadow-sm min-h-[36px] sm:min-h-0"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ASK YOUR QUESTIONS ── */}
      <section className="py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative rounded-3xl bg-[#0a1f3d] p-px overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] group hover:shadow-[0_30px_80px_rgba(15,74,155,0.25)] transition-shadow duration-500">

            <div className="absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,#0a1f3d_0%,#C7A24A_50%,#0a1f3d_100%)] animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] backdrop-blur-xl rounded-[23px] p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden h-full">

              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C7A24A]/20 rounded-full blur-[60px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />

              <div className="flex-shrink-0 relative z-10">
                <div className="flex flex-col items-center justify-center gap-3 rounded-[20px] border border-white/15 bg-white/[0.07] backdrop-blur-md px-5 py-5 sm:px-6 sm:py-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)] min-w-[104px] sm:min-w-[116px] transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-[0_0_24px_rgba(15,74,155,0.45)]">
                    <MessageCircle className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                      15
                    </span>
                    <span className="text-lg sm:text-xl font-extrabold text-[#C7A24A]">
                      Minutes
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  Ask Your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C7A24A] to-[#A8892A]">
                    Questions
                  </span>
                </h2>
                <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                  Through our <span className="font-semibold text-white">&ldquo;Ask Your Questions&rdquo;</span> support feature, students can send questions directly to tutors and typically receive teaching support or worked solutions within <span className="font-semibold text-[#C7A24A]">around 15 minutes</span>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT PARENTS SAY ── */}
      <section id="reviews" className="py-20 bg-[#F7F7F7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="What Parents Say" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Real feedback from UAE families who've seen genuine progress and confidence grow.
            </p>
          </div>

          {(() => {
            const reviews = [
              { name: "Fares Al Kindi", initials: "FK", location: "Abu Dhabi, UAE", text: "I had a great experience with Ustaad. They truly provide some of the Best Tutors in Abu Dhabi. The teaching style is clear, professional, and very supportive." },
              { name: "Sumayya Alamri", initials: "SA", location: "Abu Dhabi, UAE", text: "I had very good experience with Ustad for my daughter… her math teacher is one of the best tutors I experienced. He explains the concepts very well." },
              { name: "Wadeema Al M", initials: "WA", location: "Abu Dhabi, UAE", text: "Very good tutoring institute with supportive tutor and clear teaching methods. Would definitely recommend to anyone looking for quality education." },
              { name: "Humaid Khalaf", initials: "HK", location: "Abu Dhabi, UAE", text: "very good site if you want a good teacher for your studies. The tutors really know how to make difficult topics easy to understand." },
              { name: "Zayed Al Teneiji", initials: "ZT", location: "Abu Dhabi, UAE", text: "Best tutoring institution in Abu Dhabi. The tutors are extremely knowledgeable and really care about student success in exams." },
              { name: "Nouf Al Mansouri", initials: "NM", location: "Abu Dhabi, UAE", text: "Being a teacher, I found them as the most professional and organized service provider, they really care and organize lessons as per student learning speed." },
              { name: "Elyazia Alkaabi", initials: "EA", location: "Abu Dhabi, UAE", text: "He is a very good teacher, he makes the lessons easier to understand and has good ways of getting the information in my mind easily." },
              { name: "Omar Howwar", initials: "OH", location: "Dubai, UAE", text: "Sincere, encouraging, and passionate for his work. He put sufficient effort to elevate the education and knowledge of my son significantly." },
              { name: "Mohamed al Hamed", initials: "MH", location: "Abu Dhabi, UAE", text: "Ustaad is the best online institute in Abu Dhabi, they tutored me throughout university and are now consistently tutoring my siblings and cousins." },
              { name: "James T.", initials: "JT", location: "Dubai, UAE", text: "I started tutoring for A-Level Physics about three months before my exams. My tutor was incredibly patient and broke down complex topics like electromagnetic induction into simple, intuitive steps. I ended up getting an A* which I genuinely didn't think was possible." },
              { name: "Ahmed Als", initials: "AA", location: "Abu Dhabi, UAE", text: "One of the best math tutors in Abu Dhabi, his teaching method is very focused and effective. He breaks down complex mathematical concepts into simple steps and ensures full understanding." },
            ];
            const ReviewCard = ({ r, idx }: { r: typeof reviews[0], idx: string }) => (
              <div className="shrink-0 bg-white rounded-[12px] border border-[#E5E7EB] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(15,74,155,0.12)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 active:shadow-[0_12px_40px_rgba(15,74,155,0.12)] active:-translate-y-1 active:ring-2 active:ring-inset active:ring-[#0f4a9b]/50 transition-all duration-300 flex flex-col w-[350px] sm:w-[400px] whitespace-normal relative">
                <div className="absolute top-4 right-4 text-[#E5E7EB] opacity-50">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.63-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.768-.695-1.327-.825-.55-.13-1.07-.14-1.54-.03-.16-.94.1-1.955.76-3.02.66-1.066 1.515-1.868 2.558-2.404L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.63-.576.94-1.365.94-2.368h.003z"/></svg>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[1,2,3,4,5].map(j => <Star key={j} className="h-5 w-5 fill-[url(#goldGradientAbout)]" stroke="none" />)}
                </div>
                <p className="text-[#6B7280] text-[15px] leading-relaxed mb-6 flex-grow">"{r.text}"</p>
                <div className="border-t border-[#E5E7EB] mb-4"></div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#F97316] to-[#EA580C] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md notranslate" translate="no">
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-bold text-[#1F3F66] text-sm notranslate" translate="no">{r.name}</div>
                      <div className="text-xs text-[#9CA3AF] flex items-center gap-1 notranslate" translate="no">
                        <span className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {r.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#4A7EC7] flex items-center justify-center shadow-sm">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-[#0f4a9b] to-[#4A7EC7] bg-clip-text text-transparent">Verified</span>
                  </div>
                </div>
              </div>
            );
            return (
              <div className="flex w-full overflow-hidden group pb-8">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="goldGradientAbout" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FACC15" />
                      <stop offset="100%" stopColor="#EAB308" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex shrink-0 animate-marquee-slow gap-6 items-stretch pr-6 min-w-full py-2">
                  {reviews.map((r, i) => <ReviewCard key={`r1-${i}`} r={r} idx={`r1-${i}`} />)}
                </div>
                <div aria-hidden="true" className="flex shrink-0 animate-marquee-slow gap-6 items-stretch pr-6 min-w-full py-2">
                  {reviews.map((r, i) => <ReviewCard key={`r2-${i}`} r={r} idx={`r2-${i}`} />)}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      <FinalCTA
        title="Better Results Start Here"
        subtitle="Find the right tutor for your child."
        button1Text="Start Your First Session Today"
        button2Text="Ask Your Question"
      />
      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 30s linear infinite;
        }
      `}</style>
    </Layout>
  );
}