import { ThemeData } from '@/utils/types';
import ThemeToggleBtn from './theme-toggle-btn';
import Link from 'next/link';
import { cookies } from 'next/headers';

export default async function Header() {
  const cookieStore = await cookies();
  const theme = (cookieStore.get('theme')?.value ?? 'light') as ThemeData;

  return (
    <header className='flex flex-col justify-between lg:w-[45%] lg:h-screen lg:py-24 lg:sticky lg:top-0'>
      <section>
        {/* Introduction */}
        <div>
          <div className='relative'>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-tight'>
              Harry Park
            </h1>
            <div className='absolute top-0 right-[1rem] lg:left-0 lg:top-[-3rem] lg:right-auto'>
              <ThemeToggleBtn initialTheme={theme} />
            </div>
          </div>
          <h3 className='mt-3 text-lg font-medium tracking-tight sm:text-xl'>
            Software Engineer
          </h3>
          <p className='mt-4 max-w-xs opacity-70 text-dark dark:text-light tracking-wide leading-normal'>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        {/* Navigation */}
        <nav className='mt-16 hidden lg:block'>
          <ul className='flex flex-col space-y-2'>
            <Link href={'#one'}>
              <span className='text-xs font-bold tracking-widest'>ABOUT</span>
            </Link>
            <Link href={'#two'}>
              <span className='text-xs font-bold tracking-widest'>
                EXPERIENCE
              </span>
            </Link>
            <Link href={'#three'}>
              <span className='text-xs font-bold tracking-widest'>
                PROJECTS
              </span>
            </Link>
          </ul>
        </nav>
      </section>

      {/* Personal Websites */}
      <section>Footer</section>
    </header>
  );
}
