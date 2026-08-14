import { FlaskConical, Palette, Globe, Code2, Sparkles, Compass } from 'lucide-react';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import SkillBar from './SkillBar';

export const metadata = {
  title: 'Skills | Denne Joshua Suelan',
  description: 'Explore Denne Joshua\'s technical skills in QA, UI/UX Design, Network Engineering, and Development.',
};

// Quick-scan strip of the tools reached for most often, pulled from across
// every category below.
const coreStack = [
  'Manual & Automated Testing', 'Python', 'Figma', 'Wireshark', 'Postman',
  'JavaScript', 'Git/GitHub', 'TCP/IP & OSI',
];

const skillCategories = [
  {
    title: 'Quality Assurance',
    icon: FlaskConical,
    blurb: 'Owning test strategy end to end — exploratory passes, automated regression, and the process/tooling that keeps releases honest.',
    skills: [
      { name: 'Manual Testing', level: 'Advanced', percent: 90 },
      { name: 'Automated Testing', level: 'Advanced', percent: 85 },
      { name: 'Jira / Postman', level: 'Advanced', percent: 85 },
      { name: 'Agile / Scrum', level: 'Advanced', percent: 80 },
      { name: 'Python / Java Scripting', level: 'Proficient', percent: 70 },
      { name: 'AI/ML Testing', level: 'Proficient', percent: 65 },
      { name: 'Problem Solving', level: 'Advanced', percent: 90 },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    blurb: 'Grounding interfaces in real user research before a single pixel gets pushed, then validating the result gets used the way it was designed.',
    skills: [
      { name: 'Prototyping (Figma)', level: 'Advanced', percent: 85 },
      { name: 'Wireframing', level: 'Advanced', percent: 80 },
      { name: 'User Research', level: 'Proficient', percent: 70 },
      { name: 'Visual Design', level: 'Proficient', percent: 70 },
      { name: 'Accessibility (WCAG)', level: 'Proficient', percent: 65 },
      { name: 'UX Writing', level: 'Proficient', percent: 60 },
      { name: 'A/B Testing', level: 'Familiar', percent: 55 },
    ],
  },
  {
    title: 'Network Engineer',
    icon: Globe,
    blurb: 'Day-to-day work keeping nationwide connectivity projects online — from field deployment to NOC monitoring and incident response.',
    skills: [
      { name: 'TCP/IP & OSI', level: 'Advanced', percent: 90 },
      { name: 'Routing / Switching', level: 'Advanced', percent: 85 },
      { name: 'Troubleshooting (Wireshark)', level: 'Advanced', percent: 85 },
      { name: 'Network Security', level: 'Advanced', percent: 80 },
      { name: 'Cloud Networking', level: 'Proficient', percent: 65 },
      { name: 'Automation (Python)', level: 'Proficient', percent: 60 },
    ],
  },
  {
    title: 'Programming & Development',
    icon: Code2,
    blurb: 'The foundation underneath the rest — enough front-end and scripting fluency to build tools, prototypes, and this site itself.',
    skills: [
      { name: 'HTML & CSS', level: 'Proficient', percent: 75 },
      { name: 'JavaScript', level: 'Proficient', percent: 70 },
      { name: 'Python', level: 'Proficient', percent: 70 },
      { name: 'Git / GitHub', level: 'Proficient', percent: 70 },
      { name: 'Visual Studio Code', level: 'Advanced', percent: 85 },
    ],
  },
];

const currentlySharpening = [
  'AI-assisted test automation',
  'Cloud networking (AWS/Azure)',
  'Advanced React & Next.js',
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-10">
          <p className="eyebrow text-[#10b981] justify-center mb-4">Toolset</p>
          <h1 className="text-display mb-6 dark:text-white text-black" style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}>
            My <span className="text-[#10b981]">Skills</span>
          </h1>
          <p className="text-xl dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            A working set built across QA, UI/UX, network engineering, and development —
            sharpened on real projects, not just tutorials.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            {coreStack.map((item) => (
              <span
                key={item}
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 border-2 border-black dark:border-white dark:text-gray-200 text-gray-800 hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.08}>
              <TiltCard className="group h-full p-8 border-2 border-black dark:border-white bg-white dark:bg-gray-800 hover:border-[#10b981] transition-all duration-300 brutal-shadow">
                <span className="index-number block mb-2">{String(index + 1).padStart(2, '0')}</span>
                <div className="inline-flex items-center justify-center w-14 h-14 mb-4 border-2 border-black dark:border-white bg-[#10b981]/10 text-[#10b981] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white transition-all duration-300">
                  <category.icon className="w-7 h-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white text-black">{category.title}</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600 mb-6 leading-relaxed">{category.blurb}</p>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      percent={skill.percent}
                      delay={skillIndex * 0.05}
                    />
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <Reveal>
            <TiltCard className="h-full p-8 border-2 border-black dark:border-white bg-white dark:bg-gray-800 brutal-shadow">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 dark:text-white text-black">
                <Sparkles className="w-6 h-6 text-[#10b981]" strokeWidth={1.75} /> Currently Sharpening
              </h2>
              <ul className="space-y-2">
                {currentlySharpening.map((item) => (
                  <li key={item} className="flex gap-2 dark:text-gray-300 text-gray-600">
                    <span className="text-[#10b981] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.06}>
            <TiltCard className="h-full p-8 border-2 border-black dark:border-white bg-white dark:bg-gray-800 brutal-shadow">
              <h2 className="flex items-center gap-2 text-2xl font-bold mb-4 dark:text-white text-black">
                <Compass className="w-6 h-6 text-[#10b981]" strokeWidth={1.75} /> How I Work
              </h2>
              <p className="dark:text-gray-300 text-gray-600 leading-relaxed">
                Testing, design, and networking aren&apos;t separate disciplines to me —
                a QA mindset catches what a network deployment might miss, and UX instincts
                shape how I write bug reports and documentation people actually read.
              </p>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
