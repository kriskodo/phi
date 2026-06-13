// The cocktail list. Grouped into sections; each drink carries a short
// "composition" line rather than a dry ingredient dump.

export type Drink = {
  name: string;
  composition: string;
  note?: string;
  price: number; // in лв (BGN)
  abv?: 'spirit-forward' | 'balanced' | 'bright' | 'zero';
};

export type MenuSection = {
  id: string;
  title: string;
  kicker: string;
  blurb: string;
  drinks: Drink[];
};

export const menu: MenuSection[] = [
  {
    id: 'phi-series',
    title: 'The φ Series',
    kicker: 'Signatures',
    blurb:
      'Built on the golden ratio — every measure in proportion to the last. These are the drinks we are known for.',
    drinks: [
      {
        name: 'Golden Section',
        composition: 'Barrel-aged gin · saffron honey · sea-salt acid · brut champagne',
        note: 'Our namesake. Stirred long, served gold.',
        price: 24,
        abv: 'balanced',
      },
      {
        name: 'Spiral',
        composition: 'Toasted-rice rum · banana oleo · lime · cacao bitters',
        note: 'Warm, coiling, never the same twice.',
        price: 22,
        abv: 'balanced',
      },
      {
        name: '1.618',
        composition: 'Cognac · roasted fig · oloroso sherry · tonka',
        note: 'Spirit-forward and contemplative.',
        price: 25,
        abv: 'spirit-forward',
      },
      {
        name: 'Proportion',
        composition: 'Clarified tomato vodka · basil distillate · white balsamic · celery salt',
        note: 'Savoury, crystal-clear, almost weightless.',
        price: 23,
        abv: 'bright',
      },
      {
        name: 'Composition in Gold',
        composition: 'Mezcal · yellow chartreuse · passion fruit · smoked chili tincture',
        note: 'A small painting in a glass.',
        price: 24,
        abv: 'bright',
      },
    ],
  },
  {
    id: 'reimagined',
    title: 'Classics, Re-drawn',
    kicker: 'Familiar lines',
    blurb: 'The canon, taken apart and put back together in our proportions.',
    drinks: [
      {
        name: 'Negroni 1.6',
        composition: 'Gin · Campari · vermouth, rebalanced by weight, stirred over a single clear cube',
        price: 20,
        abv: 'spirit-forward',
      },
      {
        name: 'Shishman Sour',
        composition: 'Rakia · apricot · lemon · aquafaba · Angostura',
        note: 'A Sofia accent on the whisky sour.',
        price: 19,
        abv: 'balanced',
      },
      {
        name: 'Clarified Daiquiri',
        composition: 'Rum · lime · cane · milk-washed to silk',
        price: 19,
        abv: 'bright',
      },
      {
        name: 'Espresso, Quietly',
        composition: 'Vodka · single-origin espresso · cacao liqueur · salted vanilla',
        price: 20,
        abv: 'balanced',
      },
    ],
  },
  {
    id: 'stirred',
    title: 'Stirred & Spirit-Forward',
    kicker: 'For the patient',
    blurb: 'Low dilution, high intent. Sip slowly.',
    drinks: [
      {
        name: 'Obsidian',
        composition: 'Peated whisky · black-walnut · amaro · orange oil',
        price: 23,
        abv: 'spirit-forward',
      },
      {
        name: 'Vermouth Hour',
        composition: 'House-blended vermouths · gentian · grapefruit zest',
        note: 'Lower in alcohol, long on flavour.',
        price: 17,
        abv: 'balanced',
      },
      {
        name: 'Old Sofia',
        composition: 'Corn whisky · plum bitters · demerara · oak',
        price: 22,
        abv: 'spirit-forward',
      },
    ],
  },
  {
    id: 'zero',
    title: 'Zero Proof',
    kicker: 'No compromise',
    blurb: 'Composed with the same care, none of the alcohol.',
    drinks: [
      {
        name: 'Empty Set',
        composition: 'Distilled non-alc botanicals · verjus · white tea · soda',
        price: 14,
        abv: 'zero',
      },
      {
        name: 'Still Life',
        composition: 'Roasted pear · chamomile · lemon acid · tonic',
        price: 14,
        abv: 'zero',
      },
    ],
  },
];

// Short legend for the little flavour dots on each card.
export const abvLegend: Record<NonNullable<Drink['abv']>, { label: string; color: string }> = {
  'spirit-forward': { label: 'Spirit-forward', color: '#e8503a' }, // campari
  balanced: { label: 'Balanced', color: '#e8b864' },              // vermouth amber
  bright: { label: 'Bright & fresh', color: '#74b59c' },          // botanical
  zero: { label: 'Zero proof', color: '#9c8bd6' },                // violet
};
