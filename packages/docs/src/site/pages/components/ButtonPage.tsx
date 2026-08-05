import { Button, Text } from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'variant',
    type: "'primary' | 'secondary' | 'ghost' | 'danger'",
    default: "'primary'",
    description: 'Visual style of the button.',
  },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Size of the button.' },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    description: 'Shows a spinner and disables interaction.',
  },
  {
    name: 'fullWidth',
    type: 'boolean',
    default: 'false',
    description: 'Stretches to the full width of its container.',
  },
  { name: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button.' },
];

export function ButtonPage() {
  return (
    <div className="prose">
      <Text as="h1">Button</Text>
      <Text as="p" className="lede">
        The primary interactive element. Four variants and three sizes, all driven by token
        variables. No inline colors anywhere in the component.
      </Text>

      <Text as="h2">When to use</Text>
      <Text as="p">
        Use <strong>primary</strong> for the main action on a page or in a dialog. Use{' '}
        <strong>secondary</strong> for supporting actions (Cancel, Back). Use <strong>ghost</strong>{' '}
        for low-emphasis actions in dense toolbars. Use <strong>danger</strong> for destructive
        operations where the user should pause (delete, remove, revoke).
      </Text>
      <Text as="p">
        Prefer one primary button per view. Pair a primary with a secondary or ghost action when the
        user can choose between confirm and dismiss.
      </Text>

      <Text as="h2">Variants</Text>
      <ComponentPreview
        code={`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="danger">Danger</Button>`}
      >
        <div style={{ display: 'flex', gap: 12 }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </ComponentPreview>

      <Text as="h2">Sizes</Text>
      <ComponentPreview
        code={`<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>`}
      >
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </ComponentPreview>

      <Text as="h2">Loading &amp; disabled</Text>
      <ComponentPreview
        code={'<Button loading>Saving...</Button>\n<Button disabled>Disabled</Button>'}
      >
        <div style={{ display: 'flex', gap: 12 }}>
          <Button loading>Saving...</Button>
          <Button disabled>Disabled</Button>
        </div>
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
