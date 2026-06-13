// Monoline "φhi" wordmark, an approximation of the phithebar.com logo.
export default function PhiMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size * (58 / 40)}
      height={size}
      viewBox="0 0 58 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* φ — head dot, loop and stem */}
      <circle cx="14" cy="4.6" r="1.3" fill="currentColor" stroke="none" />
      <ellipse cx="14" cy="20" rx="6.6" ry="9" />
      <line x1="14" y1="7" x2="14" y2="35" />
      {/* h */}
      <path d="M28 6v29" />
      <path d="M28 23c0-4 3.4-5.4 6-3.6 1.6 1.1 1.8 3.2 1.8 5.1V35" />
      {/* i */}
      <circle cx="46" cy="13" r="1.3" fill="currentColor" stroke="none" />
      <line x1="46" y1="19" x2="46" y2="35" />
    </svg>
  );
}
