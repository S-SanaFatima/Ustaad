import { BookOpen, Brain, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';
import { Layout, FinalCTA, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

export interface BlogPost {
  slug: string;
  image: string;
  alt: string;
  category: 'Academic' | 'Psychology of Learning' | 'Parent Guidance';
  title: string;
  description: string;
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export const CATEGORY_META = {
  'Academic': {
    title: 'Academic & Exam Skills',
    slug: '/blogs/academic-exam-skills',
    accentGradient: 'from-[#0f4a9b] to-cyan-500',
    badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200',
    dotColor: 'bg-[#0f4a9b]',
    icon: BookOpen,
    description:
      'This is where our subject specialists get practical. These articles explain why revision does not always turn into marks, how to read an exam question before reaching for a formula, and the study habits that actually hold at IGCSE and A-Level. Written by active exam markers.',
  },
  'Psychology of Learning': {
    title: 'Psychology of Learning',
    slug: '/blogs/psychology-of-learning',
    accentGradient: 'from-purple-600 to-indigo-500',
    badgeStyle: 'bg-purple-50 text-purple-700 border-purple-200',
    dotColor: 'bg-purple-600',
    icon: Brain,
    description:
      'Understanding a topic at home and producing it under exam pressure are two different skills. The articles in this stream look at what happens in between: how memory fades, why capable students freeze, and how anxiety quietly uses up working memory during a paper.',
  },
  'Parent Guidance': {
    title: 'Parent Guidance',
    slug: '/blogs/parent-guidance',
    accentGradient: 'from-emerald-500 to-teal-400',
    badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dotColor: 'bg-emerald-500',
    icon: ShieldAlert,
    description: 'The report card is often the last sign, not the first. These articles help parents read the smaller signals at home, a thinning notebook, a child who stops explaining their work, and decide when a single diagnostic conversation is worth having.',
  },
};

export const BLOGS: BlogPost[] = [
  {
    slug: 'read-uae-school-report-card',
    image: '/images/blogs/uae-school-report-card-parent-guide.webp',
    alt: 'UAE parent sitting at a home desk reading a school report card carefully',
    category: 'Parent Guidance',
    title: 'How to Read a UAE School Report Card Like an Education Counsellor',
    description: 'How to read past the grades and comments on a UAE report card to spot early academic shift indicators.',
    date: '10 Aug 2026',
    readTime: '8 min read',
    author: 'Education Counsellor',
    featured: true,
  },
  {
    slug: 'early-signs-chemistry-help-uae',
    image: '/images/blogs/chemistry_tutor_session.jpg',
    alt: 'Ustaad chemistry tutor working one-to-one with an IGCSE student in the UAE',
    category: 'Parent Guidance',
    title: 'Early Signs Your Child Needs Help in Chemistry',
    description: 'Six signs a chemistry gap is forming long before the formal report card reflects it.',
    date: '28 Jul 2026',
    readTime: '8 min read',
    author: 'Education Counsellor',
  },
  {
    slug: 'why-chemistry-fades-from-memory',
    image: '/images/blogs/uae-igcse-chemistry-student-drawing-structures.webp',
    alt: 'UAE chemistry student revising molecular structures at a desk before an IGCSE exam',
    category: 'Academic',
    title: 'Why Students Forget Chemistry So Quickly',
    description: 'Why chemistry fades from memory, and the visual, spaced habits that make formulas and bonding stick.',
    date: '20 Jul 2026',
    readTime: '9 min read',
    author: 'Chemistry Specialist',
  },
  {
    slug: 'physics-understanding-vs-marks',
    image: '/images/blogs/uae-physics-student-understanding-vs-marks.webp',
    alt: 'UAE physics student at home who understands the material but still receives low exam marks',
    category: 'Psychology of Learning',
    title: 'Your Child Understands Physics. So Why Are the Marks Still Low?',
    description: 'The gap between understanding and exam performance: retrieval, working memory overload, and nerves.',
    date: '7 Jul 2026',
    readTime: '9 min read',
    author: 'Academic Mentor',
  },
  {
    slug: 'igcse-physics-formulas-exam',
    image: '/images/blogs/igcse-physics-student-revision-uae.webp',
    alt: 'IGCSE Physics student in the UAE revising formulas and free body diagrams at a home study desk',
    category: 'Academic',
    title: 'Why IGCSE Physics Formulas Stop Working in Exams',
    description: 'Students memorise every formula and still freeze—the fix is reading command words and drawing first.',
    date: '30 Jun 2026',
    readTime: '8 min read',
    author: 'Physics Teacher',
  },
  {
    slug: 'exam-panic-before-exams-uae',
    image: '/images/blogs/uae-teenager-exam-stress-quiet.webp',
    alt: 'UAE teenager studying at home showing quiet signs of exam stress before exam season',
    category: 'Psychology of Learning',
    title: '\u2018My Child Only Panics Right Before Exams\u2019',
    description: 'Why last-minute exam panic usually traces back to unaddressed conceptual gaps earlier in term.',
    date: '23 Jun 2026',
    readTime: '10 min read',
    author: 'Education Counsellor',
  },
  {
    slug: 'igcse-maths-revision-low-marks',
    image: '/images/blogs/igcse-maths-student-revision-uae.webp',
    alt: 'IGCSE maths student in the UAE revising past papers at a home study desk',
    category: 'Academic',
    title: 'Hours of Revision, Still Low Marks',
    description: 'Why hours of IGCSE maths revision don\u2019t turn into marks, and how active past-paper drills change the outcome.',
    date: '16 Jun 2026',
    readTime: '8 min read',
    author: 'Maths Specialist',
  },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'The Ustaad Blog | Study Skills, Learning & Parent Guidance UAE',
  'description': 'Articles from Ustaad\u2019s UAE tutors, academic mentors and counsellors on study skills, the psychology of learning, and knowing when your child needs support.',
  'url': 'https://ustaad.ae/blogs',
  'mainEntity': {
    '@type': 'ItemList',
    'itemListElement': BLOGS.map((blog, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'url': `https://ustaad.ae/blogs/${blog.slug}`,
      'name': blog.title,
    })),
  },
};

export default function BlogsPage() {
  return (
    <Layout>
      <SEOHead
        title="Ustaad Blog | Study Skills, Learning & Parent Guidance UAE"
        description="Articles from Ustaad's UAE tutors, academic mentors and counsellors on study skills, the psychology of learning, and knowing when your child needs support."
        canonical="/blogs"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blogs' },
          ]),
          collectionSchema,
        ]}
      />

      {/* ─── HERO & STREAMS ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50/50 to-white pt-24 pb-20 lg:pt-32 lg:pb-28">
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-50/40 to-transparent rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Typography */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#0f4a9b] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase border border-slate-100 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f4a9b] animate-pulse"></span>
              Ustaad Editorial & Knowledge Base
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 font-serif">
            <GradientHeadingText text="The Ustaad Blog" />
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-20 font-medium">
            Written and reviewed by teachers, academic mentors and counsellors working across the UAE. We cover British, American, and IB curriculum.
          </p>

          {/* 3 White Elegant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">
            
            {/* Card 1: Academic */}
            <a 
              href="/blogs/academic-exam-skills"
              className="group relative bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_4px_24px_rgba(15,74,155,0.03)] hover:shadow-[0_12px_40px_rgba(15,74,155,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0088cc] to-[#005580] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0088cc] mb-8 group-hover:bg-[#0088cc] group-hover:text-white transition-colors duration-300 shadow-sm">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#0a1f3d] mb-4 group-hover:text-[#0f4a9b] transition-colors font-serif">Academic & Exam Skills</h3>
              <p className="text-slate-500 leading-relaxed mb-10 flex-grow text-[15px]">
                This is where our subject specialists get practical. These articles explain why revision does not always turn into mark...
              </p>
              <div className="flex items-center justify-between text-slate-400 group-hover:text-[#0088cc] transition-colors pt-4 border-t border-slate-50">
                <span className="text-sm font-semibold tracking-wide uppercase">3 articles</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2: Psychology */}
            <a 
              href="/blogs/psychology-of-learning"
              className="group relative bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_4px_24px_rgba(139,92,246,0.03)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-[#5b21b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-[#8b5cf6] mb-8 group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors duration-300 shadow-sm">
                <Brain className="h-7 w-7" />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#0a1f3d] mb-4 group-hover:text-[#0f4a9b] transition-colors font-serif">Psychology of Learning</h3>
              <p className="text-slate-500 leading-relaxed mb-10 flex-grow text-[15px]">
                Understanding a topic at home and producing it under exam pressure are two different skills. The articles in this...
              </p>
              <div className="flex items-center justify-between text-slate-400 group-hover:text-[#8b5cf6] transition-colors pt-4 border-t border-slate-50">
                <span className="text-sm font-semibold tracking-wide uppercase">2 articles</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3: Parent Guidance */}
            <a 
              href="/blogs/parent-guidance"
              className="group relative bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_4px_24px_rgba(16,185,129,0.03)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-[#047857] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#10b981] mb-8 group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300 shadow-sm">
                <ShieldAlert className="h-7 w-7" />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#0a1f3d] mb-4 group-hover:text-[#0f4a9b] transition-colors font-serif">Parent Guidance</h3>
              <p className="text-slate-500 leading-relaxed mb-10 flex-grow text-[15px]">
                The report card is often the last sign, not the first. These articles help parents read the smaller signals at home, a thinning...
              </p>
              <div className="flex items-center justify-between text-slate-400 group-hover:text-[#10b981] transition-colors pt-4 border-t border-slate-50">
                <span className="text-sm font-semibold tracking-wide uppercase">2 articles</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

          </div>

          {/* How to Use Our Articles Banner */}
          <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-[0_8px_30px_rgba(15,74,155,0.06)] text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="font-extrabold text-[#0a1f3d] text-xl mb-3 flex items-center gap-2 font-serif">
                <Sparkles className="h-6 w-6 text-[#d97706]" /> How to Use Our Articles
              </h3>
              <p className="text-slate-600 text-[15px] max-w-xl leading-relaxed">
                Read these articles alongside your child ahead of mock exams to build effective revision habits together.
              </p>
            </div>
            
            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <a 
                href="/editorial"
                className="bg-[#0f4a9b]/10 text-[#0f4a9b] px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 hover:bg-[#0f4a9b]/20 transition-colors"
              >
                Explore Editorial Library <ArrowRight className="h-4 w-4" />
              </a>
              <a 
                href="/contact#form"
                className="bg-[#0f4a9b] text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 hover:bg-[#0c3b7a] transition-colors"
              >
                Book a Free Trial <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          
        </div>
      </section>



      <FinalCTA
        title="Find the Right Tutor for Your Child"
        subtitle="Get matched with an expert tutor for your subject and curriculum."
        button1Text="Book Your Free Trial"
        button2Text="Ask Your Question"
        subtext1="Free Trial • No Commitment"
        subtext2="Stuck? Send it, we'll explain it."
      />
    </Layout>
  );
}
