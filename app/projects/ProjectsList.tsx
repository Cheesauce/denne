'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects, categories } from './projects-data';
import { GitHubIcon } from './GitHubIcon';

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

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between gap-4">
              <Link
                href={`/projects/${project.id}`}
                className="text-[#10b981] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all"
              >
                View Details
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                  className="text-gray-400 hover:text-[#10b981] transition-colors"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
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
