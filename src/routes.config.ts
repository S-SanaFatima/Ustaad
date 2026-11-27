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
    lastmod?: string;
    noindex?: boolean;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export const ROUTES: RouteConfig[] = [
  // Core Pages
  {
    path: '/',
    component: 'App',
    seo: {
      title: 'Private Tutors in UAE | IGCSE, A-Level, IB & AP | Ustaad',
      description: 'Online tutoring for UAE families: private tutors for IGCSE, GCSE, A-Level, IB and AP, live 1-to-1 in every emirate. Free 15-min orientation.',
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
      title: 'Contact Ustaad | Book First Session UAE | Ustaad',
      description: 'Get in touch with Ustaad to book your first tutoring session. Reach us by phone or WhatsApp across Dubai, Abu Dhabi & all UAE emirates.',
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
    path: '/tutors/tabraiz-khan',
    component: 'TutorProfilePage',
    seo: {
      title: 'Tabraiz Khan · Maths, Physics & Statistics Tutor Dubai | Ustaad',
      description: 'Meet the Ustaad tutors: board specialists for British, IB and American programmes, each chosen for one exam board rather than listed in a directory.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Tutors', url: '/tutors' }, { name: 'Tabraiz Khan', url: '/tutors/tabraiz-khan' }]
  },
  {
    path: '/tutors/fahad-khan',
    component: 'TutorProfilePage',
    seo: {
      title: 'Fahad Khan · Maths Tutor Dubai & UAE | Ustaad',
      description: 'Fahad Khan is a specialized Maths tutor at Ustaad with 10+ years experience teaching IGCSE, GCSE and A-Level. Book your first lesson today.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Tutors', url: '/tutors' }, { name: 'Fahad Khan', url: '/tutors/fahad-khan' }]
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
      description: "Discover how Ustaad's 1-to-1 private tutoring works. Diagnostic assessment, personalised plan, curriculum-aligned sessions, and tracked progress. Book your first session today.",
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
      description: 'How Ustaad works: a short diagnostic, a tutor matched to your child\'s board, and progress shared as lessons go. It begins with a 15-minute orientation.',
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
      description: 'Expert private tutoring for the British curriculum in Dubai & UAE. IGCSE, GCSE, A-Level across all subjects. Cambridge, Edexcel, AQA aligned. Book your first session.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-10-12'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'British Curriculum', url: '/british-curriculum' }]
  },
  {
    path: '/igcse',
    component: 'IGCSEPage',
    seo: {
      title: 'IGCSE Tutors & Tuition UAE | Cambridge & Edexcel | Ustaad',
      description: 'Years 9 to 11 decide the IGCSE grades that shape sixth form. Cambridge and Edexcel tuition in maths, sciences, English and business, taught online.',
      priority: 0.95,
      changefreq: 'monthly',
      lastmod: '2026-11-11'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'IGCSE', url: '/igcse' }]
  },
  {
    path: '/gcse',
    component: 'GCSEPage',
    seo: {
      title: 'GCSE Tutors UAE | AQA, OCR & Pearson Edexcel | Ustaad',
      description: 'Expert private GCSE tutoring in Dubai, Abu Dhabi & UAE. All GCSE subjects covered. 1-to-1 sessions aligned to AQA, Edexcel, Cambridge. Book your first session today.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'GCSE', url: '/gcse' }]
  },
  {
    path: '/a-level',
    component: 'ALevelPage',
    seo: {
      title: 'A-Level Tutors UAE | Cambridge, Edexcel, AQA & OCR | Ustaad',
      description: 'A-Level is where predicted grades start shaping UCAS offers. One-to-one AS and A-Level support in every emirate, on Cambridge, Edexcel, AQA or OCR.',
      priority: 0.95,
      changefreq: 'monthly',
      lastmod: '2026-10-12'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'A-Level', url: '/a-level' }]
  },

  // IB Curriculum
  {
    path: '/ib-curriculum',
    component: 'IBCurriculumPage',
    seo: {
      title: 'IB Curriculum Tutors UAE | IB MYP & Diploma | Ustaad',
      description: 'Expert private IB tutoring in Dubai & Abu Dhabi. IB MYP and DP SL/HL subjects with IB-specialist tutors. Proven grade results. Book your first session.',
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
      description: 'IB MYP tutoring for Years 1 to 5 in the UAE. We decode criteria A to D, so your child knows what each task is marked on before it is handed in.',
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
      description: 'Expert private IB DP SL tutoring in Dubai & Abu Dhabi. All IB Diploma Standard Level subjects with specialist 1-to-1 tutors. Book your first session.',
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
      description: 'Expert private IB DP HL tutoring in Dubai & Abu Dhabi. Depth, rigor, and top scores for all IB Diploma Higher Level subjects. Book your first session.',
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
      description: 'American Curriculum tutoring in the UAE from Grade 6 to AP, planned around course standards, GPA goals and the rhythm of your child\'s school year.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Curriculum', url: '/curriculum' }, { name: 'American Curriculum', url: '/american-curriculum' }]
  },
  {
    path: '/ap',
    component: 'APPage',
    seo: {
      title: 'AP Tutoring in Dubai & Abu Dhabi | AP Exam Prep | Ustaad',
      description: 'AP exams arrive in May, but the groundwork starts in autumn. Tutors for AP Statistics, Physics, Chemistry, Biology and Economics, online in the UAE.',
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
      title: 'Maths Tutor UAE | Online IGCSE, A-Level, IB & AP | Ustaad',
      description: 'From IGCSE algebra to IB Analysis and AP Calculus, maths tutors who rebuild the method first and exam speed second. One-to-one lessons, UAE-wide.',
      priority: 0.95,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Mathematics', url: '/maths' }]
  },
  {
    path: '/physics',
    component: 'PhysicsPage',
    seo: {
      title: 'Physics Tutor UAE | Online IGCSE, A-Level, IB & AP | Ustaad',
      description: 'Physics marks slip on units, graphs and six-mark explanations. Live help for UAE students sitting GCSE, IGCSE, AP, IB or A-Level papers.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Physics', url: '/physics' }]
  },
  {
    path: '/chemistry',
    component: 'ChemistryPage',
    seo: {
      title: 'Chemistry Tuition UAE | IGCSE, A-Level, IB & AP | Ustaad',
      description: 'Moles, bonding and organic mechanisms, explained until they stick. Chemistry tutoring for IGCSE, AP, A-Level and IB SL/HL, wherever in the UAE you study.',
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
      description: 'Biology rewards exact wording. We help students across the Emirates, from IGCSE through to IB and AP, turn what they already know into full-mark answers.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Biology', url: '/biology' }]
  },
  {
    path: '/english',
    component: 'EnglishPage',
    seo: {
      title: 'English Tutor UAE | British English, IGCSE & IB | Ustaad',
      description: 'Online 1-to-1 English tutor for British-curriculum IGCSE, GCSE and A-Level, plus IB and AP English, Language and Literature, across the UAE.',
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
      description: 'Economics marks come from diagrams and evaluation, not definitions. Essay and data-response coaching for IB SL/HL, A-Level and IGCSE students.',
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
      description: 'Case studies, ratio calculations and evaluation for IB Business Management, A-Level and IGCSE, with feedback written against each board\'s levels.',
      priority: 0.85,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Business', url: '/business' }]
  },
  {
    path: '/accounting',
    component: 'AccountingPage',
    seo: {
      title: 'Accounting Tutor Dubai & UAE | IGCSE & A-Level | Ustaad',
      description: 'Online accounting tutor for IGCSE and A-Level students in Dubai, Abu Dhabi and across the UAE: double-entry, final accounts and ratio analysis.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Accounting', url: '/accounting' }]
  },
  {
    path: '/finance',
    component: 'FinancePage',
    seo: {
      title: 'Finance Tutor UAE | A-Level, IB & University | Ustaad',
      description: 'Online 1-to-1 finance tutor for students in Dubai, Abu Dhabi and across the UAE: A-Level, IB and university finance. Free 15-min orientation.',
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
      description: 'Hypothesis tests, distributions and calculator method for A-Level Maths, IB Maths AI and AP Statistics, worked through slowly until each step is clear.',
      priority: 0.8,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Subjects', url: '/subjects' }, { name: 'Statistics', url: '/statistics' }]
  },
  {
    path: '/engineering',
    component: 'EngineeringPage',
    seo: {
      title: 'Engineering Tutor UAE | Online A-Level & BTEC | Ustaad',
      description: 'Online 1-to-1 engineering tutor for A-Level and BTEC students across the UAE: mechanical, electrical and electronic, civil, maths and CAD.',
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
      description: 'Expert private sciences tutoring in Dubai, Abu Dhabi & UAE. Physics, Chemistry, and Biology for IGCSE, GCSE, A-Level, and IB. Book your first session.',
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
      title: 'Ustaad Blog | Study Skills, Learning & Parent Guidance UAE',
      description: 'Practical, honest advice for UAE parents and students. We cover IGCSE, A-Level, and IB study strategies, memory habits, and when to seek tutoring help.',
      priority: 0.9,
      changefreq: 'weekly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }]
  },
  {
    path: '/blogs/academic-exam-skills',
    component: 'AcademicBlogsPage',
    seo: {
      title: 'Academic & Exam Skills | Ustaad Blog',
      description: 'Understanding a topic at home and producing it under exam pressure are two different skills. The articles in this stream look at what happens in between.',
      priority: 0.9,
      changefreq: 'weekly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' }]
  },
  {
    path: '/blogs/psychology-of-learning',
    component: 'PsychologyBlogsPage',
    seo: {
      title: 'Psychology of Learning | Ustaad Blog',
      description: 'Why capable students still underperform, and how memory, focus and nerves shape results.',
      priority: 0.9,
      changefreq: 'weekly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' }]
  },
  {
    path: '/blogs/parent-guidance',
    component: 'ParentGuidanceBlogsPage',
    seo: {
      title: 'Parent Guidance | Ustaad Blog',
      description: 'Calm, clear help for spotting struggles early and knowing when to step in.',
      priority: 0.9,
      changefreq: 'weekly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }]
  },
  {
    path: '/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions',
    component: 'IGCSEBiology6MarkBlog',
    seo: {
      title: 'Why IGCSE Biology Students Lose Marks on 6-Mark Questions',
      description: 'IGCSE Biology 6-mark questions cost students marks every year. This board-specific guide explains what Cambridge and Pearson mark schemes reward.',
      priority: 0.7,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'IGCSE Biology 6-Mark Questions', url: '/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions' }]
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
    path: '/blogs/silly-mistakes-maths-exams',
    component: 'SillyMistakesMathsExamsBlog',
    seo: {
      title: 'Silly Mistakes in Maths Exams: How to Catch Them | Ustaad',
      description: 'Why do silly mistakes in maths exams happen? A maths tutor shows how to find the first wrong step and use a 3-minute check to verify your answers.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' }, { name: 'Silly Mistakes in Maths Exams', url: '/blogs/silly-mistakes-maths-exams' }]
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
  {
    path: '/blogs/exam-stamina-uae-students',
    component: 'ExamStaminaBlog',
    seo: {
      title: "Exam Stamina: Why Your Child Can't Sit the Full Paper | Ustaad",
      description: 'Your child revises for hours but fades halfway through a paper. Exam stamina is the missing skill, and here is how to build it before exams start.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
      { name: 'Exam Stamina', url: '/blogs/exam-stamina-uae-students' },
    ]
  },
  {
    path: '/blogs/uae-exams-return-students-never-sat-one',
    component: 'UAEExamsReturnBlog',
    seo: {
      title: 'Exams Are Back in the UAE. What Changes for Your Child | Ustaad',
      description: 'UAE exams are returning after a year of portfolio grading. Here is what changes for students who have never sat a real paper, and how parents can help.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-09-03'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
      { name: 'UAE Exams Return', url: '/blogs/uae-exams-return-students-never-sat-one' },
    ]
  },
  {
    path: '/blogs/igcse-vs-gcse-curriculum-differences-uae',
    component: 'IGCSEvsGCSEBlog',
    seo: {
      title: 'IGCSE vs GCSE: Curriculum Differences for UAE Parents | Ustaad',
      description: 'IGCSE vs GCSE explained for UAE parents: the curriculum, assessment and recognition differences, and how to pick the right fit for your child.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-08-21'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'IGCSE vs GCSE', url: '/blogs/igcse-vs-gcse-curriculum-differences-uae' }]
  },
  {
    path: '/blogs/a-level-tutoring-uae-independent-thinking',
    component: 'ALevelIndependentThinkingBlog',
    seo: {
      title: 'A-Level Tutoring in the UAE and Independent Thinking | Ustaad',
      description: 'UAE A-Level exams move to portfolios and coursework in 2026, so more past papers are not enough. See how independent thinking lifts your teen\'s grades.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' }, { name: 'A-Level Independent Thinking', url: '/blogs/a-level-tutoring-uae-independent-thinking' }]
  },
  {
    path: '/blogs/igcse-preparation-past-papers-final-step',
    component: 'IGCSEPreparationPastPapersBlog',
    seo: {
      title: 'IGCSE Preparation: Past Papers Are the Final Step | Ustaad',
      description: 'IGCSE preparation is like building a house. See why past papers are the roof, not the foundation, and how to prepare in the right order to lift grades.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-08-27'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Academic', url: '/blogs/academic-exam-skills' }, { name: 'IGCSE Past Papers', url: '/blogs/igcse-preparation-past-papers-final-step' }]
  },
  {
    path: '/blogs/gcse-revision-tips-uae-parents',
    component: 'GCSERevisionTipsParentsBlog',
    seo: {
      title: 'GCSE & IGCSE Revision Tips for UAE Parents | Ustaad',
      description: 'Practical GCSE and IGCSE revision tips for UAE parents: the study skills that actually raise grades, and how to support your child without taking over.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-08-31'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }, { name: 'GCSE Revision Tips', url: '/blogs/gcse-revision-tips-uae-parents' }]
  },
  {
    path: '/blogs/mock-exams-uae-not-what-they-were',
    component: 'MockExamsUAEBlog',
    seo: {
      title: 'Mock Exams UAE: Why They Count More Than Before | Ustaad',
      description: "UAE mock exams now shape predicted grades and school records, not just practice. Here's what changed and how parents should read the results.",
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-09-14'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Academic', url: '/blogs/academic-exam-skills' }, { name: 'Mock Exams UAE', url: '/blogs/mock-exams-uae-not-what-they-were' }]
  },
  {
    path: '/blogs/what-does-gradient-mean-maths-physics',
    component: 'WhatDoesGradientMeanBlog',
    seo: {
      title: 'What Is Gradient? Meaning in Maths & Physics | Ustaad',
      description: 'What is gradient? The rate of change: how much y changes per unit of x. A teacher explains it on straight-line, distance-time and velocity-time graphs.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Academic', url: '/blogs/academic-exam-skills' }, { name: 'What Does the Gradient Mean', url: '/blogs/what-does-gradient-mean-maths-physics' }]
  },
  {
    path: '/blogs/command-words-igcse-a-level-exams',
    component: 'CommandWordsBlog',
    seo: {
      title: 'Command Words in IGCSE and A-Level Exams: A Guide | Ustaad',
      description: 'Your child knows the content but loses marks anyway. The reason is usually command words. Here is how to read them and answer exactly what the examiner wants.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-09-25'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' }, { name: 'Command Words in Exams', url: '/blogs/command-words-igcse-a-level-exams' }]
  },
  {
    path: '/blogs/sleep-and-memory-why-all-nighters-backfire',
    component: 'SleepAndMemoryBlog',
    seo: {
      title: 'Sleep and Memory: Why All-Nighters Fail Students | Ustaad',
      description: 'Does sleep matter more than extra revision? Learn how sleep builds memory, why all-nighters backfire, and how UAE students can plan revision around sleep.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-09-28'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' }, { name: 'Sleep and Memory', url: '/blogs/sleep-and-memory-why-all-nighters-backfire' }]
  },
  {
    path: '/blogs/parent-teacher-meeting-questions-uae',
    component: 'ParentTeacherMeetingBlog',
    seo: {
      title: 'Parent-Teacher Meeting Questions for UAE Parents | Ustaad',
      description: 'Preparing for a parent-teacher meeting? Questions to ask about predicted grades, mocks and progress for IGCSE and A-Level students in the UAE.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-10-16'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }, { name: 'Parent-Teacher Meetings', url: '/blogs/parent-teacher-meeting-questions-uae' }]
  },
  {
    path: '/blog/parent-teacher-meeting-questions-uae',
    component: 'ParentTeacherMeetingBlog',
    seo: {
      title: 'Parent-Teacher Meeting Questions for UAE Parents | Ustaad',
      description: 'Preparing for a parent-teacher meeting? Questions to ask about predicted grades, mocks and progress for IGCSE and A-Level students in the UAE.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-10-16'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }, { name: 'Parent-Teacher Meetings', url: '/blogs/parent-teacher-meeting-questions-uae' }]
  },


  // City landings
  {
    path: '/maths-tutor-abu-dhabi',
    component: 'MathematicsLanding',
    seo: {
      title: 'Maths Tutor Abu Dhabi | IGCSE, A-Level, IB Maths — Ustaad',
      description: 'Abu Dhabi maths tutoring that follows your child\'s exam board, whether IGCSE, A-Level, IB AA/AI or AP, for families from Khalifa City to Reem Island.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Maths Tutor Abu Dhabi', url: '/maths-tutor-abu-dhabi' }]
  },
  {
    path: '/physics-tutor-abu-dhabi',
    component: 'PhysicsLanding',
    seo: {
      title: 'Physics Tutor Abu Dhabi | IGCSE & A-Level Physics | Ustaad',
      description: 'Online physics tutor for Abu Dhabi students: Cambridge 0625, Edexcel 4PH1, A-Level 9702 and AP Physics, matched to your school. Free 15-min orientation.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Physics', url: '/physics' }, { name: 'Physics Tutor Abu Dhabi', url: '/physics-tutor-abu-dhabi' }]
  },
  {
    path: '/chemistry-tutor-abu-dhabi',
    component: 'ChemistryLandingPage',
    seo: {
      title: 'Chemistry Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad',
      description: 'Expert 1-to-1 chemistry tutors in Abu Dhabi for IGCSE, A-Level, and IB. Fix mole calculations, organic mechanisms, and past paper technique. Book your first session.',
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
      description: 'Heading towards medicine from an Abu Dhabi school? Biology lessons give extra time to genetics, physiology and the IA, from IGCSE to A-Level and the IB.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Biology Tutors in Abu Dhabi', url: '/biology-tutor-abu-dhabi' }]
  },
  {
    path: '/ib-tutor-abu-dhabi',
    component: 'IBTutorAbuDhabiPage',
    seo: {
      title: 'IB Tutor Abu Dhabi | MYP, DP SL & HL | Math AA/AI + Physics',
      description: 'Looking for an IB tutor in Abu Dhabi? Maths AA/AI, Physics and IA support for MYP and Diploma students, from tutors who know how IB mark bands work.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IB Curriculum', url: '/ib-curriculum' }, { name: 'IB Tutor Abu Dhabi', url: '/ib-tutor-abu-dhabi' }]
  },
  {
    path: '/igcse-tutor-abu-dhabi',
    component: 'IGCSETutorLanding',
    seo: {
      title: 'IGCSE Tutor Abu Dhabi | Private IGCSE Tutoring – Ustaad',
      description: 'Every IGCSE tutor teaching Abu Dhabi students is checked by our academic team first. Cambridge, Edexcel and OxfordAQA papers, taught live, one to one.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IGCSE Tutor Abu Dhabi', url: '/igcse-tutor-abu-dhabi' }]
  },
  {
    path: '/gcse-tutor-abu-dhabi',
    component: 'GCSETutorLanding',
    seo: {
      title: 'GCSE Tutor Abu Dhabi | Private GCSE Tutoring — Ustaad',
      description: 'Foundation or Higher? Abu Dhabi GCSE students get that answered first, then steady AQA, OCR or Edexcel practice on the papers that decide the grade.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'GCSE Tutor Abu Dhabi', url: '/gcse-tutor-abu-dhabi' }]
  },
  {
    path: '/gcse-tutor-dubai',
    component: 'GCSETutorDubaiLanding',
    seo: {
      title: 'GCSE Tutor Dubai | GCSE Tuition, AQA, Edexcel & OCR | Ustaad',
      description: 'Online GCSE tutors in Dubai for AQA, Edexcel and OCR: private 1-to-1 GCSE tuition with recorded lessons. Free 15-min orientation with the first lesson.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'GCSE', url: '/gcse' }, { name: 'GCSE Tutor Dubai', url: '/gcse-tutor-dubai' }]
  },
  {
    path: '/igcse-tutor-dubai',
    component: 'IgcseTutorDubaiLanding',
    seo: {
      title: 'IGCSE Tutor Dubai | Cambridge & Edexcel Specialists | Ustaad',
      description: 'Dubai IGCSE students from Year 9 are matched to a Cambridge or Edexcel tutor who knows their school\'s subject options. Every lesson runs live online.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IGCSE', url: '/igcse' }, { name: 'IGCSE Tutor Dubai', url: '/igcse-tutor-dubai' }]
  },
  {
    path: '/maths-tutor-dubai',
    component: 'MathsTutorDubaiLanding',
    seo: {
      title: 'Maths Tutor Dubai | GCSE, IGCSE & A-Level Maths Tuition | Ustaad',
      description: 'GCSE, IGCSE and A-Level maths for Dubai students on AQA, Edexcel, OCR or Cambridge papers, practised until the method holds under exam timing.',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-09-16'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Maths', url: '/maths' }, { name: 'Maths Tutor Dubai', url: '/maths-tutor-dubai' }]
  },
  {
    path: '/physics-tutor-dubai',
    component: 'PhysicsTutorDubaiPage',
    seo: {
      title: 'Physics Tutor Dubai | IGCSE, A-Level & IB Physics | Ustaad',
      description: '1-to-1 physics tutors for Dubai students in IGCSE, GCSE, A-Level and IB DP, from required practicals to the IA. Taught online. 15-min orientation included.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Physics', url: '/physics' }, { name: 'Physics Tutor Dubai', url: '/physics-tutor-dubai' }]
  },
  {
    path: '/chemistry-tutor-dubai',
    component: 'ChemistryTutorDubaiPage',
    seo: {
      title: 'Chemistry Tutor Dubai | IGCSE, GCSE, A-Level & IB | Ustaad',
      description: 'Dubai students who know their chemistry but drop marks in calculations and practicals get exactly that fixed, whether they sit GCSE, IGCSE, A-Level or IB.',
      keywords: 'chemistry tutor Dubai, IGCSE chemistry tutor Dubai, GCSE chemistry tutor Dubai, A-Level chemistry tutor Dubai, IB chemistry tutor Dubai, online chemistry tuition Dubai, private chemistry tutor UAE',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-09-30'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Chemistry', url: '/chemistry' }, { name: 'Chemistry Tutor Dubai', url: '/chemistry-tutor-dubai' }]
  },
  {
    path: '/biology-tutor-dubai',
    component: 'BiologyTutorDubaiPage',
    seo: {
      title: 'Biology Tutor Dubai | IGCSE, A-Level & IB Biology | Ustaad',
      description: 'Six-mark answers, required practicals and the IA: where Dubai biology students lose marks, covered in live lessons for IB DP, A-Level and IGCSE.',
      keywords: 'biology tutor Dubai, IB Biology tutor Dubai, IGCSE Biology tutor Dubai, A-Level Biology tutor Dubai, private Biology tutor Dubai, online Biology tutor UAE, IB Biology HL tutor, Biology IA help Dubai, Biology tuition Dubai, best Biology tutor in Dubai',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-10-14'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Biology', url: '/biology' }, { name: 'Biology Tutor Dubai', url: '/biology-tutor-dubai' }]
  },
  {
    path: '/a-level-tutor-dubai',
    component: 'ALevelTutorDubaiPage',
    seo: {
      title: 'A-Level Tutors in Dubai | Cambridge, Edexcel & AQA | Ustaad',
      description: 'A-Level tutoring in Dubai planned around mocks and UCAS deadlines, for Maths, Further Maths, the sciences and Economics on Cambridge, Edexcel or AQA.',
      keywords: 'A-Level tutor Dubai, A level tutoring Dubai, Cambridge A level tutor Dubai, Edexcel A level tutor Dubai, online A Level tuition Dubai, A Level maths physics chemistry tutor UAE',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-10-07'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'A-Level', url: '/a-level' }, { name: 'A-Level Tutor Dubai', url: '/a-level-tutor-dubai' }]
  },
  {
    path: '/ib-tutor-dubai',
    component: 'IBTutorDubaiPage',
    seo: {
      title: 'IB Tutor Dubai | 1-to-1 IB DP & MYP Tutors | Ustaad',
      description: 'Private IB tutoring in Dubai for DP SL/HL and the MYP. Help with the IA, the Extended Essay and Paper 1 timing, in sessions matched to your subjects.',
      keywords: 'IB tutor Dubai, IB DP tutor Dubai, private IB tutor Dubai, online IB tutor UAE, IB Maths tutor Dubai, IB Physics tutor Dubai, IB Chemistry tutor Dubai, IB Biology tutor Dubai, IB Economics tutor Dubai, IB IA help Dubai, IB Extended Essay help, MYP tutor Dubai, IB HL / SL tutor',
      priority: 0.95,
      changefreq: 'weekly',
      lastmod: '2026-10-21'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IB Curriculum', url: '/ib-curriculum' }, { name: 'IB Tutor Dubai', url: '/ib-tutor-dubai' }]
  },
  {
    path: '/a-level-tutor-abu-dhabi',
    component: 'ALevelTutorLanding',
    seo: {
      title: 'Online A-Level Tutor Abu Dhabi | Cambridge & Edexcel',
      description: 'Live online A-Level tutors for Abu Dhabi families. Cambridge, Edexcel, Oxford AQA and OCR support for Years 12 and 13.',
      priority: 0.90,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'A-Level Tutor Abu Dhabi', url: '/a-level-tutor-abu-dhabi' }]
  },
  {
    path: '/a-level-tutor-al-ain',
    component: 'ALevelTutorAlAinPage',
    seo: {
      title: 'Online A-Level Tutor Al Ain | Cambridge, Edexcel & AQA | Ustaad',
      description: 'Private 1-to-1 online A-Level tutors in Al Ain for Cambridge, Pearson Edexcel & OxfordAQA. Supporting students from AABA, AAESS, AAIS & GES in Year 12 & 13. Book a free consultation.',
      keywords: 'A-Level tutor Al Ain, A Level tutoring Al Ain, online A Level tuition Al Ain, Cambridge A Level tutor Al Ain, Edexcel A Level tutor Al Ain, A Level maths tutor Al Ain, A Level physics tutor Al Ain, A Level chemistry tutor Al Ain, private tutor Al Ain British curriculum, Al Ain sixth form tuition',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-10-28'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'A-Level', url: '/a-level' }, { name: 'A-Level Tutor Al Ain', url: '/a-level-tutor-al-ain' }]
  },
  {
    path: '/igcse-tutor-al-ain',
    component: 'IGCSETutorAlAinPage',
    seo: {
      title: 'IGCSE Tutor Al Ain | Online 1-to-1 IGCSE Tutors | Ustaad',
      description: 'Online 1-to-1 IGCSE tutors for Al Ain students in Years 9-11. Cambridge and Edexcel Maths, Sciences and English. Free 15-min orientation with your first lesson.',
      keywords: 'IGCSE tutor Al Ain, IGCSE tutors Al Ain, private IGCSE tutor Al Ain, online IGCSE tutor UAE, Cambridge IGCSE tutor Al Ain, Edexcel IGCSE tutor Al Ain, IGCSE Maths tutor Al Ain, IGCSE Physics tutor Al Ain, IGCSE Chemistry tutor Al Ain, IGCSE Biology tutor Al Ain, IGCSE English tutor Al Ain, IGCSE exam preparation Al Ain, Core vs Extended IGCSE, IGCSE Paper 6 help',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-11-11'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IGCSE', url: '/igcse' }, { name: 'IGCSE Tutor Al Ain', url: '/igcse-tutor-al-ain' }]
  },
  {
    path: '/gcse-tutor-al-ain',
    component: 'GCSETutorAlAinPage',
    seo: {
      title: 'GCSE Tutor Al Ain | Online AQA, Edexcel & OCR | Ustaad',
      description: 'Online 1-to-1 GCSE tutors for Al Ain students in Years 10 and 11. AQA, Edexcel and OCR Maths, English and Science. Free 15-min orientation.',
      keywords: 'GCSE tutor Al Ain, GCSE tuition Al Ain, online GCSE tutor Al Ain, GCSE maths tutor Al Ain, GCSE English tutor Al Ain, GCSE science tutor Al Ain, AQA GCSE tutor, Edexcel GCSE tutor, OCR GCSE tutor, GCSE Foundation and Higher tier, GCSE resit Al Ain',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-11-11'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'GCSE', url: '/gcse' }, { name: 'GCSE Tutor Al Ain', url: '/gcse-tutor-al-ain' }]
  },
  {
    path: '/maths-tutor-al-ain',
    component: 'MathsTutorAlAinPage',
    seo: {
      title: 'Maths Tutor Al Ain | Online IGCSE, A-Level & IB | Ustaad',
      description: 'Online 1-to-1 maths tutor for Al Ain students: IGCSE, GCSE, A-Level, IB AA/AI and American maths, matched to the exact exam board. Free 15-min orientation.',
      keywords: 'maths tutor Al Ain, math tutor Al Ain, maths tuition Al Ain, online maths tutor Al Ain, private maths tutor Al Ain, IGCSE maths tutor, GCSE maths tutor, A-Level maths tutor, Further Maths tutor, IB Maths AA tutor, IB Maths AI tutor, AP Calculus tutor, SAT Math tutor, non-calculator paper',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-11-25'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Maths', url: '/maths' }, { name: 'Maths Tutor Al Ain', url: '/maths-tutor-al-ain' }]
  },
  {
    path: '/ib-tutor-al-ain',
    component: 'IBTutorAlAinPage',
    seo: {
      title: 'IB Tutor Al Ain | Online MYP & DP Tutors, SL and HL | Ustaad',
      description: 'Online IB tutor for Al Ain students: MYP criteria, DP Maths AA/AI, sciences, Economics and English at SL or HL, plus IA, EE and TOK guidance.',
      keywords: 'IB tutor Al Ain, IB tutors Al Ain, IB tutoring Al Ain, online IB tutor UAE, MYP tutor Al Ain, IB Diploma tutor Al Ain, IB Maths AA tutor, IB Maths AI tutor, IB Physics tutor, IB Chemistry tutor, IB Biology tutor, IB Economics tutor, IA help, Extended Essay support, TOK essay help, IGCSE to IB',
      priority: 0.90,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'IB Curriculum', url: '/ib-curriculum' }, { name: 'IB Tutor Al Ain', url: '/ib-tutor-al-ain' }]
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
      title: 'Understands Physics but Low Marks? How to Fix It | Ustaad',
      description: 'Your child understands physics but still gets low marks? See where physics marks are lost, from units to method marks, plus a 4-week plan for UAE students.',
      keywords: 'understands physics but low marks, why do I lose marks in physics, physics method marks, physics exam technique, IGCSE physics marks, A-Level physics marks',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-25'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' }, { name: 'Understands Physics but Low Marks', url: '/blogs/physics-understanding-vs-marks' }]
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
    path: '/blogs/read-uae-school-report-card',
    component: 'ReadSchoolReportCardBlog',
    seo: {
      title: 'Read a UAE School Report Card Like a Counsellor | Ustaad',
      description: 'Report card comments follow patterns most parents miss. A UAE education counsellor decodes the phrases teachers use, and what they actually mean.',
      priority: 0.9,
      changefreq: 'monthly'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Read UAE School Report Card', url: '/blogs/read-uae-school-report-card' }]
  },
  {
    path: '/blogs/10-questions-hiring-private-tutor-abu-dhabi',
    component: 'HirePrivateTutorAbuDhabiBlog',
    seo: {
      title: '10 Questions Before Hiring a Private Tutor in Abu Dhabi | Ustaad',
      description: 'Ten practical questions UAE parents should ask before hiring a private tutor in Abu Dhabi, plus a free interview worksheet to compare tutors side by side.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: '10 Questions Before Hiring a Tutor', url: '/blogs/10-questions-hiring-private-tutor-abu-dhabi' }]
  },
  {
    path: '/blogs/private-tutoring-uae-parent-guide',
    component: 'PrivateTutoringParentGuideBlog',
    seo: {
      title: 'Private Tutoring in the UAE: A Complete Parent Guide | Ustaad',
      description: 'Is private tutoring legal in the UAE? What does it cost, and how do you choose the right tutor? Complete parent guide covering KHDA and ADEK rules, 2026 pricing, and vetting checklist.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-09-11'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }, { name: 'Private Tutoring in the UAE', url: '/blogs/private-tutoring-uae-parent-guide' }]
  },
  {
    path: '/blogs/illusion-of-competence-revision-false-confidence',
    component: 'IllusionOfCompetenceBlog',
    seo: {
      title: 'Illusion of Competence: Why Re-Reading Notes Fails | Ustaad',
      description: 'Why highlighting and re-reading notes tricks the brain into false exam confidence, and how UAE students can build real retrieval strength.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-09-21'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' }, { name: 'The Illusion of Competence', url: '/blogs/illusion-of-competence-revision-false-confidence' }]
  },
  {
    path: '/blogs/what-does-y-intercept-mean-maths',
    component: 'WhatDoesYInterceptMeanBlog',
    seo: {
      title: 'What Does the y-Intercept Actually Mean? | Ustaad',
      description: 'What does the y-intercept mean in a real-life graph? A maths teacher explains how to read it in context, and when it means nothing at all.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-10-02'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' },
      { name: 'What Does the y-Intercept Mean?', url: '/blogs/what-does-y-intercept-mean-maths' }
    ]
  },
  {
    path: '/blogs/how-much-should-parents-help-with-homework',
    component: 'HomeworkHelpBalanceBlog',
    seo: {
      title: 'How Much Should Parents Help With Homework? | Ustaad UAE',
      description: "How much homework help is too much? A practical UAE parent's guide to supporting your child without doing the work for them, by subject and age.",
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-10-05'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
      { name: 'How Much Should Parents Help With Homework?', url: '/blogs/how-much-should-parents-help-with-homework' }
    ]
  },
  {
    path: '/blogs/why-teenagers-procrastinate-on-revision',
    component: 'WhyTeenagersProcrastinateBlog',
    seo: {
      title: 'Why Teenagers Procrastinate on Revision | Ustaad UAE',
      description: "Your teenager won't start revising? Procrastination is rarely laziness. Learn the psychology behind it and 7 evidence-based ways UAE parents can help.",
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-10-09'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
      { name: 'Why Teenagers Procrastinate on Revision', url: '/blogs/why-teenagers-procrastinate-on-revision' }
    ]
  },
  {
    path: '/blogs/maths-anxiety-teenagers-signs-causes-help',
    component: 'MathsAnxietyTeenagersBlog',
    seo: {
      title: 'Maths Anxiety in Teenagers: Signs, Causes and Help | Ustaad',
      description: "Does your child say they're bad at maths? Learn the signs of maths anxiety in teenagers, what causes it, and practical ways UAE parents can help.",
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-10-20'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
      { name: 'Maths Anxiety in Teenagers', url: '/blogs/maths-anxiety-teenagers-signs-causes-help' }
    ]
  },
  {
    path: '/blogs/why-students-freeze-exam-questions-scaffolding-trap',
    component: 'WhyStudentsFreezeExamQuestionsBlog',
    seo: {
      title: 'The Scaffolding Trap: Why Students Freeze on Exam Questions | Ustaad',
      description: 'Your child follows every lesson but freezes on exam questions? Learn how the scaffolding trap works and how UAE parents can build exam independence.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
      { name: 'The Scaffolding Trap', url: '/blogs/why-students-freeze-exam-questions-scaffolding-trap' }
    ]
  },
  {
    path: '/blogs/how-to-read-examiner-reports-igcse-a-level',
    component: 'HowToReadExaminerReportsBlog',
    seo: {
      title: 'How to Read an Examiner Report: IGCSE, A-Level and IB | Ustaad',
      description: 'Learn where to find Cambridge, Edexcel and IB examiner reports and how to use them after each past paper. Includes a free printable error log.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' },
      { name: 'How to Read an Examiner Report for IGCSE, A-Level and IB', url: '/blogs/how-to-read-examiner-reports-igcse-a-level' }
    ]
  },
  {
    path: '/blogs/winter-break-revision-plan-uae-students',
    component: 'WinterBreakRevisionPlanBlog',
    seo: {
      title: 'Winter Break Revision Plan for UAE Students 2026-27 | Ustaad',
      description: 'UAE winter break runs 14 Dec to 3 Jan. A realistic three-week revision plan for IGCSE and A-Level students, with rest built in, before mocks.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Parent Guidance', url: '/blogs/parent-guidance' },
      { name: 'Winter Break Revision Plan', url: '/blogs/winter-break-revision-plan-uae-students' }
    ]
  },
  {
    path: '/blogs/ib-exams-grade-boundaries-uae',
    component: 'IBExamsGradeBoundariesBlog',
    seo: {
      title: 'IB Exams and Grade Boundaries: UAE Guide 2027 | Ustaad',
      description: 'How IB exams are graded: the 1–7 scale, 45 points, how grade boundaries are set, predicted grades, results day and remarks, explained for UAE students.',
      keywords: 'IB grade boundaries, IB exams, IB predicted grades, IB Diploma points, IB 45 points, IB passing score, IB results day 2027, IB exams UAE, IB remark',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Academic & Exam Skills', url: '/blogs/academic-exam-skills' }, { name: 'IB Exams and Grade Boundaries', url: '/blogs/ib-exams-grade-boundaries-uae' }]
  },
  {
    path: '/blogs/american-to-british-curriculum-uae',
    component: 'AmericanToBritishCurriculumBlog',
    seo: {
      title: 'American to British Curriculum Switch: UAE Guide | Ustaad',
      description: 'Moving from an American to a British school in the UAE? How grades map to year groups, when to switch before IGCSE, the usual gaps and a 6-week catch-up plan.',
      keywords: 'American to British curriculum UAE, switching from American to British school, American grade to British year group, Grade 9 to Year 10, joining IGCSE from American curriculum, changing schools Dubai, curriculum transfer UAE',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-27'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }, { name: 'American to British Curriculum', url: '/blogs/american-to-british-curriculum-uae' }]
  },
  {
    path: '/blogs/how-to-choose-a-level-subjects-uae',
    component: 'ChooseALevelSubjectsBlog',
    seo: {
      title: 'How to Choose A-Level Subjects: UAE Parent Guide | Ustaad',
      description: 'How many A-Levels to take, which subjects medicine, engineering and economics ask for, UAE university checks and the mistakes to avoid in Year 11.',
      keywords: 'how to choose A-Level subjects, A-Level subject choices, how many A-Levels should I take, A-Level subjects for medicine, A-Levels for engineering, A-Level options UAE, A-Levels for UAE universities',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }, { name: 'How to Choose A-Level Subjects', url: '/blogs/how-to-choose-a-level-subjects-uae' }]
  },
  {
    path: '/blogs/phone-distraction-while-studying-uae',
    component: 'PhoneDistractionStudyingBlog',
    seo: {
      title: 'Phone Distraction While Studying: A UAE Guide | Ustaad',
      description: 'Why a phone breaks focus even on silent, what the UAE school phone ban means for study at home, and a 5-step plan to revise without phone distraction.',
      keywords: 'phone distraction while studying, how to stop getting distracted by phone while studying, how to focus while studying, phone ban UAE schools, screen time and grades, study tips for teenagers UAE',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-20'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' }, { name: 'Phone Distraction While Studying', url: '/blogs/phone-distraction-while-studying-uae' }]
  },
  {
    path: '/blogs/what-is-igcse-full-form-meaning-uae',
    component: 'WhatIsIGCSEBlog',
    seo: {
      title: 'What Is IGCSE? Full Form, Meaning, Grades | Ustaad',
      description: 'IGCSE full form and meaning for UAE parents: who sets the exams, subjects, Core and Extended tiers, A*–G and 9–1 grades, exam dates and results.',
      keywords: 'what is IGCSE, IGCSE full form, IGCSE meaning, Cambridge IGCSE, IGCSE curriculum, IGCSE grades, IGCSE subjects, IGCSE exam dates, IGCSE results, Edexcel International GCSE',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-13'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }, { name: 'What Is IGCSE?', url: '/blogs/what-is-igcse-full-form-meaning-uae' }]
  },
  {
    path: '/blogs/how-to-choose-igcse-subjects-uae',
    component: 'ChooseIGCSESubjectsBlog',
    seo: {
      title: 'How to Choose IGCSE Subjects: A UAE Parent Guide | Ustaad',
      description: 'Choosing IGCSE subjects in Year 9? A UAE parent guide to core and option subjects, triple vs combined science, how many IGCSEs, and keeping A-Level doors open.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-23'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Parent Guidance', url: '/blogs/parent-guidance' }, { name: 'How to Choose IGCSE Subjects', url: '/blogs/how-to-choose-igcse-subjects-uae' }]
  },
  {
    path: '/blogs/area-under-graph-meaning-physics-maths',
    component: 'AreaUnderGraphBlog',
    seo: {
      title: 'Area Under a Graph: What It Means in Physics & Maths | Ustaad',
      description: 'What the area under a velocity-time, force-extension or current-time graph represents, how to calculate it, and how to estimate it under curves. IGCSE, GCSE and A-Level.',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-11'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blogs' }, { name: 'Academic', url: '/blogs/academic-exam-skills' }, { name: 'Area Under a Graph', url: '/blogs/area-under-graph-meaning-physics-maths' }]
  },
  {
    path: '/blogs/chatgpt-for-studying-does-ai-hurt-memory',
    component: 'ChatGPTForStudyingBlog',
    seo: {
      title: 'ChatGPT for Studying: Does AI Hurt Memory? | Ustaad',
      description: "Does ChatGPT hurt students' memory? See what research shows, plus 6 rules to use AI for revision without losing what you learn. A guide for UAE families.",
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2026-11-02'
    },
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blog', url: '/blogs' },
      { name: 'Psychology of Learning', url: '/blogs/psychology-of-learning' },
      { name: 'ChatGPT for Studying: Does AI Hurt Memory?', url: '/blogs/chatgpt-for-studying-does-ai-hurt-memory' }
    ]
  },
  {
    path: '/privacy',
    component: 'PrivacyPage',
    seo: {
      title: 'Privacy Policy | Ustaad UAE · Data Protection & PDPL',
      description: 'Official Privacy Policy of Ustaad UAE. Learn how we safeguard student and parent data under UAE Federal Decree Law No. 45 of 2021 (PDPL), KHDA & ADEK standards.',
      priority: 0.3,
      changefreq: 'monthly',
      lastmod: '2026-09-11'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }]
  },
  {
    path: '/terms',
    component: 'TermsPage',
    seo: {
      title: 'Terms of Use | Ustaad UAE · Tutoring Agreement & Service Terms',
      description: 'Official Terms of Use for Ustaad UAE private tutoring services. Transparent policies on tutoring sessions and orientations, 24-hour rescheduling, tutor replacement guarantee, and UAE governing law.',
      priority: 0.3,
      changefreq: 'monthly',
      lastmod: '2026-09-11'
    },
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Terms of Use', url: '/terms' }]
  }
];

// Helper to get route by path
export function getRouteByPath(path: string): RouteConfig | undefined {
  return ROUTES.find(r => r.path === path);
}

// Generate sitemap XML — homepage uses trailing slash; all other locs have none
export function generateSitemap(baseUrl = 'https://ustaad.ae'): string {
  const today = new Date().toISOString().split('T')[0];
  const urlEntries = ROUTES.filter(r => !r.seo.noindex).map(route => {
    const loc = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    const lastmod = route.seo.lastmod || today;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.seo.changefreq || 'monthly'}</changefreq>
    <priority>${route.seo.priority || 0.5}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}
