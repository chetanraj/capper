import { Icon, Inline, Monitor, Moon, Rss, Sun, Text, ArrowLeft } from '@capper/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'icon',
    type: 'PhosphorIcon',
    description: 'Phosphor icon component, e.g. Sun or ArrowLeft.',
  },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Icon dimensions.' },
  {
    name: 'weight',
    type: "'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'",
    default: "'regular'",
    description: 'Phosphor weight variant.',
  },
  {
    name: 'label',
    type: 'string',
    description: 'Accessible name. Omit when decorative.',
  },
];

export function IconPage() {
  return (
    <div className="prose">
      <Text as="h1">Icon</Text>
      <Text as="p" className="lede">
        Capper uses MIT-licensed Phosphor icons through a thin wrapper that maps sizes to the
        design system and inherits color from currentColor.
      </Text>

      <Text as="h2">Starter set</Text>
      <ComponentPreview
        code={`import { ArrowLeft, Icon, Monitor, Moon, Rss, Sun } from '@capper/react';\n\n<Icon icon={Sun} label="Light theme" />\n<Icon icon={Moon} label="Dark theme" />\n<Icon icon={Monitor} label="System theme" />\n<Icon icon={ArrowLeft} label="Back" />\n<Icon icon={Rss} label="RSS feed" />`}
      >
        <Inline gap="md" align="center">
          <Icon icon={Sun} size="lg" label="Light theme" />
          <Icon icon={Moon} size="lg" label="Dark theme" />
          <Icon icon={Monitor} size="lg" label="System theme" />
          <Icon icon={ArrowLeft} size="lg" label="Back" />
          <Icon icon={Rss} size="lg" label="RSS feed" />
        </Inline>
      </ComponentPreview>

      <Text as="h2">Sizes</Text>
      <ComponentPreview code={`<Icon icon={Sun} size="sm" aria-hidden />\n<Icon icon={Sun} size="md" aria-hidden />\n<Icon icon={Sun} size="lg" aria-hidden />`}>
        <Inline gap="md" align="center">
          <Icon icon={Sun} size="sm" aria-hidden />
          <Icon icon={Sun} size="md" aria-hidden />
          <Icon icon={Sun} size="lg" aria-hidden />
        </Inline>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
