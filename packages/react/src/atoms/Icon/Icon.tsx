import type { IconProps as PhosphorIconProps, IconWeight } from '@phosphor-icons/react';
import type { ComponentType } from 'react';
import styles from './Icon.module.css';

type IconSize = 'sm' | 'md' | 'lg';

type IconProps = Omit<PhosphorIconProps, 'size' | 'weight'> & {
  /** Phosphor icon component, e.g. Sun or ArrowLeft */
  icon: ComponentType<PhosphorIconProps>;
  /** Capper UI size scale mapped to pixel dimensions */
  size?: IconSize;
  /** Phosphor stroke/fill weight */
  weight?: IconWeight;
  /** Accessible label. Omit when decorative and paired with visible text. */
  label?: string;
};

const pixelSize: Record<IconSize, number> = {
  sm: 14,
  md: 16,
  lg: 20,
};

/**
 * Icon renders a Phosphor icon at a consistent Capper UI size with currentColor.
 *
 * @example
 * import { ArrowLeft, Icon } from '@capper-ui/react';
 * <Icon icon={ArrowLeft} label="Back" />
 * <Icon icon={Sun} size="sm" aria-hidden />
 */
export function Icon({
  icon: IconComponent,
  size = 'md',
  weight = 'regular',
  label,
  className,
  ...rest
}: IconProps) {
  const classes = [styles.icon, styles[`size-${size}`], className].filter(Boolean).join(' ');

  return (
    <IconComponent
      size={pixelSize[size]}
      weight={weight}
      className={classes}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      {...rest}
    />
  );
}
