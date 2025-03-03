import About from './about/about';
import MainContentLayout from './main-content-layout';
import Mock from './mock/mock';

export default function MainContent() {
  return (
    <MainContentLayout>
      {/* About */}
      <About />

      {/* Mock Sections */}
      <Mock />
    </MainContentLayout>
  );
}
