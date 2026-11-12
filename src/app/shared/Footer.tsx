import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './footer.css';

/*
 * Footer — "Find a tutor in your emirate".
 * SEO: every emirate panel is server-rendered. Inactive panels are hidden only with the
 * `hidden` attribute, so all 18 landing-page URLs are in the HTML of every page.
 */

type IconName = 'maths' | 'physics' | 'chemistry' | 'biology' | 'igcse' | 'gcse' | 'alevel' | 'ib' | 'pin';
type Tile = { href: string; icon: IconName; title: string; city: string; ga?: boolean };
type Group = { label: string; span: number; tiles?: Tile[]; note?: 'alain' | 'other' };
type Emirate = { id: string; name: string; count?: number; groups: Group[] };

const WA_URL = 'https://wa.me/971561249005';

const EMIRATES: Emirate[] = [
  {
    id: 'ad', name: 'Abu Dhabi', count: 8,
    groups: [
      { label: 'By subject', span: 4, tiles: [
        { href: '/maths-tutor-abu-dhabi', icon: 'maths', title: 'Maths tutor', city: 'Abu Dhabi', ga: true },
        { href: '/physics-tutor-abu-dhabi', icon: 'physics', title: 'Physics tutor', city: 'Abu Dhabi', ga: true },
        { href: '/chemistry-tutor-abu-dhabi', icon: 'chemistry', title: 'Chemistry tutor', city: 'Abu Dhabi', ga: true },
        { href: '/biology-tutor-abu-dhabi', icon: 'biology', title: 'Biology tutor', city: 'Abu Dhabi', ga: true },
      ] },
      { label: 'By curriculum', span: 4, tiles: [
        { href: '/igcse-tutor-abu-dhabi', icon: 'igcse', title: 'IGCSE tutor', city: 'Abu Dhabi', ga: true },
        { href: '/gcse-tutor-abu-dhabi', icon: 'gcse', title: 'GCSE tutor', city: 'Abu Dhabi', ga: true },
        { href: '/a-level-tutor-abu-dhabi', icon: 'alevel', title: 'A-Level tutor', city: 'Abu Dhabi', ga: true },
        { href: '/ib-tutor-abu-dhabi', icon: 'ib', title: 'IB tutor', city: 'Abu Dhabi', ga: true },
      ] },
    ],
  },
  {
    id: 'du', name: 'Dubai', count: 8,
    groups: [
      { label: 'By subject', span: 4, tiles: [
        { href: '/maths-tutor-dubai', icon: 'maths', title: 'Maths tutor', city: 'Dubai', ga: true },
        { href: '/physics-tutor-dubai', icon: 'physics', title: 'Physics tutor', city: 'Dubai', ga: true },
        { href: '/chemistry-tutor-dubai', icon: 'chemistry', title: 'Chemistry tutor', city: 'Dubai', ga: true },
        { href: '/biology-tutor-dubai', icon: 'biology', title: 'Biology tutor', city: 'Dubai', ga: true },
      ] },
      { label: 'By curriculum', span: 4, tiles: [
        { href: '/igcse-tutor-dubai', icon: 'igcse', title: 'IGCSE tutor', city: 'Dubai', ga: true },
        { href: '/gcse-tutor-dubai', icon: 'gcse', title: 'GCSE tutor', city: 'Dubai', ga: true },
        { href: '/a-level-tutor-dubai', icon: 'alevel', title: 'A-Level tutor', city: 'Dubai', ga: true },
        { href: '/ib-tutor-dubai', icon: 'ib', title: 'IB tutor', city: 'Dubai', ga: true },
      ] },
    ],
  },
  {
    id: 'aa', name: 'Al Ain', count: 3,
    groups: [
      { label: 'By curriculum', span: 3, tiles: [
        { href: '/igcse-tutor-al-ain', icon: 'igcse', title: 'IGCSE tutor', city: 'Al Ain', ga: true },
        { href: '/gcse-tutor-al-ain', icon: 'gcse', title: 'GCSE tutor', city: 'Al Ain', ga: true },
        { href: '/a-level-tutor-al-ain', icon: 'alevel', title: 'A-Level tutor', city: 'Al Ain', ga: true },
      ] },
      { label: 'Other subjects', span: 5, note: 'alain' },
    ],
  },
  {
    id: 'ot', name: 'Other emirates',
    groups: [
      { label: 'Northern Emirates', span: 5, tiles: [
        { href: '/tutors?city=sharjah', icon: 'pin', title: 'Sharjah', city: 'Online tutors' },
        { href: '/tutors?city=ajman', icon: 'pin', title: 'Ajman', city: 'Online tutors' },
        { href: '/tutors?city=ras-al-khaimah', icon: 'pin', title: 'Ras Al Khaimah', city: 'Online tutors' },
        { href: '/tutors?city=fujairah', icon: 'pin', title: 'Fujairah', city: 'Online tutors' },
        { href: '/tutors?city=umm-al-quwain', icon: 'pin', title: 'Umm Al Quwain', city: 'Online tutors' },
      ] },
      { label: 'How it works there', span: 3, note: 'other' },
    ],
  },
];

