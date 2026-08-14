import ProjectsList from './ProjectsList';
import Reveal from '../components/Reveal';

export const metadata = {
  title: 'Projects | Denne Joshua Suelan',
  description: 'View Denne Joshua\'s projects in QA, UI/UX Design, and Network Engineering.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="eyebrow text-[#10b981] justify-center mb-4">Selected Work</p>
          <h1 className="text-display mb-6 dark:text-white text-black" style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}>
            My <span className="text-[#10b981]">Projects</span>
          </h1>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in Quality Assurance,
            UI/UX Design, and Network Engineering.
          </p>
        </Reveal>

        <ProjectsList />
      </div>
    </main>
  );
}
