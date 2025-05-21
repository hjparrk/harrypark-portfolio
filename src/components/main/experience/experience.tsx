import { ExperienceData } from '@/utils/types';
import StickyHeader from '../common/sticky-header';

const experiences: ExperienceData[] = [
  {
    duration: 'Sep 2024 — Jan 2025',
    title: 'Software Engineer Intern',
    team: 'Link Australia Intl. Student Service Centre • Remote',
    contributions: [
      'Built a Learning Management System (LMS) that automated course curriculum management, mock exams, access control, and student progress tracking, streamlining weekly staff workload by over 75%.',
      'Developed the platform with React/Typescript (frontend) and NestJS/PostgreSQL (backend), improving development speed and preventing type mismatches.',
      'Communicated project scope, cost, and technical decisions to a non-technical PM using wireframes and user stories; iterated based on feedback through meetings on a regular basis.',
      'Designed the system architecture and implemented jwt-based auth; evaluated and selected a cost-efficient video delivery solution with domain protection for secure, scalable, and stable content delivery.',
    ],
    skills: [
      'Full-Stack Development',
      'Stakeholder Collaboration',
      'System Design',
    ],
  },
  {
    duration: 'Mar 2021 — Dec 2022',
    title: 'IT & Administrative Assistant',
    team: 'Yongsan District Office, Seoul • Conscription Service (full-time)',
    contributions: [
      'Contributed to a 10-person vehicle registration team assisting residents, foreign nationals, and US military personnel in a high-volume district office.',
      'Tracked quarantine compliance for 200+ inbound residents using a government-issued COVID monitoring app; ensured 98.5% compliance by resolving all breaches within hours.',
      'Provided Korean-English interpretation and translation during vehicle registration, improving accessibility and reducing delays for non-Korean speakers.',
    ],
    skills: ['Operations Management', 'Communication'],
  },
  {
    duration: 'Jul 2020 — Dec 2020',
    title: 'Programming & Coding Tutor',
    team: 'Self-Employed',
    contributions: [
      'Guided college students in mastering Python, Java, and core programming concepts such as logic and problem solving, resulting in all students earning an A or A+ in their programming units.',
    ],
    skills: ['Mentorship'],
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
          <h1 className='font-semibold opacity-90 text-lg'>{title}</h1>
          <h3 className='mt-0.5 opacity-70'>{team}</h3>
          {contributions.map((contribution, index) => (
            <p
              key={`experience-contribution-${index}`}
              className='mt-3 text-sm opacity-80'
            >
              • {contribution}
            </p>
          ))}
          <div className='mt-4 flex flex-wrap gap-2 text-sm'>
            {skills.map((skill, index) => (
              <h3
                key={`experience-skill-${index}`}
                className='py-0.5 px-1.5 border border-dark/50 dark:border-light/50 rounded-xl'
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
