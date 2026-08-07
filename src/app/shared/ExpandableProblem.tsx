import { ReactNode } from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, LucideIcon } from 'lucide-react';

interface ProblemItem {
  icon: LucideIcon;
  title: string;
  short: string;
  full: string;
}

interface ExpandableProblemProps {
  problems: ProblemItem[];
  title: string;
  subtitle?: string;
  description: string;
  descriptionNode?: ReactNode;
  badgeText: string;
  badgeIcon: LucideIcon;
  gradientColor: "blue" | "gold";
}

export default function ExpandableProblem({ 
  problems, 
  title, 
  subtitle, 
  description, 
  descriptionNode,
  badgeText, 
  badgeIcon: BadgeIcon,
  gradientColor = "blue"
}: ExpandableProblemProps) {
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);

  const gradientClasses = {
    blue: "from-[#0f4a9b] to-[#0a3a79]",
    gold: "from-[#d4a574] to-[#c89666]"
  };

  const badgeClasses = {
    blue: "from-[#0f4a9b]/5 to-transparent border-[#0f4a9b]/10 text-[#0f4a9b]",
    gold: "from-[#d4a574]/10 to-transparent border-[#d4a574]/20 text-[#d4a574]"
  };

  const iconClasses = {
    blue: "shadow-blue-900/20",
    gold: "shadow-[#d4a574]/20"
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image with Premium Overlay */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <img
                src="https://images.unsplash.com/photo-1606295834251-36d654991797?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Student struggling with homework"
                className="w-full h-[450px] lg:h-[550px] object-cover"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f4a9b]/60 via-[#0f4a9b]/30 to-transparent"></div>
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
            </div>
            {/* Floating Glow */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-r from-[#0f4a9b]/20 to-[#d4a574]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${badgeClasses[gradientColor]} rounded-full mb-4 border`}>
              <BadgeIcon className="h-4 w-4" />
              <span className="text-sm font-bold">{badgeText}</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              {title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">
                {subtitle}
              </span>
            </h2>

            <div className="text-gray-600 text-base leading-relaxed mb-8">
              {descriptionNode ?? description}
            </div>

            <div className="space-y-3">
              {problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedProblem(expandedProblem === i ? null : i)}
                    className="w-full p-6 flex items-center gap-4 text-left hover:bg-gray-50/50 transition"
                  >
                    <div className="w-14 h-14 bg-[#E2E8F0] rounded-2xl flex items-center justify-center group-hover:bg-[#0f4a9b]/10 group-hover:scale-110 transition-all duration-300">
                      <problem.icon className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-extrabold text-[#1F3F66]">{problem.title}</h3>
                    </div>
                    {expandedProblem === i ? (
                      <Minus className="h-5 w-5 text-[#0f4a9b] flex-shrink-0" />
                    ) : (
                      <Plus className="h-5 w-5 text-[#0f4a9b] flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedProblem === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pl-16">
                          <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: problem.full }}></p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
