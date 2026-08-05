# Molecules

Molecules are simple combinations of atoms that work together as a unit —
a labeled form field (`Text` + an input), a search bar (`Box` + `Button`),
a tag with a remove action (`Inline` + `Text` + `Button`).

None exist yet. When you add the first one, follow the same structure as
the atoms in `../atoms/`:

```
molecules/ComponentName/
  ComponentName.tsx
  ComponentName.module.css
  ComponentName.test.tsx
  index.ts
```

Then re-export it from `packages/react/src/index.ts`.
