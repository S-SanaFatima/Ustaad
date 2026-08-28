import { BookOpen, Brain, ShieldAlert, ArrowRight, Sparkles, FileText } from 'lucide-react';
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
    slug: 'igcse-preparation-past-papers-final-step',
    image: '/images/blogs/igcse-preparation-past-papers-hero.jpg',
    alt: 'UAE parent and IGCSE student reviewing revision plans and past paper preparation at home',
    category: 'Academic',
    title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First',
    description: 'IGCSE preparation is like building a house. See why past papers are the roof, not the foundation, and how to prepare in the right order to lift grades.',
    date: '27 Aug 2026',
    readTime: '10 min read',
    author: 'Nimra Shahzada',
    featured: true,
  },
  {
    slug: 'a-level-tutoring-uae-independent-thinking',
    image: '/images/blogs/hero-tutoring-session.webp',
    alt: 'A-Level tutoring session in the UAE supporting Cambridge, Pearson Edexcel and OxfordAQA students',
    category: 'Psychology of Learning',
    title: 'A-Level Tutoring in the UAE Starts With Independent Thinking',
    description: 'UAE A-Level exams move to portfolios and coursework in 2026, so more past papers are not enough. See how independent thinking lifts your teen\'s grades.',
    date: '24 Aug 2026',
    readTime: '8 min read',
    author: 'Nimra Shahzada',
    featured: true,
  },
  {
    slug: 'igcse-vs-gcse-curriculum-differences-uae',
    image: '/images/blogs/igcse-vs-gcse-father-son-subject-list.webp',
    alt: 'Father and son reviewing GCSE subject choices list and study plans on laptop at home',
    category: 'Parent Guidance',
    title: 'IGCSE vs GCSE: Curriculum Differences UAE Parents Should Know',
    description: 'IGCSE vs GCSE explained for UAE parents: the curriculum, assessment and recognition differences, and how to pick the right fit for your child.',
    date: '21 Aug 2026',
    readTime: '9 min read',
    author: 'UAE Educationist',
  },
  {
    slug: 'why-igcse-biology-students-lose-marks-on-6-mark-questions',
    image: '/images/blogs/uae-parent-igcse-biology-6-mark-review.webp',
    alt: 'UAE parent and IGCSE Biology student reviewing a 6-mark answer against the mark scheme at home, Ustaad UAE.',
    category: 'Academic',
    title: 'Why IGCSE Biology Students Lose Marks on 6-Mark Questions',
    description: 'IGCSE Biology 6-mark questions cost students marks every year. This board-specific guide explains what Cambridge and Pearson mark schemes reward.',
    date: '17 Aug 2026',
    readTime: '6 min read',
    author: 'Biology Specialist',
  },
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
    description: 'Students memorise every formula and still freeze. The fix is reading command words and drawing first.',
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
              <FileText className="w-4 h-4" />
              Ustaad Publications
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8 font-serif">
            <GradientHeadingText text="The Ustaad Blog" />
          </h1>

          <div className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-20 font-medium">
            <p className="mb-4">Calm, practical guidance for UAE families, written or reviewed by teachers, mentors and counsellors who work with students here.</p>
            <p>Choose a stream to begin.</p>
          </div>

          {/* 3 White Elegant Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">
            
            {/* Card 1: Academic */}
            <a 
              href="/blogs/academic-exam-skills"
              className="group relative bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_4px_24px_rgba(15,74,155,0.03)] hover:shadow-[0_12px_40px_rgba(15,74,155,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-8 right-8 bg-slate-50 text-slate-500 text-[11px] font-extrabold px-3 py-1 rounded-full border border-slate-100 uppercase tracking-wide">
                {BLOGS.filter(b => b.category === 'Academic').length} Articles
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0088cc] to-[#005580] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0088cc] mb-8 group-hover:bg-[#0088cc] group-hover:text-white transition-colors duration-300 shadow-sm">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#0a1f3d] mb-4 group-hover:text-[#0f4a9b] transition-colors font-serif">Subject & Exam Skills</h3>
              <p className="text-slate-500 leading-relaxed mb-10 flex-grow text-[15px]">
                Practical ways to revise smarter and turn understanding into marks, subject by subject.
              </p>
              <div className="flex items-center justify-between text-slate-400 group-hover:text-[#0088cc] transition-colors pt-4 border-t border-slate-50">
                <span className="text-sm font-semibold tracking-wide uppercase">Explore stream</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2: Psychology */}
            <a 
              href="/blogs/psychology-of-learning"
              className="group relative bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_4px_24px_rgba(139,92,246,0.03)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-8 right-8 bg-slate-50 text-slate-500 text-[11px] font-extrabold px-3 py-1 rounded-full border border-slate-100 uppercase tracking-wide">
                {BLOGS.filter(b => b.category === 'Psychology of Learning').length} Articles
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8b5cf6] to-[#5b21b6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center text-[#8b5cf6] mb-8 group-hover:bg-[#8b5cf6] group-hover:text-white transition-colors duration-300 shadow-sm">
                <Brain className="h-7 w-7" />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#0a1f3d] mb-4 group-hover:text-[#0f4a9b] transition-colors font-serif">The Psychology of Learning</h3>
              <p className="text-slate-500 leading-relaxed mb-10 flex-grow text-[15px]">
                Why capable students still underperform, and how memory, focus and nerves shape results.
              </p>
              <div className="flex items-center justify-between text-slate-400 group-hover:text-[#8b5cf6] transition-colors pt-4 border-t border-slate-50">
                <span className="text-sm font-semibold tracking-wide uppercase">Explore stream</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3: Parent Guidance */}
            <a 
              href="/blogs/parent-guidance"
              className="group relative bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_4px_24px_rgba(16,185,129,0.03)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="absolute top-8 right-8 bg-slate-50 text-slate-500 text-[11px] font-extrabold px-3 py-1 rounded-full border border-slate-100 uppercase tracking-wide">
                {BLOGS.filter(b => b.category === 'Parent Guidance').length} Articles
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-[#047857] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-[#10b981] mb-8 group-hover:bg-[#10b981] group-hover:text-white transition-colors duration-300 shadow-sm">
                <ShieldAlert className="h-7 w-7" />
              </div>
              <h3 className="text-[22px] font-extrabold text-[#0a1f3d] mb-4 group-hover:text-[#0f4a9b] transition-colors font-serif">Parent Guidance</h3>
              <p className="text-slate-500 leading-relaxed mb-10 flex-grow text-[15px]">
                Calm, clear help for spotting struggles early and knowing when to step in.
              </p>
              <div className="flex items-center justify-between text-slate-400 group-hover:text-[#10b981] transition-colors pt-4 border-t border-slate-50">
                <span className="text-sm font-semibold tracking-wide uppercase">Explore stream</span>
                <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

          </div>

          {/* Revision Companion Section */}
          <div className="relative bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-[0_8px_30px_rgba(15,74,155,0.06)] text-left flex flex-col gap-8 overflow-hidden group">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0f4a9b] rounded-full blur-[100px] opacity-[0.07] -z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d97706] rounded-full blur-[100px] opacity-[0.07] -z-0"></div>
            
            <div className="relative z-10">
              <h3 className="font-extrabold text-[#0a1f3d] text-2xl lg:text-3xl mb-4 flex items-center gap-3 font-serif">
                <Sparkles className="h-7 w-7 text-[#d97706]" /> How to use these articles as a revision companion
              </h3>
              <p className="text-slate-600 text-[17px] max-w-3xl leading-relaxed mb-10">
                Our writing is not meant to be read once and forgotten. Used well, each article becomes a simple tool you and your child can return to across the term.
              </p>
              
              <div className="grid md:grid-cols-3 gap-10 md:gap-8">
                <div className="flex flex-col gap-2 relative">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0f4a9b] font-bold text-lg mb-3 shadow-sm border border-blue-100/50">1</div>
                  <h4 className="font-extrabold text-[#0a1f3d] text-lg font-serif">Read together, calmly</h4>
                  <p className="text-slate-600 text-[15px] leading-relaxed">Pick the stream that matches what you are seeing at home, and read it side by side.</p>
                </div>
                
                <div className="flex flex-col gap-2 relative">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#10b981] font-bold text-lg mb-3 shadow-sm border border-emerald-100/50">2</div>
                  <h4 className="font-extrabold text-[#0a1f3d] text-lg font-serif">Try one habit</h4>
                  <p className="text-slate-600 text-[15px] leading-relaxed">Each piece ends with a small, doable change. Choose one and give it a week.</p>
                </div>
                
                <div className="flex flex-col gap-2 relative">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#8b5cf6] font-bold text-lg mb-3 shadow-sm border border-purple-100/50">3</div>
                  <h4 className="font-extrabold text-[#0a1f3d] text-lg font-serif">Talk to a tutor if it persists</h4>
                  <p className="text-slate-600 text-[15px] leading-relaxed">If the same signs keep returning, a short conversation can turn guidance into a plan.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>



      <FinalCTA
        title="Find the gaps holding your child back"
        subtitle="Book a free 30 minute session with our specialists. We will pinpoint exactly where the gaps are and show you where to focus next."
        button1Text="Book a Free Trial"
        button2Text="Chat on WhatsApp"
        button2Href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20book%20a%20free%20session%20to%20discuss%20my%20child%27s%20learning%20gaps."
        subtext1=""
        subtext2=""
      />
    </Layout>
  );
}
