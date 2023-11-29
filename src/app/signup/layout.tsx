import styles from './page.module.css';
import type { Metadata } from 'next';

import { SignupContextProvider } from '@/contexts/signupContext';

export const metadata: Metadata = {
    title: 'Sign Up page',
    description: 'Sign Up page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <SignupContextProvider>
            <section className={styles.wrapper}>{children}</section>
        </SignupContextProvider>
    );
}
