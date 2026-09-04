import { motion } from 'motion/react';
import { GradientHeadingText } from './GradientHeadingText';
import { personSchema } from './schemas';
import {
  ShieldCheck,
  BookOpen,
  Clock,
  Sparkles,
  ArrowUpRight,
  Crown,
} from 'lucide-react';

export type TeamMember = {
  name: string;
  role: string;
  tag: string;
  desc: string;
  oneLiner: string;
  focus: string[];
  initials: string;
  profileHref?: string;
  image: string;
  imageAlt: string;
  objectPosition: string;
};

export const TEAM: TeamMember[] = [
  {
    name: 'F. Zaman',
    role: 'Founder & Academic Director',
    tag: 'Academic Direction',
    oneLiner: "Sets tutoring standards and curriculum strategy across British, IB, and American boards in the UAE.",
    desc: "Sets Ustaad's academic direction and tutoring standards, and oversees how tutors are selected and reviewed across British, IB, and American curriculums.",
    focus: ['10+ Yrs UAE', 'Curriculum Strategy'],
    initials: 'FZ',
    image: '/images/team/f-zaman-v2.jpg',
    imageAlt: 'F. Zaman, Founder and Academic Director at Ustaad',
    objectPosition: 'center 14%',
  },
  {
    name: 'Nida Iqbal',
    role: 'Tutor Quality & Development Lead',
    tag: 'Tutor Quality',
    oneLiner: "Oversees top 5% tutor vetting, live classroom observations, and pedagogy standards.",
    desc: 'Oversees tutor selection, classroom observation, and ongoing pedagogy training so academic standards stay consistent.',
    focus: ['Tutor Vetting', 'Pedagogy Audits'],
    initials: 'NI',
    profileHref: '/authors/nida-iqbal',
    image: '/images/team/nida-iqbal-v2.jpg',
    imageAlt: 'Nida Iqbal, Tutor Quality and Development Lead at Ustaad',
    objectPosition: 'center 16%',
  },
  {
    name: 'Nimra Shahzada',
    role: 'Content Lead & Academic Consultant',
    tag: 'Exam Research',
    oneLiner: "Researches UAE student challenges and authors board-exact revision blueprints and guides.",
    desc: 'Researches learning challenges faced by UAE students and authors clear revision guides and exam blueprints.',
    focus: ['Exam Blueprints', 'Board Criteria'],
    initials: 'NS',
    profileHref: '/authors/nimra-shahzada',
    image: '/images/team/nimra-shahzada-v2.jpg',
    imageAlt: 'Nimra Shahzada, Content Lead and Academic Consultant at Ustaad',
    objectPosition: 'center 16%',
  },
  {
    name: 'Mehwish Masood',
    role: 'Academic Coordinator',
    tag: 'Operations',
    oneLiner: "Matches students with compatible tutors suited to their board, syllabus, and learning style.",
    desc: 'Manages lesson operations and matches each student with a tutor suited to their board, year group, and learning style.',
    focus: ['Tutor Matching', 'Syllabus Alignment'],
    initials: 'MM',
    image: '/images/team/mehwish-masood-v2.jpg',
    imageAlt: 'Mehwish Masood, Academic Coordinator at Ustaad',
    objectPosition: 'center 16%',
  },
  {
    name: 'Maheen Gul',
    role: 'Head of Admissions & Parent Relations',
    tag: 'Parent Relations',
    oneLiner: "Dedicated liaison guiding families through consultation, tutor enrolment, and progress reports.",
    desc: 'First point of contact for families. Guides parents through consultation, enrolment, and ongoing progress updates.',
    focus: ['Family Liaison', 'Progress Updates'],
    initials: 'MG',
    image: '/images/team/maheen-gul-v2.jpg',
    imageAlt: 'Maheen Gul, Head of Admissions and Parent Relations at Ustaad',
    objectPosition: 'center 16%',
  },
  {
    name: 'Imran Ahmed',
    role: 'Student Progress & Outcomes Advisor',
    tag: 'Student Outcomes',
    oneLiner: 'Tracks student progress, reviews learning outcomes, and flags where extra academic support may be needed.',
    desc: 'Tracks student progress, reviews learning outcomes, and helps identify where additional academic support may be needed.',
    focus: ['Progress Tracking', 'Outcome Reviews'],
    initials: 'IA',
    image: '/images/team/imran-ahmed-v2.jpg',
    imageAlt: 'Imran Ahmed, Student Progress and Outcomes Advisor at Ustaad',
    objectPosition: 'center 14%',
  },
];

