import { GraduationCap, TrendingUp, Award, UserCheck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface StatsBarProps {
  customText?: string;
}

const TARGETS = { students: 2500, grade: 3, exam: 90, satisfaction: 98 };

export default function StatsBar({ customText }: StatsBarProps = {}) {
  // Default to full target values so SSR, crawlers, and non-JS clients display full figures
  const [counts, setCounts] = useState(TARGETS);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    // Respect user's prefers-reduced-motion setting
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (animated.current) return;
      animated.current = true;

      setCounts({ students: 0, grade: 0, exam: 0, satisfaction: 0 });

      const delays = { students: 0, grade: 150, exam: 300, satisfaction: 450 };
      const duration = 1200;
      const start = performance.now();
      const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

      const tick = (now: number) => {
        const elapsed = now - start;

        setCounts((prev) => {
          const next = { ...prev };
          (Object.keys(TARGETS) as Array<keyof typeof TARGETS>).forEach((key) => {
            const delay = delays[key];
            if (elapsed >= delay) {
              const p = Math.min(1, (elapsed - delay) / duration);
              const eased = easeOutCubic(p);
              next[key] = Math.round(eased * TARGETS[key]);
            }
          });
          return next;
        });

        if (elapsed < duration + 450) {
          requestAnimationFrame(tick);
        } else {
          setCounts(TARGETS); // Guarantee final state
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    // Fallback: If not triggered within 1.5s, ensure target stats are shown
    const fallbackTimer = setTimeout(() => {
      if (!animated.current) {
        startAnimation();
      }
    }, 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  const stats = [
    {
      icon: GraduationCap,
      val: `${counts.students || TARGETS.students}+`,
      label: 'Students Taught',
      subtext: 'Across UAE Curricula',
    },
    {
      icon: TrendingUp,
      val: `+1 to +${counts.grade || TARGETS.grade}`,
      label: 'Grade Improvement',
      subtext: 'Average Grade Jump',
    },
    {
      icon: Award,
      val: `${counts.exam || TARGETS.exam}%+`,
      label: 'Exam Success Rate',
      subtext: 'Full Curriculum & Exam Boards',
    },
    {
      icon: UserCheck,
      val: `${counts.satisfaction || TARGETS.satisfaction}%`,
      label: 'Satisfaction Rate',
      subtext: 'Verified Parent Reviews',
    },
  ];

  return (
    <div ref={ref} className="relative -mt-6 z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="relative overflow-hidden bg-white rounded-2xl shadow-[0_10px_35px_rgba(15,74,155,0.07)] border border-slate-200 px-4 sm:px-6 py-6 lg:py-7">
        
        {/* Subtle Gold Accent Top Line */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center justify-center text-center px-3 sm:px-5 py-3 group transition-all duration-200 ${
                  i === 1 ? 'border-r sm:border-r-0 lg:border-r-0 border-slate-100' : ''
                }`}
              >
                {/* Permanent Dark Blue Icon Pod */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0a1f3d] text-[#f5d77f] flex items-center justify-center mb-2.5 border border-[#C7A24A]/50 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>

                {/* Counter Value: Balanced proportional size, refined vibrant sapphire color */}
                <div
                  className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#0f4a9b] tracking-tight notranslate leading-none mb-1.5"
                  translate="no"
                >
                  {s.val}
                </div>

                {/* Label & Subtext */}
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-[13px] font-bold text-[#0a1f3d] tracking-tight leading-tight">
                    {s.label}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 leading-tight">
                    {s.subtext}
                  </div>
                </div>

                {/* Permanent Gold Accent Line */}
                <div className="w-5 h-1 rounded-full bg-[#C7A24A] mt-2 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {customText && (
          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-center text-slate-600 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="bg-gradient-to-r from-[#0a1f3d] to-[#0f4a9b] bg-clip-text text-transparent font-bold">
                {customText}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
