'use client';

import { Icons } from '@/utils/icons';
import Link from 'next/link';
import { useState } from 'react';

export default function GlobalLayoutPopover() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='relative '>
      <Icons.Sidebar onClick={togglePopover} className='sm:hidden' />
      {isOpen && (
        <div className='absolute top-10 right-0 sm:hidden flex flex-col gap-2 border border-gray-300 rounded-lg p-2 dark:bg-gray-800 dark:text-white'>
          <Link href={'/'}>About</Link>
          <Link href={'/'}>Resume</Link>
          <Link href={'/'}>Portfolio</Link>
        </div>
      )}
    </div>
  );
}
