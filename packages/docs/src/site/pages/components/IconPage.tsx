import {
  ArrowLeft,
  Calendar,
  Clock,
  Github,
  Icon,
  Inline,
  Instagram,
  Monitor,
  Moon,
  Rss,
  Sun,
  Text,
  X,
} from '@capper-ui/react';
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

const starterIcons = [
  { icon: Sun, label: 'Light theme' },
  { icon: Moon, label: 'Dark theme' },
  { icon: Monitor, label: 'System theme' },
  { icon: ArrowLeft, label: 'Back' },
  { icon: Rss, label: 'RSS feed' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Clock, label: 'Clock' },
  { icon: Github, label: 'GitHub' },
  { icon: Instagram, label: 'Instagram' },
  { icon: X, label: 'X' },
] as const;

const starterImport =
  "import { ArrowLeft, Calendar, Clock, Github, Icon, Instagram, Monitor, Moon, Rss, Sun, X } from '@capper-ui/react';";

const starterUsage = `<Icon icon={Sun} label="Light theme" />
<Icon icon={Moon} label="Dark theme" />
<Icon icon={Monitor} label="System theme" />
<Icon icon={ArrowLeft} label="Back" />
<Icon icon={Rss} label="RSS feed" />
<Icon icon={Calendar} label="Calendar" />
<Icon icon={Clock} label="Clock" />
<Icon icon={Github} label="GitHub" />
<Icon icon={Instagram} label="Instagram" />
<Icon icon={X} label="X" />`;

export function IconPage() {
  return (
    <div className="prose">
      <Text as="h1">Icon</Text>
      <Text as="p" className="lede">
        Capper UI uses MIT-licensed Phosphor icons through a thin wrapper that maps sizes to the
        design system and inherits color from currentColor.
      </Text>

      <Text as="h2">Starter set</Text>
      <ComponentPreview code={`${starterImport}\n\n${starterUsage}`}>
        <Inline gap="md" align="center" wrap>
          {starterIcons.map(({ icon, label }) => (
            <Icon key={label} icon={icon} size="lg" label={label} />
          ))}
        </Inline>
      </ComponentPreview>

      <Text as="h2">Sizes</Text>
      <ComponentPreview
        code={`<Icon icon={Sun} size="sm" aria-hidden />\n<Icon icon={Sun} size="md" aria-hidden />\n<Icon icon={Sun} size="lg" aria-hidden />`}
      >
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
