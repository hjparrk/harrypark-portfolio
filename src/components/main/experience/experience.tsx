import StickyHeader from '../common/sticky-header';

export default function Experience() {
  return (
    <section id='experience' className='relative lg:scroll-mt-24'>
      <StickyHeader label={'experience'} />
      <ol>
        <li className='mb-12'>
          <div className='grid sm:grid-cols-10'>
            {/* Duration */}
            <div className='col-span-3 opacity-70'>Sep — Dec 2024</div>

            {/* Details */}
            <div className='col-span-7'>
              <h1 className='font-semibold opacity-90'>
                Software Engineer Intern • Link Australia
              </h1>
              <h3 className='mt-0.5 opacity-70'>e-Learning Platform</h3>
              <p className='mt-2 text-sm opacity-80'>
                • Reduced lecture sharing time by 90% by developing an in-house
                e-learning platform, replacing manual link distribution with an
                automated system that efficiently provided students with instant
                access to learning materials.
              </p>
              <p className='mt-2 text-sm opacity-90'>
                • Enhanced accessibility across devices by implementing a fully
                responsive design, ensuring seamless user experience on tablets,
                laptops, and other screen sizes.
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
}