const [FOUNDER, ...FACULTY] = TEAM;

export const teamPersonSchemas = TEAM.map((member) =>
  personSchema({
    name: member.name,
    jobTitle: member.role,
    description: member.desc,
    image: member.image,
    ...(member.profileHref && { url: member.profileHref }),
    ...(member.profileHref && {
      sameAs: 'https://www.linkedin.com/company/ustaad-ae',
    }),
  })
);

const viewportReplay = { once: false, amount: 0.25, margin: '0px 0px -6% 0px' } as const;

function FacultyCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportReplay}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-[0_6px_22px_rgba(15,74,155,0.05)] overflow-hidden hover:border-[#0f4a9b]/25 hover:shadow-[0_16px_40px_rgba(15,74,155,0.12)] transition-shadow duration-300"
    >
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A24A]/0 to-transparent group-hover:via-[#C7A24A] transition-all duration-300 z-10" />

      <div className="relative aspect-[4/4.6] sm:aspect-[4/4.4] overflow-hidden bg-[#e8eef8]">
        <img
          src={member.image}
          alt={member.imageAlt}
          className="w-full h-full object-cover scale-[1.02] group-hover:scale-110 transition-transform duration-700 ease-out"
          style={{ objectPosition: member.objectPosition }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/85 via-[#0a1f3d]/20 to-transparent" />
        <span className="absolute top-2.5 left-2.5 max-w-[calc(100%-1.25rem)] truncate px-2 py-0.5 rounded-full bg-white/95 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.06em] text-[#0f4a9b] shadow-sm">
          {member.tag}
        </span>
        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3.5 sm:right-3.5">
          <h3 className="text-sm sm:text-base font-bold text-white leading-snug tracking-tight">
            {member.name}
          </h3>
          <p className="text-[11px] sm:text-[12px] font-medium text-[#f0d080]/95 mt-0.5 leading-snug line-clamp-2">
            {member.role}
          </p>
        </div>
      </div>

      <div className="px-3 py-3 sm:px-3.5 sm:py-3.5 flex-1 flex flex-col">
        <p className="text-xs sm:text-[13px] text-[#3a4f6e] leading-relaxed flex-1 line-clamp-4 sm:line-clamp-none">
          {member.oneLiner}
        </p>
        <div className="mt-2.5 pt-2.5 sm:mt-3 sm:pt-3 border-t border-slate-100 flex items-center justify-between gap-1.5">
          <div className="flex flex-wrap gap-1 min-w-0">
            {member.focus.slice(0, 1).map((f) => (
              <span
                key={f}
                className="text-[9px] sm:text-[10px] font-semibold text-[#0a1f3d]/70 bg-[#f4f7fc] px-1.5 sm:px-2 py-0.5 rounded-md border border-[#0f4a9b]/8 truncate max-w-full"
              >
                {f}
              </span>
            ))}
            {member.focus[1] && (
              <span className="hidden sm:inline-flex text-[10px] font-semibold text-[#0a1f3d]/70 bg-[#f4f7fc] px-2 py-0.5 rounded-md border border-[#0f4a9b]/8">
                {member.focus[1]}
              </span>
            )}
          </div>
          {member.profileHref && (
            <a
              href={member.profileHref}
              className="shrink-0 text-[10px] sm:text-[11px] font-bold text-[#0f4a9b] hover:text-[#C7A24A] transition-colors flex items-center gap-0.5"
            >
              Bio <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-white to-[#F4F8FD] isolate"
      aria-labelledby="team-heading"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]" style={{ backgroundImage: 'radial-gradient(rgba(15,74,155,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#C7A24A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0f4a9b]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-10 sm:mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReplay}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C7A24A]/10 text-[#A8892A] text-xs font-extrabold rounded-full mb-3 border border-[#C7A24A]/25 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C7A24A]" />
            Academic Leadership
          </div>
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-black text-[#0a1f3d] tracking-tight"
          >
            <GradientHeadingText text="The Team Behind Ustaad" />
          </h2>
          <p className="text-[#3a4f6e] text-[15px] leading-relaxed mt-2.5 tracking-[-0.01em] max-w-xl">
            Experienced educators and curriculum leads actively overseeing lesson quality and student progress.
          </p>
        </motion.div>

        {/* Founder — featured card with balanced portrait */}
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReplay}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mb-8 sm:mb-10 overflow-hidden rounded-[1.5rem] border border-[#0f4a9b]/12 bg-white shadow-[0_14px_36px_rgba(15,74,155,0.08)]"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C7A24A]/60 to-transparent" />

          <div className="relative flex flex-col sm:flex-row gap-5 sm:gap-6 p-4 sm:p-5 lg:p-6 items-stretch sm:items-center">
            <div className="relative mx-auto sm:mx-0 w-full max-w-[200px] sm:max-w-none sm:w-[200px] lg:w-[220px] shrink-0">
              <div className="relative aspect-[3.4/4] rounded-2xl overflow-hidden bg-[#e8eef8] ring-1 ring-[#0f4a9b]/10 shadow-md">
                <img
                  src={FOUNDER.image}
                  alt={FOUNDER.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  style={{ objectPosition: FOUNDER.objectPosition }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/35 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 sm:left-3 sm:translate-x-0 flex flex-wrap justify-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C7A24A] text-[#0a1f3d] text-[9px] font-extrabold uppercase tracking-[0.1em] shadow-md">
                  <Crown className="w-3 h-3" />
                  Founder
                </span>
              </div>
            </div>

            <div className="relative flex-1 min-w-0 text-center sm:text-left py-1 sm:py-2 sm:pr-2">
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportReplay}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#0f4a9b]/8 text-[10px] font-bold uppercase tracking-[0.08em] text-[#0f4a9b] border border-[#0f4a9b]/12">
                    {FOUNDER.tag}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C7A24A]">
                    Leading Ustaad since day one
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-[#0a1f3d] tracking-tight leading-tight mb-1">
                  {FOUNDER.name}
                </h3>
                <p className="text-sm font-semibold text-[#0f4a9b] mb-3">
                  {FOUNDER.role}
                </p>
                <p className="text-[13px] sm:text-[14px] text-[#3a4f6e] leading-relaxed mb-4 max-w-2xl mx-auto sm:mx-0">
                  {FOUNDER.desc}
                </p>

                <blockquote className="relative mb-4 max-w-2xl mx-auto sm:mx-0 rounded-xl border border-[#C7A24A]/25 bg-gradient-to-br from-[#fdfaf3] to-[#f8fafd] px-4 py-3.5 sm:px-5 sm:py-4 text-left">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#C7A24A] mb-2">
                    Founder Message
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-[#0a1f3d] leading-relaxed font-medium italic">
                    &ldquo;Ustaad was built on a simple belief: the right teacher can change more than a student&apos;s grades, they can build confidence, inspire ambition, and shape a better future.&rdquo;
                  </p>
                </blockquote>

                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {FOUNDER.focus.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center text-[11px] font-bold text-[#0a1f3d] bg-[#f4f7fc] px-2.5 py-1 rounded-full border border-[#0f4a9b]/10"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.article>

        {/* Faculty grid — smaller cards below */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReplay}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.12em] text-[#0a1f3d]/55 shrink-0">
              Faculty &amp; academic team
            </h3>
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
          </div>
          <span className="self-start text-[11px] font-bold text-[#0f4a9b]/70 bg-[#0f4a9b]/5 px-2.5 py-1 rounded-full border border-[#0f4a9b]/10">
            {FACULTY.length} members
          </span>
        </motion.div>

        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
          {FACULTY.map((member, i) => (
            <FacultyCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReplay}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl p-5 sm:p-6 shadow-[0_12px_32px_rgba(15,74,155,0.18)]"
          style={{ background: 'linear-gradient(135deg, #0a1f3d 0%, #0d2c58 45%, #0f4a9b 100%)' }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-left">
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-3 first:pt-0">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#f0d080]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white tracking-tight">Top 5% Tutor Acceptance</p>
                <p className="text-[12px] text-blue-100/70 leading-snug mt-0.5">Rigorous 3-tier vetting &amp; live lessons</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-[#f0d080]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white tracking-tight">Curriculum Specialists Only</p>
                <p className="text-[12px] text-blue-100/70 leading-snug mt-0.5">Board-exact Cambridge, IB &amp; AP tutors</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 sm:pt-0 sm:px-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#f0d080]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white tracking-tight">Continuous Quality Audits</p>
                <p className="text-[12px] text-blue-100/70 leading-snug mt-0.5">Ongoing reviews by academic directors</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
