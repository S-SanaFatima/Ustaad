import { motion, useReducedMotion } from 'motion/react';
import {
  Sparkles, ArrowRight, ShieldCheck, BookOpen,
  Award, PenLine, Eye, FileCheck, GraduationCap, BadgeCheck,
  Users, Layers, Quote,
} from 'lucide-react';
import { Layout, GoldButton, FinalCTA } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

const TRUST_BADGES = [
  { icon: PenLine, label: 'Named writers' },
  { icon: Eye, label: 'Named reviewer' },
  { icon: BadgeCheck, label: 'UAE school focus' },
  { icon: ShieldCheck, label: 'No anonymous tips' },
];

const PROCESS_STEPS = [
  {
    icon: PenLine,
    title: 'Write',
    desc: 'A named writer drafts the guide from real UAE classroom and parent patterns.',
    tone: 'from-[#0f4a9b] to-[#0a3a79]',
  },
  {
    icon: GraduationCap,
    title: 'Contribute',
    desc: 'Subject specialists add worked examples, board notes, and fact checks where needed.',
    tone: 'from-[#1e5ba8] to-[#0f4a9b]',
  },
  {
    icon: FileCheck,
    title: 'Review',
    desc: 'Nida checks accuracy, clarity, and fit for UAE exam boards before anything goes live.',
    tone: 'from-[#C7A24A] to-[#A8892A]',
  },
  {
    icon: BookOpen,
    title: 'Publish',
    desc: 'The byline stays honest. You always know who wrote it and who approved it.',
    tone: 'from-[#0a3a79] to-[#061428]',
  },
];

const TEAM = [
  {
    name: 'Nimra Shahzada',
    href: '/authors/nimra-shahzada',
    role: 'Content Writer',
    badge: 'Writer',
    badgeClass: 'bg-[#0f4a9b]/10 text-[#0f4a9b] border-[#0f4a9b]/20',
    photo: '/images/team/nimra-shahzada-v2.jpg' as string | null,
    photoAlt: 'Nimra Shahzada, Content Writer at Ustaad UAE',
    objectPosition: 'center 18%',
    bio: 'Nimra writes about the study problems UAE parents see at home: hours of revision that still lose marks, unfinished homework, and exam stress before mocks. Her guides turn those worries into simple steps families can follow.',
    topics: ['Exam stress', 'Study habits', 'Parent guidance', 'IGCSE & A-Level'],
  },
  {
    name: 'Nida Iqbal',
    href: '/authors/nida-iqbal',
    role: 'Editorial Reviewer',
    badge: 'Reviewer',
    badgeClass: 'bg-[#C7A24A]/15 text-[#8a6d1f] border-[#C7A24A]/30',
    photo: '/images/team/nida-iqbal-v2.jpg' as string | null,
    photoAlt: 'Nida Iqbal, Editorial Reviewer at Ustaad UAE',
    objectPosition: 'center 18%',
    bio: 'Nida holds an MPhil in Education Leadership and Management. She checks every article before it is published so the advice stays correct, clear, and matched to how UAE schools teach and test.',
    topics: ['Editorial review', 'Curriculum accuracy', 'Parent clarity'],
  },
  {
    name: 'Ustaad Subject Specialists',
    href: '/authors/ustaad-subject-specialists',
    role: 'Contributing teachers',
    badge: 'Contributors',
    badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    photo: null as string | null,
    photoAlt: '',
    objectPosition: 'center',
    bio: 'Practising Maths, Science and English teachers who add worked examples, exam tips and fact checks. Many teach in UAE schools and prefer privacy, so we share subjects and experience instead of names. Nida reviews everything they send in.',
    topics: ['Maths', 'Physics & Chemistry', 'Biology', 'Exam technique'],
  },
];

const NAMED_TEAM = TEAM.filter((m) => m.photo);
const SPECIALIST_TEAM = TEAM.find((m) => !m.photo)!;

