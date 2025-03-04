import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import GlobalLayout from '@/components/common/global-layout';
// import { cookies } from 'next/headers';
// import { ThemeData } from '@/utils/types';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookieStore = await cookies();
  // const theme = (cookieStore.get('theme')?.value ?? 'dark') as ThemeData;

  return (
    <html lang='en' data-theme={'dark'} className='bg-light dark:bg-dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
