import { Input, Text } from '@capper/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Height and font size.' },
  {
    name: 'invalid',
    type: 'boolean',
    default: 'false',
    description: 'Error styling and aria-invalid for validation.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'true',
    description: 'Stretch to the full width of its container.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the field.' },
];

export function InputPage() {
  return (
    <div className="prose">
      <Text as="h1">Input</Text>
      <Text as="p" className="lede">
        The base text field for forms, filters, and settings. Sizes align with Button so fields and
        actions sit on the same rhythm.
      </Text>

      <Text as="h2">Sizes</Text>
      <ComponentPreview
        code={`<Input size="sm" placeholder="Small" aria-label="Small" />\n<Input size="md" placeholder="Medium" aria-label="Medium" />\n<Input size="lg" placeholder="Large" aria-label="Large" />`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
          <Input size="sm" placeholder="Small" aria-label="Small" />
          <Input size="md" placeholder="Medium" aria-label="Medium" />
          <Input size="lg" placeholder="Large" aria-label="Large" />
        </div>
      </ComponentPreview>

      <Text as="h2">Validation</Text>
      <ComponentPreview
        code={'<Input invalid placeholder="you@example.com" aria-label="Email" />'}
      >
        <Input invalid placeholder="you@example.com" aria-label="Email" />
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
