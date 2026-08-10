import { CodeBlock, InlineCode, Stack, Text } from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const inlineRows: PropRow[] = [
  { name: 'children', type: 'ReactNode', description: 'Short code snippet to highlight inline.' },
];

const blockRows: PropRow[] = [
  { name: 'code', type: 'string', description: 'Source code string to display.' },
  {
    name: 'language',
    type: 'string',
    default: "'tsx'",
    description: 'Language hint stored on data-language.',
  },
];

export function CodePage() {
  return (
    <div className="prose">
      <Text as="h1">Code</Text>
      <Text as="p" className="lede">
        InlineCode and CodeBlock style monospace snippets with semantic code tokens. Use InlineCode
        inside body copy and CodeBlock for multi-line samples.
      </Text>

      <Text as="h2">Inline code</Text>
      <ComponentPreview
        code={
          '<Text>\n  Import <InlineCode>@capper-ui/tokens</InlineCode> at the app root.\n</Text>'
        }
      >
        <Text style={{ margin: 0 }}>
          Import <InlineCode>@capper-ui/tokens</InlineCode> at the app root, then set{' '}
          <InlineCode>size=&quot;5xl&quot;</InlineCode> on Text.
        </Text>
      </ComponentPreview>

      <Text as="h2">Code block</Text>
      <ComponentPreview
        center={false}
        code={`<CodeBlock\n  language="tsx"\n  code={\`import { Button } from '@capper-ui/react';\`}\n/>`}
      >
        <Stack gap="sm">
          <CodeBlock language="bash" code={'pnpm add @capper-ui/tokens @capper-ui/react'} />
          <CodeBlock
            code={`import '@capper-ui/tokens';
import { Button } from '@capper-ui/react';`}
          />
        </Stack>
      </ComponentPreview>

      <Text as="h2">InlineCode props</Text>
      <PropsTable rows={inlineRows} />

      <Text as="h2">CodeBlock props</Text>
      <PropsTable rows={blockRows} />
    </div>
  );
}
