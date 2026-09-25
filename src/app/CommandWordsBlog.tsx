import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar, User, Clock, BookOpen, ChevronDown, ChevronUp,
  MessageCircle, ShieldCheck, CheckCircle2,
  Sparkles, Target, ArrowRight, Lightbulb, Check, X,
  HelpCircle, AlertCircle, Bookmark, Compass, FileText,
  Layers, Award, Search, Share2
} from 'lucide-react';
import { Layout } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema, articleSchema, faqSchema } from './shared/schemas';

const BLOG = {
  title: 'Command Words in IGCSE and A-Level Exams: A Guide | Ustaad',
  heading: 'The One Word in Every Exam Question That Decides Your Marks',
  subtitle: 'Your child knows the content but loses marks anyway. The reason is usually command words. Here is how to read them and answer exactly what the examiner wants.',
  categoryBadge: 'USTAAD · ACADEMIC AND EXAM SKILLS',
  categoryUrl: '/blogs/academic-exam-skills',
  slug: 'command-words-igcse-a-level-exams',
  canonical: '/blogs/command-words-igcse-a-level-exams',
  description:
    'Your child knows the content but loses marks anyway. The reason is usually command words. Here is how to read them and answer exactly what the examiner wants.',
  heroImage: '/images/blogs/uae-exam-mark-scheme-review.webp',
  heroAlt: 'Cambridge and Edexcel IGCSE and A-Level exam paper with command words circled by an examiner during mark scheme review',
  heroCaption: 'Examiners award marks based on the command word, not volume of text. Missing the command word means missing the mark scheme.',
  datePublished: '2026-09-25',
  dateModified: '2026-09-25',
  author: 'Nimra Shahzada',
  authorRole: 'Writer on learning and the psychology of studying',
  authorBio: 'Nimra writes on study techniques, cognition, and exam preparation for British and IB curriculum students across the UAE.',
  authorUrl: '/authors/nimra-shahzada',
  reviewer: 'Nida Iqbal',
  reviewerRole: 'MPhil in Education Leadership and Management',
  reviewerBio: 'Nida checks each guide for educational accuracy, structure, and parent clarity before it is published.',
  reviewerUrl: '/authors/nida-iqbal',
  readTime: '7 min read',
  tags: [
    'Command Words',
    'IGCSE Command Words',
    'A-Level Command Words',
    'Exam Technique',
    'Describe vs Explain',
    'Mark Scheme Guidance',
    'British Curriculum UAE'
  ],
};

const FAQS = [
  {
    q: 'What are command words in an exam?',
    a: 'They are the instruction verbs in a question, such as describe, explain, compare or evaluate. Each one tells you what kind of answer will earn the marks, and the mark scheme is built directly around them.'
  },
  {
    q: 'Why does my child lose marks when they clearly know the topic?',
    a: 'Usually because they answered the wrong type of question. Knowing the topic is not enough if the answer does not match the command word. Writing what happens when the question asked why will lose the reasoning marks every single time.'
  },
  {
    q: 'What is the difference between describe and explain?',
    a: 'Describe asks for what happens or what is observed. Explain asks for why it happens. A reliable test: if the answer needs the word "because" to make sense, it is an explain question, and every sentence should build toward that reason.'
  },
  {
    q: 'Are command words the same across different subjects?',
    a: 'Broadly yes. Describe, explain, compare and evaluate mean the same fundamental things in biology, physics, chemistry, history, geography and economics. That is why mastering them is so efficient: the skill transfers across every subject at once.'
  },
  {
    q: 'How can I help if I do not know the subject?',
    a: 'You do not need subject knowledge. Sit with a past paper and simply circle the command word in each question together, then ask your child what each one wants. You are training how they read the question, which requires no subject knowledge from you.'
  },
  {
    q: 'How quickly can this improve grades?',
    a: 'Faster than most interventions, because the knowledge is already there. Once a student reliably reads and targets the command word, leaked marks begin appearing on marked papers within two to three weeks of deliberate practice.'
  }
];

