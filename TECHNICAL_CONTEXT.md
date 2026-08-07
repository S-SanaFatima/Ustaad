# Ustaad Website — Technical Context

## 1. Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Routing:** Custom static routing; no React Router in the traditional SPA sense. Pages are rendered individually and pre-rendered to static HTML.
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin) + inline styles for gradients/glassmorphism.
- **Animations:** `motion/react` (Framer Motion) for scroll/viewport effects and accordions.
- **Icons:** `lucide-react`
- **SEO:** `SEOHead` component + JSON-LD schemas in `src/app/shared/schemas.ts`
- **Build output:** `dist/client/` (static site) and `dist/server/` (SSR entry).

## 2. Project Structure

```
/Volumes/Untitled2/WebProjects/Ustaad/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main app shell (used for SSR/prerender)
│   │   ├── pages/                  # Page components (HomePage, TutorsPage, ContactPage, etc.)
│   │   ├── shared/                 # Reusable components (Header, Footer, Layout, SEOHead, etc.)
│   │   └── *.tsx                   # Landing/subject/curriculum pages live at root of app/
│   ├── imports/                    # Markdown/pasted content for reference
│   ├── content/                    # Static content files (e.g. blog content)
│   └── main.tsx, entry-server.tsx    # Vite entry points
├── prerender.mjs                   # Static site generation script
├── routes.config.mjs                 # Route → component mapping for prerender + sitemap
├── vite.config.ts                  # Vite config
├── package.json                    # Scripts & dependencies
├── dist/                           # Build output (not committed to dist-files)
└── deploy.html                     # Standalone deploy page
```

## 3. Routing & Pages

Pages are defined in `routes.config.mjs` as:

```js
{
  path: '/tutors',
  component: 'TutorsPage',
  title: '...',
  description: '...',
  keywords: '...'
}
```

Each route is pre-rendered to:

```
dist/client/<route>/index.html
```

- Home page renders to `dist/client/index.html`
- Sub-pages render to their own folder, e.g. `dist/client/tutors/index.html`
- The `sitemap.xml` is generated automatically during prerender.

## 4. Build & Deployment

### Source repo (where we make changes)

- `/Volumes/Untitled2/WebProjects/Ustaad` — primary source of truth.
- Work happens on the `dist-files` branch.

### Deploy repo

- `/Volumes/Untitled2/WebProjects/dist-deploy` — second checkout used to build and deploy.
- Same GitHub repo, checked out at `dist-files` for builds, then deploys to `deploy-latest` branch.

### Build commands

```bash
pnpm install        # if node_modules missing
pnpm build          # runs Vite build + prerender.mjs
```

### Deployment commands

```bash
# In dist-deploy on dist-files
git add -A && git commit -m "..."
git push origin dist-files

# Copy dist/client to deploy-latest and push
rm -rf /tmp/ustaad-deploy && cp -r dist/client /tmp/ustaad-deploy
git checkout deploy-latest
git fetch origin && git reset --hard origin/deploy-latest
git clean -fdx -e node_modules
cp -r /tmp/ustaad-deploy/. .
git add -A && git commit -m "Deploy: ..."
git push origin deploy-latest
git checkout dist-files
```

### cPanel update

```bash
git fetch origin && git reset --hard origin/deploy-latest
```

> **Never force-push to `deploy-latest`.** If it diverges, reset it to `dist-files` first, then push.

## 5. Styling & Design System

### Primary colors

- **Navy:** `#0a1f3d`, `#0f4a9b`, `#0a3a79`
- **Gold/brand:** `#C7A24A`, `#A8892A`, `#7A5E10`
- **Surfaces:** White backgrounds with subtle `slate-50` / `gray-50` sections

### Effects

- **Glassmorphism:** `backdropFilter: blur(...)`, semi-transparent gradients, `box-shadow` layers.
- **Gradients:** `bg-gradient-to-r from-[#C7A24A] to-[#A8892A]` for gold accents.
- **Gold button:** `GoldButton` shared component.
- **Typography:** Large extrabold headings, tight tracking, centered subtexts in section headers (but **hero sections remain left-aligned**).

## 6. SEO & Structured Data

- `SEOHead` component sets `<title>`, `<meta name="description">`, Open Graph, Twitter, canonical, and JSON-LD.
- `src/app/shared/schemas.ts` exports helpers:
  - `localBusinessSchema`
  - `breadcrumbSchema`
  - `faqSchema`
  - `articleSchema` (for blog posts)
- `routes.config.mjs` drives automatic sitemap generation.
- All pages should include a canonical URL and unique meta description.

## 7. Important Constants

- **Booking URL:** `BOOKING = '/contact#form'` (used across CTAs)
- **Logo:** `/ustaad-private-tutors-uae-logo.png`
- **WhatsApp CTA:** Shared WhatsApp button component

