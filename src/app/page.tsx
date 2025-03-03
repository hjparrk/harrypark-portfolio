import { Fragment } from 'react';

import Header from '@/components/header/header';
import MainContent from '@/components/main/main-content';

export default function Home() {
  return (
    <Fragment>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <MainContent />
    </Fragment>
  );
}
