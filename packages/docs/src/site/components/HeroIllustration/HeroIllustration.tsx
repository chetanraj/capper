import styles from './HeroIllustration.module.css';

type HeroIllustrationProps = {
  className?: string;
};

/**
 * Hero visual: Haikei-inspired stacked layers in a Primer-like flat style.
 * Three offset cards read as tokens, typography, and components.
 */
export function HeroIllustration({ className }: HeroIllustrationProps) {
  return (
    <svg
      className={[styles.illustration, className].filter(Boolean).join(' ')}
      viewBox="0 0 440 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Layered design system preview: color tokens, typography, and UI components"
    >
      <title>Design system layers</title>

      {/* Soft organic backdrop (Haikei blob, restrained) */}
      <path
        className={styles.backdrop}
        d="M72 248c-18-52 8-118 68-142 42-16 88-4 118 28 34 36 48 92 22 138-24 42-74 68-128 64-38-3-72-24-80-88z"
      />

      {/* Back card: color tokens */}
      <g transform="translate(48 52) rotate(-5)">
        <rect className={styles.cardShadow} x="6" y="8" width="200" height="148" rx="12" />
        <rect className={styles.card} x="0" y="0" width="200" height="148" rx="12" />
        <rect className={styles.swatchAccent} x="20" y="24" width="36" height="36" rx="6" />
        <rect className={styles.swatchMuted} x="64" y="24" width="36" height="36" rx="6" />
        <rect className={styles.swatchSuccess} x="108" y="24" width="36" height="36" rx="6" />
        <rect className={styles.swatchNeutral} x="152" y="24" width="28" height="36" rx="6" />
        <rect className={styles.line} x="20" y="80" width="120" height="8" rx="4" />
        <rect className={styles.line} x="20" y="100" width="88" height="8" rx="4" />
        <rect className={styles.line} x="20" y="120" width="104" height="8" rx="4" />
      </g>

      {/* Middle card: typography scale */}
      <g transform="translate(108 108) rotate(3)">
        <rect className={styles.cardShadow} x="6" y="8" width="200" height="148" rx="12" />
        <rect className={styles.card} x="0" y="0" width="200" height="148" rx="12" />
        <rect className={styles.lineStrong} x="20" y="28" width="96" height="12" rx="4" />
        <rect className={styles.line} x="20" y="56" width="160" height="8" rx="4" />
        <rect className={styles.line} x="20" y="76" width="140" height="8" rx="4" />
        <rect className={styles.line} x="20" y="96" width="152" height="8" rx="4" />
        <rect className={styles.line} x="20" y="116" width="108" height="8" rx="4" />
      </g>

      {/* Front card: component chrome */}
      <g transform="translate(168 164) rotate(-2)">
        <rect className={styles.cardShadow} x="6" y="8" width="200" height="148" rx="12" />
        <rect className={styles.card} x="0" y="0" width="200" height="148" rx="12" />
        <rect className={styles.inputLabel} x="20" y="24" width="48" height="6" rx="3" />
        <rect className={styles.input} x="20" y="38" width="160" height="32" rx="8" />
        <rect className={styles.button} x="20" y="88" width="72" height="32" rx="8" />
        <rect className={styles.input} x="100" y="88" width="80" height="32" rx="8" />
      </g>

      {/* Subtle dot grid (Primer marketing motif) */}
      <g className={styles.dot} opacity="0.35">
        <circle cx="372" cy="48" r="2" />
        <circle cx="392" cy="48" r="2" />
        <circle cx="412" cy="48" r="2" />
        <circle cx="372" cy="68" r="2" />
        <circle cx="392" cy="68" r="2" />
        <circle cx="412" cy="68" r="2" />
        <circle cx="372" cy="88" r="2" />
        <circle cx="392" cy="88" r="2" />
        <circle cx="412" cy="88" r="2" />
        <circle cx="32" cy="300" r="2" />
        <circle cx="52" cy="300" r="2" />
        <circle cx="72" cy="300" r="2" />
        <circle cx="32" cy="320" r="2" />
        <circle cx="52" cy="320" r="2" />
        <circle cx="72" cy="320" r="2" />
      </g>
    </svg>
  );
}
