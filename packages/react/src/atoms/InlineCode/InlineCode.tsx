import type { HTMLAttributes, ReactNode } from 'react';
import styles from './InlineCode.module.css';

type InlineCodeProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

/**
 * InlineCode highlights short code snippets inside body text.
 *
 * @example
 * <Text>Import <InlineCode>@capper/tokens</InlineCode> once at the app root.</Text>
 */
export function InlineCode({ children, className, ...rest }: InlineCodeProps) {
  const classes = [styles.inlineCode, className].filter(Boolean).join(' ');

  return (
    <code className={classes} {...rest}>
      {children}
    </code>
  );
}
