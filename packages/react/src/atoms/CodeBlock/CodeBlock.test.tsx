import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { CodeBlock } from './CodeBlock';

describe('CodeBlock', () => {
  it('renders trimmed code inside pre and code elements', () => {
    render(<CodeBlock code={'  const x = 1;  '} data-testid="block" />);
    const block = screen.getByTestId('block');
    expect(block.tagName).toBe('PRE');
    expect(block.querySelector('code')).toHaveTextContent('const x = 1;');
  });

  it('sets the language data attribute', () => {
    render(<CodeBlock code="pnpm install" language="bash" data-testid="block" />);
    expect(screen.getByTestId('block')).toHaveAttribute('data-language', 'bash');
  });

  it('merges custom className', () => {
    render(<CodeBlock code="x" className="custom" data-testid="block" />);
    expect(screen.getByTestId('block').className).toMatch(/custom/);
  });
});
