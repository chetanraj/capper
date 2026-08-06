# Capper UI

An open source, token-first React design system built on Brad Frost's atomic design
principles.

## Packages

| Package | Description |
|---|---|
| [`@capper-ui/tokens`](./packages/tokens) | CSS custom properties: primitives and semantic tokens, light/dark theming |
| [`@capper-ui/react`](./packages/react) | React atoms built on the token layer: `Box`, `Text`, `Button`, `Input`, `Link`, `Badge`, `Alert`, `Icon`, `Stack`, `Inline`, and the `Card` molecule |
| [`@capper-ui/docs`](./packages/docs) | Storybook + a multi-page documentation site |

## Requirements

- pnpm >= 9 (for developing this repo)

## Install

```bash
pnpm add @capper-ui/tokens @capper-ui/react @phosphor-icons/react
```

```tsx
import '@capper-ui/tokens';
import { Button, Icon, Sun } from '@capper-ui/react';
```

## Develop this repo

```bash
git clone https://github.com/chetanraj/capper.git
cd capper
pnpm install
pnpm dev          # docs site at localhost:5173
pnpm storybook    # Storybook at localhost:6006
```

## Docs site (Netlify)

**Live site:** [capper-ui-docs.netlify.app](https://capper-ui-docs.netlify.app)

Build and deploy settings live in [`netlify.toml`](./netlify.toml). From the repo root:

```bash
netlify deploy --build --filter @capper-ui/docs    # preview
netlify deploy --prod --filter @capper-ui/docs     # production
```

## Scripts

| Command | Description |
|---|---|
| `pnpm build` | Build all packages |
| `pnpm build:docs` | Build react + docs site (Netlify deploy output) |
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
