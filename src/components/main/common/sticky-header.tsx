export default function StickyHeader({ label }: { label: string }) {
  return (
    <header className='block lg:hidden py-5 sticky top-0 left-0 z-1 bg-light dark:bg-dark'>
      <h1 className='uppercase text-dark/100 dark:text-light/100 font-bold text-sm'>
        {label}
      </h1>
    </header>
  );
}
