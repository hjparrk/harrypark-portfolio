import { Icons } from '@/utils/icons';
import Link from 'next/link';
import ThemeToggleBtn from './theme-toggle-btn';
import { cookies } from 'next/headers';
import { ThemeData } from '@/utils/types';

export default async function PersonalSites() {
  const cookieStore = await cookies();
  const theme = (cookieStore.get('theme')?.value ?? 'system') as ThemeData;

  return (
    <ul className='flex space-x-5 items-baseline mt-5'>
      <Link href={'https://github.com/hjparrk'} target='_blank'>
        <Icons.Github className='h-6 w-6' />
      </Link>
      <Link href={'https://linkedin.com/in/harryparrk'} target='_blank'>
        <Icons.LinkedIn className='h-6 w-6' />
      </Link>
      <ThemeToggleBtn initialTheme={theme} />
    </ul>
  );
}
