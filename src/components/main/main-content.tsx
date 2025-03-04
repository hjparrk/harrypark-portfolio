import About from './about/about';
import Experience from './experience/experience';
import MainContentLayout from './main-content-layout';
import Projects from './projects/projects';
import Skills from './skills/skills';

export default function MainContent() {
  return (
    <MainContentLayout>
      {/* About */}
      <About />

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />
    </MainContentLayout>
  );
}
