import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './footer.css';

/*
 * Footer — "Find a tutor in your emirate".
 * SEO: every emirate panel is server-rendered. Inactive panels are hidden only with the
 * `hidden` attribute, so all 18 landing-page URLs are in the HTML of every page.
 */

type Tile = { href: string; sym: string; title: string; city: string; ga?: boolean };
type Group = { label: string; span: number; tiles?: Tile[]; note?: 'alain' | 'other' };
type Emirate = { id: string; name: string; count?: number; groups: Group[] };

const WA_URL = 'https://wa.me/971561249005';

const EMIRATES: Emirate[] = [
  {
    id: 'ad', name: 'Abu Dhabi', count: 8,
    groups: [
      { label: 'By subject', span: 4, tiles: [
        { href: '/maths-tutor-abu-dhabi', sym: 'Ma', title: 'Maths tutor', city: 'Abu Dhabi', ga: true },
        { href: '/physics-tutor-abu-dhabi', sym: 'Ph', title: 'Physics tutor', city: 'Abu Dhabi', ga: true },
        { href: '/chemistry-tutor-abu-dhabi', sym: 'Ch', title: 'Chemistry tutor', city: 'Abu Dhabi', ga: true },
        { href: '/biology-tutor-abu-dhabi', sym: 'Bi', title: 'Biology tutor', city: 'Abu Dhabi', ga: true },
      ] },
      { label: 'By curriculum', span: 4, tiles: [
        { href: '/igcse-tutor-abu-dhabi', sym: 'IG', title: 'IGCSE tutor', city: 'Abu Dhabi', ga: true },
        { href: '/gcse-tutor-abu-dhabi', sym: 'GC', title: 'GCSE tutor', city: 'Abu Dhabi', ga: true },
        { href: '/a-level-tutor-abu-dhabi', sym: 'AL', title: 'A-Level tutor', city: 'Abu Dhabi', ga: true },
        { href: '/ib-tutor-abu-dhabi', sym: 'IB', title: 'IB tutor', city: 'Abu Dhabi', ga: true },
      ] },
    ],
  },
  {
    id: 'du', name: 'Dubai', count: 8,
    groups: [
      { label: 'By subject', span: 4, tiles: [
        { href: '/maths-tutor-dubai', sym: 'Ma', title: 'Maths tutor', city: 'Dubai', ga: true },
        { href: '/physics-tutor-dubai', sym: 'Ph', title: 'Physics tutor', city: 'Dubai', ga: true },
        { href: '/chemistry-tutor-dubai', sym: 'Ch', title: 'Chemistry tutor', city: 'Dubai', ga: true },
        { href: '/biology-tutor-dubai', sym: 'Bi', title: 'Biology tutor', city: 'Dubai', ga: true },
      ] },
      { label: 'By curriculum', span: 4, tiles: [
        { href: '/igcse-tutor-dubai', sym: 'IG', title: 'IGCSE tutor', city: 'Dubai', ga: true },
        { href: '/gcse-tutor-dubai', sym: 'GC', title: 'GCSE tutor', city: 'Dubai', ga: true },
        { href: '/a-level-tutor-dubai', sym: 'AL', title: 'A-Level tutor', city: 'Dubai', ga: true },
        { href: '/ib-tutor-dubai', sym: 'IB', title: 'IB tutor', city: 'Dubai', ga: true },
      ] },
    ],
  },
  {
    id: 'aa', name: 'Al Ain', count: 2,
    groups: [
      { label: 'By curriculum', span: 2, tiles: [
        { href: '/a-level-tutor-al-ain', sym: 'AL', title: 'A-Level tutor', city: 'Al Ain', ga: true },
        { href: '/igcse-tutor-al-ain', sym: 'IG', title: 'IGCSE tutor', city: 'Al Ain', ga: true },
      ] },
      { label: 'Other subjects', span: 6, note: 'alain' },
    ],
  },
  {
    id: 'ot', name: 'Other emirates',
    groups: [
      { label: 'Northern Emirates', span: 5, tiles: [
        { href: '/tutors?city=sharjah', sym: 'Sh', title: 'Sharjah', city: 'Online tutors' },
        { href: '/tutors?city=ajman', sym: 'Aj', title: 'Ajman', city: 'Online tutors' },
        { href: '/tutors?city=ras-al-khaimah', sym: 'RK', title: 'Ras Al Khaimah', city: 'Online tutors' },
        { href: '/tutors?city=fujairah', sym: 'Fj', title: 'Fujairah', city: 'Online tutors' },
        { href: '/tutors?city=umm-al-quwain', sym: 'UQ', title: 'Umm Al Quwain', city: 'Online tutors' },
      ] },
      { label: 'How it works there', span: 3, note: 'other' },
    ],
  },
];

