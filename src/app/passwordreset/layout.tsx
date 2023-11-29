import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Password Reset page',
    description: 'Password Reset page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <section className={styles.wrapper}>{children}</section>;
}
