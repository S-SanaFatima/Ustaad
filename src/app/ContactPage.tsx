import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, CheckCircle, ChevronRight, Clock, Mail, MapPin, Phone, Send, Sparkles, User, Users, BookOpen, GraduationCap, HelpCircle, MessageSquare,
  ChevronDown, MessageCircle, Building2
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

// Country codes data
const countryCodes = [
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+966', country: 'Saudi', flag: '🇸🇦' },
  { code: '+20', country: 'Egypt', flag: '🇪🇬' },
  { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
  { code: '+974', country: 'Qatar', flag: '🇶🇦' },
  { code: '+968', country: 'Oman', flag: '🇴🇲' },
  { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
  { code: '+962', country: 'Jordan', flag: '🇯🇴' },
  { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
  { code: '+90', country: 'Turkey', flag: '🇹🇷' },
  { code: '+98', country: 'Iran', flag: '🇮🇷' },
];


function CustomSelect({ id, name, value, onChange, options, placeholder, icon }: {
  id: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  icon?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
        tabIndex={-1}
        aria-labelledby={`${id}-label`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <button
        type="button"
        aria-labelledby={`${id}-label`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        onClick={() => setOpen(!open)}
        className={`w-full ${icon ? 'pl-9' : 'pl-4'} pr-8 py-3 bg-gray-50 border rounded-xl text-sm text-left transition-all ${
          open ? 'border-[#0f4a9b] ring-2 ring-[#0f4a9b]/10 bg-white' : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">{icon}</span>}
        <span className={value ? 'text-[#0a1f3d]' : 'text-gray-400'}>{value || placeholder}</span>
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180 text-[#0f4a9b]' : ''}`} />
      </button>
      {open && (
        <div id={`${id}-listbox`} role="listbox" className="absolute top-[calc(100%+6px)] left-0 right-0 bg-white border border-[#0f4a9b]/20 rounded-xl shadow-[0_8px_30px_rgba(15,74,155,0.14)] z-50 overflow-hidden">
          <div className="max-h-52 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2.5 ${
                  value === opt
                    ? 'bg-[#eff5ff] text-[#0f4a9b] font-semibold'
                    : 'text-[#0a1f3d] hover:bg-[#f5f8ff] hover:text-[#0f4a9b]'
                }`}
              >
                {value === opt && <div className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] flex-shrink-0" />}
                <span className={value === opt ? '' : 'pl-4'}>{opt}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PhoneInput({ id, name, selectedCountry, setSelectedCountry, showDropdown, setShowDropdown, value, onChange }: {
  id: string;
  name: string;
  selectedCountry: typeof countryCodes[0];
  setSelectedCountry: (c: typeof countryCodes[0]) => void;
  showDropdown: boolean;
  setShowDropdown: (v: boolean) => void;
  value: string;
  onChange: (v: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [setShowDropdown]);

  return (
    <div className="flex" ref={ref}>
      <select
        id={`${id}-country`}
        name={`${name}CountryCode`}
        value={selectedCountry.code}
        onChange={(e) => {
          const country = countryCodes.find((c) => c.code === e.target.value);
          if (country) setSelectedCountry(country);
        }}
        className="sr-only"
        tabIndex={-1}
        aria-labelledby={`${id}-country-label`}
      >
        {countryCodes.map((c) => (
          <option key={c.code} value={c.code}>{c.country} ({c.code})</option>
        ))}
      </select>
      <div className="relative flex-shrink-0">
        <label id={`${id}-country-label`} htmlFor={`${id}-country`} className="sr-only">Country code</label>
        <button
          type="button"
          aria-labelledby={`${id}-country-label`}
          aria-haspopup="listbox"
          aria-expanded={showDropdown}
          onClick={() => setShowDropdown(!showDropdown)}
          className={`flex items-center gap-1 px-3 py-3 bg-gray-50 border border-r-0 rounded-l-xl hover:bg-gray-100 transition-colors whitespace-nowrap ${showDropdown ? 'border-[#0f4a9b]' : 'border-gray-200'}`}
        >
          <span className="text-sm">{selectedCountry.flag}</span>
          <span className="text-xs font-semibold text-[#0a1f3d]">{selectedCountry.code}</span>
          <ChevronDown className={`h-3 w-3 text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
        </button>
        {showDropdown && (
          <div className="absolute top-[calc(100%+6px)] left-0 w-56 bg-white border border-[#0f4a9b]/20 rounded-xl shadow-[0_8px_30px_rgba(15,74,155,0.14)] z-50 overflow-hidden">
            <div className="max-h-52 overflow-y-auto">
              {countryCodes.map((c) => (
                <button key={c.code} type="button"
                  onClick={() => { setSelectedCountry(c); setShowDropdown(false); }}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 text-left transition-colors ${selectedCountry.code === c.code ? 'bg-[#eff5ff] text-[#0f4a9b]' : 'hover:bg-[#f5f8ff] text-[#0a1f3d]'}`}
                >
                  <span className="text-sm">{c.flag}</span>
                  <span className="text-xs font-semibold">{c.code}</span>
                  <span className="text-xs text-gray-500">{c.country}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <input
        type="tel"
        id={id}
        name={name}
        autoComplete="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="50 123 4567"
        className="flex-1 min-w-0 px-4 py-3 bg-gray-50 border border-l-0 border-gray-200 rounded-r-xl text-sm text-[#0a1f3d] placeholder:text-gray-400 focus:outline-none focus:border-[#0f4a9b] focus:ring-2 focus:ring-[#0f4a9b]/10 transition-all"
      />
    </div>
  );
}

function ModernContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userType, setUserType] = useState<'parent' | 'student' | null>(null);
  const [formData, setFormData] = useState({
    parentName: '', phone: '', email: '',
    studentName: '', studentAge: '', area: '',
    curriculum: '', subject: '', level: '',
    requirements: '',
  });
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for the field when user types
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const updateNumberField = (field: string, value: string) => {
    const numbersOnly = value.replace(/[^0-9]/g, '');
    updateField(field, numbersOnly);
  };

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateStep = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!userType) { newErrors.userType = 'Please select a role'; }
    }
    if (step === 2) {
      if (userType === 'parent' && !formData.parentName.trim()) newErrors.parentName = 'Required';
      if (!formData.phone.trim()) newErrors.phone = 'Required';
      if (!formData.email.trim()) newErrors.email = 'Required';
      else if (!isValidEmail(formData.email)) newErrors.email = 'Enter a valid email';
      if (!formData.studentName.trim()) newErrors.studentName = 'Required';
      if (!formData.studentAge.trim()) newErrors.studentAge = 'Required';
      if (!formData.area.trim()) newErrors.area = 'Required';
    }
    if (step === 3) {
      if (!formData.curriculum) newErrors.curriculum = 'Required';
      if (!formData.subject) newErrors.subject = 'Required';
      if (!formData.level.trim()) newErrors.level = 'Required';
    }
    // Step 4 (requirements) is optional
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (step === 5) { setIsSubmitted(true); return; }
    setStep(s => Math.min(s + 1, 5));
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const progress = ((step - 1) / 4) * 100;

  const inputCls = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#0a1f3d] placeholder:text-gray-400 focus:outline-none focus:border-[#0f4a9b] focus:ring-2 focus:ring-[#0f4a9b]/10 transition-all";
  const inputErrCls = "w-full px-4 py-3 bg-red-50/50 border border-red-300 rounded-xl text-sm text-[#0a1f3d] placeholder:text-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/10 transition-all";
  const labelCls = "block text-xs font-bold text-[#0a1f3d] mb-1.5";

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto text-center py-4 px-4">
        <div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(15,74,155,0.08)] p-6 sm:p-12 overflow-hidden flex flex-col items-center">
          <div className="relative mb-8 mt-4">
            <div className="w-24 h-24 bg-[#0a1f3d] rounded-full flex items-center justify-center relative z-10">
               <svg className="w-10 h-10 text-[#C7A24A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
               </svg>
            </div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#0a1f3d] rounded-full -translate-y-2 translate-x-4"></div>
            <div className="absolute top-2 left-0 w-1.5 h-1.5 bg-[#C7A24A] rounded-full -translate-x-3"></div>
            <div className="absolute bottom-4 left-0 w-1 h-1 bg-[#C7A24A] rounded-full -translate-x-4"></div>
            <div className="absolute bottom-0 right-4 w-1.5 h-1.5 bg-[#0a1f3d] rounded-full translate-y-4"></div>
          </div>
          
          <h2 className="text-3xl font-extrabold text-[#0a1f3d] mb-4">Thank you</h2>
          <p className="text-lg text-[#0a1f3d] font-medium mb-2">Your request has been received.</p>
          <p className="text-gray-500 mb-10 max-w-sm">Our academic team will review your requirements and assist you further shortly.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <a
              href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20just%20submitted%20my%20tutoring%20request%20form."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] hover:bg-[#1fb858] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Ask on WhatsApp
            </a>
            <a href="/" className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-[#0a1f3d] font-bold rounded-xl hover:bg-gray-50 transition-colors">
              Return to Homepage
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header section (pill, title, subtitle) */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A24A]/30 bg-[#C7A24A]/5 mb-6">
          <span className="text-[#C7A24A] text-[10px] font-extrabold uppercase tracking-widest flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] inline-block mr-2" />
            USTAAD · FIND A TUTOR
          </span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          Let's find the right mentor
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          A few quick questions and we'll match you with a qualified tutor tailored to your goals.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(15,74,155,0.08)] overflow-hidden">
        {/* Progress Bar & Header */}
        <div className="px-4 sm:px-8 pt-6 sm:pt-8 pb-4">
          <div className="flex justify-between items-end mb-4">
            <span className="text-[#0a1f3d] font-bold text-sm">Step {step} of 5</span>
            <span className="text-[#C7A24A] font-bold text-sm">{progress}% Complete</span>
          </div>
          {/* Progress bar line */}
          <div className="w-full h-1 bg-gray-100 rounded-full mb-6">
            <div className="h-full bg-[#C7A24A] rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center text-[11px] sm:text-xs font-semibold text-gray-400 mb-2 px-1">
            <span className={step >= 1 ? "text-[#0a1f3d]" : ""}>Role</span>
            <span className={step >= 2 ? "text-[#0a1f3d]" : ""}>Details</span>
            <span className={step >= 3 ? "text-[#0a1f3d]" : ""}>Academic</span>
            <span className={step >= 4 ? "text-[#0a1f3d]" : ""}>Requirements</span>
            <span className={step >= 5 ? "text-[#0a1f3d]" : ""}>Match</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-4 sm:p-8">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Who is this for?</h3>
              <p className="text-gray-500 mb-6 text-sm">Select the option that best describes you.</p>

              <div className="grid sm:grid-cols-2 gap-5 mb-4">
                {/* Option: Parent */}
                <button
                  type="button"
                  onClick={() => setUserType('parent')}
                  className={`text-left p-6 rounded-2xl border-2 transition-all group ${
                    userType === 'parent' 
                      ? 'border-[#C7A24A] bg-white shadow-[0_8px_20px_rgba(199,162,74,0.12)]' 
                      : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    userType === 'parent' ? 'bg-[#0a1f3d]' : 'bg-[#eff5ff] group-hover:bg-[#e4efff]'
                  }`}>
                    <Users className={`h-6 w-6 ${userType === 'parent' ? 'text-white' : 'text-[#0a1f3d]'}`} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0a1f3d] mb-1">I'm a Parent</h4>
                  <p className="text-gray-500 text-sm">Looking for a tutor for my child</p>
                </button>

                {/* Option: Student */}
                <button
                  type="button"
                  onClick={() => setUserType('student')}
                  className={`text-left p-6 rounded-2xl border-2 transition-all group ${
                    userType === 'student' 
                      ? 'border-[#C7A24A] bg-white shadow-[0_8px_20px_rgba(199,162,74,0.12)]' 
                      : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    userType === 'student' ? 'bg-[#0a1f3d]' : 'bg-[#eff5ff] group-hover:bg-[#e4efff]'
                  }`}>
                    <GraduationCap className={`h-6 w-6 ${userType === 'student' ? 'text-white' : 'text-[#0a1f3d]'}`} />
                  </div>
                  <h4 className="text-lg font-bold text-[#0a1f3d] mb-1">I'm a Student</h4>
                  <p className="text-gray-500 text-sm">Looking for a tutor for myself</p>
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Parent & Student details</h3>
              <p className="text-gray-500 mb-6 text-sm">We'll use these to contact you about your tutor match.</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {userType === 'parent' && (
                  <div>
                    <label htmlFor="contact-parentName" className={labelCls}>Parent's full name <span className="text-red-400">*</span></label>
                    <input id="contact-parentName" type="text" value={formData.parentName} onChange={(e) => updateField('parentName', e.target.value)} className={errors.parentName ? inputErrCls : inputCls} placeholder="Parent's full name" />
                    {errors.parentName && <p className="text-red-400 text-xs mt-1">{errors.parentName}</p>}
                  </div>
                )}
                <div>
                  <label htmlFor="contact-phone" className={labelCls}>Phone number <span className="text-red-400">*</span></label>
                  <PhoneInput
                    id="contact-phone"
                    name="phone"
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    showDropdown={showCountryDropdown}
                    setShowDropdown={setShowCountryDropdown}
                    value={formData.phone}
                    onChange={(v) => updateNumberField('phone', v)}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelCls}>Email address <span className="text-red-400">*</span></label>
                  <input id="contact-email" type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className={errors.email ? inputErrCls : inputCls} placeholder="Email address" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="contact-studentName" className={labelCls}>Student's name <span className="text-red-400">*</span></label>
                  <input id="contact-studentName" type="text" value={formData.studentName} onChange={(e) => updateField('studentName', e.target.value)} className={errors.studentName ? inputErrCls : inputCls} placeholder="Student's name" />
                  {errors.studentName && <p className="text-red-400 text-xs mt-1">{errors.studentName}</p>}
                </div>
                <div>
                  <label htmlFor="contact-studentAge" className={labelCls}>Student's age <span className="text-red-400">*</span></label>
                  <input id="contact-studentAge" type="text" inputMode="numeric" value={formData.studentAge} onChange={(e) => updateNumberField('studentAge', e.target.value)} className={errors.studentAge ? inputErrCls : inputCls} placeholder="Student's age" />
                  {errors.studentAge && <p className="text-red-400 text-xs mt-1">{errors.studentAge}</p>}
                </div>
                <div>
                  <label htmlFor="contact-area" className={labelCls}>Area in UAE (e.g. Dubai Marina, Al Reem, Sharjah) <span className="text-red-400">*</span></label>
                  <input id="contact-area" type="text" value={formData.area} onChange={(e) => updateField('area', e.target.value)} className={errors.area ? inputErrCls : inputCls} placeholder="Area in UAE" />
                  {errors.area && <p className="text-red-400 text-xs mt-1">{errors.area}</p>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Academic information</h3>
              <p className="text-gray-500 mb-6 text-sm">Tell us about the curriculum and subject.</p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="contact-curriculum" className="sr-only">Curriculum</label>
                  <CustomSelect
                    id="contact-curriculum"
                    name="curriculum"
                    value={formData.curriculum}
                    onChange={(v) => updateField('curriculum', v)}
                    placeholder="Curriculum"
                    options={[
                      'British — IGCSE',
                      'British — GCSE',
                      'British — A-Level',
                      'American — Middle School',
                      'American — High School',
                      'American — AP Courses',
                      'IB — MYP',
                      'IB — Diploma Programme (SL)',
                      'IB — Diploma Programme (HL)',
                      'Exam Preparation'
                    ]}
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="sr-only">Subject</label>
                  <CustomSelect
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(v) => updateField('subject', v)}
                    placeholder="Subject"
                    options={[
                      'Mathematics', 'Physics', 'Chemistry', 'Biology',
                      'English', 'Business', 'Economics', 'Accounting',
                      'Engineering', 'Finance', 'Statistics', 'Exam Preparation'
                    ]}
                  />
                </div>
                <div>
                  <label htmlFor="contact-level" className="sr-only">Grade, year or exam</label>
                  <input 
                    id="contact-level" 
                    type="text" 
                    value={formData.level} 
                    onChange={(e) => updateField('level', e.target.value)} 
                    className={inputCls} 
                    placeholder="Grade, year or exam (e.g. Year 10, IGCSE, SAT)" 
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Learning requirements</h3>
              <p className="text-gray-500 mb-6 text-sm">Share any details that will help us find the ideal mentor.</p>
              
              <div className="bg-[#eff5ff] rounded-xl p-4 mb-6 text-sm text-[#0f4a9b]">
                All tutoring at Ustaad is delivered <strong>1-to-1 online</strong>, across every emirate.
              </div>

              <div>
                <label htmlFor="contact-requirements" className="sr-only">Learning requirements</label>
                <textarea
                  id="contact-requirements"
                  value={formData.requirements}
                  onChange={(e) => updateField('requirements', e.target.value)}
                  className={`${inputCls} min-h-[150px] resize-y`}
                  placeholder="Building confidence in a difficult subject…"
                />
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">Almost done</h3>
              <p className="text-gray-500 mb-6 text-sm">Review the reassurances below and submit your request.</p>

              <div className="bg-[#fcfaf7] border border-[#C7A24A]/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#C7A24A]/15">
                  <span className="text-xs font-extrabold text-[#0a1f3d] uppercase tracking-wider">Review Your Selections</span>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-xs font-bold text-[#0f4a9b] hover:text-[#0a1f3d] transition-colors flex items-center gap-1 bg-[#eff5ff] border border-[#0f4a9b]/20 px-3 py-1 rounded-full cursor-pointer"
                  >
                    ✏️ Edit Answers
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                  {[
                    "Qualified mentors", "Personalised tutor matching",
                    "Average reply time: 12 minutes", "1-to-1 online tutoring across the UAE",
                    "Free trial · No commitment", "Secure information handling"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0a1f3d] flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-[#0a1f3d]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2 bg-gray-100 hover:bg-[#eff5ff] border border-gray-200 hover:border-[#0f4a9b]/30 rounded-full text-[13px] text-gray-600 transition-all flex items-center gap-2 group cursor-pointer"
                  title="Click to edit curriculum"
                >
                  <span>Curriculum: <strong className="text-[#0a1f3d]">{formData.curriculum || 'Not set'}</strong></span>
                  <span className="text-xs text-[#0f4a9b] font-bold group-hover:underline">Edit ✏️</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2 bg-gray-100 hover:bg-[#eff5ff] border border-gray-200 hover:border-[#0f4a9b]/30 rounded-full text-[13px] text-gray-600 transition-all flex items-center gap-2 group cursor-pointer"
                  title="Click to edit subject"
                >
                  <span>Subject: <strong className="text-[#0a1f3d]">{formData.subject || 'Not set'}</strong></span>
                  <span className="text-xs text-[#0f4a9b] font-bold group-hover:underline">Edit ✏️</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2 bg-gray-100 hover:bg-[#eff5ff] border border-gray-200 hover:border-[#0f4a9b]/30 rounded-full text-[13px] text-gray-600 transition-all flex items-center gap-2 group cursor-pointer"
                  title="Click to edit grade / exam"
                >
                  <span>Grade / Exam: <strong className="text-[#0a1f3d]">{formData.level || 'Not set'}</strong></span>
                  <span className="text-xs text-[#0f4a9b] font-bold group-hover:underline">Edit ✏️</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 bg-gray-100 hover:bg-[#eff5ff] border border-gray-200 hover:border-[#0f4a9b]/30 rounded-full text-[13px] text-gray-600 transition-all flex items-center gap-2 group cursor-pointer"
                  title="Click to edit area"
                >
                  <span>Area: <strong className="text-[#0a1f3d]">{formData.area || 'Not set'}</strong></span>
                  <span className="text-xs text-[#0f4a9b] font-bold group-hover:underline">Edit ✏️</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-8 py-5 border-t border-gray-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 bg-white/50">
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
            </svg>
            Your information is handled securely.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {step > 1 && (
              <button 
                type="button"
                onClick={prevStep}
                className="w-full sm:w-auto px-6 py-3 bg-white text-[#0a1f3d] font-bold rounded-xl flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            <button 
              type="button"
              onClick={handleNext}
              className="w-full sm:w-auto px-8 py-3 bg-[#0a1f3d] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#0f4a9b] transition-colors shadow-lg shadow-[#0a1f3d]/20"
            >
              {step === 5 ? 'Find the Right Tutor' : (step === 4 ? 'Review' : 'Continue')}
              {step === 5 ? <Send className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const contactFaqs = [
    { q: "What should I share before contacting the Ustaad team?", a: "A few details speed things up. Share your child's curriculum (British, American, or IB), the subject they need help with, their grade or year level, and whether they're preparing for regular lessons, revision, or exam preparation. The clearer the picture, the faster we can match the right tutor." },
    { q: "Which curricula and subjects does Ustaad cover?", a: "We support British, American, and IB students across the UAE. Subjects include Mathematics, Physics, Chemistry, Biology, Business, and English. For a full breakdown, see our curriculum overview and subject pages." },
    { q: "Can lessons focus on specific topics or exam preparation?", a: "They often do. Tutors plan sessions around difficult chapters, coursework support, past paper practice, mock exams, and full preparation for IGCSE, GCSE, A-Level, IB, AP, and SAT assessments." },
    { q: "How does Ustaad match tutors to students?", a: "Each tutor is matched to a student's curriculum, subject, year level, learning style, and preferred study schedule. We pair every student with one tutor who knows that exam system end to end." },
    { q: "Are lesson timings flexible for school students in the UAE?", a: "Yes. Sessions are planned around school hours, mock weeks, weekend activities, assessment cycles, and Ramadan timings. Online tutoring makes scheduling easier for families in Dubai, Abu Dhabi, Sharjah, Al Ain, and across the wider UAE." },
    { q: "What's the fastest way to reach the Ustaad team?", a: "WhatsApp is the quickest route for parents and students across Abu Dhabi, Dubai, Sharjah, Al Ain, Ras Al Khaimah, Fujairah, and the wider UAE. You can also use the contact form on this page if you prefer." },
    { q: "What happens after I submit my contact request?", a: "Our academic coordination team reviews your child's curriculum, year group, and subject requirements within 15 minutes during working hours. We then select a specialist tutor whose timetable matches your preferred lesson slots and introduce them to your family for a 30-minute free trial session." },
    { q: "Is there any obligation after the free trial session?", a: "None at all. The 30-minute trial is completely free and carries no financial or commitment obligation. It gives your child the opportunity to experience our interactive 1-to-1 online classroom environment before you decide whether to proceed." },
  ];
  return (
    <Layout>
      <SEOHead
        title="Contact Ustaad | Book a Free Trial Session, UAE Tutoring"
        description="Get in touch with Ustaad to book your free trial tutoring session. Reach us by phone or WhatsApp across Dubai, Abu Dhabi & all UAE emirates."
        canonical="/contact"
        ogImage="/UpdatedImages/contact-ustaad-private-tutors-book-free-trial-uae.webp"
        schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])]}
      />
      {/* ── HERO ── */}
      <section className="pt-10 pb-12 lg:pt-20 lg:pb-16 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
                <Phone className="h-4 w-4" /> Contact Us
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#0a1f3d] mb-4 leading-[1.1] tracking-tight">
                <GradientHeadingText text="Speak With the Ustaad Team" />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-6" />
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Talk with the Ustaad team about subjects, curricula, tutor matching, lesson schedules, and student learning needs.
              </p>
              <HeroCTABlock className="mb-4" trustText="✦ No Commitment · Cancel Anytime" href="#form">
                Speak to an Advisor
              </HeroCTABlock>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/contact-ustaad-private-tutors-book-free-trial-uae.webp"
                alt="Book a free trial with an Ustaad private tutor in Dubai Abu Dhabi Sharjah or online across all seven UAE Emirates"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1200} height={800} fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/40 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── CONTACT CARDS ── */}
      <section className="pt-12 pb-12 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
              <GradientHeadingText text="Get in Touch" />
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">Choose whichever contact method feels easiest for you. Every enquiry is handled by the same team.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                title: "WhatsApp",
                desc: "Book a free trial lesson \u2022 Quick replies",
                icon: <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="Chat with Ustaad on WhatsApp" className="h-12 w-12" />,
                iconBg: "",
                cta: "Chat on WhatsApp",
                href: "https://wa.me/971561249005",
                external: true,
              },
              {
                title: "Call Us",
                desc: "Parent support \u2022 General enquiries",
                icon: <Phone className="h-6 w-6 text-white" />,
                iconBg: "bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79]",
                cta: "Call Now",
                href: "tel:+971561249005",
                external: false,
              },
              {
                title: "Email",
                desc: "Careers \u2022 Documents \u2022 Detailed requests",
                icon: <Mail className="h-6 w-6 text-white" />,
                iconBg: "bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79]",
                cta: "Send Email",
                href: "mailto:support@ustaad.ae",
                external: false,
              },
              {
                title: "Location",
                desc: "Supporting students across Dubai, Abu Dhabi, Sharjah, Al Ain, and the Emirates.",
                icon: <MapPin className="h-6 w-6 text-white" />,
                iconBg: "bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79]",
                cta: null,
                href: null,
                external: false,
              },
            ].map((c, i) => (
              <div key={i} className="relative bg-white border border-[#E5E7EB] rounded-[24px] p-8 flex flex-col items-center text-center hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(15,74,155,0.25)]`}>{c.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-1">{c.title}</h3>
                <p className="text-gray-500 text-sm font-medium mb-5">{c.desc}</p>
                {c.cta && c.href && (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-xl text-sm hover:brightness-110 hover:shadow-lg hover:shadow-[#C7A24A]/30 transition-all"
                  >
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* ── WhatsApp Quick Contact ── */}
          <a 
            href="https://wa.me/971561249005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block max-w-2xl mx-auto group"
          >
            <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_8px_30px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/20 transition-all duration-300 p-4 sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                {/* WhatsApp Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-green-500/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 self-center">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 self-center">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-[#0a1f3d] text-sm sm:text-base">WhatsApp</span>
                    <span className="px-1.5 py-0.5 bg-[#25D366]/10 text-[#25D366] text-[10px] sm:text-xs font-bold rounded-full">Fastest</span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Get instant replies for lesson inquiries, tutor availability, and academic support.
                  </p>
                </div>
                
                {/* Arrow */}
                <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gray-50 group-hover:bg-[#0f4a9b] flex items-center justify-center transition-all duration-300 self-center">
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
            </div>
          </a>

        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="form" className="py-12 bg-[#fdfaf6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ModernContactForm />
        </div>
      </section>

      {/* ── SUPPORT LINE + WHATSAPP ── */}
      <section className="py-12 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-white/20" />
            <span className="text-white/50 text-xs font-bold uppercase tracking-widest">Support Options</span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          {/* Two cards — equal height via grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Card 1: Support Line */}
            <a href="tel:8009005" className="group relative overflow-hidden rounded-2xl bg-white/10 border border-white/15 hover:bg-white/15 active:scale-[0.99] transition-all duration-300 p-6 flex flex-col gap-5">
              {/* ── Row 1: Header ── */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Toll-Free</p>
                  <p className="text-white text-sm font-extrabold">Ustaad Support Line</p>
                </div>
              </div>
              {/* ── Row 2: Main value ── */}
              <div>
                <p className="text-white text-3xl lg:text-4xl font-extrabold tracking-tight">800 9005</p>
                <p className="text-blue-100/75 text-sm mt-2 leading-relaxed">A direct line for parents and students who'd rather talk things through.</p>
              </div>
              {/* ── Row 3: Feature list ── */}
              <div className="flex flex-col gap-2.5">
                {["Parent Care", "Student Help", "Academic Advice", "Premium Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-[#C7A24A] shrink-0" />
                    <span className="text-sm text-white/85 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              {/* ── Row 4: Footer ── */}
              <div className="flex items-center gap-2 text-blue-200/50 text-xs mt-auto pt-1">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Saturday to Thursday · 9:00 AM to 9:00 PM · Friday on request</span>
              </div>
            </a>

            {/* Card 2: WhatsApp */}
            <a
              href="https://wa.me/971561249005"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl hover:brightness-105 active:scale-[0.99] transition-all duration-300 p-6 flex flex-col gap-5"
              style={{ background: "linear-gradient(135deg, #075E54 0%, #128C7E 55%, #25D366 100%)" }}
            >
              {/* ── Row 1: Header ── */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="Chat with Ustaad on WhatsApp" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Instant Support</p>
                    <p className="text-white text-sm font-extrabold">WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-[#C7A24A] px-2.5 py-1 rounded-full shrink-0">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span className="text-white text-[10px] font-extrabold uppercase tracking-wide">Premium</span>
                </div>
              </div>
              {/* ── Row 2: Main value ── */}
              <div>
                <p className="text-white text-3xl lg:text-4xl font-extrabold tracking-tight">Instant Reply</p>
                <p className="text-white/70 text-sm mt-2 leading-relaxed">Replies within minutes for lesson inquiries and academic support.</p>
              </div>
              {/* ── Row 3: Feature list ── */}
              <div className="flex flex-col gap-2.5">
                {["Trial Lessons", "Scheduling", "Quick Replies", "Academic Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-white/80 shrink-0" />
                    <span className="text-sm text-white/85 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              {/* ── Row 4: Footer CTA ── */}
              <div className="mt-auto flex items-center justify-between bg-white/15 border border-white/20 rounded-xl px-4 py-3 group-hover:bg-white/25 transition-colors duration-300">
                <span className="text-white font-bold text-sm">Start a conversation</span>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
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
              <p className="text-gray-600 text-[15px] leading-relaxed">Answers to common questions from parents and students.</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              {contactFaqs.map((faq, i) => {
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

      <FinalCTA
        title="Start Your Learning Journey"
        subtitle="Connect with us and get matched with the right tutor."
        button1Text="Speak to an Advisor"
        button1Href="#form"
        button2Text="Ask Your Question"
      />

    
      <section className="py-12 bg-[#f8fafe] border-t border-[#0f4a9b]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-600 leading-relaxed space-y-3">
          <h2 className="text-xl font-extrabold text-[#0a1f3d]">Fast, Friendly Assistance for UAE Families</h2>
          <p>Our academic advisory team is available Sunday through Saturday to assist parents and students across Dubai, Abu Dhabi, Sharjah, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Whether you have questions regarding tutor availability, specific exam board specifications (Cambridge 0580/0625/0620, Edexcel 4MA1/4PH1/4CH1, IB DP SL/HL, or AP Calculus), or lesson scheduling, we respond quickly to ensure your child receives timely academic support.</p>
          <p>For urgent matching requests or immediate lesson bookings, contact us directly on WhatsApp for real-time guidance from our UAE tutoring coordinators.</p>
        </div>
      </section>

    
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-xs text-gray-500 leading-relaxed">
            <p className="font-bold text-[#0a1f3d]">Trusted by 2,500+ Families Across Dubai, Abu Dhabi, Sharjah & Al Ain</p>
            <p>Our dedicated tutoring team supports students in British (IGCSE, GCSE, A-Level), IB (MYP, DP SL/HL), and American (AP, SAT) curricula. All enquiries receive a response within 15 minutes during working hours.</p>
          </div>

    
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-8 text-center text-xs text-gray-500 leading-relaxed">
            <p className="font-bold text-[#0a1f3d]">Comprehensive Private Tutoring Across All UAE Emirates</p>
            <p>Our online tutoring platform connects students in Abu Dhabi (Al Reem Island, Khalifa City, Al Raha, Yas Island), Dubai (Downtown, Marina, Jumeirah, Arabian Ranches), Sharjah, and Al Ain with specialist educators. Book your 30-minute free trial session today to get started.</p>
          </div>

    
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-6 text-center text-xs text-gray-500 leading-relaxed">
            <p>Whether you require short-term exam prep, intensive mock revision, or weekly academic tutoring, Ustaad pairs your child with top-rated private tutors across Dubai and Abu Dhabi.</p>
          </div>

    <div className="text-center text-xs text-gray-500 py-2 bg-slate-50 border-t">Friendly Academic Consultation Guaranteed · Response within 15 mins during UAE office hours.</div>
</Layout>
  );
}
