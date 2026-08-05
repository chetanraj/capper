import { Card, Stack, Text } from '@capper/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card padding="lg" elevated style={{ maxWidth: 360 }}>
      <Stack gap="xs">
        <Text weight="semibold">Tokens</Text>
        <Text size="sm" color="muted">
          Semantic colors for light and dark themes.
        </Text>
      </Stack>
    </Card>
  ),
};

export const Flat: Story = {
  args: {
    children: 'Flat card without elevation.',
    padding: 'md',
  },
};
