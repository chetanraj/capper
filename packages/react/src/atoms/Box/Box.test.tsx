import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Box } from './Box';

describe('Box', () => {
  it('renders a div by default', () => {
    render(<Box data-testid="box">Content</Box>);
    expect(screen.getByTestId('box').tagName).toBe('DIV');
  });

  it('renders as a different element via the as prop', () => {
    render(
      <Box as="section" data-testid="box">
        Content
      </Box>,
    );
    expect(screen.getByTestId('box').tagName).toBe('SECTION');
  });

  it('renders children', () => {
    render(<Box>Hello Capper UI</Box>);
    expect(screen.getByText('Hello Capper UI')).toBeInTheDocument();
  });

  it('applies padding class', () => {
    render(
      <Box padding="md" data-testid="box">
        Content
      </Box>,
    );
    const el = screen.getByTestId('box');
    expect(el.className).toMatch(/pad-md/);
  });

  it('applies paddingX and paddingY classes', () => {
    render(
      <Box paddingX="sm" paddingY="lg" data-testid="box">
        Content
      </Box>,
    );
    const el = screen.getByTestId('box');
    expect(el.className).toMatch(/padX-sm/);
    expect(el.className).toMatch(/padY-lg/);
  });

  it('merges custom className', () => {
    render(
      <Box className="custom" data-testid="box">
        Content
      </Box>,
    );
    expect(screen.getByTestId('box').className).toMatch(/custom/);
  });

  it('passes through arbitrary HTML attributes', () => {
    render(
      <Box data-testid="box" id="my-box" aria-label="container">
        Content
      </Box>,
    );
    const el = screen.getByTestId('box');
    expect(el).toHaveAttribute('id', 'my-box');
    expect(el).toHaveAttribute('aria-label', 'container');
  });
});
