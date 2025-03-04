import About from './about/about';
import Experience from './experience/experience';
import MainContentLayout from './main-content-layout';
import Mock from './mock/mock';
import Skills from './skills/skills';

export default function MainContent() {
  return (
    <MainContentLayout>
      {/* About */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Mock Sections */}
      <Mock />

      {/* Skills */}
      <Skills />
    </MainContentLayout>
  );
}
