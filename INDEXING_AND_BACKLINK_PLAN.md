# Ustaad.ae: Indexing Completion and Backlink Plan

**Site:** https://ustaad.ae (Ustaad Private Tutors UAE, online and in-home tutoring for British, IB and American curricula)
**Date:** 30 October 2026
**Pages in sitemap:** 92 (all indexable, 0 audit errors)
**Last known index status (21 Sep report):** Google 66+, Bing 111

---

## Part 1. Indexing the remaining pages

### 1.1 What was blocking discovery (fixed in this commit)

| Problem | Effect on indexing | Fix |
| :--- | :--- | :--- |
| Footer city links (all 17 Abu Dhabi, Dubai and Al Ain landing pages) were only rendered after a click | The prerendered HTML Googlebot reads had **zero** sitewide links to the highest-value commercial pages. Each one relied on 3 to 12 in-content links. | `Footer.tsx` now always renders the lists and collapses them with CSS. Every page now links to all 17 city pages. |
| Blog hub linked only to the 3 category pages | New posts were 2 clicks from the hub and 3 from the homepage, so they waited longer in "Discovered, not indexed". | `BlogsPage.tsx` now shows the 8 newest posts, so each new article is 1 click from the hub. |
| `npm run index` pointed at `google_indexer.mjs`, which does not exist | The command failed silently for anyone following it. | Now runs the IndexNow script for pages changed in the last 3 days. `npm run index:all` sends every URL. |
| IndexNow was manual only | Bing, Yandex, Seznam and Naver learned about new pages only when someone remembered to ping. | The deploy workflow now pings IndexNow after every FTP deploy for pages whose `lastmod` is in the last 3 days. |

**Rule going forward:** every time a page's content changes, update its `lastmod` in `routes.config.mjs`. The sitemap, IndexNow ping and Google all depend on that date.

### 1.2 Google: manual "Request indexing" queue

Google ignores IndexNow, and its Indexing API is only for job posts and livestreams. The reliable route is Search Console's URL Inspection tool, which allows roughly 10 to 12 requests per day per property.

Steps for each URL:
1. Open Search Console, select the `ustaad.ae` property.
2. Paste the URL into the top "Inspect any URL" bar.
3. If it says "URL is not on Google", click **Test live URL**, then **Request indexing**.
4. If it says "URL is on Google", skip it.

**Day 1: commercial city pages and new hubs**
1. https://ustaad.ae/a-level-tutor-al-ain
2. https://ustaad.ae/ib-tutor-dubai
3. https://ustaad.ae/biology-tutor-dubai
4. https://ustaad.ae/a-level-tutor-dubai
5. https://ustaad.ae/chemistry-tutor-dubai
6. https://ustaad.ae/physics-tutor-dubai
7. https://ustaad.ae/maths-tutor-dubai
8. https://ustaad.ae/igcse-tutor-dubai
9. https://ustaad.ae/gcse-tutor-dubai
10. https://ustaad.ae/blogs

**Day 2: updated curriculum hubs and newest posts**
1. https://ustaad.ae/a-level
2. https://ustaad.ae/igcse
3. https://ustaad.ae/british-curriculum
4. https://ustaad.ae/ap
5. https://ustaad.ae/blogs/winter-break-revision-plan-uae-students
6. https://ustaad.ae/blogs/how-to-read-examiner-reports-igcse-a-level
7. https://ustaad.ae/blogs/why-students-freeze-exam-questions-scaffolding-trap
8. https://ustaad.ae/blogs/maths-anxiety-teenagers-signs-causes-help
9. https://ustaad.ae/blogs/parent-teacher-meeting-questions-uae
10. https://ustaad.ae/blogs/silly-mistakes-maths-exams

**Day 3: remaining posts published since the last report**
1. https://ustaad.ae/blogs/why-teenagers-procrastinate-on-revision
2. https://ustaad.ae/blogs/how-much-should-parents-help-with-homework
3. https://ustaad.ae/blogs/what-does-y-intercept-mean-maths
4. https://ustaad.ae/blogs/sleep-and-memory-why-all-nighters-backfire
5. https://ustaad.ae/blogs/command-words-igcse-a-level-exams
6. https://ustaad.ae/blogs/illusion-of-competence-revision-false-confidence
7. https://ustaad.ae/ib-tutor-abu-dhabi
8. https://ustaad.ae/gcse-tutor-abu-dhabi
9. https://ustaad.ae/biology-tutor-abu-dhabi
10. https://ustaad.ae/authors/saira-s

