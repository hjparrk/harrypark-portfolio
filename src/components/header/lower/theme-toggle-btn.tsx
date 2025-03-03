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
    <div className='flex items-center gap-2 p-0.5 border border-gray-700 dark:border-gray-300 rounded-full'>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition ${
          theme === 'system'
            ? 'text-gray-300 bg-gray-700 shadow'
            : 'hover:bg-gray-300 hover:text-gray-700'
        }`}
      >
        <Icons.System className='h-3 w-3' />
      </button>
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition ${
          theme === 'light'
            ? 'text-gray-300 bg-gray-700 shadow'
            : 'hover:bg-gray-300 hover:text-gray-700'
        }`}
      >
        <Icons.Sun className='h-3 w-3' />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition ${
          theme === 'dark'
            ? 'text-gray-700 bg-gray-300 shadow'
            : 'hover:bg-gray-700 hover:text-gray-300'
        }`}
      >
        <Icons.Moon className='h-3 w-3' />
      </button>
    </div>
  );
}
