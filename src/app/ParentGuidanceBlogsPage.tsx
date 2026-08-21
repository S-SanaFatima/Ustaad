import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { Layout, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { BLOGS, CATEGORY_META } from './BlogsPage';

export default function ParentGuidanceBlogsPage() {
  const category = 'Parent Guidance';
  const meta = CATEGORY_META[category];
  const blogs = BLOGS.filter(b => b.category === category);

  return (
    <Layout>
      <SEOHead
        title={`${meta.title} | Ustaad Blog`}
        description={meta.description}
        canonical={meta.slug}
      />

      <div className="bg-[#f8faff] min-h-screen pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <a href="/blogs" className="inline-flex items-center gap-2 text-sm font-bold text-[#0f4a9b] hover:text-[#2563eb] mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" /> All streams
            </a>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-[#0f4a9b]"></div>
              <span className="text-xs font-bold tracking-widest text-[#0f4a9b] uppercase">STREAM 3</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0a1f3d] font-serif mb-4">
              {meta.title}
            </h1>
            
            <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
              {meta.description}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {blogs.map((blog, i) => (
              <motion.a
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
              >
                {/* Top Half (Image) */}
                <div className="relative h-48 p-6 flex flex-col justify-end overflow-hidden">
                  <img src={blog.image} alt={blog.alt || blog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/80 via-[#0a1f3d]/20 to-transparent"></div>
                  <span className="relative z-10 inline-flex items-center px-3 py-1 bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase rounded-full w-fit backdrop-blur-md border border-white/20">
                    {meta.title}
                  </span>
                </div>
                
                {/* Bottom Half (Content) */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-[#0a1f3d] mb-3 group-hover:text-[#0f4a9b] transition-colors leading-snug">
                    {blog.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {blog.description}
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 sm:gap-2.5 text-[11px] lg:text-xs text-slate-400 font-medium mb-3 whitespace-nowrap overflow-hidden">
                      <span className="truncate">{blog.author}</span>
                      <span className="text-slate-300 shrink-0">•</span>
                      <span className="shrink-0">{blog.date}</span>
                      <span className="text-slate-300 shrink-0">•</span>
                      <span className="flex items-center gap-1 shrink-0"><Clock className="h-3 w-3" /> {blog.readTime}</span>
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0f4a9b] group-hover:gap-2 transition-all">
                      Read <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Revision Companion Box */}
          <div className="bg-white border border-slate-100 shadow-[0_8px_30px_rgba(15,74,155,0.06)] rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0a1f3d]">How to use these articles as a revision companion</h3>
            <p className="text-slate-600 max-w-2xl mb-10 leading-relaxed">
              Our writing is not meant to be read once and forgotten. Used well, each article becomes a simple tool you and your child can return to across the term.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="group bg-slate-50 hover:bg-[#0f4a9b] p-6 rounded-2xl border border-slate-100 hover:border-[#0f4a9b] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-10 h-10 bg-[#0f4a9b] group-hover:bg-white text-white group-hover:text-[#0f4a9b] font-bold rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm">1</div>
                <h4 className="font-bold mb-3 text-[#0a1f3d] group-hover:text-white transition-colors duration-300 text-lg">Read together, calmly</h4>
                <p className="text-sm text-slate-500 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">Pick the stream that matches what you are seeing at home, and read it side by side.</p>
              </div>
              <div className="group bg-slate-50 hover:bg-[#0f4a9b] p-6 rounded-2xl border border-slate-100 hover:border-[#0f4a9b] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-10 h-10 bg-[#0f4a9b] group-hover:bg-white text-white group-hover:text-[#0f4a9b] font-bold rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm">2</div>
                <h4 className="font-bold mb-3 text-[#0a1f3d] group-hover:text-white transition-colors duration-300 text-lg">Try one habit</h4>
                <p className="text-sm text-slate-500 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">Each piece ends with a small, doable change. Choose one and give it a week.</p>
              </div>
              <div className="group bg-slate-50 hover:bg-[#0f4a9b] p-6 rounded-2xl border border-slate-100 hover:border-[#0f4a9b] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-10 h-10 bg-[#0f4a9b] group-hover:bg-white text-white group-hover:text-[#0f4a9b] font-bold rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm">3</div>
                <h4 className="font-bold mb-3 text-[#0a1f3d] group-hover:text-white transition-colors duration-300 text-lg">Talk to a tutor if it persists</h4>
                <p className="text-sm text-slate-500 group-hover:text-blue-100 transition-colors duration-300 leading-relaxed">If the same signs keep returning, a short conversation can turn guidance into a plan.</p>
              </div>
            </div>
          </div>


          
        </div>
      </div>
      
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
