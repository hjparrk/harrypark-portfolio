import Header from '@/components/header/header';
import MockMain from '@/components/main/mock-main';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className='pt-24 lg:w-[55%] lg:py-24'>
        <MockMain />
      </main>
    </Fragment>
  );
}
