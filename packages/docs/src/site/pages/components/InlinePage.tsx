import { Box, Button, Inline, Text } from '@capper/react';
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
    type: "'start' | 'center' | 'end' | 'stretch' | 'baseline'",
    description: 'Cross-axis (vertical) alignment.',
  },
  {
    name: 'justify',
    type: "'start' | 'center' | 'end' | 'between' | 'around'",
    description: 'Main-axis distribution.',
  },
  {
    name: 'wrap',
    type: 'boolean',
    default: 'false',
    description: 'Allow children to wrap onto multiple lines.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class names, merged with internal classes.',
  },
];

export function InlinePage() {
  return (
    <div className="prose">
      <Text as="h1">Inline</Text>
      <Text as="p" className="lede">
        Arranges children in a horizontal row with consistent spacing. The primary horizontal layout
        primitive in Capper, most commonly seen grouping buttons or aligning a header.
      </Text>

      <Text as="h2">Justify &amp; align</Text>
      <ComponentPreview
        center={false}
        code={`<Inline justify="between" align="center">\n  <Text weight="semibold">Title</Text>\n  <Button size="sm">Action</Button>\n</Inline>`}
      >
        <Inline
          justify="between"
          align="center"
          style={{
            width: 400,
            padding: 12,
            background: 'var(--c-surface-raised)',
            border: '1px solid var(--c-border)',
            borderRadius: 'var(--c-radius-md)',
          }}
        >
          <Text weight="semibold" style={{ margin: 0 }}>
            Title
          </Text>
          <Button size="sm">Action</Button>
        </Inline>
      </ComponentPreview>

      <Text as="h2">Wrapping</Text>
      <ComponentPreview
        center={false}
        code={`<Inline wrap gap="sm">\n  {tags.map(tag => <Box key={tag}>{tag}</Box>)}\n</Inline>`}
      >
        <Inline wrap gap="sm" style={{ width: 240 }}>
          {Array.from({ length: 8 }, (_, i) => (
            <Box
              key={`tag-${i + 1}`}
              padding="sm"
              style={{
                background: 'var(--c-surface-raised)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--c-radius-md)',
              }}
            >
              <Text size="sm">Tag {i + 1}</Text>
            </Box>
          ))}
        </Inline>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
