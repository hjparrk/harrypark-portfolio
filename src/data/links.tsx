import { Icons } from '@/utils/icons';
import { LinkData } from '@/utils/types';

const links: LinkData[] = [
  { href: '#about', label: 'ABOUT', icon: <Icons.About /> },
  {
    href: '#experience',
    label: 'EXPERIENCE',
    icon: <Icons.Experience />,
  },
  { href: '#projects', label: 'PROJECTS', icon: <Icons.Projects /> },
  { href: '#skills', label: 'SKILLS', icon: <Icons.Skills /> },
];

export default links;
