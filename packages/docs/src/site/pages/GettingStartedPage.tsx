import { CodeBlock, Text } from '@capper-ui/react';
import { Link } from 'react-router-dom';

const installCode = `pnpm add @capper-ui/tokens @capper-ui/react @phosphor-icons/react`;

const themeScript = `<script>
  (function () {
    var key = 'capper-ui-theme';
    var stored = localStorage.getItem(key);
    var dark =
      stored === 'dark' ||
      (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  })();
</script>`;

const appCode = `import '@capper-ui/tokens';
import { Button, Stack, Text } from '@capper-ui/react';

export function App() {
  return (
    <Stack gap="md">
      <Text as="h1" size="2xl" weight="bold">
        Hello, Capper UI
      </Text>
      <Button>Get started</Button>
    </Stack>
  );
}`;

export function GettingStartedPage() {
  return (
    <div className="prose">
      <Text as="h1">Getting started</Text>
      <Text as="p" className="lede">
        Install the token stylesheet once, set a theme on <code>&lt;html&gt;</code>, then compose
        with Capper UI components. Every color and space traces back to a CSS custom property.
      </Text>

      <Text as="h2">Install</Text>
      <CodeBlock code={installCode} language="bash" />

      <Text as="h2">Import tokens</Text>
      <Text as="p">
        Load <code>@capper-ui/tokens</code> at your app root before any component styles. This registers
        primitives, semantic tokens, and the Mona Sans font.
      </Text>
      <CodeBlock code={`import '@capper-ui/tokens';`} />

      <Text as="h2">Theme setup</Text>
      <Text as="p">
        Capper UI themes use <code>data-theme=&quot;light&quot;</code> or{' '}
        <code>data-theme=&quot;dark&quot;</code> on the document root. Add this blocking script in{' '}
        <code>&lt;head&gt;</code> before your bundle to avoid a flash of the wrong theme:
      </Text>
      <CodeBlock code={themeScript} language="html" />

      <Text as="p">
        In React, you can sync theme with <code>localStorage</code> and OS preference the same way the
        docs site does in <code>useTheme.ts</code>.
      </Text>

      <Text as="h2">Use components</Text>
      <CodeBlock code={appCode} />

      <Text as="h2">Next steps</Text>
      <Text as="p">
        Browse <Link to="/tokens/color">color tokens</Link> for semantic palettes, or jump to{' '}
        <Link to="/components/button">Button</Link> for the first interactive component.
      </Text>
    </div>
  );
}
