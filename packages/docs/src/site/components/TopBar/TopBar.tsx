import { Icon, Monitor, Moon, Sun } from '@capper-ui/react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { type Theme, useTheme } from '../../hooks/useTheme';
import styles from './TopBar.module.css';

const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
];

const navItems = [
  { to: '/', label: 'Overview', end: true, match: (pathname: string) => pathname === '/' },
  {
    to: '/getting-started',
    label: 'Get started',
    end: false,
    match: (pathname: string) => pathname === '/getting-started',
  },
  {
    to: '/tokens/color',
    label: 'Foundations',
    end: false,
    match: (pathname: string) => pathname.startsWith('/tokens'),
  },
  {
    to: '/components/button',
    label: 'Components',
    end: false,
    match: (pathname: string) => pathname.startsWith('/components'),
  },
] as const;

export function TopBar() {
  const [theme, setTheme] = useTheme();
  const location = useLocation();

  return (
    <header className={styles.topbar}>
      <div className={styles.startGroup}>
        <NavLink to="/" className={styles.brand} end>
          <span className={styles.mark} aria-hidden="true" />
          <span className={styles.brandText}>Capper UI</span>
        </NavLink>

        <nav className={styles.nav} aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  styles.navLink,
                  isActive || item.match(location.pathname) ? styles.navLinkActive : '',
                ]
                  .filter(Boolean)
                  .join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className={styles.endGroup}>
        <a
          href="https://github.com/chetanraj/capper"
          target="_blank"
          rel="noreferrer"
          className={styles.ghLink}
        >
          GitHub
        </a>
        {/* biome-ignore lint/a11y/useSemanticElements: fieldset min-width breaks header flex layout */}
        <div className={styles.themeControl} role="group" aria-label="Theme">
          {themeOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className={styles.themeButton}
              aria-label={`${option.label} theme`}
              aria-pressed={theme === option.value}
              title={`${option.label} theme`}
              onClick={() => setTheme(option.value)}
            >
              <Icon icon={option.icon} size="sm" aria-hidden />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
