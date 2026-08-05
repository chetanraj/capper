import { Link, Text } from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'variant',
    type: "'default' | 'muted' | 'accent'",
    default: "'default'",
    description: 'Visual style of the link.',
  },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Font size.' },
  {
    name: 'href',
    type: 'string',
    description: 'Destination URL. Required for navigation.',
  },
];

export function LinkPage() {
  return (
    <div className="prose">
      <Text as="h1">Link</Text>
      <Text as="p" className="lede">
        Inline navigation with token-driven color and focus styles. External links opened in a new
        tab get safe rel defaults automatically.
      </Text>

      <Text as="h2">Variants</Text>
      <ComponentPreview
        code={`<Link href="/tokens/color">Default link</Link>\n<Link href="/" variant="muted">Muted link</Link>\n<Link href="/components/button" variant="accent">Accent link</Link>`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
          <Link href="/tokens/color">Default link</Link>
          <Link href="/" variant="muted">
            Muted link
          </Link>
          <Link href="/components/button" variant="accent">
            Accent link
          </Link>
        </div>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
