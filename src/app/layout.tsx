import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/styles/globals.scss';
import Navbar from '@/app/components/appbars/Navbar';

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
        <div className="content">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
