import { useEffect, useRef, useState } from 'react';
import styles from './TaglineReveal.module.css';

type TaglineRevealProps = {
  lines: string[];
};

/**
 * Large tagline where each word shifts from muted to full color
 * as it crosses a viewport trigger line (reading order).
 */
export function TaglineReveal({ lines }: TaglineRevealProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeCount, setActiveCount] = useState(0);
  const words = lines.flatMap((line, lineIndex) => {
    const parts = line.split(/\s+/).filter(Boolean);
    return parts.map((word, wordIndex) => ({
      word,
      key: `${lineIndex}-${wordIndex}-${word}`,
      lineBreakAfter: wordIndex === parts.length - 1 && lineIndex < lines.length - 1,
    }));
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === 'undefined') {
      setActiveCount(words.length);
      return;
    }

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setActiveCount(words.length);
      return;
    }

    const wordNodes = Array.from(section.querySelectorAll<HTMLElement>('[data-word]'));
    if (wordNodes.length === 0) return;

    let nextIndex = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = Number((entry.target as HTMLElement).dataset.wordIndex);
          if (Number.isNaN(index)) continue;
          nextIndex = Math.max(nextIndex, index + 1);
          setActiveCount(nextIndex);
          observer.unobserve(entry.target);
        }
      },
      {
        // Trigger when the word crosses the middle band of the viewport.
        root: null,
        rootMargin: '-40% 0px -40% 0px',
        threshold: 0,
      },
    );

    for (const node of wordNodes) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, [words.length]);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Capper UI promise">
      <p className={styles.tagline}>
        {words.map((item, index) => (
          <span key={item.key}>
            <span
              data-word
              data-word-index={index}
              className={[styles.word, index < activeCount ? styles.wordActive : '']
                .filter(Boolean)
                .join(' ')}
            >
              {item.word}
            </span>
            {item.lineBreakAfter ? <br /> : ' '}
          </span>
        ))}
      </p>
    </section>
  );
}
