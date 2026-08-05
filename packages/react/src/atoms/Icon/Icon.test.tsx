import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Sun } from '../../icons';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders a phosphor svg', () => {
    const { container } = render(<Icon icon={Sun} aria-hidden />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies size class', () => {
    const { container } = render(<Icon icon={Sun} size="lg" aria-hidden />);
    expect(container.querySelector('svg')?.getAttribute('class')).toMatch(/size-lg/);
  });

  it('sets aria-label when label is provided', () => {
    render(<Icon icon={Sun} label="Light theme" />);
    expect(screen.getByLabelText('Light theme')).toBeInTheDocument();
  });
});
