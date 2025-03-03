'use client';

import { useEffect, useState } from 'react';
import { ThemeData } from '@/utils/types';
import { Icons } from '@/utils/icons';

export default function ThemeToggleBtn({
  initialTheme,
}: {
  initialTheme: ThemeData;
}) {
  const [theme, setTheme] = useState<ThemeData>(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000;`;
  }, [theme]);

  return (
    <div className='flex items-center gap-2 p-1 border border-gray-700 dark:border-gray-300 rounded-full'>
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition ${
          theme === 'light' ? 'bg-gray-400 shadow' : 'hover:bg-gray-300'
        }`}
      >
        <Icons.Sun className='h-3 w-3 text-yellow-500' />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition ${
          theme === 'dark' ? 'bg-gray-300 shadow' : 'hover:bg-gray-400'
        }`}
      >
        <Icons.Moon className='h-3 w-3 text-gray-700' />
      </button>
    </div>
  );
}
