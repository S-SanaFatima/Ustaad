export const BritishLandmarkWatermark = ({ className = "" }: { className?: string }) => (
  <img src="/british.png" alt="" aria-hidden="true" className={className} style={{ objectFit: 'contain', opacity: 0.15, filter: 'brightness(0) saturate(100%) invert(22%) sepia(85%) saturate(1500%) hue-rotate(195deg) brightness(90%) contrast(95%)' }} />
);

export const AmericanLandmarkWatermark = ({ className = "" }: { className?: string }) => (
  <img src="/american.png" alt="" aria-hidden="true" className={className} style={{ objectFit: 'contain', opacity: 0.15, filter: 'brightness(0) saturate(100%) invert(22%) sepia(85%) saturate(1500%) hue-rotate(195deg) brightness(90%) contrast(95%)' }} />
);

export const IBWorldWatermark = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
    <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="1.8" />
    <path d="M10 32H54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M32 10C38 16 41 24 41 32C41 40 38 48 32 54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M32 10C26 16 23 24 23 32C23 40 26 48 32 54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 22C20 25 26 26 32 26C38 26 44 25 49 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M15 42C20 39 26 38 32 38C38 38 44 39 49 42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M32 10V54" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
