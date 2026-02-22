export const metadata = {
  title: 'Skills | Denne Joshua Suelan',
  description: 'Explore Denne Joshua\'s technical skills in QA, UI/UX Design, and Network Engineering.',
};

const skillCategories = [
  { title: 'Quality Assurance', icon: '🧪', skills: ['Problem Solving', 'Manual Testing', 'Automated Testing', 'Python/Java Scripting', 'AI/ML Testing', 'Jira/Postman', 'Agile/Scrum'] },
  { title: 'UI/UX Design', icon: '🎨', skills: ['User Research', 'Wireframing', 'Prototyping (Figma)', 'Visual Design', 'Accessibility (WCAG)', 'UX Writing', 'A/B Testing'] },
  { title: 'Network Engineer', icon: '🌐', skills: ['TCP/IP & OSI', 'Routing/Switching', 'Troubleshooting (Wireshark)', 'Network Security', 'Cloud Networking', 'Automation (Python)'] },
];

  

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 dark:text-white text-black">
            My <span className="text-[#10b981]">Skills</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4 dark:text-white text-black">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="dark:text-gray-400 text-gray-600">• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}