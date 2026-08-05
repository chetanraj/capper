import { ArrowLeft, Icon, Inline, Monitor, Moon, Rss, Sun } from '@capper/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const StarterSet: Story = {
  render: () => (
    <Inline gap="md" align="center">
      <Icon icon={Sun} size="lg" label="Light theme" />
      <Icon icon={Moon} size="lg" label="Dark theme" />
      <Icon icon={Monitor} size="lg" label="System theme" />
      <Icon icon={ArrowLeft} size="lg" label="Back" />
      <Icon icon={Rss} size="lg" label="RSS feed" />
    </Inline>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Inline gap="md" align="center">
      <Icon icon={Sun} size="sm" aria-hidden />
      <Icon icon={Sun} size="md" aria-hidden />
      <Icon icon={Sun} size="lg" aria-hidden />
    </Inline>
  ),
};
