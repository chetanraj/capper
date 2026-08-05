import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import styles from './Box.module.css';

type PaddingScale = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

type BoxOwnProps<T extends ElementType = 'div'> = {
  /** Render as a different HTML element or component */
  as?: T;
  children?: ReactNode;
  /** Apply padding on all sides */
  padding?: PaddingScale;
  /** Apply horizontal padding (overrides padding on x-axis) */
  paddingX?: PaddingScale;
  /** Apply vertical padding (overrides padding on y-axis) */
  paddingY?: PaddingScale;
  className?: string;
};

type BoxProps<T extends ElementType = 'div'> = BoxOwnProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof BoxOwnProps<T>>;

const paddingClass: Record<PaddingScale, string | undefined> = {
  none: styles['pad-none'],
  xs: styles['pad-xs'],
  sm: styles['pad-sm'],
  md: styles['pad-md'],
  lg: styles['pad-lg'],
  xl: styles['pad-xl'],
  '2xl': styles['pad-2xl'],
};

const paddingXClass: Record<PaddingScale, string | undefined> = {
  none: styles['padX-none'],
  xs: styles['padX-xs'],
  sm: styles['padX-sm'],
  md: styles['padX-md'],
  lg: styles['padX-lg'],
  xl: styles['padX-xl'],
  '2xl': styles['padX-2xl'],
};

const paddingYClass: Record<PaddingScale, string | undefined> = {
  none: styles['padY-none'],
  xs: styles['padY-xs'],
  sm: styles['padY-sm'],
  md: styles['padY-md'],
  lg: styles['padY-lg'],
  xl: styles['padY-xl'],
  '2xl': styles['padY-2xl'],
};

/**
 * Box is the base layout primitive. It renders a `div` by default and
 * accepts an `as` prop for polymorphic rendering. All layout and spacing
 * in Capper is built on top of Box.
 *
 * @example
 * <Box padding="md">Content</Box>
 * <Box as="section" paddingX="lg" paddingY="sm">Content</Box>
 * <Box as="article" padding="xl">Content</Box>
 */
export function Box<T extends ElementType = 'div'>({
  as,
  children,
  padding,
  paddingX,
  paddingY,
  className,
  ...rest
}: BoxProps<T>) {
  const Component = as ?? 'div';

  const classes = [
    styles.box,
    padding !== undefined ? paddingClass[padding] : undefined,
    paddingX !== undefined ? paddingXClass[paddingX] : undefined,
    paddingY !== undefined ? paddingYClass[paddingY] : undefined,
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
