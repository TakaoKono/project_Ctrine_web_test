import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Email Change page',
    description: 'Email Change page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <section className={styles.wrapper}>{children}</section>;
}
