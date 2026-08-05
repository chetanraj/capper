import { Stack, Text } from '@capper-ui/react';
import styles from './RadiusShadowTokensPage.module.css';

const radii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];
const shadows = ['xs', 'sm', 'md', 'lg', 'xl'];

export function RadiusShadowTokensPage() {
  return (
    <div className="prose">
      <Text as="h1">Radius &amp; shadow</Text>
      <Text as="p" className="lede">
        Two small scales that round out the foundations: corner radius for shape, and shadow for
        elevation. Shadows reference an HSL shadow-color token, which themes can repoint without
        touching the recipes themselves.
      </Text>

      <Text as="h2">Radius</Text>
      <div className={styles.grid}>
        {radii.map((r) => (
          <div key={r} className={styles.cell}>
            <div className={styles.radiusBox} style={{ borderRadius: `var(--c-radius-${r})` }} />
            <Text as="code" size="xs" mono color="subtle">
              --c-radius-{r}
            </Text>
          </div>
        ))}
      </div>

      <Text as="h2">Shadow</Text>
      <Stack gap="lg">
        {shadows.map((s) => (
          <div key={s} className={styles.shadowRow}>
            <div className={styles.shadowBox} style={{ boxShadow: `var(--c-shadow-${s})` }} />
            <Text as="code" size="sm" mono color="muted">
              --c-shadow-{s}
            </Text>
          </div>
        ))}
      </Stack>
    </div>
  );
}
