import { CodeBlock } from '@capper/react';
import type { ReactNode } from 'react';
import styles from './ComponentPreview.module.css';

type ComponentPreviewProps = {
  children: ReactNode;
  code: string;
  /** Center the preview content; turn off for full-width examples like Inline */
  center?: boolean;
};

export function ComponentPreview({ children, code, center = true }: ComponentPreviewProps) {
  return (
    <div className={styles.wrapper}>
      <div className={[styles.canvas, center ? styles.centered : ''].join(' ')}>{children}</div>
      <CodeBlock code={code} className={styles.codeBlock} />
    </div>
  );
}
