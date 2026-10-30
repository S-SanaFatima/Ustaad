import React from 'react';
import { motion } from 'motion/react';

export default function APFreeTrialWhiteboardSection() {
  const steps = [
    {
      num: '01',
      title: 'Name the AP Courses',
      text: 'Tell us which AP courses your child takes and the score they are aiming for, by form or WhatsApp.',
    },
    {
      num: '02',
      title: 'Choose a Lesson Time',
      text: 'We suggest a tutor for that course and offer lesson times that fit around school.',
    },
    {
      num: '03',
      title: 'Try a Real AP Question',
      text: 'In the first lesson, the tutor works through a recent free-response question with your child.',
    },
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-[#fcfdff] to-[#f6f9fe] select-none overflow-hidden border-t border-gray-100 relative">
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[280px] bg-[#0f4a9b]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-4 right-1/4 w-[350px] h-[200px] bg-[#C7A24A]/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── SECTION HEADER ── */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-14 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center px-3.5 sm:px-4 py-1 bg-[#e8f1fd] rounded-full mb-2.5 sm:mb-3 border border-[#bfdbfe]/70 shadow-[0_2px_8px_rgba(15,74,155,0.06)]">
            <span className="text-[#0f4a9b] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.16em]">
              GET STARTED
            </span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[36px] font-black text-[#0a1f3d] mb-1.5 sm:mb-2 leading-tight tracking-tight">
            How Your First AP Session <span className="text-[#0f4a9b]">Works</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed font-normal">
            Three steps, with 15 free minutes added to the first lesson.
          </p>
        </div>

        {/* ── 3 STEP MEDALLIONS STEPPER (Shows in 3 columns on both Mobile and Desktop) ── */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Connecting Wavy Lines across all screen sizes */}
          <div className="block absolute top-[18px] sm:top-[28px] lg:top-[32px] left-[12%] right-[12%] h-6 sm:h-8 w-[76%] z-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 600 30" fill="none" preserveAspectRatio="none">
              {/* Soft blue curved sine line */}
              <path d="M 0,15 Q 150,5 300,15 T 600,15" stroke="#bfdbfe" strokeWidth="1.8" strokeLinecap="round" />
              {/* Soft gold curved sine line */}
              <path d="M 0,15 Q 150,25 300,15 T 600,15" stroke="#E5C368" strokeWidth="1.6" strokeOpacity="0.85" strokeLinecap="round" />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Golden Embossed Circular Node */}
                <div className="w-11 h-11 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full p-[2.5px] sm:p-[3.5px] bg-gradient-to-br from-[#f3db9c] via-[#C7A24A] to-[#8c6d1d] shadow-[0_6px_18px_rgba(199,162,74,0.35),0_2px_6px_rgba(10,37,88,0.1)] flex items-center justify-center mb-2.5 sm:mb-4 lg:mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#163f7a] via-[#0d2a54] to-[#071936] flex items-center justify-center shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.5)] border border-[#2b599c]/40">
                    <span className="text-white text-xs sm:text-lg lg:text-[22px] font-black tracking-tight drop-shadow-sm">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-[11px] sm:text-base lg:text-lg font-black text-[#0a1f3d] mb-1 sm:mb-2 tracking-tight group-hover:text-[#0f4a9b] transition-colors leading-tight sm:leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-gray-600 text-[9.5px] sm:text-[13px] lg:text-[13.5px] leading-tight sm:leading-relaxed font-normal max-w-[270px] mx-auto">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
