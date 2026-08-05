import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Link } from './Link';

describe('Link', () => {
  it('renders an anchor with children', () => {
    render(<Link href="/tokens/color">Color</Link>);
    expect(screen.getByRole('link', { name: 'Color' })).toHaveAttribute('href', '/tokens/color');
  });

  it('applies variant class', () => {
    render(
      <Link href="/" variant="accent">
        Accent
      </Link>,
    );
    expect(screen.getByRole('link').className).toMatch(/variant-accent/);
  });

  it('adds safe rel for target blank', () => {
    render(
      <Link href="https://example.com" target="_blank">
        External
      </Link>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
