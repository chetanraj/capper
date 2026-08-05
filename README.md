# Capper UI

A token-first React design system built on Brad Frost's atomic design
principles.

## Packages

| Package | Description |
|---|---|
| [`@capper-ui/tokens`](./packages/tokens) | CSS custom properties: primitives and semantic tokens, light/dark theming |
| [`@capper-ui/react`](./packages/react) | React atoms built on the token layer: `Box`, `Text`, `Button`, `Input`, `Link`, `Badge`, `Alert`, `Icon`, `Stack`, `Inline`, and the `Card` molecule |
| [`@capper-ui/docs`](./packages/docs) | Storybook + a multi-page documentation site |

## Requirements

- Node.js >= 20
- pnpm >= 9

## Getting started

```bash
pnpm install
pnpm dev          # docs site at localhost:5173
pnpm storybook    # Storybook at localhost:6006
```

## Install from npm

```bash
pnpm add @capper-ui/tokens @capper-ui/react @phosphor-icons/react
```

```tsx
import '@capper-ui/tokens';
import { Button, Icon, Sun } from '@capper-ui/react';
```

## Publishing

Publish `@capper-ui/tokens` and `@capper-ui/react` to npm (docs stays private):

```bash
pnpm login
pnpm publish:packages
```

Or create a GitHub Release to trigger the publish workflow after adding an `NPM_TOKEN` secret.

## Scripts

| Command | Description |
|---|---|
| `pnpm build` | Build all packages |
| `pnpm test` | Run all tests (Vitest) |
| `pnpm test:watch` | Run Vitest in watch mode |
| `pnpm test:coverage` | Run Vitest with coverage |
| `pnpm lint` | Lint TS/TSX/JSON with Biome |
| `pnpm lint:fix` | Lint and auto-fix with Biome |
| `pnpm lint:css` | Lint CSS with Stylelint |
| `pnpm lint:css:fix` | Lint and auto-fix CSS |
| `pnpm format` | Format TS/TSX/JSON with Biome |
| `pnpm typecheck` | Type-check all packages |

## Principles

- **Token-first.** Every color, space, radius, and shadow a component uses
  is a CSS custom property (`--c-*`). No raw hex or magic numbers in
  component styles. Stylelint enforces this.
- **Two-layer tokens.** Primitives are raw, named-by-value scales.
  Semantic tokens reference primitives and carry meaning (`--c-accent`,
  `--c-surface`, `--c-danger`); only semantic tokens are used outside the
  tokens package.
- **Atomic design.** `packages/react/src/{atoms,molecules,organisms}`
  mirrors Brad Frost's atomic design model. Atoms exist today; molecules
  and organisms are scaffolded for what comes next.
- **CSS Modules.** Each component owns a co-located `.module.css` file.
  No CSS-in-JS, no utility-class soup.

## License

Capper UI is [MIT licensed](./LICENSE).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, design rules, and pull request guidelines.
