import { FlaskConical, Palette, Globe, Code2 } from 'lucide-react';
import Reveal from '../components/Reveal';

export const metadata = {
  title: 'Skills | Denne Joshua Suelan',
  description: 'Explore Denne Joshua\'s technical skills in QA, UI/UX Design, Network Engineering, and Development.',
};

const skillCategories = [
  { title: 'Quality Assurance', icon: FlaskConical, skills: ['Problem Solving', 'Manual Testing', 'Automated Testing', 'Python/Java Scripting', 'AI/ML Testing', 'Jira/Postman', 'Agile/Scrum'] },
  { title: 'UI/UX Design', icon: Palette, skills: ['User Research', 'Wireframing', 'Prototyping (Figma)', 'Visual Design', 'Accessibility (WCAG)', 'UX Writing', 'A/B Testing'] },
  { title: 'Network Engineer', icon: Globe, skills: ['TCP/IP & OSI', 'Routing/Switching', 'Troubleshooting (Wireshark)', 'Network Security', 'Cloud Networking', 'Automation (Python)'] },
  { title: 'Programming & Development', icon: Code2, skills: ['HTML & CSS', 'JavaScript', 'Python', 'Git/GitHub', 'Visual Studio Code'] },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="eyebrow text-[#10b981] justify-center mb-4">Toolset</p>
          <h1 className="text-display mb-6 dark:text-white text-black" style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}>
            My <span className="text-[#10b981]">Skills</span>
          </h1>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.08}>
              <div className="group h-full p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#10b981] hover:-translate-y-1 transition-all duration-300">
                <span className="index-number block mb-2">{String(index + 1).padStart(2, '0')}</span>
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-2xl bg-[#10b981]/10 text-[#10b981] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white transition-all duration-300">
                  <category.icon className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white text-black">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="dark:text-gray-400 text-gray-600">• {skill}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
