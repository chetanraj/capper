import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputSize = 'sm' | 'md' | 'lg';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /** Size of the input */
  size?: InputSize;
  /** Marks the field invalid for assistive tech and error styling */
  invalid?: boolean;
  /** Stretch to full width of its container */
  fullWidth?: boolean;
};

const sizeClass: Record<InputSize, string | undefined> = {
  sm: styles['size-sm'],
  md: styles['size-md'],
  lg: styles['size-lg'],
};

/**
 * Input is the base text field primitive for forms and filters.
 *
 * @example
 * <Input placeholder="Search tokens" />
 * <Input size="sm" invalid aria-describedby="email-error" />
 */
export function Input({
  size = 'md',
  invalid = false,
  fullWidth = true,
  className,
  disabled,
  ...rest
}: InputProps) {
  const classes = [
    styles.input,
    sizeClass[size],
    invalid ? styles.invalid : undefined,
    fullWidth ? styles['full-width'] : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      className={classes}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      {...rest}
    />
  );
}
