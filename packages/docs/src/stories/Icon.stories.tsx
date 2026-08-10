import {
  ArrowLeft,
  Calendar,
  Clock,
  Github,
  Icon,
  Inline,
  Instagram,
  Monitor,
  Moon,
  Rss,
  Sun,
  X,
} from '@capper-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

const starterIcons = [
  { icon: Sun, label: 'Light theme' },
  { icon: Moon, label: 'Dark theme' },
  { icon: Monitor, label: 'System theme' },
  { icon: ArrowLeft, label: 'Back' },
  { icon: Rss, label: 'RSS feed' },
  { icon: Calendar, label: 'Calendar' },
  { icon: Clock, label: 'Clock' },
  { icon: Github, label: 'GitHub' },
  { icon: Instagram, label: 'Instagram' },
  { icon: X, label: 'X' },
] as const;

export const StarterSet: Story = {
  render: () => (
    <Inline gap="md" align="center" wrap>
      {starterIcons.map(({ icon, label }) => (
        <Icon key={label} icon={icon} size="lg" label={label} />
      ))}
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
