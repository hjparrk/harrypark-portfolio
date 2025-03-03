import { ThemeData } from '@/utils/types';
import ThemeToggleBtn from './theme-toggle-btn';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { Icons } from '@/utils/icons';
import Navigation from './navigation';

export default async function Header() {
  const cookieStore = await cookies();
  const theme = (cookieStore.get('theme')?.value ?? 'system') as ThemeData;

  return (
    <header className='flex flex-col justify-between lg:w-[45%] lg:h-screen lg:py-24 lg:sticky lg:top-0'>
      <section>
        {/* Introduction */}
        <div>
          <div className='relative'>
            <Link
              href={'/'}
              className='text-4xl sm:text-5xl font-bold tracking-tight'
            >
              Harry Park
            </Link>
          </div>
          <h3 className='mt-3 text-lg font-medium tracking-tight sm:text-xl'>
            Software Engineer
          </h3>
          <p className='mt-4 max-w-xs opacity-70 text-dark dark:text-light tracking-wide leading-normal animate-typing'>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        {/* Navigation */}
        <Navigation />
      </section>

      {/* Personal Websites */}
      <section className='mt-8'>
        <Link
          href={'./harry_park_resume.pdf'}
          target='_blank'
          className='flex items-baseline space-x-1 w-fit border-b border-light hover:border-dark dark:border-dark dark:hover:border-light'
        >
          <span>Resumé</span>
          <Icons.External className='h-3 w-3' />
        </Link>
        <ul className='flex space-x-5 items-baseline mt-5'>
          <Link href={'https://github.com/hjparrk'} target='_blank'>
            <Icons.Github className='h-6 w-6' />
          </Link>
          <Link href={'https://linkedin.com/in/harryparrk'} target='_blank'>
            <Icons.LinkedIn className='h-6 w-6' />
          </Link>
          <ThemeToggleBtn initialTheme={theme} />
        </ul>
      </section>
    </header>
  );
}
