import { Box, Button, Inline, Text } from '@capper/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Inline> = {
  title: 'Atoms/Inline',
  component: Inline,
  tags: ['autodocs'],
  argTypes: {
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    justify: { control: 'select', options: ['start', 'center', 'end', 'between', 'around'] },
  },
};

export default meta;
type Story = StoryObj<typeof Inline>;

export const Default: Story = {
  render: (args) => (
    <Inline {...args}>
      <Button variant="secondary">Cancel</Button>
      <Button>Save</Button>
    </Inline>
  ),
  args: { gap: 'sm' },
};

export const JustifyBetween: Story = {
  render: () => (
    <Inline
      justify="between"
      align="center"
      style={{
        width: 400,
        padding: 12,
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
      }}
    >
      <Text weight="semibold">Title</Text>
      <Button size="sm">Action</Button>
    </Inline>
  ),
};

export const Wrapping: Story = {
  render: () => (
    <Inline wrap gap="sm" style={{ width: 220 }}>
      {Array.from({ length: 8 }, (_, i) => (
        <Box
          key={`tag-${i + 1}`}
          padding="sm"
          style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
        >
          Tag {i + 1}
        </Box>
      ))}
    </Inline>
  ),
};
