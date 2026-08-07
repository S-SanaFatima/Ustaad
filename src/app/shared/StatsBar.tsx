import { GraduationCap, TrendingUp, Award, UserCheck } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface StatsBarProps {
  customText?: string;
}

export default function StatsBar({ customText }: StatsBarProps = {}) {
  const [counts, setCounts] = useState({ students: 2500, grade: 3, exam: 90, satisfaction: 98 });
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 2000;
          const steps = 60;
          const interval = duration / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            setCounts({
              students: Math.floor(progress * 2500),
              grade: Math.floor(progress * 3),
              exam: Math.floor(progress * 90),
              satisfaction: Math.floor(progress * 98),
            });
            if (step >= steps) clearInterval(timer);
          }, interval);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <GraduationCap className="h-6 w-6 text-white" />, iconBg: "bg-[#22b8cd]", val: `${counts.students}+`, label: "Students Taught", valColor: "text-[#1F3F66]", line: "bg-[#22b8cd]" },
    { icon: <TrendingUp className="h-6 w-6 text-white" />, iconBg: "bg-[#f59e0b]", val: `+1 to +${counts.grade}`, label: "Grade Improvement", valColor: "text-[#C7A24A]", line: "bg-[#f59e0b]" },
    { icon: <Award className="h-6 w-6 text-white" />, iconBg: "bg-[#ef4444]", val: `${counts.exam}%+`, label: "Exam Success Rate", valColor: "text-[#1F3F66]", line: "bg-[#ef4444]" },
    { icon: <UserCheck className="h-6 w-6 text-white" />, iconBg: "bg-[#60a5fa]", val: `${counts.satisfaction}%`, label: "Satisfaction Rate", valColor: "text-[#1F3F66]", line: "bg-[#60a5fa]" },
  ];

  return (
    <div ref={ref} className="relative -mt-6 z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_15px_40px_rgba(15,74,155,0.12)] border border-white/50 px-6 py-8">
        {/* Single responsive grid — rendered once in HTML (no mobile/desktop duplication) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x-2 lg:divide-gray-100 gap-y-4 lg:gap-y-0">
          {stats.map((s, i) => (
            <div key={i} className={`flex flex-col items-center justify-center text-center gap-3 px-4 py-4 lg:py-2${i === 1 ? ' border-r-2 border-gray-100 lg:border-r-0' : ''}`}>
              <div className={`w-14 h-14 rounded-full ${s.iconBg} flex items-center justify-center shadow-lg`}>{s.icon}</div>
              <div className={`text-2xl lg:text-3xl font-extrabold notranslate ${s.valColor}`} translate="no">{s.val}</div>
              <div className="text-xs font-semibold text-[#6B7280] whitespace-nowrap">{s.label}</div>
              <div className={`w-8 h-[3px] ${s.line} rounded-full`}></div>
            </div>
          ))}
        </div>
        {customText && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-gray-600 text-sm sm:text-base font-medium tracking-wide uppercase">
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
