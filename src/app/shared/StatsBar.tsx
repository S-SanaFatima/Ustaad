import { GraduationCap, TrendingUp, Award, UserCheck } from 'lucide-react';

interface StatsBarProps {
  customText?: string;
}

export default function StatsBar({ customText }: StatsBarProps = {}) {
  const stats = [
    {
      icon: GraduationCap,
      val: '2,500+',
      label: 'Students Taught',
      subtext: 'Across UAE Curricula',
    },
    {
      icon: TrendingUp,
      val: '+1 to +3',
      label: 'Grade Improvement',
      subtext: 'Average Grade Jump',
    },
    {
      icon: Award,
      val: '90%+',
      label: 'Exam Success Rate',
      subtext: 'Full Curriculum & Exam Boards',
    },
    {
      icon: UserCheck,
      val: '98%',
      label: 'Satisfaction Rate',
      subtext: 'Verified Parent Reviews',
    },
  ];

  return (
    <div className="relative -mt-6 z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="relative overflow-hidden bg-white rounded-2xl shadow-[0_10px_35px_rgba(15,74,155,0.07)] border border-slate-200 px-2.5 sm:px-6 py-5 sm:py-6 lg:py-7">
        
        {/* Subtle Gold Accent Top Line */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#C7A24A] to-transparent" />

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`flex flex-col items-center justify-center text-center px-1.5 sm:px-5 py-3 ${
                  i === 1 ? 'border-r sm:border-r-0 lg:border-r-0 border-slate-100' : ''
                }`}
              >
                {/* Permanent Blue Icon Pod from UAE Logo (No Hover) */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0b3d80] text-white flex items-center justify-center mb-2.5 shadow-sm">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>

                {/* Counter Value: Permanent Blue from UAE Logo */}
                <div
                  className="text-xl sm:text-2xl lg:text-[26px] font-black text-[#0b3d80] tracking-tight notranslate leading-none mb-1.5"
                  translate="no"
                >
                  {s.val}
                </div>

                {/* Label & Subtext */}
                <div className="space-y-0.5 max-w-full">
                  <div className="text-xs sm:text-[13px] font-bold text-[#0a1f3d] tracking-tight leading-tight whitespace-nowrap">
                    {s.label}
                  </div>
                  <div className="text-[9px] sm:text-[11px] font-medium text-slate-500 leading-tight whitespace-nowrap tracking-tight">
                    {s.subtext}
                  </div>
                </div>

                {/* Permanent Gold Accent Line */}
                <div className="w-5 h-1 rounded-full bg-[#C7A24A] mt-2" />
              </div>
            );
          })}
        </div>

        {customText && (
          <div className="mt-5 pt-4 border-t border-slate-100">
            <p className="text-center text-slate-600 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="bg-gradient-to-r from-[#0b3d80] to-[#0a1f3d] bg-clip-text text-transparent font-bold">
                {customText}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