## 8. State Management

- **No global state library** (no Redux, Zustand, etc.).
- Local `useState` for UI state (mobile menus, accordions, forms).
- `useRef` + `useEffect` for click-outside handlers and form inputs.

## 9. Recently Completed Changes

- **Header navigation:** Curriculum/Subjects top-level links now navigate directly to `/curriculum` and `/subjects`. Removed "View All Curricula" / "View All Subjects" dropdown links.
- **Tutors page:** Centered subtexts in non-hero sections, modernized FAQ to two-column Math Landing style, compacted sizes. **Hero section reverted to left-aligned** after over-application.
- **Maths landing page:** Premium glassmorphism, single-line badges, auto-scrolling marquee, refined CTA/badge alignment.
- **FAQ sections:** How It Works, Subjects, and Curriculum pages updated to the latest two-column FAQ design with centered icon/text alignment. Similar `items-start` → `items-center` alignment fixes applied across the site.
- **Blog 1:** Polished layout with justified paragraphs, styled equation blocks, compact typography, and smaller image heights. CTA button reads "Book Your Free Trial". Editorial redesign + tech SEO improvements also applied. Removed "More from Ustaad" section.
- **Blogs page:** Proper grid layout, pagination, and bottom CTA using the shared `FinalCTA` component (matching other pages). StatsBar removed.
- **Blog 2 published:** `ExamPanicBlog.tsx` — "My Child Only Panics Right Before Exams". URL: `/blogs/exam-panic-before-exams-uae`. Has Table of Contents sidebar, `SectionHeading` component, FAQs, and author/reviewer sections.
- **MathematicsLanding.tsx:** Full premium maths landing page at `/maths-tutor-abu-dhabi` and `/mathtestlanding`. Uses `MathGrid` SVG background, `SchoolsMarquee`, `StatsBar`, `FinalCTA`.
- **PhysicsLanding.tsx:** Full premium physics landing page at `/physics-tutor-abu-dhabi`. Uses `PhysGrid` SVG background, similar structure to MathematicsLanding.
- **BlogPostPage.tsx:** Generic dynamic blog post renderer using `useParams` + `getBlogPost()` from `src/content/blog.ts`. Not used by the published hand-crafted blog pages (which have their own components).
- **SciencesPage.tsx:** Added at `/sciences`.
- **Sitewide SEO fixes:** All 12+ pages got unique hero image alt texts, og:image fixes, and 301 redirect rules.
- **Branch note:** The Ustaad source repo is now on `main` branch (not `dist-files`). Claude Code worked from `main`. All changes are in `/Volumes/Untitled2/WebProjects/Ustaad` on the `main` branch. The `/Volumes/Untitled2/WebProjects/dist-deploy` checkout is used for building and deploying to `deploy-latest`.

## 10. Adding New Pages (checklist)

> **CRITICAL: Every route must be registered in THREE places, or it will 404.**
> Missing any one causes a silent failure:
> - Missing in `main.tsx` → server returns correct HTML (200), but React hydrates and the client-side catch-all renders the in-app "404 - Page Not Found". This looks like a server 404 but is actually client-side.
> - Missing in `entry-server.tsx` → prerender falls back to empty HTML.
> - Missing in `routes.config.*` → no prerendered file/sitemap entry.

1. Create the component in `src/app/` or `src/app/pages/`.
2. **Register the route in all THREE places:**
   - `src/routes.config.ts` **and** `routes.config.mjs` (prerender + sitemap)
   - `src/entry-server.tsx` (import + `COMPONENT_REGISTRY`) — SSR/prerender
   - `src/main.tsx` (import + `<Route>`) — **client-side hydration router (most commonly forgotten)**
3. Wrap with `Layout` and `SEOHead`.
4. Add breadcrumb schema if needed.
5. Run `pnpm build` locally and verify the generated `dist/client/<route>/index.html`.
6. Commit, push to `dist-files`, and deploy to `deploy-latest`.

## 11. Blog Posts

### Published

- **Blog 1:** `Hours of Revision, Still Low Marks: The Real Reason Why IGCSE Maths Students Suffer`
  - URL: `/blogs/igcse-maths-revision-low-marks`
  - Component: `src/app/IGCSEMathsLowMarksBlog.tsx`
  - Images: `public/images/blogs/`
    - `igcse-maths-student-revision-uae.webp` (hero)
    - `igcse-maths-equation-rearrangement-diagram.webp` (inline 1)
    - `igcse-student-low-maths-marks-confidence.webp` (inline 2)
    - `diagnostic-igcse-maths-tutoring-uae.webp` (inline 3)
  - SEO: Article schema, breadcrumb schema, FAQ schema, OG image, canonical, sitemap entry.

