import { Alert, Stack } from '@capper/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    title: 'Tip',
    children: 'Import tokens once at your app root.',
  },
};

export const Variants: Story = {
  render: () => (
    <Stack gap="md">
      <Alert variant="info" title="Tip">
        Import tokens once at your app root.
      </Alert>
      <Alert variant="success" title="Saved">
        Your theme preference was stored.
      </Alert>
      <Alert variant="danger" title="Error" role="alert">
        Something went wrong.
      </Alert>
    </Stack>
  ),
};
