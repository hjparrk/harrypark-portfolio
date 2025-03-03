import Introduction from './upper/introduction';
import Navigation from './upper/navigation';

import Resume from './lower/resume';
import PersonalSites from './lower/personal-sites';

export default async function Header() {
  return (
    <header className='flex flex-col justify-between lg:w-[45%] lg:h-screen lg:py-24 lg:sticky lg:top-0'>
      {/* Upper Section */}
      <section>
        {/* Introduction */}
        <Introduction />

        {/* Navigation */}
        <Navigation />
      </section>

      {/* Lower Section */}
      <section className='mt-8'>
        {/* Resumé */}
        <Resume />

        {/* Personal Websites */}
        <PersonalSites />
      </section>
    </header>
  );
}
