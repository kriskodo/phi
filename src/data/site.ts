// Central facts about the bar. Kept in one place so every page stays in sync.

export const PHI = 1.618;

export const site = {
  name: 'Phi',
  symbol: 'φ',
  tagline: 'Where balance becomes a cocktail.',
  city: 'Sofia',
  address: 'Tsar Shishman 24',
  district: 'Tsar Shishman St · Sofia',
  email: 'connect@phithebar.com',
  // Hash route for the menu — what the QR code points to.
  menuPath: '#/menu',
  social: [
    { label: 'Instagram', handle: '@phicocktailbar', href: 'https://www.instagram.com/phicocktailbar/' },
    { label: 'Facebook', handle: 'Phi Cocktail Bar', href: 'https://www.facebook.com/PhiCocktailBar/' },
  ],
  hours: [
    { days: 'Wed – Thu', time: '18:00 – 01:00' },
    { days: 'Fri – Sat', time: '18:00 – 02:00' },
    { days: 'Sunday', time: '18:00 – 24:00' },
    { days: 'Mon – Tue', time: 'Closed' },
  ],
} as const;

// The canonical public URL of the menu — used to render the QR code.
// Falls back to a relative URL during local dev.
export function menuUrl(): string {
  if (typeof window === 'undefined') return '';
  return `${window.location.origin}${window.location.pathname}${site.menuPath}`;
}
