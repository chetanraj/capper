import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies padding class', () => {
    render(<Card padding="lg">Card content</Card>);
    expect(screen.getByText('Card content').className).toMatch(/pad-lg/);
  });

  it('applies elevated class', () => {
    render(<Card elevated>Card content</Card>);
    expect(screen.getByText('Card content').className).toMatch(/elevated/);
  });

  it('renders as a different element via as prop', () => {
    render(<Card as="article">Article card</Card>);
    expect(screen.getByText('Article card').tagName).toBe('ARTICLE');
  });
});
