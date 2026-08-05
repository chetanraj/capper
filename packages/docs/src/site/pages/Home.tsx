import { Icon, ArrowRight, CodeBlock } from '@capper/react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard/FeatureCard';
import { TaglineReveal } from '../components/TaglineReveal/TaglineReveal';
import { useInView } from '../hooks/useInView';
import styles from './Home.module.css';

const pillars = [
  {
    title: 'Foundations that keep every surface in sync',
    description:
      'Semantic color, type, space, radius, and shadow tokens. Light and dark themes from one source of truth.',
    to: '/tokens/color',
    eyebrow: 'Foundations',
    actionLabel: 'Explore foundations',
    mediaClass: styles.mediaFoundations,
  },
  {
    title: 'Components built atom by atom',
    description:
      'Buttons, inputs, layout primitives, and the first molecules. Each piece maps to tokens, not one off styles.',
    to: '/components/button',
    eyebrow: 'Components',
    actionLabel: 'Browse components',
    mediaClass: styles.mediaComponents,
  },
] as const;

const foundations = [
  {
    title: 'Color',
    description: 'Semantic palettes for surfaces, text, accents, and feedback that adapt to light and dark themes.',
    to: '/tokens/color',
  },
  {
    title: 'Typography',
    description: 'Mona Sans for UI copy, a monospace stack for code, and a shared type scale from xs to 5xl.',
    to: '/tokens/typography',
  },
  {
    title: 'Spacing',
    description: 'A consistent spacing scale for padding, gaps, and layout rhythm across every component.',
    to: '/tokens/spacing',
  },
  {
    title: 'Radius & shadow',
    description: 'Corner radii and elevation shadows that keep surfaces calm, focused, and cohesive.',
    to: '/tokens/radius-shadow',
  },
] as const;

const steps = [
  {
    step: '01',
    title: 'Install the packages',
    description: 'Add @capper/tokens and @capper/react. Import tokens once at the root of your app.',
  },
  {
    step: '02',
    title: 'Compose with atoms',
    description: 'Stack, Inline, Text, and Button give you layout and actions without inventing new CSS.',
  },
  {
    step: '03',
    title: 'Stay on tokens',
    description: 'When you extend the system, reference semantic variables so themes and density stay aligned.',
  },
] as const;

const components = [
  {
    title: 'Button',
    description: 'Primary actions with variants, sizes, loading, and disabled states built on tokens.',
    to: '/components/button',
  },
  {
    title: 'Text',
    description: 'The typography primitive for headings, body copy, weights, colors, and monospace data.',
    to: '/components/text',
  },
  {
    title: 'Input',
    description: 'Text fields with labels, validation hints, and sizes aligned to the rest of the system.',
    to: '/components/input',
  },
  {
    title: 'Card',
    description: 'The first molecule: a bordered surface for grouping related content and actions.',
    to: '/components/card',
  },
  {
    title: 'Code',
    description: 'InlineCode and CodeBlock for snippets in docs, examples, and product copy.',
    to: '/components/code',
  },
  {
    title: 'Alert',
    description: 'Status messages with semantic colors and a left accent border for quick scanning.',
    to: '/components/alert',
  },
] as const;

function RevealSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <section
      ref={ref}
      className={[styles.reveal, inView ? styles.revealVisible : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </section>
  );
}

export function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Capper
          <span className={styles.heroTitleMuted}> for token first React UI</span>
        </h1>
        <p className={styles.heroSubtitle}>
          A token first React design system on Brad Frost atomic design. Primitives, semantic tokens,
          and components that stay consistent from first commit to product scale.
        </p>
        <div className={styles.heroActions}>
          <Link to="/components/button" className={styles.ctaPrimary}>
            Browse components
            <Icon icon={ArrowRight} size="sm" weight="bold" aria-hidden />
          </Link>
          <Link to="/tokens/color" className={styles.ctaSecondary}>
            View foundations
          </Link>
        </div>
        <p className={styles.proof}>
          <span>Token first</span>
          <span className={styles.proofDot} aria-hidden="true" />
          <span>Atomic design</span>
          <span className={styles.proofDot} aria-hidden="true" />
          <span>Light and dark</span>
        </p>
      </section>

      <TaglineReveal
        lines={['Ship interfaces that stay consistent', 'as your product grows.']}
      />

      <div className={styles.sections}>
        <RevealSection className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Two paths into the system</h2>
            <p className={styles.sectionLede}>
              Start with foundations when you need tokens and themes. Start with components when you
              are ready to ship UI.
            </p>
          </div>
          <div className={styles.pillarGrid}>
            {pillars.map((item) => (
              <FeatureCard
                key={item.to}
                title={item.title}
                description={item.description}
                to={item.to}
                eyebrow={item.eyebrow}
                actionLabel={item.actionLabel}
                size="pillar"
                media={<div className={item.mediaClass} aria-hidden="true" />}
              />
            ))}
          </div>
        </RevealSection>

        <RevealSection className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Shared foundations</h2>
            <p className={styles.sectionLede}>
              The primitives every Capper surface shares. Browse tokens before you customize a single
              component.
            </p>
          </div>
          <div className={styles.grid}>
            {foundations.map((item) => (
              <FeatureCard key={item.to} {...item} />
            ))}
          </div>
        </RevealSection>

        <RevealSection className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How it works</h2>
            <p className={styles.sectionLede}>
              Three steps from install to a screen that already speaks Capper.
            </p>
          </div>
          <ol className={styles.steps}>
            {steps.map((item) => (
              <li key={item.step} className={styles.step}>
                <span className={styles.stepIndex}>{item.step}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDescription}>{item.description}</p>
              </li>
            ))}
          </ol>
        </RevealSection>

        <RevealSection className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Components</h2>
            <p className={styles.sectionLede}>
              Atoms and molecules documented with live previews, props, and usage notes.
            </p>
          </div>
          <div className={styles.grid}>
            {components.map((item) => (
              <FeatureCard key={item.to} {...item} />
            ))}
          </div>
        </RevealSection>

        <RevealSection className={`${styles.section} ${styles.finalCta}`}>
          <div className={styles.finalInner}>
            <div className={styles.finalCopy}>
              <h2 className={styles.sectionTitle}>Start with Capper in your app</h2>
              <p className={styles.sectionLede}>
                Install the packages, import tokens once, and compose with the same atoms this site
                uses.
              </p>
              <div className={styles.heroActions}>
                <Link to="/components/button" className={styles.ctaPrimary}>
                  Get started with Button
                  <Icon icon={ArrowRight} size="sm" weight="bold" aria-hidden />
                </Link>
                <a
                  href="https://github.com/chetanraj/capper"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.ctaSecondary}
                >
                  View on GitHub
                </a>
              </div>
            </div>
            <div className={styles.finalCode}>
              <CodeBlock
                language="bash"
                code="pnpm add @capper/tokens @capper/react @phosphor-icons/react"
              />
            </div>
          </div>
        </RevealSection>
      </div>

      <footer className={styles.footer}>
        <p className={styles.footerCopy}>
          Capper is open source under the MIT license.
        </p>
        <nav className={styles.footerNav} aria-label="Footer">
          <a href="https://github.com/chetanraj/capper" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link to="/tokens/color">Foundations</Link>
          <Link to="/components/button">Components</Link>
        </nav>
      </footer>
    </div>
  );
}
