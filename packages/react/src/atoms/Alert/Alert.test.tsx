import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders children', () => {
    render(<Alert>Import tokens at the app root.</Alert>);
    expect(screen.getByText('Import tokens at the app root.')).toBeInTheDocument();
  });

  it('renders an optional title', () => {
    render(
      <Alert title="Tip" variant="info">
        Details here.
      </Alert>,
    );
    expect(screen.getByText('Tip')).toBeInTheDocument();
    expect(screen.getByText('Details here.')).toBeInTheDocument();
  });

  it('applies variant class', () => {
    render(<Alert variant="danger">Something failed.</Alert>);
    expect(screen.getByRole('status').className).toMatch(/variant-danger/);
  });

  it('supports alert role override', () => {
    render(
      <Alert role="alert" variant="danger">
        Error
      </Alert>,
    );
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
