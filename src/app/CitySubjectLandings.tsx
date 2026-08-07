import { Layout, GoldButton, GradientHeadingText, FinalCTA, StatsBar } from './shared';
import SEOHead from './shared/SEOHead';
import RelatedContent from './shared/RelatedContent';
import { cityLocalBusinessSchema, breadcrumbSchema, serviceSchema, faqSchema, courseSchema } from './shared/schemas';

type LandingConfig = {
  path: string;
  subject: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  heroAlt: string;
  heroImage: string;
  placename: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
  subjects: { label: string; href: string; note?: string }[];
  curricula: { label: string; href: string; note?: string }[];
};

const CONFIGS: Record<string, LandingConfig> = {
  biology: {
    path: '/biology-tutor-abu-dhabi',
    subject: 'Biology',
    title: 'Biology Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad',
    description: 'One-to-one Biology tutors in Abu Dhabi for IGCSE, A-Level, IB, and AP. Cell biology, genetics, ecology, and exam technique. Book a free trial.',
    h1: 'Biology Tutor Abu Dhabi',
    intro: 'Private Biology tutors in Abu Dhabi who rebuild topic gaps, drill past-paper command words, and prepare students for IGCSE, A-Level, IB, and AP assessments.',
    heroAlt: 'Biology tutor working one-to-one with an Abu Dhabi student on IGCSE biology diagrams',
    heroImage: '/UpdatedImages/private-subject-tutoring-igcse-ib-a-level-uae.webp',
    placename: 'Abu Dhabi, UAE',
    bullets: [
      'Matched to Cambridge, Edexcel, AQA, IB, or AP Biology',
      'Diagram practice, practical write-ups, and timed paper drills',
      'Home and online sessions across Abu Dhabi Island, Khalifa City, Yas, and Al Raha',
    ],
    faqs: [
      { q: 'Do you cover IGCSE and A-Level Biology in Abu Dhabi?', a: 'Yes. Tutors specialise in Cambridge and Edexcel IGCSE Biology plus A-Level pathways, including practical and paper technique.' },
      { q: 'Can tutors help with IB Biology IA?', a: 'Yes. DP SL and HL students receive topic support and Internal Assessment structure guidance alongside exam practice.' },
      { q: 'Is online Biology tutoring available?', a: 'Yes. Families can choose home visits across Abu Dhabi or online sessions on UAE evenings.' },
    ],
    subjects: [
      { label: 'Maths Tutor Abu Dhabi', href: '/maths-tutor-abu-dhabi' },
      { label: 'Physics Tutor Abu Dhabi', href: '/physics-tutor-abu-dhabi' },
      { label: 'Chemistry Tutor Abu Dhabi', href: '/chemistry-tutor-abu-dhabi' },
      { label: 'Biology subject hub', href: '/biology' },
      { label: 'Sciences overview', href: '/sciences' },
    ],
    curricula: [
      { label: 'IGCSE', href: '/igcse' },
      { label: 'A-Level', href: '/a-level' },
      { label: 'IB Curriculum', href: '/ib-curriculum' },
      { label: 'British Curriculum', href: '/british-curriculum' },
      { label: 'Exam Preparation', href: '/exam-preparation' },
    ],
  },
  igcse: {
    path: '/igcse-tutor-abu-dhabi',
    subject: 'IGCSE',
    title: 'IGCSE Tutor Abu Dhabi | Private IGCSE Tutoring — Ustaad',
    description: 'Private IGCSE tutors in Abu Dhabi for Maths, Physics, Chemistry, Biology, English and more. Cambridge and Edexcel aligned. Book a free trial.',
    h1: 'IGCSE Tutor Abu Dhabi',
    intro: 'Curriculum-specialist IGCSE tutors in Abu Dhabi for Cambridge and Edexcel boards — subject matching, past-paper drills, and steady progress before mocks.',
    heroAlt: 'IGCSE tutor guiding an Abu Dhabi student through Cambridge past paper practice',
    heroImage: '/UpdatedImages/curriculum-specialist-tutor-igcse-chemistry-past-paper-sharjah.webp',
    placename: 'Abu Dhabi, UAE',
    bullets: [
      'Board-matched tutors for Cambridge 0580/0620/0625 and Edexcel equivalents',
      'Diagnostic first session to map topic gaps before Paper 4 intensity',
      'Support across core IGCSE subjects with coordinated multi-subject plans',
    ],
    faqs: [
      { q: 'Which IGCSE boards do you support in Abu Dhabi?', a: 'Cambridge and Edexcel across Maths, Sciences, English, and Economics, with tutors matched to the exact syllabus code.' },
      { q: 'Can one tutor cover multiple IGCSE subjects?', a: 'Usually we match per subject for depth. Coordinated plans are available when a student needs Maths plus a science together.' },
      { q: 'How soon can tutoring start before mocks?', a: 'Short-lead IGCSE support is common. We prioritise high-weight topics and exam technique first.' },
    ],
    subjects: [
      { label: 'Maths Tutor Abu Dhabi', href: '/maths-tutor-abu-dhabi' },
      { label: 'Physics Tutor Abu Dhabi', href: '/physics-tutor-abu-dhabi' },
      { label: 'Chemistry Tutor Abu Dhabi', href: '/chemistry-tutor-abu-dhabi' },
      { label: 'Biology Tutor Abu Dhabi', href: '/biology-tutor-abu-dhabi' },
      { label: 'IGCSE curriculum page', href: '/igcse' },
    ],
    curricula: [
      { label: 'British Curriculum', href: '/british-curriculum' },
      { label: 'GCSE', href: '/gcse' },
      { label: 'A-Level', href: '/a-level' },
      { label: 'Exam Preparation', href: '/exam-preparation' },
      { label: 'How Ustaad works', href: '/how-it-works' },
    ],
  },
};

