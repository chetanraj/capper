import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import styles from './Stack.module.css';

type GapScale = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AlignItems = 'start' | 'center' | 'end' | 'stretch';

type StackOwnProps<T extends ElementType = 'div'> = {
  /** Render as a different HTML element */
  as?: T;
  /** Space between children */
  gap?: GapScale;
  /** Cross-axis alignment */
  align?: AlignItems;
  children: ReactNode;
  className?: string;
};

type StackProps<T extends ElementType = 'div'> = StackOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof StackOwnProps<T>>;

const gapClass: Record<GapScale, string | undefined> = {
  none: styles['gap-none'],
  xs: styles['gap-xs'],
  sm: styles['gap-sm'],
  md: styles['gap-md'],
  lg: styles['gap-lg'],
  xl: styles['gap-xl'],
  '2xl': styles['gap-2xl'],
};

const alignClass: Record<AlignItems, string | undefined> = {
  start: styles['align-start'],
  center: styles['align-center'],
  end: styles['align-end'],
  stretch: styles['align-stretch'],
};

/**
 * Stack arranges children in a vertical column with consistent spacing.
 * It is the primary vertical layout primitive in Capper UI.
 *
 * @example
 * <Stack gap="md">
 *   <Text>First item</Text>
 *   <Text>Second item</Text>
 * </Stack>
 *
 * <Stack as="ul" gap="sm" align="center">
 *   <li>Item A</li>
 *   <li>Item B</li>
 * </Stack>
 */
export function Stack<T extends ElementType = 'div'>({
  as,
  gap = 'md',
  align,
  children,
  className,
  ...rest
}: StackProps<T>) {
  const Component = as ?? 'div';

  const classes = [
    styles.stack,
    gapClass[gap],
    align !== undefined ? alignClass[align] : undefined,
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