const SUBJECTS = [
  ['Maths', '/maths'], ['English', '/english'], ['Physics', '/physics'], ['Economics', '/economics'],
  ['Chemistry', '/chemistry'], ['Business', '/business'], ['Biology', '/biology'], ['Accounting', '/accounting'],
  ['Sciences', '/sciences'], ['Finance', '/finance'], ['Engineering', '/engineering'], ['Statistics', '/statistics'],
];

const CURRICULA = [
  { hub: ['British curriculum', '/british-curriculum'], items: [['IGCSE', '/igcse'], ['GCSE', '/gcse'], ['A-Level', '/a-level']] },
  { hub: ['IB curriculum', '/ib-curriculum'], items: [['MYP', '/myp'], ['DP SL', '/dp-sl'], ['DP HL', '/dp-hl']] },
  { hub: ['American curriculum', '/american-curriculum'], items: [['Middle School', '/middle-school'], ['High School', '/high-school'], ['AP', '/ap']] },
];

const COMPANY = [
  ['About us', '/about'], ['How it works', '/how-it-works'], ['Our tutors', '/tutors'], ['Editorial', '/editorial'],
  ['Blog', '/blogs'], ['Contact', '/contact'], ['Careers', 'mailto:career@ustaad.ae'],
];

const ArrowUpRight = () => (
  <svg className="uf-tile__arr uf-flip" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);
const WaIcon = ({ size = 18, stroke = 'currentColor' }: { size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z" />
  </svg>
);
const Chevron = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
);

function NoteCard({ kind, index }: { kind: 'alain' | 'other'; index: number }) {
  if (kind === 'alain') {
    return (
      <div className="uf-note" style={{ ['--i' as string]: index }}>
        <div>
          <p className="uf-note__title">Need Maths, Physics, Chemistry, Biology or IB in Al Ain?</p>
          <p className="uf-note__text">Our tutors teach online, so the same specialists work with Al Ain families. Tell us the subject and year group and we will suggest a match.</p>
        </div>
        <a className="uf-btn-wa" href={WA_URL} target="_blank" rel="noopener noreferrer" data-ga-event="footer_whatsapp_click">
          <WaIcon /> WhatsApp Us
        </a>
      </div>
    );
  }
  return (
    <div className="uf-note uf-note--stack" style={{ ['--i' as string]: index }}>
      <p className="uf-note__text">Every session is online and 1-to-1, so families in Sharjah and the Northern Emirates work with the same curriculum specialists.</p>
      <a className="uf-btn-wa" href={WA_URL} target="_blank" rel="noopener noreferrer" data-ga-event="footer_whatsapp_click">
        <WaIcon size={16} /> WhatsApp Us
      </a>
    </div>
  );
}

