import { useEffect, useRef, useState, type RefObject } from 'react';

type UseInViewOptions = {
  /** Fraction of the element that must be visible (0–1). */
  threshold?: number;
  /** Root margin, e.g. "0px 0px -10% 0px" to trigger earlier/later. */
  rootMargin?: string;
  /** When true, unobserve after the first intersection. */
  once?: boolean;
};

/**
 * Observe an element and report when it enters the viewport.
 * Prefer this over scroll listeners for reveal choreography.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {},
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = '0px 0px -8% 0px', once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setInView(true);
        if (once) observer.unobserve(node);
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
