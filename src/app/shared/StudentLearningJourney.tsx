import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, LucideIcon } from 'lucide-react';

interface JourneyPhase {
  icon: LucideIcon;
  phase: string;
  studentInfo: string;
  short: string;
  full: string;
}

interface LearningJourneyData {
  title: string;
  subtitle: string;
  story: JourneyPhase[];
  disclaimer: string;
}

interface StudentLearningJourneyProps {
  title: string;
  subtitle?: string;
  description: string;
  steps: LearningJourneyData;
  badgeText: string;
  badgeIcon: LucideIcon;
  ctaText?: string;
  ctaHref?: string;
}

export default function StudentLearningJourney({ 
  steps, 
  badgeText,
  badgeIcon: BadgeIcon,
  ctaText,
  ctaHref
}: StudentLearningJourneyProps) {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-[#F4F8FD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent rounded-full mb-4 border border-[#0f4a9b]/10 text-[#0f4a9b]">
              <BadgeIcon className="h-4 w-4" />
              <span className="text-sm font-bold">{steps.subtitle || badgeText}</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              {steps.title}
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {steps.disclaimer}
            </p>

            {/* Expandable Journey Phases */}
            <div className="space-y-3">
              {steps.story.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedPhase(expandedPhase === i ? null : i)}
                    className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-50/50 transition"
                  >
                    <div className="w-14 h-14 bg-[#E2E8F0] rounded-2xl flex items-center justify-center group-hover:bg-[#0f4a9b]/10 group-hover:scale-110 transition-all duration-300">
                      <phase.icon className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#d4a574] tracking-wider mb-1">{phase.phase}</p>
                      <h3 className="text-lg font-extrabold text-[#1F3F66]">{phase.studentInfo}</h3>
                    </div>
                    {expandedPhase === i ? (
                      <Minus className="h-5 w-5 text-[#0f4a9b] flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#0f4a9b] flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedPhase === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pl-20">
                          <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: phase.full }}></p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {ctaText && ctaHref && (
              <div className="mt-6">
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-xl hover:brightness-110 hover:shadow-xl hover:shadow-[#C7A24A]/40 transition transform hover:-translate-y-0.5 active:scale-95 px-8 py-3.5 text-sm"
                >
                  {ctaText}
                </a>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                alt="Student learning journey"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4a9b]/60 via-[#0f4a9b]/30 to-transparent"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-[#0f4a9b]/20 to-[#d4a574]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
