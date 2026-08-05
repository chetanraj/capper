import { Link } from '@capper-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: '/tokens/color',
    children: 'Color tokens',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
      <Link href="/">Default</Link>
      <Link href="/" variant="muted">
        Muted
      </Link>
      <Link href="/" variant="accent">
        Accent
      </Link>
    </div>
  ),
};
