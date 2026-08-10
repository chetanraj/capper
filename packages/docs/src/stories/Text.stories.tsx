import { Text } from '@capper-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
    weight: { control: 'select', options: ['regular', 'medium', 'semibold', 'bold'] },
    color: {
      control: 'select',
      options: ['default', 'muted', 'subtle', 'accent', 'danger', 'success', 'on-accent'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
    size: 'md',
    weight: 'regular',
    color: 'default',
  },
};

export const SizeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] as const).map((s) => (
        <Text key={s} size={s}>
          {s} / Capper UI
        </Text>
      ))}
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {(['default', 'muted', 'subtle', 'accent', 'danger', 'success'] as const).map((c) => (
        <Text key={c} color={c}>
          {c} text color
        </Text>
      ))}
    </div>
  ),
};

export const Heading: Story = {
  render: () => (
    <Text as="h2" size="3xl" weight="bold">
      A heading rendered via the `as` prop
    </Text>
  ),
};
