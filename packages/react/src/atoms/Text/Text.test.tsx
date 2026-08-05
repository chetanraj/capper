import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders a p tag by default', () => {
    render(<Text data-testid="t">Hello</Text>);
    expect(screen.getByTestId('t').tagName).toBe('P');
  });

  it('renders as a different element via the as prop', () => {
    render(
      <Text as="h1" data-testid="t">
        Heading
      </Text>,
    );
    expect(screen.getByTestId('t').tagName).toBe('H1');
  });

  it('renders children', () => {
    render(<Text>Capper text</Text>);
    expect(screen.getByText('Capper text')).toBeInTheDocument();
  });

  it('applies size class', () => {
    render(
      <Text size="xl" data-testid="t">
        Text
      </Text>,
    );
    expect(screen.getByTestId('t').className).toMatch(/size-xl/);
  });

  it('applies 5xl size class', () => {
    render(
      <Text size="5xl" data-testid="t">
        Text
      </Text>,
    );
    expect(screen.getByTestId('t').className).toMatch(/size-5xl/);
  });

  it('applies weight class', () => {
    render(
      <Text weight="bold" data-testid="t">
        Text
      </Text>,
    );
    expect(screen.getByTestId('t').className).toMatch(/weight-bold/);
  });

  it('applies color class', () => {
    render(
      <Text color="muted" data-testid="t">
        Text
      </Text>,
    );
    expect(screen.getByTestId('t').className).toMatch(/color-muted/);
  });

  it('applies truncate class when truncate is true', () => {
    render(
      <Text truncate data-testid="t">
        Long text
      </Text>,
    );
    expect(screen.getByTestId('t').className).toMatch(/truncate/);
  });

  it('applies mono class when mono is true', () => {
    render(
      <Text mono data-testid="t">
        Code
      </Text>,
    );
    expect(screen.getByTestId('t').className).toMatch(/mono/);
  });

  it('merges custom className', () => {
    render(
      <Text className="custom" data-testid="t">
        Text
      </Text>,
    );
    expect(screen.getByTestId('t').className).toMatch(/custom/);
  });
});
