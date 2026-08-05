import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Inline } from './Inline';

describe('Inline', () => {
  it('renders a div by default', () => {
    render(<Inline data-testid="inline">Content</Inline>);
    expect(screen.getByTestId('inline').tagName).toBe('DIV');
  });

  it('renders as a different element via the as prop', () => {
    render(
      <Inline as="nav" data-testid="inline">
        Content
      </Inline>,
    );
    expect(screen.getByTestId('inline').tagName).toBe('NAV');
  });

  it('defaults to a medium gap', () => {
    render(<Inline data-testid="inline">Content</Inline>);
    expect(screen.getByTestId('inline').className).toMatch(/gap-md/);
  });

  it('applies a custom gap', () => {
    render(
      <Inline gap="xs" data-testid="inline">
        Content
      </Inline>,
    );
    expect(screen.getByTestId('inline').className).toMatch(/gap-xs/);
  });

  it('applies align and justify classes when provided', () => {
    render(
      <Inline align="center" justify="between" data-testid="inline">
        Content
      </Inline>,
    );
    const el = screen.getByTestId('inline');
    expect(el.className).toMatch(/align-center/);
    expect(el.className).toMatch(/justify-between/);
  });

  it('does not wrap by default', () => {
    render(<Inline data-testid="inline">Content</Inline>);
    expect(screen.getByTestId('inline').className).not.toMatch(/wrap/);
  });

  it('applies wrap class when wrap is true', () => {
    render(
      <Inline wrap data-testid="inline">
        Content
      </Inline>,
    );
    expect(screen.getByTestId('inline').className).toMatch(/wrap/);
  });

  it('merges custom className', () => {
    render(
      <Inline className="custom" data-testid="inline">
        Content
      </Inline>,
    );
    expect(screen.getByTestId('inline').className).toMatch(/custom/);
  });
});
