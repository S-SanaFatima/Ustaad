import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Layout, GradientHeadingText, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

const BLOGS = [
  {
    slug: 'read-uae-school-report-card',
    image: '/images/blogs/uae-school-report-card-parent-guide.webp',
    alt: 'UAE parent sitting at a home desk reading a school report card carefully',
    category: 'Parent Guidance',
    title: 'How to Read a UAE School Report Card Like an Education Counsellor',
    description: 'Report card comments follow patterns most parents miss. A UAE education counsellor decodes the phrases teachers use, and what they actually mean.',
    date: '10 August 2026',
    readTime: '8 min read',
  },
  {
    slug: 'early-signs-chemistry-help-uae',
    image: '/images/blogs/chemistry_tutor_session.jpg',
    alt: 'Ustaad chemistry tutor working one-to-one with an IGCSE student in the UAE',
    category: 'Parent Guidance',
    title: 'Early Signs Your Child Needs Help in Chemistry | Ustaad',
    description: 'Six early signs your child is struggling in IGCSE or A-Level chemistry, well before the report card drops. Calm guidance from a UAE education counsellor.',
    date: '28 July 2026',
    readTime: '8 min read',
  },
  {
    slug: 'why-chemistry-fades-from-memory',
    image: '/images/blogs/uae-igcse-chemistry-student-drawing-structures.webp',
    alt: 'UAE chemistry student revising molecular structures at a desk before an IGCSE exam',
    category: 'Chemistry',
    title: 'Why Students Forget Chemistry So Quickly | Ustaad',
    description: 'A Chemistry teacher explains why students forget formulas and structures so quickly, and what visual retrieval habits parents can support at home.',
    date: '20 July 2026',
    readTime: '9 min read',
  },
  {
    slug: 'physics-understanding-vs-marks',
    image: '/images/blogs/uae-physics-student-understanding-vs-marks.webp',
    alt: 'UAE physics student at home who understands the material but still receives low exam marks',
    category: 'Physics',
    title: 'Physics Understanding vs Marks',
    description: 'Why understanding Physics in class is not the same as scoring marks, and what UAE students can change before the next paper.',
    date: '7 July 2026',
    readTime: '9 min read',
  },
  {
    slug: 'igcse-physics-formulas-exam',
    image: '/images/blogs/igcse-physics-student-revision-uae.webp',
    alt: 'IGCSE Physics student in the UAE revising formulas and free body diagrams at a home study desk',
    category: 'IGCSE Physics',
    title: 'IGCSE Physics Formulas for Exams',
    description: 'How IGCSE Physics students lose marks on formula questions, and the retrieval practice that fixes it.',
    date: '30 June 2026',
    readTime: '8 min read',
  },
  {
    slug: 'exam-panic-before-exams-uae',
    image: '/images/blogs/uae-teenager-exam-stress-quiet.webp',
    alt: 'UAE teenager studying at home showing quiet signs of exam stress before exam season',
    category: 'Student Wellbeing',
    title: '"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late',
    description: 'Exam panic builds quietly across the term. Discover early signs in homework and mocks long before parents notice them as exam stress.',
    date: '23 June 2026',
    readTime: '10 min read',
  },
  {
    slug: 'igcse-maths-revision-low-marks',
    image: '/images/blogs/igcse-maths-student-revision-uae.webp',
    alt: 'IGCSE maths student in the UAE revising past papers at a home study desk',
    category: 'IGCSE Maths',
    title: 'Why IGCSE Maths Students Suffer Low Marks | Ustaad',
    description: 'Why do IGCSE students forget maths in exams despite studying hard? A closer look at what is really happening, and what actually helps.',
    date: '16 June 2026',
    readTime: '8 min read',
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(BLOGS.length / POSTS_PER_PAGE));
  const paginated = BLOGS.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  return (
    <Layout>
      <SEOHead title="Blog | Private Tutoring Insights & Study Tips | Ustaad" description="Explore Ustaad's blog for expert tutoring insights, study tips, exam strategies, and curriculum guidance for IGCSE, A-Level, IB, and AP students in UAE." canonical="/blogs" schema={[localBusinessSchema, breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blogs" }])]} />

      {/* Hero */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0f4a9b]/5 to-[#0a3a79]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4a9b]/5 rounded-full mb-5 border border-[#0f4a9b]/10">
              <FileText className="h-4 w-4 text-[#0f4a9b]" />
              <span className="text-sm font-bold text-[#0f4a9b]">Blog</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-4 tracking-tight leading-tight">
              <GradientHeadingText text="Latest Insights" />
            </h1>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Expert advice, study tips, and educational trends for UAE students and parents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-16 lg:pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginated.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg">No articles available yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paginated.map((blog, i) => (
                <motion.article
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(15,74,155,0.06)] hover:shadow-[0_12px_40px_rgba(15,74,155,0.12)] transition-all h-full"
                >
                  <a href={`/blogs/${blog.slug}`} className="flex flex-col h-full">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 lg:p-6 flex flex-col flex-1 text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f4a9b]/5 text-[#0f4a9b] text-xs font-bold rounded-full mb-3 w-fit">
                        <FileText className="h-3 w-3" /> {blog.category}
                      </div>
                      <h2 className="text-base lg:text-lg font-extrabold text-[#0a1f3d] mb-2 leading-snug group-hover:text-[#0f4a9b] transition">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {blog.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{blog.date}</span>
                          <span className="mx-1">·</span>
                          <Clock className="h-3.5 w-3.5" />
                          <span>{blog.readTime}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-[#0f4a9b] group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
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
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition ${currentPage === page ? 'bg-[#0f4a9b] text-white shadow-[0_0_12px_rgba(15,74,155,0.3)]' : 'border border-slate-200 text-gray-600 hover:border-[#0f4a9b] hover:text-[#0f4a9b]'}`}
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
          <div className="mt-16 bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0f4a9b] bg-[#0f4a9b]/10 px-3 py-1 rounded-full border border-[#0f4a9b]/20">Parent & Student Advice Hub</span>
              <h2 className="text-2xl font-extrabold text-[#0a1f3d] mt-3 mb-3">Understanding the UAE Exam Landscape</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">Our editorial articles address the real academic pressure UAE families face during IGCSE, GCSE, A-Level, and IB Diploma cycles. Written and reviewed by experienced educators, each guide translates classroom insights into practical steps parents can take at home.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 text-xs text-gray-600 mb-6">
              <div>
                <h3 className="font-bold text-[#0a1f3d] text-sm mb-2">Exam Panic & Stress</h3>
                <p className="leading-relaxed">Exam panic rarely starts during mock week. Learn how unseen stress builds across terms and discover early warning signs in homework and revision routines.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0a1f3d] text-sm mb-2">Subject Retention Gaps</h3>
                <p className="leading-relaxed">Why do students understand Physics or Chemistry in class but forget formulas during tests? We break down visual retrieval practice and active recall techniques.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0a1f3d] text-sm mb-2">Grade Improvement</h3>
                <p className="leading-relaxed">Hours of revision don't automatically guarantee top grades. Discover how mastering mark scheme keywords and command words transforms student performance.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-gray-600 leading-relaxed">
              <h3 className="font-bold text-[#0a1f3d] text-sm mb-2">How to Use Our Articles as a Revision Companion</h3>
              <p className="mb-2">We recommend parents read these articles alongside their child ahead of mock exams and formal term assessments. Each guide provides practical steps, such as establishing visual formula cards, breaking study blocks into 25-minute focused bursts, and identifying question command words like "State", "Describe", and "Evaluate".</p>
              <p>For personalised subject support, book a free trial session with one of our UAE curriculum specialists.</p>
            </div>
          </div>
        </div>
      </section>

      
          <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 text-xs text-gray-600 leading-relaxed space-y-3">
            <h3 className="text-sm font-bold text-[#0a1f3d]">Curriculum Topics Covered in Our Publications</h3>
            <p>Our blog covers a broad range of academic challenges faced by students in Dubai, Abu Dhabi, Sharjah, and across the UAE. Articles explore IGCSE Maths paper strategies, A-Level Physics formula retention, IB Diploma Internal Assessment (IA) planning, and American Curriculum AP exam techniques.</p>
            <p>Each guide is written by experienced UAE educators and reviewed for accuracy before publication. We encourage parents to use these articles during revision periods to support structured home study habits and foster exam confidence.</p>
          </div>

      
          <div className="mt-6 bg-[#0a1f3d] text-white rounded-2xl p-6 text-xs leading-relaxed space-y-2">
            <h4 className="font-bold text-sm text-[#C7A24A]">Free Trial Session for UAE Students</h4>
            <p className="text-slate-200">Every strategy outlined in our articles is put into practice during 1-to-1 live sessions. Book a 30-minute free trial session to see how our specialist tutors help your child master syllabus content, past-paper mark schemes, and exam confidence.</p>
          </div>

      
          <div className="mt-4 bg-white p-6 rounded-2xl border border-slate-200/80 text-xs text-gray-600 leading-relaxed space-y-2">
            <h4 className="font-bold text-sm text-[#0a1f3d]">Academic Resource Center for UAE Parents</h4>
            <p>In addition to individual tutoring sessions, Ustaad provides downloadable past paper question banks, subject formula sheets, and exam timetable planners for British, American, and IB students. Explore our full library of articles above to help your child prepare for upcoming school terms and final board examinations.</p>
          </div>

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