const TRUST_RULES = [
  {
    icon: PenLine,
    step: '01',
    title: 'Named authorship',
    text: 'Every article is written by a real person or a named group of teachers.',
  },
  {
    icon: Eye,
    step: '02',
    title: 'Qualified review',
    text: 'Every article is checked by Nida before it goes live.',
  },
  {
    icon: Users,
    step: '03',
    title: 'Open profiles',
    text: 'Each writer has a profile you can open to see their background and articles.',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'No anonymous tips',
    text: 'We never publish "anonymous expert tips" with no one behind them.',
  },
];

const MANIFESTO =
  'When you search for a tutor in Dubai or Abu Dhabi, you see a lot of noise: long tutor lists, anonymous blogs, and advice that could be from any country. This page exists so you always know who wrote what you are reading.';

function AnimatedManifestoText({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');
  const highlightFrom = words.length - 6; // "who wrote what you are reading."

  const wordClass = (i: number) => {
    if (i >= highlightFrom) {
      return 'text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A] font-semibold';
    }
    if (words[i] === 'Dubai' || words[i] === 'Abu' || words[i] === 'Dhabi,') {
      return 'text-[#0f4a9b] font-semibold';
    }
    if (words[i] === 'noise:') {
      return 'text-[#8a6d1f] font-semibold';
    }
    return undefined;
  };

  if (reduceMotion) {
    return (
      <p className="relative z-10 text-[#1a3358] text-lg sm:text-xl lg:text-[1.35rem] leading-[1.7] sm:leading-[1.75] font-medium tracking-[-0.015em]">
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className={wordClass(i)}>
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </p>
    );
  }

  return (
    <motion.p
      className="relative z-10 text-[#1a3358] text-lg sm:text-xl lg:text-[1.35rem] leading-[1.7] sm:leading-[1.75] font-medium tracking-[-0.015em]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.35, margin: '0px 0px -10% 0px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.028, delayChildren: 0.12 } },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block ${wordClass(i) ?? ''}`}
          variants={{
            hidden: { opacity: 0, y: 14, filter: 'blur(4px)' },
            visible: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
          {i < words.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function EditorialPage() {
  const editorialCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ustaad Editorial Team',
    url: 'https://ustaad.ae/editorial',
    description:
      'Real writers and named review for Ustaad study guides, exam tips, and parent guidance in the UAE.',
    isPartOf: { '@type': 'WebSite', name: 'Ustaad', url: 'https://ustaad.ae' },
    publisher: {
      '@type': 'EducationalOrganization',
      '@id': 'https://ustaad.ae/#organization',
      name: 'Ustaad — Private Tutors UAE',
      url: 'https://ustaad.ae',
    },
  };

  const editorialTeamItemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Editorial writers and reviewers',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Person',
          name: 'Nimra Shahzada',
          url: 'https://ustaad.ae/authors/nimra-shahzada',
          jobTitle: 'Content Writer, Study and Exam Topics',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Person',
          name: 'Nida Iqbal',
          url: 'https://ustaad.ae/authors/nida-iqbal',
          jobTitle: 'Editorial Reviewer, MPhil in Education Leadership',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'OrganizationRole',
          roleName: 'Contributing teachers, names kept private',
          memberOf: {
            '@type': 'Organization',
            name: 'Ustaad Subject Specialists',
            url: 'https://ustaad.ae/authors/ustaad-subject-specialists',
          },
        },
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title="Ustaad Editorial Team | Real Writers, Real Review, UAE"
        description="Meet the Ustaad editorial team: real writers and a named reviewer behind every study guide, exam tip, and parent advice article for UAE schools."
        canonical="/editorial"
        robots="index,follow"
        schema={[
          localBusinessSchema,
          editorialCollectionSchema,
          editorialTeamItemListSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Editorial', url: '/editorial' },
          ]),
        ]}
      />

      <article className="bg-white">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#060f22] via-[#0a1f3d] to-[#0f4a9b] text-white">
          <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#C7A24A]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-[#5fd3e6]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 lg:pt-20 lg:pb-16">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-5">
                <Sparkles className="h-3.5 w-3.5 text-[#f0c96a]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">Real writers, real review</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 max-w-3xl">
                Meet the people behind{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c96a] to-[#C7A24A]">every Ustaad article</span>
              </h1>

              <p className="text-blue-100/85 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
                Every study guide is written by a real person or a named group of teachers, and checked by a qualified reviewer before it goes live. Here is who writes, who checks, and how we keep the advice honest for UAE families.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <GoldButton href="/blogs" className="px-6 py-3 text-sm shadow-md">
                  Read our latest articles
                </GoldButton>
                <a
                  href="/contact#form"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold border border-white/25 bg-white/5 hover:bg-white/10 text-white transition"
                >
                  Book a free trial
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TRUST_BADGES.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-3.5 py-3"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#C7A24A]/20 text-[#f0c96a] flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-white/90 leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-14 lg:py-20 bg-[#f4f7fc] border-b border-slate-100 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(rgba(15,74,155,0.06) 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
          <div className="absolute -top-16 -right-20 w-72 h-72 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-[#0f4a9b]/8 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10 lg:mb-12"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-bold text-[#0f4a9b] mb-3.5 shadow-sm">
                <Layers className="h-3.5 w-3.5" />
                Editorial process
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight">
                How an article{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]">
                  reaches you
                </span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
                Four clear steps. No anonymous blogs. No unchecked tips.
              </p>
            </motion.div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {/* Desktop connector line */}
              <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px bg-gradient-to-r from-[#0f4a9b]/20 via-[#C7A24A]/45 to-[#0f4a9b]/20 pointer-events-none" aria-hidden />

              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.25, margin: '0px 0px -8% 0px' }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-[0_4px_18px_rgba(15,74,155,0.04)] hover:border-[#0f4a9b]/25 hover:shadow-[0_18px_40px_rgba(15,74,155,0.12)] transition-shadow duration-300 overflow-hidden touch-manipulation"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A24A]/0 to-transparent group-hover:via-[#C7A24A] transition-all duration-300" />
                  <div className="absolute -right-8 -bottom-8 w-28 h-28 rounded-full bg-[#0f4a9b]/[0.03] group-hover:bg-[#0f4a9b]/[0.07] transition-colors duration-300 pointer-events-none" />

                  <div className="relative flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.tone} text-white flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-300`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span className="inline-flex items-center justify-center min-w-[2rem] h-8 px-2 rounded-full bg-[#f4f7fc] border border-slate-100 text-[11px] font-black text-[#0f4a9b]/70 group-hover:bg-[#0f4a9b] group-hover:text-white group-hover:border-[#0f4a9b] transition-all duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="relative text-lg font-extrabold text-[#0a1f3d] mb-2 group-hover:text-[#0f4a9b] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="relative text-sm text-gray-500 leading-relaxed group-hover:text-[#3a4f6e] transition-colors duration-300">
                    {step.desc}
                  </p>

                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -bottom-3 z-20 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm sm:hidden">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C7A24A]" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-14 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f6f9fd] to-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,640px)] h-[320px] rounded-full bg-[#0f4a9b]/[0.04] blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-[2rem] border border-[#0f4a9b]/10 bg-white/90 backdrop-blur-sm px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_20px_60px_rgba(15,74,155,0.08)]"
            >
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C7A24A]/70 to-transparent" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0a1f3d] text-white px-4 py-1.5 shadow-md">
                  <Quote className="h-3.5 w-3.5 text-[#f0c96a]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Why this page exists</span>
                </div>
              </div>

              <div
                className="pointer-events-none select-none absolute top-6 left-5 sm:left-8 text-[5.5rem] sm:text-[7rem] leading-none font-serif text-[#0f4a9b]/[0.07]"
                aria-hidden
              >
                “
              </div>

              <AnimatedManifestoText text={MANIFESTO} />

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 h-[2px] origin-left rounded-full bg-gradient-to-r from-[#0f4a9b] via-[#C7A24A] to-transparent"
              />
            </motion.div>
          </div>
        </section>

        <section className="pb-16 lg:pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f4a9b]/5 border border-[#0f4a9b]/12 text-[11px] font-bold text-[#0f4a9b] mb-2">
                  <Users className="h-3.5 w-3.5" />
                  The team
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1f3d]">Who is behind our articles</h2>
              </div>
              <div className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-bold text-[#8a6d1f] bg-[#C7A24A]/10 px-3 py-1.5 rounded-full border border-[#C7A24A]/25">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified authorship
              </div>
            </div>

            {/* Non-photo profile first */}
            <motion.article
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="group relative mb-6 overflow-hidden rounded-[1.75rem] border border-[#0f4a9b]/15 bg-gradient-to-br from-[#061428] via-[#0a1f3d] to-[#0f4a9b] text-white shadow-[0_16px_40px_rgba(10,31,61,0.18)]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#C7A24A]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 p-6 sm:p-8">
                <div className="shrink-0 flex items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <GraduationCap className="h-10 w-10 sm:h-11 sm:w-11 text-[#f0c96a]" />
                  </div>
                  <div className="md:hidden">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border bg-white/10 text-[#f0c96a] border-white/20 mb-2`}>
                      {SPECIALIST_TEAM.badge}
                    </span>
                    <h3 className="text-xl font-extrabold leading-snug">
                      <a href={SPECIALIST_TEAM.href} className="hover:text-[#f0c96a] transition">
                        {SPECIALIST_TEAM.name}
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-blue-100/80 mt-0.5">{SPECIALIST_TEAM.role}</p>
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="hidden md:block mb-2">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border bg-white/10 text-[#f0c96a] border-white/20 mb-2">
                      {SPECIALIST_TEAM.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold leading-snug">
                      <a href={SPECIALIST_TEAM.href} className="hover:text-[#f0c96a] transition">
                        {SPECIALIST_TEAM.name}
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-blue-100/85 mt-1">{SPECIALIST_TEAM.role}</p>
                  </div>
                  <p className="text-sm sm:text-[15px] text-blue-100/80 leading-relaxed mb-4 max-w-3xl">
                    {SPECIALIST_TEAM.bio}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {SPECIALIST_TEAM.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/10 text-white border border-white/15"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <a
                    href={SPECIALIST_TEAM.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f0c96a] group-hover:gap-2.5 transition-all"
                  >
                    View contributor profile
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>

            {/* Named profiles with photos */}
            <div className="grid sm:grid-cols-2 gap-5">
              {NAMED_TEAM.map((member, i) => (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col bg-white rounded-[1.75rem] border border-slate-200/90 shadow-[0_8px_30px_rgba(15,74,155,0.06)] overflow-hidden hover:shadow-[0_18px_44px_rgba(15,74,155,0.12)] hover:border-[#0f4a9b]/20 transition-shadow duration-300"
                >
                  <div className="relative pt-8 pb-5 px-6 bg-gradient-to-b from-[#e8eef8] via-[#f4f7fc] to-white flex flex-col items-center">
                    <span className={`absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border bg-white/95 shadow-sm ${member.badgeClass}`}>
                      {member.badge}
                    </span>

                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-br from-[#0f4a9b] via-[#C7A24A] to-[#0f4a9b] shadow-[0_12px_28px_rgba(15,74,155,0.2)] group-hover:shadow-[0_16px_36px_rgba(15,74,155,0.28)] transition-shadow duration-300">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white border-[3px] border-white">
                        <img
                          src={member.photo!}
                          alt={member.photoAlt}
                          className="w-full h-full object-cover scale-[1.08] group-hover:scale-[1.14] transition-transform duration-500"
                          style={{ objectPosition: member.objectPosition }}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 px-6 pb-6 pt-1 text-center sm:text-left">
                    <h3 className="text-xl font-extrabold text-[#0a1f3d] leading-snug mb-1">
                      <a href={member.href} className="hover:text-[#0f4a9b] transition">
                        {member.name}
                      </a>
                    </h3>
                    <p className="text-sm font-semibold text-[#0f4a9b] mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{member.bio}</p>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mb-5">
                      {member.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#f4f7fc] text-[#0a1f3d] border border-slate-100"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <a
                      href={member.href}
                      className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-sm font-bold text-[#0f4a9b] group-hover:gap-2.5 transition-all"
                    >
                      View full profile
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-[#f4f7fc] via-white to-[#f4f7fc]">
          <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgba(15,74,155,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -left-16 w-96 h-96 rounded-full bg-[#0f4a9b]/8 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-11"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C7A24A]/30 text-[11px] font-bold text-[#8a6d1f] mb-4 shadow-sm">
                <Award className="h-3.5 w-3.5 text-[#C7A24A]" />
                Trust standards
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] tracking-tight">
                How we keep articles{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f4a9b] to-[#C7A24A]">
                  trustworthy
                </span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-md mx-auto">
                Simple rules. Easy to check. Built into every piece we publish.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-12">
              {TRUST_RULES.map(({ icon: Icon, step, title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,74,155,0.04)] hover:border-[#0f4a9b]/25 hover:shadow-[0_18px_44px_rgba(15,74,155,0.12)] transition-shadow duration-300 overflow-hidden cursor-default"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A24A]/0 to-transparent group-hover:via-[#C7A24A] transition-all duration-300" />
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[#0f4a9b]/[0.03] group-hover:bg-[#0f4a9b]/[0.07] transition-colors duration-300 pointer-events-none" />

                  <div className="relative flex items-start gap-4">
                    <div className="relative shrink-0">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0f4a9b] to-[#0a1f3d] text-white flex items-center justify-center shadow-md group-hover:shadow-[0_8px_20px_rgba(15,74,155,0.35)] group-hover:scale-105 transition-all duration-300">
                        <Icon className="h-5 w-5 group-hover:rotate-[-8deg] transition-transform duration-300" />
                      </div>
                      <span className="absolute -bottom-1.5 -right-1.5 min-w-[22px] h-[22px] px-1 rounded-full bg-[#C7A24A] text-white text-[10px] font-black flex items-center justify-center shadow-sm">
                        {step}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-base sm:text-lg font-extrabold text-[#0a1f3d] group-hover:text-[#0f4a9b] transition-colors duration-300">
                          {title}
                        </h3>
                        <ArrowRight className="h-4 w-4 text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#C7A24A] transition-all duration-300 shrink-0" />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-[#3a4f6e] transition-colors duration-300">
                        {text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <ul className="sr-only">
              {TRUST_RULES.map((r) => (
                <li key={r.title}>{r.title}: {r.text}</li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-[#0f4a9b]/15 bg-gradient-to-br from-[#0a1f3d] via-[#0f3a7a] to-[#1e5ba8] p-6 sm:p-8 text-white overflow-hidden relative group/cta"
            >
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#C7A24A]/15 rounded-full blur-3xl pointer-events-none group-hover/cta:bg-[#C7A24A]/25 transition-colors duration-500" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 text-[#f0c96a] text-xs font-bold uppercase tracking-wider mb-2">
                    <BookOpen className="h-3.5 w-3.5" />
                    Knowledge base
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-2">See the articles this team writes</h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Study guides, exam tips, and parent advice, updated regularly. Open a writer profile, then{' '}
                    <a href="/contact#form" className="text-[#f0c96a] font-semibold underline underline-offset-2 hover:text-white transition">book a free trial</a>{' '}
                    if you want the same problems checked with your child.
                  </p>
                </div>
                <a
                  href="/blogs"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-[#0a1f3d] bg-white hover:bg-[#f0c96a] hover:scale-[1.03] active:scale-[0.98] transition-all shadow-md text-sm shrink-0"
                >
                  Visit the blog
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500">
              <p className="font-medium text-gray-600">Ustaad, private tutoring UAE since 2015. Real writers, qualified review, honest bylines.</p>
              <p className="flex flex-wrap gap-x-3 gap-y-1">
                <a href="/blogs" className="text-[#0f4a9b] font-semibold hover:underline">Blog</a>
                <a href="/about" className="text-[#0f4a9b] font-semibold hover:underline">About</a>
                <a href="/tutors" className="text-[#0f4a9b] font-semibold hover:underline">Tutors</a>
                <a href="/how-it-works" className="text-[#0f4a9b] font-semibold hover:underline">How it works</a>
              </p>
            </div>
          </div>
        </section>
      </article>

      <FinalCTA
        title="Want advice matched to your child's board?"
        subtitle="Book a free session. We will look at the same gaps you are reading about, with a tutor who knows the exact curriculum."
        button1Text="Book a Free Trial"
        button2Text="Chat on WhatsApp"
        button2Href="https://wa.me/971561249005?text=Hi%20Ustaad%2C%20I%27d%20like%20to%20book%20a%20free%20session."
      />
    </Layout>
  );
}
