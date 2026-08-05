import { Badge, Inline, Text } from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'variant',
    type: "'default' | 'accent' | 'success' | 'danger'",
    default: "'default'",
    description: 'Visual style of the badge.',
  },
  { name: 'size', type: "'sm' | 'md'", default: "'md'", description: 'Height and padding.' },
];

export function BadgePage() {
  return (
    <div className="prose">
      <Text as="h1">Badge</Text>
      <Text as="p" className="lede">
        Compact labels for status, counts, and metadata. Pairs well with Inline for tags and filter
        chips.
      </Text>

      <Text as="h2">Variants</Text>
      <ComponentPreview
        code={`<Badge>Default</Badge>\n<Badge variant="accent">Beta</Badge>\n<Badge variant="success">Active</Badge>\n<Badge variant="danger">Deprecated</Badge>`}
      >
        <Inline gap="sm" wrap>
          <Badge>Default</Badge>
          <Badge variant="accent">Beta</Badge>
          <Badge variant="success">Active</Badge>
          <Badge variant="danger">Deprecated</Badge>
        </Inline>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