const QUICK_ANSWERS = [
  { q: "What is a command word?", a: "The verb in a question that tells you what to do: describe, explain, compare, evaluate, and so on." },
  { q: "Why does it matter so much?", a: "The mark scheme rewards a specific type of answer for each command word. The wrong type scores low even when the facts are right." },
  { q: "Which one costs the most marks?", a: "Confusing 'describe' with 'explain' is the classic trap. One wants what happens, the other wants why." },
  { q: "How do we fix it?", a: "Train your child to physically circle the command word before writing anything, and to know what each one demands." },
  { q: "Is this a quick win?", a: "Yes. It unlocks marks from knowledge they already have. Exam results can shift within weeks." }
];

const COMMAND_WORDS_TABLE = [
  { word: 'State / Give', wants: 'A short, direct fact, name, or numerical value', markIn: 'One correct line or phrase, nothing more', example: '"State the unit of electrical resistance." -> Ohms (Omega)', tag: 'Direct' },
  { word: 'Describe', wants: 'What happens, observations, sequence of events, or graph trends', markIn: 'Accurate observations and steps (no reasoning required)', example: '"Describe how the rate of reaction changes over time."', tag: 'Observation' },
  { word: 'Explain', wants: 'Why it happens, causes, mechanisms, and scientific rationale', markIn: 'Reasons: "because", "therefore", "this causes"', example: '"Explain why the rate of reaction decreases as reactants are consumed."', tag: 'Reasoning' },
  { word: 'Compare', wants: 'Similarities and differences between two items in linked statements', markIn: 'Comparative connectors: "whereas", "both", "in contrast"', example: '"Compare the structure of arteries and veins."', tag: 'Comparative' },
  { word: 'Calculate', wants: 'A numerical answer supported by step-by-step working', markIn: 'Formula stated, substitutions shown, correct units', example: '"Calculate the kinetic energy of the 0.5 kg cart."', tag: 'Quantitative' },
  { word: 'Suggest', wants: 'A sensible scientific idea applied to an unfamiliar novel context', markIn: 'Applying fundamental principles to a new situation', example: '"Suggest why deep-sea organisms have flexible cell membranes."', tag: 'Application' },
  { word: 'Evaluate / Discuss', wants: 'Both sides of an argument, followed by a supported personal judgement', markIn: 'Arguments for, arguments against, and a definitive conclusion', example: '"Evaluate the economic and environmental impacts of wind farms."', tag: 'Synoptic' },
];

const RELATED_BLOGS = [
  {
    slug: 'physics-understanding-vs-marks',
    category: 'Academic & Exam Skills',
    title: 'Your Child Understands Physics. So Why Are the Marks Still Low?',
    description: 'The gap between understanding and exam marks: mark scheme alignment, working memory overload, and calculation precision.',
    image: '/images/blogs/uae-physics-student-understanding-vs-marks.webp'
  },
  {
    slug: 'igcse-preparation-past-papers-final-step',
    category: 'Academic & Exam Skills',
    title: 'IGCSE Preparation: Why Past Papers Are the Final Step, Not the First',
    description: 'How to sequence topic learning and command word mastery before taking on full timed past papers.',
    image: '/images/blogs/igcse-preparation-past-papers-hero.jpg'
  },
  {
    slug: '10-questions-hiring-private-tutor-abu-dhabi',
    category: 'Parent Guidance',
    title: '10 Honest Questions to Ask Before You Hire a Private Tutor in Abu Dhabi',
    description: 'How to evaluate whether a tutor actively teaches command-word strategy and examiner techniques.',
    image: '/images/blogs/parent_interview_worksheet.jpg'
  }
];

