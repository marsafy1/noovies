// Next.js types and utilities
import type { Metadata } from 'next';
import localFont from 'next/font/local';

// Styles
import '@/app/styles/globals.scss';

// Component imports
import Navbar from '@/app/components/appbars/Navbar';
import ScrollUp from '@/app/components/utils/ScrollUp';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'noovies',
  description: 'Track your new favourite movies!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <ScrollUp />
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
