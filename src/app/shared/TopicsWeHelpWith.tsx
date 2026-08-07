import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface TopicCategory {
  title: string;
  topics: string[];
  icon: LucideIcon;
  color: string;
}

interface TopicsWeHelpWithProps {
  title: string;
  subtitle?: string;
  description: string;
  descriptionNode?: ReactNode;
  categories: TopicCategory[];
  badgeText: string;
  badgeIcon: LucideIcon;
}

export default function TopicsWeHelpWith({ 
  title, 
  subtitle, 
  description,
  descriptionNode,
  categories, 
  badgeText,
  badgeIcon: BadgeIcon
}: TopicsWeHelpWithProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/5 to-transparent rounded-full mb-4 border border-[#0f4a9b]/10 text-[#0f4a9b]">
            <BadgeIcon className="h-4 w-4" />
            <span className="text-sm font-bold">{badgeText}</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
            {title}{' '}
            {subtitle && <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e5ba8] to-[#0a3a79]">{subtitle}</span>}
          </h2>
          <div className="text-gray-600 text-base lg:text-lg leading-relaxed">
            {descriptionNode ?? description}
          </div>
        </div>

        {/* Cards Grid, exact homepage card style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[20px] border border-[#E5E7EB] p-6 flex flex-col items-start text-left shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(15,74,155,0.15)] hover:-translate-y-1 hover:ring-2 hover:ring-inset hover:ring-[#0f4a9b]/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Watermark */}
              <div className="absolute right-3 bottom-3 w-20 h-20 opacity-[0.05] pointer-events-none text-[#0f4a9b]">
                <category.icon className="w-full h-full" strokeWidth={1.25} />
              </div>
              {/* Icon */}
              <div className="w-14 h-14 bg-[#E2E8F0] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#0f4a9b]/10 group-hover:scale-110 transition-all duration-300">
                <category.icon className="h-7 w-7 text-[#0f4a9b]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-extrabold text-[#1F3F66] mb-3">{category.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{category.topics[0]}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
