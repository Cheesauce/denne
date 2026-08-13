import ProjectsList from './ProjectsList';

export const metadata = {
  title: 'Projects | Denne Joshua Suelan',
  description: 'View Denne Joshua\'s projects in QA, UI/UX Design, and Network Engineering.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 dark:text-white text-black">
            My <span className="text-[#10b981]">Projects</span>
          </h1>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in Quality Assurance,
            UI/UX Design, and Network Engineering.
          </p>
        </div>

        <ProjectsList />
      </div>
    </main>
  );
}
