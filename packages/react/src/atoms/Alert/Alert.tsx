import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Alert.module.css';

type AlertVariant = 'info' | 'success' | 'danger';

type AlertProps = HTMLAttributes<HTMLDivElement> & {
  /** Visual style and semantic tone */
  variant?: AlertVariant;
  /** Optional short heading above the message */
  title?: string;
  children: ReactNode;
};

const variantClass: Record<AlertVariant, string | undefined> = {
  info: styles['variant-info'],
  success: styles['variant-success'],
  danger: styles['variant-danger'],
};

/**
 * Alert communicates contextual feedback inline with page content.
 *
 * @example
 * <Alert variant="info" title="Tip">
 *   Import tokens once at your app root.
 * </Alert>
 */
export function Alert({
  variant = 'info',
  title,
  children,
  className,
  role = 'status',
  ...rest
}: AlertProps) {
  const classes = [styles.alert, variantClass[variant], className].filter(Boolean).join(' ');

  return (
    <div className={classes} role={role} {...rest}>
      {title ? <p className={styles.title}>{title}</p> : null}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
