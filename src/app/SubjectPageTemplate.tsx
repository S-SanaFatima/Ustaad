import { useState, Fragment } from 'react';
import type { ReactNode } from 'react';
import { MessageCircle, ArrowRight, ChevronDown, GraduationCap, TrendingUp, Award, UserCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar} from './shared';
import SEOHead from './shared/SEOHead';
import RelatedContent from './shared/RelatedContent';

// Re-export for backward compatibility with pages that import from here
export { GradientHeadingText, GoldButton } from './shared';

export interface SubjectTopic  { title: string; desc: string; icon: ReactNode; wm: ReactNode; }
export interface SubjectCard   { title: string; desc: string; icon: ReactNode; }
export interface SubjectFAQ    { q: string; a: string; }

export interface SubjectPageProps {
  badgeIcon:        ReactNode;
  heroBadgeLabel?:  string;
  heroTitle:        string;
  heroSubtitle:     string;
  heroDesc:         string;
  heroBadges?:      string[];
  heroCTAText?:     string;
  heroCTAMicrocopy?: string;
  finalCtaTitle?:   string;
  finalCtaSubtitle?: string;
  finalCtaButton?:  string;
  finalCtaSubtext?: string;
  topicsTitle:    string;
  topicsDesc:     string;
  topics:         SubjectTopic[];
  customTopicsSection?: ReactNode;
  struggles:      SubjectCard[];
  customStrugglesSection?: ReactNode;
  methods:        SubjectCard[];
  customMethodsSection?: ReactNode;
  softCtaHeading: string;
  curricula:      SubjectCard[];
  customCurriculaSection?: ReactNode;
  practices:      SubjectCard[];
  customPracticesSection?: ReactNode;
  results:        SubjectCard[];
  customResultsSection?: ReactNode;
  faqs:           SubjectFAQ[];
  customFAQsSection?: ReactNode;
  floatingIcon:   ReactNode;
  seo?: { title: string; description: string; canonical: string; schema?: object | object[] };
}

