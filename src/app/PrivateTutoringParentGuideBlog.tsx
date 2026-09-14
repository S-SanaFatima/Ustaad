import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp, Mail, Home,
  ChevronRight as ChevronRightIcon, MessageCircle, AlertTriangle,
  Printer, ArrowRight, XCircle, CheckCircle2, Check, School, Sparkles, RotateCcw
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Private Tutoring in the UAE: A Complete Parent Guide | Ustaad',
  titleLine1: 'Private Tutoring in the UAE:',
  titleLine2: 'A Complete Parent Guide',
  subtitle:
    'What does the research say about one-to-one tutoring, and how are tutors regulated in the UAE? A complete, evidence-based guide for UAE parents on legal permits, delivery formats, vetting criteria, and curriculum alignment.',
  slug: 'private-tutoring-uae-parent-guide',
  description:
    'Is private tutoring legal in the UAE? What does the educational research show about 1-to-1 impact? A complete parent guide covering MOHRE permits, KHDA and ADEK oversight, evidence-based vetting, and learning milestones.',
  heroImage: '/images/blogs/parent-child-tutoring-timetable-hero.jpg',
  heroAlt: 'A UAE parent and their teenage child looking at a printed tutoring schedule together at the kitchen table in the evening.',
  heroCaption:
    'Choosing a tutor works better as a short, deliberate decision than a rushed reaction to a bad report card.',
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  author: 'Nimra Shahzada',
  authorRole: 'Education Counsellor & Student Support Specialist | Ustaad UAE',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Nida Iqbal',
  reviewerTitle: 'MPhil in Education Leadership and Management · Ustaad Editorial',
  reviewerUrl: '/authors/nida-iqbal',
  readTime: '10 min read',
  tags: [
    'Private Tutoring in the UAE',
    'Parent Guidance',
    'KHDA Tutoring Rules',
    'ADEK Tutoring Rules',
    'MOHRE Private Teacher Permit',
    'UAE Tutoring Evidence & Standards',
    'IGCSE Tutor Dubai',
    'IB Tutor Abu Dhabi'
  ],
};

const FAQS = [
  {
    q: 'Is private tutoring legal in the UAE?',
    a: 'Yes, when the tutor or center is properly authorized. Individual tutors are expected to hold a MOHRE private teacher permit; centers need KHDA approval in Dubai or ADEK approval in Abu Dhabi. See Section 02.',
  },
  {
    q: 'What qualifications and permits should a private tutor in the UAE hold?',
    a: 'Individual freelance tutors are required to hold a Private Teacher Work Permit issued by MOHRE. Dedicated tutoring centers must hold educational activity permits approved by KHDA in Dubai or ADEK in Abu Dhabi. Tutors should also hold proven subject-matter degrees and board-specific familiarity with your child\'s exact syllabus code. See Section 02.',
  },
  {
    q: 'Is online tutoring as effective as in-person tutoring?',
    a: 'For many subjects and older students, yes, particularly where it provides access to a specialist who wouldn\'t otherwise be available locally. Younger children often do better with in-person sessions that help keep them on task. See Section 04.',
  },
  {
    q: 'How soon should I expect to see results?',
    a: 'Most families see a measurable shift in a specific topic or skill within four to eight weeks of consistent, well-matched sessions. If nothing has changed by then, it\'s worth re-diagnosing the gap rather than adding more hours. See Section 08.',
  },
  {
    q: 'Should I ask to see a tutor\'s permit?',
    a: 'Yes. It\'s a normal, fair question, and a credible tutor or center won\'t be defensive about answering it. See Section 05.',
  },
];

const TOC_ITEMS = [
  { label: '01. Why UAE Parents End Up Looking for a Tutor', id: 'why-uae-parents-look-for-tutor' },
  { label: '02. Is Private Tutoring Actually Legal in the UAE?', id: 'is-private-tutoring-legal-uae' },
  { label: '03. What the Evidence Says: The Measured Impact of 1-to-1 Tutoring', id: 'evidence-impact-one-to-one-tutoring' },
  { label: '04. Home Tutor, Tutoring Center, or Online Platform?', id: 'home-tutor-center-online-platform' },
  { label: '05. Five Questions to Ask Before You Hire', id: 'five-questions-before-you-hire' },
  { label: '06. Getting the Curriculum and Exam Board Right', id: 'getting-curriculum-exam-board-right' },
  { label: '07. Red Flags That Should End the Conversation', id: 'red-flags-end-conversation' },
  { label: '08. How to Tell If the Tutoring Is Actually Working', id: 'how-to-tell-if-working' },
  { label: '09. A Simple Way to Approach the Decision', id: 'simple-way-approach-decision' },
  { label: '10. Decision Flowchart & Vetting Checklist', id: 'decision-flowchart-checklist' },
  { label: '11. Frequently Asked Questions', id: 'frequently-asked-questions' },
  { label: '12. Sources and Further Reading', id: 'sources-and-reading' },
];

const RELATED = [
  {
    category: 'Parent Guidance',
    slug: '10-questions-hiring-private-tutor-abu-dhabi',
    title: '10 Honest Questions to Ask Before You Hire a Private Tutor in Abu Dhabi',
    description: 'Ten practical questions UAE parents should ask before hiring a tutor, plus a free interview worksheet.',
  },
  {
    category: 'Parent Guidance',
    slug: 'gcse-revision-tips-uae-parents',
    title: 'GCSE & IGCSE Revision Tips UAE: Skills That Raise Grades',
    description: 'Practical GCSE and IGCSE revision tips for UAE parents: the study skills that actually raise grades, and how to support your child without taking over.',
  },
  {
    category: 'Academic',
    slug: 'igcse-preparation-past-papers-final-step',
    title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First',
    description: 'Past papers are the roof of IGCSE preparation, essential, but only after the foundation is set.',
  },
  {
    category: 'Subject & Exam Skills',
    slug: 'why-igcse-biology-students-lose-marks-on-6-mark-questions',
    title: 'Why IGCSE Biology Students Lose Marks on 6-Mark Questions',
    description: 'A board-specific guide explaining what Cambridge and Pearson mark schemes actually reward.',
  },
  {
    category: 'Parent Guidance',
    slug: 'exam-panic-before-exams-uae',
    title: 'What UAE Parents Miss About Exam Panic Right Before Exams',
    description: 'Why exam anxiety peaks in the final days before papers, and how parents can help protect working memory.',
  },
];

const THEME_GRADIENT = 'linear-gradient(90deg, #0f4a9b 0%, #0a3a79 100%)';

function SectionHeading({ num, id, children }: { num?: string; id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mt-12 mb-4 scroll-mt-24">
      {num ? <span className="block text-[11px] font-black tracking-widest text-[#0f4a9b]/50 uppercase mb-1">{num}</span> : null}
      <h2 className="text-xl lg:text-2xl font-extrabold text-[#0a1f3d] leading-snug">{children}</h2>
    </div>
  );
}

