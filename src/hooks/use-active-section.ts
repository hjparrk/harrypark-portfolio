import { links } from '@/components/header/header-data';
import { useEffect, useState } from 'react';

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');
  const SECTION_IDS = links.map((link) => link.href.replace('#', ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      {
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return '#' + activeSection;
}
