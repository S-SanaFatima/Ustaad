import { Layout, GoldButton, GradientHeadingText } from './shared';
import SEOHead from './shared/SEOHead';
import { localBusinessSchema, breadcrumbSchema } from './shared/schemas';

export default function EditorialPage() {
  const editorialCollectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Ustaad Editorial Team',
    url: 'https://ustaad.ae/editorial',
    description:
      'Real writers and named review for Ustaad study guides, exam tips, and parent guidance in the UAE.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Ustaad',
      url: 'https://ustaad.ae',
    },
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
        <section className="pt-16 pb-10 lg:pt-24 lg:pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0f4a9b] mb-3">Real writers, real review</p>
            <h1 className="text-3xl lg:text-5xl font-extrabold text-[#0a1f3d] mb-5 leading-tight">
              <GradientHeadingText text="Meet the Ustaad Editorial Team" />
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Every study guide on Ustaad is written by a real person or a named group of teachers, and checked by a qualified reviewer before it goes live. This page shows you who writes our articles, who checks them, and how we keep the advice honest and useful for UAE parents.
            </p>
            <div className="flex flex-wrap gap-3">
              <GoldButton href="/blogs" className="px-6 py-3 text-sm">Read our latest articles</GoldButton>
              <GoldButton href="/contact#form" className="px-6 py-3 text-sm">Book a free trial</GoldButton>
            </div>
            <p className="mt-5 text-sm text-gray-500">Home › Editorial</p>
          </div>
        </section>

        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-700 text-base lg:text-lg leading-relaxed">
            <p>
              When you search for a tutor in Dubai or Abu Dhabi, you see a lot of noise: long tutor lists, anonymous blogs, and advice that could be from any country. This page is here so you always know who wrote what you are reading.
            </p>
            <p>
              Some of our writers focus on the everyday problems parents notice at home. Some are teachers who know exactly where students lose marks in exams. And every article is read and approved by a reviewer before we publish it, so the advice stays clear, correct, and made for UAE schools.
            </p>
            <p>
              Each person below has a profile you can click to see their background, their topics, and the articles they have written or reviewed.
            </p>
          </div>
        </section>

        <section className="py-12 bg-[#f7f9fc] border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0a1f3d] mb-8">Who is behind our articles</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center font-bold text-lg shrink-0 notranslate" translate="no">NS</div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0a1f3d]">Nimra Shahzada</h3>
                    <p className="text-sm font-semibold text-[#0f4a9b] mb-3">Content Writer, Study and Exam Topics</p>
                    <p className="text-sm text-gray-700 mb-4">Nimra writes about the study problems UAE parents see at home: children who revise for hours but still lose marks, homework that never gets finished, and exam stress that builds before mocks. Her articles turn these common worries into simple steps parents can follow.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['Exam stress', 'Study habits', 'Parent guidance', 'IGCSE and A-Level'].map((topic) => (
                        <span key={topic} className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#0f4a9b]/8 text-[#0f4a9b]">{topic}</span>
                      ))}
                    </div>
                    <a href="/authors/nimra-shahzada" className="text-sm font-bold text-[#0a1f3d] underline underline-offset-2">View full profile</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center font-bold text-lg shrink-0 notranslate" translate="no">NI</div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0a1f3d]">Nida Iqbal</h3>
                    <p className="text-sm font-semibold text-[#0f4a9b] mb-3">Editorial Reviewer, MPhil in Education Leadership</p>
                    <p className="text-sm text-gray-700 mb-4">Nida checks every article before it is published. She makes sure the advice is correct, easy to understand, and matches how UAE schools teach and test students. She is the named person who approves our content, including the work sent in by teachers who prefer to stay unnamed.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['Editorial review', 'Curriculum accuracy', 'Parent clarity'].map((topic) => (
                        <span key={topic} className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#0f4a9b]/8 text-[#0f4a9b]">{topic}</span>
                      ))}
                    </div>
                    <a href="/authors/nida-iqbal" className="text-sm font-bold text-[#0a1f3d] underline underline-offset-2">View full profile</a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0f4a9b] to-[#0a3a79] text-white flex items-center justify-center font-bold text-lg shrink-0 notranslate" translate="no">US</div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#0a1f3d]">Ustaad Subject Specialists</h3>
                    <p className="text-sm font-semibold text-[#0f4a9b] mb-3">Contributing teachers, names kept private</p>
                    <p className="text-sm text-gray-700 mb-4">A group of practising Maths, Science, and English teachers who add worked examples, exam tips, and fact checks to our articles. Many teach in UAE schools and prefer not to use their names in public, so we share their subjects and experience instead. Nida reviews everything they send in.</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {['Maths', 'Physics and Chemistry', 'Biology', 'Exam technique'].map((topic) => (
                        <span key={topic} className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#0f4a9b]/8 text-[#0f4a9b]">{topic}</span>
                      ))}
                    </div>
                    <a href="/authors/ustaad-subject-specialists" className="text-sm font-bold text-[#0a1f3d] underline underline-offset-2">View full profile</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-gray-700 text-base lg:text-lg leading-relaxed">
            <h2 className="text-2xl font-extrabold text-[#0a1f3d]">The teachers who prefer to stay private</h2>
            <p>
              Some of our best writers are full time teachers in UAE schools. For privacy reasons, they do not want their names on a public tutoring website. We handle this in a simple, honest way. We never invent a fake writer. Instead, we do three things:
            </p>
            <p>
              1. We share their real subjects and experience. We say what they teach and which exam boards they work with (Cambridge, Edexcel, IB, AP), without publishing their names.
            </p>
            <p>
              2. A named reviewer checks their work. Nida Iqbal reads and approves every piece, so a real person is always responsible for it.
            </p>
            <p>
              3. We label the article clearly. The byline reads "Contributed by Ustaad Subject Specialists, reviewed by Nida Iqbal", never a made up name.
            </p>
            <p>
              So even when a name is kept private, you can still see the experience and the checking behind every article.
            </p>
            
            <h2 className="text-2xl font-extrabold text-[#0a1f3d] pt-4">How we keep our articles trustworthy</h2>
            <p>We keep things simple and honest, so you can trust what you read:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Every article is written by a real person or a named group of teachers.</li>
              <li>Every article is checked by Nida before it goes live.</li>
              <li>Each writer has a profile you can open to see their background and their articles.</li>
              <li>We never publish "anonymous expert tips" with no one behind them.</li>
            </ul>
            <p>
              If you want to check whether our advice fits your child's curriculum, open the profile of the writer for the article you are reading. Then <a href="/contact#form" className="text-[#0f4a9b] font-semibold underline">book a free trial</a> so a tutor can look at the same problems with your child.
            </p>
            <div className="rounded-2xl border border-[#e5e7eb] p-6 bg-[#f8fafc] mt-8">
              <h3 className="text-xl font-extrabold text-[#0a1f3d] mb-2">See the articles this team writes</h3>
              <p className="text-gray-600 mb-4">Study guides, exam tips, and parent advice, updated regularly.</p>
              <div className="flex flex-wrap gap-3">
                <a href="/blogs" className="text-[#0f4a9b] font-semibold underline">Visit the Ustaad blog</a>
              </div>
            </div>
            <p className="mt-8">Ustaad, Private Tutoring UAE since 2015. Real writers, qualified review, honest bylines.</p>
            <p className="mt-4">
              Related: <a href="/blogs" className="text-[#0f4a9b] font-semibold underline">Blog</a> ·{' '}
              <a href="/about" className="text-[#0f4a9b] font-semibold underline">About</a> ·{' '}
              <a href="/tutors" className="text-[#0f4a9b] font-semibold underline">Tutors</a> ·{' '}
              <a href="/how-it-works" className="text-[#0f4a9b] font-semibold underline">How Ustaad Works</a>
            </p>
          </div>
        </section>
      </article>
    </Layout>
  );
}
