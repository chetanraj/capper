import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { App } from './App';

/**
 * This is not a type-check. It actually mounts the real App component
 * tree (real router, real AppShell, real page components, real
 * @capper-ui/react atoms) through React + jsdom for every route in the
 * site, and asserts on what actually rendered. A clean `tsc --noEmit`
 * and a clean `vite build` do not guarantee this — a hook called wrong,
 * a missing browser API, or a runtime exception on mount would pass
 * both of those and still crash here.
 */

const routes: { path: string; heading: string | RegExp }[] = [
  { path: '/', heading: /Capper UI/ },
  { path: '/getting-started', heading: 'Getting started' },
  { path: '/tokens/color', heading: 'Color' },
  { path: '/tokens/spacing', heading: 'Spacing' },
  { path: '/tokens/typography', heading: 'Typography' },
  { path: '/tokens/radius-shadow', heading: 'Radius & shadow' },
  { path: '/components/box', heading: 'Box' },
  { path: '/components/text', heading: 'Text' },
  { path: '/components/code', heading: 'Code' },
  { path: '/components/button', heading: 'Button' },
  { path: '/components/input', heading: 'Input' },
  { path: '/components/link', heading: 'Link' },
  { path: '/components/badge', heading: 'Badge' },
  { path: '/components/alert', heading: 'Alert' },
  { path: '/components/icon', heading: 'Icon' },
  { path: '/components/stack', heading: 'Stack' },
  { path: '/components/inline', heading: 'Inline' },
  { path: '/components/card', heading: 'Card' },
];

describe('App routing — real mount per route', () => {
  for (const route of routes) {
    it(`renders ${route.path} without throwing, with the correct heading`, () => {
      render(
        <MemoryRouter initialEntries={[route.path]}>
          <App />
        </MemoryRouter>,
      );
      expect(screen.getByRole('heading', { level: 1, name: route.heading })).toBeInTheDocument();
    });
  }
});

describe('App shell — persistent chrome', () => {
  it('renders the sidebar navigation on doc routes', () => {
    render(
      <MemoryRouter initialEntries={['/components/button']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole('navigation', { name: /documentation/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Button' })).toBeInTheDocument();
  });

  it('hides the sidebar on the landing page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.queryByRole('navigation', { name: /documentation/i })).not.toBeInTheDocument();
  });

  it('renders primary navigation and theme choices in the top bar', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Overview' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Light theme' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Dark theme' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'System theme' })).toBeInTheDocument();
  });
});

describe('Interactive component previews actually render their live examples', () => {
  it('Button page renders real Button atoms with click handlers attached', () => {
    render(
      <MemoryRouter initialEntries={['/components/button']}>
        <App />
      </MemoryRouter>,
    );
    // Multiple "Primary" buttons exist (default story + variants section) — assert at least one.
    expect(screen.getAllByRole('button', { name: 'Primary' }).length).toBeGreaterThan(0);
    expect(screen.getByRole('button', { name: 'Saving...' })).toBeDisabled();
  });

  it('Home page feature cards link to foundations and components', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole('heading', { level: 2, name: 'Shared foundations' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Two paths into the system' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'How it works' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Components' })).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Browse components/i }).length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole('link', { name: /View foundations|Explore foundations/i }).length,
    ).toBeGreaterThan(0);
    // Foundations (4) + Components (6) default cards use "Learn more"
    expect(screen.getAllByRole('link', { name: /Learn more/i }).length).toBe(10);
  });
});
