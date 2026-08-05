# Contributing to Capper

Thanks for your interest in Capper. This repo is a pnpm monorepo with three packages:

| Package | Published | Purpose |
|---|---|---|
| `@capper/tokens` | Yes | CSS design tokens |
| `@capper/react` | Yes | React components |
| `@capper/docs` | No | Docs site and Storybook |

## Before you start

- Node.js >= 20
- pnpm >= 9
- Read [`AGENTS.md`](./AGENTS.md) for design system rules and repo conventions

## Tooling

| Tool | Purpose | Commands |
|---|---|---|
| **Biome** | Format and lint TS/TSX/JSON (replaces Prettier + ESLint for JS) | `pnpm format`, `pnpm lint`, `pnpm lint:fix` |
| **Stylelint** | Lint CSS; enforces `--c-*` tokens in component styles | `pnpm lint:css`, `pnpm lint:css:fix` |
| **Vitest** | Tests in `@capper/react` and `@capper/docs` | `pnpm test`, `pnpm test:coverage`, `pnpm test:watch` |
| **TypeScript** | Type-check all packages | `pnpm typecheck` |

Install recommended editor extensions from `.vscode/extensions.json` (Biome, Stylelint, Vitest).

## Local setup

```bash
git clone https://github.com/chetanraj/capper.git
cd capper
pnpm install
pnpm dev          # docs site at http://localhost:5173
pnpm storybook    # Storybook at http://localhost:6006
```

## What to change

| Change type | Typical files |
|---|---|
| Token values or new tokens | `packages/tokens/src/` |
| New or updated component | `packages/react/src/{atoms,molecules,organisms}/` |
| Component docs | `packages/docs/src/site/pages/components/` |
| Storybook | `packages/docs/src/stories/` |
| Route smoke tests | `packages/docs/src/site/App.smoke.test.tsx` |

Generic UI belongs in `@capper/react`. Page-specific docs layout belongs in `@capper/docs`.

## Design rules (summary)

- Use semantic CSS tokens (`--c-*`) in components. No raw hex or magic numbers in component styles.
- Co-located CSS Modules only. No CSS-in-JS.
- Match existing naming, types, and file layout.
- When adding a component, update docs, Storybook, and tests in the same change.
- No em dashes in user-facing docs copy.

See [`AGENTS.md`](./AGENTS.md) for the full list.

## Checks before opening a PR

```bash
pnpm format
pnpm lint
pnpm lint:css
pnpm typecheck
pnpm test
pnpm build
```

## Pull requests

1. Open an issue first for large changes (new components, token architecture, breaking API changes).
2. Keep diffs focused. One logical change per PR when possible.
3. Describe what changed and how you tested it.
4. Do not commit secrets, `.env` files, or `node_modules`.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

## Third-party assets

Capper bundles fonts and icons under their own licenses:

- [Mona Sans](https://github.com/github/mona-sans) (SIL Open Font License 1.1) via `@fontsource-variable/mona-sans`
- [Phosphor Icons](https://phosphoricons.com) (MIT) via `@phosphor-icons/react`

When adding new dependencies, prefer permissive licenses and note them here if they ship with the published packages.
