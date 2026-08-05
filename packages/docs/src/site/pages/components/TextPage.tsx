import { Text } from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'as',
    type: "'p' | 'span' | 'h1'…'h6' | 'label' | …",
    default: "'p'",
    description: 'HTML element to render.',
  },
  {
    name: 'size',
    type: "'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'",
    default: "'md'",
    description: 'Font size from the type scale.',
  },
  {
    name: 'weight',
    type: "'regular' | 'medium' | 'semibold' | 'bold'",
    default: "'regular'",
    description: 'Font weight.',
  },
  {
    name: 'color',
    type: "'default' | 'muted' | 'subtle' | 'accent' | 'danger' | 'success' | 'on-accent'",
    default: "'default'",
    description: 'Text color from semantic tokens.',
  },
  { name: 'align', type: "'start' | 'center' | 'end'", description: 'Text alignment.' },
  {
    name: 'truncate',
    type: 'boolean',
    default: 'false',
    description: 'Truncate to a single line with ellipsis.',
  },
  {
    name: 'mono',
    type: 'boolean',
    default: 'false',
    description: 'Use the monospace font, for code or data.',
  },
];

export function TextPage() {
  return (
    <div className="prose">
      <Text as="h1">Text</Text>
      <Text as="p" className="lede">
        The typography primitive. Text enforces the Capper UI type scale. There's no way to set an
        arbitrary font size that doesn't trace back to a token.
      </Text>

      <Text as="h2">Sizes</Text>
      <ComponentPreview center={false} code={`<Text size="2xl" weight="bold">Heading</Text>`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] as const).map((s) => (
            <Text key={s} size={s} style={{ margin: 0 }}>
              {s} / Capper UI
            </Text>
          ))}
        </div>
      </ComponentPreview>

      <Text as="h2">Colors</Text>
      <ComponentPreview center={false} code={`<Text color="accent">Accent text</Text>`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {(['default', 'muted', 'subtle', 'accent', 'danger', 'success'] as const).map((c) => (
            <Text key={c} color={c} style={{ margin: 0 }}>
              {c}
            </Text>
          ))}
        </div>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
