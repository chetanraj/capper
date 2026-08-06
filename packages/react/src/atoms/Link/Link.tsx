import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Link.module.css';

type LinkVariant = 'default' | 'muted' | 'accent';
type LinkSize = 'sm' | 'md' | 'lg';

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Visual style of the link */
  variant?: LinkVariant;
  /** Font size */
  size?: LinkSize;
  children: ReactNode;
};

const variantClass: Record<LinkVariant, string | undefined> = {
  default: styles['variant-default'],
  muted: styles['variant-muted'],
  accent: styles['variant-accent'],
};

const sizeClass: Record<LinkSize, string | undefined> = {
  sm: styles['size-sm'],
  md: styles['size-md'],
  lg: styles['size-lg'],
};

/**
 * Link is the navigation primitive for inline anchors.
 *
 * @example
 * <Link href="/tokens/color">Color tokens</Link>
 * <Link href="https://github.com/chetanraj/capper" target="_blank" rel="noreferrer">
 *   GitHub
 * </Link>
 */
export function Link({
  variant = 'default',
  size = 'md',
  children,
  className,
  target,
  rel,
  ...rest
}: LinkProps) {
  const classes = [styles.link, variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(' ');

  const safeRel =
    target === '_blank' ? ['noopener', 'noreferrer', rel].filter(Boolean).join(' ') : rel;

  return (
    <a className={classes} target={target} rel={safeRel} {...rest}>
      {children}
    </a>
  );
}
