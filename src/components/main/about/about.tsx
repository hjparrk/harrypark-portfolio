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
        I recently graduated with a{' '}
        <Highlight>Bachelor of Computing (Computer Science major)</Highlight>{' '}
        from <Highlight>The University of Sydney</Highlight>, where I developed
        a strong foundation in{' '}
        <Highlight>
          algorithms, data structures and full-stack development
        </Highlight>
        . In my final three semesters, I maintained a{' '}
        <Highlight>WAM above 80</Highlight>, demonstrating consistent academic
        excellence.
      </p>
      <p>
        I have a keen interest in system design, particularly in{' '}
        <Highlight>
          building scalable, high-performance, and resilient architectures
        </Highlight>
        . My passion lies in developing distributed systems that efficiently
        handle large-scale traffic, ensuring fault tolerance and optimized
        resource utilization.
      </p>
      <p>
        Beyond academics, I thrive on solving complex engineering challenges,
        continuously improving system efficiency, and leveraging the latest
        technologies to build robust and scalable applications.
      </p>
    </section>
  );
}
