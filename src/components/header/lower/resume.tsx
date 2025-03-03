import { Icons } from '@/utils/icons';
import Link from 'next/link';

export default function Resume() {
  return (
    <Link
      href={'harry_park_resume.pdf'}
      target='_blank'
      className='flex items-baseline space-x-1 w-fit border-b border-light hover:border-dark dark:border-dark dark:hover:border-light'
    >
      <span>Resumé</span>
      <Icons.External className='h-3 w-3' />
    </Link>
  );
}
