import { Text } from '@capper-ui/react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

type NavItem = { to: string; label: string };
type NavGroup = { heading: string; items: NavItem[] };

const groups: NavGroup[] = [
  {
    heading: 'Get started',
    items: [
      { to: '/', label: 'Overview' },
      { to: '/getting-started', label: 'Getting started' },
    ],
  },
  {
    heading: 'Foundations',
    items: [
      { to: '/tokens/color', label: 'Color' },
      { to: '/tokens/spacing', label: 'Spacing' },
      { to: '/tokens/typography', label: 'Typography' },
      { to: '/tokens/radius-shadow', label: 'Radius & shadow' },
    ],
  },
  {
    heading: 'Atoms',
    items: [
      { to: '/components/box', label: 'Box' },
      { to: '/components/text', label: 'Text' },
      { to: '/components/code', label: 'Code' },
      { to: '/components/button', label: 'Button' },
      { to: '/components/input', label: 'Input' },
      { to: '/components/link', label: 'Link' },
      { to: '/components/badge', label: 'Badge' },
      { to: '/components/alert', label: 'Alert' },
      { to: '/components/icon', label: 'Icon' },
      { to: '/components/stack', label: 'Stack' },
      { to: '/components/inline', label: 'Inline' },
    ],
  },
  {
    heading: 'Molecules',
    items: [{ to: '/components/card', label: 'Card' }],
  },
];

export function Sidebar() {
  return (
    <nav className={styles.sidebar} aria-label="Documentation">
      {groups.map((group) => (
        <div key={group.heading} className={styles.group}>
          <Text as="div" size="xs" weight="semibold" color="subtle" className={styles.heading}>
            {group.heading.toUpperCase()}
          </Text>
          <ul className={styles.list}>
            {group.items.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