export default function CommandWordsBlog() {
  const [activeTab, setActiveTab] = useState<'describe' | 'explain'>('describe');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedWordTag, setSelectedWordTag] = useState<string>('All');
  const [habitStep, setHabitStep] = useState<number>(1);

  const filteredWords = selectedWordTag === 'All'
    ? COMMAND_WORDS_TABLE
    : COMMAND_WORDS_TABLE.filter(w => w.tag === selectedWordTag);

  const tags = ['All', 'Direct', 'Observation', 'Reasoning', 'Comparative', 'Quantitative', 'Application', 'Synoptic'];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: BLOG.heading,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Layout>
      <SEOHead
        title={BLOG.title}
        description={BLOG.description}
        canonical={BLOG.canonical}
        ogImage={BLOG.heroImage}
        author={BLOG.author}
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: 'https://ustaad.ae' },
            { name: 'Blog', url: 'https://ustaad.ae/blogs' },
            { name: 'Academic & Exam Skills', url: 'https://ustaad.ae/blogs/academic-exam-skills' },
            { name: 'Command Words in Exams', url: `https://ustaad.ae${BLOG.canonical}` }
          ]),
          articleSchema({
            title: BLOG.heading,
            description: BLOG.description,
            url: `https://ustaad.ae${BLOG.canonical}`,
            datePublished: BLOG.datePublished,
            dateModified: BLOG.dateModified,
            author: BLOG.author,
            reviewer: BLOG.reviewer,
            image: BLOG.heroImage,
            timeRequired: 'PT7M',
          }),
          faqSchema(FAQS)
        ]}
      />

      <article className="min-h-screen bg-[#FBF9F4] text-[#0A1F3C] pt-24 pb-20 selection:bg-[#C7A24A]/20 selection:text-[#0A1F3C]">
        
        {/* ── HEADER & HERO SECTION ── */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-4 sm:pt-8 pb-10">
          
          {/* Stream pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f4a9b]/10 border border-[#0f4a9b]/20 text-[#0f4a9b] text-xs font-extrabold uppercase tracking-widest mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <a href={BLOG.categoryUrl} className="hover:underline">
              {BLOG.categoryBadge}
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-serif font-bold text-[#0a1f3d] leading-[1.18] tracking-tight mb-6">
            {BLOG.heading}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
            {BLOG.subtitle}
          </p>

          {/* Metadata & Author Bar */}
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 py-4 px-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs max-w-2xl mx-auto text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-2 text-left">
              <span className="font-semibold text-[#0a1f3d]">Written by:</span>
              <a href={BLOG.authorUrl} className="text-[#0f4a9b] font-bold hover:underline">
                {BLOG.author}
              </a>
            </div>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2 text-left">
              <span className="font-semibold text-[#0a1f3d]">Reviewed by:</span>
              <a href={BLOG.reviewerUrl} className="text-[#0f4a9b] font-bold hover:underline">
                {BLOG.reviewer}
              </a>
            </div>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#C7A24A]" />
              <span>{BLOG.readTime}</span>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-[#0f4a9b] transition-colors font-medium ml-auto sm:ml-0 cursor-pointer"
              aria-label="Share article"
            >
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>
          </div>
        </header>

        {/* ── HERO IMAGE ── */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#C7A24A]/25 shadow-xl bg-[#0a1f3d] aspect-[16/9]">
            <img
              src={BLOG.heroImage}
              alt={BLOG.heroAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-white text-xs sm:text-sm backdrop-blur-xs bg-black/25">
              <p className="font-medium text-slate-200 leading-snug">
                <span className="text-[#E4C069] font-bold mr-1.5">Examiner Insight:</span>
                {BLOG.heroCaption}
              </p>
            </div>
          </div>
        </div>

        {/* ── MAIN ARTICLE BODY ── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro Text */}
          <div className="text-[#1e293b] leading-relaxed mb-10 space-y-5">
            <p className="text-base sm:text-lg leading-relaxed">
              Here is something that happens in exam halls across the UAE every single session. A student reads a question, recognises the topic, feels a wave of relief, and writes down everything they know about it. Three neat paragraphs. Then the paper comes back and the six-mark question scored two.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              The student is upset, and understandably so. They knew the material. They wrote a lot. So where did the marks go?
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Almost always, the answer is a single word near the start of the question that the student read straight past. <strong className="text-[#0a1f3d] font-bold">Describe. Explain. Compare. Evaluate. State.</strong> These are called <strong className="text-[#0f4a9b] font-bold">command words</strong>, and they are the exam telling you, in plain language, exactly what kind of answer will earn the marks. Miss the command word and you can write a page of correct facts and still lose most of the marks, because you answered a question the examiner did not ask.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              As examiners, this is the single most common way we see capable students throw marks away. The good news is that it is also one of the fastest things to fix. You do not need to learn more content. You need to learn to read six or seven words properly.
            </p>
          </div>

          {/* ── QUICK ANSWERS BOX ── */}
          <section className="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0a1f3d] via-[#12305a] to-[#0a1f3d] text-white shadow-xl border border-[#C7A24A]/30">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="w-5 h-5 text-[#E4C069]" />
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">Quick Answers Before You Read</h2>
            </div>
            
            <div className="space-y-4">
              {QUICK_ANSWERS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C7A24A]/40 transition-colors">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#E4C069] to-[#C9A24C] text-[#0A1F3C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-sm text-[#FBF9F4] mb-1">{item.q}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION: WHAT A COMMAND WORD ACTUALLY IS ── */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d] mb-4">
              What a Command Word Actually Is
            </h2>
            <div className="text-[#1e293b] leading-relaxed space-y-4 mb-6">
              <p>
                Every exam question is really two parts joined together. There is the <strong className="text-[#0a1f3d]">topic</strong>, which is what the question is about, and there is the <strong className="text-[#0f4a9b]">command word</strong>, which is what the question wants you to do with that topic.
              </p>
              <p>
                Take a question like: <em>&ldquo;Explain why a plant wilts when it is not watered.&rdquo;</em> The topic is plant water loss. The command word is <strong>explain</strong>. A student who knows about osmosis and turgor pressure has the topic covered. But if they only describe what happens &mdash; <em>the leaves droop, the stem bends</em> &mdash; they have not explained why, and the marks for scientific reasoning are gone.
              </p>
              <p>
                The mark scheme is built around the command word, not around how much you know. For an explain question, the marks are sitting behind the words <strong>because</strong> and <strong>therefore</strong> and <strong>this causes</strong>. For a describe question, they are sitting behind what you observe. Same topic, completely different answer, and the command word is the only thing telling you which one to give.
              </p>
            </div>

            {/* Visual Formula Card */}
            <div className="p-6 rounded-2xl bg-white border-2 border-[#0f4a9b]/20 shadow-md text-center my-8">
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#0f4a9b] mb-2">The Anatomy of an Exam Question</div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg sm:text-xl font-serif font-bold text-[#0a1f3d]">
                <span className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-200">Topic (The Subject)</span>
                <span className="text-[#C7A24A] text-2xl">+</span>
                <span className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#0f4a9b]">Command Word (The Action)</span>
                <span className="text-[#C7A24A] text-2xl">=</span>
                <span className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">Earned Marks</span>
              </div>
            </div>

            {/* EXAMINER NOTE 1 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a1f3d] text-white border-l-4 border-[#C7A24A] shadow-md my-6">
              <div className="flex items-center gap-2 text-[#E4C069] font-extrabold text-xs uppercase tracking-wider mb-2">
                <Bookmark className="w-4 h-4" /> Examiner&apos;s Note
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                A question is a topic plus a command word. Most students read the topic and skip the command word. The marks live in the command word.
              </p>
            </div>
          </section>

          {/* ── SECTION: THE COMMAND WORDS THAT COST THE MOST MARKS ── */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d] mb-4">
              The Command Words That Cost the Most Marks
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Some command words are close cousins, and the small difference between them is exactly where students slip. These are the ones we see cost the most marks, session after session.
            </p>

            {/* 1. Describe vs Explain Interactive Module */}
            <div className="my-8 rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">
              <div className="bg-[#0a1f3d] p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#E4C069]">The #1 Mark Leak</span>
                  <h3 className="text-lg sm:text-xl font-bold font-serif">Describe versus Explain</h3>
                </div>
                
                {/* Toggle buttons */}
                <div className="flex rounded-lg bg-white/10 p-1 border border-white/10 text-xs">
                  <button
                    onClick={() => setActiveTab('describe')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                      activeTab === 'describe' ? 'bg-[#C7A24A] text-[#0a1f3d] shadow-xs' : 'text-white hover:text-slate-200'
                    }`}
                  >
                    &quot;Describe&quot; Demands
                  </button>
                  <button
                    onClick={() => setActiveTab('explain')}
                    className={`px-3 py-1.5 rounded-md font-bold transition-all cursor-pointer ${
                      activeTab === 'explain' ? 'bg-[#0f4a9b] text-white shadow-xs' : 'text-white hover:text-slate-200'
                    }`}
                  >
                    &quot;Explain&quot; Demands
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 rounded-xl border transition-all ${activeTab === 'describe' ? 'bg-amber-50/70 border-[#C7A24A]' : 'bg-slate-50 border-slate-200'}`}>
                    <h4 className="font-bold text-[#0a1f3d] text-sm sm:text-base flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#C7A24A]" /> &quot;Describe&quot; Wants:
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>What you see</strong> or what occurs physically</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Trend:</strong> The graph rises, reaches peak, then levels off</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Facts, procedural steps, and visible observations</span>
                      </li>
                      <li className="flex items-start gap-1.5 text-slate-500">
                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span><em>No underlying reasoning or cause needed</em></span>
                      </li>
                    </ul>
                  </div>

                  <div className={`p-4 rounded-xl border transition-all ${activeTab === 'explain' ? 'bg-blue-50/70 border-[#0f4a9b]' : 'bg-slate-50 border-slate-200'}`}>
                    <h4 className="font-bold text-[#0a1f3d] text-sm sm:text-base flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0f4a9b]" /> &quot;Explain&quot; Wants:
                    </h4>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>The underlying reason</strong> why it occurs</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Mechanism:</strong> Rate slows <em>because</em> substrate is depleted</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Causes, scientific laws, <em>&quot;because&quot;</em> and <em>&quot;therefore&quot;</em></span>
                      </li>
                      <li className="flex items-start gap-1.5 font-semibold text-[#0f4a9b]">
                        <Check className="w-4 h-4 text-[#0f4a9b] shrink-0 mt-0.5" />
                        <span>Reasoning is the whole point of the mark</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* The "Because" Hallway Test */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <div className="font-bold text-[#0a1f3d] mb-1 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-[#C7A24A]" /> The &ldquo;Because&rdquo; Test in the Exam Hall:
                  </div>
                  <p className="leading-relaxed">
                    If your child can complete their answer without ever writing the word <strong className="text-[#0a1f3d] font-bold">&ldquo;because&rdquo;</strong>, the question was probably <strong>describe</strong>. If the answer only makes sense with a <em>&ldquo;because&rdquo;</em> in it, the question was <strong>explain</strong> and every sentence should be building toward that reason.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. State and Give vs Explain */}
            <div className="my-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0a1f3d]">
                State and Give versus Explain
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>State</strong> and <strong>give</strong> are asking for a short, direct answer. A fact, a name, a number. No full sentence needed, no reasoning, no padding. Students often over-write these, spending three minutes and a paragraph on a question that wanted four words. That wastes valuable minutes they will need later for multi-step calculations or 6-mark essays.
              </p>
              <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-200 rounded-lg text-xs font-medium">
                Tip: If the command word is <em>State</em>, one concise line is the correct length.
              </div>
            </div>

            {/* 3. Compare */}
            <div className="my-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0a1f3d]">
                Compare
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong>Compare</strong> is a trap for a specific reason. It asks for similarities and differences between two things, in the same sentence. A student who writes a paragraph about the first thing, then a separate paragraph about the second, has not compared them &mdash; they have described two things side by side.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The mark scheme wants linked statements: <em>&ldquo;A is faster than B, whereas B is more accurate.&rdquo;</em> The connector words <strong className="text-[#0f4a9b]">&ldquo;whereas&rdquo;</strong>, <strong className="text-[#0f4a9b]">&ldquo;both&rdquo;</strong>, and <strong className="text-[#0f4a9b]">&ldquo;in contrast&rdquo;</strong> are what earn the comparison marks.
              </p>
            </div>

            {/* 4. Evaluate and Discuss */}
            <div className="my-6 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0a1f3d]">
                Evaluate and Discuss
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These appear heavily at A-Level and carry the highest marks per question. They ask for a balanced, two-sided answer and a supported judgement. Arguments for, arguments against, then a conclusion that actually decides something.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A student who argues only one side, however brilliantly, has answered half the question. The marks at the top of the scheme are reserved for the student who weighs both sides and then commits to a justified verdict.
              </p>
            </div>

            {/* EXAMINER NOTE 2 */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0a1f3d] text-white border-l-4 border-[#C7A24A] shadow-md my-6">
              <div className="flex items-center gap-2 text-[#E4C069] font-extrabold text-xs uppercase tracking-wider mb-2">
                <Bookmark className="w-4 h-4" /> Examiner&apos;s Note
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                Describe wants what, explain wants why, compare wants linked differences, evaluate wants both sides plus a verdict. Knowing which is which is worth more than knowing extra content.
              </p>
            </div>
          </section>

          {/* ── SECTION: HOW THE MARK SCHEME REALLY READS A COMMAND WORD ── */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d] mb-4">
              How the Mark Scheme Really Reads a Command Word
            </h2>
            <div className="text-[#1e293b] leading-relaxed space-y-4 mb-6">
              <p>
                Parents rarely see a mark scheme, so this part is worth understanding. When we mark, we are not rewarding effort or the amount written. We are matching what the student wrote against a list of specific points the command word requires.
              </p>
              <p>
                On an explain question worth four marks, the scheme usually lists four reasoning points. A student earns a mark each time they hit one, and writing three descriptive sentences that never reach a reason earns nothing, no matter how neat or long they are. This is why a student can fill the space, feel they did well, and still score low. They wrote plenty. They just did not write the type of thing the command word was pointing at.
              </p>
              <p>
                It also explains a comment parents hear a lot: <em>&ldquo;my child understands it, they just do not show it in exams.&rdquo;</em> Often the understanding is genuinely there. What is missing is the habit of aiming the answer at the command word so the understanding actually lands on the mark scheme. We wrote about that gap more fully in our guide on{' '}
                <a href="/blogs/physics-understanding-vs-marks" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">
                  Why Physics Understanding Does Not Mean High Marks
                </a>, and command words are one of the biggest reasons it happens.
              </p>
            </div>

            {/* Visual Mark Scheme Simulation */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 my-8">
              <h3 className="font-serif font-bold text-base sm:text-lg text-[#0a1f3d] mb-3 flex items-center gap-2">
                <Target className="w-5 h-5 text-[#0f4a9b]" /> 4-Mark Question Simulation: Student A vs Student B
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-red-50/70 border border-red-200">
                  <div className="font-bold text-red-900 mb-1 flex items-center justify-between">
                    <span>Student A (Describes):</span>
                    <span className="px-2 py-0.5 bg-red-200 text-red-800 rounded-full font-bold">1 / 4 Marks</span>
                  </div>
                  <p className="text-slate-700 italic mb-2">&ldquo;The temperature rises quickly. Then the enzyme changes shape and the test tube turns clear.&rdquo;</p>
                  <p className="text-red-700 text-xs font-semibold">Examiner: Descriptive observations given, but zero kinetic/active-site collision reasoning provided.</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div className="font-bold text-emerald-900 mb-1 flex items-center justify-between">
                    <span>Student B (Explains):</span>
                    <span className="px-2 py-0.5 bg-emerald-200 text-emerald-800 rounded-full font-bold">4 / 4 Marks</span>
                  </div>
                  <p className="text-slate-700 italic mb-2">&ldquo;Higher kinetic energy increases collision frequency between active sites and substrate [1]. Above optimum, hydrogen bonds break [2], altering active site geometry [3], so substrate no longer binds [4].&rdquo;</p>
                  <p className="text-emerald-700 text-xs font-semibold">Examiner: Directly hits all 4 sequential causation points on the mark scheme.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION: THE FIVE-SECOND HABIT THAT FIXES IT ── */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d] mb-4">
              The Five-Second Habit That Fixes It
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The fix is almost embarrassingly simple, which is why it works. Before writing a single word of an answer, your child does three things.
            </p>

            {/* 3 Step Habit Cards */}
            <div className="grid sm:grid-cols-3 gap-4 my-8">
              {[
                { step: 1, title: 'Circle the Command Word', desc: 'Physically circle it with their pen. This stops the brain from rushing into a blind data dump.' },
                { step: 2, title: 'Say What It Demands', desc: 'In their head: "This says explain, so I must give causes and mechanisms, not just descriptions."' },
                { step: 3, title: 'Check the Mark Tariff', desc: 'A 4-mark question wants roughly 4 linked points. This prevents under-answering or wasting time.' }
              ].map(item => (
                <div
                  key={item.step}
                  onClick={() => setHabitStep(item.step)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    habitStep === item.step
                      ? 'bg-gradient-to-br from-[#0a1f3d] to-[#12305a] text-white border-[#C7A24A] shadow-lg -translate-y-1'
                      : 'bg-white text-[#0a1f3d] border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-3 ${
                    habitStep === item.step ? 'bg-[#C7A24A] text-[#0a1f3d]' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {item.step}
                  </span>
                  <h3 className="font-bold text-base mb-2 font-serif">{item.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${habitStep === item.step ? 'text-slate-200' : 'text-slate-600'}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-slate-700 leading-relaxed">
              Three seconds each, before every question. It feels almost too small to matter, and it routinely moves a grade, because the content was never the problem. The aim was.
            </p>
          </section>

          {/* ── SECTION: HOW PARENTS CAN PRACTISE THIS AT HOME ── */}
          <section className="my-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d] mb-4">
              How Parents Can Practise This at Home
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              You do not need to know the subject to help with this. Command words are the same across biology, history and economics, so you can drill them without understanding the topic at all.
            </p>

            <div className="space-y-3 my-6">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0f4a9b] font-bold flex items-center justify-center shrink-0 text-xs">1</div>
                <div>
                  <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">Take any past paper</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Go through it together and just circle the command word in every question. Do not answer them. The circling is the skill.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0f4a9b] font-bold flex items-center justify-center shrink-0 text-xs">2</div>
                <div>
                  <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">Ask what each command word wants</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ask your child what each command word wants before they attempt the answer. If they can say &ldquo;describe wants what happens,&rdquo; they are already ahead of most of the exam hall.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0f4a9b] font-bold flex items-center justify-center shrink-0 text-xs">3</div>
                <div>
                  <h4 className="font-bold text-sm text-[#0a1f3d] mb-1">Mark against the mark scheme</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When they mark their own work against the mark scheme, ask one question: did the answer match the command word? Lost marks are very often a command-word mismatch, not a knowledge gap.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 italic">
              If you have not started working with past papers yet, our guide to{' '}
              <a href="/blogs/igcse-preparation-past-papers-final-step" className="text-[#0f4a9b] font-semibold underline hover:text-[#0a3a79]">
                Why Past Papers Are the Final Step, Not the First
              </a>{' '}
              explains how to sequence them so command-word practice fits in at the right stage.
            </p>
          </section>

          {/* ── SECTION: A QUICK REFERENCE CHEAT SHEET ── */}
          <section className="my-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#0f4a9b]">Desk Reference</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d]">
                  Quick Reference for Common Command Words
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              Keep this near your child&apos;s desk. It covers the command words that appear most often across IGCSE and A-Level papers.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {tags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedWordTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedWordTag === tag
                      ? 'bg-[#0a1f3d] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Table Container */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0a1f3d] text-white font-serif uppercase text-[11px] tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4 sm:px-5">Command Word</th>
                      <th className="py-3.5 px-4 sm:px-5">What It Wants</th>
                      <th className="py-3.5 px-4 sm:px-5">The Mark Is In</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredWords.map((row, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 sm:px-5 font-bold text-[#0a1f3d] whitespace-nowrap align-top">
                          <span className="inline-block px-2.5 py-1 rounded-md bg-[#0f4a9b]/10 text-[#0f4a9b] font-mono text-xs">
                            {row.word}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 sm:px-5 text-slate-700 align-top">
                          <p className="font-semibold text-[#0a1f3d] mb-1">{row.wants}</p>
                          <p className="text-[11px] text-slate-500 italic">{row.example}</p>
                        </td>
                        <td className="py-3.5 px-4 sm:px-5 font-medium text-emerald-800 bg-emerald-50/30 align-top">
                          {row.markIn}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── BRINGING IT TOGETHER ── */}
          <section className="my-12 text-[#1e293b] leading-relaxed space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d]">
              Bringing It Together
            </h2>
            <p>
              Command words are the quietest reason capable students underperform, and one of the easiest to fix. There is no new content to learn. There is just a word in every question that has been telling the student what to do all along, and a habit of reading it before the pen moves.
            </p>
            <p>
              A student who circles the command word, knows what it demands, and aims every sentence at it, will pull marks out of knowledge they already had. That is the fastest kind of improvement there is, and it starts with a past paper and a pen this evening, not with more revision.
            </p>
            <p>
              If your child is writing plenty and scoring less than they should, do not add more content. Watch how they read the question first. The marks are usually hiding in that one word they keep reading past.
            </p>
          </section>

          {/* ── DIAGNOSTIC CTA BANNER ── */}
          <section className="my-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0a1f3d] via-[#12305a] to-[#0a1f3d] text-white shadow-2xl border border-[#C7A24A]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A24A]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7A24A]/20 border border-[#C7A24A]/40 text-[#E4C069] text-xs font-extrabold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> Diagnostic Assessment
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                Find Out Where Your Child&apos;s Marks Are Really Going
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                A short diagnostic session with an Ustaad tutor puts your child through a timed question, then marks it against the real mark scheme and shows you exactly where the marks were lost. Very often it is command-word mismatches, not gaps in knowledge, which means the fix is quick. No teaching on the first day, just a clear picture of where the marks are leaking.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-2xl leading-relaxed">
                We match students across the UAE with tutors who are active examiners and know their exact board and tier, in Dubai, Abu Dhabi, Sharjah and every emirate, in person or online. If you have never worked with a tutor before, our guide to{' '}
                <a href="/blogs/10-questions-hiring-private-tutor-abu-dhabi" className="text-[#E4C069] font-bold underline hover:text-white">
                  ten honest questions to ask first
                </a>{' '}
                will help you judge the fit.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href="/contact#form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-[#0a1f3d] bg-gradient-to-r from-[#E4C069] to-[#C9A24C] hover:from-[#F0D58C] hover:to-[#D8B45E] transition-all shadow-lg hover:-translate-y-0.5"
                >
                  Book a Free Trial Session <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20book%20a%20command-word%20diagnostic%20session%20for%20my%20child."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Ustaad about a diagnostic session"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md shadow-[#25D366]/20"
                >
                  <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* ── FAQ ACCORDION SECTION ── */}
          <section className="my-14">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0a1f3d] mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#0a1f3d] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-[#0f4a9b]">
                      {activeFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {activeFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* ── ABOUT THE WRITERS / EDITORIAL BYLINE ── */}
          <section className="my-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0a1f3d] mb-4">
              About the Writers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              This guide comes from the people who teach and mark for Ustaad families every week, not an anonymous marketing desk. Nimra Shahzada writes our parent-facing guides on learning and the psychology of studying, and Nida Iqbal, who holds an MPhil in Education Leadership and Management, reviews them for accuracy. You can see who reviews Ustaad&apos;s academic content and how we keep it trustworthy on our{' '}
              <a href="/editorial" className="text-[#0f4a9b] font-bold underline hover:text-[#0a3a79]">
                editorial page
              </a>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href={BLOG.authorUrl}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0f4a9b] transition-all group"
              >
                <img
                  src="/images/team/nimra-shahzada-v2.jpg"
                  alt="Nimra Shahzada, Content Lead at Ustaad"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C7A24A]"
                />
                <div className="min-w-0">
                  <div className="font-bold text-sm text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                    {BLOG.author}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">{BLOG.authorRole}</div>
                </div>
              </a>

              <a
                href={BLOG.reviewerUrl}
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#0f4a9b] transition-all group"
              >
                <img
                  src="/images/team/nida-iqbal-v3.jpg"
                  alt="Nida Iqbal, Editorial Reviewer at Ustaad"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C7A24A]"
                />
                <div className="min-w-0">
                  <div className="font-bold text-sm text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors">
                    {BLOG.reviewer}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">{BLOG.reviewerRole}</div>
                </div>
              </a>
            </div>
          </section>

          {/* ── RELATED ARTICLES ── */}
          <section className="my-14">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0a1f3d] mb-6">
              Related Articles
            </h3>

            <div className="grid sm:grid-cols-3 gap-5">
              {RELATED_BLOGS.map(post => (
                <a
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-lg transition-all"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#0f4a9b] tracking-wider mb-1 block">
                        {post.category}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                    </div>
                    <span className="text-xs font-bold text-[#0f4a9b] inline-flex items-center gap-1 mt-3">
                      Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>
      </article>
    </Layout>
  );
}