export default function Footer({ logoAlt = 'Ustaad logo' }: { logoAlt?: string } = {}) {
  const [active, setActive] = useState(0);
  const [jsReady, setJsReady] = useState(false);
  const [motion, setMotion] = useState(false);
  const [visible, setVisible] = useState(false);
  const [openCols, setOpenCols] = useState<Record<string, boolean>>({});
  const [progress, setProgress] = useState(0);

  const rootRef = useRef<HTMLElement>(null);
  const tablistRef = useRef<HTMLDivElement>(null);
  const indRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indReady, setIndReady] = useState(false);

  // Enable JS-only behaviour after hydration (no-JS keeps every panel and column open).
  useEffect(() => {
    setJsReady(true);
    setMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Sliding tab indicator.
  useEffect(() => {
    const place = () => {
      const tab = tabRefs.current[active];
      const ind = indRef.current;
      if (!tab || !ind) return;
      ind.style.width = `${tab.offsetWidth}px`;
      ind.style.transform = `translateX(${tab.offsetLeft}px)`;
    };
    place();
    const raf = requestAnimationFrame(() => setIndReady(true));
    const list = tablistRef.current;
    let ro: ResizeObserver | undefined;
    if (list && 'ResizeObserver' in window) { ro = new ResizeObserver(place); ro.observe(list); }
    document.fonts?.ready.then(place).catch(() => {});
    return () => { cancelAnimationFrame(raf); ro?.disconnect(); };
  }, [active, jsReady]);

  // Curve draws once the footer scrolls into view.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setVisible(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Back-to-top scroll-progress ring.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      ticking = false;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const selectTab = (i: number, focus: boolean) => {
    setActive(i);
    const tab = tabRefs.current[i];
    if (focus) tab?.focus();
    const list = tablistRef.current;
    if (tab && list && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: tab.offsetLeft - 20, behavior: motion ? 'smooth' : 'auto' });
    }
  };

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = EMIRATES.length;
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = (i + 1) % n;
    else if (e.key === 'ArrowLeft') next = (i - 1 + n) % n;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = n - 1;
    if (next !== null) { e.preventDefault(); selectTab(next, true); }
  };

  const onFooterClick = (e: MouseEvent<HTMLElement>) => {
    const a = (e.target as HTMLElement).closest('[data-ga-event]') as HTMLAnchorElement | null;
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (a && typeof gtag === 'function') {
      gtag('event', a.getAttribute('data-ga-event'), {
        link_url: a.href,
        link_text: (a.textContent || '').replace(/\s+/g, ' ').trim(),
        location: 'footer',
      });
    }
  };

  const toggleCol = (id: string) => setOpenCols((p) => ({ ...p, [id]: !p[id] }));
  const CIRC = 125.66;

  const rootCls = ['uf', jsReady && 'uf--js', jsReady && motion && 'uf--motion', visible && 'is-visible'].filter(Boolean).join(' ');

  const colHead = (id: string, label: string) => (
    <h2 className="uf-col__title">
      <span className="uf-col__label">{label}</span>
      <button className="uf-acc" type="button" aria-expanded={!!openCols[id]} aria-controls={`uf-list-${id}`} onClick={() => toggleCol(id)}>
        {label} <Chevron />
      </button>
    </h2>
  );

  return (
    <footer ref={rootRef} className={rootCls} onClick={onFooterClick}>
      {/* Tier 1: Find a tutor */}
      <section className="uf-finder" aria-labelledby="uf-find-title">
        <div className="uf__wrap">
          <div className="uf-finder__head">
            <div>
              <p className="uf-eyebrow">Tutors near you</p>
              <h2 className="uf-finder__title" id="uf-find-title">Find a tutor in your emirate</h2>
              <p className="uf-finder__intro">Pick your emirate, then the subject or curriculum your child needs. Every session is online and 1&#8209;to&#8209;1.</p>
            </div>

            <div ref={tablistRef} className={`uf-tabs${indReady ? ' is-ready' : ''}`} role="tablist" aria-label="Choose an emirate">
              <span ref={indRef} className="uf-tabs__ind" aria-hidden="true" />
              {EMIRATES.map((em, i) => (
                <button
                  key={em.id}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  className="uf-tab"
                  type="button"
                  role="tab"
                  id={`uf-tab-${em.id}`}
                  aria-controls={`uf-panel-${em.id}`}
                  aria-selected={active === i}
                  tabIndex={active === i ? 0 : -1}
                  onClick={() => selectTab(i, false)}
                  onKeyDown={(e) => onTabKey(e, i)}
                >
                  {em.name}
                  {em.count !== undefined && (
                    <span className="uf-tab__count" aria-label={`${em.count} pages`}>{em.count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="uf-panels">
            {EMIRATES.map((em, i) => {
              let tileIndex = 0;
              return (
                <div
                  key={em.id}
                  className="uf-panel"
                  role="tabpanel"
                  id={`uf-panel-${em.id}`}
                  aria-labelledby={`uf-tab-${em.id}`}
                  tabIndex={0}
                  hidden={active !== i}
                >
                  {em.groups.map((g) => (
                    <div key={g.label} className="uf-group" style={{ ['--span' as string]: g.span }}>
                      <h3 className="uf-group__label">{g.label}</h3>
                      {g.tiles ? (
                        <ul className="uf-tiles">
                          {g.tiles.map((t) => {
                            const idx = tileIndex++;
                            return (
                              <li key={t.href} style={{ ['--i' as string]: idx }}>
                                <a className="uf-tile" href={t.href} {...(t.ga ? { 'data-ga-event': 'footer_landing_click' } : {})}>
                                  <span className="uf-tile__top" aria-hidden="true">
                                    <span className="uf-tile__num">{String(idx + 1).padStart(2, '0')}</span>
                                    <ArrowUpRight />
                                  </span>
                                  <span className="uf-tile__sym" aria-hidden="true">{t.sym}</span>
                                  <span className="uf-tile__text">
                                    <span className="uf-tile__title">{t.title}</span>{' '}
                                    <span className="uf-tile__city">{t.city}</span>
                                  </span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        g.note && <NoteCard kind={g.note} index={tileIndex} />
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="uf-finder__foot">
            <a className="uf-browse" href="/tutors">Meet all our tutors <span className="uf-arrow uf-flip" aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      {/* Curved divider */}
      <svg className="uf-curve" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0 H1440 V18 Q720 92 0 18 Z" fill="#f4f7fc" />
        <path className="uf-curve__line" d="M0 18 Q720 92 1440 18" fill="none" stroke="#c7a24a" strokeWidth="1.5" vectorEffect="non-scaling-stroke" pathLength={1} />
      </svg>

      {/* Tier 2: Links */}
      <div className="uf-main">
        <div className="uf__wrap">
          <div className="uf-cols">
            <div className="uf-brand">
              <a className="uf-logo" href="/" aria-label="Ustaad home">
                <img src="/ustaad-private-tutors-uae-logo.png" alt={logoAlt} width={140} height={46} loading="lazy" />
              </a>
              <p className="uf-brand__desc">Online 1-to-1 tutoring for British, IB and American curriculum students across the UAE, since 2015.</p>
              <div className="uf-contact">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" data-ga-event="footer_whatsapp_click" aria-label="WhatsApp Ustaad on +971 56 124 9005">
                  <span className="uf-contact__icon"><WaIcon size={16} /></span>
                  <span><strong className="notranslate" translate="no">+971 56 124 9005</strong><small>WhatsApp</small></span>
                </a>
                <a href="mailto:support@ustaad.ae">
                  <span className="uf-contact__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                  </span>
                  <span><strong className="notranslate" translate="no">support@ustaad.ae</strong><small>Parent support</small></span>
                </a>
              </div>
              <div className="uf-social">
                <a href="https://www.instagram.com/ustaad.ae" target="_blank" rel="noopener noreferrer" aria-label="Ustaad on Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/ustaaduae/" target="_blank" rel="noopener noreferrer" aria-label="Ustaad on LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7" /><path d="M8 7v.01" /><path d="M12 17v-7" /><path d="M12 13a3 3 0 0 1 6 0v4" /></svg>
                </a>
                <a href="https://www.facebook.com/share/1DaNLFKHg1/" target="_blank" rel="noopener noreferrer" aria-label="Ustaad on Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 3h-2a4 4 0 0 0-4 4v3H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" /></svg>
                </a>
                <a href="https://x.com/ustaadAE" target="_blank" rel="noopener noreferrer" aria-label="Ustaad on X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4l16 16" /><path d="M20 4L4 20" /></svg>
                </a>
              </div>
            </div>

            <nav className="uf-col uf-col--subjects" aria-label="Subjects">
              {colHead('subjects', 'Subjects')}
              <div className={`uf-col__panel${openCols.subjects ? ' is-open' : ''}`} id="uf-list-subjects">
                <ul className="uf-links uf-links--2">
                  {SUBJECTS.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
                  <li className="uf-span2"><a href="/exam-preparation">Exam preparation</a></li>
                  <li className="uf-span2"><a className="uf-more" href="/subjects">All subjects <span className="uf-flip" aria-hidden="true">→</span></a></li>
                </ul>
              </div>
            </nav>

            <nav className="uf-col uf-col--curriculum" aria-label="Curriculum">
              {colHead('curriculum', 'Curriculum')}
              <div className={`uf-col__panel${openCols.curriculum ? ' is-open' : ''}`} id="uf-list-curriculum">
                {CURRICULA.map((c) => (
                  <div className="uf-cur" key={c.hub[1]}>
                    <a className="uf-cur__hub" href={c.hub[1]}>{c.hub[0]} <span className="uf-flip" aria-hidden="true">→</span></a>
                    <ul className="uf-inline">
                      {c.items.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
                    </ul>
                  </div>
                ))}
                <a className="uf-more" href="/curriculum">All curricula <span className="uf-flip" aria-hidden="true">→</span></a>
              </div>
            </nav>

            <nav className="uf-col uf-col--company" aria-label="Ustaad">
              {colHead('company', 'Ustaad')}
              <div className={`uf-col__panel${openCols.company ? ' is-open' : ''}`} id="uf-list-company">
                <ul className="uf-links uf-links--1">
                  {COMPANY.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
                </ul>
              </div>
            </nav>
          </div>

          <div className="uf-bar">
            <div className="uf-bar__legal">
              <span>© 2026 Ustaad LLC. Ustaad® is a registered trademark.</span>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
            <div className="uf-bar__tools">
              <LanguageSwitcher />
              <button className="uf-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: motion ? 'smooth' : 'auto' })}>
                <svg className="uf-top__ring" width="44" height="44" viewBox="0 0 44 44" aria-hidden="true">
                  <circle cx="22" cy="22" r="20" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="2" />
                  <circle className="uf-top__progress" cx="22" cy="22" r="20" fill="none" stroke="#c7a24a" strokeWidth="2" strokeLinecap="round" strokeDasharray={CIRC} strokeDashoffset={(CIRC * (1 - progress)).toFixed(2)} />
                </svg>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
