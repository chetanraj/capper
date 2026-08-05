import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from '../TopBar/TopBar';
import styles from './AppShell.module.css';

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { pathname } = useLocation();
  const isLanding = pathname === '/';

  return (
    <div className={styles.shell}>
      <TopBar />
      {isLanding ? (
        <main className={styles.landing}>{children}</main>
      ) : (
        <div className={styles.body}>
          <Sidebar />
          <main className={styles.content}>{children}</main>
        </div>
      )}
    </div>
  );
}
