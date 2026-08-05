import { Box, Stack, Text } from '@capper/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
  title: 'Atoms/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    gap: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] },
    align: { control: 'select', options: ['start', 'center', 'end', 'stretch'] },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const swatch = (label: string) => (
  <Box
    key={label}
    padding="sm"
    style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)' }}
  >
    <Text size="sm">{label}</Text>
  </Box>
);

export const Default: Story = {
  render: (args) => <Stack {...args}>{[swatch('First'), swatch('Second'), swatch('Third')]}</Stack>,
  args: { gap: 'md' },
};

export const GapScale: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((g) => (
        <div key={g}>
          <Text size="xs" color="muted">
            gap={g}
          </Text>
          <Stack gap={g}>{[swatch('A'), swatch('B'), swatch('C')]}</Stack>
        </div>
      ))}
    </div>
  ),
};