const SUBJECTS = [
  ['Maths', '/maths'], ['English', '/english'], ['Physics', '/physics'], ['Economics', '/economics'],
  ['Chemistry', '/chemistry'], ['Business', '/business'], ['Biology', '/biology'], ['Accounting', '/accounting'],
  ['Finance', '/finance'], ['Engineering', '/engineering'], ['Statistics', '/statistics'],
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

const WaIcon = ({ size = 18, stroke = 'currentColor' }: { size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z" />
  </svg>
);
/* Icon sprite: 32px grid, 1.75 stroke, navy line (currentColor) + one gold accent (--uf-acc). */
const ACC = { style: { stroke: 'var(--uf-acc, #a8892a)' } };
const ACCF = { style: { fill: 'var(--uf-acc, #a8892a)' } };
const IconSprite = () => (
  <svg className="uf-sprite" aria-hidden="true" focusable="false" width="0" height="0">
    <defs>
      <symbol id="uf-i-maths" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M6 10.5h8" /><path d="M10 6.5v8" /><path d="M18.5 10.5h8" /><path d="M7.2 18.7l5.6 5.6" /><path d="M12.8 18.7l-5.6 5.6" /></g><path d="M18.5 21.5h8" fill="none" strokeWidth="1.75" strokeLinecap="round" {...ACC} /><circle cx="22.5" cy="17.6" r="1.35" {...ACCF} /><circle cx="22.5" cy="25.4" r="1.35" {...ACCF} /></symbol>
      <symbol id="uf-i-physics" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" strokeWidth="1.75"><ellipse cx="16" cy="16" rx="12" ry="4.75" /><ellipse cx="16" cy="16" rx="12" ry="4.75" transform="rotate(60 16 16)" /><ellipse cx="16" cy="16" rx="12" ry="4.75" transform="rotate(120 16 16)" /></g><circle cx="16" cy="16" r="2.5" {...ACCF} /></symbol>
      <symbol id="uf-i-chemistry" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.5h8" /><path d="M13.5 4.5v8L6.9 24.3A2.5 2.5 0 0 0 9.1 28h13.8a2.5 2.5 0 0 0 2.2-3.7L18.5 12.5v-8" /></g><path d="M9.4 20h13.2" fill="none" strokeWidth="1.75" strokeLinecap="round" {...ACC} /><circle cx="13.8" cy="24" r="1.4" {...ACCF} /><circle cx="18.6" cy="23.1" r="1.05" {...ACCF} /></symbol>
      <symbol id="uf-i-biology" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><path d="M10 4c0 6 12 6 12 12s-12 6-12 12" /><path d="M22 4c0 6-12 6-12 12s12 6 12 12" /></g><g fill="none" strokeWidth="1.75" strokeLinecap="round" {...ACC}><path d="M12.8 7.6h6.4" /><path d="M12.8 12.6h6.4" /><path d="M12.8 19.4h6.4" /><path d="M12.8 24.4h6.4" /></g></symbol>
      <symbol id="uf-i-igcse" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"><circle cx="16" cy="16" r="11" /><ellipse cx="16" cy="16" rx="4.6" ry="11" /><path d="M6.6 10.5h18.8" /><path d="M6.6 21.5h18.8" /></g><path d="M5 16h22" fill="none" strokeWidth="1.75" strokeLinecap="round" {...ACC} /></symbol>
      <symbol id="uf-i-gcse" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M16 9c-2.6-2-6.4-2.6-11-2.2v17.4c4.6-.4 8.4.2 11 2.2 2.6-2 6.4-2.6 11-2.2V6.8C22.4 6.4 18.6 7 16 9z" /><path d="M16 9v17.4" /></g><path d="M20.6 7.5v7l1.9-1.5 1.9 1.5V7" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...ACC} /></symbol>
      <symbol id="uf-i-alevel" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12.5 16 6.5l13 6-13 6z" /><path d="M8.5 15.3v5.9c0 2.2 3.4 4.3 7.5 4.3s7.5-2.1 7.5-4.3v-5.9" /></g><path d="M27 13.4v6.4" fill="none" strokeWidth="1.75" strokeLinecap="round" {...ACC} /><circle cx="27" cy="21.5" r="1.7" {...ACCF} /></symbol>
      <symbol id="uf-i-ib" viewBox="0 0 32 32"><path d="M16 4.5 26 10.25v11.5L16 27.5 6 21.75v-11.5z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" /><g fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...ACC}><path d="M6 10.25 16 16l10-5.75" /><path d="M16 16v11.5" /></g></symbol>
      <symbol id="uf-i-pin" viewBox="0 0 32 32"><path d="M16 28.5s-8.5-7.8-8.5-14.5a8.5 8.5 0 0 1 17 0c0 6.7-8.5 14.5-8.5 14.5z" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" /><circle cx="16" cy="14" r="3.1" {...ACCF} /></symbol>
    </defs>
  </svg>
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
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    subjects: false,
    curriculum: false,
    company: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };
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


  const CIRC = 125.66;

  const rootCls = ['uf', jsReady && 'uf--js', jsReady && motion && 'uf--motion', visible && 'is-visible'].filter(Boolean).join(' ');

  return (
    <footer ref={rootRef} className={rootCls} onClick={onFooterClick}>
      <IconSprite />
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
                                    <span className="uf-tile__num" />
                                  </span>
                                  <span className="uf-tile__icon" aria-hidden="true">
                                    <svg viewBox="0 0 32 32" focusable="false"><use href={`#uf-i-${t.icon}`} /></svg>
                                  </span>
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
            <a className="uf-browse" href="/tutors">Meet all our tutors</a>
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

            {/* Subjects column: mobile dropdown accordion, permanent grid on desktop */}
            <nav className={`uf-col uf-col--subjects ${openSections.subjects ? 'is-open' : ''}`} id="uf-col-subjects" aria-label="Subjects">
              <h2 className="uf-col__title-wrap">
                <button
                  type="button"
                  className="uf-col__header"
                  onClick={() => toggleSection('subjects')}
                  aria-expanded={openSections.subjects}
                  aria-controls="uf-col-subjects-body"
                >
                  <span className="uf-col__title">Subjects</span>
                  <span className="uf-col__header-right">
                    <svg className={`uf-col__chevron ${openSections.subjects ? 'is-open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div className="uf-col__body" id="uf-col-subjects-body">
                <ul className="uf-links uf-links--2">
                  {SUBJECTS.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
                  <li className="uf-span2"><a href="/exam-preparation">Exam preparation</a></li>
                  <li className="uf-span2"><a className="uf-more" href="/subjects">All subjects</a></li>
                </ul>
              </div>
            </nav>

            {/* Curriculum column: mobile dropdown accordion, permanent grid on desktop */}
            <nav className={`uf-col uf-col--curriculum ${openSections.curriculum ? 'is-open' : ''}`} id="uf-col-curriculum" aria-label="Curriculum">
              <h2 className="uf-col__title-wrap">
                <button
                  type="button"
                  className="uf-col__header"
                  onClick={() => toggleSection('curriculum')}
                  aria-expanded={openSections.curriculum}
                  aria-controls="uf-col-curriculum-body"
                >
                  <span className="uf-col__title">Curriculum</span>
                  <span className="uf-col__header-right">
                    <svg className={`uf-col__chevron ${openSections.curriculum ? 'is-open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div className="uf-col__body" id="uf-col-curriculum-body">
                {CURRICULA.map((c) => (
                  <div className="uf-cur" key={c.hub[1]}>
                    <a className="uf-cur__hub" href={c.hub[1]}>{c.hub[0]}</a>
                    <ul className="uf-inline">
                      {c.items.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}
                    </ul>
                  </div>
                ))}
                <a className="uf-more" href="/curriculum">All curricula</a>
              </div>
            </nav>

            {/* About Ustaad column: mobile dropdown accordion, permanent grid on desktop */}
            <nav className={`uf-col uf-col--company ${openSections.company ? 'is-open' : ''}`} id="uf-col-company" aria-label="About Ustaad">
              <h2 className="uf-col__title-wrap">
                <button
                  type="button"
                  className="uf-col__header"
                  onClick={() => toggleSection('company')}
                  aria-expanded={openSections.company}
                  aria-controls="uf-col-company-body"
                >
                  <span className="uf-col__title">About Ustaad</span>
                  <span className="uf-col__header-right">
                    <svg className={`uf-col__chevron ${openSections.company ? 'is-open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
              </h2>
              <div className="uf-col__body" id="uf-col-company-body">
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
