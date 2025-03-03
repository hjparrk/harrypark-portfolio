'use client';

import Link from 'next/link';
import useActiveSection from '@/hooks/use-active-section';
import links from '@/data/links';

export default function Navigation() {
  const activeSection = useActiveSection();

  return (
    <nav className='mt-16 hidden lg:block'>
      <ul className='flex flex-col space-y-2'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center space-x-2 py-2 transition-opacity ${
              activeSection === link.href
                ? 'opacity-100'
                : 'opacity-40 hover:opacity-70'
            } `}
          >
            <span className='text-xs font-bold tracking-widest'>
              {link.label}
            </span>
            {link.icon}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
