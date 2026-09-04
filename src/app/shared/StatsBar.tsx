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
      icon: <GraduationCap className="h-6 w-6 text-[#C7A24A]" />,
      val: `${counts.students || TARGETS.students}+`,
      label: 'Students Taught',
      subtext: 'Across UAE Curricula',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-[#C7A24A]" />,
      val: `+1 to +${counts.grade || TARGETS.grade}`,
      label: 'Grade Improvement',
      subtext: 'Average Grade Jump',
    },
    {
      icon: <Award className="h-6 w-6 text-[#C7A24A]" />,
      val: `${counts.exam || TARGETS.exam}%+`,
      label: 'Exam Success Rate',
      subtext: 'Full Curriculum & Exam Boards',
    },
    {
      icon: <UserCheck className="h-6 w-6 text-[#C7A24A]" />,
      val: `${counts.satisfaction || TARGETS.satisfaction}%`,
      label: 'Satisfaction Rate',
      subtext: 'Verified Parent Reviews',
    },
  ];

  return (
    <div ref={ref} className="relative -mt-6 z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="relative overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(10,31,61,0.09)] border border-slate-200/80 px-6 py-7 lg:py-8">
        
        {/* Subtle Gold Accent Top Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent opacity-80" />

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/70 gap-y-6 lg:gap-y-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center gap-2.5 px-3 sm:px-6 py-2 group transition-all duration-300 ${
                i === 1 ? 'border-r lg:border-r-0 border-slate-200/70' : ''
              }`}
            >
              {/* Luxury Dual-Tone Badge Icon */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[#0a1f3d] to-[#0f3a7a] flex items-center justify-center shadow-md border border-[#C7A24A]/30 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C7A24A]/60">
                {s.icon}
              </div>

              {/* Counter Value */}
              <div
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight notranslate mt-0.5"
                translate="no"
              >
                {s.val}
              </div>

              {/* Label & Subtext */}
              <div>
                <div className="text-xs sm:text-sm font-extrabold text-[#0a1f3d] tracking-wide">
                  {s.label}
                </div>
                <div className="text-[11px] font-semibold text-gray-400 mt-0.5">
                  {s.subtext}
                </div>
              </div>

              {/* Subtle Gold Accent Line */}
              <div className="w-6 h-[2px] bg-[#C7A24A]/50 rounded-full mt-1 group-hover:w-10 group-hover:bg-[#C7A24A] transition-all duration-300" />
            </div>
          ))}
        </div>

        {customText && (
          <div className="mt-7 pt-5 border-t border-slate-100">
            <p className="text-center text-gray-600 text-xs sm:text-sm font-semibold tracking-wider uppercase">
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
