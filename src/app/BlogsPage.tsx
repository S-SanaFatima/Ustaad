import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, User, Filter, Sparkles, BookOpen, Brain, ShieldAlert } from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

interface BlogPost {
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

const CATEGORY_META = {
  'Academic': {
    title: 'Academic & Exam Skills',
    slug: '/blogs/academic-exam-skills',
    color: 'bg-blue-50 text-[#0f4a9b] border-blue-200 hover:bg-blue-100',
    activeColor: 'bg-[#0f4a9b] text-white border-[#0f4a9b] shadow-[0_4px_14px_rgba(15,74,155,0.35)]',
    badgeColor: 'bg-blue-50 text-[#0f4a9b] border-blue-200/80',
    icon: BookOpen,
    description:
      'This is where our subject specialists get practical. These articles explain why revision does not always turn into marks, how to read an exam question before reaching for a formula, and the study habits that actually hold at IGCSE and A-Level. They are written by teachers who mark these papers, and they focus on maths, physics and chemistry, the subjects UAE families most often ask us about. If your child is putting in the hours but the grades are not moving, start here.',
  },
  'Psychology of Learning': {
    title: 'Psychology of Learning',
    slug: '/blogs/psychology-of-learning',
    color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
    activeColor: 'bg-purple-700 text-white border-purple-700 shadow-[0_4px_14px_rgba(124,58,237,0.35)]',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
    icon: Brain,
    description:
      'Understanding a topic at home and producing it under exam pressure are two different skills. The articles in this stream look at what happens in between: how memory fades, why capable students freeze, and how anxiety quietly uses up working memory during a paper. Written from a psychology and counselling perspective, they help parents make sense of results that do not match effort, and point to changes that work better than simply adding more study hours.',
  },
  'Parent Guidance': {
    title: 'Parent Guidance',
    slug: '/blogs/parent-guidance',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
    activeColor: 'bg-emerald-700 text-white border-emerald-700 shadow-[0_4px_14px_rgba(5,150,105,0.35)]',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    icon: ShieldAlert,
    description:
      'The report card is often the last sign, not the first. These articles help parents read the smaller signals at home, a thinning notebook, a child who stops explaining their work, a grade that slips for reasons the school has not flagged, and decide when a single diagnostic conversation is worth having. Written by our education counsellor, they stay calm and specific, with checks you can run in fifteen minutes rather than pressure to react to every wobble.',
  },
};

const BLOGS: BlogPost[] = [
  {
    slug: 'read-uae-school-report-card',
    image: '/images/blogs/uae-school-report-card-parent-guide.webp',
    alt: 'UAE parent sitting at a home desk reading a school report card carefully',
    category: 'Parent Guidance',
    title: 'How to Read a UAE School Report Card Like an Education Counsellor',
    description: 'How to read past the grades and comments on a UAE report card.',
    date: '10 August 2026',
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
    description: 'Six signs a chemistry gap is forming long before the report card shows it.',
    date: '28 July 2026',
    readTime: '8 min read',
    author: 'Education Counsellor',
  },
  {
    slug: 'why-chemistry-fades-from-memory',
    image: '/images/blogs/uae-igcse-chemistry-student-drawing-structures.webp',
    alt: 'UAE chemistry student revising molecular structures at a desk before an IGCSE exam',
    category: 'Academic',
    title: 'Why Students Forget Chemistry So Quickly',
    description: 'Why chemistry fades from memory, and the visual, spaced habits that make it stick.',
    date: '20 July 2026',
    readTime: '9 min read',
    author: 'Chemistry Specialist',
  },
  {
    slug: 'physics-understanding-vs-marks',
    image: '/images/blogs/uae-physics-student-understanding-vs-marks.webp',
    alt: 'UAE physics student at home who understands the material but still receives low exam marks',
    category: 'Psychology of Learning',
    title: 'Your Child Understands Physics. So Why Are the Marks Still Low?',
    description: 'The gap between understanding and exam performance: retrieval, working memory and nerves.',
    date: '7 July 2026',
    readTime: '9 min read',
    author: 'Academic Mentor',
  },
  {
    slug: 'igcse-physics-formulas-exam',
    image: '/images/blogs/igcse-physics-student-revision-uae.webp',
    alt: 'IGCSE Physics student in the UAE revising formulas and free body diagrams at a home study desk',
    category: 'Academic',
    title: 'Why IGCSE Physics Formulas Stop Working in Exams',
    description: 'Students memorise every formula and still freeze — the fix is reading the question first.',
    date: '30 June 2026',
    readTime: '8 min read',
    author: 'Physics Teacher',
  },
  {
    slug: 'exam-panic-before-exams-uae',
    image: '/images/blogs/uae-teenager-exam-stress-quiet.webp',
    alt: 'UAE teenager studying at home showing quiet signs of exam stress before exam season',
    category: 'Psychology of Learning',
    title: '‘My Child Only Panics Right Before Exams’',
    description: 'Why last-minute exam panic usually traces back to earlier in the term.',
    date: '23 June 2026',
    readTime: '10 min read',
    author: 'Education Counsellor',
  },
  {
    slug: 'igcse-maths-revision-low-marks',
    image: '/images/blogs/igcse-maths-student-revision-uae.webp',
    alt: 'IGCSE maths student in the UAE revising past papers at a home study desk',
    category: 'Academic',
    title: 'Hours of Revision, Still Low Marks',
    description: 'Why hours of IGCSE maths revision don’t turn into marks, and what to do instead.',
    date: '16 June 2026',
    readTime: '8 min read',
    author: 'Maths Specialist',
  },
];

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  'name': 'The Ustaad Blog | Study Skills, Learning & Parent Guidance UAE',
  'description': 'Articles from Ustaad’s UAE tutors, academic mentors and counsellors on study skills, the psychology of learning, and knowing when your child needs support.',
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
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);

  const featuredPost = BLOGS.find(b => b.featured) || BLOGS[0];

  const filteredBlogs = selectedCategory === 'All'
    ? BLOGS
    : BLOGS.filter(b => b.category === selectedCategory);

  const POSTS_PER_PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / POSTS_PER_PAGE));
  const paginated = filteredBlogs.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <SEOHead
        title="Ustaad Blog | Study Skills, Learning & Parent Guidance UAE"
        description="Articles from Ustaad’s UAE tutors, academic mentors and counsellors on study skills, the psychology of learning, and knowing when your child needs support."
        canonical="/blogs"
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blogs" },
          ]),
          collectionSchema,
        ]}
      />

      {/* Hero Header */}
      <section className="pt-16 pb-12 lg:pt-20 lg:pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0f4a9b]/5 rounded-full mb-5 border border-[#0f4a9b]/10">
              <FileText className="h-4 w-4 text-[#0f4a9b]" />
              <span className="text-xs font-bold text-[#0f4a9b] uppercase tracking-wider">Ustaad Publications</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-5 tracking-tight leading-tight">
              <GradientHeadingText text="The Ustaad Blog" />
            </h1>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto text-justify sm:text-center">
              Every article here is written or reviewed by a teacher, academic mentor or counsellor working with students across the UAE. We write for families navigating the British, American and IB curricula, from IGCSE and GCSE through A-Level, AP and IB, and the guidance comes from real classrooms and counselling rooms in Dubai, Abu Dhabi and beyond rather than generic study tips. To make the writing easy to navigate, we group it into three streams: Academic skills for subject learning and exam technique, Psychology of Learning for how the mind performs under pressure, and Parent Guidance for spotting early signs and deciding when to step in. Choose a stream below, or read the latest first.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Featured Article (Shown when "All" is active) */}
      {selectedCategory === 'All' && (
        <section className="pb-10 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-900 to-[#0a1f3d] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 text-white grid lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.alt}
                  className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/95" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A] text-[#0a1f3d] text-xs font-black uppercase tracking-wider rounded-full shadow-lg">
                  <Sparkles className="h-3 w-3" /> Editor's Pick
                </div>
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full mb-4 w-fit border border-emerald-500/30">
                  <ShieldAlert className="h-3.5 w-3.5" /> {featuredPost.category}
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 leading-snug hover:text-[#C7A24A] transition">
                  <a href={`/blogs/${featuredPost.slug}`}>{featuredPost.title}</a>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/80 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="h-3.5 w-3.5 text-[#C7A24A]" />
                    <span className="font-medium text-slate-300">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{featuredPost.date}</span>
                    <span className="mx-0.5">·</span>
                    <Clock className="h-3.5 w-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <a
                  href={`/blogs/${featuredPost.slug}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C7A24A] hover:bg-[#b5923f] text-[#0a1f3d] font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-xl w-fit"
                >
                  Read Featured Article <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Chips Bar */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={() => handleCategoryChange('All')}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-200 flex items-center gap-2 ${
                selectedCategory === 'All'
                  ? 'bg-[#0a1f3d] text-white border-[#0a1f3d] shadow-md'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Filter className="h-3.5 w-3.5" /> All Streams ({BLOGS.length})
            </button>

            {(Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>).map(catKey => {
              const meta = CATEGORY_META[catKey];
              const count = BLOGS.filter(b => b.category === catKey).length;
              const isSelected = selectedCategory === catKey;
              const IconComp = meta.icon;

              return (
                <button
                  key={catKey}
                  onClick={() => handleCategoryChange(catKey)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-200 flex items-center gap-2 ${
                    isSelected ? meta.activeColor : meta.color
                  }`}
                >
                  <IconComp className="h-3.5 w-3.5" />
                  {catKey} ({count})
                </button>
              );
            })}
          </div>

          {/* Active Category Description Header */}
          {selectedCategory !== 'All' && CATEGORY_META[selectedCategory as keyof typeof CATEGORY_META] && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200 text-left max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-xs font-bold rounded-full mb-3 text-[#0a1f3d]">
                <FileText className="h-3.5 w-3.5 text-[#0f4a9b]" />
                {CATEGORY_META[selectedCategory as keyof typeof CATEGORY_META].title} Stream
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0a1f3d] mb-3">
                {CATEGORY_META[selectedCategory as keyof typeof CATEGORY_META].title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {CATEGORY_META[selectedCategory as keyof typeof CATEGORY_META].description}
              </p>
            </motion.div>
          )}

          {/* Blog Cards Grid */}
          {paginated.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">No articles available in this stream yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paginated.map((blog, i) => {
                const categoryConfig = CATEGORY_META[blog.category];
                return (
                  <motion.article
                    key={blog.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_40px_rgba(15,74,155,0.12)] transition-all h-full"
                  >
                    <a href={`/blogs/${blog.slug}`} className="flex flex-col h-full">
                      <div className="aspect-[16/9] overflow-hidden relative bg-slate-100">
                        <img
                          src={blog.image}
                          alt={blog.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 lg:p-6 flex flex-col flex-1 text-left">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full mb-3 w-fit border ${categoryConfig.badgeColor}`}>
                          <FileText className="h-3 w-3" /> {blog.category}
                        </div>
                        <h2 className="text-base lg:text-lg font-extrabold text-[#0a1f3d] mb-2.5 leading-snug group-hover:text-[#0f4a9b] transition">
                          {blog.title}
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                          {blog.description}
                        </p>
                        <div className="flex flex-col gap-2.5 mt-auto pt-4 border-t border-slate-100 text-xs text-gray-500">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                              <User className="h-3.5 w-3.5 text-[#0f4a9b]" /> {blog.author}
                            </span>
                            <ArrowRight className="h-4 w-4 text-[#0f4a9b] group-hover:translate-x-1 transition" />
                          </div>
                          <div className="flex items-center gap-2 text-slate-400">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{blog.date}</span>
                            <span className="mx-0.5">·</span>
                            <Clock className="h-3.5 w-3.5" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.article>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-gray-600 hover:border-[#0f4a9b] hover:text-[#0f4a9b] disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition ${
                    currentPage === page
                      ? 'bg-[#0f4a9b] text-white shadow-[0_0_12px_rgba(15,74,155,0.3)]'
                      : 'border border-slate-200 text-gray-600 hover:border-[#0f4a9b] hover:text-[#0f4a9b]'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-gray-600 hover:border-[#0f4a9b] hover:text-[#0f4a9b] disabled:opacity-40 disabled:cursor-not-allowed transition"
                aria-label="Next page"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* Parent Reading Guide & Study Hub Overview */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm text-left">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">
                Parent & Student Advice Hub
              </span>
              <h2 className="text-2xl font-extrabold text-[#0a1f3d] mt-3 mb-3">Understanding the UAE Exam Landscape</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Our editorial articles address the real academic pressure UAE families face during IGCSE, GCSE, A-Level, AP, and IB Diploma cycles. Written and reviewed by experienced educators and counsellors, each guide translates classroom insights into practical steps parents can take at home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 text-xs text-gray-600 mb-6">
              <div>
                <h3 className="font-bold text-[#0a1f3d] text-sm mb-2 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-[#0f4a9b]" /> Academic & Exam Skills
                </h3>
                <p className="leading-relaxed">
                  Subject-specific guides on maths revision, physics problem-solving, and chemistry retention strategies written by active exam markers.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-purple-900 text-sm mb-2 flex items-center gap-2">
                  <Brain className="h-4 w-4 text-purple-700" /> Psychology of Learning
                </h3>
                <p className="leading-relaxed">
                  Understand how memory, working memory, and exam nerves interact under pressure, and how to bridge the gap between effort and marks.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-2">
                  <ShieldAlert className="h-4 w-4 text-emerald-700" /> Parent Guidance
                </h3>
                <p className="leading-relaxed">
                  Spotting early signals in homework and report cards long before grades drop, with 15-minute home checks to guide parent support.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-gray-600 leading-relaxed">
              <h3 className="font-bold text-[#0a1f3d] text-sm mb-2">How to Use Our Articles as a Revision Companion</h3>
              <p className="mb-2">
                We recommend parents read these articles alongside their child ahead of mock exams and formal term assessments. Each guide provides practical steps, such as establishing visual formula cards, breaking study blocks into 25-minute focused bursts, and identifying question command words like "State", "Describe", and "Evaluate".
              </p>
              <p>For personalised subject support, book a free trial session with one of our UAE curriculum specialists.</p>
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

