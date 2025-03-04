import About from './about/about';
import Experience from './experience/experience';
import MainContentLayout from './main-content-layout';
import Mock from './mock/mock';

export default function MainContent() {
  return (
    <MainContentLayout>
      {/* About */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Mock Sections */}
      <Mock />
    </MainContentLayout>
  );
}
