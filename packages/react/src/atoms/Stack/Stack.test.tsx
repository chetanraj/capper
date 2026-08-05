import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders a div by default', () => {
    render(<Stack data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack').tagName).toBe('DIV');
  });

  it('renders as a different element via the as prop', () => {
    render(
      <Stack as="ul" data-testid="stack">
        <li>Item</li>
      </Stack>,
    );
    expect(screen.getByTestId('stack').tagName).toBe('UL');
  });

  it('defaults to a medium gap', () => {
    render(<Stack data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack').className).toMatch(/gap-md/);
  });

  it('applies a custom gap', () => {
    render(
      <Stack gap="2xl" data-testid="stack">
        Content
      </Stack>,
    );
    expect(screen.getByTestId('stack').className).toMatch(/gap-2xl/);
  });

  it('applies an align class when provided', () => {
    render(
      <Stack align="center" data-testid="stack">
        Content
      </Stack>,
    );
    expect(screen.getByTestId('stack').className).toMatch(/align-center/);
  });

  it('omits align class when not provided', () => {
    render(<Stack data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack').className).not.toMatch(/align-/);
  });

  it('merges custom className', () => {
    render(
      <Stack className="custom" data-testid="stack">
        Content
      </Stack>,
    );
    expect(screen.getByTestId('stack').className).toMatch(/custom/);
  });

  it('renders children', () => {
    render(<Stack>Hello Stack</Stack>);
    expect(screen.getByText('Hello Stack')).toBeInTheDocument();
  });
});
