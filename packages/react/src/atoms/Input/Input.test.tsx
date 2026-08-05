import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input aria-label="Email" />);
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
  });

  it('applies size class', () => {
    render(<Input aria-label="Search" size="lg" />);
    expect(screen.getByRole('textbox').className).toMatch(/size-lg/);
  });

  it('sets aria-invalid when invalid', () => {
    render(<Input aria-label="Email" invalid />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Input aria-label="Email" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