**After the queue:**
- In Search Console, open **Sitemaps** and resubmit `https://ustaad.ae/sitemap.xml`.
- Open **Pages > Why pages aren't indexed**. For "Discovered, currently not indexed" and "Crawled, currently not indexed", export the list and push those URLs through the same daily queue.
- In Bing Webmaster Tools, run **URL Submission** for any URL the CI ping missed. Bing allows far more per day than Google.

### 1.3 Internal links still worth adding (editorial task)

These posts have the fewest contextual links from other pages. Add one natural link to each from the suggested source pages.

| Weak page | Add a link from |
| :--- | :--- |
| /blogs/igcse-vs-gcse-curriculum-differences-uae | /igcse, /gcse, /igcse-tutor-dubai, /gcse-tutor-dubai |
| /blogs/mock-exams-uae-not-what-they-were | /exam-preparation, /blogs/exam-stamina-uae-students |
| /blogs/how-to-read-examiner-reports-igcse-a-level | /a-level, /blogs/command-words-igcse-a-level-exams, /a-level-tutor-dubai |
| /blogs/private-tutoring-uae-parent-guide | /how-it-works, /tutors, /blogs/10-questions-hiring-private-tutor-abu-dhabi |
| /blogs/what-does-y-intercept-mean-maths | /maths, /maths-tutor-abu-dhabi, /maths-tutor-dubai |
| /blogs/a-level-tutoring-uae-independent-thinking | /a-level, /a-level-tutor-abu-dhabi, /a-level-tutor-al-ain |
| /blogs/illusion-of-competence-revision-false-confidence | /exam-preparation, /blogs/igcse-maths-revision-low-marks |
| /blogs/parent-teacher-meeting-questions-uae | /about, /blogs/private-tutoring-uae-parent-guide |
| /authors/saira-s | Each post Saira wrote or reviewed should link to the profile in the byline |

---

## Part 2. Backlink plan (12 weeks)

### 2.1 Goals

| Metric | Target by week 12 |
| :--- | :--- |
| New referring domains | 40 to 60 |
| UAE or education-relevant domains among them | At least 60% |
| Links pointing at city landing pages, not only the homepage | At least 30% |
| Branded anchors ("Ustaad", "ustaad.ae") | 50 to 60% of all anchors |
| Exact-match anchors ("maths tutor Dubai") | Under 10% |

Run a baseline backlink check first (Ahrefs Webmaster Tools is free for verified owners, or Bing Webmaster Tools > Backlinks). Re-check every 4 weeks.

### 2.2 Anchor and target rules

- Point directory and profile links at the **homepage** or the **city page for that listing's city**.
- Point guest posts and press mentions at the **most relevant blog post or city page**, never only the homepage.
- Use the same business name, address, phone and website on every listing (this is called NAP consistency). Use exactly: **Ustaad Private Tutors UAE · 800 9005 · +971 56 124 9005 · https://ustaad.ae**.
- Never buy links from link farms, PBNs or "1000 backlinks for $20" gigs. Google's spam policies treat these as manipulation and can demote the whole site.

### 2.3 Phase 1 (weeks 1 to 2): foundation citations

These are quick, mostly free, and give Google trust signals for local search. Do all of them first.

