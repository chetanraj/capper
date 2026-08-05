import { Box } from '@capper/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Box> = {
  title: 'Atoms/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    padding: 'md',
    children: 'Box content',
  },
  render: (args) => (
    <Box
      {...args}
      style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
    />
  ),
};

export const PaddingScale: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((p) => (
        <Box
          key={p}
          padding={p}
          style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
        >
          {p}
        </Box>
      ))}
    </div>
  ),
};

export const AsElement: Story = {
  render: () => (
    <Box
      as="section"
      padding="lg"
      style={{ background: 'var(--c-accent-subtle)', border: '1px solid var(--c-accent)' }}
    >
      Rendered as a &lt;section&gt;
    </Box>
  ),
};
