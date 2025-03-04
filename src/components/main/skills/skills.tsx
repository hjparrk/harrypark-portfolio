import { DevIcons } from '@/utils/icons';
import StickyHeader from '../common/sticky-header';

export default function Skills() {
  return (
    <section id='skills' className='mb-2 lg:mb-6 lg:scroll-mt-24'>
      <StickyHeader label={'skills'} />
      <ol>
        <li className='flex flex-col mb-12'>
          <h1 className='text-lg font-bold opacity-70'>Languages</h1>
          <div className='mt-6 flex space-x-4 lg:space-x-8'>
            <DevIcons.Java className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.Python className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.JavaScript className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.TypeScript className='h-8 w-8 lg:h-10 lg:w-10' />
          </div>
        </li>

        <li className='flex flex-col mb-12'>
          <h1 className='text-lg font-bold opacity-70'>Front End</h1>
          <div className='mt-6 flex space-x-4 lg:space-x-8'>
            <DevIcons.React className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.Next className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.Tailwind className='h-8 w-8 lg:h-10 lg:w-10' />
          </div>
        </li>
        <li className='flex flex-col mb-12'>
          <h1 className='text-lg font-bold opacity-70'>Back End</h1>
          <div className='mt-6 flex flex-wrap gap-4 lg:gap-8'>
            <DevIcons.Spring className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.Nest className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.Prisma className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.PostgreSQL className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.Redis className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.Kafka className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.RabbitMQ className='h-8 w-8 lg:h-10 lg:w-10' />
          </div>
        </li>
        <li className='flex flex-col mb-12'>
          <h1 className='text-lg font-bold opacity-70'>Infrastructure</h1>
          <div className='mt-6 flex space-x-4 lg:space-x-8'>
            <DevIcons.AWS className='h-8 w-8 lg:h-10 lg:w-10' />
            <DevIcons.Docker className='h-8 w-8 lg:h-10 lg:w-10' />
          </div>
        </li>
      </ol>
    </section>
  );
}
