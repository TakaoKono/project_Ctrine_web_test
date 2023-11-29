import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign Up Completed page',
    description: 'Sign Up Completed page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
