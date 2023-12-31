import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthContextProvider } from '@/contexts/authContext';
import { WindowDimensionsProvider } from '@/contexts/windowDimensionsContext';
import ToastContainerWrapper from '@/components/common/Toastify';
import WindowDimensionsWrapper from '@/components/common/WindowDimensions';
import { getAllCookies } from '@/utils/getCookies';
import ReCertification from '@/components/common/ReCertification';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Project Citrine App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const cookies = getAllCookies();
    const session_name = String(process.env.SESSION_NAME);
    const session = cookies[session_name];

    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthContextProvider>
                    <ReCertification session={session} />
                    <ToastContainerWrapper />
                    <WindowDimensionsProvider>
                        <WindowDimensionsWrapper>{children}</WindowDimensionsWrapper>
                    </WindowDimensionsProvider>
                </AuthContextProvider>
            </body>
        </html>
    );
}
