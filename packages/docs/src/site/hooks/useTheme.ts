import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

const storageKey = 'capper-ui-theme';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'system';
  const storedTheme = window.localStorage.getItem(storageKey);
  return storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system'
    ? storedTheme
    : 'system';
}

/**
 * Manages the docs site theme by toggling `data-theme` on <html>,
 * the same mechanism Capper UI components use to read semantic tokens.
 *
 * The system option follows OS preference changes as they happen.
 * An explicit preference is persisted between visits.
 */
export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const applyTheme = () => {
      const resolvedTheme = theme === 'system' ? (media.matches ? 'dark' : 'light') : theme;
      document.documentElement.setAttribute('data-theme', resolvedTheme);
      document.documentElement.style.colorScheme = resolvedTheme;
    };

    applyTheme();
    if (theme === 'system') media.addEventListener('change', applyTheme);

    return () => media.removeEventListener('change', applyTheme);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    window.localStorage.setItem(storageKey, next);
    setThemeState(next);
  }, []);

  return [theme, setTheme];
}
