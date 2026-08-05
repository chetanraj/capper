import { Icon, ArrowRight } from '@capper-ui/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './FeatureCard.module.css';

type FeatureCardProps = {
  title: string;
  description: string;
  to: string;
  /** Optional short label above the title (e.g. "Foundation"). */
  eyebrow?: string;
  /** Optional leading visual (icon or mini preview). */
  media?: ReactNode;
  /** Call-to-action label. Defaults to "Learn more". */
  actionLabel?: string;
  /** Larger pillar card for primary product paths. */
  size?: 'default' | 'pillar';
};

export function FeatureCard({
  title,
  description,
  to,
  eyebrow,
  media,
  actionLabel = 'Learn more',
  size = 'default',
}: FeatureCardProps) {
  return (
    <Link
      to={to}
      className={[styles.card, size === 'pillar' ? styles.pillar : ''].filter(Boolean).join(' ')}
    >
      {media ? <div className={styles.media}>{media}</div> : null}
      <div className={styles.body}>
        {eyebrow ? <span className={styles.eyebrow}>{eyebrow}</span> : null}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.action}>
          {actionLabel}
          <Icon icon={ArrowRight} size="sm" weight="bold" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
