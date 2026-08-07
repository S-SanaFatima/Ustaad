// Central Route Registry & SEO Configuration
// This is the single source of truth for all routes.
// Build tools auto-generate entry-server.tsx, prerender.mjs, and sitemap.xml from this file.

export interface RouteConfig {
  path: string;
  component: string; // Component import name
  seo: {
    title: string;
    description: string;
    priority?: number; // Sitemap priority (0.0 - 1.0)
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const ROUTES: RouteConfig[] = [
  // Core Pages
  {
    path: '/',
    component: 'App',
    seo: {
      title: 'Private Tutors UAE | IGCSE, A-Level, IB & AP | Ustaad',
      description: 'Expert 1-to-1 private tutoring across UAE for IGCSE, GCSE, A-Level, IB, AP & SAT. Serving Dubai, Abu Dhabi, Sharjah & all Emirates since 2015.',
      priority: 1.0,
      changefreq: 'weekly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }]
  },
  {
    path: '/about',
    component: 'AboutPage',
    seo: {
      title: 'About Ustaad | Private Tutoring UAE Since 2015',
      description: "Learn about Ustaad — UAE's trusted private tutoring service since 2015. Over 2,500 students supported across Dubai, Abu Dhabi, Sharjah and all Emirates. Expert 1-to-1 tutors.",
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }]
  },
  {
    path: '/contact',
    component: 'ContactPage',
    seo: {
      title: 'Contact Ustaad | Book Free Trial Session UAE | Ustaad',
      description: 'Get in touch with Ustaad to book your free trial tutoring session. Reach us by phone or WhatsApp across Dubai, Abu Dhabi & all UAE emirates.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }]
  },
  {
    path: '/tutors',
    component: 'TutorsPage',
    seo: {
      title: 'Our Tutors | Expert Private Tutors UAE — Ustaad',
      description: "Meet Ustaad's expert private tutors in UAE. Curriculum-specialist educators for IGCSE, A-Level, IB, and American curriculum. Trusted by 2,500+ families across Dubai & Abu Dhabi.",
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Tutors', url: '/tutors' }]
  },
  {
    path: '/subjects',
    component: 'SubjectsPage',
    seo: {
      title: 'Subjects | Private Tutoring for All Subjects UAE — Ustaad',
      description: 'Private tutoring for all major subjects in UAE. Maths, Physics, Chemistry, Biology, English, Business & Economics. IGCSE, A-Level, IB, AP.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }]
  },
  {
    path: '/how-it-works',
    component: 'HowItWorksPage',
    seo: {
      title: 'How It Works | Ustaad Private Tutoring Process UAE',
      description: "Discover how Ustaad's 1-to-1 private tutoring works. Diagnostic assessment, personalised plan, curriculum-aligned sessions, and tracked progress. Book your free trial today.",
      priority: 0.7,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'How It Works', url: '/how-it-works' }]
  },

  // Curriculum Overview
  {
    path: '/curriculum',
    component: 'CurriculumPage',
    seo: {
      title: 'Curriculum Tutoring UAE | British, IB & American | Ustaad',
      description: 'Private tutoring for all major curricula in UAE: British (IGCSE, A-Level), IB (MYP, DP), and American (AP, SAT). 1-to-1 sessions in Dubai & Abu Dhabi.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }]
  },

  // British Curriculum
  {
    path: '/british-curriculum',
    component: 'BritishCurriculumPage',
    seo: {
      title: 'British Curriculum Tutors UAE | IGCSE & A-Level | Ustaad',
      description: 'Expert private tutoring for the British curriculum in Dubai & UAE. IGCSE, GCSE, A-Level across all subjects. Cambridge, Edexcel, AQA aligned. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'British Curriculum', url: '/british-curriculum' }]
  },
  {
    path: '/igcse',
    component: 'IGCSEPage',
    seo: {
      title: 'IGCSE Tutors UAE | Cambridge & Edexcel | Ustaad',
      description: 'Expert private IGCSE tutoring in Dubai, Abu Dhabi & UAE. Cambridge & Edexcel IGCSE Maths, Physics, Chemistry, Biology & English. Book a free trial.',
      priority: 0.95,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'IGCSE', url: '/igcse' }]
  },
  {
    path: '/gcse',
    component: 'GCSEPage',
    seo: {
      title: 'GCSE Tutors UAE | AQA, OCR & Pearson Edexcel | Ustaad',
      description: 'Expert private GCSE tutoring in Dubai, Abu Dhabi & UAE. All GCSE subjects covered. 1-to-1 sessions aligned to AQA, Edexcel, Cambridge. Book a free trial today.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'GCSE', url: '/gcse' }]
  },
  {
    path: '/a-level',
    component: 'ALevelPage',
    seo: {
      title: 'A-Level Tutors UAE | Dubai & Abu Dhabi | Ustaad',
      description: 'Expert private A-Level tutoring in Dubai, Abu Dhabi & UAE. AQA, Edexcel & Cambridge A-Level subjects. 1-to-1 sessions with proven grade results.',
      priority: 0.95,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'A-Level', url: '/a-level' }]
  },

  // IB Curriculum
  {
    path: '/ib-curriculum',
    component: 'IBCurriculumPage',
    seo: {
      title: 'IB Curriculum Tutors UAE | IB MYP & Diploma | Ustaad',
      description: 'Expert private IB tutoring in Dubai & Abu Dhabi. IB MYP and DP SL/HL subjects with IB-specialist tutors. Proven grade results. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'IB Curriculum', url: '/ib-curriculum' }]
  },
  {
    path: '/myp',
    component: 'MYPPage',
    seo: {
      title: 'MYP Tutors UAE | IB Middle Years Programme | Ustaad',
      description: 'Expert private IB MYP tutoring in Dubai & Abu Dhabi. Criteria-based assessment and E-Assessment prep for all MYP subjects. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'IB', url: '/ib-curriculum' }, { name: 'MYP', url: '/myp' }]
  },
  {
    path: '/dp-sl',
    component: 'DPSLPage',
    seo: {
      title: 'DP Standard Level Tutors UAE | IB SL Tutoring | Ustaad',
      description: 'Expert private IB DP SL tutoring in Dubai & Abu Dhabi. All IB Diploma Standard Level subjects with specialist 1-to-1 tutors. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IB', url: '/ib-curriculum' }, { name: 'DP SL', url: '/dp-sl' }]
  },
  {
    path: '/dp-hl',
    component: 'DPHLPage',
    seo: {
      title: 'DP Higher Level Tutors UAE | IB HL Tutoring | Ustaad',
      description: 'Expert private IB DP HL tutoring in Dubai & Abu Dhabi. Depth, rigor, and top scores for all IB Diploma Higher Level subjects. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IB', url: '/ib-curriculum' }, { name: 'DP HL', url: '/dp-hl' }]
  },

  // American Curriculum
  {
    path: '/american-curriculum',
    component: 'AmericanCurriculumPage',
    seo: {
      title: 'American Curriculum Tutors UAE | K-12 & AP | Ustaad',
      description: 'Expert private American curriculum tutoring in Dubai & UAE. AP subjects, SAT prep, High School support. 1-to-1 sessions with expert tutors.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'American Curriculum', url: '/american-curriculum' }]
  },
  {
    path: '/ap',
    component: 'APPage',
    seo: {
      title: 'AP Tutors UAE | AP Exam Prep Dubai & Abu Dhabi | Ustaad',
      description: 'Expert AP tutoring in Dubai & Abu Dhabi. All AP subjects covered: Calculus, Physics, Chemistry, Biology & Economics. Score 4s and 5s.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'AP', url: '/ap' }]
  },
  {
    path: '/middle-school',
    component: 'MiddleSchoolPage',
    seo: {
      title: 'Middle School Tutors UAE | Grades 6–8 Tutoring | Ustaad',
      description: 'Expert private middle school tutoring in Dubai & Abu Dhabi. Grades 6–8 all subjects. Build strong foundations before IGCSE & High School.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Middle School', url: '/middle-school' }]
  },
  {
    path: '/high-school',
    component: 'HighSchoolPage',
    seo: {
      title: 'High School Tutors UAE | Grades 9–12 Tutoring | Ustaad',
      description: 'Expert private high school tutoring in Dubai & Abu Dhabi. Grades 9–12, AP & SAT prep. Build exam confidence and achieve top grades.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'High School', url: '/high-school' }]
  },

  // Subject Pages
  {
    path: '/maths',
    component: 'MathsPage',
    seo: {
      title: 'Maths Tutors UAE | IGCSE, A-Level, IB & AP | Ustaad',
      description: 'Expert private Maths tutoring in Dubai & Abu Dhabi. IGCSE, A-Level, IB & AP Mathematics. Algebra, Calculus & Statistics. Book a free trial.',
      priority: 0.95,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Mathematics', url: '/maths' }]
  },
  {
    path: '/physics',
    component: 'PhysicsPage',
    seo: {
      title: 'Physics Tutors UAE | IGCSE, A-Level, IB Physics — Ustaad',
      description: 'Expert private Physics tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Physics. Mechanics, Electricity, Quantum. Proven results. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Physics', url: '/physics' }]
  },
  {
    path: '/chemistry',
    component: 'ChemistryPage',
    seo: {
      title: 'Chemistry Tutors UAE | IGCSE, A-Level, IB Chemistry — Ustaad',
      description: 'Expert private Chemistry tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Chemistry. Organic, Inorganic, Physical. Lab prep. Book a free trial.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Chemistry', url: '/chemistry' }]
  },
  {
    path: '/biology',
    component: 'BiologyPage',
    seo: {
      title: 'Biology Tutors UAE | IGCSE, A-Level, IB Biology — Ustaad',
      description: 'Expert private Biology tutoring in Dubai & Abu Dhabi. IGCSE, A-Level & IB Biology. Cell biology, Genetics, Ecology & Human physiology.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Biology', url: '/biology' }]
  },
  {
    path: '/english',
    component: 'EnglishPage',
    seo: {
      title: 'English Tutors UAE | IGCSE, A-Level, IB English — Ustaad',
      description: 'Expert private English tutoring in Dubai & Abu Dhabi. IGCSE, A-Level & IB English Language & Literature. Essay writing & analysis technique.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'English', url: '/english' }]
  },
  {
    path: '/economics',
    component: 'EconomicsPage',
    seo: {
      title: 'Economics Tutors UAE | IGCSE, A-Level, IB Economics — Ustaad',
      description: 'Expert private Economics tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Economics. Micro, Macro, Development, International. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Economics', url: '/economics' }]
  },
  {
    path: '/business',
    component: 'BusinessPage',
    seo: {
      title: 'Business Studies Tutors UAE | IGCSE, A-Level & IB | Ustaad',
      description: 'Expert private Business Studies tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Business. Marketing, Finance, HR, Operations. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Business', url: '/business' }]
  },
  {
    path: '/accounting',
    component: 'AccountingPage',
    seo: {
      title: 'Accounting Tutors UAE | IGCSE & A-Level | Ustaad',
      description: 'Expert private Accounting tutoring in Dubai, Abu Dhabi & UAE. IGCSE, GCSE, A-Level, IB Accounting. Financial, Management, Cost accounting. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Accounting', url: '/accounting' }]
  },
  {
    path: '/finance',
    component: 'FinancePage',
    seo: {
      title: 'Finance Tutors UAE | A-Level, IB & University | Ustaad',
      description: 'Expert private Finance tutoring in Dubai, Abu Dhabi & UAE. A-Level, IB, University Finance. Corporate finance, Investment, Financial markets. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Finance', url: '/finance' }]
  },
  {
    path: '/statistics',
    component: 'StatisticsPage',
    seo: {
      title: 'Statistics Tutors UAE | IGCSE, A-Level & IB | Ustaad',
      description: 'Expert private Statistics tutoring in Dubai & Abu Dhabi. IGCSE, A-Level & IB Statistics. Data analysis, Probability & Hypothesis testing.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Statistics', url: '/statistics' }]
  },
  {
    path: '/engineering',
    component: 'EngineeringPage',
    seo: {
      title: 'Engineering Tutors UAE | A-Level & University | Ustaad',
      description: 'Expert private Engineering tutoring in Dubai, Abu Dhabi & UAE. A-Level, University Engineering. Mechanical, Electrical, Civil fundamentals. Book a free trial.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Engineering', url: '/engineering' }]
  },
  {
    path: '/sciences',
    component: 'SciencesPage',
    seo: {
      title: 'Sciences Tutors UAE | Physics, Chemistry & Biology — Ustaad',
      description: 'Expert private sciences tutoring in Dubai, Abu Dhabi & UAE. Physics, Chemistry, and Biology for IGCSE, GCSE, A-Level, and IB. Book a free trial.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Sciences', url: '/sciences' }]
  },

  // Other Pages
  {
    path: '/exam-preparation',
    component: 'ExamPreparationPage',
    seo: {
      title: 'Exam Preparation Tutors UAE | IGCSE, A-Level, IB | Ustaad',
      description: 'Intensive exam preparation tutoring in Dubai & Abu Dhabi. IGCSE, A-Level, IB & AP exam revision. Past papers, mark schemes & technique.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Exam Preparation', url: '/exam-preparation' }]
  },

  // Blog
  {
    path: '/blogs',
    component: 'BlogsPage',
    seo: {
      title: 'Blog | Private Tutoring Insights & Study Tips — Ustaad',
      description: "Explore Ustaad's blog for expert tutoring insights, study tips, exam strategies, and curriculum guidance for IGCSE, A-Level, IB, and AP students in UAE.",
      priority: 0.9,
      changefreq: 'weekly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }]
  },
  {
    path: '/blogs/igcse-maths-revision-low-marks',
    component: 'IGCSEMathsLowMarksBlog',
    seo: {
      title: 'Why IGCSE Maths Students Suffer Low Marks | Ustaad',
      description: 'Why do IGCSE students forget maths in exams despite studying hard? A closer look at what is really happening, and what actually helps.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'IGCSE Maths Revision', url: '/blogs/igcse-maths-revision-low-marks' }]
  },
  {
    path: '/blogs/exam-panic-before-exams-uae',
    component: 'ExamPanicBlog',
    seo: {
      title: '"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late | Ustaad',
      description: 'Exam panic builds quietly across the term. Discover early signs in homework and mocks long before parents notice them as exam stress.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Exam Panic UAE', url: '/blogs/exam-panic-before-exams-uae' }]
  },

  // City landings
  {
    path: '/maths-tutor-abu-dhabi',
    component: 'MathematicsLanding',
    seo: {
      title: 'Maths Tutor Abu Dhabi | IGCSE, A-Level, IB Maths — Ustaad',
      description: 'One-to-one maths tutors in Abu Dhabi fixing algebra, fractions, and word problems. IGCSE 0580, A-Level, IB AA/AI, and AP maths support. Trusted since 2015.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Maths Tutor Abu Dhabi', url: '/maths-tutor-abu-dhabi' }]
  },
  {
    path: '/physics-tutor-abu-dhabi',
    component: 'PhysicsLanding',
    seo: {
      title: 'Physics Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad',
      description: 'Trusted 1-to-1 physics tutors in Abu Dhabi for IGCSE, A-Level and IB. Rebuild weak topics, drill past papers, and lift exam grades. Book a free trial.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Physics Tutor Abu Dhabi', url: '/physics-tutor-abu-dhabi' }]
  },
  {
    path: '/chemistry-tutor-abu-dhabi',
    component: 'ChemistryLandingPage',
    seo: {
      title: 'Chemistry Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad',
      description: 'Expert 1-to-1 chemistry tutors in Abu Dhabi for IGCSE, A-Level, and IB. Fix mole calculations, organic mechanisms, and past paper technique. Book a free trial.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Chemistry Tutor Abu Dhabi', url: '/chemistry-tutor-abu-dhabi' }]
  },
  {
    path: '/biology-tutor-abu-dhabi',
    component: 'BiologyTutorAbuDhabiPage',
    seo: {
      title: 'Biology Tutor Abu Dhabi | Expert IGCSE, A-Level & IB Tutors | Ustaad',
      description: 'Specialist 1-to-1 biology tutors in Abu Dhabi for Cambridge 0610, Edexcel, IB HL, and A-Level. Medicine prep, IA support, and targeted topic rebuilds. Book a free diagnostic.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Biology Tutors in Abu Dhabi', url: '/biology-tutor-abu-dhabi' }]
  },
  {
    path: '/igcse-tutor-abu-dhabi',
    component: 'IGCSETutorLanding',
    seo: {
      title: 'IGCSE Tutor Abu Dhabi | Private IGCSE Tutoring — Ustaad',
      description: 'Private IGCSE tutors in Abu Dhabi for Maths, Physics, Chemistry, Biology, English and more. Cambridge and Edexcel aligned. Book a free trial.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IGCSE Tutor Abu Dhabi', url: '/igcse-tutor-abu-dhabi' }]
  },
  {
    path: '/editorial',
    component: 'EditorialPage',
    seo: {
      title: 'Ustaad Editorial Team | Real Writers, Real Review, UAE',
      description: 'Meet the Ustaad editorial team: real writers and a named reviewer behind every study guide, exam tip, and parent advice article for UAE schools.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Editorial', url: '/editorial' }]
  },
  {
    path: '/authors/saira-s',
    component: 'AuthorPage',
    seo: {
      title: 'Saira S | Content Writer, Exam Strategies | Ustaad',
      description: 'Author profile for Saira S, Content Writer & Exam Specialist at Ustaad UAE.',
      priority: 0.7,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Editorial', url: '/editorial' }, { name: 'Saira S', url: '/authors/saira-s' }]
  },
  {
    path: '/authors/nimra-shahzada',
    component: 'AuthorPage',
    seo: {
      title: 'Nimra Shahzada | Education Counsellor | Ustaad',
      description: 'Author profile for Nimra Shahzada, Education Counsellor & Student Support Specialist at Ustaad UAE.',
      priority: 0.7,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Editorial', url: '/editorial' }, { name: 'Nimra Shahzada', url: '/authors/nimra-shahzada' }]
  },
  {
    path: '/authors/nida-iqbal',
    component: 'AuthorPage',
    seo: {
      title: 'Nida Iqbal | Education Leadership Reviewer | Ustaad',
      description: 'Author profile for Nida Iqbal, MPhil in Education Leadership and Management, editorial reviewer at Ustaad.',
      priority: 0.7,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Editorial', url: '/editorial' }, { name: 'Nida Iqbal', url: '/authors/nida-iqbal' }]
  },
  {
    path: '/authors/ustaad-subject-specialists',
    component: 'AuthorPage',
    seo: {
      title: 'Ustaad Subject Specialists | Contributing Teachers | Ustaad',
      description: 'Author profile for Ustaad Subject Specialists, a private group of contributing teachers reviewed by Nida Iqbal.',
      priority: 0.7,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Editorial', url: '/editorial' }, { name: 'Ustaad Subject Specialists', url: '/authors/ustaad-subject-specialists' }]
  },
  {
    path: '/blogs/physics-understanding-vs-marks',
    component: 'PhysicsUnderstandingMarksBlog',
    seo: {
      title: 'Physics Understanding vs Marks | Ustaad Blog',
      description: 'Why understanding Physics is not the same as scoring marks, and what UAE students can change before the next paper.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Physics Understanding vs Marks', url: '/blogs/physics-understanding-vs-marks' }]
  },
  {
    path: '/blogs/igcse-physics-formulas-exam',
    component: 'IGCSEPhysicsFormulasBlog',
    seo: {
      title: 'IGCSE Physics Formulas Exam | Ustaad Blog',
      description: 'How IGCSE Physics students lose marks on formula questions, and the retrieval practice that fixes it.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'IGCSE Physics Formulas', url: '/blogs/igcse-physics-formulas-exam' }]
  },
  {
    path: '/blogs/why-chemistry-fades-from-memory',
    component: 'ChemistryFadesBlog',
    seo: {
      title: 'Why Chemistry Fades From Memory | Ustaad Blog',
      description: 'Chemistry facts stick in class and vanish before the paper. What lasting recall practice looks like for UAE students.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Why Chemistry Fades', url: '/blogs/why-chemistry-fades-from-memory' }]
  },
  {
    path: '/blogs/early-signs-chemistry-help-uae',
    component: 'EarlySignsChemistryBlog',
    seo: {
      title: 'Early Signs Your Child Needs Help in Chemistry | Ustaad',
      description: 'Six early signs your child is struggling in IGCSE or A-Level chemistry, well before the report card drops. Calm guidance from a UAE education counsellor.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Early Signs Chemistry Help', url: '/blogs/early-signs-chemistry-help-uae' }]
  },
  {
    path: '/privacy',
    component: 'PrivacyPage',
    seo: {
      title: 'Privacy Policy | Ustaad',
      description: 'Privacy policy for Ustaad — how we handle your data when you use our private tutoring service in the UAE.',
      priority: 0.3,
      changefreq: 'yearly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }]
  },
  {
    path: '/terms',
    component: 'TermsPage',
    seo: {
      title: 'Terms of Use | Ustaad',
      description: 'Terms of use for Ustaad private tutoring services in the UAE.',
      priority: 0.3,
      changefreq: 'yearly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Terms of Use', url: '/terms' }]
  }
];

// Helper to get route by path
export function getRouteByPath(path: string): RouteConfig | undefined {
  return ROUTES.find(r => r.path === path);
}

// Generate sitemap XML — homepage uses trailing slash; all other locs have none
export function generateSitemap(): string {
  const baseUrl = 'https://ustaad.ae';
  const today = new Date().toISOString().split('T')[0];
  const urlEntries = ROUTES.map(route => {
    const loc = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.seo.changefreq || 'monthly'}</changefreq>
    <priority>${route.seo.priority || 0.5}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}
