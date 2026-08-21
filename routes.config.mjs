// Route Registry - JavaScript version for build tools
// Mirror of src/routes.config.ts - keep in sync!

export const ROUTES = [
  // Core Pages
  { path: '/', component: 'App', priority: 1.0, changefreq: 'weekly', lastmod: '2026-07-28' },
  { path: '/about', component: 'AboutPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/contact', component: 'ContactPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/tutors', component: 'TutorsPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/subjects', component: 'SubjectsPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/how-it-works', component: 'HowItWorksPage', priority: 0.7, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/editorial', component: 'EditorialPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-07-28' },

  // Authors (E-E-A-T)
  { path: '/authors/saira-s', component: 'AuthorPage', priority: 0.7, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/authors/nimra-shahzada', component: 'AuthorPage', priority: 0.7, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/authors/nida-iqbal', component: 'AuthorPage', priority: 0.7, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/authors/ustaad-subject-specialists', component: 'AuthorPage', priority: 0.7, changefreq: 'monthly', lastmod: '2026-07-28' },

  // Curriculum
  { path: '/curriculum', component: 'CurriculumPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/british-curriculum', component: 'BritishCurriculumPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/igcse', component: 'IGCSEPage', priority: 0.95, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/gcse', component: 'GCSEPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/a-level', component: 'ALevelPage', priority: 0.95, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/ib-curriculum', component: 'IBCurriculumPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/myp', component: 'MYPPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/dp-sl', component: 'DPSLPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/dp-hl', component: 'DPHLPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/american-curriculum', component: 'AmericanCurriculumPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/ap', component: 'APPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/middle-school', component: 'MiddleSchoolPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/high-school', component: 'HighSchoolPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },

  // Subjects
  { path: '/maths', component: 'MathsPage', priority: 0.95, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/physics', component: 'PhysicsPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/chemistry', component: 'ChemistryPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/biology', component: 'BiologyPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/english', component: 'EnglishPage', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/economics', component: 'EconomicsPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/business', component: 'BusinessPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/accounting', component: 'AccountingPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/finance', component: 'FinancePage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/statistics', component: 'StatisticsPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/engineering', component: 'EngineeringPage', priority: 0.8, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/sciences', component: 'SciencesPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },

  // Other
  { path: '/exam-preparation', component: 'ExamPreparationPage', priority: 0.85, changefreq: 'monthly', lastmod: '2026-06-22' },
  { path: '/blogs', component: 'BlogsPage', priority: 0.9, changefreq: 'weekly', lastmod: '2026-07-28' },
  { path: '/blogs/academic-exam-skills', component: 'AcademicBlogsPage', priority: 0.9, changefreq: 'weekly', lastmod: '2026-08-13' },
  { path: '/blogs/psychology-of-learning', component: 'PsychologyBlogsPage', priority: 0.9, changefreq: 'weekly', lastmod: '2026-08-13' },
  { path: '/blogs/parent-guidance', component: 'ParentGuidanceBlogsPage', priority: 0.9, changefreq: 'weekly', lastmod: '2026-08-13' },
  { path: '/blogs/exam-panic-before-exams-uae', component: 'ExamPanicBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-23' },
  { path: '/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions', component: 'IGCSEBiology6MarkBlog', priority: 0.7, changefreq: 'monthly', lastmod: '2026-07-01' },
  { path: '/blogs/igcse-maths-revision-low-marks', component: 'IGCSEMathsLowMarksBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-16' },
  { path: '/blogs/physics-understanding-vs-marks', component: 'PhysicsUnderstandingMarksBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-07-07' },
  { path: '/blogs/igcse-physics-formulas-exam', component: 'IGCSEPhysicsFormulasBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-06-30' },
  { path: '/blogs/why-chemistry-fades-from-memory', component: 'ChemistryFadesBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-07-20' },
  { path: '/blogs/early-signs-chemistry-help-uae', component: 'EarlySignsChemistryBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/blogs/read-uae-school-report-card', component: 'ReadSchoolReportCardBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-08-10' },
  { path: '/blogs/igcse-vs-gcse-curriculum-differences-uae', component: 'IGCSEvsGCSEBlog', priority: 0.9, changefreq: 'monthly', lastmod: '2026-08-21' },

  // City × subject landings
  { path: '/maths-tutor-abu-dhabi', component: 'MathematicsLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/physics-tutor-abu-dhabi', component: 'PhysicsLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/chemistry-tutor-abu-dhabi', component: 'ChemistryLandingPage', priority: 0.90, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/biology-tutor-abu-dhabi', component: 'BiologyLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/igcse-tutor-abu-dhabi', component: 'IGCSETutorLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-07-28' },
  { path: '/gcse-tutor-abu-dhabi', component: 'GCSETutorLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-08-12' },
  { path: '/a-level-tutor-abu-dhabi', component: 'ALevelTutorLanding', priority: 0.90, changefreq: 'monthly', lastmod: '2026-08-19' },

  { path: '/privacy', component: 'PrivacyPage', priority: 0.3, changefreq: 'yearly', lastmod: '2026-07-11' },
  { path: '/terms', component: 'TermsPage', priority: 0.3, changefreq: 'yearly', lastmod: '2026-07-11' },
];

// Generate sitemap XML from routes — noindex / redirected duplicates excluded
export function generateSitemap(baseUrl = 'https://ustaad.ae') {
  const urlEntries = ROUTES.filter(r => !r.noindex).map(route => {
    const loc = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    return `  <url>
    <loc>${loc}</loc>
    ${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>\n    ` : ''}<changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}
