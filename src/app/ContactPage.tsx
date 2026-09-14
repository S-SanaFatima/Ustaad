import { useState, useRef, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle, ChevronRight, Clock, Mail, MapPin, Phone, Send, Sparkles, User, Users, BookOpen, GraduationCap,
  ChevronDown, MessageCircle, PartyPopper,
} from 'lucide-react';
import { Layout, GradientHeadingText, GoldButton, FinalCTA, StatsBar, HeroCTABlock, FAQAccordion, WhatsAppIcon } from './shared';


import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';
import { scrollToHash, scrollToHashWhenReady, getFixedHeaderOffset } from '../lib/scrollToHash';

const BACK_TO_SCHOOL_OFFER = 'back-to-school-10';
const DISCOUNT_OFFER_KEY = 'ustaad_discount_offer';

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
  const successRef = useRef<HTMLDivElement>(null);
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
  const [hasBackToSchoolDiscount, setHasBackToSchoolDiscount] = useState(false);
  const [showDiscountWelcome, setShowDiscountWelcome] = useState(false);

  useEffect(() => {
    const applyOfferFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const fromUrl = params.get('offer') === BACK_TO_SCHOOL_OFFER;

      if (fromUrl) {
        sessionStorage.setItem(DISCOUNT_OFFER_KEY, BACK_TO_SCHOOL_OFFER);
        setHasBackToSchoolDiscount(true);
        setShowDiscountWelcome(true);
        return;
      }

      if (sessionStorage.getItem(DISCOUNT_OFFER_KEY) === BACK_TO_SCHOOL_OFFER) {
        setHasBackToSchoolDiscount(true);
      }
    };

    applyOfferFromUrl();
    window.addEventListener('popstate', applyOfferFromUrl);
    return () => window.removeEventListener('popstate', applyOfferFromUrl);
  }, []);

  // Keep the thank-you card in view after submit (desktop + mobile).
  // The multi-step form is tall; when it collapses, scroll position can sit below the success message.
  useEffect(() => {
    if (!isSubmitted) return;
    const scrollToSuccess = () => {
      const target = successRef.current;
      if (!target) return;
      const offset = getFixedHeaderOffset() + 12;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };
    // Wait a frame so the thank-you UI is painted before measuring.
    const id = window.requestAnimationFrame(() => {
      scrollToSuccess();
      // Second pass for mobile browsers that adjust layout after paint.
      window.setTimeout(scrollToSuccess, 120);
    });
    return () => window.cancelAnimationFrame(id);
  }, [isSubmitted]);

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = async () => {
    if (!validateStep()) return;
    if (step === 5) {
      setIsSubmitting(true);

      const templateParams = {
        parentName: formData.parentName || (userType === 'student' ? formData.studentName : 'N/A'),
        phone: `${selectedCountry.code} ${formData.phone}`,
        email: formData.email,
        studentName: formData.studentName || 'N/A',
        studentAge: formData.studentAge || 'N/A',
        area: formData.area || 'N/A',
        curriculum: formData.curriculum || 'N/A',
        subject: formData.subject || 'N/A',
        level: formData.level || 'N/A',
        requirements: formData.requirements || 'None provided',
        discount_offer: hasBackToSchoolDiscount ? '10% Back to School discount (claimed via popup)' : 'None',
        // Fallbacks for standard EmailJS templates
        user_type: userType === 'parent' ? 'Parent' : 'Student',
        parent_name: formData.parentName || 'N/A',
        student_name: formData.studentName || 'N/A',
        from_name: formData.parentName || formData.studentName || 'Website Contact Form',
        from_email: formData.email,
        reply_to: formData.email,
        to_name: 'Ustaad UAE',
        message: `Role: ${userType === 'parent' ? 'Parent' : 'Student'}
Parent Name: ${formData.parentName || 'N/A'}
Student Name: ${formData.studentName || 'N/A'}
Phone: ${selectedCountry.code} ${formData.phone}
Email: ${formData.email}
Student Age: ${formData.studentAge || 'N/A'}
Area: ${formData.area || 'N/A'}
Curriculum: ${formData.curriculum || 'N/A'}
Subject: ${formData.subject || 'N/A'}
Grade/Level: ${formData.level || 'N/A'}
Requirements: ${formData.requirements || 'None provided'}
Discount: ${hasBackToSchoolDiscount ? '10% Back to School (claimed via popup)' : 'None'}`,
      };

      try {
        const env = (import.meta as any).env || {};
        const payload = {
          service_id: env.VITE_EMAILJS_SERVICE_ID || 'service_1y9vvz6',
          template_id: env.VITE_EMAILJS_TEMPLATE_ID || 'template_pea7cme',
          user_id: env.VITE_EMAILJS_PUBLIC_KEY || 'Gph3JJxeL-kxmREzB',
          accessToken: env.VITE_EMAILJS_PRIVATE_KEY || 'o0FGv-vPz9v9edSw6eVws',
          template_params: templateParams,
        };

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok && response.status !== 200) {
          // Retry without accessToken if EmailJS endpoint rejects optional accessToken
          delete (payload as any).accessToken;
          await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });
        }
      } catch (err) {
        console.error('EmailJS submission error:', err);
      } finally {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }
      return;
    }
    setStep(s => Math.min(s + 1, 5));
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const progress = ((step - 1) / 4) * 100;

  const inputCls = "w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm text-[#0a1f3d] placeholder:text-gray-400 focus:outline-none focus:border-[#0f4a9b] focus:ring-2 focus:ring-[#0f4a9b]/10 transition-all";
  const inputErrCls = "w-full px-3 py-2 sm:px-4 sm:py-3 bg-red-50/50 border border-red-300 rounded-xl text-xs sm:text-sm text-[#0a1f3d] placeholder:text-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/10 transition-all";
  const labelCls = "block text-[11px] sm:text-xs font-bold text-[#0a1f3d] mb-1 sm:mb-1.5";

  if (isSubmitted) {
    return (
      <div ref={successRef} className="max-w-xl mx-auto text-center py-4 px-4 scroll-mt-28">
        <div className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(15,74,155,0.08)] p-8 sm:p-12 overflow-hidden flex flex-col items-center border border-gray-100/80">
          <div className="relative mb-6 mt-2">
            <div className="w-20 h-20 bg-[#0a1f3d] rounded-full flex items-center justify-center relative z-10 shadow-md">
              <svg className="w-9 h-9 text-[#f0c96a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            {/* Subtle decorative accent dots */}
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#f0c96a] rounded-full -translate-y-1 translate-x-3" />
            <div className="absolute top-1 left-0 w-2 h-2 bg-[#0a1f3d] rounded-full -translate-x-3" />
            <div className="absolute bottom-2 left-1 w-1.5 h-1.5 bg-[#f0c96a] rounded-full -translate-x-3" />
            <div className="absolute bottom-0 right-2 w-2 h-2 bg-[#0a1f3d] rounded-full translate-y-3" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f3d] mb-3">Thank you</h2>
          <p className="text-base sm:text-lg text-[#0a1f3d] font-semibold mb-2">Your request has been received.</p>
          <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md leading-relaxed">
            Our academic team will review your requirements and assist you further shortly.
          </p>
          
          <div className="w-full max-w-sm flex flex-col items-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-3 font-medium">Need a quicker response? Message us on WhatsApp.</p>
            <a
              href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20just%20submitted%20my%20tutoring%20request%20form."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1fb858] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              Chat on WhatsApp
            </a>
            
            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setFormData({
                  parentName: '', phone: '', email: '',
                  studentName: '', studentAge: '', area: '',
                  curriculum: '', subject: '', level: '',
                  requirements: '',
                });
                setUserType(null);
              }}
              className="text-xs font-semibold text-gray-500 hover:text-[#0a1f3d] underline transition-colors cursor-pointer mt-5"
            >
              Submit another request
            </button>
          </div>

          <div className="w-full pt-6 mt-8 border-t border-gray-100 text-xs text-gray-400 flex items-center justify-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
            </svg>
            Your information is handled securely.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back to School discount welcome */}
      <AnimatePresence>
        {showDiscountWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#040c1a]/70 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Your 10% discount is ready"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 22, stiffness: 220 }}
              className="relative w-full max-w-md max-h-[min(90dvh,640px)] overflow-y-auto rounded-[24px] sm:rounded-[28px] overflow-x-hidden bg-white text-center shadow-[0_32px_90px_rgba(10,31,61,0.5)] border border-[#C7A24A]/40"
            >
              {/* Animated Gradient Background */}
              <motion.div 
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] 
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0 bg-[linear-gradient(120deg,#ffffff,#fdf8ee,#ffffff,#f4f0e6)] bg-[length:200%_200%] opacity-80"
              />
              
              <div className="relative z-10 p-5 sm:p-7 md:p-9">
                {/* Celebratory party poppers */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', delay: 0.08, damping: 14, stiffness: 160 }}
                  className="relative mx-auto mb-5 flex h-20 w-full max-w-[200px] items-center justify-center"
                  aria-hidden="true"
                >
                  {/* Soft glow */}
                  <div className="absolute inset-0 rounded-full bg-[#C7A24A]/15 blur-2xl" />

                  {/* Confetti dots */}
                  <span className="absolute top-1 left-6 h-2 w-2 rotate-12 rounded-sm bg-[#0f4a9b]" />
                  <span className="absolute top-3 right-8 h-1.5 w-1.5 rounded-full bg-[#C7A24A]" />
                  <span className="absolute bottom-4 left-10 h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  <span className="absolute bottom-2 right-6 h-2 w-2 -rotate-12 rounded-sm bg-[#f0c96a]" />
                  <span className="absolute top-8 left-1/2 h-1 w-1 rounded-full bg-[#0f4a9b]/60" />

                  <motion.div
                    animate={{ rotate: [-8, -14, -8], y: [0, -2, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative z-10 -mr-1"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a1f3d] shadow-[0_10px_24px_rgba(15,74,155,0.35)] ring-2 ring-[#C7A24A]/30">
                      <PartyPopper className="h-7 w-7 text-[#f0d080]" strokeWidth={2} />
                    </div>
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [8, 14, 8], y: [0, -2, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
                    className="relative z-10 -ml-1"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C7A24A] to-[#9E7C20] shadow-[0_10px_24px_rgba(199,162,74,0.35)] ring-2 ring-white/50">
                      <PartyPopper className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C7A24A]/10 border border-[#C7A24A]/30 mb-4 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#C7A24A] shrink-0" />
                    <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#0a1f3d]">
                      Back to School Offer
                    </span>
                  </div>
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-[1.65rem] font-extrabold text-[#0a1f3d] mb-2.5 leading-tight"
                >
                  Your <span className="bg-gradient-to-r from-[#D4AF37] to-[#9E7C20] bg-clip-text text-transparent">10% discount</span><br/>is applied!
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-[13px] text-gray-500 mb-7"
                >
                  Please share a few details on the next step. Once your form is received, our team will personally reach out with your 10% discount confirmation certificate and matched tutor.
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ delay: 0.7 }}
                  type="button"
                  onClick={() => {
                    setShowDiscountWelcome(false);
                    scrollToHash('#form');
                  }}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#0b3d80] via-[#0f4a9b] to-[#0b3d80] px-5 py-4 text-[13px] font-extrabold text-white shadow-[0_10px_25px_rgba(11,61,128,0.3)] transition-all"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center justify-center tracking-[0.05em] uppercase">
                    CONTINUE TO FORM
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header section (pill, title, subtitle) */}
      <div className="text-center mb-1.5 sm:mb-6">
        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-0.5 sm:px-4 sm:py-1.5 rounded-full border border-[#C7A24A]/30 bg-[#C7A24A]/5 mb-1 sm:mb-3">
          <span className="text-[#C7A24A] text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] inline-block mr-1.5 sm:mr-2" />
            USTAAD · FIND A TUTOR
          </span>
        </div>
        <h2 className="text-lg sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-0.5 sm:mb-3">
          Let's find the right mentor
        </h2>
        <p className="text-gray-600 text-[11px] sm:text-base lg:text-lg leading-tight sm:leading-relaxed max-w-xl mx-auto">
          A few quick questions and we'll match you with a qualified tutor tailored to your goals.
        </p>
      </div>

      {/* Form Card */}
      <div id="form" className="bg-white rounded-xl sm:rounded-[24px] shadow-[0_12px_40px_rgba(15,74,155,0.08)] overflow-hidden scroll-mt-28 border border-gray-100/80">

        {/* Progress Bar & Header */}
        <div className="px-3 sm:px-8 pt-3 sm:pt-8 pb-1.5 sm:pb-4">
          <div className="flex justify-between items-end mb-1.5 sm:mb-4">
            <span className="text-[#0b3d80] font-bold text-xs sm:text-sm">Step {step} of 5</span>
            <span className="text-[#C7A24A] font-bold text-xs sm:text-sm">{progress}% Complete</span>
          </div>
          {/* Progress bar line */}
          <div className="w-full h-1 bg-gray-100 rounded-full mb-2 sm:mb-6">
            <div className="h-full bg-[#C7A24A] rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center text-[9px] sm:text-xs font-semibold text-gray-400 mb-1 sm:mb-2 px-1">
            <span className={step >= 1 ? "text-[#0b3d80] font-bold" : ""}>Role</span>
            <span className={step >= 2 ? "text-[#0b3d80] font-bold" : ""}>Details</span>
            <span className={step >= 3 ? "text-[#0b3d80] font-bold" : ""}>Academic</span>
            <span className={step >= 4 ? "text-[#0b3d80] font-bold" : ""}>Requirements</span>
            <span className={step >= 5 ? "text-[#0b3d80] font-bold" : ""}>Review</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-3 sm:p-8">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
              <h3 className="text-base sm:text-xl font-extrabold text-[#0a1f3d] mb-0.5 sm:mb-2">Who is this for?</h3>
              <p className="text-gray-500 mb-2 sm:mb-6 text-[11px] sm:text-sm leading-tight sm:leading-relaxed">Tell us whether you are booking for your child or for yourself, so we can match the right tutor.</p>

              <div className="grid grid-cols-2 gap-2 sm:gap-5 mb-1 sm:mb-4">
                {/* Option: Parent */}
                <button
                  type="button"
                  onClick={() => setUserType('parent')}
                  className={`text-left p-2.5 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all group ${
                    userType === 'parent' 
                      ? 'border-[#C7A24A] bg-white shadow-[0_8px_20px_rgba(199,162,74,0.12)]' 
                      : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-1.5 sm:mb-4 transition-colors ${
                    userType === 'parent' ? 'bg-[#0b3d80]' : 'bg-[#eff5ff] group-hover:bg-[#e4efff]'
                  }`}>
                    <Users className={`h-3.5 w-3.5 sm:h-6 sm:w-6 ${userType === 'parent' ? 'text-white' : 'text-[#0b3d80]'}`} />
                  </div>
                  <h4 className="text-xs sm:text-lg font-bold text-[#0a1f3d] mb-0.5 sm:mb-1">I'm a Parent</h4>
                  <p className="text-gray-500 text-[10px] sm:text-sm leading-tight">Looking for my child</p>
                </button>

                {/* Option: Student */}
                <button
                  type="button"
                  onClick={() => setUserType('student')}
                  className={`text-left p-2.5 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all group ${
                    userType === 'student' 
                      ? 'border-[#C7A24A] bg-white shadow-[0_8px_20px_rgba(199,162,74,0.12)]' 
                      : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-1.5 sm:mb-4 transition-colors ${
                    userType === 'student' ? 'bg-[#0b3d80]' : 'bg-[#eff5ff] group-hover:bg-[#e4efff]'
                  }`}>
                    <GraduationCap className={`h-3.5 w-3.5 sm:h-6 sm:w-6 ${userType === 'student' ? 'text-white' : 'text-[#0b3d80]'}`} />
                  </div>
                  <h4 className="text-xs sm:text-lg font-bold text-[#0a1f3d] mb-0.5 sm:mb-1">I'm a Student</h4>
                  <p className="text-gray-500 text-[10px] sm:text-sm leading-tight">Looking for myself</p>
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
              <h3 className="text-2xl font-extrabold text-[#0a1f3d] mb-1">Review your details</h3>
              <p className="text-gray-500 mb-6 text-sm">Double-check everything below. Tap any field to edit before submitting.</p>



              <div className="space-y-3 mb-2">
                {/* 1. ROLE */}
                <div className="p-3.5 bg-gray-50/80 border border-gray-200/70 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gray-200/90 text-[#0a1f3d] font-bold text-xs flex items-center justify-center shrink-0">
                      1
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">ROLE</span>
                      <span className="text-sm font-semibold text-[#0a1f3d] capitalize">{userType === 'parent' ? 'Parent' : 'Student'}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-[#C7A24A] hover:text-[#0a1f3d] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    Edit ✏️
                  </button>
                </div>

                {/* 2. PARENT'S NAME */}
                {userType === 'parent' && (
                  <div className="p-3.5 bg-gray-50/80 border border-gray-200/70 rounded-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-gray-200/90 text-[#0a1f3d] font-bold text-xs flex items-center justify-center shrink-0">
                        2
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">PARENT'S NAME</span>
                        <span className="text-sm font-semibold text-[#0a1f3d]">{formData.parentName || 'Not provided'}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-bold text-[#C7A24A] hover:text-[#0a1f3d] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      Edit ✏️
                    </button>
                  </div>
                )}

                {/* 2. PHONE NUMBER */}
                <div className="p-3.5 bg-gray-50/80 border border-gray-200/70 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gray-200/90 text-[#0a1f3d] font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">PHONE NUMBER</span>
                      <span className="text-sm font-semibold text-[#0a1f3d] truncate block">
                        {selectedCountry.code} {formData.phone}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-bold text-[#C7A24A] hover:text-[#0a1f3d] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    Edit ✏️
                  </button>
                </div>

                {/* 2. EMAIL ADDRESS */}
                {formData.email && (
                  <div className="p-3.5 bg-gray-50/80 border border-gray-200/70 rounded-xl flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded-full bg-gray-200/90 text-[#0a1f3d] font-bold text-xs flex items-center justify-center shrink-0">
                        2
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">EMAIL ADDRESS</span>
                        <span className="text-sm font-semibold text-[#0a1f3d] truncate block">
                          {formData.email}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-bold text-[#C7A24A] hover:text-[#0a1f3d] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      Edit ✏️
                    </button>
                  </div>
                )}

                {/* 2. STUDENT'S NAME & AGE */}
                <div className="p-3.5 bg-gray-50/80 border border-gray-200/70 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gray-200/90 text-[#0a1f3d] font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">STUDENT'S NAME & AGE</span>
                      <span className="text-sm font-semibold text-[#0a1f3d]">
                        {formData.studentName || 'N/A'}{formData.studentAge ? ` - Age -${formData.studentAge}` : ''}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-bold text-[#C7A24A] hover:text-[#0a1f3d] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    Edit ✏️
                  </button>
                </div>

                {/* 2. AREA IN UAE */}
                <div className="p-3.5 bg-gray-50/80 border border-gray-200/70 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gray-200/90 text-[#0a1f3d] font-bold text-xs flex items-center justify-center shrink-0">
                      2
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">AREA IN UAE</span>
                      <span className="text-sm font-semibold text-[#0a1f3d]">{formData.area || 'Not provided'}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-bold text-[#C7A24A] hover:text-[#0a1f3d] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    Edit ✏️
                  </button>
                </div>

                {/* 3. ACADEMIC */}
                <div className="p-3.5 bg-gray-50/80 border border-gray-200/70 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gray-200/90 text-[#0a1f3d] font-bold text-xs flex items-center justify-center shrink-0">
                      3
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">ACADEMIC</span>
                      <span className="text-sm font-semibold text-[#0a1f3d]">
                        {[formData.curriculum, formData.level, formData.subject].filter(Boolean).join(' - ') || 'Not provided'}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="text-xs font-bold text-[#C7A24A] hover:text-[#0a1f3d] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    Edit ✏️
                  </button>
                </div>

                {/* 4. LEARNING REQUIREMENTS */}
                <div className="p-3.5 bg-gray-50/80 border border-gray-200/70 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-gray-200/90 text-[#0a1f3d] font-bold text-xs flex items-center justify-center shrink-0">
                      4
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">LEARNING REQUIREMENTS</span>
                      <span className="text-sm font-semibold text-[#0a1f3d] block whitespace-pre-wrap">
                        {formData.requirements || 'None provided'}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="text-xs font-bold text-[#C7A24A] hover:text-[#0a1f3d] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                  >
                    Edit ✏️
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="px-3 sm:px-8 py-2.5 sm:py-4 border-t border-gray-100 flex flex-row items-center justify-between gap-2 bg-white/50">
          <div className="hidden sm:flex items-center gap-2 text-gray-400 text-xs">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
            </svg>
            Your information is handled securely.
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end">
            {step > 1 && (
              <button 
                type="button"
                onClick={prevStep}
                className="flex-1 sm:flex-initial px-4 py-2 sm:px-6 sm:py-2.5 bg-white text-[#0b3d80] font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center border border-gray-200 hover:bg-blue-50/50 hover:border-[#0b3d80]/30 transition-colors"
              >
                Back
              </button>
            )}
            <button 
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className={`flex-1 sm:flex-initial px-5 py-2 sm:px-8 sm:py-2.5 bg-[#0b3d80] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-[#09326b] transition-colors shadow-lg shadow-[#0b3d80]/25 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {step === 5 ? (isSubmitting ? 'Submitting...' : 'Submit Request') : (step === 4 ? 'Review' : 'Continue')}
              {step === 5 ? <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const WAYPOINTS = [
  {
    num: '01',
    label: 'Waypoint // 01',
    icon: Users,
    iconBg: 'from-[#0a1f3d] to-[#0b3d80]',
    accentColor: '#0b3d80',
    title: 'Trusted by 2,500+ Families Across Dubai, Abu Dhabi, Sharjah & Al Ain',
    desc: 'Our dedicated tutoring team supports students across British (IGCSE, GCSE, A-Level), IB (MYP, DP SL/HL), and American (AP, SAT) curricula. All enquiries receive a response within 15 minutes during working hours.',
  },
  {
    num: '02',
    label: 'Waypoint // 02',
    icon: MapPin,
    iconBg: 'from-[#7A5E10] via-[#A8892A] to-[#C7A24A]',
    accentColor: '#C7A24A',
    title: 'Comprehensive Private Tutoring Across All UAE Emirates',
    desc: 'Our online tutoring platform connects families in Abu Dhabi, Dubai, Sharjah, and Al Ain with vetted subject specialists for one-on-one sessions. Book your 30-minute free trial session today to get started.',
  },
  {
    num: '03',
    label: 'Waypoint // 03',
    icon: CheckCircle,
    iconBg: 'from-[#065f46] via-[#059669] to-[#10b981]',
    accentColor: '#059669',
    title: 'Tailored Academic Tutoring for Exam Prep & Top Grades',
    desc: 'Whether you require short-term exam prep, intensive mock revision, or weekly academic tutoring, Ustaad pairs your child with top-rated private tutors across Dubai and Abu Dhabi for lasting academic success.',
  },
];

function Support3DFlipPodCard({
  isFlipped,
  onToggle,
  frontAccentColor,
  frontGlowColor,
  frontGradientBg,
  frontBorderClass,
  frontBadge,
  frontBadgeIcon,
  frontOrb,
  frontTitle,
  frontSubtitle,
  frontActionHref,
  frontActionText,
  frontActionClass,
  backAccentColor,
  backGlowColor,
  backGradientBg,
  backBorderClass,
  backHeaderBadge,
  backTitle,
  backDesc,
  backFeatures,
  backFootnote,
  backActionHref,
  backActionText,
  backActionClass,
}: {
  isFlipped: boolean;
  onToggle: () => void;
  frontAccentColor: string;
  frontGlowColor: string;
  frontGradientBg: string;
  frontBorderClass: string;
  frontBadge: string;
  frontBadgeIcon?: ReactNode;
  frontOrb: ReactNode;
  frontTitle: string;
  frontSubtitle: string;
  frontActionHref: string;
  frontActionText: string;
  frontActionClass: string;
  backAccentColor: string;
  backGlowColor: string;
  backGradientBg: string;
  backBorderClass: string;
  backHeaderBadge: ReactNode;
  backTitle: string;
  backDesc: string;
  backFeatures: string[];
  backFootnote?: ReactNode;
  backActionHref: string;
  backActionText: string;
  backActionClass: string;
}) {
  return (
    <div className="relative w-full [perspective:1400px] min-h-[340px] sm:min-h-[410px]">
      <motion.div
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-full h-full [transform-style:preserve-3d] min-h-[340px] sm:min-h-[410px]"
      >
        {/* ── FRONT FACE (BIG 3D HERO OBJECT) ── */}
        <div
          style={{
            background: frontGradientBg,
            backfaceVisibility: 'hidden',
          }}
          className={`absolute inset-0 rounded-2xl sm:rounded-[24px] p-2.5 sm:p-6 flex flex-col justify-between items-center text-center shadow-[0_18px_45px_-15px_rgba(0,0,0,0.5)] border transition-all duration-300 overflow-hidden ${frontBorderClass}`}
        >
          {/* Top Neon Accent Line */}
          <div
            className="absolute -top-px left-6 sm:left-12 right-6 sm:right-12 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${frontAccentColor}, transparent)` }}
          />
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-56 h-44 sm:h-56 rounded-full blur-[65px] opacity-40"
            style={{ backgroundColor: frontGlowColor }}
          />

          {/* Top Status Header with Details Flip Trigger */}
          <div className="relative z-10 w-full flex items-center justify-between gap-1">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/40 border border-white/15 backdrop-blur-md shrink-0">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: frontAccentColor }} />
              <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-white/90 whitespace-nowrap">{frontBadge}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <div className="hidden sm:flex items-center">{frontBadgeIcon}</div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className="inline-flex items-center gap-0.5 sm:gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 border border-white/25 text-[7.5px] sm:text-[10px] font-black uppercase tracking-wider text-white backdrop-blur-md transition-all cursor-pointer shrink-0"
                title="View Full Details"
              >
                <span>Info ⤺</span>
              </button>
            </div>
          </div>

          {/* Big Center 3D Floating Hero Object */}
          <div 
            onClick={onToggle}
            className="relative z-10 my-auto flex flex-col items-center justify-center py-1 sm:py-2 cursor-pointer group"
          >
            {frontOrb}
            <h3 className="mt-2 sm:mt-3 text-lg sm:text-2xl lg:text-[26px] font-black text-white tracking-tight leading-tight">
              {frontTitle}
            </h3>
            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-white/80 font-medium max-w-xs line-clamp-2 sm:line-clamp-none">
              {frontSubtitle}
            </p>
          </div>

          {/* Bottom Direct Action Button (Direct Call or Direct WhatsApp Redirect) */}
          <a
            href={frontActionHref}
            target={frontActionHref.startsWith('http') ? '_blank' : undefined}
            rel={frontActionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            onClick={(e) => e.stopPropagation()}
            className={`relative z-10 w-full py-2.5 sm:py-3 px-3 sm:px-5 rounded-xl sm:rounded-2xl shadow-md backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs lg:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 group cursor-pointer active:scale-[0.98] ${frontActionClass}`}
          >
            <span>{frontActionText}</span>
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* ── BACK FACE (DETAILED CARD WITH CALL/CHAT DETAILS) ── */}
        <div
          style={{
            background: backGradientBg,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className={`absolute inset-0 rounded-2xl sm:rounded-[24px] p-2.5 sm:p-6 flex flex-col justify-between shadow-[0_18px_45px_-15px_rgba(0,0,0,0.5)] border transition-all duration-300 overflow-hidden text-left ${backBorderClass}`}
        >
          {/* Top Neon Accent Line */}
          <div
            className="absolute -top-px left-6 sm:left-12 right-6 sm:right-12 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${backAccentColor}, transparent)` }}
          />
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 w-40 sm:w-48 h-40 sm:h-48 rounded-full blur-[60px] opacity-30"
            style={{ backgroundColor: backGlowColor }}
          />

          {/* Top Bar with Flip Back Button & Badge */}
          <div className="relative z-10 flex items-center justify-between gap-1">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-white/90 backdrop-blur-md transition-colors cursor-pointer shrink-0"
            >
              <span>⤺ 3D View</span>
            </button>
            {backHeaderBadge}
          </div>

          {/* Main Content */}
          <div className="relative z-10 my-auto py-1">
            <h3 className="text-lg sm:text-2xl lg:text-[26px] font-black text-white tracking-tight leading-tight mb-1 sm:mb-1.5">
              {backTitle}
            </h3>
            <p className="text-white/85 text-[10px] sm:text-xs leading-relaxed mb-2 sm:mb-3 line-clamp-2 sm:line-clamp-none">
              {backDesc}
            </p>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {backFeatures.map((item) => (
                <div key={item} className="flex items-center gap-1.5 p-1 sm:p-2 rounded-lg bg-white/10 border border-white/15">
                  <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" style={{ color: backAccentColor }} />
                  <span className="text-[9px] sm:text-xs text-white/90 font-semibold truncate">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Footnote & Direct Action Button */}
          <div className="relative z-10 flex flex-col gap-2 mt-auto">
            {backFootnote}
            <a
              href={backActionHref}
              target={backActionHref.startsWith('http') ? '_blank' : undefined}
              rel={backActionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={(e) => e.stopPropagation()}
              className={`w-full py-2.5 sm:py-3 px-3 sm:px-5 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 transition-all shadow-md active:scale-[0.98] ${backActionClass}`}
            >
              <span className="truncate">{backActionText}</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// 3D Animated Audio Waveform Visualizer Bar Component (Concept 2)
function AudioWaveVisualizer() {
  const bars = [16, 32, 48, 24, 40, 56, 28, 44, 20, 36, 52, 26, 18];
  return (
    <div className="flex items-center gap-1 sm:gap-1.5 h-6 sm:h-7 px-1.5 sm:px-2.5 py-0.5 rounded-lg bg-black/40 border border-[#C7A24A]/30 backdrop-blur-md shadow-[0_4px_15px_rgba(199,162,74,0.15)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A24A] mr-0.5 shrink-0" />
      <span className="text-[8px] sm:text-[10px] font-mono font-black text-[#F5D77F] uppercase tracking-wider mr-0.5 hidden sm:inline-block">LIVE VOX</span>
      <div className="flex items-center gap-[2px] h-full">
        {bars.slice(0, 6).map((h, i) => (
          <motion.span
            key={i}
            animate={{
              height: [`${Math.max(18, h * 0.35)}%`, `${h}%`, `${Math.max(22, h * 0.7)}%`],
            }}
            transition={{
              duration: 0.6 + (i % 4) * 0.18,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: i * 0.07,
            }}
            className="w-[2px] sm:w-[2.5px] rounded-full bg-gradient-to-t from-[#C7A24A] via-[#F5D77F] to-white"
            style={{ minHeight: '3px' }}
          />
        ))}
      </div>
    </div>
  );
}

// 3D Quantum Particle Ray Conduit Component (Concept 2)
function QuantumParticleRays() {
  return (
    <div className="flex items-center gap-1 sm:gap-1.5 h-6 sm:h-7 px-1.5 sm:px-2.5 py-0.5 rounded-lg bg-black/40 border border-emerald-400/35 backdrop-blur-md shadow-[0_4px_15px_rgba(16,185,129,0.15)]">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-0.5 shrink-0" />
      <span className="text-[8px] sm:text-[10px] font-mono font-black text-emerald-300 uppercase tracking-wider mr-0.5 hidden sm:inline-block">OPTIC 10G</span>
      <div className="relative w-8 sm:w-16 h-1.5 bg-emerald-950/70 rounded-full overflow-hidden border border-emerald-500/30">
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 bottom-0 w-3 sm:w-7 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34d399]"
        />
      </div>
    </div>
  );
}

export default function ContactPage() {
  // Land on the form card (Step 1), not the intro heading above it.
  useEffect(() => {
    const scrollToForm = () => {
      if (window.location.hash === '#form') scrollToHash('#form');
    };

    if (window.location.hash === '#form') {
      const cancel = scrollToHashWhenReady('#form');
      window.addEventListener('hashchange', scrollToForm);
      return () => {
        cancel();
        window.removeEventListener('hashchange', scrollToForm);
      };
    }

    window.addEventListener('hashchange', scrollToForm);
    return () => window.removeEventListener('hashchange', scrollToForm);
  }, []);

  const [flippedPhone, setFlippedPhone] = useState(false);
  const [flippedWhatsApp, setFlippedWhatsApp] = useState(false);
  const [activeWaypoint, setActiveWaypoint] = useState(0);
  const waypointTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetWaypointTimer = () => {
    if (waypointTimerRef.current) clearInterval(waypointTimerRef.current);
    waypointTimerRef.current = setInterval(() => {
      setActiveWaypoint((prev) => (prev + 1) % WAYPOINTS.length);
    }, 4000);
  };

  useEffect(() => {
    resetWaypointTimer();
    return () => {
      if (waypointTimerRef.current) clearInterval(waypointTimerRef.current);
    };
  }, []);

  const handleWaypointSelect = (idx: number) => {
    setActiveWaypoint(idx);
    resetWaypointTimer();
  };

  const contactFaqs = [
    { q: "What should I share before contacting the Ustaad team?", a: "A few details speed things up. Share your child's curriculum (British, American, or IB), the subject they need help with, their grade or year level, and whether they're preparing for regular lessons, revision, or exam preparation. The clearer the picture, the faster we can match the right tutor." },
    { q: "Which curricula and subjects does Ustaad cover?", a: "We support British, American, and IB students across the UAE. Subjects include Mathematics, Physics, Chemistry, Biology, Business, and English. For a full breakdown, see our curriculum overview and subject pages." },
    { q: "Can lessons focus on specific topics or exam preparation?", a: "They often do. Tutors plan sessions around difficult chapters, coursework support, past paper practice, mock exams, and full preparation for IGCSE, GCSE, A-Level, IB, AP, and SAT assessments." },
    { q: "How does Ustaad match tutors to students?", a: "Each tutor is matched to a student's curriculum, subject, year level, learning style, and preferred study schedule. We pair every student with one tutor who knows that exam system end to end." },
    { q: "Are lesson timings flexible for school students in the UAE?", a: "Yes. Sessions are planned around school hours, mock weeks, weekend activities, assessment cycles, and Ramadan timings. Online tutoring makes scheduling easier for families in Dubai, Abu Dhabi, Sharjah, Al Ain, and across the wider UAE." },
    { q: "What's the fastest way to reach the Ustaad team?", a: "WhatsApp is the quickest route for parents and students across Abu Dhabi, Dubai, Sharjah, Al Ain, Ras Al Khaimah, Fujairah, and the wider UAE. You can also use the contact form on this page if you prefer." },
    { q: "What happens after I submit my contact request?", a: "Our academic coordination team reviews your child's curriculum, year group, and subject requirements within 15 minutes during working hours. We then select a specialist tutor whose timetable matches your preferred lesson slots and introduce them to your family for a 30-minute free trial session." },
    { q: "Is there any obligation after the free trial session?", a: "None at all. The 30-minute trial is completely free and carries no financial or commitment obligation. It gives you a chance to see how our tutor works with your child before making any decisions." }
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
      {/* ── 01. HERO SECTION ── */}
      <section className="min-h-[calc(100dvh-84px)] lg:min-h-[calc(100dvh-92px)] flex items-center relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 py-8 sm:py-10 lg:py-12">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#C7A24A]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 xl:gap-16 items-center">

            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-xs sm:text-sm font-bold rounded-full mb-3.5 sm:mb-4 border border-[#0f4a9b]/20 shadow-sm">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Contact Us
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-3 sm:mb-4 leading-[1.15] tracking-tight">
                <GradientHeadingText text="Speak With the Ustaad Team" />
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] rounded-full mb-3.5 sm:mb-5" />
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-5 sm:mb-7 leading-relaxed max-w-xl">
                Talk with the Ustaad team about subjects, curricula, tutor matching, lesson schedules, and student learning needs.
              </p>
              <HeroCTABlock className="mb-4" href="#form">
                Speak to an Advisor
              </HeroCTABlock>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[420px] xl:h-[460px] rounded-2xl sm:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(15,74,155,0.15)] border-4 sm:border-8 border-white group z-10"
            >
              <img
                src="/UpdatedImages/contact-ustaad-private-tutors-book-free-trial-uae.webp"
                alt="Book a free trial with an Ustaad private tutor in Dubai Abu Dhabi Sharjah or online across all seven UAE Emirates"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                width={1200} height={800} fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f4a9b]/30 via-transparent to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      <StatsBar />

      {/* ── 02. CONTACT CARDS ── */}
      <section className="py-8 lg:py-18 bg-[#f8fafc] relative">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2 sm:mb-4">
              <GradientHeadingText text="Get in Touch" />
            </h2>
            <p className="text-gray-600 text-xs sm:text-base lg:text-lg leading-relaxed">Choose whichever contact method feels easiest for you. Every enquiry is handled by the same team.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto mb-6 sm:mb-12">
            {[
              {
                title: "WhatsApp",
                desc: "Book a free trial lesson • Quick replies",
                icon: <WhatsAppIcon className="h-4 w-4 sm:h-6 sm:w-6 text-[#25D366]" />,
                iconBg: "bg-emerald-50/80 border border-emerald-100 text-[#25D366]",
                cta: "Chat on WhatsApp",
                href: "https://wa.me/971561249005",
                external: true,
              },
              {
                title: "Call Us",
                desc: "Parent support • General enquiries",
                icon: <Phone className="h-4 w-4 sm:h-6 sm:w-6 text-[#0f4a9b]" />,
                iconBg: "bg-blue-50/80 border border-blue-100 text-[#0f4a9b]",
                cta: "Call Now",
                href: "tel:+971561249005",
                external: false,
              },
              {
                title: "Email",
                desc: "Careers • Documents • Detailed requests",
                icon: <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-[#0f4a9b]" />,
                iconBg: "bg-sky-50/80 border border-sky-100 text-[#0f4a9b]",
                cta: "Send Email",
                href: "mailto:support@ustaad.ae",
                external: false,
              },
              {
                title: "Location",
                desc: "Supporting students across Dubai, Abu Dhabi, Sharjah, Al Ain, and the Emirates.",
                icon: <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-[#C7A24A]" />,
                iconBg: "bg-amber-50/80 border border-amber-100 text-[#C7A24A]",
                cta: null,
                href: null,
                external: false,
              },
            ].map((c, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-white border border-gray-200/80 rounded-2xl sm:rounded-[24px] p-3.5 sm:p-7 flex flex-col items-center text-center hover:shadow-[0_15px_40px_rgba(15,74,155,0.08)] transition duration-300 overflow-hidden group h-full"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C7A24A] to-[#A8892A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className={`w-10 h-10 sm:w-14 sm:h-14 ${c.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-2.5 sm:mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300`}>{c.icon}</div>
                <h3 className="text-sm sm:text-lg font-extrabold text-[#0a1f3d] mb-1 sm:mb-2">{c.title}</h3>
                <p className="text-gray-500 text-[11px] sm:text-sm font-medium mb-3 sm:mb-6 leading-tight sm:leading-relaxed flex-1">{c.desc}</p>
                {c.cta && c.href && (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="mt-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 w-full py-2 px-2.5 sm:py-3 sm:px-5 bg-gradient-to-l from-[#C7A24A] via-[#A8892A] to-[#7A5E10] text-white font-bold rounded-lg sm:rounded-xl text-[11px] sm:text-sm hover:brightness-110 hover:shadow-lg hover:shadow-[#C7A24A]/30 transition-all"
                  >
                    {c.cta}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* ── WhatsApp Quick Contact ── */}
          <motion.a 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="https://wa.me/971561249005" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block max-w-2xl mx-auto group"
          >
            <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.15)] hover:border-[#25D366]/40 transition-all duration-300 p-4 sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 self-center">
                  <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6 text-[#25D366]" />
                </div>
                
                <div className="flex-1 min-w-0 self-center">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-bold text-[#0a1f3d] text-sm sm:text-base">WhatsApp</span>
                    <span className="px-2 py-0.5 bg-[#25D366]/10 text-[#25D366] text-[10px] sm:text-xs font-extrabold rounded-full">Fastest</span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    Get instant replies for lesson inquiries, tutor availability, and academic support.
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#25D366] transition-colors shrink-0" />
              </div>
            </div>
          </motion.a>

        </div>
      </section>

      {/* ── 03. CONTACT FORM ── */}
      <section className="py-3 sm:py-14 bg-[#fdfaf6]">
        <div className="max-w-6xl mx-auto px-2.5 sm:px-6 lg:px-8">
          <ModernContactForm />
        </div>
      </section>

      {/* ── 04. SUPPORT LINE + WHATSAPP (CONCEPT 2: 3D AUDIO & FREQUENCY DECK) ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-[#f8fafc] to-[#f1f5f9] text-[#0a1f3d] border-y border-slate-200/70 relative overflow-hidden [perspective:1400px]">
        {/* Ambient Holographic Glow Orbs */}
        <div className="absolute -top-24 left-1/4 w-[480px] h-[300px] bg-[#0f4a9b]/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-24 right-1/4 w-[480px] h-[300px] bg-[#10b981]/5 rounded-full blur-[130px] pointer-events-none" />
        
        {/* Subtle 3D Geometric Floor Grid */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#0f4a9b 1px, transparent 1px), linear-gradient(90deg, #0f4a9b 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
            transform: 'rotateX(54deg) scale(1.35)',
            transformOrigin: 'top center'
          }}
        />

        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

          {/* Clean Prominent Section Heading */}
          <div className="text-center mb-6 sm:mb-9 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] tracking-tight">
              Support Options
            </h2>
            <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
              Reach out directly by phone or WhatsApp for real-time academic guidance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">

            {/* Pod 1: Big 3D Golden Audio Beacon & Flip Card */}
            <Support3DFlipPodCard
              isFlipped={flippedPhone}
              onToggle={() => setFlippedPhone(prev => !prev)}
              frontAccentColor="#C7A24A"
              frontGlowColor="#1e5ba8"
              frontGradientBg="linear-gradient(145deg, #1e5ba8 0%, #0f4a9b 55%, #093166 100%)"
              frontBorderClass="border-blue-400/40 hover:border-blue-300/80 shadow-[0_15px_40px_rgba(15,74,155,0.3)]"
              frontBadge="Toll-Free UAE"
              frontBadgeIcon={<AudioWaveVisualizer />}
              frontOrb={
                <div className="relative flex items-center justify-center my-1.5 sm:my-2.5 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#FFF0B3] via-[#D4AF37] to-[#785910] flex items-center justify-center shadow-[0_10px_25px_rgba(212,175,55,0.4)] border border-white/60">
                    <div className="absolute inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none" />
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-[#0a1f3d] filter drop-shadow" strokeWidth={2.5} />
                  </div>
                </div>
              }
              frontTitle="800 9005"
              frontSubtitle="Direct line for parents & students · Tap to call"
              frontActionHref="tel:8009005"
              frontActionText="Call 800 9005"
              frontActionClass="bg-gradient-to-r from-[#F5D77F] via-[#C7A24A] to-[#A8892A] text-[#0a1f3d] hover:brightness-110 shadow-[0_6px_20px_rgba(199,162,74,0.3)]"
              backAccentColor="#C7A24A"
              backGlowColor="#1e5ba8"
              backGradientBg="linear-gradient(145deg, #185299 0%, #0d3f84 60%, #072654 100%)"
              backBorderClass="border-blue-400/40"
              backHeaderBadge={
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">Live Support</span>
                </div>
              }
              backTitle="800 9005"
              backDesc="Direct line for parents and students who'd rather talk things through."
              backFeatures={["Parent Care", "Student Help", "Academic Advice", "Premium Support"]}
              backFootnote={
                <div className="flex items-center gap-1.5 text-blue-200/70 text-[9px] sm:text-[11px] pt-1.5 border-t border-white/10">
                  <Clock className="w-3.5 h-3.5 shrink-0 text-[#C7A24A]" />
                  <span className="truncate">Sat-Thu · 9:00 AM - 9:00 PM</span>
                </div>
              }
              backActionHref="tel:8009005"
              backActionText="Call 800 9005"
              backActionClass="bg-gradient-to-r from-[#F5D77F] via-[#C7A24A] to-[#A8892A] text-[#0a1f3d] hover:brightness-110 shadow-[0_6px_20px_rgba(199,162,74,0.3)]"
            />

            {/* Pod 2: Big 3D Emerald Quantum Capsule & Flip Card */}
            <Support3DFlipPodCard
              isFlipped={flippedWhatsApp}
              onToggle={() => setFlippedWhatsApp(prev => !prev)}
              frontAccentColor="#25D366"
              frontGlowColor="#10b981"
              frontGradientBg="linear-gradient(145deg, #0d8a52 0%, #056e3f 55%, #034828 100%)"
              frontBorderClass="border-emerald-400/40 hover:border-emerald-300/80 shadow-[0_15px_40px_rgba(5,110,63,0.3)]"
              frontBadge="Instant 15m"
              frontBadgeIcon={<QuantumParticleRays />}
              frontOrb={
                <div className="relative flex items-center justify-center my-1.5 sm:my-2.5 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative w-14 h-14 sm:w-18 sm:h-18 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#6EE7B7] via-[#059669] to-[#044736] flex items-center justify-center shadow-[0_10px_25px_rgba(16,185,129,0.4)] border border-white/60">
                    <div className="absolute inset-1 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none" />
                    <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="w-7 h-7 sm:w-9 sm:h-9 object-contain filter drop-shadow" />
                  </div>
                </div>
              }
              frontTitle="Instant Reply"
              frontSubtitle="WhatsApp Desk · Tap to chat on WhatsApp"
              frontActionHref="https://wa.me/971561249005"
              frontActionText="WhatsApp Chat"
              frontActionClass="bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_6px_20px_rgba(37,211,102,0.3)]"
              backAccentColor="#25D366"
              backGlowColor="#10b981"
              backGradientBg="linear-gradient(145deg, #0b7a48 0%, #045a33 60%, #02381f 100%)"
              backBorderClass="border-emerald-400/40"
              backHeaderBadge={
                <div className="flex items-center gap-1 bg-gradient-to-r from-[#D4AF37] to-[#C7A24A] px-2.5 py-0.5 rounded-full shadow-sm">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                  <span className="text-white text-[8px] sm:text-[10px] font-black uppercase tracking-wide">Premium</span>
                </div>
              }
              backTitle="Instant Reply"
              backDesc="Replies within minutes for lesson inquiries and academic support."
              backFeatures={["Trial Lessons", "Scheduling", "Quick Replies", "Academic Support"]}
              backActionHref="https://wa.me/971561249005"
              backActionText="WhatsApp Chat"
              backActionClass="bg-[#25D366] hover:bg-[#20ba59] text-white shadow-[0_6px_20px_rgba(37,211,102,0.3)]"
            />

          </div>
        </div>
      </section>
      {/* ── 05. 3D HOLOGRAPHIC TRACK & ASSISTANCE WAYPOINTS SECTION ── */}
      <section className="py-12 sm:py-20 lg:py-28 bg-gradient-to-b from-[#f8fafd] via-[#edf3fc] to-[#f4f7fb] border-t border-slate-200/80 relative overflow-hidden [perspective:1400px]">
        {/* Holographic Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[420px] bg-gradient-to-r from-[#0b3d80]/10 via-[#C7A24A]/10 to-[#0a3a79]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0b3d80]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#C7A24A]/5 rounded-full blur-[90px] pointer-events-none" />

        {/* 3D Holographic Floor Grid Line Texture */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#0b3d80 1px, transparent 1px), linear-gradient(90deg, #0b3d80 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: 'rotateX(50deg) scale(1.4)',
            transformOrigin: 'top center'
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main Section Header & 3D Glass HUD Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
          >


            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0a1f3d] mb-4 sm:mb-6 tracking-tight">
              Fast, Friendly Assistance for UAE Families
            </h2>

            {/* 3D Glass Blue Container */}
            <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-9 bg-gradient-to-br from-[#0a1f3d] via-[#0b3d80] to-[#0a1f3d] text-white shadow-[0_20px_50px_-15px_rgba(11,61,128,0.3)] border border-white/20 text-left sm:text-center transition-all duration-300">
              <div className="absolute -top-px left-8 sm:left-12 right-8 sm:right-12 h-[2px] bg-gradient-to-r from-transparent via-[#C7A24A]/70 to-transparent" />
              
              <p className="text-white/90 text-xs sm:text-[15px] leading-relaxed">
                Our academic advisory team is available Sunday through Saturday to assist parents and students across Dubai, Abu Dhabi, Sharjah, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Whether you have questions regarding tutor availability, specific exam board specifications (Cambridge 0580/0625/0620, Edexcel 4MA1/4PH1/4CH1, IB DP SL/HL, or AP Calculus), or lesson scheduling, we respond quickly to ensure your child receives timely academic support.
              </p>
            </div>
          </motion.div>

          {/* ── MOBILE 3D HOLOGRAPHIC TRACK VIEW (Covers ONE Compact Section) ── */}
          <div className="lg:hidden mb-8">
            {/* Mobile 3D Holographic Track Conduit */}
            <div className="relative mb-6">
              {/* SVG Connecting Track Line */}
              <div className="absolute top-[24px] left-[15%] right-[15%] h-6 pointer-events-none z-0">
                <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 20" fill="none">
                  <defs>
                    <linearGradient id="mobHoloTrackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0b3d80" stopOpacity="0.25" />
                      <stop offset="50%" stopColor="#C7A24A" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#0b3d80" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>

                  {/* Dotted Holographic Track */}
                  <path
                    d="M 0 10 Q 75 4 150 10 T 300 10"
                    stroke="url(#mobHoloTrackGrad)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />

                  {/* Synchronized Traveling Ribbon Energy Beam */}
                  <motion.path
                    key={activeWaypoint}
                    d="M 0 10 Q 75 4 150 10 T 300 10"
                    stroke={WAYPOINTS[activeWaypoint].accentColor}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{
                      pathOffset: activeWaypoint === 0 ? 0 : activeWaypoint === 1 ? 0.45 : 0.85,
                      pathLength: 0.22,
                      opacity: 0.7,
                    }}
                    animate={{
                      pathOffset: activeWaypoint === 0 ? 0.45 : activeWaypoint === 1 ? 0.85 : 0,
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{ duration: 4.0, ease: 'easeInOut' }}
                    filter={`drop-shadow(0 0 6px ${WAYPOINTS[activeWaypoint].accentColor})`}
                  />
                </svg>
              </div>

              {/* 3 Interactive Hologram Waypoint Buttons */}
              <div className="flex items-center justify-between px-2 relative z-10">
                {WAYPOINTS.map((wp, idx) => {
                  const Icon = wp.icon;
                  const isActive = activeWaypoint === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleWaypointSelect(idx)}
                      className="flex flex-col items-center focus:outline-none group transition-transform"
                    >
                      <div className="relative flex items-center justify-center">
                        {isActive && (
                          <span
                            className="animate-ping absolute inline-flex h-11 w-11 rounded-2xl opacity-30"
                            style={{ backgroundColor: wp.accentColor }}
                          />
                        )}
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${wp.iconBg} text-white flex items-center justify-center shadow-md border-2 transition-all duration-300 ${
                            isActive
                              ? 'scale-110 border-white shadow-lg ring-4 ring-[#0b3d80]/15'
                              : 'opacity-70 border-white/60 scale-95'
                          }`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <span
                        className={`mt-2 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border transition-all ${
                          isActive
                            ? 'bg-[#0b3d80] text-white border-[#0b3d80]'
                            : 'bg-white/85 text-gray-500 border-slate-200'
                        }`}
                      >
                        Node {wp.num}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Waypoint 3D Card (Single Animated Deck on Mobile) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWaypoint}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-white/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_12px_35px_rgba(11,61,128,0.08)] text-left min-h-[175px] flex flex-col justify-between"
              >
                {/* Auto-cycle Progress Line across top of card */}
                <div className="w-full h-0.5 bg-slate-100 rounded-full mb-4 overflow-hidden">
                  <motion.div
                    key={`prog-${activeWaypoint}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4.0, ease: 'linear' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: WAYPOINTS[activeWaypoint].accentColor }}
                  />
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[10px] font-black uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full border"
                    style={{
                      color: WAYPOINTS[activeWaypoint].accentColor,
                      backgroundColor: `${WAYPOINTS[activeWaypoint].accentColor}12`,
                      borderColor: `${WAYPOINTS[activeWaypoint].accentColor}25`,
                    }}
                  >
                    {WAYPOINTS[activeWaypoint].label}
                  </span>
                  <div className="flex gap-1.5">
                    {WAYPOINTS.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => handleWaypointSelect(dotIdx)}
                        className={`h-1.5 rounded-full transition-all ${
                          activeWaypoint === dotIdx ? 'w-5' : 'w-1.5 bg-slate-200'
                        }`}
                        style={{
                          backgroundColor: activeWaypoint === dotIdx ? WAYPOINTS[activeWaypoint].accentColor : undefined,
                        }}
                        aria-label={`Go to waypoint ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="font-black text-[#0a1f3d] text-base mb-2 leading-snug">
                  {WAYPOINTS[activeWaypoint].title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-0">
                  {WAYPOINTS[activeWaypoint].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── DESKTOP 3D HOLOGRAPHIC ENERGY TRACK & 3 WAYPOINTS ── */}
          <div className="hidden lg:block relative mb-4">

            {/* Desktop 3D Holographic Ribbon Track (SVG Connected Path) */}
            <div className="absolute top-[28px] left-[16%] right-[16%] h-8 pointer-events-none z-0">
              <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 700 24" fill="none">
                <defs>
                  <linearGradient id="hologramTrackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0b3d80" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#C7A24A" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#0b3d80" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="hologramPulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0b3d80" />
                    <stop offset="50%" stopColor="#C7A24A" />
                    <stop offset="100%" stopColor="#25D366" />
                  </linearGradient>
                </defs>

                {/* Base Holographic Track Line */}
                <path
                  d="M 0 12 Q 175 2 350 12 T 700 12"
                  stroke="url(#hologramTrackGrad)"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                />

                {/* Animated Traveling Energy Beam */}
                <motion.path
                  d="M 0 12 Q 175 2 350 12 T 700 12"
                  stroke="url(#hologramPulseGrad)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathOffset: 0, pathLength: 0.25 }}
                  animate={{ pathOffset: [0, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                  filter="drop-shadow(0 0 6px rgba(199,162,74,0.6))"
                />
              </svg>
            </div>

            {/* 3 Holographic Waypoints Grid */}
            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {WAYPOINTS.map((wp, idx) => {
                const Icon = wp.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                    className="group relative flex flex-col items-center text-center h-full"
                  >
                    {/* 3D Pulsing Holographic Beacon Node */}
                    <div className="relative top-0 flex flex-col items-center mb-6">
                      <div className="relative flex items-center justify-center">
                        <span
                          className="animate-ping absolute inline-flex h-12 w-12 rounded-2xl opacity-20"
                          style={{ backgroundColor: wp.accentColor }}
                        />
                        <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${wp.iconBg} text-white flex items-center justify-center shadow-[0_10px_25px_rgba(11,61,128,0.25)] border-2 border-white transition-transform duration-300 group-hover:scale-110`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <span
                        className="inline-block mt-2.5 text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-0.5 rounded-full border"
                        style={{
                          color: wp.accentColor,
                          backgroundColor: `${wp.accentColor}15`,
                          borderColor: `${wp.accentColor}30`,
                        }}
                      >
                        {wp.label}
                      </span>
                    </div>

                    {/* 3D Floating Glass Deck */}
                    <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(11,61,128,0.06)] group-hover:shadow-[0_20px_45px_rgba(11,61,128,0.12)] group-hover:border-[#0b3d80]/40 transition-all duration-300 flex-1 flex flex-col justify-start">
                      <div>
                        <h3 className="font-black text-[#0a1f3d] text-base mb-2.5 leading-snug group-hover:text-[#0b3d80] transition-colors min-h-[44px] flex items-center justify-center">
                          {wp.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {wp.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ── 06. FAQ ACCORDION ── */}
      <section id="faqs" className="py-12 sm:py-16 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
            {/* Left: Heading */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-4 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.1)]">
                <MessageCircle className="h-4 w-4" /> FAQ
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Questions</span>
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                Answers to common questions from parents and students.
              </p>
              <a
                href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%20have%20a%20question%20about%20tutoring."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a9b] hover:text-[#0a1f3d] transition-colors"
              >
                <span>Have a different question? Ask on WhatsApp</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
            {/* Right: Accordion */}
            <div>
              <FAQAccordion faqs={contactFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 07. FINAL CALL TO ACTION ── */}
      <FinalCTA
        title="Start Your Learning Journey"
        subtitle="Connect with us and get matched with the right tutor."
        button1Text="Speak to an Advisor"
        button1Href="#form"
      />

    </Layout>
  );
}