- **Blog 2:** `"My Child Only Panics Right Before Exams": What UAE Parents Often Notice Too Late`
  - URL: `/blogs/exam-panic-before-exams-uae`
  - Component: `src/app/ExamPanicBlog.tsx`
  - Images: `public/images/blogs/`
    - `uae-teenager-exam-stress-quiet.jpeg` (hero)
    - `uae-parent-teen-calm-conversation.jpeg` (inline)
    - `unfinished-homework-exam-stress-signs.png` (inline)
    - `student-exam-hall-mock-stress.png` (inline)
  - Author: Nimra Shahzada | Education Counsellor & Student Support Specialist
  - Reviewer: Nida Iqbal | MPhil in Education Leadership and Management
  - Has Table of Contents (`TOC_ITEMS`), `SectionHeading` component, 5 FAQs
  - SEO: Article schema, breadcrumb schema, FAQ schema, OG image, canonical, sitemap entry.

### Interlinks status

- `maths tutoring in Abu Dhabi` → `/maths-tutor-abu-dhabi` ✅ (live)
- `maths exam anxiety` → `/blogs/exam-panic-before-exams-uae` ✅ (live — Blog 2 published, update Blog 1 link)
- `physics tutoring` → `/physics-tutor-abu-dhabi` — still plain text until confirmed (currently the physics landing exists at `/physics-tutor-abu-dhabi`, so can be linked)

**Action needed:** Update Blog 1 (`IGCSEMathsLowMarksBlog.tsx`) to link `maths exam anxiety` anchor text to `/blogs/exam-panic-before-exams-uae` now that Blog 2 is live.

### Recommended pattern for future posts

- Store content in `content/blogs/` as Markdown or JSON.
- Use a build-time script to generate pages from the content.
- Output routes like `/blogs/<slug>` and add them to `routes.config.mjs`.
- Use `SEOHead` with Article schema and OG image.
- Auto-generate `/blogs/index.html` listing, RSS feed, and sitemap entries.

## 12. Live Routes Summary

| Path | Component |
|------|-----------|
| `/` | `App` |
| `/about` | `AboutPage` |
| `/contact` | `ContactPage` |
| `/tutors` | `TutorsPage` |
| `/subjects` | `SubjectsPage` |
| `/how-it-works` | `HowItWorksPage` |
| `/curriculum` | `CurriculumPage` |
| `/british-curriculum` | `BritishCurriculumPage` |
| `/american-curriculum` | `AmericanCurriculumPage` |
| `/ib-curriculum` | `IBCurriculumPage` |
| `/igcse` | `IGCSEPage` |
| `/gcse` | `GCSEPage` |
| `/a-level` | `ALevelPage` |
| `/myp` | `MYPPage` |
| `/dp-sl` | `DPSLPage` |
| `/dp-hl` | `DPHLPage` |
| `/ap` | `APPage` |
| `/middle-school` | `MiddleSchoolPage` |
| `/high-school` | `HighSchoolPage` |
| `/maths` | `MathsPage` |
| `/mathematics` | `MathsPage` |
| `/maths-tutor-abu-dhabi` | `MathematicsLanding` |
| `/physics` | `PhysicsPage` |
| `/physics-tutor-abu-dhabi` | `PhysicsLanding` |
| `/chemistry` | `ChemistryPage` |
| `/biology` | `BiologyPage` |
| `/english` | `EnglishPage` |
| `/economics` | `EconomicsPage` |
| `/business` | `BusinessPage` |
| `/finance` | `FinancePage` |
| `/accounting` | `AccountingPage` |
| `/engineering` | `EngineeringPage` |
| `/statistics` | `StatisticsPage` |
| `/sciences` | `SciencesPage` |
| `/exam-preparation` | `ExamPreparationPage` |
| `/blogs` | `BlogsPage` |
| `/blogs/igcse-maths-revision-low-marks` | `IGCSEMathsLowMarksBlog` |
| `/blogs/exam-panic-before-exams-uae` | `ExamPanicBlog` |
| `/mathtestlanding` | `MathematicsLanding` |

## 13. Notes for Future Work

- Keep hero sections left-aligned unless explicitly requested.
- When changing the header, update both the Ustaad source and the `dist-deploy` copy, then rebuild.
- When centering text, apply only to the specific section requested.
- Avoid committing `dist/` to `dist-files`; it is cleaned after deploy.
- **Source branch:** Claude Code changed the default working branch to `main` in the Ustaad source repo. Confirm which branch is active before making changes.
- **Blog 1 pending:** Link `maths exam anxiety` text to `/blogs/exam-panic-before-exams-uae` now that Blog 2 is live.
