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
      <p>
        I recently completed a{' '}
        <Highlight>
          Bachelor of Computing with a major in Computer Science at the
          University of Sydney
        </Highlight>
        . During my studies, I built a solid foundation in{' '}
        <Highlight>
          algorithms, data structures, and full-stack development
        </Highlight>
        , consistently maintaining a <Highlight>WAM above 80</Highlight> in the
        latter half of my course.
      </p>
      <p>
        I have a keen interest in both{' '}
        <Highlight>front-end and back-end development</Highlight>. I enjoy
        creating intuitive and engaging user interfaces while also designing
        <Highlight>
          scalable and resilient systems that can handle large-scale traffic
        </Highlight>
        efficiently. I&apos;m particularly passionate about system design and
        distributed systems, focusing on solutions that ensure fault tolerance
        and make the most of available resources.
      </p>
      <p>
        Outside of academics, I&apos;m driven by the challenge of solving
        complex engineering problems. I take pride in improving system
        performance and leveraging modern technologies to build practical,
        scalable applications that offer exceptional user experiences.
      </p>
    </section>
  );
}
