// Monoline glassware, redrawn to match the menu's thin line-art.
import type { ReactNode } from 'react';

export type GlassType = 'coupe' | 'martini' | 'rocks' | 'highball' | 'flute' | 'wine';

const glyphs: Record<GlassType, ReactNode> = {
  coupe: (
    <>
      <path d="M7 16h34" />
      <path d="M8 16c0 0 4 14 16 14s16-14 16-14" />
      <path d="M24 30v26" />
      <path d="M14 57h20" />
    </>
  ),
  martini: (
    <>
      <path d="M7 16h34" />
      <path d="M8 16 24 34 40 16" />
      <path d="M24 34v22" />
      <path d="M14 57h20" />
    </>
  ),
  rocks: (
    <>
      <path d="M10 23h28" />
      <path d="M12 23 13.5 53h21L36 23" />
    </>
  ),
  highball: (
    <>
      <path d="M15 13h18" />
      <path d="M16 13 17 59h14L32 13" />
    </>
  ),
  flute: (
    <>
      <path d="M18 12h12" />
      <path d="M18.5 12c0 18 2 27 5.5 29 3.5-2 5.5-11 5.5-29" />
      <path d="M24 41v17" />
      <path d="M16 59h16" />
    </>
  ),
  wine: (
    <>
      <path d="M13 14h22" />
      <path d="M13.5 14c0 16 3.5 24 10.5 24s10.5-8 10.5-24" />
      <path d="M24 38v20" />
      <path d="M16 59h16" />
    </>
  ),
};

export default function GlassIcon({ type = 'coupe', size = 46 }: { type?: GlassType; size?: number }) {
  return (
    <svg
      width={size * (48 / 72)}
      height={size}
      viewBox="0 0 48 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {glyphs[type]}
    </svg>
  );
}
