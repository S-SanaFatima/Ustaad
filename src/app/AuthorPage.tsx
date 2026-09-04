import { useLocation } from 'react-router-dom';
import { Linkedin, BookOpen, BadgeCheck } from 'lucide-react';
import { Layout, GoldButton, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { breadcrumbSchema, personSchema, profilePageSchema, localBusinessSchema } from './shared/schemas';
import { getAuthorBySlug, AUTHORS } from '../content/authors';

export default function AuthorPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/authors\//, '').replace(/\/$/, '');
  const author = getAuthorBySlug(slug);

  if (!author) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-extrabold text-[#0a1f3d] mb-4">Author not found</h1>
          <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">Meet the editorial team</a>
        </div>
      
          {/* Detailed Editorial Guidelines & Credentials */}
          <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 text-xs text-gray-600 leading-relaxed space-y-3">
            <h3 className="text-sm font-bold text-[#0a1f3d]">About Our Educator & Author Profiles</h3>
            <p>Every author profile at Ustaad represents a verified educational specialist actively involved in UAE curriculum planning, exam strategy formulation, or student mentorship. Our writers and reviewers possess direct experience with Cambridge International Examinations (CIE), Pearson Edexcel, AQA, the International Baccalaureate (IB) Organization, and the College Board (AP).</p>
            <p>By combining classroom teaching experience with rigorous editorial standards, our team ensures that all parent guides, revision breakdowns, and study strategies reflect actual exam board mark schemes, reward criteria, and current UAE school term demands.</p>
            <p>For questions regarding article citations, editorial guidelines, or contributing to Ustaad UAE educational publications, contact our editorial desk at <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] font-semibold underline">support@ustaad.ae</a>.</p>
          </div>

    
          <div className="mt-6 bg-[#0a1f3d] text-white rounded-2xl p-6 text-xs leading-relaxed space-y-2">
            <h4 className="font-bold text-sm text-[#C7A24A]">Direct Academic Consultation with Ustaad Educators</h4>
            <p className="text-slate-200">Our authoring team works directly with UAE parents to assess individual learning gaps, recommend subject pathways, and match curriculum-specialist tutors. If you would like to request specific topic coverage or discuss your child's academic goals for the upcoming exam series, our educational team is available to assist.</p>
          </div>

    
          <div className="mt-4 bg-white p-6 rounded-2xl border border-slate-200/80 text-xs text-gray-600 leading-relaxed space-y-2">
            <h4 className="font-bold text-sm text-[#0a1f3d]">UAE Curriculum Alignment & Quality Assurance</h4>
            <p>Our authors actively collaborate with international school department heads across Abu Dhabi, Dubai, and Sharjah. We ensure that revision advice, topic summaries, and exam techniques reflect official Cambridge 0580/0625/0620, Edexcel 4MA1/4PH1/4CH1, and IB Diploma mark scheme requirements. Continuous updates are published to keep pace with syllabus revisions and exam board command word expectations.</p>
          </div>

    
          <div className="mt-4 bg-slate-100 p-4 rounded-xl text-xs text-gray-600 leading-relaxed">
            <p className="font-bold text-[#0a1f3d]">Continuous Educational Content Reviews</p>
            <p>Our editorial team conducts bi-annual audits across all published study guides to integrate updated mark schemes, past paper question updates, and revised exam board syllabus codes for UAE international schools.</p>
          </div>

    <div className="text-center text-xs text-gray-500 py-3 bg-slate-50 border-t">Expert Academic Guidance for International School Students across Cambridge, Edexcel, IB, and AP Curricula in Dubai & Abu Dhabi.</div>
</Layout>
    );
  }

  const profileUrl = `/authors/${author.slug}`;
  const person = {
    name: author.name,
    url: profileUrl,
    jobTitle: author.jobTitle,
    description: author.credentials,
    image: author.photo,
    sameAs: author.linkedIn ? [author.linkedIn] : undefined,
  };

  return (
    <Layout>
      <SEOHead
        title={`${author.name} | ${author.role} | Ustaad Editorial`}
        description={author.credentials}
        canonical={profileUrl}
        ogImage={author.photo}
        author={author.name}
        schema={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Editorial', url: '/editorial' },
            { name: author.name, url: profileUrl },
          ]),
          personSchema(person),
          profilePageSchema(person),
        ]}
      />

      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-10 items-start">
            <div className="w-full max-w-[220px] mx-auto md:mx-0 aspect-square rounded-2xl border border-slate-100 shadow-sm overflow-hidden bg-[#e8eef8] shrink-0">
              {author.photo ? (
                <img
                  src={author.photo}
                  alt={author.photoAlt}
                  className="w-full h-full object-cover object-[center_20%]"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center font-bold text-[5rem] notranslate" translate="no">
                  {author.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-2">Ustaad Editorial</p>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-[#0a1f3d] mb-2">
                <GradientHeadingText text={author.name} />
              </h1>
              <p className="text-lg font-semibold text-gray-700 mb-3">{author.role}</p>
              <p className="text-sm text-gray-600 flex items-start gap-2 mb-4">
                <BadgeCheck className="h-4 w-4 text-[#C7A24A] mt-0.5 shrink-0" />
                {author.credentials}
              </p>
              {author.linkedIn && (
                <a href={author.linkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] hover:underline mb-6">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              )}
              <div className="flex flex-wrap gap-2 mb-6">
                {author.subjects.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full text-xs font-bold bg-[#0f4a9b]/8 text-[#0f4a9b] border border-[#0f4a9b]/15">{s}</span>
                ))}
              </div>
              <GoldButton href="/contact#form" className="px-6 py-3 text-sm">Book a Free Trial</GoldButton>
            </div>
          </div>

          <div className="mt-12 space-y-4 text-gray-700 leading-relaxed">
            {author.bio.map((p, i) => (
              <p key={i} className="text-base lg:text-lg">{p}</p>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="text-2xl font-extrabold text-[#0a1f3d] mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-[#0f4a9b]" /> Articles authored &amp; reviewed
            </h2>
            <ul className="space-y-3">
              {author.articles.map((a) => (
                <li key={a.href} className="flex items-baseline gap-3 border-b border-slate-100 pb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C7A24A] w-20 shrink-0">{a.role}</span>
                  <a href={a.href} className="font-semibold text-[#0f4a9b] hover:underline">{a.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ustaad Editorial & E-E-A-T Review Standards */}
          <div className="mt-14 bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#0a1f3d] mb-3">Our E-E-A-T Editorial Commitment</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">At Ustaad UAE, every article is produced with strict adherence to Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Academic guidance for UAE parents and students requires factual accuracy, current curriculum alignment, and practical classroom relevance.</p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-xs text-gray-600 pt-4 border-t border-slate-100">
              <div>
                <h3 className="font-bold text-[#0a1f3d] text-sm mb-1.5">1. Classroom & Exam Alignment</h3>
                <p className="leading-relaxed">Content is grounded in actual Cambridge International, Pearson Edexcel, International Baccalaureate (IB), and College Board AP specifications taught across schools in Abu Dhabi and Dubai.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0a1f3d] text-sm mb-1.5">2. Two-Stage Editorial Review</h3>
                <p className="leading-relaxed">Every piece written by our content specialists undergoes rigorous technical and pedagogical review by Nida Iqbal (MPhil in Education Leadership) prior to publication.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0a1f3d] text-sm mb-1.5">3. Practical Parent Guidance</h3>
                <p className="leading-relaxed">We focus on actionable advice: helping parents identify early exam stress, structure home study routines, and understand mark scheme reward criteria.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#0a1f3d] text-sm mb-1.5">4. Regular Content Audits</h3>
                <p className="leading-relaxed">Our editorial board updates published articles annually to reflect changes in examination board syllabus codes, mark schemes, and UAE school term structures.</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-gray-600 leading-relaxed">
              <h3 className="font-bold text-[#0a1f3d] text-sm mb-2">Independent Peer Review & Accuracy Principles</h3>
              <p className="mb-2">Before any study guide or subject breakdown is released, content undergoes double-blind verification for formula accuracy, terminology compliance, and mark scheme precision. Our contributors maintain active contact with subject leaders and exam board representatives across international schools in Abu Dhabi, Dubai, and Sharjah.</p>
              <p>We invite parents, educators, and curriculum specialists to share feedback or suggest topics for future coverage by writing to <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] font-semibold underline">support@ustaad.ae</a>.</p>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            Meet the full team on our <a href="/editorial" className="text-[#0f4a9b] font-semibold underline">editorial page</a>.
            {AUTHORS.filter((a) => a.slug !== author.slug).map((a) => (
              <span key={a.slug}> · <a href={`/authors/${a.slug}`} className="text-[#0f4a9b] underline">{a.name}</a></span>
            ))}
          </p>
        </div>
      </section>
    
          {/* Detailed Editorial Guidelines & Credentials */}
          <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 text-xs text-gray-600 leading-relaxed space-y-3">
            <h3 className="text-sm font-bold text-[#0a1f3d]">About Our Educator & Author Profiles</h3>
            <p>Every author profile at Ustaad represents a verified educational specialist actively involved in UAE curriculum planning, exam strategy formulation, or student mentorship. Our writers and reviewers possess direct experience with Cambridge International Examinations (CIE), Pearson Edexcel, AQA, the International Baccalaureate (IB) Organization, and the College Board (AP).</p>
            <p>By combining classroom teaching experience with rigorous editorial standards, our team ensures that all parent guides, revision breakdowns, and study strategies reflect actual exam board mark schemes, reward criteria, and current UAE school term demands.</p>
            <p>For questions regarding article citations, editorial guidelines, or contributing to Ustaad UAE educational publications, contact our editorial desk at <a href="mailto:support@ustaad.ae" className="text-[#0f4a9b] font-semibold underline">support@ustaad.ae</a>.</p>
          </div>

    
          <div className="mt-6 bg-[#0a1f3d] text-white rounded-2xl p-6 text-xs leading-relaxed space-y-2">
            <h4 className="font-bold text-sm text-[#C7A24A]">Direct Academic Consultation with Ustaad Educators</h4>
            <p className="text-slate-200">Our authoring team works directly with UAE parents to assess individual learning gaps, recommend subject pathways, and match curriculum-specialist tutors. If you would like to request specific topic coverage or discuss your child's academic goals for the upcoming exam series, our educational team is available to assist.</p>
          </div>

    
          <div className="mt-4 bg-white p-6 rounded-2xl border border-slate-200/80 text-xs text-gray-600 leading-relaxed space-y-2">
            <h4 className="font-bold text-sm text-[#0a1f3d]">UAE Curriculum Alignment & Quality Assurance</h4>
            <p>Our authors actively collaborate with international school department heads across Abu Dhabi, Dubai, and Sharjah. We ensure that revision advice, topic summaries, and exam techniques reflect official Cambridge 0580/0625/0620, Edexcel 4MA1/4PH1/4CH1, and IB Diploma mark scheme requirements. Continuous updates are published to keep pace with syllabus revisions and exam board command word expectations.</p>
          </div>

    
          <div className="mt-4 bg-slate-100 p-4 rounded-xl text-xs text-gray-600 leading-relaxed">
            <p className="font-bold text-[#0a1f3d]">Continuous Educational Content Reviews</p>
            <p>Our editorial team conducts bi-annual audits across all published study guides to integrate updated mark schemes, past paper question updates, and revised exam board syllabus codes for UAE international schools.</p>
          </div>

    <div className="text-center text-xs text-gray-500 py-3 bg-slate-50 border-t">Expert Academic Guidance for International School Students across Cambridge, Edexcel, IB, and AP Curricula in Dubai & Abu Dhabi.</div>
</Layout>
  );
}
