import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import styles from './Inline.module.css';

type GapScale = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around';

type InlineOwnProps<T extends ElementType = 'div'> = {
  /** Render as a different HTML element */
  as?: T;
  /** Space between children */
  gap?: GapScale;
  /** Cross-axis alignment */
  align?: AlignItems;
  /** Main-axis distribution */
  justify?: JustifyContent;
  /** Allow children to wrap onto multiple lines */
  wrap?: boolean;
  children: ReactNode;
  className?: string;
};

type InlineProps<T extends ElementType = 'div'> = InlineOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof InlineOwnProps<T>>;

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
  baseline: styles['align-baseline'],
};

const justifyClass: Record<JustifyContent, string | undefined> = {
  start: styles['justify-start'],
  center: styles['justify-center'],
  end: styles['justify-end'],
  between: styles['justify-between'],
  around: styles['justify-around'],
};

/**
 * Inline arranges children in a horizontal row with consistent spacing.
 * It is the primary horizontal layout primitive in Capper UI, complementing Stack.
 *
 * @example
 * <Inline gap="sm">
 *   <Button>Cancel</Button>
 *   <Button>Save</Button>
 * </Inline>
 *
 * <Inline justify="between" align="center">
 *   <Text>Title</Text>
 *   <Button>Action</Button>
 * </Inline>
 */
export function Inline<T extends ElementType = 'div'>({
  as,
  gap = 'md',
  align,
  justify,
  wrap = false,
  children,
  className,
  ...rest
}: InlineProps<T>) {
  const Component = as ?? 'div';

  const classes = [
    styles.inline,
    gapClass[gap],
    align !== undefined ? alignClass[align] : undefined,
    justify !== undefined ? justifyClass[justify] : undefined,
    wrap ? styles.wrap : undefined,
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
