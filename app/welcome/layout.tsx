import styles from './layout.module.scss';

import Link from 'next/link';

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <header>
        <Link href="/welcome">Logotype</Link>
        <nav>
          <ul>
            <li><Link href="#product">Product</Link></li>
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#showcase">Showcase</Link></li>
            <li><Link href="#author">Author</Link></li>
          </ul>
          <ul>
            <li><Link href="/auth/sign-in">Sign In</Link></li>
            <li><Link href="/auth/sign-in">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <h1 className={`${styles.hidden}`}>Welcome Page</h1>
        {children}
      </main>
      <footer>
        <p>Developed by Egor Chumichev.</p>
      </footer>
    </>
  );
}
