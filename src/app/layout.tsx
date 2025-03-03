import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeData } from '@/utils/types';

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
  const cookieStore = await cookies();
  const theme = (cookieStore.get('theme')?.value ?? 'light') as ThemeData;

  return (
    <html lang='en' data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='bg-light text-dark selection:text-light selection:bg-highlight dark:bg-dark dark:text-light dark:selection:bg-highlight leading-relaxed antialiased'>
          <div className='min-h-screen max-w-7xl'>
            <div className='px-6 py-12 md:px-12 md:py-16 lg:py-0'>
              <div className='relative flex flex-col gap-2 lg:flex-row'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
