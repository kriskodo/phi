// Monoline taste-profile icons, redrawn to match phithebar.com's menu.
// One <symbol>-free component: pass a flavor name, get the glyph.
import type { ReactNode } from 'react';

export type Flavor = 'umami' | 'salty' | 'sour' | 'sweet' | 'bitter' | 'aromatic';

const glyphs: Record<Flavor, ReactNode> = {
  // vertical almond with a line through it
  umami: (
    <>
      <ellipse cx="12" cy="12" rx="4.2" ry="7.4" />
      <line x1="12" y1="3.4" x2="12" y2="20.6" />
    </>
  ),
  // a flowing wave
  salty: (
    <path d="M3 14c2.5-4 4.5-4 6.5 0s4 4 6.5 0 4.5-4 5 -1" fill="none" />
  ),
  // triangle
  sour: <path d="M12 4 20.5 19.5 3.5 19.5Z" />,
  // teardrop
  sweet: <path d="M12 3.4c0 0-6.6 7.2-6.6 11.1a6.6 6.6 0 0 0 13.2 0C18.6 10.6 12 3.4 12 3.4Z" />,
  // circle with a diameter line
  bitter: (
    <>
      <circle cx="12" cy="12" r="7.4" />
      <line x1="12" y1="4.6" x2="12" y2="19.4" />
    </>
  ),
  // small swirl
  aromatic: (
    <path d="M12 12m-1 0a1 1 0 1 0 2 0a4 4 0 1 0-4-4a7 7 0 1 0 7 7" fill="none" />
  ),
};

export default function FlavorIcon({ flavor, size = 24 }: { flavor: Flavor; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {glyphs[flavor]}
    </svg>
  );
}
