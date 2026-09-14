import { useState, useEffect } from 'react';
import { Layout, GradientHeadingText, WhatsAppIcon } from './shared';


import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, localBusinessSchema } from './shared/schemas';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Trash2, 
  UserCheck, 
  FileText, 
  Scale, 
  Clock, 
  Mail, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Home,
  BookOpen
} from 'lucide-react';

const SECTIONS = [
  { id: 'who-we-are', title: '1. Who We Are & Scope of Service', icon: UserCheck },
  { id: 'information-we-collect', title: '2. Information We Collect', icon: FileText },
  { id: 'how-we-use-data', title: '3. Lawful Basis & How We Use Data', icon: CheckCircle2 },
  { id: 'third-party-services', title: '4. Third-Party Services & Integrations', icon: EyeOff },
  { id: 'cookies-policy', title: '5. Cookies & Minimal Tracking Policy', icon: Sparkles },
  { id: 'uae-pdpl-compliance', title: '6. UAE Personal Data Protection Law (PDPL)', icon: Scale },
  { id: 'child-safeguarding', title: '7. Child Protection & Minor Safeguarding', icon: ShieldCheck },
  { id: 'data-security', title: '8. Data Storage, Security & Encryption', icon: Lock },
  { id: 'retention-erasure', title: '9. Data Retention & Right to Erasure', icon: Trash2 },
  { id: 'parental-rights', title: '10. Parental Rights & Access Requests', icon: UserCheck },
  { id: 'policy-updates', title: '11. Policy Amendments & Updates', icon: Clock },
  { id: 'contact-dpo', title: '12. Data Protection Officer & Contact', icon: Mail },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState<string>('who-we-are');
  const [mobileTocOpen, setMobileTocOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const elem = document.getElementById(SECTIONS[i].id);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setMobileTocOpen(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Privacy Policy | Ustaad UAE Tutoring · Data Protection & PDPL Compliance"
        description="Official Privacy Policy of Ustaad UAE. Learn how we safeguard student and parent data under UAE Federal Decree Law No. 45 of 2021 (PDPL), KHDA & ADEK standards."
        canonical="/privacy"
        placename="United Arab Emirates"
        ogType="website"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/privacy' }
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Ustaad Privacy Policy",
            "description": "Comprehensive data privacy and safeguarding policy for Ustaad UAE private tutoring services.",
            "url": "https://ustaad.ae/privacy",
            "inLanguage": "en-AE",
            "isPartOf": { "@id": "https://ustaad.ae/#website" }
          }
        ]}
      />

      {/* Breadcrumb Header */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400 flex-wrap overflow-hidden">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
            <Home className="h-3 w-3 shrink-0" /> Home
          </a>
          <ChevronRight className="h-3 w-3 shrink-0" />
          <span className="text-[#0f4a9b] font-semibold truncate">Privacy Policy</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="pt-8 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 bg-gradient-to-b from-[#f8fafd] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3.5 border border-[#0f4a9b]/12 max-w-full">
              <ShieldCheck className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
              <span className="text-[10.5px] sm:text-[11px] font-extrabold text-[#0f4a9b] tracking-wider uppercase truncate">
                Legal &amp; Regulatory Compliance · UAE PDPL Aligned
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-4 tracking-tight leading-[1.18] sm:leading-[1.15]">
              Privacy Policy &amp; <GradientHeadingText text="Data Protection" />
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-left">
              At Ustaad, safeguarding your family's personal information and protecting student privacy during private 1-to-1 tutoring is fundamental to how we operate. This policy details our data collection, security measures, and full compliance with <strong>UAE Federal Decree Law No. 45 of 2021 on the Protection of Personal Data (PDPL)</strong>.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-y-2.5 gap-x-4 sm:gap-x-6 text-xs text-gray-500 pt-4 border-t border-slate-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                <strong>Last Reviewed:</strong> September 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                <strong>Jurisdiction:</strong> United Arab Emirates
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                <strong>Privacy Officer:</strong> support@ustaad.ae
              </span>
            </div>
          </div>

          {/* 4 Executive Summary Cards ("Privacy At a Glance") */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_14px_34px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-[#0f4a9b] group-hover:text-white transition-all duration-300 shadow-xs">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1">
                100% UAE PDPL Compliant
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating in strict adherence with UAE Federal Decree Law No. 45 of 2021 regarding personal data protection.
              </p>
            </div>

            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_14px_34px_rgba(16,185,129,0.14)] hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                <EyeOff className="w-5 h-5" />
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0a1f3d] group-hover:text-emerald-700 transition-colors mb-1">
                Zero Third-Party Marketing
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never sell, rent, or trade your contact or academic details to third-party marketing companies.
              </p>
            </div>

            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_14px_34px_rgba(15,74,155,0.14)] hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1">
                Minor Safeguarding
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Encrypted virtual classrooms, verified educator screening, and mandatory parental consent for all minors.
              </p>
            </div>

            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_14px_34px_rgba(199,162,74,0.18)] hover:border-[#C7A24A]/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C7A24A] to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-[#C7A24A] group-hover:text-[#0a1f3d] transition-all duration-300 shadow-xs">
                <Trash2 className="w-5 h-5" />
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#9A7B2C] transition-colors mb-1">
                Right to Complete Erasure
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Parents retain complete authority to access, modify, or permanently delete student records within 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Content Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
            
            {/* Left Sidebar: Sticky Table of Contents */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                
                {/* Mobile Collapsible TOC */}
                <div className="p-3.5 sm:p-4 rounded-xl border border-slate-200 bg-[#f8fafd] shadow-xs lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileTocOpen(!mobileTocOpen)}
                    className="w-full flex items-center justify-between text-left"
                    aria-expanded={mobileTocOpen}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <BookOpen className="w-4 h-4 text-[#0f4a9b] shrink-0" />
                      <span className="text-xs font-black uppercase tracking-wider text-[#0a1f3d] truncate">
                        Table of Contents ({SECTIONS.length} Sections)
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#0f4a9b] px-2.5 py-1 rounded-md bg-[#0f4a9b]/10 shrink-0 ml-2">
                      {mobileTocOpen ? 'Close' : 'View'}
                    </span>
                  </button>
                  {mobileTocOpen && (
                    <nav className="mt-3 pt-3 border-t border-slate-200 space-y-1 max-h-72 overflow-y-auto">
                      {SECTIONS.map((sec) => {
                        const Icon = sec.icon;
                        const isActive = activeSection === sec.id;
                        return (
                          <a
                            key={sec.id}
                            href={`#${sec.id}`}
                            onClick={(e) => scrollToSection(e, sec.id)}
                            className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                              isActive
                                ? 'bg-[#0f4a9b] text-white font-bold shadow-xs'
                                : 'text-slate-600 hover:text-[#0f4a9b] hover:bg-slate-100'
                            }`}
                          >
                            <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                            <span className="truncate">{sec.title}</span>
                          </a>
                        );
                      })}
                    </nav>
                  )}
                </div>

                {/* Desktop Sticky Table of Contents */}
                <div className="hidden lg:block p-5 rounded-2xl border border-slate-200 bg-[#f8fafd] shadow-xs">
                  <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-200">
                    <BookOpen className="w-4 h-4 text-[#0f4a9b]" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#0a1f3d]">
                      Table of Contents
                    </span>
                  </div>
                  <nav className="space-y-1">
                    {SECTIONS.map((sec) => {
                      const Icon = sec.icon;
                      const isActive = activeSection === sec.id;
                      return (
                        <a
                          key={sec.id}
                          href={`#${sec.id}`}
                          onClick={(e) => scrollToSection(e, sec.id)}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                            isActive
                              ? 'bg-[#0f4a9b] text-white font-bold shadow-xs'
                              : 'text-slate-600 hover:text-[#0f4a9b] hover:bg-slate-100'
                          }`}
                        >
                          <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                          <span className="truncate">{sec.title}</span>
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Direct Privacy Inquiries Card */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#0f4a9b]/20 bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-white shadow-md">
                  <div className="flex items-center gap-2 text-[#C7A24A] text-xs font-extrabold uppercase tracking-wider mb-2">
                    <ShieldCheck className="w-4 h-4" /> Privacy Inquiries
                  </div>
                  <h3 className="text-sm font-bold mb-1.5">Have a data protection question?</h3>
                  <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                    Our compliance team is available to handle subject access requests and verify tutor licensing details.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:support@ustaad.ae"
                      className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-white text-[#0a1f3d] text-xs font-bold hover:bg-blue-50 transition shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0f4a9b]" /> Email Compliance Desk
                    </a>
                    <a
                      href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20have%20a%20privacy%20question."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-[#25d366] text-white text-xs font-bold hover:bg-[#20bd5a] transition shadow-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp Privacy Team

                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Main Column: Detailed Policy Sections */}
            <main className="lg:col-span-8 space-y-6 sm:space-y-8 lg:space-y-10">
              
              {/* SECTION 1 */}
              <article id="who-we-are" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    1. Who We Are &amp; Scope of Service
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Ustaad (operating via <strong>ustaad.ae</strong>) is a premium educational tutoring service providing private 1-to-1 instruction and academic coaching across the United Arab Emirates (Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain).
                  </p>
                  <p>
                    This Privacy Policy applies to all interactions with our website, communication channels (including WhatsApp and web inquiry forms), diagnostic academic consultations, and online classroom environments. By accessing our services, parents, guardians, and adult learners acknowledge the data practices described herein.
                  </p>
                </div>
              </article>

              {/* SECTION 2 */}
              <article id="information-we-collect" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    2. Information We Collect
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    We collect only the minimum necessary information required to evaluate student learning requirements, match subject-specialist tutors, and deliver safe educational sessions:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-slate-700">
                    <li><strong>Parent/Guardian Contact Details:</strong> Full name, verified mobile phone number, WhatsApp contact handle, and email address.</li>
                    <li><strong>Student Academic Information:</strong> Year group/grade level, school attended in the UAE, curriculum studied (e.g. British IGCSE/A-Level, IB MYP/DP, American AP/Common Core), examination board syllabus codes, target grades, and specific topic bottlenecks.</li>
                    <li><strong>Assessment &amp; Feedback Records:</strong> Notes recorded during trial sessions, diagnostic test scores, homework progress logs, and parental feedback discussions.</li>
                  </ul>
                  <div className="mt-3 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/70 text-xs text-[#0a1f3d]">
                    <strong>Financial Data Note:</strong> Ustaad does <em>not</em> store or process credit card numbers or banking passwords on this website. All invoicing and tuition transactions are arranged directly and securely via official corporate banking channels.
                  </div>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="how-we-use-data" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    3. Lawful Basis &amp; How We Use Data
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Under UAE data protection regulations, we process your personal data under legitimate educational interests and with your explicit consent for the following specific purposes:
                  </p>
                  <ol className="space-y-1.5 pl-4 list-decimal text-slate-700">
                    <li>Matching students with qualified, curriculum-specific tutors based on academic need.</li>
                    <li>Coordinating session timetables, schedule reminders, and exam revision milestones.</li>
                    <li>Sharing post-lesson diagnostic reports, homework assignments, and teacher notes with parents.</li>
                    <li>Responding promptly to academic support requests submitted via email or WhatsApp.</li>
                  </ol>
                  <p>
                    We <strong>never sell, lease, or monetize</strong> parent or student personal data to third-party advertising brokers or commercial data aggregators.
                  </p>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="third-party-services" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <EyeOff className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    4. Third-Party Services &amp; Integrations
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Our website interacts with a limited number of trusted service providers to ensure security, translation, and communication:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-slate-700">
                    <li><strong>Google Translate:</strong> Provides optional instantaneous Arabic language translation of page content for Arabic-speaking families. Google's standard privacy policies apply.</li>
                    <li><strong>Google Analytics:</strong> Analyzes aggregated, anonymized web traffic to optimize site performance and article readability. IP addresses are anonymized.</li>
                    <li><strong>WhatsApp (Meta):</strong> Clicking our direct WhatsApp links opens your local WhatsApp client. Inquiries sent via WhatsApp are subject to WhatsApp end-to-end encryption and terms.</li>
                  </ul>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="cookies-policy" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    5. Cookies &amp; Minimal Tracking Policy
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    We maintain a strict minimal-cookie philosophy. We do not use intrusive cross-site behavioral tracking or invasive advertising cookies.
                  </p>
                  <p>
                    The cookies utilized on ustaad.ae include technical session tokens required to remember language preference (<code className="bg-slate-100 px-1 py-0.5 rounded text-[11px] font-mono">googtrans</code>) and anonymized aggregate analytics. You can adjust your browser settings at any time to reject cookies without losing access to our educational content.
                  </p>
                </div>
              </article>

              {/* SECTION 6 */}
              <article id="uae-pdpl-compliance" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    6. UAE Personal Data Protection Law (PDPL)
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Ustaad processes all personal information in full alignment with <strong>UAE Federal Decree Law No. 45 of 2021 on the Protection of Personal Data (PDPL)</strong>. We adhere to the fundamental data protection principles mandated by UAE law:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-2">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-[#0a1f3d] block mb-0.5">Lawful &amp; Fair Processing</strong>
                      <span className="text-slate-600 text-xs">Data is collected transparently with clear purpose.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-[#0a1f3d] block mb-0.5">Purpose Limitation</strong>
                      <span className="text-slate-600 text-xs">Used strictly for educational matching and tuition.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-[#0a1f3d] block mb-0.5">Data Minimization</strong>
                      <span className="text-slate-600 text-xs">Only necessary educational details are retained.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-[#0a1f3d] block mb-0.5">Storage Limitation</strong>
                      <span className="text-slate-600 text-xs">Archived securely and deleted upon parental request.</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="child-safeguarding" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    7. Child Protection &amp; Minor Safeguarding
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Because our tutoring services involve school-aged children, safeguarding and child protection are non-negotiable pillars of our operations:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-slate-700">
                    <li><strong>Rigorous Educator Vetting:</strong> All tutors undergo identity verification, academic credential audits, and teaching background checks.</li>
                    <li><strong>Parental Supervision:</strong> Parents are welcome to attend online trial lessons and receive session summaries. Direct 1-to-1 chat between tutors and minor students outside of official study materials is discouraged.</li>
                    <li><strong>Protected Virtual Classrooms:</strong> Interactive whiteboard sessions occur within secure, encrypted virtual rooms accessible only by authorized participants.</li>
                  </ul>
                </div>
              </article>

              {/* SECTION 8 */}
              <article id="data-security" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    8. Data Storage, Security &amp; Encryption
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    We maintain enterprise-grade administrative and technological safeguards to prevent unauthorized access, accidental alteration, or data disclosure:
                  </p>
                  <ul className="space-y-1.5 pl-4 list-disc text-slate-700">
                    <li>256-bit SSL/TLS encryption for all website communications and form transmissions.</li>
                    <li>Role-based access control ensuring only assigned academic coordinators and teachers access student diagnostic reports.</li>
                    <li>Regular security audits and encrypted cloud storage protocols.</li>
                  </ul>
                </div>
              </article>

              {/* SECTION 9 */}
              <article id="retention-erasure" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <Trash2 className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    9. Data Retention &amp; Right to Erasure
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    We retain customer records only for the duration necessary to deliver academic services, fulfill tax/accounting obligations under UAE law, or satisfy dispute resolution periods.
                  </p>
                  <p>
                    <strong>Right to Be Forgotten:</strong> Parents may request complete deletion of their contact history, diagnostic records, and past communication logs at any time. Submit your erasure request to <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] font-bold hover:underline">support@ustaad.ae</a>, and all eligible records will be securely purged within 30 business days.
                  </p>
                </div>
              </article>

              {/* SECTION 10 */}
              <article id="parental-rights" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    10. Parental Rights &amp; Access Requests
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    As a parent, guardian, or client residing in the UAE, you possess statutory rights regarding your personal information:
                  </p>
                  <ul className="space-y-1.5 pl-4 list-disc text-slate-700">
                    <li><strong>Right to Access:</strong> Obtain a copy of all personal data held concerning your family.</li>
                    <li><strong>Right to Rectification:</strong> Request prompt correction of outdated or inaccurate academic information.</li>
                    <li><strong>Right to Restrict Processing:</strong> Pause communication or limit data sharing to specific subjects.</li>
                    <li><strong>Right to Withdraw Consent:</strong> Revoke consent for communications at any moment with immediate effect.</li>
                  </ul>
                </div>
              </article>

              {/* SECTION 11 */}
              <article id="policy-updates" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    11. Policy Amendments &amp; Updates
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Ustaad periodically reviews and updates this Privacy Policy to mirror amendments in UAE federal education regulations (MOHRE, KHDA, ADEK) or enhancements in our technology stack. The revised date at the top of this document indicates the latest revision. We encourage parents to periodically review this page.
                  </p>
                </div>
              </article>

              {/* SECTION 12 */}
              <article id="contact-dpo" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-[#0f4a9b]/30 bg-blue-50/50 shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    12. Data Protection Officer &amp; Contact
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    For inquiries, data access requests, or regulatory clarifications regarding our UAE privacy standards, please reach out to our dedicated compliance desk:
                  </p>
                  <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <strong className="text-[#0a1f3d] sm:w-28 shrink-0">Entity:</strong>
                      <span>Ustaad Private Tutoring UAE</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <strong className="text-[#0a1f3d] sm:w-28 shrink-0">Compliance:</strong>
                      <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] font-bold hover:underline truncate">support@ustaad.ae</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <strong className="text-[#0a1f3d] sm:w-28 shrink-0">Phone/Toll:</strong>
                      <span>800 9005 (USTAAD) / +971 56 124 9005</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <strong className="text-[#0a1f3d] sm:w-28 shrink-0">Coverage:</strong>
                      <span>Dubai, Abu Dhabi, Sharjah &amp; All Emirates</span>
                    </div>
                  </div>
                </div>
              </article>

            </main>
          </div>
        </div>
      </section>

      {/* Bottom Conversion & Help Banner */}
      <section className="py-8 sm:py-12 bg-[#f8fafd] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0a1f3d] mb-2">
            Have questions about private tutoring for your child?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
            Speak with an academic counsellor to assess your child's syllabus needs, schedule a trial session, or discuss tutor qualifications.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto">
            <a
              href="/contact#form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-bold text-xs sm:text-sm hover:brightness-110 hover:shadow-lg hover:shadow-[#C7A24A]/30 transition shadow-md transform hover:-translate-y-0.5 active:scale-95 text-center"
              style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
            >
              Book Your Free Trial Session
            </a>
            <a
              href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20have%20a%20question%20about%20tutoring."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25d366] text-white font-bold text-xs sm:text-sm hover:bg-[#20bd5a] transition shadow-md text-center"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" /> Message on WhatsApp

            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
