import styles from './layout.module.scss';

import Link from 'next/link';

export default async function ScreenLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <aside>
        <nav>
          <ul>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/tasks">Tasks</Link></li>
            <li><Link href="/profile">Profile</Link></li>
            <li><Link href="/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main>
        {children}
      </main>
    </>

  );
}
