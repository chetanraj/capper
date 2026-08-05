import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import styles from './Card.module.css';

type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

type CardOwnProps<T extends ElementType = 'div'> = {
  /** Render as a different HTML element or component */
  as?: T;
  children?: ReactNode;
  /** Inner padding scale */
  padding?: CardPadding;
  /** Apply a raised surface with shadow */
  elevated?: boolean;
  className?: string;
};

type CardProps<T extends ElementType = 'div'> = CardOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof CardOwnProps<T>>;

const paddingClass: Record<CardPadding, string | undefined> = {
  none: styles['pad-none'],
  sm: styles['pad-sm'],
  md: styles['pad-md'],
  lg: styles['pad-lg'],
  xl: styles['pad-xl'],
};

/**
 * Card groups related content on a raised surface.
 *
 * @example
 * <Card padding="lg" elevated>
 *   <Text weight="semibold">Tokens</Text>
 *   <Text size="sm" color="muted">Semantic colors for light and dark themes.</Text>
 * </Card>
 */
export function Card<T extends ElementType = 'div'>({
  as,
  children,
  padding = 'md',
  elevated = false,
  className,
  ...rest
}: CardProps<T>) {
  const Component = as ?? 'div';

  const classes = [
    styles.card,
    paddingClass[padding],
    elevated ? styles.elevated : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...(rest as ComponentPropsWithRef<T>)}>
      {children}
    </Component>
  );
}