export default function SubjectPageTemplate(p: SubjectPageProps) {
  const [openFaq,    setOpenFaq]    = useState<number | null>(null);
  
  return (
    <Layout>
      {p.seo && <SEOHead title={p.seo.title} description={p.seo.description} canonical={p.seo.canonical} schema={p.seo.schema} />}
      {/* ── HERO ── */}
      <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                {p.badgeIcon} {p.heroBadgeLabel ?? 'Subject Expert'}
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text={p.heroTitle} />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6 mx-auto" />
              <p className="text-[#0a1f3d] text-xl lg:text-2xl font-bold mb-4">{p.heroSubtitle}</p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">{p.heroDesc}</p>
              <div className="flex flex-col items-center gap-2 mb-12">
                <GoldButton className="px-7 py-3 text-sm shadow-[0_0_15px_rgba(199,162,74,0.3)]">
                  {p.heroCTAText ?? 'Book Your Free Trial'}
                </GoldButton>
                <p className="text-xs text-gray-400 font-medium tracking-wide">{p.heroCTAMicrocopy ?? '✦ No Commitment  ·  Cancel Anytime'}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-5 items-center text-gray-400 font-extrabold text-sm sm:text-base tracking-widest uppercase">
                {(p.heroBadges || ["Cambridge", "Edexcel", "AQA", "IB", "AP"]).map((badge, i, arr) => (
                  <Fragment key={i}>
                    <span>{badge}</span>
                    {i < arr.length - 1 && <span className="hidden sm:inline text-gray-300 font-normal">•</span>}
                  </Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── TOPICS ── */}
      {p.customTopicsSection ? (
        p.customTopicsSection
      ) : (
        <section id="topics" className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4"><GradientHeadingText text={p.topicsTitle} /></h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">{p.topicsDesc}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {p.topics.map((t, i) => (
                <div key={i} className="relative bg-white rounded-[24px] p-8 shadow-[0_4px_20px_rgba(15,74,155,0.05)] border border-[#0f4a9b]/10 hover:shadow-[0_15px_40px_rgba(15,74,155,0.1)] transition-all flex flex-col items-start text-left group" style={{ minHeight: 180 }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(15,74,155,0.4)] z-10 flex-shrink-0">{t.icon}</div>
                  <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-1 z-10 text-left">{t.title}</h3>
                  <div className="text-gray-500 font-medium text-sm z-10 text-left">{t.desc}</div>
                  <div className="absolute right-4 bottom-4 pointer-events-none select-none">{t.wm}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── STRUGGLE ── */}
      {p.customStrugglesSection ? (
        p.customStrugglesSection
      ) : (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4"><GradientHeadingText text={"Where Students Struggle"} /></h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">Why it feels impossible when approached the wrong way.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {p.struggles.map((s, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-[24px] p-8 flex flex-col items-start text-left hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition duration-300">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">{s.icon}</div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm font-medium">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── METHOD ── */}
      {p.customMethodsSection ? (
        p.customMethodsSection
      ) : (
        <section id="method" className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4"><GradientHeadingText text={"The Ustaad Method"} /></h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">Clarity isn't taught. It's built.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {p.methods.map((m, i) => (
                <div key={i} className="bg-white border border-[#0f4a9b]/10 rounded-[24px] p-8 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(15,74,155,0.4)] text-white">{m.icon}</div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">{m.title}</h3>
                  <p className="text-gray-500 text-sm font-medium">{m.desc}</p>
                </div>
              ))}
            </div>
            {/* Soft CTA */}
            <div className="bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/8 border border-[#0f4a9b]/10 rounded-[32px] p-10 text-center max-w-3xl mx-auto">
              <p className="text-sm font-bold text-[#0f4a9b] uppercase tracking-widest mb-3">Ready to experience this?</p>
              <h3 className="text-2xl font-extrabold text-[#0a1f3d] mb-8">{p.softCtaHeading}</h3>
              <a href="/contact#form" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-extrabold text-sm px-8 py-4 tracking-wide shadow-[0_4px_24px_rgba(199,162,74,0.35)] hover:shadow-[0_8px_32px_rgba(199,162,74,0.55)] hover:brightness-110 transition-all hover:-translate-y-0.5 active:scale-95">
                Start Your First Session
                <span className="w-7 h-7 bg-white/25 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white/35 transition-colors"><ArrowRight className="h-4 w-4" /></span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ── CURRICULUM ── */}
      {p.customCurriculaSection ? (
        p.customCurriculaSection
      ) : (
        <section id="curriculum" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4"><GradientHeadingText text={"Aligned to Your Curriculum"} /></h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">Same method. Precisely adapted.</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {p.curricula.map((c, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-[20px] p-6 flex flex-col items-start text-left hover:border-[#0f4a9b]/30 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-gray-100">{c.icon}</div>
                  <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-1">{c.title}</h3>
                  <p className="text-gray-500 text-sm font-medium">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PRACTICE ── */}
      {p.customPracticesSection ? (
        p.customPracticesSection
      ) : (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4"><GradientHeadingText text={"Practice That Builds Mastery"} /></h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">The framework for exam success.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {p.practices.map((pr, i) => (
                <div key={i} className="bg-white border border-[#0f4a9b]/10 rounded-[24px] p-8 flex flex-col items-start text-left hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_20px_rgba(199,162,74,0.4)] mb-6">{pr.icon}</div>
                  <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">{pr.title}</h3>
                  <p className="text-gray-500 text-sm font-medium">{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RESULTS ── */}
      {p.customResultsSection ? (
        p.customResultsSection
      ) : (
        <section id="results" className="py-10 lg:py-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-10 max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">Real Results - Proven Outcomes</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
              {p.results.map((r, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-[20px] p-6 flex flex-col items-start text-left backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C7A24A] to-[#A8892A] rounded-xl flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(199,162,74,0.4)]">{r.icon}</div>
                  <div className="text-xl font-extrabold text-white mb-1">{r.title}</div>
                  <p className="text-blue-100 text-sm font-medium">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {p.customFAQsSection ? (
        p.customFAQsSection
      ) : (
        <section id="faqs" className="py-8 lg:py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                  <HelpCircle className="h-3.5 w-3.5" />
                  <span className="text-xs uppercase tracking-wider">Common Questions</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                  Frequently Asked{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions</span>
                </h2>
                <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
              </div>
              <div className="flex flex-col gap-[10px]">
                {p.faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <button onClick={() => setOpenFaq(isOpen ? null : i)}
                          style={{ width:40, height:40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:'bold', fontSize:'18px', border:'none', cursor:'pointer' }}>?</button>
                        <button onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="flex-1 flex items-center gap-3 text-left rounded-full border"
                          style={{ minHeight:'48px', padding:'8px 14px', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)', background: isOpen ? 'rgba(15,74,155,0.04)' : 'transparent', cursor:'pointer' }}>
                          <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                          <span style={{ width:32, height:32, borderRadius:'50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition:'transform 0.2s' }}>
                            <ChevronDown className="h-3.5 w-3.5" style={{ color: isOpen ? '#fff' : '#0f4a9b' }} />
                          </span>
                        </button>
                      </div>
                      {isOpen && (
                        <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                          style={{ background:'#f8fafc', borderColor:'rgba(15,74,155,0.15)', boxShadow:'0 4px 16px rgba(15,74,155,0.06)' }}>
                          <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                          <span style={{ width:32, height:32, background:'#0f4a9b', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                            <MessageCircle className="h-4 w-4" />
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED + BREADCRUMBS ── */}
      {p.seo?.canonical && (
        <RelatedContent
          breadcrumbs={[
            { name: 'Home', href: '/' },
            { name: 'Subjects', href: '/subjects' },
            { name: p.heroTitle.replace(/<[^>]+>/g, '').slice(0, 48) || 'Subject', href: p.seo.canonical },
          ]}
          subjects={[
            { label: 'Maths', href: '/maths' },
            { label: 'Physics', href: '/physics' },
            { label: 'Chemistry', href: '/chemistry' },
            { label: 'Biology', href: '/biology' },
            { label: 'English', href: '/english' },
            { label: 'Exam Preparation', href: '/exam-preparation' },
          ].filter((s) => s.href !== p.seo!.canonical)}
          curricula={[
            { label: 'British Curriculum', href: '/british-curriculum' },
            { label: 'IGCSE', href: '/igcse' },
            { label: 'A-Level', href: '/a-level' },
            { label: 'IB Curriculum', href: '/ib-curriculum' },
            { label: 'American Curriculum', href: '/american-curriculum' },
          ]}
        />
      )}

      {/* ── FINAL CTA ── */}
      <FinalCTA
        title={p.finalCtaTitle ?? "Better Results Start Here"}
        subtitle={p.finalCtaSubtitle ?? "Book your free trial session today."}
        button1Text={p.finalCtaButton ?? "Start Your First Session"}
        subtext1={p.finalCtaSubtext}
      />

    </Layout>
  );
}