function CityLanding({ config }: { config: LandingConfig }) {
  return (
    <Layout>
      <SEOHead
        title={config.title}
        description={config.description}
        canonical={config.path}
        ogImage={config.heroImage}
        placename={config.placename}
        schema={[
          cityLocalBusinessSchema({
            city: 'Abu Dhabi',
            url: config.path,
            name: `Ustaad — ${config.h1}`,
            description: config.description,
          }),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Curriculum', url: '/curriculum' },
            { name: 'Abu Dhabi', url: config.path },
            { name: config.subject, url: config.path },
          ]),
          serviceSchema(config.h1, config.description, config.path),
          courseSchema({
            courseName: `${config.subject} Private Tutoring Abu Dhabi`,
            description: config.description,
            url: config.path,
            city: 'Abu Dhabi',
          }),
          faqSchema(config.faqs),
        ]}
      />

      <section className="pt-14 pb-12 lg:pt-20 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Abu Dhabi · 1-to-1</p>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-4 leading-tight">
              <GradientHeadingText text={config.h1} />
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{config.intro}</p>
            <ul className="space-y-2.5 mb-8">
              {config.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-[#C7A24A] font-bold">✓</span> {b}
                </li>
              ))}
            </ul>
            <GoldButton href="/contact#form" className="px-8 py-3.5 text-sm">Book Your Free Trial</GoldButton>
          </div>
          <img
            src={config.heroImage}
            alt={config.heroAlt}
            width={640}
            height={480}
            className="w-full rounded-2xl object-cover shadow-lg"
            fetchPriority="high"
          />
        </div>
      </section>

      <StatsBar />

      {/* Rich Educational Breakdown & Curriculum Guidance */}
      <section className="py-14 bg-[#f8fafe] border-y border-[#0f4a9b]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">Abu Dhabi Biology Framework</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d] mt-3 mb-3">Mastering IGCSE & A-Level Biology in Abu Dhabi</h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Biology requires more than memorising definitions. Students must apply complex physiological mechanisms, interpret data graphs, and write precise mark-scheme keywords under exam pressure.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-bold text-[#0a1f3d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                Cambridge IGCSE Biology (0610 / 0970)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">Cambridge assessment places heavy emphasis on precise terminology in Paper 2 (Multiple Choice), Paper 4 (Extended Theory), and Paper 6 (Alternative to Practical). Tutors focus on key topics including enzymes, photosynthesis, human transport, respiration, and biotechnology.</p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2"><span className="text-[#C7A24A] font-bold">✓</span> Paper 4 Extended structured questions & command word practice</li>
                <li className="flex items-start gap-2"><span className="text-[#C7A24A] font-bold">✓</span> Paper 6 experimental design, variable controls, and error analysis</li>
                <li className="flex items-start gap-2"><span className="text-[#C7A24A] font-bold">✓</span> Osmosis, diffusion, and active transport numerical calculations</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-bold text-[#0a1f3d] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0f4a9b]" />
                Edexcel International GCSE Biology (4BI1)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">Edexcel exams evaluate core principles across Paper 1B and Paper 2B. Questions test data interpretation, food tests, inheritance genetics, and ecosystem interactions. Lessons focus on step-by-step mark scheme reward criteria.</p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2"><span className="text-[#C7A24A] font-bold">✓</span> Monohybrid inheritance, Punnett squares, and pedigree charts</li>
                <li className="flex items-start gap-2"><span className="text-[#C7A24A] font-bold">✓</span> Selective breeding, genetic engineering, and tissue culture</li>
                <li className="flex items-start gap-2"><span className="text-[#C7A24A] font-bold">✓</span> Practical skills: Benedict’s test, iodine test, biuret test routines</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm mb-12">
            <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-4">Why UAE Students Struggle with Biology (And How We Fix It)</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-xs text-gray-600 mb-6">
              <div>
                <h4 className="font-bold text-[#0a1f3d] text-sm mb-2">1. Vague Explanations</h4>
                <p className="leading-relaxed">Students often understand the concept but miss mark scheme keywords (e.g. writing "the enzyme breaks down" instead of "denatures the active site"). Tutors train exact keywords.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0a1f3d] text-sm mb-2">2. Practical Paper Fear</h4>
                <p className="leading-relaxed">Paper 6/Alternative to Practical requires identifying independent variables, drawing accurate magnification scales, and plotting graph lines. We practice past practical papers routinely.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0a1f3d] text-sm mb-2">3. Memory Overload</h4>
                <p className="leading-relaxed">Rote memorisation fails as exams approach. We use visual diagrams, active recall flashcards, and spaced repetition so knowledge remains intact for final exams.</p>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs text-gray-600 leading-relaxed">
              <p className="font-bold text-[#0a1f3d] mb-1">Targeted Biology Exam Strategy:</p>
              <p>In addition to topic review, lessons include timed past-paper question drills. Tutors teach students how to parse 6-mark extended questions, identify exact mark allocation points, and draw clear biological diagrams that earn full credit in Cambridge and Edexcel examinations.</p>
            </div>
          </div>

          <div className="bg-[#0a1f3d] text-white rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl font-extrabold mb-3 text-white">Supporting Students Across Top Abu Dhabi Schools</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6">Our 1-to-1 Biology specialists work with students from The British School Al Khubairat (BSAK), Brighton College Abu Dhabi, Cranleigh Abu Dhabi, The American Community School (ACS), and Nord Anglia International School. We align directly with your school's mock schedules and assessment timelines.</p>
            <GoldButton href="/contact#form" className="px-8 py-3 text-xs sm:text-sm">Speak to an Abu Dhabi Advisor</GoldButton>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0a1f3d] mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {config.faqs.map((f) => (
              <div key={f.q} className="border border-slate-100 rounded-xl p-5">
                <h3 className="font-bold text-[#0a1f3d] mb-2">{f.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Curriculum', href: '/curriculum' },
          { name: 'Abu Dhabi', href: config.path },
          { name: config.subject, href: config.path },
        ]}
        subjects={config.subjects}
        curricula={config.curricula}
      />
      <FinalCTA />
    </Layout>
  );
}

export function BiologyLanding() {
  return <CityLanding config={CONFIGS.biology} />;
}

export function IGCSETutorLanding() {
  return <CityLanding config={CONFIGS.igcse} />;
}

export default BiologyLanding;
