import { useState } from 'react';
import SubjectPageTemplate from './SubjectPageTemplate';
import type { SubjectPageProps } from './SubjectPageTemplate';
import { GradientHeadingText, ReadMoreParagraph } from './shared';
import { localBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema } from './shared/schemas';
import {
  FlaskConical, Globe, Dna, Atom, Microscope,
  BarChart2, AlignLeft, Search,
  HelpCircle, ChevronDown, MessageCircle, MapPin,
} from 'lucide-react';

const lnk = (href: string, label: string) => (
  <a href={href} className="text-[#0f4a9b] hover:underline font-medium">{label}</a>
);

/* ─── §3 What Middle School Science Covers — prose card ─── */
const customTopicsSection = (
  <section id="overview" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="What Middle School Science Covers" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          Integrated Science across Grades 6 to 8, taught as one subject before splitting at High School.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <ReadMoreParagraph
          className="text-gray-600 text-base leading-relaxed"
          preview={<>In the {lnk('/american-curriculum', 'American Curriculum')}, {lnk('/middle-school', 'Middle School')} Science is taught as one combined subject across Grades 6 to 8. Students rotate through Earth Science, Life Science, and Physical Science within the same class, with the same teacher and a single grade for Science on the report card.</>}
          more={<>Each branch builds the lab habits, observation skills, and written explanation that {lnk('/high-school', 'High School')} Biology, Chemistry, and Physics all expect from Grade 9. Ustaad tutors keep the Science grade steady as the three areas rotate, so no single one falls behind the rest. Sessions follow the school's unit order, so the lesson reinforces exactly what is being taught that week.</>}
        />
      </div>
    </div>
  </section>
);

/* ─── §4 The Three Science Branches — 3-col grid ─── */
const scienceBranches = [
  {
    title: "Earth Science",
    desc: "Weather, climate, geology, and the planet's natural systems explored.",
    icon: <Globe className="h-7 w-7 text-[#0f4a9b]" />,
    wm: <Globe className="h-20 w-20 text-[#0f4a9b]/8" />,
    links: [{ label: "Biology", href: "/biology" }],
  },
  {
    title: "Life Science",
    desc: "Cells, organisms, ecosystems, and the basics of human biology.",
    icon: <Dna className="h-7 w-7 text-[#0f4a9b]" />,
    wm: <Dna className="h-20 w-20 text-[#0f4a9b]/8" />,
    links: [{ label: "Biology", href: "/biology" }],
  },
  {
    title: "Physical Science",
    desc: "Forces, motion, energy, and the basic building blocks of physical matter.",
    icon: <Atom className="h-7 w-7 text-[#0f4a9b]" />,
    wm: <Atom className="h-20 w-20 text-[#0f4a9b]/8" />,
    links: [{ label: "Physics", href: "/physics" }, { label: "Chemistry", href: "/chemistry" }],
  },
];

const customStrugglesSection = (
  <section className="py-20 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="The Three Science Branches" />
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
          Three branches of integrated Science taught within one combined class through Grades 6, 7, and 8.
        </p>
      </div>
      <div className="max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 [grid-auto-rows:1fr] [&>*:nth-child(3n)]:border-r-0 [&>*:nth-last-child(-n+3)]:border-b-0">
          {scienceBranches.map((branch, i) => (
            <div key={i} className="group relative flex flex-col gap-3 p-6 bg-white hover:bg-[#f7f9ff] transition-colors duration-200 overflow-hidden h-full border-b border-r border-gray-200">
              <div className="flex items-center gap-2 mb-1">{branch.icon}</div>
              <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug group-hover:text-[#0f4a9b] transition-colors duration-200">{branch.title}</h3>
              <p className="text-gray-500 text-[13px] leading-relaxed flex-1">{branch.desc}</p>
              <div className="flex gap-2 flex-wrap mt-1">
                {branch.links.map((link, j) => (
                  <a key={j} href={link.href} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0f4a9b] bg-[#f0f5ff] hover:bg-[#e0ecff] px-2.5 py-1 rounded-full transition-colors duration-200">
                    → <span>{link.label}</span>
                  </a>
                ))}
              </div>
              <div className="absolute bottom-4 right-4 pointer-events-none select-none">{branch.wm}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── §5 Skills Middle School Science Builds — 2×2 grid + callout ─── */
const scienceSkills = [
  { title: "Lab Method",           icon: <Microscope  className="h-6 w-6" strokeWidth={2} />, desc: "Plan, observe, record, and explain results with structured care." },
  { title: "Data Reading",         icon: <BarChart2   className="h-6 w-6" strokeWidth={2} />, desc: "Read graphs, tables, and measurements with growing accuracy and confidence." },
  { title: "Written Explanation",  icon: <AlignLeft   className="h-6 w-6" strokeWidth={2} />, desc: "Write up findings with method, results, and conclusion sections." },
  { title: "Question Framing",     icon: <Search      className="h-6 w-6" strokeWidth={2} />, desc: "Form testable questions before designing each experiment or investigation." },
];

const customMethodsSection = (
  <>
    <div className="h-1 bg-gradient-to-r from-transparent via-[#0f4a9b] to-transparent" />
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
            <GradientHeadingText text="Skills Middle School Science Builds" />
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Skills built across all three Middle School Science areas that High School courses then expect.
          </p>
        </div>
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {scienceSkills.slice(0, 2).map((s, i) => (
              <div key={i} className="bg-white p-6 md:p-8 flex flex-col hover:bg-[#f7f9ff] transition-colors duration-200">
                <div className="w-12 h-12 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-3 text-[#0f4a9b]">{s.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t border-gray-200">
            {scienceSkills.slice(2).map((s, i) => (
              <div key={i + 2} className="bg-white p-6 md:p-8 flex flex-col hover:bg-[#f7f9ff] transition-colors duration-200">
                <div className="w-12 h-12 bg-[#f0f5ff] rounded-2xl flex items-center justify-center mb-3 text-[#0f4a9b]">{s.icon}</div>
                <h3 className="text-lg font-extrabold text-[#0a1f3d] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-[#f0f5ff] border border-[#0f4a9b]/15 rounded-2xl p-6 flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(15,74,155,0.25)]">
            <FlaskConical className="h-5 w-5 text-white" />
          </div>
          <p className="text-[#0a1f3d] text-sm leading-relaxed font-medium">
            Ustaad tutors build each of these skills step by step, until they feel automatic by the start of Grade 9.
          </p>
        </div>
      </div>
    </section>
  </>
);

/* ─── §6 Preparing For Grade 9 Science — prose card ─── */
const customCurriculaSection = (
  <section id="grade9" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-4">
          <GradientHeadingText text="Preparing For Grade 9 Science" />
        </h2>
 <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
          How integrated Science splits into {lnk('/physics', 'Physics')}, {lnk('/chemistry', 'Chemistry')}, and {lnk('/biology', 'Biology')} at Grade 9 in the American Curriculum.
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <ReadMoreParagraph
          className="text-gray-600 text-base leading-relaxed"
          preview={<>At Grade 9, integrated Science splits into separate {lnk('/biology', 'Biology')}, {lnk('/chemistry', 'Chemistry')}, and {lnk('/physics', 'Physics')} courses, each with its own teacher, grade, and AP track. Students who built strong observation, lab method, and written explanation skills in {lnk('/middle-school', 'Middle School')} adapt faster to the split, because the academic register is already familiar.</>}
          more="Ustaad tutors prepare Grade 8 students for that split, holding habits steady through the change. Sessions match the school's syllabus and the order in which the three sciences are introduced in Grade 9. We focus on active enquiry, virtual lab experiments, measurement error analysis, and mathematical formula applications so middle school students transition smoothly into high school science streams and AP honors tracks. Dedicated 1-to-1 mentorship ensures concepts are fully mastered without classroom stress."
        />
      </div>
    </div>
  </section>
);

/* ─── §5 Marking Habits placeholder — not needed, skipped via customPracticesSection ─── */
const customPracticesSection = <></>;

/* ─── §7 UAE dark section ─── */
const uaeLocations = [
  { name: "Abu Dhabi",      desc: "Capital • American Curriculum",   icon: <MapPin className="h-4 w-4" /> },
  { name: "Dubai",          desc: "Largest city • American schools", icon: <MapPin className="h-4 w-4" /> },
  { name: "Sharjah",        desc: "American Curriculum schools",     icon: <MapPin className="h-4 w-4" /> },
  { name: "Ajman",          desc: "American Curriculum",             icon: <MapPin className="h-4 w-4" /> },
  { name: "Al Ain",         desc: "American Curriculum",             icon: <MapPin className="h-4 w-4" /> },
  { name: "Ras Al Khaimah", desc: "Northern Emirates",               icon: <MapPin className="h-4 w-4" /> },
  { name: "Fujairah",       desc: "East coast",                      icon: <MapPin className="h-4 w-4" /> },
  { name: "Umm Al Quwain",  desc: "American Curriculum",             icon: <MapPin className="h-4 w-4" /> },
];

const customResultsSection = (
  <section id="uae" className="py-16 lg:py-20 bg-[#0a1628]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-6">
        <MapPin className="h-3.5 w-3.5 text-[#C7A24A]" />
        <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Across the UAE</span>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Middle School Science Tutoring <span className="text-[#C7A24A]">Across the UAE</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {uaeLocations.map((loc, i) => (
          <div key={i} className="relative bg-[#162238] border border-white/10 rounded-xl p-5 hover:border-[#C7A24A]/30 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="w-8 h-8 bg-[#0f4a9b]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#0f4a9b]">{loc.icon}</span>
              </div>
              <div className="w-2 h-2 bg-[#C7A24A] rounded-full" />
            </div>
            <h3 className="text-white font-bold text-base mb-1">{loc.name}</h3>
            <p className="text-white/50 text-xs">{loc.desc}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#162238] border border-white/10 rounded-xl p-6 flex items-center gap-4">
        <div className="w-10 h-10 bg-[#0f4a9b]/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <MapPin className="h-5 w-5 text-[#0f4a9b]" />
        </div>
        <ReadMoreParagraph
          className="text-white/70 text-sm leading-relaxed"
          dark
          preview={<>Middle School students across all seven emirates plus Umm Al Quwain study integrated Science at American Curriculum schools.</>}
          more="Each district uses a slightly different unit order, but the three areas are always present. Ustaad tutors meet students online from every emirate, matched to the school's syllabus and the area currently being taught. Sessions slot into the school day rhythm rather than crowding it."
        />
      </div>
    </div>
  </section>
);

/* ─── §8 FAQs ─── */
const scienceFAQs = [
  { q: "What does Middle School Science cover?",                  a: "Integrated Science across Grades 6 to 8, combining Earth Science, Life Science, and Physical Science under one teacher and one report-card grade." },
  { q: "How is Middle School Science assessed?",                  a: "Through weekly quizzes, end-of-unit tests, lab write-ups, and projects across each area. All scores combine into a single Science grade per quarter." },
  { q: "When does Science split into separate subjects?",         a: "At Grade 9. Most American Curriculum schools begin separating Biology, Chemistry, and Physics into their own courses, each with its own teacher, grade, and credit." },
  { q: "Does Middle School Science affect High School subject choices?", a: "It builds the lab method and written explanation skills High School Science depends on. Strong Middle School Science usually means smoother adaptation across all three Grade 9 sciences." },
  { q: "How can Ustaad support a Middle School Science student?", a: "Sessions follow the school's active area, hold the Science grade steady, and build lab method and written explanation skills before the Grade 9 split into separate sciences." },
  { q: "Which Middle School Science area is hardest for most students?", a: "This varies by student, but Physical Science (forces, energy, motion) is where many first meet equations applied to real situations, and most often the area where extra tutoring helps." },
];

function ScienceFAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <section id="faqs" className="py-8 lg:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0f4a9b]/10 to-[#0a3a79]/10 text-[#0f4a9b] text-sm font-bold rounded-full mb-6 border border-[#0f4a9b]/20 shadow-[0_0_15px_rgba(15,74,155,0.15)]">
              <HelpCircle className="h-3.5 w-3.5" />
              <span className="text-xs uppercase tracking-wider">Parents Ask</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] leading-[1.15] mb-2">
              Science{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#1e5ba8]">Parent Questions</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">Everything you need to know before starting.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
            {scienceFAQs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <button onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex-shrink-0 flex items-center justify-center font-extrabold text-base rounded-full"
                      style={{ width:40, height:40, minWidth:40, minHeight:40, background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition:'background 300ms ease, color 300ms ease', cursor:'pointer', border:'none', boxShadow:'inset 0 0 0 2px #fff' }}>
                      <span className="flex items-center justify-center w-full h-full">?</span>
                    </button>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex-1 flex items-center gap-3 text-left rounded-full border"
                      style={{ minHeight:'48px', padding:'8px 14px', cursor:'pointer', background:'transparent', borderColor: isOpen ? 'rgba(15,74,155,0.25)' : 'rgba(15,74,155,0.1)' }}>
                      <span className="flex-1 font-semibold text-[#0a1f3d] text-[14px] leading-snug">{faq.q}</span>
                      <span className="flex-shrink-0 flex items-center justify-center"
                        style={{ width:32, height:32, minWidth:32, minHeight:32, borderRadius:'50%', background: isOpen ? '#0f4a9b' : 'rgba(15,74,155,0.08)', color: isOpen ? '#fff' : '#0f4a9b', transition:'background 300ms ease, color 300ms ease, transform 300ms cubic-bezier(0.22,1,0.36,1)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <ChevronDown className="h-3.5 w-3.5" />
                      </span>
                    </button>
                  </div>
                  {isOpen && (
                    <div className="ml-[56px] flex items-start gap-3 rounded-2xl border p-4"
                      style={{ background:'#f8fafc', borderColor:'rgba(15,74,155,0.15)', boxShadow:'0 4px 16px rgba(15,74,155,0.06)' }}>
                      <p className="flex-1 text-gray-600 text-[13px] leading-relaxed">{faq.a}</p>
                      <span className="flex-shrink-0 flex items-center justify-center rounded-full"
                        style={{ width:32, height:32, minWidth:32, minHeight:32, background:'#0f4a9b', color:'#fff' }}>
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
  );
}

/* ─── Page data ─── */
const data: SubjectPageProps = {
  badgeIcon:        <FlaskConical className="h-4 w-4" />,
  heroBadgeLabel:   "Middle School Science",
  heroTitle:        "Middle School Science. From Observation to Conclusion.",
  heroSubtitle:     "Online tutoring for Grades 6 to 8 American Curriculum Science",
  heroDesc:         "Covering Earth Science, Life Science, and Physical Science.",
  heroCTAText:      "Book Your First Science Lesson",
  heroCTAMicrocopy: "Middle School Science, your grade.",
  heroBadges:       ["Grades 6–8", "Earth Science", "Life Science", "Physical Science"],

  topicsTitle: "", topicsDesc: "", topics: [],
  customTopicsSection,       /* §3 What Middle School Science Covers */

  struggles: [],
  customStrugglesSection,    /* §4 Three Science Branches */

  methods: [], softCtaHeading: "",
  customMethodsSection,      /* §5 Skills Middle School Science Builds */

  curricula: [],
  customCurriculaSection,    /* §6 Preparing For Grade 9 Science */

  practices: [],
  customPracticesSection,    /* hidden */

  results: [],
  customResultsSection,      /* §7 UAE dark section */

  faqs: [],
  customFAQsSection: <ScienceFAQs />, /* §8 Parent Questions */

  finalCtaTitle:    "Book A Science Tutor",
  finalCtaSubtitle: "Middle School Science, your grade.",
  finalCtaButton:   "Book Your First Science Lesson",
  finalCtaSubtext:  "Free trial. No commitment.",

  floatingIcon: <FlaskConical className="h-4 w-4" />,
  seo: {
    title: "Middle School Science Tutors UAE | Grades 6-8 | Ustaad",
    description: "Expert Middle School Science tutoring in Dubai & Abu Dhabi. Grades 6–8 American Curriculum covering Earth, Life & Physical Science.",
    canonical: "/sciences",
    schema: [
      localBusinessSchema,
      serviceSchema("Private Middle School Science Tutoring UAE", "1-to-1 Science tutoring for Grades 6–8 American Curriculum students across UAE.", "/sciences"),
      breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Middle School", url: "/middle-school" }, { name: "Science", url: "/sciences" }]),
      faqSchema(scienceFAQs),
    ],
  },
};

export default function SciencesPage() {
  return <SubjectPageTemplate {...data} />;
}
