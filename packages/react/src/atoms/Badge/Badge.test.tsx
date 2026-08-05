import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    render(<Badge variant="success">Active</Badge>);
    expect(screen.getByText('Active').className).toMatch(/variant-success/);
  });

  it('applies size class', () => {
    render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText('Small').className).toMatch(/size-sm/);
  });
});
