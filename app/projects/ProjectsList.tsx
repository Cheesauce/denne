'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Landmark, HeartPulse, Globe, Bot, Plane, ShieldCheck, Link2, ArrowRight, Car } from 'lucide-react';

function GitHubIcon(props: { className?: string }) {
  return (
    <svg className={props.className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.286 0 .321.216.696.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

const projects = [
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
    title: 'Corporate Network Infrastructure',
    category: 'Network Engineering',
    description: 'Designed and implemented a secure network infrastructure for a 500+ employee corporate office with redundant connections.',
    technologies: ['Cisco', 'Firewall', 'VPN', 'Network Monitoring'],
    icon: Globe,
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
    title: 'Network Security Implementation',
    category: 'Network Engineering',
    description: 'Implemented multi-layer security measures including firewall, IDS/IPS, and VPN for enterprise network protection.',
    technologies: ['Fortinet', 'IDS/IPS', 'VPN', 'Security Auditing'],
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

const categories = ['All', 'Quality Assurance', 'UI/UX Design', 'Network Engineering', 'Development'];

export default function ProjectsList() {
  const [activeCategory, setActiveCategory] = useState('All');

  const visibleProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-[#10b981] text-white'
                : 'bg-gray-100 dark:bg-gray-800 dark:text-gray-300 text-gray-600 hover:bg-[#10b981] hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#10b981] transition-all duration-300 hover:shadow-2xl hover:shadow-[#10b981]/10 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-16 h-16 rounded-2xl ${project.color} flex items-center justify-center text-white`}>
                <project.icon className="w-7 h-7" strokeWidth={1.75} />
              </div>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium dark:text-gray-300 text-gray-600">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 dark:text-white text-black group-hover:text-[#10b981] transition-colors">
              {project.title}
            </h3>
            <p className="dark:text-gray-400 text-gray-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs dark:text-gray-300 text-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#10b981] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all w-fit"
                >
                  <GitHubIcon className="w-4 h-4" />
                  View on GitHub
                </a>
              ) : (
                <span className="text-[#10b981] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="text-center dark:text-gray-400 text-gray-600 py-16">
          No projects in this category yet.
        </p>
      )}

      <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-[#10b981] to-[#059669] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start a Project?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Let&apos;s collaborate to bring your ideas to life with quality-first approach.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-[#10b981] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
        >
          Get In Touch
        </Link>
      </div>
    </>
  );
}
