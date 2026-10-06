import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Atom, Compass, Sparkles, Award, Layers, TrendingUp } from 'lucide-react';

export type RelatedLink = { label: string; href: string; note?: string };

type Props = {
  subjects?: RelatedLink[];
  curricula?: RelatedLink[];
  breadcrumbs?: { name: string; href: string }[];
  title?: string;
  subtitle?: string;
};

function getSubjectIcon(label: string, note?: string) {
  const text = `${label} ${note || ''}`.toLowerCase();
  if (text.includes('math') || text.includes('calculus') || text.includes('mechanic')) {
    return Compass;
  }
  if (text.includes('chem')) {
    return Sparkles;
  }
  if (text.includes('phys') || text.includes('gradient')) {
    return Atom;
  }
  if (text.includes('bio') || text.includes('medicine')) {
    return Sparkles;
  }
  if (text.includes('econ') || text.includes('business') || text.includes('finance') || text.includes('stat')) {
    return TrendingUp;
  }
  return BookOpen;
}

function getCurriculumIcon(label: string, note?: string) {
  const text = `${label} ${note || ''}`.toLowerCase();
  if (text.includes('hl') || text.includes('higher level') || text.includes('dp') || text.includes('diploma') || text.includes('ib')) {
    return Award;
  }
  if (text.includes('myp') || text.includes('middle years')) {
    return Sparkles;
  }
  if (text.includes('a-level') || text.includes('alevel') || text.includes('british')) {
    return GraduationCap;
  }
  if (text.includes('igcse') || text.includes('gcse') || text.includes('sl')) {
    return Layers;
  }
  return GraduationCap;
}

function FloatingBackgroundIcon({
  Icon,
  theme = 'blue',
  index = 0,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  theme: 'blue' | 'gold';
  index: number;
}) {
  const duration = 4.2 + (index % 3) * 1.4;
  const delay = (index % 4) * 0.35;
  const floatDistance = 7 + (index % 2) * 3;
  const rotateAngle = index % 2 === 0 ? 10 : -10;

  const colorClass =
    theme === 'blue'
      ? 'text-[#0f4a9b]/30 group-hover:text-[#0f4a9b]/60'
      : 'text-[#C7A24A]/45 group-hover:text-[#9E7B24]/75';

  return (
    <motion.div
      className={`absolute right-1.5 -bottom-1 sm:right-2.5 sm:-bottom-0.5 w-14 h-14 sm:w-16 sm:h-16 ${colorClass} pointer-events-none flex items-center justify-center transition-colors duration-300`}
      animate={{
        y: [0, -floatDistance, floatDistance * 0.3, 0],
        x: [0, index % 2 === 0 ? 4 : -4, index % 2 === 0 ? -2 : 2, 0],
        rotate: [0, rotateAngle, -rotateAngle * 0.5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    >
      <Icon className="w-full h-full stroke-[1.75] transform transition-transform duration-300 group-hover:scale-115 group-hover:rotate-6" />
    </motion.div>
  );
}

export default function RelatedContent({
  subjects = [],
  curricula = [],
  title = 'Connected Learning Pathways',
  subtitle = 'Explore complementary subjects and accredited curricula tailored for Dubai & UAE students.',
}: Props) {
  if (!subjects.length && !curricula.length) return null;

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-[#f8fafc] border-t border-slate-200/80 relative overflow-hidden">
      {/* Subtle decorative background lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/35 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Related Subjects Column */}
          {subjects.length > 0 && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-3.5 mb-3.5 border-b border-slate-100">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-100/80 flex items-center justify-center text-[#0f4a9b] shadow-2xs shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0a1f3d] leading-tight">
                      Related Subjects
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      Neighbouring disciplines students frequently pair
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {subjects.map((s, idx) => {
                    const Icon = getSubjectIcon(s.label, s.note);
                    return (
                      <a
                        key={s.href + s.label}
                        href={s.href}
                        className="group relative block p-3.5 sm:p-4 rounded-xl bg-slate-50/70 hover:bg-blue-50/50 border border-slate-200/70 hover:border-blue-200 hover:shadow-xs transition-all duration-200 text-left overflow-hidden"
                      >
                        {/* Continuously Animated Floating Background Icon */}
                        <FloatingBackgroundIcon
                          Icon={Icon}
                          theme="blue"
                          index={idx}
                        />

                        <div className="relative z-10 pr-6">
                          <div className="text-xs sm:text-[13.5px] font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug">
                            {s.label}
                          </div>

                          {s.note && (
                            <p className="text-[11px] sm:text-xs text-slate-500 group-hover:text-slate-600 mt-0.5 leading-snug font-normal">
                              {s.note}
                            </p>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Related Curricula Column */}
          {curricula.length > 0 && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-3.5 mb-3.5 border-b border-slate-100">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#C7A24A]/10 border border-[#C7A24A]/25 flex items-center justify-center text-[#9E7B24] shadow-2xs shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0a1f3d] leading-tight">
                      Related Curricula
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                      Syllabus tracks matching your school's board
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {curricula.map((c, idx) => {
                    const Icon = getCurriculumIcon(c.label, c.note);
                    return (
                      <a
                        key={c.href + c.label}
                        href={c.href}
                        className="group relative block p-3.5 sm:p-4 rounded-xl bg-slate-50/70 hover:bg-amber-50/50 border border-slate-200/70 hover:border-[#C7A24A]/40 hover:shadow-xs transition-all duration-200 text-left overflow-hidden"
                      >
                        {/* Continuously Animated Floating Background Icon */}
                        <FloatingBackgroundIcon
                          Icon={Icon}
                          theme="gold"
                          index={idx}
                        />

                        <div className="relative z-10 pr-6">
                          <div className="text-xs sm:text-[13.5px] font-bold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors leading-snug">
                            {c.label}
                          </div>

                          {c.note && (
                            <p className="text-[11px] sm:text-xs text-slate-500 group-hover:text-slate-600 mt-0.5 leading-snug font-normal">
                              {c.note}
                            </p>
                          )}
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
