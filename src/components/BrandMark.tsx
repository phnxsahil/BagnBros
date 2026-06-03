type BrandMarkProps = {
  compact?: boolean;
  className?: string;
};

export function BrandMark({ compact = false, className = "" }: BrandMarkProps) {
  if (compact) {
    return (
      <svg
        viewBox="0 0 180 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Bag N' Bros"
        role="img"
      >
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 36 L24 16 L36 36 Z" fill="currentColor" fillOpacity="0.05" />
          <path d="M28 36 L36 23 L44 36" opacity="0.8" />
          <line x1="8" y1="36" x2="48" y2="36" opacity="0.3" strokeWidth="1" />
        </g>
        <text
          x="110"
          y="29"
          textAnchor="middle"
          fontFamily="var(--font-display), 'Fraunces', serif"
          fontSize="14"
          fontWeight="500"
          letterSpacing="2.5"
          fill="currentColor"
          fontStyle="italic"
        >
          Bag N&apos; Bros
        </text>
        <text
          x="110"
          y="42"
          textAnchor="middle"
          fontFamily="var(--font-mono), 'JetBrains Mono', monospace"
          fontSize="6.5"
          fontWeight="400"
          letterSpacing="3.5"
          fill="currentColor"
          opacity="0.5"
        >
          EST. 2024
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 360 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bag N' Bros"
      role="img"
    >
      <g
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-90"
      >
        <path d="M180 15 L225 60 L180 105 L135 60 Z" strokeWidth="1.5" opacity="0.4" />
        <path d="M152 75 L180 35 L208 75 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M172 75 L190 48 L208 75" opacity="0.7" />
        <path d="M142 75 H218" opacity="0.5" strokeWidth="1.5" />
        <circle cx="180" cy="60" r="14" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </g>
      <text
        x="180"
        y="120"
        textAnchor="middle"
        fontFamily="var(--font-display), 'Fraunces', serif"
        fontSize="22"
        fontWeight="500"
        letterSpacing="6"
        fill="currentColor"
      >
        BAG N&apos; BROS
      </text>
      <text
        x="180"
        y="136"
        textAnchor="middle"
        fontFamily="var(--font-mono), 'JetBrains Mono', monospace"
        fontSize="9"
        fontWeight="400"
        letterSpacing="8"
        fill="currentColor"
        opacity="0.5"
      >
        EXPEDITION JOURNAL
      </text>
    </svg>
  );
}
