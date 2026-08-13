import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, ChevronRight, Menu, X, ArrowRight,
  Landmark, Flag, Globe,
  Calculator, Atom, FlaskConical, Dna, BookOpen, Briefcase,
  BookMarked, LineChart, BarChart3, Settings, Award, Lightbulb,
  Sigma, Target, ClipboardCheck, DollarSign, PenTool,
} from 'lucide-react';
import { GoldButton } from './GoldButton';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  scrolled?: boolean;
  logoAlt?: string;
}

export default function Header({ scrolled = false, logoAlt = "Ustaad logo — premium 1-to-1 private tutoring service across the UAE since 2015" }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setMobileExpanded(mobileExpanded === section ? null : section);
  };

  const toggleDesktop = (section: string, e: React.MouseEvent) => {
    e.preventDefault();
    setDesktopOpen(desktopOpen === section ? null : section);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('.desktop-dropdown-wrapper')) {
        setDesktopOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed left-0 right-0 transition-all duration-300 ${
        scrolled 
          ? 'top-0' 
          : 'top-6'
      }`}
      style={{ 
        zIndex: 9999,
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(15, 74, 155, 0.1)',
        boxShadow: '0 4px 24px rgba(15, 74, 155, 0.08), 0 0 40px rgba(15, 74, 155, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <a href="/"><img src="/ustaad-private-tutors-uae-logo.png" alt={logoAlt} className="h-8 lg:h-10 object-contain" /></a>

          {/* Desktop Navigation & Actions Block with center-aligned LanguageSwitcher */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-6">
            <nav className="flex items-center gap-4 xl:gap-6">
              <a href="/about" className="text-[#0a1f3d] hover:text-[#0f4a9b] text-[13px] font-bold transition">{"About"}</a>
              <div className="relative group/curriculum desktop-dropdown-wrapper">
                <a href="/curriculum" className="text-[#0a1f3d] hover:text-[#0f4a9b] text-[13px] font-bold transition flex items-center gap-1">
                  {"Curriculum"} <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover/curriculum:rotate-180" />
                </a>
                <div className={`absolute top-full left-0 mt-2 w-[min(660px,calc(100vw-2rem))] bg-white rounded-2xl shadow-xl border border-gray-100 p-5 transition-all z-50 ${desktopOpen === 'curriculum' ? 'opacity-100 visible' : 'opacity-0 invisible group-hover/curriculum:opacity-100 group-hover/curriculum:visible'}`}>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <a href="/british-curriculum" className="flex items-center gap-2 px-3 py-2 text-xs font-extrabold text-[#0f4a9b] uppercase tracking-wider hover:bg-blue-50 rounded-lg transition"><Landmark className="h-3.5 w-3.5" /> {"British"}</a>
                      <a href="/igcse" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg">{"IGCSE"}</a>
                      <a href="/gcse" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg">{"GCSE"}</a>
                      <a href="/a-level" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg">{"A-Level"}</a>
                    </div>
                    <div>
                      <a href="/american-curriculum" className="flex items-center gap-2 px-3 py-2 text-xs font-extrabold text-[#0f4a9b] uppercase tracking-wider hover:bg-blue-50 rounded-lg transition"><Flag className="h-3.5 w-3.5" /> {"American"}</a>
                      <a href="/middle-school" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg">{"Middle School"}</a>
                      <a href="/high-school" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg">{"High School"}</a>
                      <a href="/ap" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg">{"AP Courses"}</a>
                    </div>
                    <div>
                      <a href="/ib-curriculum" className="flex items-center gap-2 px-3 py-2 text-xs font-extrabold text-[#0f4a9b] uppercase tracking-wider hover:bg-blue-50 rounded-lg transition"><Globe className="h-3.5 w-3.5" /> {"IB"}</a>
                      <a href="/myp" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg">{"MYP"}</a>
                      <a href="/dp-sl" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg whitespace-nowrap">{"Diploma Programme (SL)"}</a>
                      <a href="/dp-hl" className="block px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg whitespace-nowrap">{"Diploma Programme (HL)"}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group/subjects desktop-dropdown-wrapper">
                <a href="/subjects" className="text-[#0a1f3d] hover:text-[#0f4a9b] text-[13px] font-bold transition flex items-center gap-1">
                  {"Subjects"} <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover/subjects:rotate-180" />
                </a>
                <div className={`absolute top-full right-0 mt-2 w-[340px] bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-3 transition-all z-50 max-h-[85vh] overflow-y-auto space-y-3 ${desktopOpen === 'subjects' ? 'opacity-100 visible' : 'opacity-0 invisible group-hover/subjects:opacity-100 group-hover/subjects:visible'}`}>
                  {/* Core Subjects */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xs font-extrabold text-[#0f4a9b] uppercase tracking-wider">{"Core Subjects"}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a href="/maths" className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Calculator className="h-4 w-4 text-white" /></div>
                        <span>{"Maths"}</span>
                      </a>
                      <a href="/physics" className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Atom className="h-4 w-4 text-white" /></div>
                        <span>{"Physics"}</span>
                      </a>
                      <a href="/chemistry" className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><FlaskConical className="h-4 w-4 text-white" /></div>
                        <span>{"Chemistry"}</span>
                      </a>
                      <a href="/biology" className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Dna className="h-4 w-4 text-white" /></div>
                        <span>{"Biology"}</span>
                      </a>
                      <a href="/english" className="col-span-2 flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><PenTool className="h-4 w-4 text-white" /></div>
                        <span>{"English"}</span>
                      </a>
                    </div>
                  </div>

                  {/* Commerce & Business */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm">
                        <Briefcase className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xs font-extrabold text-[#C7A24A] uppercase tracking-wider">{"Commerce & Business"}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a href="/business" className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl hover:from-amber-50 hover:to-amber-50/30 transition-all border border-transparent hover:border-amber-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm"><Briefcase className="h-4 w-4 text-white" /></div>
                        <span>{"Business"}</span>
                      </a>
                      <a href="/economics" className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl hover:from-amber-50 hover:to-amber-50/30 transition-all border border-transparent hover:border-amber-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm"><LineChart className="h-4 w-4 text-white" /></div>
                        <span>{"Economics"}</span>
                      </a>
                      <a href="/accounting" className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl hover:from-amber-50 hover:to-amber-50/30 transition-all border border-transparent hover:border-amber-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm"><ClipboardCheck className="h-4 w-4 text-white" /></div>
                        <span>{"Accounting"}</span>
                      </a>
                      <a href="/finance" className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl hover:from-amber-50 hover:to-amber-50/30 transition-all border border-transparent hover:border-amber-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm"><DollarSign className="h-4 w-4 text-white" /></div>
                        <span>{"Finance"}</span>
                      </a>
                    </div>
                  </div>

                  {/* Specialized & Test Prep */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm">
                        <Target className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xs font-extrabold text-[#0f4a9b] uppercase tracking-wider">{"Specialized & Test Prep"}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <a href="/statistics" className="flex flex-col items-center gap-2 px-2 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Sigma className="h-5 w-5 text-white" /></div>
                        <span className="text-center text-[11px]">{"Statistics"}</span>
                      </a>
                      <a href="/engineering" className="flex flex-col items-center gap-2 px-2 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Settings className="h-5 w-5 text-white" /></div>
                        <span className="text-center text-[11px]">{"Engineering"}</span>
                      </a>
                      <a href="/exam-preparation" className="flex flex-col items-center gap-2 px-2 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Target className="h-5 w-5 text-white" /></div>
                        <span className="text-center text-[11px]">{"Exam Prep"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a href="/tutors" className="text-[#0a1f3d] hover:text-[#0f4a9b] text-[13px] font-bold transition">{"Tutors"}</a>
              <a href="/blogs" className="text-[#0a1f3d] hover:text-[#0f4a9b] text-[13px] font-bold transition">{"Blogs"}</a>
              <a href="/contact" className="text-[#0a1f3d] hover:text-[#0f4a9b] text-[13px] font-bold transition">{"Contact"}</a>
            </nav>

            {/* Language Switcher center-aligned inside the gap between 'Contact' and 'How It Works' */}
            <LanguageSwitcher variant="header" />

            <div className="flex items-center gap-3 xl:gap-4">
              <a href="/how-it-works" className="text-[#0a1f3d] hover:text-[#0f4a9b] text-[13px] font-bold transition">{"How Ustaad Works"}</a>
              <a href="/contact#form" className="inline-flex items-center justify-center bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-full px-4 py-2 text-[13px] hover:brightness-110 hover:shadow-lg hover:shadow-[#C7A24A]/30 transition transform hover:-translate-y-0.5 active:scale-95">
                {"Book a Tutor"}
              </a>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher variant="header" mobile={true} />
            {!mobileOpen && (
              <a href="/contact#form" className="inline-flex items-center justify-center bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-full px-3.5 py-2 text-xs hover:brightness-110 transition whitespace-nowrap shadow-md">
                Book a Tutor
              </a>
            )}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-gray-700 flex-shrink-0 hover:bg-slate-100 rounded-full transition-colors duration-200">
              {mobileOpen ? <X className="h-6 w-6 text-[#0f4a9b]" /> : <Menu className="h-6 w-6 text-[#0a1f3d]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, simple block flow with frosted glass premium feel */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200/50 overflow-y-auto shadow-xl" style={{ maxHeight: 'calc(100vh - 64px)' }}>
          <nav className="flex flex-col px-4 py-3 pb-8">
            <a href="/about" onClick={() => setMobileOpen(false)} className="flex items-center justify-between text-[#0a1f3d] font-bold py-4 px-3 border-b border-gray-100 text-base">
              {"About"}
            </a>

            {/* Curriculum Accordion */}
            <div className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <a href="/curriculum" onClick={() => setMobileOpen(false)} className="flex-1 text-[#0a1f3d] font-bold py-4 px-3 text-base">
                  {"Curriculum"}
                </a>
                <button onClick={() => toggleSection('curriculum')} className="px-3 py-4">
                  <ChevronDown className={`h-4 w-4 text-[#C7A24A] transition-transform duration-200 ${mobileExpanded === 'curriculum' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileExpanded === 'curriculum' && (
                <div className="pb-4 space-y-3 bg-gradient-to-b from-gray-50 to-white rounded-2xl mx-1 mb-2 px-3 py-4 shadow-inner">
                  {/* British Section */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <a href="/british-curriculum" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-sm font-extrabold text-[#0a1f3d]">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-md">
                        <Landmark className="h-4 w-4 text-white" />
                      </div>
                      <span>{"British Curriculum"}</span>
                    </a>
                    <div className="mt-2 ml-12 space-y-1">
                      <a href="/igcse" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg transition-colors">{"IGCSE"}</a>
                      <a href="/gcse" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg transition-colors">{"GCSE"}</a>
                      <a href="/a-level" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-blue-50 hover:text-[#0f4a9b] rounded-lg transition-colors">{"A-Level"}</a>
                    </div>
                  </div>

                  {/* American Section */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <a href="/american-curriculum" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-sm font-extrabold text-[#0a1f3d]">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-md">
                        <Flag className="h-4 w-4 text-white" />
                      </div>
                      <span>{"American Curriculum"}</span>
                    </a>
                    <div className="mt-2 ml-12 space-y-1">
                      <a href="/middle-school" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-amber-50 hover:text-[#A8892A] rounded-lg transition-colors">{"Middle School"}</a>
                      <a href="/high-school" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-amber-50 hover:text-[#A8892A] rounded-lg transition-colors">{"High School"}</a>
                      <a href="/ap" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-amber-50 hover:text-[#A8892A] rounded-lg transition-colors">{"AP Courses"}</a>
                    </div>
                  </div>

                  {/* IB Section */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <a href="/ib-curriculum" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 text-sm font-extrabold text-[#0a1f3d]">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-md">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <span>{"IB Curriculum"}</span>
                    </a>
                    <div className="mt-2 ml-12 space-y-1">
                      <a href="/myp" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-emerald-50 hover:text-[#059669] rounded-lg transition-colors">{"MYP"}</a>
                      <a href="/dp-sl" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-emerald-50 hover:text-[#059669] rounded-lg transition-colors">{"Diploma Programme (SL)"}</a>
                      <a href="/dp-hl" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-emerald-50 hover:text-[#059669] rounded-lg transition-colors">{"Diploma Programme (HL)"}</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Subjects Accordion */}
            <div className="border-b border-gray-100">
              <div className="flex items-center justify-between">
                <a href="/subjects" onClick={() => setMobileOpen(false)} className="flex-1 text-[#0a1f3d] font-bold py-4 px-3 text-base">
                  {"Subjects"}
                </a>
                <button onClick={() => toggleSection('subjects')} className="px-3 py-4">
                  <ChevronDown className={`h-4 w-4 text-[#C7A24A] transition-transform duration-200 ${mobileExpanded === 'subjects' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileExpanded === 'subjects' && (
                <div className="pb-4 bg-gradient-to-b from-gray-50 to-white rounded-2xl mx-1 mb-2 px-3 py-4 shadow-inner space-y-3">
                  {/* Core Subjects */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xs font-extrabold text-[#0f4a9b] uppercase tracking-wider">{"Core Subjects"}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a href="/maths" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Calculator className="h-4 w-4 text-white" /></div>
                        <span>{"Maths"}</span>
                      </a>
                      <a href="/physics" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Atom className="h-4 w-4 text-white" /></div>
                        <span>{"Physics"}</span>
                      </a>
                      <a href="/chemistry" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><FlaskConical className="h-4 w-4 text-white" /></div>
                        <span>{"Chemistry"}</span>
                      </a>
                      <a href="/biology" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Dna className="h-4 w-4 text-white" /></div>
                        <span>{"Biology"}</span>
                      </a>
                      <a href="/english" onClick={() => setMobileOpen(false)} className="col-span-2 flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><PenTool className="h-4 w-4 text-white" /></div>
                        <span>{"English"}</span>
                      </a>
                    </div>
                  </div>

                  {/* Commerce & Business */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm">
                        <Briefcase className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xs font-extrabold text-[#C7A24A] uppercase tracking-wider">{"Commerce & Business"}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a href="/business" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl hover:from-amber-50 hover:to-amber-50/30 transition-all border border-transparent hover:border-amber-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm"><Briefcase className="h-4 w-4 text-white" /></div>
                        <span>{"Business"}</span>
                      </a>
                      <a href="/economics" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl hover:from-amber-50 hover:to-amber-50/30 transition-all border border-transparent hover:border-amber-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm"><LineChart className="h-4 w-4 text-white" /></div>
                        <span>{"Economics"}</span>
                      </a>
                      <a href="/accounting" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl hover:from-amber-50 hover:to-amber-50/30 transition-all border border-transparent hover:border-amber-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm"><ClipboardCheck className="h-4 w-4 text-white" /></div>
                        <span>{"Accounting"}</span>
                      </a>
                      <a href="/finance" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-amber-50/50 to-transparent rounded-xl hover:from-amber-50 hover:to-amber-50/30 transition-all border border-transparent hover:border-amber-100">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C7A24A] to-[#A8892A] flex items-center justify-center shadow-sm"><DollarSign className="h-4 w-4 text-white" /></div>
                        <span>{"Finance"}</span>
                      </a>
                    </div>
                  </div>

                  {/* Specialized & Test Prep */}
                  <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-3 px-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm">
                        <Target className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xs font-extrabold text-[#0f4a9b] uppercase tracking-wider">{"Specialized & Test Prep"}</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <a href="/statistics" onClick={() => setMobileOpen(false)} className="flex flex-col items-center gap-2 px-2 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Sigma className="h-5 w-5 text-white" /></div>
                        <span className="text-center text-xs">{"Statistics"}</span>
                      </a>
                      <a href="/engineering" onClick={() => setMobileOpen(false)} className="flex flex-col items-center gap-2 px-2 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Settings className="h-5 w-5 text-white" /></div>
                        <span className="text-center text-xs">{"Engineering"}</span>
                      </a>
                      <a href="/exam-preparation" onClick={() => setMobileOpen(false)} className="flex flex-col items-center gap-2 px-2 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-blue-50/50 to-transparent rounded-xl hover:from-blue-50 hover:to-blue-50/30 transition-all border border-transparent hover:border-blue-100">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] flex items-center justify-center shadow-sm"><Target className="h-5 w-5 text-white" /></div>
                        <span className="text-center text-xs">{"Exam Preparation"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/tutors" onClick={() => setMobileOpen(false)} className="flex items-center justify-between text-[#0a1f3d] font-bold py-4 px-3 border-b border-gray-100 text-base">
              {"Tutors"}
            </a>
            <a href="/blogs" onClick={() => setMobileOpen(false)} className="flex items-center justify-between text-[#0a1f3d] font-bold py-4 px-3 border-b border-gray-100 text-base">
              {"Blogs"}
            </a>
                        <a href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-between text-[#0a1f3d] font-bold py-4 px-3 border-b border-gray-100 text-base">
              {"Contact"}
            </a>
            <a href="/how-it-works" onClick={() => setMobileOpen(false)} className="flex items-center justify-between text-[#0a1f3d] font-bold py-4 px-3 border-b border-gray-100 text-base">
              {"How Ustaad Works"}
            </a>

            <div className="mt-6 px-1">
              <a href="/contact#form" onClick={() => setMobileOpen(false)} className="w-full inline-flex items-center justify-center bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-full px-5 py-4 text-base hover:brightness-110 transition">
                {"Book a Tutor"}
              </a>
              
              {/* Social Links */}
              <div className="flex items-center justify-center gap-3 pt-4 border-t border-gray-200">
                <a href="https://www.facebook.com/ustaadAE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-lg transition-all" aria-label="Facebook">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/ustaad.ae" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-lg transition-all" aria-label="Instagram">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://x.com/ustaadAE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-lg transition-all" aria-label="X/Twitter">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.308l7.732-8.835L.424 2.25h6.7l4.676 6.188 5.344-6.188zM17.55 19.5h1.828L5.566 4.075H3.66l13.89 15.425z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/ustaaduae/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-lg transition-all" aria-label="LinkedIn">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
