import { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, ChevronDown } from 'lucide-react';

interface TrustFeature {
  icon: LucideIcon;
  title: string;
  desc: string;
  short?: string;
  link?: string;
}

interface ParentsTrustSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  descriptionNode?: ReactNode;
  features: TrustFeature[];
  badgeText: string;
  badgeIcon: LucideIcon;
  backgroundImage: string;
}

export default function ParentsTrustSection({ 
  title, 
  subtitle, 
  description, 
  descriptionNode,
  features, 
  badgeText, 
  badgeIcon: BadgeIcon,
  backgroundImage
}: ParentsTrustSectionProps) {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(0);
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-[#d4a574]/5 to-[#0f4a9b]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d4a574]/10 to-transparent rounded-full mb-4 border border-[#d4a574]/20">
              <BadgeIcon className="h-4 w-4 text-[#d4a574]" />
              <span className="text-sm font-bold text-[#d4a574]">{badgeText}</span>
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

            {/* Accordion list */}
            <div className="space-y-3">
              {features.map((item, i) => {
                const isOpen = expandedFeature === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#0f4a9b]/30 shadow-[0_8px_30px_rgba(15,74,155,0.12)] bg-white' : 'border-[#E5E7EB] bg-white hover:border-[#0f4a9b]/20 hover:shadow-md'}`}
                  >
                    <button
                      onClick={() => setExpandedFeature(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    >
                      {/* Numbered circle */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] shadow-lg shadow-blue-900/20' : 'bg-[#E2E8F0]'}`}>
                        <item.icon className={`h-5 w-5 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#0f4a9b]'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-extrabold text-[#1F3F66] leading-snug">
                          {item.link ? (
                            <a href={item.link} className="hover:text-[#0f4a9b] transition-colors" onClick={e => e.stopPropagation()}>{item.title}</a>
                          ) : item.title}
                        </h3>
                        {!isOpen && (
                          <p className="text-xs text-[#6B7280] mt-0.5 truncate">{item.desc}</p>
                        )}
                      </div>
                      <ChevronDown className={`h-4 w-4 text-[#0f4a9b] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pl-[72px]">
                            <div className="w-8 h-[2px] bg-[#C7A24A] mb-3"></div>
                            <p className="text-sm text-[#6B7280] leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-900/20">
              <img
                src={backgroundImage}
                alt="Happy parent with children"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#d4a574]/50 via-transparent to-[#0f4a9b]/40"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-r from-[#d4a574]/20 to-[#0f4a9b]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
