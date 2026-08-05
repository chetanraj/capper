import { Alert, Stack, Text } from '@capper-ui/react';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { type PropRow, PropsTable } from '../../components/PropsTable/PropsTable';

const rows: PropRow[] = [
  {
    name: 'variant',
    type: "'info' | 'success' | 'danger'",
    default: "'info'",
    description: 'Tone and color treatment.',
  },
  {
    name: 'title',
    type: 'string',
    description: 'Optional short heading above the message.',
  },
  {
    name: 'role',
    type: "'status' | 'alert'",
    default: "'status'",
    description: 'Assistive tech announcement priority.',
  },
];

export function AlertPage() {
  return (
    <div className="prose">
      <Text as="h1">Alert</Text>
      <Text as="p" className="lede">
        Inline feedback for tips, confirmations, and errors. Uses semantic status colors and supports
        an optional title.
      </Text>

      <Text as="h2">Variants</Text>
      <ComponentPreview
        code={`<Alert variant="info" title="Tip">Import tokens once at your app root.</Alert>\n<Alert variant="success" title="Saved">Your theme preference was stored.</Alert>\n<Alert variant="danger" title="Error" role="alert">Something went wrong.</Alert>`}
      >
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
      </ComponentPreview>

      <Text as="h2">Props</Text>
      <PropsTable rows={rows} />
    </div>
  );
}
