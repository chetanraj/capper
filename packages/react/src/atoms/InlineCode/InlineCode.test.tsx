import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { InlineCode } from './InlineCode';

describe('InlineCode', () => {
  it('renders a code element', () => {
    render(<InlineCode data-testid="code">@capper-ui/tokens</InlineCode>);
    expect(screen.getByTestId('code').tagName).toBe('CODE');
  });

  it('renders children', () => {
    render(<InlineCode>size</InlineCode>);
    expect(screen.getByText('size')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    render(
      <InlineCode className="custom" data-testid="code">
        mono
      </InlineCode>,
    );
    expect(screen.getByTestId('code').className).toMatch(/custom/);
  });
});
