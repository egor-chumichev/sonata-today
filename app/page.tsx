import styles from './page.module.scss';

import { permanentRedirect } from 'next/navigation';

export default function RootPage() {
  permanentRedirect('/welcome');
}
