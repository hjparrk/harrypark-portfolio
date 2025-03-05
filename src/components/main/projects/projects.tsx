import { Icons } from '@/utils/icons';
import { ProjectData } from '@/utils/types';
import Link from 'next/link';
import { Fragment, ReactNode } from 'react';
import StickyHeader from '../common/sticky-header';

const projects: ProjectData[] = [
  {
    title: 'Coupon Issuance System',
    description:
      'Promotion Service is a coupon issuance service designed with a microservices architecture (MSA) approach. This project was initiated to gain hands-on experience by directly applying key technologies and to build a scalable and distributed system capable of handling high traffic loads.',
    details: [
      'Users can request coupons, and the system ensures secure and efficient coupon issuance using Kafka-based asynchronous event processing, Redis caching, and distributed locking mechanisms.',
      'Additionally, unit testing was implemented using JUnit and Mockito, and performance testing was conducted using JMeter for evaluating the coupon issuance API.',
    ],
    skills: ['Spring Boot', 'JPA', 'Kafka', 'Redis', 'Resilience4j', 'JMeter'],
    link: 'https://github.com/hjparrk/promotion-spring-boot',
  },
  {
    title: 'Delivery Service System',
    description:
      'This project is a Spring Boot-based delivery service that includes RabbitMQ for order processing and SSE (Server-Sent Events) for real-time notifications. Users can place orders, and administrators can monitor order statuses in real-time.',
    skills: ['Spring Boot', 'JPA', 'RabbitMQ', 'SSE'],
    link: 'https://github.com/hjparrk/delivery-spring-boot',
  },
  {
    title: 'RenoPilot Web Platform (Capstone Project)',
    description:
      'Developed a web platform for renovation resources using Node.js, Express, and Prisma, ensuring secure and efficient data handling.',
    details: [
      'Optimised code through refactoring, increasing reusability and reducing total source code length by 30%, while improving maintainability and testability.',
      'Implemented a CI/CD pipeline in Bitbucket with automated testing, achieving 80%+ test coverage using Jest for early bug detection and system reliability.',
    ],
    skills: ['JavaScript', 'ReactJs', 'Node.js', 'Express', 'Prisma', 'Jest'],
  },
];

function ProjectCardWrapper({
  link,
  children,
}: {
  link?: string;
  children: ReactNode;
}) {
  return link ? (
    <Link href={link} target='_blank'>
      {children}
    </Link>
  ) : (
    <Fragment>{children}</Fragment>
  );
}

function ProjectCard({ project }: { project: ProjectData }) {
  const { title, description, details, skills, link } = project;

  return (
    <ProjectCardWrapper link={link}>
      <div className='relative rounded-lg group transition-all duration-200 mb-14'>
        {/* Glow Effect (border) */}
        <div
          className='absolute inset-[-1rem] z-10 rounded-lg opacity-0 duration-200 
                    group-hover:opacity-100 group-hover:ring-1
                  group-hover:ring-indigo-400/70
                    group-hover:shadow-[0_0_15px_5px_rgba(120,120,255,0.7)]
                  dark:group-hover:ring-teal-400/70
                    dark:group-hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.7)]'
        />

        {/* Content */}
        <div className='relative bg-light dark:bg-dark rounded-xl'>
          {link && (
            <Icons.GoTo className='hidden lg:group-hover:block absolute top-1 right-1' />
          )}

          <h1 className='flex space-x-2 items-center text-lg font-bold opacity-90'>
            <span>{title}</span>
            {link && <Icons.Github className='h-4 w-4' />}
            {link && <Icons.GoTo className='lg:hidden' />}
          </h1>
          <h3 className='mt-2 opacity-80'>{description}</h3>
          <div className='mt-3 text-sm opacity-80'>
            {details?.map((detail, index) => (
              <p key={`project-detail-${index}`} className='mt-3'>
                • {detail}
              </p>
            ))}
          </div>
          <div className='mt-4 flex flex-wrap gap-2 text-sm'>
            {skills.map((skill, index) => (
              <h3
                key={`project-skill-${index}`}
                className='py-0.5 px-1.5 border border-dark/50 dark:border-light/50 rounded-xl'
              >
                {skill}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </ProjectCardWrapper>
  );
}

export default function Projects() {
  return (
    <section id='projects' className='relative lg:scroll-mt-24'>
      <StickyHeader label={'projects'} />
      {projects.map((project, index) => (
        <ProjectCard key={`projects-${index}`} project={project} />
      ))}
    </section>
  );
}
