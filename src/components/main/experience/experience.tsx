import { ExperienceData } from '@/utils/types';
import StickyHeader from '../common/sticky-header';

const experiences: ExperienceData[] = [
  {
    duration: 'Sep — Dec 2024',
    title: 'Software Engineer Intern • Link Australia',
    team: 'e-Learning Platform',
    contributions: [
      'Reduced lecture sharing time by 90% by developing an in-house e-learning platform, replacing manual link distribution with an automated system that efficiently provided students with instant access to learning materials.',
      'Enhanced accessibility across devices by implementing a fully responsive design, ensuring seamless user experience on tablets, laptops, and other screen sizes.',
    ],
    skills: [
      'NestJs',
      'ReactJs',
      'TypeScript',
      'Tailwind CSS',
      'TypeOrm',
      'PostgreSQL',
      'Stripe',
    ],
  },
];

function ExperienceCard({ experience }: { experience: ExperienceData }) {
  const { duration, title, team, contributions, skills } = experience;

  return (
    <li className='mb-12'>
      <div className='grid sm:grid-cols-10'>
        {/* Duration */}
        <div className='col-span-3 opacity-70'>{duration}</div>

        {/* Details */}
        <div className='col-span-7'>
          <h1 className='font-semibold opacity-90'>{title}</h1>
          <h3 className='mt-0.5 opacity-70'>{team}</h3>
          {contributions.map((contribution, index) => (
            <p
              key={`experience-contribution-${index}`}
              className='mt-2 text-sm opacity-80'
            >
              • {contribution}
            </p>
          ))}
          <div className='mt-4 flex flex-wrap gap-2 text-sm'>
            {skills.map((skill, index) => (
              <h3
                key={`experience-skill-${index}`}
                className='py-0.5 px-1 border border-light/50 dark:border-dark/50 rounded-xl'
              >
                {skill}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <section id='experience' className='relative lg:scroll-mt-24'>
      <StickyHeader label={'experience'} />
      <ol>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </ol>
    </section>
  );
}
