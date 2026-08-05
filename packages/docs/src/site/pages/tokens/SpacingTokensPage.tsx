import { Stack, Text } from '@capper/react';
import styles from './SpacingTokensPage.module.css';

const spaceScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 32];

const gapScale: { name: string; value: string }[] = [
  { name: '--c-gap-none', value: '0px' },
  { name: '--c-gap-xs', value: '4px' },
  { name: '--c-gap-sm', value: '8px' },
  { name: '--c-gap-md', value: '16px' },
  { name: '--c-gap-lg', value: '24px' },
  { name: '--c-gap-xl', value: '32px' },
  { name: '--c-gap-2xl', value: '48px' },
];

export function SpacingTokensPage() {
  return (
    <div className="prose">
      <Text as="h1">Spacing</Text>
      <Text as="p" className="lede">
        A 4px base grid. Primitive <code>--c-space-*</code> tokens are the raw scale; Box uses
        padding tokens and Stack/Inline use gap tokens, both of which reference this same grid.
      </Text>

      <Text as="h2">Base scale</Text>
      <Stack gap="sm">
        {spaceScale.map((n) => (
          <div key={n} className={styles.row}>
            <Text as="code" size="sm" mono color="muted" className={styles.label}>
              --c-space-{n}
            </Text>
            <div className={styles.bar} style={{ width: `var(--c-space-${n})` }} />
            <Text as="code" size="xs" mono color="subtle">
              {n * 4}px
            </Text>
          </div>
        ))}
      </Stack>

      <Text as="h2">Gap scale (Stack &amp; Inline)</Text>
      <Text as="p">
        The <code>gap</code> prop on Stack and Inline maps to this scale, used for spacing between
        siblings rather than padding within a single element.
      </Text>
      <Stack gap="sm">
        {gapScale.map((g) => (
          <div key={g.name} className={styles.row}>
            <Text as="code" size="sm" mono color="muted" className={styles.label}>
              {g.name}
            </Text>
            <div className={styles.bar} style={{ width: `var(${g.name})` }} />
            <Text as="code" size="xs" mono color="subtle">
              {g.value}
            </Text>
          </div>
        ))}
      </Stack>
    </div>
  );
}
