import Link from 'next/link';

export default function Introduction() {
  return (
    <div>
      <div className='relative'>
        <Link
          href={'/'}
          className='text-4xl sm:text-5xl font-bold tracking-tight'
        >
          Harry Park
        </Link>
      </div>
      <h3 className='mt-3 text-lg font-medium tracking-tight sm:text-xl'>
        Software Engineer
      </h3>
      <p className='mt-4 max-w-xs opacity-70 text-dark dark:text-light tracking-wide leading-normal animate-typing'>
        I build scalable and secure back-end server and responsive front-end web
        application.
      </p>
    </div>
  );
}
