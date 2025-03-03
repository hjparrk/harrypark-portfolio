import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import GlobalLayout from '@/components/global-layout';

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
  openGraph: {
    title: 'Harry Park SWE',
    description:
      'Hi, this is Harry Park, a software engineer based in Sydney, Australia.',
    images: ['/thumbnail.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
