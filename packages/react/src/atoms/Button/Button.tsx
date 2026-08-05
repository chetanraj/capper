import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual style of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Show a loading spinner and disable interaction */
  loading?: boolean;
  /** Stretch to full width of its container */
  fullWidth?: boolean;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string | undefined> = {
  primary: styles['variant-primary'],
  secondary: styles['variant-secondary'],
  ghost: styles['variant-ghost'],
  danger: styles['variant-danger'],
};

const sizeClass: Record<ButtonSize, string | undefined> = {
  sm: styles['size-sm'],
  md: styles['size-md'],
  lg: styles['size-lg'],
};

/**
 * Button is the primary interactive element. It supports four visual
 * variants and three sizes, all driven by CSS token variables.
 *
 * @example
 * <Button>Default</Button>
 * <Button variant="secondary" size="sm">Cancel</Button>
 * <Button variant="danger" loading>Deleting...</Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  children,
  className,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = [
    styles.button,
    variantClass[variant],
    sizeClass[size],
    loading ? styles.loading : undefined,
    fullWidth ? styles['full-width'] : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled ?? loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      <span className={loading ? styles['loading-text'] : undefined}>{children}</span>
    </button>
  );
}
