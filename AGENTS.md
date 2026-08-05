# AGENTS.md - Capper UI

Project rules for AI coding agents and humans working in this repo.

This file is loaded into agent context so you do not need to re-explain stack, package boundaries, or design conventions every session.

---

## What this repo is

**Capper UI** is a token-first React design system built on Brad Frost's atomic design principles.

- **Repo:** https://github.com/capper-ui/capper-ui
- **Package manager:** pnpm (monorepo)
- **Node:** >= 20

| Package | Role |
|---------|------|
| `@capper-ui/tokens` | CSS custom properties: primitives + semantic tokens, light/dark theming |
| `@capper-ui/react` | React atoms: `Box`, `Text`, `Button`, `Input`, `Link`, `Badge`, `Alert`, `Icon`, `InlineCode`, `CodeBlock`, `Stack`, `Inline`, and molecule `Card` |
| `@capper-ui/docs` | Documentation site + Storybook |

**Design System Ops** (local): `.claude/skills/design-system-ops/` — Claude Code skill pack for audits, docs coverage, release checks, and governance. Say e.g. "audit my tokens" or "run release pipeline for Button". Optional config: copy `ds-ops-config.example.yml` from that folder to repo root as `.ds-ops-config.yml`.

---

## Commands

```bash
pnpm install
pnpm dev          # docs site (Vite)
pnpm storybook    # Storybook on :6006
pnpm build
pnpm format       # Biome
pnpm lint         # Biome
pnpm lint:fix
pnpm lint:css     # Stylelint
pnpm lint:css:fix
pnpm typecheck
pnpm test         # Vitest
pnpm test:watch
pnpm test:coverage
```

---

## Design system rules (non-negotiable)

### Tokens

- Every color, space, radius, and shadow in components must be a CSS custom property (`--c-*`).
- **Two layers:** primitives (raw scales) and semantic tokens (meaningful names like `--c-accent`, `--c-surface`).
- Components and docs site styles use **semantic tokens only**. Primitives stay inside `@capper-ui/tokens`.
- Stylelint enforces no raw hex or magic numbers in component CSS.

### Components

- Atomic layout: `packages/react/src/{atoms,molecules,organisms}`.
- Atoms exist today; molecules and organisms are scaffolded for future work.
- Each component owns a co-located `.module.css` file. No CSS-in-JS, no utility-class soup.
- Icons use [Phosphor](https://phosphoricons.com) via the `Icon` atom and named exports (`Sun`, `Moon`, `Monitor`, `ArrowLeft`, `Rss`).
- Generic reusable UI belongs in `@capper-ui/react`. Page-specific docs layout belongs in `@capper-ui/docs`.

### Docs site copy

- **No em dashes** (Unicode U+2014) in user-facing docs copy. Use commas, periods, colons, or hyphens instead.
- Theme switcher: Light / Dark / System. Preference persists in `localStorage` (`capper-ui-theme`).

---

## Dev conventions

- TypeScript for React packages; tokens are CSS-only.
- Format and lint with **Biome** (TS/TSX) and **Stylelint** (CSS).
- Tests with **Vitest** + Testing Library. Docs has route smoke tests in `App.smoke.test.tsx`.
- In dev, `@capper-ui/docs` aliases `@capper-ui/react` to source for fast iteration.
- Prefer small, focused diffs. Match existing naming, types, and file layout before introducing new abstractions.

---

## Do / don't

| Do | Don't |
|----|--------|
| Use semantic tokens in component styles | Reference primitive tokens outside `@capper-ui/tokens` |
| Add molecules/organisms under the correct atomic folder | Put generic design-system pieces in the docs package |
| Run `pnpm test` after docs shell or theme changes | Commit secrets, `.env` values, or `node_modules` |
| Update docs, stories, and tests when adding components | Add CSS-in-JS or inline hex colors to components |
| Ask before force-push or destructive git operations | Push without user request |

---

## When unsure

Prefer small, reversible diffs. Read surrounding code before editing. If a change spans tokens, components, and docs, touch all affected surfaces in one pass so the site and library stay in sync.
