import { Badge, Inline } from '@capper-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: 'Default' },
};

export const Variants: Story = {
  render: () => (
    <Inline gap="sm" wrap>
      <Badge>Default</Badge>
      <Badge variant="accent">Beta</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="danger">Deprecated</Badge>
    </Inline>
  ),
};
