import { Box, Text } from '@capper/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'as',
    type: 'ElementType',
    default: "'div'",
    description: 'Render as a different HTML element or component.',
  },
  {
    name: 'padding',
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    description: 'Padding on all sides.',
  },
  {
    name: 'paddingX',
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    description: 'Horizontal padding, overrides padding on the x-axis.',
  },
  {
    name: 'paddingY',
    type: "'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",
    description: 'Vertical padding, overrides padding on the y-axis.',
  },
  {
    name: 'className',
    type: 'string',
    description: 'Additional class names, merged with internal classes.',
  },
];

export function BoxPage() {
  return (
    <div className="prose">
      <Text as="h1">Box</Text>
      <Text as="p" className="lede">
        The base layout primitive. Every other atom in Capper that needs spacing or a flexible root
        element is, underneath, a Box.
      </Text>

      <Text as="h2">Padding scale</Text>
      <ComponentPreview center={false} code={`<Box padding="md">Content</Box>`}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((p) => (
            <Box
              key={p}
              padding={p}
              style={{
                background: 'var(--c-surface-raised)',
                border: '1px solid var(--c-border)',
                borderRadius: 'var(--c-radius-md)',
              }}
            >
              <Text size="sm" mono>
                {p}
              </Text>
            </Box>
          ))}
        </div>
      </ComponentPreview>

      <Text as="h2">Polymorphic rendering</Text>
      <ComponentPreview
        code={`<Box as="section" paddingX="lg" paddingY="sm">\n  Renders a <section>\n</Box>`}
      >
        <Box
          as="section"
          paddingX="lg"
          paddingY="sm"
          style={{
            background: 'var(--c-accent-subtle)',
            border: '1px solid var(--c-accent)',
            borderRadius: 'var(--c-radius-md)',
          }}
        >
          <Text size="sm">Rendered as a &lt;section&gt;</Text>
        </Box>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
