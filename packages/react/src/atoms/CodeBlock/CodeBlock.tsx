import type { HTMLAttributes } from 'react';
import styles from './CodeBlock.module.css';

type CodeBlockProps = Omit<HTMLAttributes<HTMLPreElement>, 'children'> & {
  /** Source code string to display */
  code: string;
  /** Language hint for styling or future syntax highlighting */
  language?: string;
  children?: never;
};

/**
 * CodeBlock renders a preformatted code sample for docs and examples.
 *
 * @example
 * <CodeBlock code={`import { Button } from '@capper-ui/react';`} language="tsx" />
 */
export function CodeBlock({ code, language = 'tsx', className, ...rest }: CodeBlockProps) {
  const classes = [styles.block, className].filter(Boolean).join(' ');

  return (
    <pre className={classes} data-language={language} {...rest}>
      <code className={styles.code}>{code.trim()}</code>
    </pre>
  );
}
