import { ReactNode } from 'react';

export type ThemeData = 'system' | 'light' | 'dark';

export type LinkData = {
  href: string;
  label: string;
  icon: ReactNode;
};

export type ExperienceData = {
  duration: string;
  title: string;
  team?: string;
  contributions: string[];
  skills: string[];
};
