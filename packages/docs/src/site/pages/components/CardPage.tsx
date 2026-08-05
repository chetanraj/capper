import { Card, Stack, Text } from '@capper/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'padding',
    type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    description: 'Inner padding scale.',
  },
  {
    name: 'elevated',
    type: 'boolean',
    default: 'false',
    description: 'Apply border and shadow for a raised surface.',
  },
  {
    name: 'as',
    type: 'ElementType',
    default: "'div'",
    description: 'Render as a different HTML element or component.',
  },
];

export function CardPage() {
  return (
    <div className="prose">
      <Text as="h1">Card</Text>
      <Text as="p" className="lede">
        Groups related content on a surface. Card is Capper&apos;s first molecule: a composed layout
        primitive built on the same token layer as atoms.
      </Text>

      <Text as="h2">Examples</Text>
      <ComponentPreview
        code={`<Card padding="lg" elevated>\n  <Text weight="semibold">Tokens</Text>\n  <Text size="sm" color="muted">Semantic colors for light and dark themes.</Text>\n</Card>`}
      >
        <Stack gap="md" style={{ maxWidth: 420 }}>
          <Card padding="lg" elevated>
            <Stack gap="xs">
              <Text weight="semibold">Tokens</Text>
              <Text size="sm" color="muted">
                Semantic colors for light and dark themes.
              </Text>
            </Stack>
          </Card>
          <Card padding="md">
            <Text size="sm" color="muted">
              Flat card without elevation.
            </Text>
          </Card>
        </Stack>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
