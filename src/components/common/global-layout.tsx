import { ReactNode } from 'react';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-light text-dark selection:text-light selection:bg-highlight dark:bg-dark dark:text-light dark:selection:bg-highlight leading-relaxed antialiased'>
      <div className='mx-auto min-h-screen max-w-7xl'>
        <div className='px-6 py-12 md:px-12 md:py-16 lg:py-0'>
          <div className='relative flex flex-col gap-2 lg:flex-row'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
