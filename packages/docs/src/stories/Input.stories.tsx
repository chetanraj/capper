import { Input } from '@capper/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    'aria-label': 'Search',
    placeholder: 'Search components',
  },
};

export const Invalid: Story = {
  args: {
    'aria-label': 'Email',
    placeholder: 'you@example.com',
    invalid: true,
  },
};
