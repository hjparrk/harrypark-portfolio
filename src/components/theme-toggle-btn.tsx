'use client';

import { useState } from 'react';
import { ThemeData } from '@/utils/types';

export default function ThemeToggleBtn({
  initialTheme,
}: {
  initialTheme: ThemeData;
}) {
  const [theme, setTheme] = useState<ThemeData>(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000;`;
    setTheme(newTheme);
  };

  return (
    <div>
      <button onClick={toggleTheme} className='hover:cursor-pointer'>
        {theme === 'dark' ? '🌙' : '🌞'}
      </button>
    </div>
  );
}
