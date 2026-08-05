import { Stack, Text } from '@capper-ui/react';
import { TokenSwatchGrid } from '../../components/TokenSwatch/TokenSwatchGrid';

const amber = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
const neutral = amber;
const red = amber;
const green = amber;
const blue = amber;

const semanticGroups: { title: string; tokens: string[] }[] = [
  { title: 'Background', tokens: ['--c-bg', '--c-bg-subtle', '--c-bg-inset'] },
  { title: 'Surface', tokens: ['--c-surface', '--c-surface-raised', '--c-surface-overlay'] },
  { title: 'Border', tokens: ['--c-border', '--c-border-muted', '--c-border-strong'] },
  { title: 'Text', tokens: ['--c-text', '--c-text-muted', '--c-text-subtle'] },
  {
    title: 'Accent',
    tokens: [
      '--c-accent',
      '--c-accent-hover',
      '--c-accent-active',
      '--c-accent-subtle',
      '--c-accent-muted',
    ],
  },
  {
    title: 'Danger',
    tokens: ['--c-danger', '--c-danger-hover', '--c-danger-subtle', '--c-danger-muted'],
  },
  {
    title: 'Success',
    tokens: ['--c-success', '--c-success-hover', '--c-success-subtle', '--c-success-muted'],
  },
  {
    title: 'Warning',
    tokens: ['--c-warning', '--c-warning-hover', '--c-warning-subtle', '--c-warning-muted'],
  },
  { title: 'Info', tokens: ['--c-info', '--c-info-hover', '--c-info-subtle', '--c-info-muted'] },
];

export function ColorTokensPage() {
  return (
    <div className="prose">
      <Text as="h1">Color</Text>
      <Text as="p" className="lede">
        Color in Capper UI is two layers deep. Primitives are raw, named-by-value scales. Semantic
        tokens reference primitives and carry meaning. They're the only color values components are
        allowed to use, and they remap when <code>data-theme</code> changes on the document root.
      </Text>

      <Text as="h2">Semantic tokens</Text>
      <Text as="p">
        Build with these. Each swaps when <code>data-theme</code> changes on the document root.
      </Text>
      <Stack gap="lg">
        {semanticGroups.map((group) => (
          <div key={group.title}>
            <Text
              size="sm"
              weight="semibold"
              color="muted"
              style={{ marginBottom: 'var(--c-space-2)', display: 'block' }}
            >
              {group.title}
            </Text>
            <TokenSwatchGrid tokens={group.tokens} kind="semantic" />
          </div>
        ))}
      </Stack>

      <Text as="h2">Primitive scales</Text>
      <Text as="p">
        Raw values only. Components should never reference these directly. Stylelint enforces this,
        allowing raw hex only inside the tokens package's own primitive files.
      </Text>

      <Stack gap="lg">
        <div>
          <Text
            size="sm"
            weight="semibold"
            color="muted"
            style={{ marginBottom: 'var(--c-space-2)', display: 'block' }}
          >
            Amber (warning)
          </Text>
          <TokenSwatchGrid tokens={amber.map((n) => `--c-amber-${n}`)} kind="primitive" />
        </div>
        <div>
          <Text
            size="sm"
            weight="semibold"
            color="muted"
            style={{ marginBottom: 'var(--c-space-2)', display: 'block' }}
          >
            Neutral
          </Text>
          <TokenSwatchGrid tokens={neutral.map((n) => `--c-neutral-${n}`)} kind="primitive" />
        </div>
        <div>
          <Text
            size="sm"
            weight="semibold"
            color="muted"
            style={{ marginBottom: 'var(--c-space-2)', display: 'block' }}
          >
            Red
          </Text>
          <TokenSwatchGrid tokens={red.map((n) => `--c-red-${n}`)} kind="primitive" />
        </div>
        <div>
          <Text
            size="sm"
            weight="semibold"
            color="muted"
            style={{ marginBottom: 'var(--c-space-2)', display: 'block' }}
          >
            Green
          </Text>
          <TokenSwatchGrid tokens={green.map((n) => `--c-green-${n}`)} kind="primitive" />
        </div>
        <div>
          <Text
            size="sm"
            weight="semibold"
            color="muted"
            style={{ marginBottom: 'var(--c-space-2)', display: 'block' }}
          >
            Blue
          </Text>
          <TokenSwatchGrid tokens={blue.map((n) => `--c-blue-${n}`)} kind="primitive" />
        </div>
      </Stack>
    </div>
  );
}
