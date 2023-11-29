import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign Up Confilm page',
    description: 'Sign Up Confilm page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
