import {
  BsGithub,
  BsLinkedin,
  BsThreeDots,
  BsSunFill,
  BsPersonWorkspace,
  BsChatSquareTextFill,
  BsCodeSquare,
  BsMortarboardFill,
  BsTvFill,
  BsFillMoonStarsFill,
  BsAlphabet,
  BsArrowUpRight,
  BsBoxArrowUpRight,
} from 'react-icons/bs';

import { DiJava, DiRedis } from 'react-icons/di';

import {
  SiAmazonwebservices,
  SiApachekafka,
  SiDocker,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
} from 'react-icons/si';

export const Icons = {
  Github: BsGithub,
  LinkedIn: BsLinkedin,
  External: BsArrowUpRight,
  GoTo: BsBoxArrowUpRight,
  Sidebar: BsThreeDots,
  System: BsTvFill,
  Sun: BsSunFill,
  Moon: BsFillMoonStarsFill,
  About: BsChatSquareTextFill,
  Experience: BsPersonWorkspace,
  Projects: BsCodeSquare,
  Skills: BsAlphabet,
  Education: BsMortarboardFill,
};

export const DevIcons = {
  Java: DiJava,
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,

  React: SiReact,
  Next: SiNextdotjs,
  Tailwind: SiTailwindcss,

  Spring: SiSpring,
  Nest: SiNestjs,
  Prisma: SiPrisma,
  TypeORM: SiTypeorm,
  PostgreSQL: SiPostgresql,
  Redis: DiRedis,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,

  AWS: SiAmazonwebservices,
  Docker: SiDocker,
};
