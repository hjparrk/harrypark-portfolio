import Link from 'next/link';
import Image from 'next/image';
import ThemeToggleBtn from '../theme-toggle-btn';
import { Icons } from '@/utils/icons';
import { ThemeData } from '@/utils/types';
import GlobalLayoutPopover from './global-layout-popover';

export default function GlobalLayout({ theme }: { theme: ThemeData }) {
  return (
    <nav className='flex items-center justify-between h-12 py-4 px-6 sm:px-10 dark:bg-gray-800 dark:text-white'>
      {/* LOGO */}
      <Link
        href={'/'}
        className='flex items-center gap-2 text-xl font-extrabold'
      >
        <Image src={'/favicon.svg'} width={25} height={25} alt='Icon' />
        <span className='hidden sm:block'>Harry Park</span>
      </Link>

      <div className='flex items-center gap-5'>
        {/* About */}
        <Link href={'/'} className='hidden sm:block'>
          About
        </Link>

        {/* Resume */}
        <Link href={'/'} className='hidden sm:block'>
          Resume
        </Link>

        {/* Portfolio */}
        <Link href={'/'} className='hidden sm:block'>
          Portfolio
        </Link>

        {/* Github */}
        <Link href='https://github.com/hjparrk' target='_blank'>
          <Icons.Github />
        </Link>

        {/* LinkedIn */}
        <Link href='https://linkedin.com/in/harryparrk' target='_blank'>
          <Icons.LinkedIn />
        </Link>

        {/* Theme Toggle */}
        <ThemeToggleBtn initialTheme={theme} />

        {/* Popover */}
        <GlobalLayoutPopover />
      </div>
    </nav>
  );
}
