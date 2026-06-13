import { motion } from 'framer-motion';

/**
 * A golden-ratio spiral drawn from nested φ rectangles.
 * The squares cascade in, then the spiral arc traces itself.
 */
export default function GoldenSpiral({ className }: { className?: string }) {
  // Pre-computed φ subdivision of a 233×144 rectangle (Fibonacci numbers).
  const rects = [
    { x: 0, y: 0, w: 144, h: 144 },
    { x: 144, y: 0, w: 89, h: 89 },
    { x: 144, y: 89, w: 55, h: 55 },
    { x: 178, y: 89, w: 34, h: 34 },
    { x: 178, y: 123, w: 21, h: 21 },
    { x: 199, y: 123, w: 13, h: 13 },
  ];

  // Quarter-arc spiral path through the squares.
  const path =
    'M144,144 A144,144 0 0,1 0,0 ' +
    'M144,0 A89,89 0 0,1 233,89 ' +
    'M233,89 A55,55 0 0,1 178,144 ' +
    'M178,144 A34,34 0 0,1 144,110 ' +
    'M144,110 A21,21 0 0,1 165,89 ' +
    'M165,89 A13,13 0 0,1 178,102';

  return (
    <svg
      className={className}
      viewBox="-6 -6 245 156"
      fill="none"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="spiralGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4d99a" />
          <stop offset="0.5" stopColor="#e8b864" />
          <stop offset="1" stopColor="#c5883a" />
        </linearGradient>
      </defs>

      {rects.map((r, i) => (
        <motion.rect
          key={i}
          x={r.x}
          y={r.y}
          width={r.w}
          height={r.h}
          rx="2"
          stroke="rgba(232,199,126,0.22)"
          strokeWidth="0.8"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
        />
      ))}

      <motion.path
        d={path}
        stroke="url(#spiralGold)"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 2.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ filter: 'drop-shadow(0 0 10px rgba(232,199,126,0.5))' }}
      />
    </svg>
  );
}
