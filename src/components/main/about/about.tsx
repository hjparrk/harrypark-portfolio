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
        I recently completed a Bachelor of Computing with a major in Computer
        Science at the University of Sydney. During my studies, I built a solid
        foundation in algorithms, data structures, and full-stack development,
        consistently maintaining a WAM above 80 in the latter half of my course.
      </p>
      <p>
        I have a keen interest in both front-end and back-end development. I
        enjoy creating intuitive and engaging user interfaces while also
        designing scalable and resilient systems that can handle large-scale
        traffic efficiently. I'm particularly passionate about system design and
        distributed systems, focusing on solutions that ensure fault tolerance
        and make the most of available resources.
      </p>
      <p>
        Outside of academics, I’m driven by the challenge of solving complex
        engineering problems. I take pride in improving system performance and
        leveraging modern technologies to build practical, scalable applications
        that offer exceptional user experiences.
      </p>
    </section>
  );
}
