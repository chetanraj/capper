import { Text } from '@capper/react';
import { useEffect, useState } from 'react';
import styles from './TokenSwatchGrid.module.css';

type TokenSwatchGridProps = {
  tokens: string[];
  kind: 'semantic' | 'primitive';
};

/**
 * Renders one swatch per CSS variable name, reading its *computed* value
 * from the document so the displayed hex always matches the active theme.
 */
export function TokenSwatchGrid({ tokens, kind }: TokenSwatchGridProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const computed = getComputedStyle(document.documentElement);
    const next: Record<string, string> = {};
    for (const token of tokens) {
      next[token] = computed.getPropertyValue(token).trim();
    }
    setValues(next);
  }, [tokens]);

  return (
    <div className={styles.grid}>
      {tokens.map((token) => (
        <div key={token} className={styles.swatch}>
          <div
            className={[styles.chip, kind === 'semantic' ? styles.chipSemantic : ''].join(' ')}
            style={{ background: `var(${token})` }}
          />
          <Text as="code" size="xs" mono className={styles.name}>
            {token}
          </Text>
          <Text as="code" size="xs" mono color="subtle">
            {values[token] || '…'}
          </Text>
        </div>
      ))}
    </div>
  );
}