**Core map and search profiles**
| Site | Why | Link target |
| :--- | :--- | :--- |
| [Google Business Profile](https://business.google.com) | Biggest local ranking factor. Add services, areas served, posts weekly, ask every family for a review. | Homepage |
| [Bing Places](https://www.bingplaces.com) | Feeds Bing, Copilot and ChatGPT search. Import from Google Business Profile. | Homepage |
| [Apple Business Connect](https://businessconnect.apple.com) | Apple Maps and Siri for iPhone-heavy UAE parents. | Homepage |
| [Waze for Business](https://www.waze.com/business) | Only if there is a physical address families visit. | Homepage |

**UAE business directories**

Listing terms and fees change often. Check each site's current sign-up page before submitting, and skip any that ask for payment for a "dofollow" link.

| Site | Notes |
| :--- | :--- |
| [Yello.ae](https://www.yello.ae) | UAE verified business directory. Free basic listing. |
| [YellowPages UAE](https://www.yellowpages-uae.com) | Long-running UAE directory. |
| [Connect.ae](https://www.connect.ae) | UAE directory with category pages. |
| [2GIS Dubai](https://2gis.ae) | Map directory widely used in the UAE. |
| [Cybo](https://www.cybo.com) | Global directory, UAE section. |
| [FindLocal UAE](https://www.findlocal.ae) | UAE business listings. |
| [Cylex UAE](https://www.cylex-uae.com) | Free listing, indexed well. |
| [Hotfrog UAE](https://www.hotfrog.ae) | Free listing. |
| [All.biz UAE](https://ae.all.biz) | Business catalogue. |
| [Dubai Chamber directory](https://www.dubaichamber.com) | Available to Chamber members. High authority. |
| [Abu Dhabi Chamber directory](https://www.abudhabichamber.ae) | Same, for the Abu Dhabi licence. |

**Social and brand profiles** (most are nofollow but they help Google connect the brand, and several already exist)
Facebook, Instagram, X and LinkedIn are already linked in the footer. Add: [YouTube](https://youtube.com), [Pinterest](https://pinterest.com) (pin blog diagrams), [Crunchbase](https://www.crunchbase.com), [Trustpilot](https://www.trustpilot.com), [Medium](https://medium.com), [Substack](https://substack.com), [Quora Spaces](https://www.quora.com), [Linktree](https://linktr.ee).

### 2.4 Phase 2 (weeks 2 to 4): education and tutoring directories

These carry topical relevance, which matters more than raw authority.

| Site | Type | Link target |
| :--- | :--- | :--- |
| [Edarabia](https://www.edarabia.com/tutors/) | Largest UAE education directory, about 780 tutors listed. Get a company listing and ask for reviews. | Homepage |
| [MyPrivateTutor UAE](https://www.myprivatetutor.ae) | Heavily indexed tutor marketplace with Dubai area pages. Create an institute profile. | Homepage |
| [WhichSchoolAdvisor](https://whichschooladvisor.com) | UAE's main school-review publication. Pitch articles, sponsor a guide, or list as a service provider. | City pages |
| [SchoolsCompared](https://schoolscompared.com) | Dubai and Abu Dhabi school comparison site. Contributor and advertising options. | City pages |
| [Superprof UAE](https://www.superprof.ae) | Create profiles for named tutors (Tabraiz Khan, Fahad Khan) that link back. | Tutor profile pages |
| [TeacherOn](https://www.teacheron.com) | Tutor profiles with website field. | Homepage |
| [Tutor Hunt](https://www.tutorhunt.com) | UK-based, strong for British-curriculum searches. | Homepage |
| [Preply](https://preply.com) | Tutor profiles. | Homepage |
| [Tutopiya](https://www.tutopiya.com), [Plus Plus Tutors](https://plusplustutors.com) | Competitors. Do not link-swap, but study which sites link to them (see 2.8). | n/a |
| [Expat Woman](https://www.expatwoman.com) | UAE parent community with business directory and forums. | Homepage |
| [Sassy Mama Dubai](https://www.sassymamadubai.com) | Parent lifestyle site. Pitch inclusion in "best tutors" and "exam season" roundups. | City pages |
| [Time Out Dubai](https://www.timeoutdubai.com) / [Time Out Abu Dhabi](https://www.timeoutabudhabi.com) | Pitch for back-to-school and exam-season lists. | City pages |

### 2.5 Phase 3 (weeks 3 to 8): earned editorial links

This is where real ranking power comes from.

**A. Expert-quote platforms (weekly habit, 30 minutes a day)**
| Platform | Cost | Notes |
| :--- | :--- | :--- |
| [Qwoted](https://www.qwoted.com) | Free tier, paid Pro | Closest successor to the old HARO. Filter for education, parenting, UAE and Middle East. |
| [Source of Sources](https://sosrcs.com) | Free | Run by HARO's original founder. Reported highest share of follow links. |
| [Featured.com](https://featured.com) | Paid | Owns the HARO brand now. Many links land on Featured's own network, so check the domain before answering. |
| [Help a B2B Writer](https://helpab2bwriter.com) | Free | Useful for business, economics and accounting angles. |
| X and LinkedIn: search `#journorequest` plus `education`, `UAE`, `exam` | Free | Journalists at Gulf News and Khaleej Times post here. |

Answer as **Nida Iqbal, Nimra Shahzada or the subject specialists**. Their author pages already exist, which helps journalists verify credentials.

**B. UAE press pitches (one story per month)**
Targets: [Gulf News](https://gulfnews.com) Education, [Khaleej Times](https://www.khaleejtimes.com) Education, [The National](https://www.thenationalnews.com) UAE, [Gulf Today](https://www.gulftoday.ae), [Arabian Business](https://www.arabianbusiness.com), [Zawya](https://www.zawya.com) (press release distribution).

Story angles already backed by existing content:
- Winter break revision plan (14 Dec to 3 Jan): pitch in the last week of November.
- "UAE exams return: students who never sat one", tied to the KHDA and ADEK exam calendar.
- Parent-teacher meeting questions, pitched before term-two meetings.
- Maths anxiety in teenagers, with a small survey of Ustaad families as original data.
- Sleep and all-nighters before mocks, pitched in January.

**C. Linkable assets (build once, outreach for months)**
- The **homework check-in sheet PDF** already in `/public` can be promoted to school PTAs and parent bloggers as a free download.
- Publish a **"UAE Exam Calendar 2026–27"** page (IGCSE, A-Level, IB, AP dates for UAE time zones). Schools and parent blogs link to calendars.
- Turn the IGCSE vs GCSE grading explanation into a **one-page 9–1 vs A*–G conversion chart** image with an embed code.
- Publish a **yearly "Ustaad UAE Student Stress Survey"** with 100+ responses. Original data is the strongest press hook.

**D. Guest posts (2 per month)**
Look for sites with real traffic that accept contributor articles:
- Search: `"write for us" education UAE`, `"guest post" parenting Dubai`, `"contribute" IGCSE blog`.
- Good fits: UAE parenting blogs, international-school teacher blogs, UK tutoring and exam-board study blogs, ed-tech blogs.
- Each post links once to the most relevant Ustaad article or city page, inside the body text.

**E. Community and Q&A (ongoing, low volume, high trust)**
- [Reddit](https://www.reddit.com): r/dubai, r/abudhabi, r/UAE, r/igcse, r/alevel, r/IBO. Answer genuinely. Only link when it directly answers the question.
- [The Student Room](https://www.thestudentroom.co.uk): A-Level and GCSE forums.
- [Quora](https://www.quora.com): answer "best tutor in Dubai", "IGCSE vs GCSE", "how to revise for A-Level Physics" style questions with links to the matching post.

### 2.6 Phase 4 (weeks 6 to 12): local partnerships

These are hard for competitors to copy.
- **School PTAs and parent WhatsApp communities:** offer a free 30-minute "How to read your child's report card" webinar. Ask the school or PTA to list it on their events page.
- **Scholarships:** a small "Ustaad STEM Scholarship" (for example AED 2,500 of free tutoring) gets listed on university and school scholarship pages.
- **University careers and tutor-recruitment pages:** post tutor vacancies on UAE university job boards (Zayed University, UAEU, AUS, Heriot-Watt Dubai, Middlesex Dubai). These are .ac.ae links.
- **Complementary businesses:** learning-support therapists, educational psychologists, school uniform shops, bookshops and coding schools. Offer a resource-page swap of one link each, only where it genuinely helps families.
- **Sponsorships:** school Maths or Science Olympiad, MUN events and robotics competitions usually list sponsors with a link.

### 2.7 Weekly rhythm

| Day | Task | Time |
| :--- | :--- | :--- |
| Mon | 5 directory or profile submissions until Phase 1 and 2 lists are done | 1 hour |
| Tue to Thu | Answer Qwoted and Source of Sources requests | 30 min a day |
| Wed | Send 5 guest-post or roundup pitches | 1 hour |
| Fri | 2 Reddit or Quora answers; one Google Business Profile post | 45 min |
| Monthly | One press story pitch; backlink and index-status review | 2 hours |

Track every outreach in one sheet with columns: Date, Site, Contact, Type, Target URL, Anchor, Status, Live link, Follow or nofollow.

### 2.8 Competitor gap check (monthly)

Run a backlink lookup on these competitors and copy any link sources that list tutors in general:
- myprivatetutor.ae
- tutopiya.com
- plusplustutors.com
- Any other site ranking in Google's top 5 for "IGCSE tutor Dubai", "maths tutor Abu Dhabi" and "A-Level tutor Dubai".

Free tools: Ahrefs free backlink checker, Moz Link Explorer (limited free), and Bing Webmaster Tools' backlink comparison.

### 2.9 What to avoid

- Paid link packages, PBNs, comment spam, and Fiverr "high DA backlinks".
- Article spinning or the same guest post on many sites.
- Sitewide footer links from unrelated sites.
- Reciprocal-link pages with dozens of swaps.
- Sudden spikes of exact-match anchor text.
