import StickyHeader from '../common/sticky-header';

function Highlight({ children }: { children: string }) {
  return (
    <strong className='text-dark/90 dark:text-light/90'>{children}</strong>
  );
}

export default function About() {
  return (
    <section
      id='about'
      className='relative text-dark/70 dark:text-light/70 flex flex-col space-y-2 lg:scroll-mt-24'
    >
      <StickyHeader label={'about'} />
      <p className='text-lg'>🚀 Who is Harry Park?</p>
      <p>
        I’m a <Highlight>software engineer</Highlight> with{' '}
        <Highlight>practical experience</Highlight> delivering end-to-end
        solutions—from system design to deployment—through both an{' '}
        <Highlight>industry internship</Highlight> and{' '}
        <Highlight>personal projects</Highlight>. I enjoy turning product ideas
        into <Highlight>scalable software</Highlight> using technologies like
        React, Next.js, NestJS, PostgreSQL, and Spring Boot. With a strong
        foundation in computer science and a passion for{' '}
        <Highlight>clean architecture</Highlight>, I thrive in engineering teams
        that value collaboration, performance, and thoughtful design.
      </p>
      <br />
      <p className='text-lg'>🌱 Personal Note</p>
      <p>
        Outside of code, I love designing scalable systems, exploring new
        frameworks, and creating minimal yet functional UIs. I’m also into clean
        architecture, thoughtful engineering—and acrylic painting when I need a
        creative reset.
      </p>
      <br />
      <p className='text-lg'>📚 Education</p>
      <p>The University of Sydney - Bachelor of Computing, Computer Science</p>
    </section>
  );
}
