import { renderToString } from "react-dom/server";
import { StaticRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ROUTES } from "./routes.config.ts";

// Component imports - keep alphabetized for maintainability
import ALevelPage from "./app/ALevelPage.tsx";
import AboutPage from "./app/AboutPage.tsx";
import AccountingPage from "./app/AccountingPage.tsx";
import AmericanCurriculumPage from "./app/AmericanCurriculumPage.tsx";
import APPage from "./app/APPage.tsx";
import App from "./app/App.tsx";
import AcademicBlogsPage from "./app/AcademicBlogsPage.tsx";
import BiologyPage from "./app/BiologyPage.tsx";
import BlogsPage from "./app/BlogsPage.tsx";
import BritishCurriculumPage from "./app/BritishCurriculumPage.tsx";
import BusinessPage from "./app/BusinessPage.tsx";
import ChemistryPage from "./app/ChemistryPage.tsx";
import ContactPage from "./app/ContactPage.tsx";
import CurriculumPage from "./app/CurriculumPage.tsx";
import DPHLPage from "./app/DPHLPage.tsx";
import DPSLPage from "./app/DPSLPage.tsx";
import EconomicsPage from "./app/EconomicsPage.tsx";
import EngineeringPage from "./app/EngineeringPage.tsx";
import EnglishPage from "./app/EnglishPage.tsx";
import ExamPreparationPage from "./app/ExamPreparationPage.tsx";
import FinancePage from "./app/FinancePage.tsx";
import GCSEPage from "./app/GCSEPage.tsx";
import HighSchoolPage from "./app/HighSchoolPage.tsx";
import HowItWorksPage from "./app/HowItWorksPage.tsx";
import IBCurriculumPage from "./app/IBCurriculumPage.tsx";
import ExamPanicBlog from "./app/ExamPanicBlog.tsx";
import IGCSEMathsLowMarksBlog from "./app/IGCSEMathsLowMarksBlog.tsx";
import IGCSEBiology6MarkBlog from "./app/IGCSEBiology6MarkBlog.tsx";
import IGCSEPage from "./app/IGCSEPage.tsx";
import ChemistryLandingPage from "./app/ChemistryLandingPage.tsx";
import ChemistryFadesBlog from "./app/ChemistryFadesBlog.tsx";
import EarlySignsChemistryBlog from "./app/EarlySignsChemistryBlog.tsx";
import ReadSchoolReportCardBlog from "./app/ReadSchoolReportCardBlog.tsx";
import ALevelIndependentThinkingBlog from "./app/ALevelIndependentThinkingBlog.tsx";
import IGCSEPreparationPastPapersBlog from "./app/IGCSEPreparationPastPapersBlog.tsx";
import IGCSEvsGCSEBlog from "./app/IGCSEvsGCSEBlog.tsx";
import MathematicsLanding from "./app/MathematicsLanding.tsx";
import MathsPage from "./app/MathsPage.tsx";
import MiddleSchoolPage from "./app/MiddleSchoolPage.tsx";
import MYPPage from "./app/MYPPage.tsx";
import ParentGuidanceBlogsPage from "./app/ParentGuidanceBlogsPage.tsx";
import PhysicsLanding from "./app/PhysicsLanding.tsx";
import PhysicsPage from "./app/PhysicsPage.tsx";
import PsychologyBlogsPage from "./app/PsychologyBlogsPage.tsx";
import PhysicsUnderstandingMarksBlog from "./app/PhysicsUnderstandingMarksBlog.tsx";
import IGCSEPhysicsFormulasBlog from "./app/IGCSEPhysicsFormulasBlog.tsx";
import PrivacyPage from "./app/PrivacyPage.tsx";
import TermsPage from "./app/TermsPage.tsx";
import SciencesPage from "./app/SciencesPage.tsx";
import StatisticsPage from "./app/StatisticsPage.tsx";
import SubjectsPage from "./app/SubjectsPage.tsx";
import TutorsPage from "./app/TutorsPage.tsx";
import EditorialPage from "./app/EditorialPage.tsx";
import AuthorPage from "./app/AuthorPage.tsx";
import BiologyTutorAbuDhabiPage from "./app/BiologyTutorAbuDhabiPage.tsx";
import IGCSETutorLanding from "./app/IGCSETutorAbuDhabiPage.tsx";
import GCSETutorLanding from "./app/GCSETutorAbuDhabiPage.tsx";
import ALevelTutorLanding from "./app/ALevelTutorAbuDhabiPage.tsx";
import IBTutorAbuDhabiPage from "./app/IBTutorAbuDhabiPage.tsx";

// Component registry - maps component names to actual components
const COMPONENT_REGISTRY: Record<string, React.ComponentType> = {
  App,
  AboutPage,
  ALevelPage,
  ALevelIndependentThinkingBlog,
  IGCSEPreparationPastPapersBlog,
  AccountingPage,
  AcademicBlogsPage,
  AmericanCurriculumPage,
  APPage,
  AuthorPage,
  BiologyTutorAbuDhabiPage,
  IBTutorAbuDhabiPage,
  BiologyPage,
  BlogsPage,
  BritishCurriculumPage,
  BusinessPage,
  ChemistryFadesBlog,
  EarlySignsChemistryBlog,
  ReadSchoolReportCardBlog,
  ChemistryPage,
  ContactPage,
  CurriculumPage,
  DPHLPage,
  DPSLPage,
  EconomicsPage,
  EditorialPage,
  EngineeringPage,
  EnglishPage,
  ExamPreparationPage,
  FinancePage,
  GCSEPage,
  HighSchoolPage,
  HowItWorksPage,
  IBCurriculumPage,
  ChemistryLandingPage,
  ExamPanicBlog,
  IGCSEMathsLowMarksBlog,
  IGCSEBiology6MarkBlog,
  IGCSEPhysicsFormulasBlog,
  IGCSEvsGCSEBlog,
  IGCSEPage,
  IGCSETutorLanding,
  GCSETutorLanding,
  ALevelTutorLanding,
  MathematicsLanding,
  MathsPage,
  MiddleSchoolPage,
  MYPPage,
  PhysicsLanding,
  ParentGuidanceBlogsPage,
  PhysicsPage,
  PsychologyBlogsPage,
  PhysicsUnderstandingMarksBlog,
  PrivacyPage,
  SciencesPage,
  TermsPage,
  StatisticsPage,
  SubjectsPage,
  TutorsPage,
};

export async function render(url: string) {
  const helmetContext: Record<string, unknown> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Routes>
          {ROUTES.map(route => {
            const Component = COMPONENT_REGISTRY[route.component];
            if (!Component) {
              console.warn(`[entry-server] Component not found: ${route.component}`);
              return null;
            }
            return <Route key={route.path} path={route.path} element={<Component />} />;
          })}
        </Routes>
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as { 
    helmet: { 
      title: { toString(): string }; 
      meta: { toString(): string }; 
      link: { toString(): string }; 
      script: { toString(): string } 
    } 
  };

  return { html, helmet };
}
