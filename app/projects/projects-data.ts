import { ShoppingCart, Landmark, HeartPulse, Satellite, Bot, Plane, ShieldCheck, Link2, Car, type LucideIcon } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: LucideIcon;
  color: string;
  url?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform Testing',
    category: 'Quality Assurance',
    description: 'Comprehensive test automation and manual testing for a large-scale e-commerce platform, reducing production defects by 40%.',
    technologies: ['Selenium', 'JIRA', 'Postman', 'Jenkins'],
    icon: ShoppingCart,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Banking App Quality Assurance',
    category: 'Quality Assurance',
    description: 'Led security and performance testing for a mobile banking application, ensuring compliance with financial regulations.',
    technologies: ['JMeter', 'OWASP', 'JIRA', 'Appium'],
    icon: Landmark,
    color: 'bg-green-500',
  },
  {
    id: 3,
    title: 'Healthcare Portal Redesign',
    category: 'UI/UX Design',
    description: 'Designed an intuitive patient portal interface, improving user satisfaction scores by 60% through user research and prototyping.',
    technologies: ['Figma', 'Adobe Photoshop', 'Wireframing', 'User Research'],
    icon: HeartPulse,
    color: 'bg-purple-500',
  },
  {
    id: 4,
    title: 'Nationwide Satellite & Public Wi-Fi Connectivity',
    category: 'Network Engineering',
    description: 'Supported the planning, field deployment, and maintenance of DICT nationwide connectivity programs — including Low Earth Orbit satellite internet (PIALEOS) for underserved barangays, schools, and health facilities, plus public Wi-Fi rollouts (WITS, PICS-PP/PICS-MUN, PROVINET) across multiple regions.',
    technologies: ['LEO Satellite (VSAT)', 'Wireless Networking', 'Field Deployment', 'NOC Monitoring'],
    icon: Satellite,
    color: 'bg-orange-500',
  },
  {
    id: 5,
    title: 'QA Automation Framework',
    category: 'Quality Assurance',
    description: 'Built a scalable test automation framework using Selenium and Python, reducing testing time by 70%.',
    technologies: ['Python', 'Selenium', 'Pytest', 'CI/CD'],
    icon: Bot,
    color: 'bg-teal-500',
  },
  {
    id: 6,
    title: 'Travel App UI Design',
    category: 'UI/UX Design',
    description: 'Created a modern, user-friendly mobile app design for a travel booking platform with interactive prototypes.',
    technologies: ['Figma', 'Prototyping', 'UI Design', 'User Testing'],
    icon: Plane,
    color: 'bg-pink-500',
  },
  {
    id: 7,
    title: 'Philippine Navy VSAT & Endpoint Security Enhancement',
    category: 'Network Engineering',
    description: "Assisted in enhancing VSAT connectivity for the Philippine Navy's Maritime Situational Awareness System (MSAS) and supported the rollout of centrally managed endpoint security across Navy units.",
    technologies: ['VSAT', 'Sophos Endpoint Security', 'Defense/Government IT'],
    icon: ShieldCheck,
    color: 'bg-red-500',
  },
  {
    id: 8,
    title: 'API Testing Suite',
    category: 'Quality Assurance',
    description: 'Developed comprehensive API testing suites using Postman and automated regression tests for RESTful services.',
    technologies: ['Postman', 'REST API', 'Automation', 'Newman'],
    icon: Link2,
    color: 'bg-indigo-500',
  },
  {
    id: 9,
    title: 'VREDS – VR Driving School Trainer',
    category: 'Development',
    description: 'A Unity-based virtual reality driving simulator that lets instructors evaluate and train student drivers on road signs and driving etiquette in a standardized, immersive test environment.',
    technologies: ['Unity', 'C#', 'VR', 'Game Design'],
    icon: Car,
    color: 'bg-cyan-500',
    url: 'https://github.com/josux/vreds',
  },
];

export const categories = ['All', 'Quality Assurance', 'UI/UX Design', 'Network Engineering', 'Development'];

export function getProjectById(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
