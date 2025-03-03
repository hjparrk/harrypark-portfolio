import links from '@/data/links';
import { useEffect, useMemo, useState } from 'react';

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('');

  const SECTION_IDS = useMemo(
    () => links.map((link) => link.href.replace('#', '')),
    [links]
  );

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
  }, [SECTION_IDS]);

  return '#' + activeSection;
}
