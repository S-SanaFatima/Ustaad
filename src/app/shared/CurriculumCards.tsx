import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, Plus, Minus } from 'lucide-react';
import { ReactNode } from 'react';

interface CurriculumItem {
  name: string;
  levels: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  link?: string;
  watermark?: ReactNode;
}

interface CurriculumCardsProps {
  curriculums: CurriculumItem[];
  title: string;
  subtitle?: string;
  description: string;
  showCTA?: boolean;
  ctaText?: string;
  expandable?: boolean;
}

export default function CurriculumCards({ 
  curriculums, 
  title, 
  subtitle, 
  description, 
  showCTA = true,
  ctaText = "Book Your Free Trial",
  expandable = false
}: CurriculumCardsProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            {title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">
              {subtitle}
            </span>
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className={`grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12 ${expandable ? 'items-stretch' : ''}`}>
          {curriculums.map((curriculum, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className={`bg-white rounded-[20px] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 relative overflow-hidden ${expandable ? 'flex flex-col min-h-[200px]' : 'p-6'}`}>
                {/* Watermark */}
                {curriculum.watermark && (
                  <div className="absolute right-4 bottom-4 pointer-events-none select-none z-0">
                    {curriculum.watermark}
                  </div>
                )}
                
                {expandable ? (
                  <>
                    <button
                      onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                      className="w-full p-6 text-left"
                    >
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <curriculum.icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-extrabold text-[#1F3F66] mb-2">
                            {curriculum.link ? (
                              <a href={curriculum.link} className="hover:text-[#0f4a9b] transition-colors" onClick={(e) => e.stopPropagation()}>{curriculum.name}</a>
                            ) : curriculum.name}
                          </h3>
                          
                          {/* Gold divider line below heading */}
                          <div className="w-10 h-[2px] bg-[#C7A24A] mb-3"></div>
                          
                          <p className="text-sm font-medium text-[#0f4a9b] mb-3">
                            {curriculum.levels}
                          </p>
                        </div>

                        {expandedCard === i ? (
                          <Minus className="h-5 w-5 text-[#0f4a9b] flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-[#0f4a9b] flex-shrink-0" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {expandedCard === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden px-6 pb-6"
                        >
                          <p className="text-sm text-[#6B7280] leading-relaxed pt-2" dangerouslySetInnerHTML={{ __html: curriculum.desc }}></p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <>
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <curriculum.icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>

                    <h3 className="text-xl font-extrabold text-[#1F3F66] mb-2">
                      {curriculum.link ? (
                        <a href={curriculum.link} className="hover:text-[#0f4a9b] transition-colors">{curriculum.name}</a>
                      ) : curriculum.name}
                    </h3>
                    
                    {/* Gold divider line below heading */}
                    <div className="w-10 h-[2px] bg-[#C7A24A] mb-3"></div>
                    
                    <p className="text-sm font-medium text-[#0f4a9b] mb-3">
                      {curriculum.levels}
                    </p>
                    <p className="text-sm text-[#6B7280] leading-relaxed" dangerouslySetInnerHTML={{ __html: curriculum.desc }}></p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        {showCTA && (
          <div className="text-center">
            <button className="inline-flex items-center justify-center bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-xl hover:brightness-110 hover:shadow-xl hover:shadow-[#C7A24A]/40 transition transform hover:-translate-y-0.5 active:scale-95 px-8 py-3.5 text-sm">
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