function SocialShare({ url, title, center }: { url: string; title: string; center?: boolean }) {
  const enc = encodeURIComponent(url);
  const encT = encodeURIComponent(title);
  return (
    <div className={`flex items-center gap-2 ${center ? 'justify-center' : ''}`}>
      <a
        href={`https://wa.me/?text=${encT}%20${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#25d366]/10 hover:bg-[#25d366]/20 transition"
        aria-label="Share on WhatsApp"
      >
        <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="w-4 h-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#1877f2]/10 hover:bg-[#1877f2]/20 transition text-[#1877f2] font-extrabold text-xs"
        aria-label="Share on Facebook"
      >
        f
      </a>
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${enc}&title=${encT}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 transition text-[#0a66c2] font-extrabold text-xs"
        aria-label="Share on LinkedIn"
      >
        in
      </a>
      <a
        href={`mailto:?subject=${encT}&body=${enc}`}
        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition text-gray-500"
        aria-label="Share via Email"
      >
        <Mail className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function TOC({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  return (
    <div className="my-6 rounded-2xl border border-[#0f4a9b]/10 bg-[#f8fafd] overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-3.5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b] shrink-0" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0f4a9b]">
            In This Article
          </span>
        </div>
        <span className="lg:hidden text-[#0f4a9b]">
          {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </span>
      </button>
      <div className={`lg:block ${open ? 'block' : 'hidden'}`}>
        <div className="px-5 pb-3.5 space-y-0.5">
          {TOC_ITEMS.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2.5 group py-1"
            >
              <span className="shrink-0 text-[10px] font-extrabold text-[#0f4a9b]/35 w-4">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[13px] text-gray-500 group-hover:text-[#0f4a9b] transition-colors leading-snug">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function InteractiveFlowchart() {
  const [selectedStruggle, setSelectedStruggle] = useState<'single' | 'broad'>('single');
  const [selectedFormat, setSelectedFormat] = useState<'home' | 'center' | 'online'>('online');
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({
    '1': true,
    '2': true,
  });
  const [schoolConsulted, setSchoolConsulted] = useState(false);

  const toggleCheck = (id: string) => {
    setCheckedQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checkedCount = Object.values(checkedQuestions).filter(Boolean).length;

  const handlePrint = () => {
    const card = document.getElementById('printable-flowchart-card');
    if (!card) {
      window.print();
      return;
    }

    // Create an isolated iframe for clean single-card printing (no rest-of-page content)
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(iframe);

    const frameDoc = iframe.contentWindow?.document;
    if (!frameDoc) {
      window.print();
      return;
    }

    // Extract all page stylesheets & tailwind definitions
    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map((el) => el.outerHTML)
      .join('\n');

    frameDoc.open();
    frameDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Ustaad UAE - Parent Decision Flowchart & Vetting Checklist</title>
          ${styles}
          <style>
            @page {
              margin: 8mm;
              size: portrait;
            }
            body {
              background: #ffffff !important;
              color: #0a1f3d !important;
              margin: 0 !important;
              padding: 0 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
            }
            #printable-flowchart-card {
              box-shadow: none !important;
              margin: 0 !important;
              border: 1.5px solid #0f4a9b !important;
              border-radius: 16px !important;
            }
            .no-print {
              display: none !important;
            }
          </style>
        </head>
        <body>
          <div style="padding: 4px;">
            ${card.outerHTML}
          </div>
        </body>
      </html>
    `);
    frameDoc.close();

    setTimeout(() => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch (err) {
        console.error('Print iframe error:', err);
        window.print();
      } finally {
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 1200);
      }
    }, 350);
  };

  return (
    <div id="printable-flowchart-card" className="my-8 rounded-3xl border-2 border-[#0f4a9b]/20 bg-white shadow-[0_12px_40px_rgba(15,74,155,0.08)] overflow-hidden">
      {/* Print only this card stylesheet */}
      <style>{`
        @media print {
          @page {
            margin: 8mm;
            size: portrait;
          }
          body {
            background: #ffffff !important;
          }
          body * {
            visibility: hidden !important;
          }
          #printable-flowchart-card, #printable-flowchart-card * {
            visibility: visible !important;
          }
          #printable-flowchart-card {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border: 1.5px solid #0f4a9b !important;
            border-radius: 16px !important;
            box-shadow: none !important;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0a1f3d] via-[#0f4a9b] to-[#0a1f3d] text-white px-6 py-6 sm:px-8">
        <div className="flex items-center justify-end mb-2">
          <span className="text-xs text-blue-200">ustaad.ae · 800 9005</span>
        </div>
        <h3 className="text-lg sm:text-2xl font-bold font-serif text-white mb-1">
          Private Tutoring in the UAE: Decision Flowchart &amp; Vetting Checklist
        </h3>
        <p className="text-blue-100 text-xs sm:text-sm">
          Interactive companion for UAE parents: diagnose your child's need, choose the right format, and vet tutors.
        </p>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* STEP 1: THE DIAGNOSTIC TRIGGER */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0f4a9b] text-white text-xs font-black shadow-xs">
              1
            </span>
            <div>
              <h4 className="text-base font-extrabold text-[#0a1f3d] uppercase tracking-wide">
                Step 1: Diagnose the Learning Gap
              </h4>
              <p className="text-xs text-slate-500">
                Trigger Event: "My child is struggling or plateauing in their schoolwork"
              </p>
            </div>
          </div>

          <p className="text-xs font-bold text-slate-700 mb-3 text-center sm:text-left">
            Select the situation that best matches your child right now:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Branch A Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedStruggle('single');
                setSchoolConsulted(false);
              }}
              className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer relative ${
                selectedStruggle === 'single'
                  ? 'border-[#0f4a9b] bg-blue-50/80 shadow-md ring-2 ring-[#0f4a9b]/20'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#0f4a9b] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Option A: ONE Specific Gap
                </span>
              </div>
              <p className="text-sm font-bold text-slate-900 leading-snug">
                Struggling in a single subject or specific skill
              </p>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                e.g. IGCSE Maths calculus, Chemistry stoichiometry, or essay timing lasting 2+ weeks.
              </p>
              <div className="mt-3 pt-2.5 border-t border-[#0f4a9b]/15 text-[11px] font-bold text-[#0f4a9b]">
                ✓ Recommendation: Targeted Private Tutoring →
              </div>
            </button>

            {/* Branch B Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedStruggle('broad');
                setSchoolConsulted(false);
              }}
              className={`p-5 rounded-2xl border-2 text-left transition-all cursor-pointer relative ${
                selectedStruggle === 'broad'
                  ? 'border-amber-600 bg-amber-50/80 shadow-md ring-2 ring-amber-600/20'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <School className="w-4 h-4" /> Option B: SEVERAL / Broad Decline
                </span>
              </div>
              <p className="text-sm font-bold text-slate-900 leading-snug">
                Struggling across multiple subjects or general disengagement
              </p>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                e.g. general drop across 3+ classes, homework resistance, or loss of study motivation.
              </p>
              <div className="mt-3 pt-2.5 border-t border-amber-600/20 text-[11px] font-bold text-amber-800">
                ⚠ Recommendation: School Meeting First →
              </div>
            </button>
          </div>
        </div>

        {/* DYNAMIC PATHWAY DISPLAY */}
        <AnimatePresence mode="wait">
          {selectedStruggle === 'broad' && !schoolConsulted ? (
            /* PATH B: SCHOOL MEETING FIRST */
            <motion.div
              key="path-school"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border-2 border-amber-300 bg-amber-50/70 p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base">
                <School className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Why a Broad Struggle Needs a School Conversation First</span>
              </div>
              <p className="text-xs sm:text-[13px] text-amber-950 leading-relaxed">
                When a student struggles across multiple subjects at once, hiring three or four separate tutors immediately often leads to timetable overload and fatigue without fixing the root cause (which is usually revision method, exam stamina, or attention).
              </p>

              <div className="bg-white/90 border border-amber-200 rounded-xl p-4 space-y-2 text-xs">
                <p className="font-bold text-[#0a1f3d] uppercase tracking-wide text-[11px]">
                  Recommended 3-Step Action Plan:
                </p>
                <ol className="space-y-1.5 list-decimal pl-4 text-slate-700">
                  <li><strong>Book a meeting with the Head of Year or SENCO:</strong> Ask for a combined teacher feedback report.</li>
                  <li><strong>Diagnose the bottleneck:</strong> Is it conceptual understanding, reading speed, or exam stamina?</li>
                  <li><strong>Isolate the primary priority:</strong> Once the school clarifies the root issue, introduce <em>one</em> targeted tutor for the highest-impact subject first.</li>
                </ol>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-amber-900 font-medium">
                  Already completed your school review and ready to find a tutor?
                </p>
                <button
                  type="button"
                  onClick={() => setSchoolConsulted(true)}
                  className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                >
                  Proceed to Tutoring Format Selection <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ) : (
            /* PATH A: TARGETED TUTORING WORKFLOW */
            <motion.div
              key="path-tutoring"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* STEP 2: FORMAT SELECTOR */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0f4a9b] text-white text-xs font-black shadow-xs">
                    2
                  </span>
                  <div>
                    <h4 className="text-base font-extrabold text-[#0a1f3d] uppercase tracking-wide">
                      Step 2: Choose the Right Tutoring Format
                    </h4>
                    <p className="text-xs text-slate-500">
                      Click each format to see its specific pedagogical benefits, delivery model, and suitability:
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {/* Home Tutor Card */}
                  <button
                    type="button"
                    onClick={() => setSelectedFormat('home')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedFormat === 'home'
                        ? 'border-[#0f4a9b] bg-blue-50/70 shadow-md ring-2 ring-[#0f4a9b]/20'
                        : 'border-slate-200 bg-[#f8fafd] hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-black uppercase tracking-wider text-[#0a1f3d]">Home Tutor</span>
                        {selectedFormat === 'home' && <span className="text-xs font-bold text-[#0f4a9b]">✓ Selected</span>}
                      </div>
                      <p className="text-xs text-slate-700 mb-2">
                        <strong className="text-[#0a1f3d]">Best for:</strong> Primary/younger children needing 100% focused physical presence and zero travel.
                      </p>
                      <p className="text-[11px] text-blue-900 bg-blue-50/80 px-2.5 py-1.5 rounded-lg border border-blue-200/60 font-medium">
                        <strong>Pedagogical Model:</strong> Direct 1-on-1 scaffolding and routine building.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 text-xs font-bold text-[#0f4a9b]">
                      Focus: Hands-on Diagnostic Support
                    </div>
                  </button>

                  {/* Center Card */}
                  <button
                    type="button"
                    onClick={() => setSelectedFormat('center')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedFormat === 'center'
                        ? 'border-[#0f4a9b] bg-blue-50/70 shadow-md ring-2 ring-[#0f4a9b]/20'
                        : 'border-slate-200 bg-[#f8fafd] hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-black uppercase tracking-wider text-[#0a1f3d]">Tutoring Center</span>
                        {selectedFormat === 'center' && <span className="text-xs font-bold text-[#0f4a9b]">✓ Selected</span>}
                      </div>
                      <p className="text-xs text-slate-700 mb-2">
                        <strong className="text-[#0a1f3d]">Best for:</strong> Classroom structure, institutional track record, KHDA/ADEK license.
                      </p>
                      <p className="text-[11px] text-amber-900 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200 font-medium">
                        <strong>Trade-off:</strong> Fixed schedules, commute required.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 text-xs font-bold text-[#0f4a9b]">
                      Focus: Structured Syllabus &amp; Mocks
                    </div>
                  </button>

                  {/* Online Platform Card */}
                  <button
                    type="button"
                    onClick={() => setSelectedFormat('online')}
                    className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedFormat === 'online'
                        ? 'border-[#0f4a9b] bg-blue-50/70 shadow-md ring-2 ring-[#0f4a9b]/20'
                        : 'border-slate-200 bg-[#f8fafd] hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-black uppercase tracking-wider text-[#0a1f3d]">Online Specialist</span>
                        {selectedFormat === 'online' && <span className="text-xs font-bold text-[#0f4a9b]">✓ Selected</span>}
                      </div>
                      <p className="text-xs text-slate-700 mb-2">
                        <strong className="text-[#0a1f3d]">Best for:</strong> Senior IGCSE, IB &amp; A-Level exam board specialists with zero commute.
                      </p>
                      <p className="text-[11px] text-emerald-900 bg-emerald-50 px-2.5 py-1.5 rounded-lg border border-emerald-200 font-medium">
                        <strong>Pedagogical Model:</strong> Live mark scheme dissection &amp; screen-sharing.
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200 text-xs font-bold text-emerald-700">
                      Focus: Board Examiner Expertise
                    </div>
                  </button>
                </div>
              </div>

              {/* STEP 3: INTERACTIVE 5-QUESTION VETTING CHECKLIST */}
              <div className="pt-6 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0f4a9b] text-white text-xs font-black shadow-xs">
                      3
                    </span>
                    <div>
                      <h4 className="text-base font-extrabold text-[#0a1f3d] uppercase tracking-wide">
                        Step 3: The 5-Question Vetting Checklist
                      </h4>
                      <p className="text-xs text-slate-500">
                        Check off each question before committing to paid sessions:
                      </p>
                    </div>
                  </div>

                  {/* Live Vetting Counter */}
                  <div className="flex items-center gap-2 self-start sm:self-auto bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                    <span className="text-xs font-extrabold text-[#0f4a9b]">
                      {checkedCount} of 5 Vetted
                    </span>
                    <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 transition-all duration-300"
                        style={{ width: `${(checkedCount / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      id: '1',
                      q: 'Which exam board AND specific syllabus code do you teach?',
                      sub: 'Verify they know the exact paper (e.g. Cambridge 0580, Edexcel 4MA1, IB DP HL, AP).',
                    },
                    {
                      id: '2',
                      q: 'Are you MOHRE-permitted, or is your center KHDA / ADEK approved?',
                      sub: 'Confirms authorized legal standing in Dubai, Abu Dhabi, and Northern Emirates.',
                    },
                    {
                      id: '3',
                      q: 'Can you show a sample session plan and past-paper drill structure?',
                      sub: 'Checks active teaching methodology vs passive homework supervising.',
                    },
                    {
                      id: '4',
                      q: 'What does measurable progress look like in the first 4 to 6 weeks?',
                      sub: 'Establishes clear diagnostic milestones instead of vague reassurances.',
                    },
                    {
                      id: '5',
                      q: 'What are the cancellation, rescheduling, and refund terms in writing?',
                      sub: 'Prevents misunderstandings before money changes hands.',
                    },
                  ].map((item) => {
                    const isChecked = !!checkedQuestions[item.id];
                    return (
                      <div
                        key={item.id}
                        onClick={() => toggleCheck(item.id)}
                        className={`flex items-start gap-3 border rounded-xl p-3.5 transition-all cursor-pointer select-none ${
                          isChecked
                            ? 'bg-emerald-50/60 border-emerald-300 shadow-xs'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center transition-colors shrink-0 ${
                            isChecked ? 'bg-emerald-600 text-white' : 'border-2 border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div className="text-xs">
                          <p className={`font-bold leading-snug ${isChecked ? 'text-emerald-950 line-through/none' : 'text-[#0a1f3d]'}`}>
                            {item.id}. {item.q}
                          </p>
                          <p className="text-slate-500 mt-0.5">{item.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Red Flag Warning Box */}
                <div className="mt-5 rounded-2xl bg-[#fff5f5] border border-red-200 p-4.5 sm:p-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-red-700">
                      Red Flag Warning: Stop and walk away if
                    </span>
                  </div>
                  <p className="text-xs text-red-900 leading-relaxed">
                    A guaranteed grade jump in days • No written agreement • Dodges the MOHRE/KHDA permit question • High-pressure prepaid packages before a trial.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-500">
          <p>
            Ustaad UAE · Premium private tutoring across the UAE since 2015 · ustaad.ae · 800 9005 (USTAAD)
          </p>
          <button
            type="button"
            onClick={handlePrint}
            className="no-print inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0f4a9b] text-white font-bold text-xs hover:bg-[#0a3a79] transition shadow-xs cursor-pointer shrink-0"
          >
            <Printer className="w-3.5 h-3.5" /> Print / Download Checklist
          </button>
        </div>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2">
      {FAQS.map((faq, i) => {
        const isOpen = active === i;
        return (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setActive(isOpen ? null : i)}
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: 36,
                  height: 36,
                  minWidth: 36,
                  background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                  color: isOpen ? '#fff' : '#0f4a9b',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 300ms, color 300ms',
                }}
              >
                <span className="font-extrabold text-sm">?</span>
              </button>
              <button
                onClick={() => setActive(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex-1 flex items-center gap-2.5 text-left rounded-full border"
                style={{
                  minHeight: 44,
                  padding: '7px 14px',
                  cursor: 'pointer',
                  background: 'transparent',
                  borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)',
                }}
              >
                <span className="flex-1 font-semibold text-[#0a1f3d] text-[13px] leading-snug">{faq.q}</span>
                <span
                  className="flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 28,
                    height: 28,
                    background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)',
                    color: isOpen ? '#fff' : '#0f4a9b',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 300ms',
                  }}
                >
                  <ChevronDown className="h-3 w-3" />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.24 }}
                  className="ml-[48px]"
                >
                  <div
                    className="flex items-start gap-2.5 rounded-2xl border p-3.5"
                    style={{ background: '#f8fafc', borderColor: 'rgba(15,74,155,0.12)', boxShadow: '0 3px 12px rgba(15,74,155,0.05)' }}
                  >
                    <p className="flex-1 text-slate-700 text-sm leading-[1.7]">{faq.a}</p>
                    <span className="flex-shrink-0 flex items-center justify-center rounded-full w-7 h-7 bg-[#0f4a9b] text-white">
                      <MessageCircle className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function PrivateTutoringParentGuideBlog() {
  const canonical = `/blogs/${BLOG.slug}`;
  const shareUrl = `https://ustaad.ae${canonical}`;
  const [tocOpen, setTocOpen] = useState(true);

  return (
    <Layout>
      <SEOHead
        title={BLOG.title}
        description={BLOG.description}
        canonical={canonical}
        ogImage={BLOG.heroImage}
        author={BLOG.author}
        placename="United Arab Emirates"
        ogType="article"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
            { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
            { name: BLOG.titleLine2, url: canonical },
          ]),
          articleSchema({
            title: BLOG.title,
            description: BLOG.description,
            url: canonical,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: {
              name: BLOG.author,
              url: BLOG.authorUrl,
              jobTitle: 'Education Counsellor & Student Support Specialist',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
              affiliation: 'Ustaad UAE',
            },
            reviewer: {
              name: BLOG.reviewer,
              url: BLOG.reviewerUrl,
              jobTitle: 'MPhil in Education Leadership and Management',
              sameAs: 'https://www.linkedin.com/company/ustaad-ae',
              affiliation: 'Ustaad Editorial',
            },
            image: BLOG.heroImage,
          }),
          faqSchema(FAQS),
        ]}
      />

      {/* Breadcrumb Header */}
      <div className="bg-[#f8fafd] border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center gap-1.5 text-xs text-gray-400">
          <a href="/" className="hover:text-[#0f4a9b] transition flex items-center gap-1">
            <Home className="h-3 w-3" /> Home
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs" className="hover:text-[#0f4a9b] transition">
            Blog
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <a href="/blogs/parent-guidance" className="hover:text-[#0f4a9b] transition truncate max-w-[150px]">
            Parent Guidance
          </a>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="text-[#0f4a9b] font-semibold truncate max-w-[150px]">Private Tutoring in the UAE</span>
        </div>
      </div>

      {/* Main Blog Article Section */}
      <section className="pt-7 pb-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Tag, Title & Author Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            
            {/* Category badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0f4a9b]/6 rounded-full mb-3 border border-[#0f4a9b]/10">
              <BookOpen className="h-3.5 w-3.5 text-[#0f4a9b]" />
              <span className="text-[11px] font-extrabold text-[#0f4a9b] tracking-wide">
                USTAAD UAE · PARENT GUIDANCE &amp; ACADEMIC INSIGHTS
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl lg:text-[2rem] font-extrabold text-[#0a1f3d] tracking-tight leading-[1.2] mb-3">
              {BLOG.titleLine1}{' '}
              <span
                className="italic"
                style={{
                  background: THEME_GRADIENT,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {BLOG.titleLine2}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-gray-500 text-sm lg:text-[15px] leading-relaxed mb-3 text-left">
              {BLOG.subtitle}
            </p>

            {/* Author and Metadata Stack (Matching Exact Screenshot Styling) */}
            <div className="mb-4 mt-2 space-y-2">
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <div>
                    <span className="font-medium">Written by:</span>{' '}
                    <a href={BLOG.authorUrl} className="text-[#0f4a9b] font-semibold underline">{BLOG.author}</a>
                  </div>
                  <div className="text-gray-400 mt-0.5">{BLOG.authorRole}</div>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-500">
                <User className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <div>
                    <span className="font-medium">Reviewed by:</span>{' '}
                    <a href={BLOG.reviewerUrl} className="text-[#0f4a9b] font-semibold underline">{BLOG.reviewer}</a>
                  </div>
                  <div className="text-gray-400 mt-0.5">
                    {BLOG.reviewerTitle}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400 pt-1">
                <time className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-[#C7A24A] shrink-0" />
                  Last reviewed: September 2026 · Ustaad UAE Editorial Team
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[#C7A24A]" />{BLOG.readTime}
                </span>
                <SocialShare url={shareUrl} title={BLOG.title} />
              </div>
            </div>

          </motion.div>

          {/* Hero image */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 mt-4"
          >
            <div className="rounded-2xl overflow-hidden border-4 border-white shadow-[0_8px_40px_rgba(15,74,155,0.12)]">
              <img
                src={BLOG.heroImage}
                alt={BLOG.heroAlt}
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-gray-400 italic">
              {BLOG.heroCaption}
            </figcaption>
          </motion.figure>

          {/* Table of Contents */}
          <TOC open={tocOpen} setOpen={setTocOpen} />

          {/* Introduction Paragraphs */}
          {/* Introduction Paragraphs */}
          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4 my-6">
            <p>
              It is a Sunday evening, and the parents' WhatsApp group for your child's school is lighting up again. Someone has asked for a tutor recommendation for <a href="/chemistry" className="text-[#0f4a9b] font-semibold hover:underline">Grade 10 chemistry</a>, and within twenty minutes there are a dozen replies: a centre in the next community, a home tutor who "worked wonders" for someone's cousin, an online platform with glowing reviews. Everyone has an opinion. Almost nobody mentions whether the tutor is properly permitted, how their pedagogical methodology works, or whether the format suits your particular child.
            </p>
            <p>
              That WhatsApp thread is the real starting point for most UAE families shopping for a tutor, and it usually works out fine. Sometimes it does not, and by the time a family notices the instructional fit was mismatched, several critical weeks of exam preparation are already lost.
            </p>
            <p>
              This guide walks through what the educational evidence actually demonstrates before you commit to an arrangement: what peer-reviewed research shows about 1-to-1 learning gains, how private tutoring is regulated across the UAE, which format suits your child, and the handful of diagnostic questions that reveal more than any group chat recommendation ever will.
            </p>
          </div>

          {/* Section 01 */}
          <SectionHeading num="01" id="why-uae-parents-look-for-tutor">
            Why UAE Parents End Up Looking for a Tutor
          </SectionHeading>
          
          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              The UAE is one of the few places globally where a single school year group can be preparing for four or five distinct national curriculum systems simultaneously. <a href="/british-curriculum" className="text-[#0f4a9b] font-semibold hover:underline">British curriculum</a> families are tracking <a href="/igcse" className="text-[#0f4a9b] font-semibold hover:underline">IGCSE</a> and <a href="/a-level" className="text-[#0f4a9b] font-semibold hover:underline">A-Level</a>. <a href="/american-curriculum" className="text-[#0f4a9b] font-semibold hover:underline">American curriculum</a> families are tracking the SAT and <a href="/ap" className="text-[#0f4a9b] font-semibold hover:underline">AP</a> exams. <a href="/ib-curriculum" className="text-[#0f4a9b] font-semibold hover:underline">IB Diploma</a> families are tracking Diploma point totals and Internal Assessments (IAs). CBSE and ICSE families run to their own board calendar entirely. A classroom teacher, however dedicated, is pacing a room of twenty-five to thirty students against one syllabus at a time, and it is not always the pace or the conceptual depth your child needs most this term.
            </p>

            <p>
              That is the precise gap <a href="/tutors" className="text-[#0f4a9b] font-semibold hover:underline">private tutoring in the UAE</a> is designed to address: not a second school, but a short, targeted diagnostic intervention aimed at a specific subject, cognitive skill, or exam window. Families who treat it as a disciplined diagnostic tool, rather than an indefinite habit, consistently achieve the highest learning outcomes. If you have recently received term feedback, you may also find our guide on how to <a href="/blogs/read-uae-school-report-card" className="text-[#0f4a9b] font-semibold hover:underline">read a UAE school report card like a counsellor</a> helpful in pinpointing root issues.
            </p>

            {/* Visual Graphic: Progress Tracking Dashboard */}
            <div className="my-6">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm aspect-[16/9] bg-slate-100">
                <img
                  src="/images/blogs/progress_tracking_dashboard.jpg"
                  alt="Diagnostic progress tracking dashboard displaying academic milestones, topic mastery percentages, and weekly review metrics."
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-[11px] text-gray-500 italic text-center">
                Visual progress tracking allows parents and tutors to pinpoint specific topic gaps and measure conceptual recovery objectively.
              </p>
            </div>
          </div>

          {/* Section 02 */}
          <SectionHeading num="02" id="is-private-tutoring-legal-uae">
            Is Private Tutoring Actually Legal in the UAE?
          </SectionHeading>

          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              This is the foundational question every parent should confirm before entering into a tutoring engagement.
            </p>

            <p>
              <strong>Individual freelance tutors</strong> teaching your child one-on-one, whether in your home or online, are regulated under the <strong>Private Teacher Work Permit</strong> framework overseen by the <strong>Ministry of Human Resources and Emiratisation (MOHRE)</strong> in conjunction with the Ministry of Education (MoE). This permit verifies that a freelance educator is registered, identity-verified, and authorised to provide educational mentorship outside of regular school hours.
            </p>

            <p>
              <strong>Tutoring centres and learning institutes</strong> (organisations operating physical premises with structured staff) fall under regional educational authorities. In Dubai, private educational providers are licensed and inspected by the <strong>Knowledge and Human Development Authority (KHDA)</strong>; in Abu Dhabi, they operate under the regulatory framework of the <strong>Department of Education and Knowledge (ADEK)</strong>.
            </p>

            <p>
              <strong>Online tutoring platforms</strong> operate across both jurisdictions. Reputable educational services maintain registered business credentials in the UAE while verifying that their faculty hold relevant degree qualifications, pedagogical experience, and official teaching permits.
            </p>

            <div className="my-5 rounded-2xl border border-blue-200/80 bg-blue-50/60 p-4 sm:p-5 text-[13.5px] sm:text-sm text-[#0a1f3d] leading-relaxed">
              <p className="mb-0">
                Asking <em>"Do you hold an active MOHRE private teacher permit, or is your center approved by KHDA / ADEK?"</em> is a standard, responsible enquiry. Professional educators and established academic organisations provide their verification credentials willingly and transparently.
              </p>
            </div>
          </div>

          {/* Section 03 */}
          <SectionHeading num="03" id="evidence-impact-one-to-one-tutoring">
            What the Evidence Says: The Measured Impact of 1-to-1 Tutoring
          </SectionHeading>

          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              Educational economists and cognitive scientists have studied private tutoring extensively over the past four decades. Across thousands of clinical trials and school interventions, one conclusion stands out consistently: <strong>high-dosage, diagnostic one-to-one tutoring is among the most effective instructional interventions documented in modern educational research</strong>.
            </p>

            <p>
              To understand why personalised instruction produces such profound learning acceleration, consider the four foundational pillars of global empirical research:
            </p>

            {/* Academic Evidence Highlights */}
            <div className="space-y-3.5 my-5">
              <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/15 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#0f4a9b] text-white text-[10px] font-black uppercase tracking-wider">
                    EEF Toolkit (+5 Months Progress)
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">Education Endowment Foundation (2023)</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-0">
                  Comprehensive meta-analyses conducted by the <strong>Education Endowment Foundation (EEF)</strong> demonstrate that targeted one-to-one tuition delivers an average of <strong>+5 additional months of academic progress</strong> within a single academic year compared to standard classroom pacing alone. The effect is particularly pronounced when sessions are short (30 to 60 minutes), structured around specific diagnostic gaps, and linked directly to curriculum objectives.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/15 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#0f4a9b] text-white text-[10px] font-black uppercase tracking-wider">
                    NBER Meta-Analysis (0.37 SD Effect Size)
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">Nickow, Oreopoulos, &amp; Quan (2020)</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-0">
                  In a landmark systematic review of 96 randomised controlled trials published by the <strong>National Bureau of Economic Research (NBER Working Paper 27476)</strong>, researchers found that tutoring yielded a pooled effect size of <strong>0.37 standard deviations</strong>. This places one-to-one tutoring in the 99th percentile of all studied primary and secondary educational interventions.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#C7A24A]/30 bg-[#fdf9ee] shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#A8892A] text-white text-[10px] font-black uppercase tracking-wider">
                    Bloom's 2 Sigma Landmark
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">Benjamin Bloom (Educational Researcher, 1984)</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-0">
                  Educational psychologist Benjamin Bloom demonstrated that an average student tutored one-on-one using mastery learning techniques performed <strong>two standard deviations (2 sigma) above students in conventional classrooms</strong>. In practical terms, 98% of tutored students outperformed the classroom average because immediate formative feedback prevents small misconceptions from compounding into entrenched knowledge deficits.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#0f4a9b]/15 shadow-2xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#0f4a9b] text-white text-[10px] font-black uppercase tracking-wider">
                    OECD PISA UAE Findings
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">OECD PISA 2022 Country Report (2023)</span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed mb-0">
                  Data from the <strong>OECD Programme for International Student Assessment (PISA)</strong> indicates that UAE students facing complex, multi-tiered syllabi benefit dramatically from diagnostic inquiry-based support. Students with access to structured individual feedback show higher problem-solving resilience and significantly stronger command of mathematical and scientific reasoning under timed exam conditions.
                </p>
              </div>
            </div>

            {/* Academic Research Comparison Table */}
            <div className="my-6 rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
              <div className="px-4 py-2.5 bg-[#0f4a9b] text-white text-xs font-bold uppercase tracking-wider">
                Academic Evidence on 1-to-1 Tutoring Interventions
              </div>
              <div className="divide-y divide-slate-200 text-xs">
                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 bg-white">
                  <div>
                    <span className="font-bold text-[#0a1f3d] block">Meta-Analytic Effect Size (NBER, 2020)</span>
                    <span className="text-slate-500 text-[11px]">Systematic review across 96 randomised controlled trials</span>
                  </div>
                  <span className="font-extrabold text-[#0f4a9b] text-xs sm:text-sm bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/50 shrink-0">
                    +0.37 SD Achievement Gain
                  </span>
                </div>
                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 bg-[#f8fafd]">
                  <div>
                    <span className="font-bold text-[#0a1f3d] block">Attainment Acceleration (EEF Toolkit, 2023)</span>
                    <span className="text-slate-500 text-[11px]">Targeted curriculum-aligned diagnostic interventions</span>
                  </div>
                  <span className="font-extrabold text-[#0f4a9b] text-xs sm:text-sm bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200/50 shrink-0">
                    +5 Months Additional Progress
                  </span>
                </div>
                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 bg-white">
                  <div>
                    <span className="font-bold text-[#0a1f3d] block">Mastery Learning Distribution (Bloom, 1984)</span>
                    <span className="text-slate-500 text-[11px]">One-on-one mastery learning vs. 30-student conventional classroom</span>
                  </div>
                  <span className="font-extrabold text-[#A8892A] text-xs sm:text-sm bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/50 shrink-0">
                    98th Percentile Shift (2 Sigma)
                  </span>
                </div>
                <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 bg-[#f8fafd]">
                  <div>
                    <span className="font-bold text-[#0a1f3d] block">Metacognitive Transfer (Cambridge &amp; OECD, 2024)</span>
                    <span className="text-slate-500 text-[11px]">Independent problem-solving and command-word accuracy</span>
                  </div>
                  <span className="font-extrabold text-emerald-700 text-xs sm:text-sm bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/50 shrink-0">
                    High Long-Term Retention
                  </span>
                </div>
              </div>
            </div>

            <p>
              The research reveals an important nuance for parents: <strong>tutoring is most effective when it is diagnostic and time-limited rather than passive homework monitoring</strong>. When a tutor actively diagnoses missing foundations, scaffolds multi-step problem solving, and teaches the student <em>how to learn independently</em>, the gains persist long after the tutoring sessions conclude.
            </p>

            {/* Visual Graphic: Parent Tutoring Agreement & Billing Breakdown */}
            <div className="my-6">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm aspect-[16/9] bg-slate-100">
                <img
                  src="/images/blogs/parent-reviewing-tutoring-invoice.jpg"
                  alt="A UAE parent reviewing a diagnostic tutoring plan and structured academic milestones."
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-[11px] text-gray-500 italic text-center">
                Diagnostic learning reviews and clear milestone tracking help families assess academic progress objectively.
              </p>
            </div>
          </div>

          {/* Section 04 */}
          <SectionHeading num="04" id="home-tutor-center-online-platform">
            Home Tutor, Tutoring Center, or Online Platform?
          </SectionHeading>

          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              There is no single right answer here, only a right answer for a specific child, subject, and stage of preparation.
            </p>

            <ul className="space-y-3 pl-2 my-4 text-sm sm:text-[15px]">
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 mt-2 w-2 h-2 rounded-full bg-[#0f4a9b]" />
                <div>
                  <strong>In-home tutoring</strong> offers full attention, a familiar environment, and flexible scheduling, but usually costs the most per hour and depends heavily on the individual tutor, since there is no institution standing behind the lesson plan.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 mt-2 w-2 h-2 rounded-full bg-[#0f4a9b]" />
                <div>
                  <strong>Tutoring centers</strong> bring structure: a curriculum, a track record, cover if a tutor is unavailable, and, where they hold KHDA or ADEK approval, a layer of institutional accountability. The trade-off is less flexibility and often a commute.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="shrink-0 mt-2 w-2 h-2 rounded-full bg-[#0f4a9b]" />
                <div>
                  <strong>Online platforms</strong> remove geography from the equation, which matters in a country as spread out as the UAE, and open access to specialists who may not live nearby. What they ask of the student in return is more self-discipline, since there is no adult physically present to keep a distracted child on task.
                </div>
              </li>
            </ul>

            <p>
              Many UAE families end up mixing formats: an online specialist for a niche subject like <a href="/economics" className="text-[#0f4a9b] font-semibold hover:underline">IB Higher Level Economics</a> or <a href="/physics" className="text-[#0f4a9b] font-semibold hover:underline">A-Level Physics</a>, and an in-person tutor for a younger child who needs hands-on engagement close by. Matching the format to the child, rather than picking one format for every subject, is usually the more effective approach. For additional strategies on preparing effectively, explore our advice on <a href="/blogs/gcse-revision-tips-uae-parents" className="text-[#0f4a9b] font-semibold hover:underline">GCSE and IGCSE revision tips for parents</a>.
            </p>
          </div>

          {/* Section 05 */}
          <SectionHeading num="05" id="five-questions-before-you-hire">
            Five Questions to Ask Before You Hire
          </SectionHeading>

          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              Treat the first conversation with any tutor or center as a short interview, because that is exactly what it is. For an expanded checklist, see our guide on <a href="/blogs/10-questions-hiring-private-tutor-abu-dhabi" className="text-[#0f4a9b] font-semibold hover:underline">10 honest questions before hiring a private tutor in Abu Dhabi</a>.
            </p>

            <div className="space-y-3 my-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-extrabold text-[#0a1f3d] text-sm sm:text-[15px]">
                  1. "Which exam board and paper do you specifically teach?"
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  A tutor who says "all boards" without naming the specific syllabus code (0580, 4BI1, IB Diploma SL/HL, CBSE Class 12, and so on) may be generalizing more than your child's exam needs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-extrabold text-[#0a1f3d] text-sm sm:text-[15px]">
                  2. "Can I see a sample session plan, or hear how you structure a lesson?"
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  A credible tutor can describe their structure, not just list what they will "cover."
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-extrabold text-[#0a1f3d] text-sm sm:text-[15px]">
                  3. "Are you MOHRE-permitted, or is your center KHDA- or ADEK-approved?"
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Section 02 covers why this legal authorization matters across the UAE.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-extrabold text-[#0a1f3d] text-sm sm:text-[15px]">
                  4. "What does progress look like in the first four to six weeks, and how will I know?"
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Vague reassurance is weaker than a concrete plan to re-check a specific topic or skill.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="font-extrabold text-[#0a1f3d] text-sm sm:text-[15px]">
                  5. "What are the cancellation, rescheduling, and payment terms, in writing?"
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Get this before the first paid session, not after a dispute.
                </p>
              </div>
            </div>
          </div>

          {/* Section 06 */}
          <SectionHeading num="06" id="getting-curriculum-exam-board-right">
            Getting the Curriculum and Exam Board Right
          </SectionHeading>

          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              A tutor's general subject knowledge is not the same as fluency in your child's specific exam board. Cambridge IGCSE Chemistry (0620), Pearson Edexcel International GCSE Biology (4BI1), the IB Diploma's internal assessment criteria, and the AP or SAT format each reward different things and penalize different mistakes. A tutor who is excellent under one system can still misjudge what another system's mark scheme is looking for. For instance, see our subject breakdown on <a href="/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions" className="text-[#0f4a9b] font-semibold hover:underline">why IGCSE Biology students lose marks on 6-mark questions</a>.
            </p>

            <p>
              Before the first session, share the exact syllabus code, the specific paper (not just "<a href="/maths" className="text-[#0f4a9b] font-semibold hover:underline">Maths</a>," but which tier and paper number), and, if you have one, a recent graded paper. This single step does more to match your child with the right tutor than any amount of general reputation checking. If your child is approaching exam season, remember that <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold hover:underline">past papers are the final step of exam preparation</a>, not the starting point.
            </p>

            {/* Visual Infographic: Curriculum & Exam Board Breakdown */}
            <div className="my-6">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm aspect-[16/9] bg-slate-100">
                <img
                  src="/images/blogs/curriculum_board_infographic.jpg"
                  alt="Infographic comparing British IGCSE and A-Level, IB Diploma, and American AP syllabus pathways and grading systems in the UAE."
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-[11px] text-gray-500 italic text-center">
                A tutor's general subject knowledge is not enough: their practice must align with your child's specific syllabus code (e.g. Cambridge 0620 or Edexcel 4MA1).
              </p>
            </div>
          </div>

          {/* Section 07 */}
          <SectionHeading num="07" id="red-flags-end-conversation">
            Red Flags That Should End the Conversation
          </SectionHeading>

          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              Some signals are worth treating as a hard stop rather than a discussion point:
            </p>

            <div className="space-y-2.5 my-3">
              {[
                { title: 'A guaranteed grade jump in an unrealistically short window', desc: 'Claims like "C to A in two weeks." Genuine improvement is a trajectory, not a stunt.' },
                { title: 'No written agreement on rate, cancellation policy, or session length', desc: 'Leaving the terms to memory and goodwill invites dispute.' },
                { title: 'Reluctance to answer the permit or approval question', desc: 'A vague redirect when asked directly about MOHRE or KHDA/ADEK authorization.' },
                { title: 'Pressure to commit to a large prepaid package', desc: 'Insisting on prepaid blocks before a single trial session has taken place.' },
                { title: 'A tutor who cannot name the specific exam board and paper', desc: 'Inability to name syllabus specifics after being told what it is.' },
              ].map((flag, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-red-50/70 border border-red-200/80">
                  <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <strong className="text-red-950 font-bold block">{flag.title}</strong>
                    <span className="text-red-800/90">{flag.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 08 */}
          <SectionHeading num="08" id="how-to-tell-if-working">
            How to Tell If the Tutoring Is Actually Working
          </SectionHeading>

          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              Progress should be visible in something more concrete than a general sense that "things feel better." Ask to see the corrections made after each practice question or past paper, not only the score. A student who can point to a specific topic they went back and rebuilt after a session is progressing; a student who can only report a mark is being tested, not taught.
            </p>
            <p>
              Most well-matched tutoring relationships show a measurable shift in a specific topic, skill, or paper within <strong>four to eight weeks</strong>. If nothing has moved by then, that is useful information too: it is a prompt to re-diagnose the gap, not necessarily to add more hours. When stress becomes a factor before assessments, our guide on <a href="/blogs/exam-panic-before-exams-uae" className="text-[#0f4a9b] font-semibold hover:underline">what parents miss about exam panic right before exams</a> provides practical ways to protect your child's working memory.
            </p>

            {/* Visual Graphic: Diagnostic Assessment Sheet */}
            <div className="my-6">
              <div className="rounded-2xl overflow-hidden border-2 border-slate-100 shadow-sm aspect-[16/9] bg-slate-100">
                <img
                  src="/images/blogs/diagnostic_assessment_sheet.jpg"
                  alt="Diagnostic assessment sheet used by educational counsellors to measure confidence and skill recovery over 4 to 6 weeks."
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 text-[11px] text-gray-500 italic text-center">
                Tangible evidence of progress: active correction notes and diagnostic mark scheme sheets show real learning.
              </p>
            </div>
          </div>

          {/* Section 09 */}
          <SectionHeading num="09" id="simple-way-approach-decision">
            A Simple Way to Approach the Decision
          </SectionHeading>

          <div className="text-slate-700 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-4">
            <p>
              You do not need to become an expert in Cambridge command words or IB assessment objectives to make a good decision here. Confirm the permit or approval question in Section 02, ask the five questions in Section 05, and match the format in Section 04 to your specific child rather than to what a friend's family chose. The parents who get the most out of tutoring are rarely the ones who spend the most. They are the ones who diagnosed the actual gap before they started paying to close it. Explore our broader <a href="/blogs/parent-guidance" className="text-[#0f4a9b] font-semibold hover:underline">parent guidance library</a> for ongoing academic insights.
            </p>
          </div>

          {/* Section 10: Interactive Flowchart & Checklist */}
          <SectionHeading num="10" id="decision-flowchart-checklist">
            Decision Flowchart &amp; Vetting Checklist
          </SectionHeading>
          <p className="text-sm sm:text-[15px] text-gray-600 mb-4">
            Download or view the free Parent Decision Flowchart &amp; Vetting Checklist, a one-page printable that walks through Sections 01, 04, and 05 of this guide, ready to bring to a trial session:
          </p>

          <InteractiveFlowchart />

          {/* Section 11: FAQs */}
          <div id="frequently-asked-questions" className="mt-12 pt-7 border-t border-slate-100 scroll-mt-24">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0f4a9b]/6 text-[#0f4a9b] text-xs font-bold rounded-full mb-2.5 border border-[#0f4a9b]/10">
                <BookOpen className="h-3.5 w-3.5" />
                <span className="text-[10px] uppercase tracking-wider font-extrabold">Common Questions</span>
              </div>
              <h2 className="text-lg lg:text-xl font-extrabold text-[#0a1f3d]">Frequently Asked Questions</h2>
            </div>
            <FAQAccordion />
          </div>

          {/* Section 12: Sources & Further Reading */}
          <div id="sources-and-reading" className="mt-10 scroll-mt-24">
            <h3 className="text-lg lg:text-xl font-extrabold text-[#0a1f3d] mb-4">
              Sources and Further Reading
            </h3>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 text-xs text-slate-600 space-y-3.5">
              <p className="font-bold text-[#0a1f3d]">
                This guide synthesises public regulatory frameworks and peer-reviewed educational research, checked at the time of publication:
              </p>
              <ul className="space-y-2.5 list-disc pl-4 text-slate-700 leading-relaxed">
                <li>
                  <a href="https://www.mohre.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold hover:underline">
                    Ministry of Human Resources and Emiratisation (MOHRE)
                  </a>: <em>Private Teacher Work Permit Regulatory Framework</em>, UAE Cabinet Resolution No. 1 of 2022 and joint Ministry of Education (MoE) licensing updates.
                </li>
                <li>
                  <a href="https://web.khda.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold hover:underline">
                    Knowledge and Human Development Authority (KHDA)
                  </a>: <em>Dubai Private Education Quality Assurance &amp; Institutional Permit Standards</em>, Government of Dubai.
                </li>
                <li>
                  <a href="https://www.adek.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold hover:underline">
                    Department of Education and Knowledge (ADEK)
                  </a>: <em>Abu Dhabi Private School Policy and Regulatory Framework &amp; Irtiqaa Inspection Standards</em>.
                </li>
                <li>
                  <a href="https://educationendowmentfoundation.org.uk/education-evidence/teaching-learning-toolkit/one-to-one-tuition" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold hover:underline">
                    Education Endowment Foundation (EEF)
                  </a>: <em>One-to-One Tuition Evidence Review &amp; Teaching and Learning Toolkit</em> (2023), finding an average acceleration of +5 months of additional academic progress.
                </li>
                <li>
                  <a href="https://www.nber.org/papers/w27476" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold hover:underline">
                    Nickow, A., Oreopoulos, P., &amp; Quan, V. (2020)
                  </a>: <em>The Impressive Effects of Tutoring on PreK-12 Learning: A Systematic Review and Meta-Analysis of the Experimental Evidence</em>, National Bureau of Economic Research (NBER Working Paper 27476).
                </li>
                <li>
                  <a href="https://doi.org/10.3102/0013189X013006004" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold hover:underline">
                    Bloom, B. S. (1984)
                  </a>: <em>The 2 Sigma Problem: The Search for Methods of Group Instruction as Effective as One-to-One Tutoring</em>, Educational Researcher, 13(6), 4-16.
                </li>
                <li>
                  <a href="https://www.oecd.org/pisa/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold hover:underline">
                    OECD (2023)
                  </a>: <em>PISA 2022 Results: The State of Learning and Equity in Education (United Arab Emirates Country Note)</em>, OECD Publishing, Paris.
                </li>
                <li>
                  <a href="https://www.cambridgeinternational.org/" target="_blank" rel="noopener noreferrer" className="text-[#0f4a9b] font-bold hover:underline">
                    Cambridge Assessment International Education (2024)
                  </a>: <em>Developing Active Learning and Metacognition in High-Stakes Assessments</em>, Cambridge University Press &amp; Assessment.
                </li>
                <li>
                  <a href="/tutors" className="text-[#0f4a9b] font-bold hover:underline">
                    Ustaad UAE Academic Research &amp; Mentorship Team
                  </a>: <a href="/tutors" className="text-[#0f4a9b] hover:underline">Curriculum-matched private tutoring in the UAE</a> and <a href="/exam-preparation" className="text-[#0f4a9b] hover:underline">examination board preparation</a>.
                </li>
              </ul>
              <p className="text-[11px] text-slate-500 italic pt-2.5 border-t border-slate-200">
                <strong>Editorial note:</strong> Regulatory and permit frameworks are updated periodically. Please verify current requirements directly with MOHRE, KHDA, or ADEK, or ask your provider for their official approval reference, prior to commencing an instructional engagement.
              </p>
            </div>
          </div>

          {/* Bottom Social Share */}
          <div className="mt-7 pt-5 border-t border-slate-100 flex flex-col items-center gap-3">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Found this helpful? Share it</p>
            <SocialShare url={shareUrl} title={BLOG.title} center />
          </div>

          {/* Related Articles */}
          <div className="mt-7 pt-6 border-t border-slate-200">
            <h3 className="text-sm font-extrabold text-[#0a1f3d] mb-4 uppercase tracking-wider">Related Articles for UAE Parents</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {RELATED.map((item, i) => (
                <a key={i} href={`/blogs/${item.slug}`} className="group p-4 bg-slate-50 hover:bg-[#0f4a9b]/[0.03] border border-slate-200 rounded-2xl transition">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0f4a9b]">{item.category}</span>
                  <p className="text-sm font-extrabold text-[#0a1f3d] mt-1 mb-1 group-hover:text-[#0f4a9b] transition">{item.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-0">{item.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Author & Reviewer */}
          <div className="mt-7 grid md:grid-cols-2 gap-3">
            <div className="relative rounded-2xl border border-[#0f4a9b]/10 bg-gradient-to-br from-white to-[#f4f7fd] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#0f4a9b] border border-[#0f4a9b]/15 bg-[#0f4a9b]/5">About the Author</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-28 mt-4">
                <a href={BLOG.authorUrl} className="text-[#0f4a9b] hover:underline">{BLOG.author}</a>
              </p>
              <p className="text-[10px] text-[#0f4a9b] font-semibold mb-2">{BLOG.authorRole}</p>
              <p className="text-xs text-gray-500 leading-relaxed">Nimra Shahzada holds a Bachelor's degree in Psychology and works as an Education Counsellor with children across different school settings and age groups. Her work focuses on student wellbeing, academic confidence, and emotional support during high-pressure learning periods. She helps families build calmer, more consistent routines before pressure starts affecting their child's performance and wellbeing.</p>
            </div>
            <div className="relative rounded-2xl border border-[#C7A24A]/15 bg-gradient-to-br from-white to-[#fdf9f0] p-4 overflow-hidden">
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest text-[#A8892A] border border-[#C7A24A]/20 bg-[#C7A24A]/6">Reviewed By</span>
              </div>
              <p className="font-extrabold text-[#0a1f3d] text-sm mb-1 pr-24 mt-4">
                <a href={BLOG.reviewerUrl} className="text-[#0f4a9b] hover:underline">{BLOG.reviewer}</a>
              </p>
              <p className="text-[10px] text-[#0f4a9b] font-semibold mb-2">{BLOG.reviewerTitle}</p>
              <p className="text-xs text-gray-500 leading-relaxed">Nida Iqbal holds an MPhil in Education Leadership and Management. She reviewed this article for educational accuracy and parent relevance, ensuring the guidance reflects sound practice for UAE families weighing up private tutoring.</p>
            </div>
          </div>

          {/* Editorial block */}
          <div className="mt-6 p-4 rounded-xl bg-[#f8fafd] border border-slate-100 text-xs text-gray-600 leading-relaxed text-center">
            <span className="font-extrabold text-[#0a1f3d]">Meet the Writers Behind Ustaad UAE: </span>
            Every article on Ustaad is written or reviewed by a teacher, academic mentor or subject specialist working with students in the UAE. Visit our <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">editorial page</a> to see the profiles of the people behind each piece.
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {BLOG.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-bold text-[#0a1f3d]">{tag}</span>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-8 mb-12 rounded-2xl p-6 lg:p-8 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0f3a7a 60%, #1e5ba8 100%)' }}
          >
            <p className="text-white/75 mb-5 max-w-lg mx-auto text-sm">
              Ustaad supports students and families across the UAE through structured academic mentorship, exam preparation guidance, and personalised learning support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <a
                  href="/contact#form"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-bold text-white hover:brightness-110 transition text-sm shadow-md"
                  style={{ background: 'linear-gradient(90deg, #C7A24A 0%, #A8892A 50%, #7A5E10 100%)' }}
                >
                  Book Your Free Trial
                </a>
                <p className="text-xs text-white/60 font-medium">No commitment. Cancel anytime.</p>
              </div>
              <a
                href="https://wa.me/971561249005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] border border-transparent rounded-full font-bold text-white transition text-sm shadow-md"
              >
                <img src="/whatsapp-book-private-tutor-ustaad-uae.png" alt="WhatsApp" className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
