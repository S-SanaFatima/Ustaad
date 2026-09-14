import { useState, useEffect } from 'react';
import { Layout, GradientHeadingText, WhatsAppIcon } from './shared';


import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, localBusinessSchema } from './shared/schemas';
import { 
  FileText, 
  Scale, 
  CheckCircle2, 
  Clock, 
  RefreshCw, 
  CreditCard, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  Mail, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Home, 
  AlertTriangle,
  GraduationCap
} from 'lucide-react';

const SECTIONS = [
  { id: 'acceptance-terms', title: '1. Acceptance of Terms & Website Scope', icon: FileText },
  { id: 'tutoring-services', title: '2. Tutoring Services & Curricula Covered', icon: GraduationCap },
  { id: 'trial-session-policy', title: '3. Free Trial Session Policy', icon: Sparkles },
  { id: 'scheduling-attendance', title: '4. Scheduling, Attendance & Punctuality', icon: Clock },
  { id: 'cancellation-rescheduling', title: '5. 24-Hour Cancellation & Rescheduling', icon: RefreshCw },
  { id: 'tutor-replacement', title: '6. Tutor Replacement & Match Guarantee', icon: CheckCircle2 },
  { id: 'pricing-billing', title: '7. Transparent Pricing & Payment Terms', icon: CreditCard },
  { id: 'classroom-conduct', title: '8. Online Classroom Safeguarding & Conduct', icon: ShieldCheck },
  { id: 'intellectual-property', title: '9. Intellectual Property & Study Materials', icon: BookOpen },
  { id: 'liability-limitation', title: '10. Academic Performance & Liability', icon: AlertTriangle },
  { id: 'pausing-termination', title: '11. Pausing Lessons & Termination', icon: Scale },
  { id: 'governing-law', title: '12. UAE Governing Law & Dispute Resolution', icon: Scale },
];

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>('acceptance-terms');
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
        title="Terms of Use | Ustaad UAE · Tutoring Agreement & Service Terms"
        description="Official Terms of Use for Ustaad UAE private tutoring services. Transparent policies on free trial sessions, 24-hour rescheduling, tutor replacement guarantee, and UAE governing law."
        canonical="/terms"
        placename="United Arab Emirates"
        ogType="website"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Terms of Use', url: '/terms' }
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Ustaad Terms of Use",
            "description": "Terms of service and academic tutoring agreement for Ustaad UAE clients.",
            "url": "https://ustaad.ae/terms",
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
          <span className="text-[#0f4a9b] font-semibold truncate">Terms of Use</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="pt-8 pb-8 sm:pt-12 sm:pb-10 lg:pt-16 lg:pb-12 bg-gradient-to-b from-[#f8fafd] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3.5 border border-[#0f4a9b]/12 max-w-full">
              <Scale className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
              <span className="text-[10.5px] sm:text-[11px] font-extrabold text-[#0f4a9b] tracking-wider uppercase truncate">
                Terms of Service · Academic Tutoring Agreement
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-4 tracking-tight leading-[1.18] sm:leading-[1.15]">
              Terms of Use &amp; <GradientHeadingText text="Tutoring Agreement" />
            </h1>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-left">
              Welcome to Ustaad. These Terms of Use govern all academic 1-to-1 tutoring sessions, diagnostic assessments, trial lessons, and digital study materials provided to families across the United Arab Emirates (Dubai, Abu Dhabi, Sharjah, and all Northern Emirates).
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-y-2.5 gap-x-4 sm:gap-x-6 text-xs text-gray-500 pt-4 border-t border-slate-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                <strong>Last Reviewed:</strong> September 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                <strong>Governing Law:</strong> United Arab Emirates
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#C7A24A] shrink-0" />
                <strong>Student Support:</strong> support@ustaad.ae
              </span>
            </div>
          </div>

          {/* 4 Executive Summary Cards ("Terms At a Glance") */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_14px_34px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-[#0f4a9b] group-hover:text-white transition-all duration-300 shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1">
                Free Trial Session
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                One complimentary 30-minute diagnostic session with zero financial commitment or upfront card details.
              </p>
            </div>

            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_14px_34px_rgba(16,185,129,0.14)] hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0a1f3d] group-hover:text-emerald-700 transition-colors mb-1">
                24-Hour Rescheduling
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reschedule lessons easily at no cost with at least 24 hours' notice to your academic coordinator.
              </p>
            </div>

            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_14px_34px_rgba(15,74,155,0.14)] hover:border-blue-500/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors mb-1">
                Tutor Match Guarantee
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Free tutor replacement if you feel the teaching pacing or style is not an optimal match for your child.
              </p>
            </div>

            <div className="relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:shadow-[0_14px_34px_rgba(199,162,74,0.18)] hover:border-[#C7A24A]/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C7A24A] to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3.5 group-hover:scale-110 group-hover:bg-[#C7A24A] group-hover:text-[#0a1f3d] transition-all duration-300 shadow-xs">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-[14.5px] font-extrabold text-[#0a1f3d] group-hover:text-[#9A7B2C] transition-colors mb-1">
                UAE Legal Protection
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fair, transparent terms governed under UAE civil and commercial law with zero surprise hidden charges.
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

                {/* Direct Help Inquiries Card */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#0f4a9b]/20 bg-gradient-to-br from-[#0a1f3d] to-[#0f4a9b] text-white shadow-md">
                  <div className="flex items-center gap-2 text-[#C7A24A] text-xs font-extrabold uppercase tracking-wider mb-2">
                    <Scale className="w-4 h-4" /> Academic Advisory
                  </div>
                  <h3 className="text-sm font-bold mb-1.5">Have a question about your agreement?</h3>
                  <p className="text-xs text-blue-100 mb-4 leading-relaxed">
                    Our student support team is ready to assist with package modifications, schedule shifts, or trial requests.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="/contact#form"
                      className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-white text-[#0a1f3d] text-xs font-bold hover:bg-blue-50 transition shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0f4a9b]" /> Contact Support Desk
                    </a>
                    <a
                      href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20have%20a%20question%20about%20tutoring%20terms."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-[#25d366] text-white text-xs font-bold hover:bg-[#20bd5a] transition shadow-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp Academic Team

                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Main Column: Detailed Terms Sections */}
            <main className="lg:col-span-8 space-y-6 sm:space-y-8 lg:space-y-10">
              
              {/* SECTION 1 */}
              <article id="acceptance-terms" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    1. Acceptance of Terms &amp; Website Scope
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    By accessing ustaad.ae, submitting a tutoring request, or confirming a session schedule with our academic coordinators, you agree to be bound by these Terms of Use and our <a href="/privacy" className="text-[#0f4a9b] font-bold hover:underline">Privacy Policy</a>.
                  </p>
                  <p>
                    If you are entering into this agreement on behalf of a minor child, you confirm that you are their parent or legal guardian with the legal capacity to consent to educational mentorship.
                  </p>
                </div>
              </article>

              {/* SECTION 2 */}
              <article id="tutoring-services" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    2. Tutoring Services &amp; Curricula Covered
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Ustaad provides individualized 1-to-1 private academic tutoring and exam coaching tailored to international curricula taught in UAE schools:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-slate-700">
                    <li><strong>British Curriculum:</strong> Cambridge Assessment International Education (CAIE), Pearson Edexcel, AQA, and OCR for <a href="/igcse" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE</a>, <a href="/gcse" className="text-[#0f4a9b] font-semibold hover:underline">GCSE</a>, and <a href="/a-level" className="text-[#0f4a9b] font-semibold hover:underline">A-Level</a>.</li>
                    <li><strong>International Baccalaureate (IB):</strong> Primary Years Programme (PYP), Middle Years Programme (<a href="/myp" className="text-[#0f4a9b] font-semibold hover:underline">MYP</a>), and Diploma Programme (<a href="/dp-sl" className="text-[#0f4a9b] font-semibold hover:underline">DP SL</a> &amp; <a href="/dp-hl" className="text-[#0f4a9b] font-semibold hover:underline">DP HL</a>).</li>
                    <li><strong>American Curriculum &amp; AP:</strong> US Common Core standards and Advanced Placement (<a href="/ap" className="text-[#0f4a9b] font-semibold hover:underline">AP</a>) subject exams.</li>
                  </ul>
                  <p>
                    Tutoring is conducted via interactive, live 1-to-1 virtual whiteboard classrooms or organized in-person sessions where permitted and arranged.
                  </p>
                </div>
              </article>

              {/* SECTION 3 */}
              <article id="trial-session-policy" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    3. Free Trial Session Policy
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    To ensure full confidence in tutor compatibility and teaching methodology before any financial commitment, Ustaad offers <strong>one 30-minute free trial session per family per newly requested subject</strong>.
                  </p>
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm text-emerald-950">
                    <strong>Zero Obligation:</strong> Trial lessons do not require credit card details. If you conclude that the tutor or online format is not the ideal fit for your child, you owe nothing and will not be charged.
                  </div>
                </div>
              </article>

              {/* SECTION 4 */}
              <article id="scheduling-attendance" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    4. Scheduling, Attendance &amp; Punctuality
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Consistency is critical to academic progress. Lesson slots are reserved exclusively for the enrolled student:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-slate-700">
                    <li><strong>Punctuality:</strong> Students are requested to enter the virtual classroom 2 to 3 minutes prior to the scheduled start time with microphones, webcams, and study notes ready.</li>
                    <li><strong>Late Arrival:</strong> If a student arrives late, the session will conclude at the regularly scheduled finish time so as not to disrupt subsequent students.</li>
                    <li><strong>Technical Readiness:</strong> Families are responsible for maintaining stable high-speed broadband internet and compatible computing hardware during online tuition.</li>
                  </ul>
                </div>
              </article>

              {/* SECTION 5 */}
              <article id="cancellation-rescheduling" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <RefreshCw className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    5. 24-Hour Cancellation &amp; Rescheduling
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Because tutors reserve their professional time exclusively for your child, Ustaad maintains a clear, fair rescheduling protocol:
                  </p>
                  <div className="space-y-2.5 mt-2">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-emerald-800 block text-xs sm:text-sm mb-0.5">✓ Notice Given &gt; 24 Hours:</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">The lesson can be rescheduled to any available alternative slot at no extra charge.</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-amber-800 block text-xs sm:text-sm mb-0.5">⚠ Notice Given &lt; 24 Hours:</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">Due to tutor slot reservation, late cancellations made on the same day may be counted as delivered, except in genuine medical emergencies verified by the parent.</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <strong className="text-blue-800 block text-xs sm:text-sm mb-0.5">✓ Tutor Unavailability:</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">If a tutor is indisposed due to illness, Ustaad will reschedule the lesson promptly or provide an accredited substitute mentor.</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* SECTION 6 */}
              <article id="tutor-replacement" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    6. Tutor Replacement &amp; Match Guarantee
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Student-tutor rapport and communication harmony are essential. If at any point during an ongoing package you feel that a tutor's pacing or teaching approach does not fully match your child's learning personality, Ustaad will re-assign a new qualified subject specialist <strong>at zero administrative cost</strong>.
                  </p>
                  <p>
                    Remaining prepaid hours will transfer seamlessly to the newly assigned teacher without penalty.
                  </p>
                </div>
              </article>

              {/* SECTION 7 */}
              <article id="pricing-billing" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    7. Transparent Pricing &amp; Payment Terms
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Ustaad maintains 100% pricing transparency. All hourly rates or lesson bundle fees are agreed upon in writing prior to commencing tuition:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-slate-700">
                    <li><strong>No Registration Fees:</strong> We do not charge registration fees, placement fees, or diagnostic assessment surcharges.</li>
                    <li><strong>Payment Methods:</strong> Invoices are issued in UAE Dirhams (AED) and can be settled securely via bank transfer or approved payment gateways.</li>
                    <li><strong>Package Validity:</strong> Block packages remain valid across the academic school year and can be paused during official school breaks or family holidays.</li>
                  </ul>
                </div>
              </article>

              {/* SECTION 8 */}
              <article id="classroom-conduct" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    8. Online Classroom Safeguarding &amp; Conduct
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    We maintain a zero-tolerance policy for disruptive or inappropriate behavior in physical and virtual learning spaces:
                  </p>
                  <ul className="space-y-2 pl-4 list-disc text-slate-700">
                    <li>Mutual respect, professional communication, and constructive engagement are mandatory between students and educators.</li>
                    <li>Unauthorised recording, screen-capturing, or public posting of classroom video feeds without written permission is strictly prohibited.</li>
                    <li>Tutors are instructed to terminate any session immediately if a participant exhibits abusive language or conduct.</li>
                  </ul>
                </div>
              </article>

              {/* SECTION 9 */}
              <article id="intellectual-property" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    9. Intellectual Property &amp; Study Materials
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    All proprietary curriculum notes, exam board question packs, diagnostic mark sheets, and website articles published on ustaad.ae remain the exclusive intellectual property of Ustaad or its licensors.
                  </p>
                  <p>
                    Study materials supplied during tuition are licensed solely for the personal, non-commercial educational use of the enrolled student. Resale, public web redistribution, or unauthorized duplication is prohibited under UAE copyright laws.
                  </p>
                </div>
              </article>

              {/* SECTION 10 */}
              <article id="liability-limitation" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    10. Academic Performance &amp; Liability
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    While Ustaad tutors are curriculum specialists who employ rigorous past-paper mark scheme analysis, active recall drills, and diagnostic feedback, academic outcomes ultimately depend on student engagement, homework completion, exam stamina, and independent study.
                  </p>
                  <p>
                    Ustaad does not guarantee specific official exam grades or school entrance exam acceptance. To the maximum extent permitted by UAE law, Ustaad's aggregate liability for any claim arising from our services is limited to the fees paid for the affected lessons.
                  </p>
                </div>
              </article>

              {/* SECTION 11 */}
              <article id="pausing-termination" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b]/10 text-[#0f4a9b] flex items-center justify-center">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    11. Pausing Lessons &amp; Termination
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    Families may pause active tutoring during school holidays, family travel, or exam preparation breaks by providing 7 days' advance notice to their academic coordinator.
                  </p>
                  <p>
                    Either party may terminate the tutoring relationship at any time. In the event of termination, any unutilized prepaid hours will be settled or refunded in accordance with the specific written package agreement.
                  </p>
                </div>
              </article>

              {/* SECTION 12 */}
              <article id="governing-law" className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-[#0f4a9b]/30 bg-blue-50/50 shadow-xs scroll-mt-20 sm:scroll-mt-24 break-words">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0f4a9b] text-white flex items-center justify-center shrink-0">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-[#0a1f3d]">
                    12. UAE Governing Law &amp; Dispute Resolution
                  </h2>
                </div>
                <div className="text-sm sm:text-[14.5px] text-slate-700 leading-[1.75] space-y-3.5">
                  <p>
                    These Terms of Use and any separate agreements whereby we provide you educational services shall be governed by and construed in accordance with the <strong>federal laws of the United Arab Emirates</strong> and the applicable local laws of the Emirate of Dubai.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts of the United Arab Emirates.
                  </p>
                  <div className="mt-3 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <strong className="text-[#0a1f3d] sm:w-28 shrink-0">Inquiries:</strong>
                      <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] font-bold hover:underline truncate">support@ustaad.ae</a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <strong className="text-[#0a1f3d] sm:w-28 shrink-0">Phone:</strong>
                      <span>800 9005 (USTAAD) / +971 56 124 9005</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <strong className="text-[#0a1f3d] sm:w-28 shrink-0">Headquarters:</strong>
                      <span>Dubai &amp; Abu Dhabi, United Arab Emirates</span>
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
            Ready to find the right private tutor for your child?
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
            Book a free 30-minute diagnostic session with an expert tutor matched to your exact curriculum, syllabus code, and grade level.
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
              href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20would%20like%20to%20book%20a%20free%20trial%20session."
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
