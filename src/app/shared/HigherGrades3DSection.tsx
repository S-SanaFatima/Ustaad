import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { TypewriterHeadingText } from './TypewriterHeadingText';

export function HigherGrades3DSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inViewRef = useRef(false);
  const [animCycle, setAnimCycle] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!inViewRef.current) {
            setAnimCycle((prev) => prev + 1);
          }
          inViewRef.current = true;
        } else {
          inViewRef.current = false;
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="higher-grades-shift"
      className="py-14 lg:py-20 bg-white relative overflow-hidden"
    >
      {/* Subtle Ambient Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#0f4a9b]/5 via-transparent to-[#C7A24A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-3 tracking-tight">
            <TypewriterHeadingText
              key={`hsc-title-${animCycle}`}
              text="How Subjects Change in Higher Grades"
              highlightLastWord={false}
              charDelay={0.025}
              delay={0}
            />
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mx-auto" />
        </div>

        {/* Luxury White & Slate Glassmorphic Card */}
        <motion.div
          key={`hsc-card-${animCycle}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-50/90 via-white to-blue-50/30 border border-slate-200/90 shadow-[0_12px_45px_rgba(15,74,155,0.08)] p-7 sm:p-10 lg:p-12"
        >
          {/* Top Gold & Navy Ambient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0f4a9b] via-[#1e5ba8] to-[#C7A24A]" />

          {/* Subtle Decorative Ambient Glows */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#0f4a9b]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative space-y-6 text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed">
            {/* Paragraph 1 with Typewriter Animation */}
            <p className="font-normal leading-relaxed text-justify">
              <TypewriterHeadingText
                key={`hsc-p1-a-${animCycle}`}
                text="As students reach higher grades, subjects become more detailed, quicker to cover, and more demanding in exams. Lower grades focus on core ideas and routine practice. Higher levels, from "
                highlightLastWord={false}
                charDelay={0.006}
                delay={0.15}
                className="inline"
              />
              <a
                href="/curriculum"
                className="text-[#0f4a9b] font-bold underline decoration-[#C7A24A] decoration-2 underline-offset-2 hover:text-[#0a3a79] transition-colors inline"
              >
                <TypewriterHeadingText
                  key={`hsc-p1-link-${animCycle}`}
                  text="IGCSE and GCSE through to A-Level, IB, and AP"
                  highlightLastWord={false}
                  charDelay={0.006}
                  delay={1.25}
                  className="inline"
                />
              </a>
              <TypewriterHeadingText
                key={`hsc-p1-b-${animCycle}`}
                text=", expect students to solve unfamiliar questions, write fuller answers, and apply ideas on their own."
                highlightLastWord={false}
                charDelay={0.006}
                delay={1.52}
                className="inline"
              />
            </p>

            {/* Paragraph 2 with Typewriter Animation */}
            <p className="font-normal leading-relaxed text-justify">
              <TypewriterHeadingText
                key={`hsc-p2-${animCycle}`}
                text="The shift depends heavily on the subject. Problem-solving subjects like Mathematics and Physics need speed and precision under pressure. Content-heavy subjects like Biology and Chemistry test how much students can manage and recall. Writing-based subjects like English, Economics, and Business Studies reward interpretation and longer answers."
                highlightLastWord={false}
                charDelay={0.006}
                delay={0.5}
                className="inline"
              />
            </p>

            {/* Paragraph 3 with Typewriter Animation */}
            <p className="font-normal leading-relaxed text-justify">
              <TypewriterHeadingText
                key={`hsc-p3-${animCycle}`}
                text="Many students struggle in this jump, not from a lack of effort, but because the style of teaching and assessment changes at each level. This is why getting the right help early, as a subject steps up a level, matters more than catching up later."
                highlightLastWord={false}
                charDelay={0.006}
                delay={0.9}
                className="inline"
              />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
