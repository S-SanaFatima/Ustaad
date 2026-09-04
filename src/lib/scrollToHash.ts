/** Offset for fixed site header (TrustBar + Header). */
export function getFixedHeaderOffset(): number {
  return window.innerWidth >= 1024 ? 88 : 80;
}

export function scrollToHash(hash?: string, behavior: ScrollBehavior = 'smooth'): boolean {
  const targetHash = hash ?? window.location.hash;
  if (!targetHash || targetHash === '#') return false;

  const el = document.querySelector(targetHash);
  if (!el) return false;

  const offset = getFixedHeaderOffset() + 12;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

/** Retry scroll until the hash target exists (lazy routes). */
export function scrollToHashWhenReady(hash?: string, maxAttempts = 25, intervalMs = 100): () => void {
  const targetHash = hash ?? window.location.hash;
  if (!targetHash || targetHash === '#') return () => {};

  let attempts = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const tryScroll = () => {
    if (scrollToHash(targetHash, attempts === 0 ? 'auto' : 'smooth')) return;
    if (attempts >= maxAttempts) return;
    attempts += 1;
    timer = setTimeout(tryScroll, intervalMs);
  };

  tryScroll();

  return () => {
    if (timer) clearTimeout(timer);
  };
}
