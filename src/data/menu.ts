// The cocktail list, modelled on phithebar.com: drinks are grouped into
// "Symbols" (courses), each with an intro. Every drink carries an ingredient
// line, taste tags, a glass and a price in EUR (BGN is derived).
import type { Flavor } from '../components/FlavorIcon';
import type { GlassType } from '../components/GlassIcon';

export type Drink = {
  name: string;
  ingredients: string;
  flavors: Flavor[];
  glass: GlassType;
  eur: number;
  real?: boolean; // taken verbatim from the bar's own menu
};

export type Course = {
  id: string;
  name: string;
  intro: string;
  drinks: Drink[];
};

// Bulgarian lev is pegged to the euro at 1.95583.
export const EUR_TO_BGN = 1.95583;
export const toBgn = (eur: number) => Math.round(eur * EUR_TO_BGN * 100) / 100;

export const menuKicker = 'Symbols 1.6';

export const courses: Course[] = [
  {
    id: 'linear',
    name: 'Linear',
    intro:
      'Linear marks the beginning — aperitif cocktails with fresh structure, low sweetness and a clean, focused profile. Designed to awaken the palate and set the tone for the evening.',
    drinks: [
      {
        name: 'Tarator',
        ingredients: 'Bombay sapphire, Martini dry, Martini bianco, Mezcal Salmiana, Tarator',
        flavors: ['umami', 'salty', 'sour'],
        glass: 'coupe',
        eur: 9,
        real: true,
      },
      {
        name: 'Earth',
        ingredients: 'Espolon blanco, Martini dry, Raicilla, Jerusalem artichoke',
        flavors: ['sour', 'umami', 'salty'],
        glass: 'coupe',
        eur: 10.5,
        real: true,
      },
      {
        name: 'Fig and Pickle',
        ingredients: 'Roku, Fino sherry, Fig leaf, Pickle',
        flavors: ['sour', 'umami', 'sweet', 'salty'],
        glass: 'rocks',
        eur: 10,
        real: true,
      },
    ],
  },
  {
    id: 'spiral',
    name: 'Spiral',
    intro:
      'Spiral is movement — long, carbonated cocktails built for freshness, energy and flow. Vibrant flavours, rising bubbles and a playful structure that keeps the night going.',
    drinks: [
      {
        name: 'Three Cents',
        ingredients: 'Rhum, Mint, Lime, Three Cents Pineapple soda',
        flavors: ['sweet', 'sour'],
        glass: 'highball',
        eur: 9,
        real: true,
      },
      {
        name: 'Summer',
        ingredients: 'Grey Goose, Mint, Lemon, Mastiha, CO2',
        flavors: ['sour', 'sweet', 'bitter'],
        glass: 'highball',
        eur: 9.5,
        real: true,
      },
      {
        name: 'Nettle and Yoghurt',
        ingredients: 'Propper Twelve, Caramelized yoghurt, Nettle, Rakia apple, CO2',
        flavors: ['sweet', 'sour', 'umami'],
        glass: 'highball',
        eur: 9.5,
        real: true,
      },
    ],
  },
  {
    id: 'circle',
    name: 'Circle',
    intro:
      'Circle is comfort — spirit-forward and rounded, stirred down to a soft, lingering finish. Drinks to slow down with as the room settles. (Placeholder pours — share the real list and we will set them.)',
    drinks: [
      {
        name: 'Old Sofia',
        ingredients: 'Corn whisky, Plum bitters, Demerara, Oak',
        flavors: ['bitter', 'sweet'],
        glass: 'rocks',
        eur: 11,
      },
      {
        name: 'Obsidian',
        ingredients: 'Peated whisky, Black walnut, Amaro, Orange oil',
        flavors: ['bitter', 'aromatic'],
        glass: 'rocks',
        eur: 11.5,
      },
      {
        name: '1.618',
        ingredients: 'Cognac, Roasted fig, Oloroso sherry, Tonka',
        flavors: ['sweet', 'bitter'],
        glass: 'coupe',
        eur: 12,
      },
    ],
  },
];

// Spirits offered by the 50ml pour, listed by category (accordion on the page).
export type SpiritCategory = { name: string; note: string; fromEur: number };

export const spirits: SpiritCategory[] = [
  { name: 'Gin', note: '50ml', fromEur: 6 },
  { name: 'Agave', note: '50ml', fromEur: 7 },
  { name: 'Brandy', note: '50ml', fromEur: 7 },
  { name: 'Rum', note: '50ml', fromEur: 6.5 },
  { name: 'Whiskey', note: '50ml', fromEur: 7 },
  { name: 'Other', note: '50ml', fromEur: 6 },
];

export const flavorLabels: Record<Flavor, string> = {
  umami: 'Umami',
  salty: 'Salty',
  sour: 'Sour',
  sweet: 'Sweet',
  bitter: 'Bitter',
  aromatic: 'Aromatic',
};
