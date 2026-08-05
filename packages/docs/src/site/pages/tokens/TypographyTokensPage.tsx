import { CodeBlock, InlineCode, Stack, Text } from '@capper-ui/react';
import styles from './TypographyTokensPage.module.css';

const sizes = [
  { token: 'xs', size: '0.75rem' },
  { token: 'sm', size: '0.875rem' },
  { token: 'md', size: '1rem' },
  { token: 'lg', size: '1.125rem' },
  { token: 'xl', size: '1.25rem' },
  { token: '2xl', size: '1.5rem' },
  { token: '3xl', size: '1.875rem' },
  { token: '4xl', size: '2.25rem' },
  { token: '5xl', size: '3rem' },
] as const;

const weights: { token: string; value: number }[] = [
  { token: 'regular', value: 400 },
  { token: 'medium', value: 500 },
  { token: 'semibold', value: 600 },
  { token: 'bold', value: 700 },
];

export function TypographyTokensPage() {
  return (
    <div className="prose">
      <Text as="h1">Typography</Text>
      <Text as="p" className="lede">
        One scale, two families. UI text uses Mona Sans (GitHub&apos;s open-source variable font,
        loaded via <InlineCode>@capper-ui/tokens</InlineCode>). Code uses a monospace stack. Text
        consumes both via its <InlineCode>size</InlineCode>, <InlineCode>weight</InlineCode>, and{' '}
        <InlineCode>mono</InlineCode> props.
      </Text>

      <Text as="h2">Type scale</Text>
      <Stack gap="sm">
        {sizes.map((s) => (
          <div key={s.token} className={styles.row}>
            <Text as="code" size="xs" mono color="subtle" className={styles.label}>
              --c-text-{s.token} ({s.size})
            </Text>
            <Text size={s.token} style={{ margin: 0 }}>
              Capper UI
            </Text>
          </div>
        ))}
      </Stack>

      <Text as="h2">Weights</Text>
      <Stack gap="sm">
        {weights.map((w) => (
          <div key={w.token} className={styles.row}>
            <Text as="code" size="xs" mono color="subtle" className={styles.label}>
              --c-weight-{w.token} ({w.value})
            </Text>
            <Text weight={w.token as never} size="lg" style={{ margin: 0 }}>
              Capper UI
            </Text>
          </div>
        ))}
      </Stack>

      <Text as="h2">Font families</Text>
      <Stack gap="md">
        <div>
          <Text as="code" size="xs" mono color="subtle">
            --c-font-sans
          </Text>
          <Text size="xl" style={{ margin: 'var(--c-space-1) 0 0' }}>
            The quick brown fox jumps over the lazy dog.
          </Text>
        </div>
        <div>
          <Text as="code" size="xs" mono color="subtle">
            --c-font-mono
          </Text>
          <Text size="xl" mono style={{ margin: 'var(--c-space-1) 0 0' }}>
            const fox = () =&gt; 'jumps';
          </Text>
        </div>
      </Stack>

      <Text as="h2">Code styles</Text>
      <Stack gap="md">
        <div>
          <Text as="code" size="xs" mono color="subtle">
            InlineCode
          </Text>
          <Text style={{ margin: 'var(--c-space-1) 0 0' }}>
            Set <InlineCode>size=&quot;5xl&quot;</InlineCode> on Text for display headings.
          </Text>
        </div>
        <div>
          <Text as="code" size="xs" mono color="subtle">
            CodeBlock
          </Text>
          <CodeBlock
            code={`import { Text } from '@capper-ui/react';

<Text size="5xl" weight="bold">Capper UI</Text>`}
          />
        </div>
      </Stack>
    </div>
  );
}
