import { Box, Stack, Text } from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'as',
    type: 'ElementType',
    default: "'div'",
    description: 'Render as a different HTML element.',
  },
  {
    name: 'gap',
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    default: "'md'",
    description: 'Space between children.',
  },
  {
    name: 'align',
    type: "'start' | 'center' | 'end' | 'stretch'",
    description: 'Cross-axis (horizontal) alignment.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class names, merged with internal classes.',
  },
];

const item = (label: string) => (
  <Box
    key={label}
    padding="sm"
    style={{
      background: 'var(--c-surface-raised)',
      border: '1px solid var(--c-border)',
      borderRadius: 'var(--c-radius-md)',
    }}
  >
    <Text size="sm">{label}</Text>
  </Box>
);

export function StackPage() {
  return (
    <div className="prose">
      <Text as="h1">Stack</Text>
      <Text as="p" className="lede">
        Arranges children in a vertical column with consistent spacing. The primary vertical layout
        primitive in Capper UI, paired with Inline for horizontal layout.
      </Text>

      <Text as="h2">Gap scale</Text>
      <ComponentPreview
        center={false}
        code={`<Stack gap="md">\n  <Box>A</Box>\n  <Box>B</Box>\n</Stack>`}
      >
        <div style={{ display: 'flex', gap: 32 }}>
          {(['xs', 'sm', 'md', 'lg'] as const).map((g) => (
            <div key={g}>
              <Text size="xs" color="muted" mono style={{ marginBottom: 8 }}>
                gap={g}
              </Text>
              <Stack gap={g}>{[item('A'), item('B'), item('C')]}</Stack>
            </div>
          ))}
        </div>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
