import { CodeBlock, InlineCode, Text } from '@capper/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InlineCode> = {
  title: 'Atoms/Code',
  component: InlineCode,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InlineCode>;

export const Inline: Story = {
  render: () => (
    <Text>
      Import <InlineCode>@capper/tokens</InlineCode> once, then use{' '}
      <InlineCode>size=&quot;5xl&quot;</InlineCode> on Text.
    </Text>
  ),
};

export const Block: Story = {
  render: () => (
    <CodeBlock
      code={`import '@capper/tokens';
import { Button } from '@capper/react';`}
    />
  ),
};
