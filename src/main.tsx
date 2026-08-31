import { lazy, Suspense, Component, type ReactNode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles/index.css";
import "./styles/fonts.css";

type PageLoader = () => Promise<{ default: React.ComponentType }>;

// Shared loaders — lazy() uses the same import so the prerendered route chunk
// is fetched before hydration (prevents React #418 HTML mismatch).
const loadApp = () => import('./app/App');
const loadAboutPage = () => import('./app/AboutPage');
const loadCurriculumPage = () => import('./app/CurriculumPage');
const loadAmericanCurriculumPage = () => import('./app/AmericanCurriculumPage');
const loadBritishCurriculumPage = () => import('./app/BritishCurriculumPage');
const loadIBCurriculumPage = () => import('./app/IBCurriculumPage');
const loadIGCSEPage = () => import('./app/IGCSEPage');
const loadGCSEPage = () => import('./app/GCSEPage');
const loadALevelPage = () => import('./app/ALevelPage');
const loadMiddleSchoolPage = () => import('./app/MiddleSchoolPage');
const loadHighSchoolPage = () => import('./app/HighSchoolPage');
const loadAPPage = () => import('./app/APPage');
const loadMYPPage = () => import('./app/MYPPage');
const loadDPSLPage = () => import('./app/DPSLPage');
const loadDPHLPage = () => import('./app/DPHLPage');
const loadSubjectsPage = () => import('./app/SubjectsPage');
const loadTutorsPage = () => import('./app/TutorsPage');
const loadContactPage = () => import('./app/ContactPage');
const loadPhysicsPage = () => import('./app/PhysicsPage');
const loadBusinessPage = () => import('./app/BusinessPage');
const loadBiologyPage = () => import('./app/BiologyPage');
const loadMathsPage = () => import('./app/MathsPage');
const loadStatisticsPage = () => import('./app/StatisticsPage');
const loadEnglishPage = () => import('./app/EnglishPage');
const loadEconomicsPage = () => import('./app/EconomicsPage');
const loadFinancePage = () => import('./app/FinancePage');
const loadAccountingPage = () => import('./app/AccountingPage');
const loadEngineeringPage = () => import('./app/EngineeringPage');
const loadChemistryPage = () => import('./app/ChemistryPage');
const loadExamPreparationPage = () => import('./app/ExamPreparationPage');
const loadHowItWorksPage = () => import('./app/HowItWorksPage');
const loadBlogsPage = () => import('./app/BlogsPage');
const loadIGCSEBiology6MarkBlog = () => import('./app/IGCSEBiology6MarkBlog');
const loadIGCSEMathsLowMarksBlog = () => import('./app/IGCSEMathsLowMarksBlog');
const loadExamPanicBlog = () => import('./app/ExamPanicBlog');
const loadGCSERevisionTipsParentsBlog = () => import('./app/GCSERevisionTipsParentsBlog');
const loadMathematicsLanding = () => import('./app/MathematicsLanding');
const loadPhysicsLanding = () => import('./app/PhysicsLanding');
const loadChemistryLandingPage = () => import('./app/ChemistryLandingPage');
const loadSciencesPage = () => import('./app/SciencesPage');
const loadPrivacyPage = () => import('./app/PrivacyPage');
const loadTermsPage = () => import('./app/TermsPage');
const loadEditorialPage = () => import('./app/EditorialPage');
const loadAuthorPage = () => import('./app/AuthorPage');
const loadPhysicsUnderstandingMarksBlog = () => import('./app/PhysicsUnderstandingMarksBlog');
const loadIGCSEPhysicsFormulasBlog = () => import('./app/IGCSEPhysicsFormulasBlog');
const loadChemistryFadesBlog = () => import('./app/ChemistryFadesBlog');
const loadEarlySignsChemistryBlog = () => import('./app/EarlySignsChemistryBlog');
const loadReadSchoolReportCardBlog = () => import('./app/ReadSchoolReportCardBlog');
const loadHirePrivateTutorAbuDhabiBlog = () => import('./app/HirePrivateTutorAbuDhabiBlog');
const loadIGCSEvsGCSEBlog = () => import('./app/IGCSEvsGCSEBlog');
const loadALevelIndependentThinkingBlog = () => import('./app/ALevelIndependentThinkingBlog');
const loadIGCSEPreparationPastPapersBlog = () => import('./app/IGCSEPreparationPastPapersBlog');
const loadBiologyLanding = () => import('./app/BiologyTutorAbuDhabiPage');
const loadIGCSETutorLanding = () => import('./app/IGCSETutorAbuDhabiPage');
const loadGCSETutorLanding = () => import('./app/GCSETutorAbuDhabiPage');
const loadALevelTutorLanding = () => import('./app/ALevelTutorAbuDhabiPage');
const loadIBTutorLanding = () => import('./app/IBTutorAbuDhabiPage');
const loadAcademicBlogsPage = () => import('./app/AcademicBlogsPage');
const loadPsychologyBlogsPage = () => import('./app/PsychologyBlogsPage');
const loadParentGuidanceBlogsPage = () => import('./app/ParentGuidanceBlogsPage');

const PAGE_LOADERS: Record<string, PageLoader> = {
  '/': loadApp,
  '/about': loadAboutPage,
  '/curriculum': loadCurriculumPage,
  '/american-curriculum': loadAmericanCurriculumPage,
  '/british-curriculum': loadBritishCurriculumPage,
  '/ib-curriculum': loadIBCurriculumPage,
  '/igcse': loadIGCSEPage,
  '/gcse': loadGCSEPage,
  '/a-level': loadALevelPage,
  '/middle-school': loadMiddleSchoolPage,
  '/high-school': loadHighSchoolPage,
  '/ap': loadAPPage,
  '/myp': loadMYPPage,
  '/dp-sl': loadDPSLPage,
  '/dp-hl': loadDPHLPage,
  '/subjects': loadSubjectsPage,
  '/tutors': loadTutorsPage,
  '/contact': loadContactPage,
  '/physics': loadPhysicsPage,
  '/business': loadBusinessPage,
  '/biology': loadBiologyPage,
  '/maths': loadMathsPage,
  '/statistics': loadStatisticsPage,
  '/english': loadEnglishPage,
  '/economics': loadEconomicsPage,
  '/finance': loadFinancePage,
  '/accounting': loadAccountingPage,
  '/engineering': loadEngineeringPage,
  '/chemistry': loadChemistryPage,
  '/exam-preparation': loadExamPreparationPage,
  '/how-it-works': loadHowItWorksPage,
  '/blogs': loadBlogsPage,
  '/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions': loadIGCSEBiology6MarkBlog,
  '/blogs/igcse-maths-revision-low-marks': loadIGCSEMathsLowMarksBlog,
  '/blogs/exam-panic-before-exams-uae': loadExamPanicBlog,
  '/blogs/physics-understanding-vs-marks': loadPhysicsUnderstandingMarksBlog,
  '/blogs/igcse-physics-formulas-exam': loadIGCSEPhysicsFormulasBlog,
  '/blogs/why-chemistry-fades-from-memory': loadChemistryFadesBlog,
  '/blogs/early-signs-chemistry-help-uae': loadEarlySignsChemistryBlog,
  '/blogs/read-uae-school-report-card': loadReadSchoolReportCardBlog,
  '/blogs/10-questions-hiring-private-tutor-abu-dhabi': loadHirePrivateTutorAbuDhabiBlog,
  '/blogs/igcse-vs-gcse-curriculum-differences-uae': loadIGCSEvsGCSEBlog,
  '/blogs/a-level-tutoring-uae-independent-thinking': loadALevelIndependentThinkingBlog,
  '/blogs/igcse-preparation-past-papers-final-step': loadIGCSEPreparationPastPapersBlog,
  '/blogs/gcse-revision-tips-uae-parents': loadGCSERevisionTipsParentsBlog,
  '/sciences': loadSciencesPage,
  '/maths-tutor-abu-dhabi': loadMathematicsLanding,
  '/physics-tutor-abu-dhabi': loadPhysicsLanding,
  '/chemistry-tutor-abu-dhabi': loadChemistryLandingPage,
  '/biology-tutor-abu-dhabi': loadBiologyLanding,
  '/igcse-tutor-abu-dhabi': loadIGCSETutorLanding,
  '/gcse-tutor-abu-dhabi': loadGCSETutorLanding,
  '/a-level-tutor-abu-dhabi': loadALevelTutorLanding,
  '/ib-tutor-abu-dhabi': loadIBTutorLanding,
  '/editorial': loadEditorialPage,
  '/authors/saira-s': loadAuthorPage,
  '/authors/nimra-shahzada': loadAuthorPage,
  '/authors/nida-iqbal': loadAuthorPage,
  '/authors/ustaad-subject-specialists': loadAuthorPage,
  '/privacy': loadPrivacyPage,
  '/terms': loadTermsPage,
  '/blogs/academic-exam-skills': loadAcademicBlogsPage,
  '/blogs/psychology-of-learning': loadPsychologyBlogsPage,
  '/blogs/parent-guidance': loadParentGuidanceBlogsPage,
};

const App = lazy(loadApp);
const AboutPage = lazy(loadAboutPage);
const CurriculumPage = lazy(loadCurriculumPage);
const AmericanCurriculumPage = lazy(loadAmericanCurriculumPage);
const BritishCurriculumPage = lazy(loadBritishCurriculumPage);
const IBCurriculumPage = lazy(loadIBCurriculumPage);
const IGCSEPage = lazy(loadIGCSEPage);
const GCSEPage = lazy(loadGCSEPage);
const ALevelPage = lazy(loadALevelPage);
const MiddleSchoolPage = lazy(loadMiddleSchoolPage);
const HighSchoolPage = lazy(loadHighSchoolPage);
const APPage = lazy(loadAPPage);
const MYPPage = lazy(loadMYPPage);
const DPSLPage = lazy(loadDPSLPage);
const DPHLPage = lazy(loadDPHLPage);
const SubjectsPage = lazy(loadSubjectsPage);
const TutorsPage = lazy(loadTutorsPage);
const ContactPage = lazy(loadContactPage);
const PhysicsPage = lazy(loadPhysicsPage);
const BusinessPage = lazy(loadBusinessPage);
const BiologyPage = lazy(loadBiologyPage);
const MathsPage = lazy(loadMathsPage);
const StatisticsPage = lazy(loadStatisticsPage);
const EnglishPage = lazy(loadEnglishPage);
const EconomicsPage = lazy(loadEconomicsPage);
const FinancePage = lazy(loadFinancePage);
const AccountingPage = lazy(loadAccountingPage);
const EngineeringPage = lazy(loadEngineeringPage);
const ChemistryPage = lazy(loadChemistryPage);
const ExamPreparationPage = lazy(loadExamPreparationPage);
const HowItWorksPage = lazy(loadHowItWorksPage);
const BlogsPage = lazy(loadBlogsPage);
const IGCSEBiology6MarkBlog = lazy(loadIGCSEBiology6MarkBlog);
const IGCSEMathsLowMarksBlog = lazy(loadIGCSEMathsLowMarksBlog);
const ExamPanicBlog = lazy(loadExamPanicBlog);
const GCSERevisionTipsParentsBlog = lazy(loadGCSERevisionTipsParentsBlog);
const MathematicsLanding = lazy(loadMathematicsLanding);
const PhysicsLanding = lazy(loadPhysicsLanding);
const ChemistryLandingPage = lazy(loadChemistryLandingPage);
const SciencesPage = lazy(loadSciencesPage);
const PrivacyPage = lazy(loadPrivacyPage);
const TermsPage = lazy(loadTermsPage);
const EditorialPage = lazy(loadEditorialPage);
const AuthorPage = lazy(loadAuthorPage);
const PhysicsUnderstandingMarksBlog = lazy(loadPhysicsUnderstandingMarksBlog);
const IGCSEPhysicsFormulasBlog = lazy(loadIGCSEPhysicsFormulasBlog);
const ChemistryFadesBlog = lazy(loadChemistryFadesBlog);
const EarlySignsChemistryBlog = lazy(loadEarlySignsChemistryBlog);
const ReadSchoolReportCardBlog = lazy(loadReadSchoolReportCardBlog);
const HirePrivateTutorAbuDhabiBlog = lazy(loadHirePrivateTutorAbuDhabiBlog);
const IGCSEvsGCSEBlog = lazy(loadIGCSEvsGCSEBlog);
const ALevelIndependentThinkingBlog = lazy(loadALevelIndependentThinkingBlog);
const IGCSEPreparationPastPapersBlog = lazy(loadIGCSEPreparationPastPapersBlog);
const BiologyLanding = lazy(loadBiologyLanding);
const IGCSETutorLanding = lazy(loadIGCSETutorLanding);
const GCSETutorLanding = lazy(loadGCSETutorLanding);
const ALevelTutorLanding = lazy(loadALevelTutorLanding);
const IBTutorLanding = lazy(loadIBTutorLanding);
const AcademicBlogsPage = lazy(loadAcademicBlogsPage);
const PsychologyBlogsPage = lazy(loadPsychologyBlogsPage);
const ParentGuidanceBlogsPage = lazy(loadParentGuidanceBlogsPage);

function normalizePath(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
}

async function preloadCurrentRoute() {
  const loader = PAGE_LOADERS[normalizePath(window.location.pathname)];
  if (loader) await loader();
}

const NotFound = () => (
  <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Georgia, serif', color: '#0a1f3d' }}>
    <h1>Page not found</h1>
    <p>This URL is not a published page on Ustaad.</p>
    <p><a href="/">Return to homepage</a></p>
  </div>
);

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h1>Something went wrong</h1>
          <p>Please refresh the page or try again later.</p>
          <a href="/">Go Home</a>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
          <Route path="/"                                    element={<App />} />
          <Route path="/about"                               element={<AboutPage />} />
          <Route path="/curriculum"                          element={<CurriculumPage />} />
          <Route path="/american-curriculum"                 element={<AmericanCurriculumPage />} />
          <Route path="/british-curriculum"                  element={<BritishCurriculumPage />} />
          <Route path="/ib-curriculum"                       element={<IBCurriculumPage />} />
          <Route path="/igcse"                               element={<IGCSEPage />} />
          <Route path="/gcse"                               element={<GCSEPage />} />
          <Route path="/a-level"                             element={<ALevelPage />} />
          <Route path="/middle-school"                       element={<MiddleSchoolPage />} />
          <Route path="/high-school"                         element={<HighSchoolPage />} />
          <Route path="/ap"                                  element={<APPage />} />
          <Route path="/myp"                                 element={<MYPPage />} />
          <Route path="/dp-sl"                               element={<DPSLPage />} />
          <Route path="/dp-hl"                               element={<DPHLPage />} />
          <Route path="/subjects"                            element={<SubjectsPage />} />
          <Route path="/tutors"                              element={<TutorsPage />} />
          <Route path="/contact"                             element={<ContactPage />} />
          <Route path="/physics"                             element={<PhysicsPage />} />
          <Route path="/business"                            element={<BusinessPage />} />
          <Route path="/biology"                             element={<BiologyPage />} />
          <Route path="/maths"                               element={<MathsPage />} />
          <Route path="/statistics"                          element={<StatisticsPage />} />
          <Route path="/english"                             element={<EnglishPage />} />
          <Route path="/economics"                           element={<EconomicsPage />} />
          <Route path="/finance"                             element={<FinancePage />} />
          <Route path="/accounting"                          element={<AccountingPage />} />
          <Route path="/engineering"                         element={<EngineeringPage />} />
          <Route path="/chemistry"                           element={<ChemistryPage />} />
          <Route path="/exam-preparation"                    element={<ExamPreparationPage />} />
          <Route path="/how-it-works"                        element={<HowItWorksPage />} />
          <Route path="/blogs"                               element={<BlogsPage />} />
          <Route path="/blogs/academic-exam-skills"          element={<AcademicBlogsPage />} />
          <Route path="/blogs/psychology-of-learning"        element={<PsychologyBlogsPage />} />
          <Route path="/blogs/parent-guidance"               element={<ParentGuidanceBlogsPage />} />
          <Route path="/blogs/why-igcse-biology-students-lose-marks-on-6-mark-questions"element={<IGCSEBiology6MarkBlog />} />
          <Route path="/blogs/igcse-maths-revision-low-marks"element={<IGCSEMathsLowMarksBlog />} />
          <Route path="/blogs/exam-panic-before-exams-uae"   element={<ExamPanicBlog />} />
          <Route path="/blogs/physics-understanding-vs-marks" element={<PhysicsUnderstandingMarksBlog />} />
          <Route path="/blogs/igcse-physics-formulas-exam"  element={<IGCSEPhysicsFormulasBlog />} />
          <Route path="/blogs/why-chemistry-fades-from-memory" element={<ChemistryFadesBlog />} />
          <Route path="/blogs/early-signs-chemistry-help-uae" element={<EarlySignsChemistryBlog />} />
          <Route path="/blogs/read-uae-school-report-card" element={<ReadSchoolReportCardBlog />} />
          <Route path="/blogs/10-questions-hiring-private-tutor-abu-dhabi" element={<HirePrivateTutorAbuDhabiBlog />} />
          <Route path="/blogs/igcse-vs-gcse-curriculum-differences-uae" element={<IGCSEvsGCSEBlog />} />
          <Route path="/blogs/a-level-tutoring-uae-independent-thinking" element={<ALevelIndependentThinkingBlog />} />
          <Route path="/blogs/igcse-preparation-past-papers-final-step" element={<IGCSEPreparationPastPapersBlog />} />
          <Route path="/blogs/gcse-revision-tips-uae-parents" element={<GCSERevisionTipsParentsBlog />} />
          <Route path="/sciences"                            element={<SciencesPage />} />
          <Route path="/maths-tutor-abu-dhabi"               element={<MathematicsLanding />} />
          <Route path="/physics-tutor-abu-dhabi"             element={<PhysicsLanding />} />
          <Route path="/chemistry-tutor-abu-dhabi"           element={<ChemistryLandingPage />} />
          <Route path="/biology-tutor-abu-dhabi"             element={<BiologyLanding />} />
          <Route path="/igcse-tutor-abu-dhabi"               element={<IGCSETutorLanding />} />
          <Route path="/gcse-tutor-abu-dhabi"                element={<GCSETutorLanding />} />
          <Route path="/a-level-tutor-abu-dhabi"             element={<ALevelTutorLanding />} />
          <Route path="/ib-tutor-abu-dhabi"                  element={<IBTutorLanding />} />
          <Route path="/editorial"                           element={<EditorialPage />} />
          <Route path="/authors/saira-s"                     element={<AuthorPage />} />
          <Route path="/authors/nimra-shahzada"              element={<AuthorPage />} />
          <Route path="/authors/nida-iqbal"                  element={<AuthorPage />} />
          <Route path="/authors/ustaad-subject-specialists"  element={<AuthorPage />} />
          <Route path="/privacy"                             element={<PrivacyPage />} />
          <Route path="/terms"                               element={<TermsPage />} />
          <Route path="*"                                    element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

const AppTree = (
  <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </ErrorBoundary>
);

async function bootstrap() {
  const container = document.getElementById("root")!;
  const path = normalizePath(window.location.pathname);
  const hasPrerender = container.innerHTML.trim() !== "";
  // If Arabic is active, Google Translate rewrites DOM text before React loads — skip hydration.
  const isTranslated = /(?:^|;\s*)googtrans=\/en\/ar(?:;|$)/.test(document.cookie);

  if (hasPrerender) {
    await preloadCurrentRoute();
  }

  const mount = () => createRoot(container).render(AppTree);

  // Home: hydrate prerender for fast first paint. Subpages: client mount only —
  // hydration mismatches (motion, translate, lazy chunks) were replacing About/etc. with Home.
  if (hasPrerender && path === '/' && !isTranslated) {
    let remounted = false;
    const root = hydrateRoot(container, AppTree, {
      onRecoverableError() {
        if (remounted) return;
        remounted = true;
        root.unmount();
        container.innerHTML = '';
        mount();
      },
    });
  } else {
    mount();
  }
}

bootstrap();
