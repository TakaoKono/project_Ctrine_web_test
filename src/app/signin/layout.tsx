import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In page',
    description: 'Sign In page',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <section>{children}</section>;
}
