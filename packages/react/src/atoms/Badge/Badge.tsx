import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';

type BadgeVariant = 'default' | 'accent' | 'success' | 'danger';
type BadgeSize = 'sm' | 'md';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** Visual style of the badge */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
  children: ReactNode;
};

const variantClass: Record<BadgeVariant, string | undefined> = {
  default: styles['variant-default'],
  accent: styles['variant-accent'],
  success: styles['variant-success'],
  danger: styles['variant-danger'],
};

const sizeClass: Record<BadgeSize, string | undefined> = {
  sm: styles['size-sm'],
  md: styles['size-md'],
};

/**
 * Badge labels status, counts, or metadata inline with content.
 *
 * @example
 * <Badge>Default</Badge>
 * <Badge variant="success">Active</Badge>
 */
export function Badge({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...rest
}: BadgeProps) {
  const classes = [styles.badge, variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
