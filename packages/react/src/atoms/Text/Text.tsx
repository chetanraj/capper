import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Text.module.css';

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TextColor = 'default' | 'muted' | 'subtle' | 'accent' | 'danger' | 'success' | 'on-accent';
type TextAlign = 'start' | 'center' | 'end';
type TextAs =
  | 'p'
  | 'span'
  | 'div'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'figcaption'
  | 'legend'
  | 'strong'
  | 'em'
  | 'small'
  | 'code';

type TextOwnProps = {
  /** HTML element to render */
  as?: TextAs;
  /** Font size from the type scale */
  size?: TextSize;
  /** Font weight */
  weight?: TextWeight;
  /** Text color from the semantic color tokens */
  color?: TextColor;
  /** Text alignment */
  align?: TextAlign;
  /** Truncate to a single line with ellipsis */
  truncate?: boolean;
  /** Monospace font (for code/data contexts) */
  mono?: boolean;
  children: ReactNode;
  className?: string | undefined;
};

type TextProps = TextOwnProps &
  Omit<ComponentPropsWithoutRef<'span'>, keyof TextOwnProps | 'color'>;

const sizeClass: Record<TextSize, string | undefined> = {
  xs: styles['size-xs'],
  sm: styles['size-sm'],
  md: styles['size-md'],
  lg: styles['size-lg'],
  xl: styles['size-xl'],
  '2xl': styles['size-2xl'],
  '3xl': styles['size-3xl'],
  '4xl': styles['size-4xl'],
  '5xl': styles['size-5xl'],
};

const weightClass: Record<TextWeight, string | undefined> = {
  regular: styles['weight-regular'],
  medium: styles['weight-medium'],
  semibold: styles['weight-semibold'],
  bold: styles['weight-bold'],
};

const colorClass: Record<TextColor, string | undefined> = {
  default: styles['color-default'],
  muted: styles['color-muted'],
  subtle: styles['color-subtle'],
  accent: styles['color-accent'],
  danger: styles['color-danger'],
  success: styles['color-success'],
  'on-accent': styles['color-on-accent'],
};

const alignClass: Record<TextAlign, string | undefined> = {
  start: styles['align-start'],
  center: styles['align-center'],
  end: styles['align-end'],
};

/**
 * Text is the typography primitive. It maps to semantic tokens and enforces
 * the Capper UI type scale. It renders a `<p>` by default and can render as
 * any inline or block text element via the `as` prop.
 *
 * @example
 * <Text>Default paragraph</Text>
 * <Text as="h2" size="3xl" weight="bold">Heading</Text>
 * <Text size="sm" color="muted">Helper text</Text>
 * <Text mono size="sm">const x = 1;</Text>
 */
export function Text({
  as: Tag = 'p',
  size = 'md',
  weight = 'regular',
  color = 'default',
  align,
  truncate = false,
  mono = false,
  children,
  className,
  ...rest
}: TextProps) {
  const classes = [
    styles.text,
    sizeClass[size],
    weightClass[weight],
    colorClass[color],
    align !== undefined ? alignClass[align] : undefined,
    truncate ? styles.truncate : undefined,
    mono ? styles.mono : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
