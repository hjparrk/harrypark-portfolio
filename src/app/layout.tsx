import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeData } from '@/utils/types';
import GlobalLayout from '@/components/layouts/global-layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Harry Park SWE',
  description:
    'Hi, this is Harry Park, a software engineer based in Sydney, Australia.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = (cookieStore.get('theme')?.value ?? 'light') as ThemeData;

  return (
    <html lang='en' data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GLOBAL LAYOUT */}
        <GlobalLayout theme={theme} />
        {children}
      </body>
    </html>
  );
}
