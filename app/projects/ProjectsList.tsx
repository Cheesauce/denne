'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects, categories } from './projects-data';
import { GitHubIcon } from './GitHubIcon';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import Magnetic from '../components/Magnetic';

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
            className={`px-6 py-2 border-2 border-black dark:border-white font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
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
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 3) * 0.08}>
            <TiltCard className="group relative h-full p-6 border-2 border-black dark:border-white bg-white dark:bg-gray-800 hover:border-[#10b981] transition-all duration-300 brutal-shadow">
              {/* Stretched link: makes the whole card clickable/navigable
                  while keeping real, individually-clickable anchors (the
                  GitHub icon below) legal HTML — anchors can't nest, so
                  this sits behind the content (z-0) and the content wrapper
                  is pointer-events-none except where re-enabled per element. */}
              <Link
                href={`/projects/${project.id}`}
                data-cursor="View"
                aria-label={`View details for ${project.title}`}
                className="absolute inset-0 z-0"
              />

              <div className="relative z-10 pointer-events-none">
                {project.image && (
                  <div className="-mx-6 -mt-6 mb-4 h-40 border-b-2 border-black dark:border-white overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      width={600}
                      height={320}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="index-number text-2xl">{String(project.id).padStart(2, '0')}</span>
                    <div className={`w-16 h-16 border-2 border-black dark:border-white ${project.color} flex items-center justify-center text-white`}>
                      <project.icon className="w-7 h-7" strokeWidth={1.75} />
                    </div>
                  </div>
                  <span className="px-3 py-1 border border-black dark:border-white text-xs font-mono uppercase dark:text-gray-300 text-gray-600">
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
                      className="px-2 py-1 border border-gray-300 dark:border-gray-600 font-mono text-xs dark:text-gray-300 text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t-2 border-black/10 dark:border-white/10 flex items-center justify-between gap-4">
                  <span className="text-[#10b981] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </span>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on GitHub"
                      data-cursor="GitHub"
                      className="relative z-20 pointer-events-auto text-gray-400 hover:text-[#10b981] transition-colors"
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="text-center dark:text-gray-400 text-gray-600 py-16">
          No projects in this category yet.
        </p>
      )}

      <div className="mt-20 p-8 border-2 border-black dark:border-white bg-gradient-to-r from-[#10b981] to-[#059669] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start a Project?</h2>
        <p className="text-white/80 mb-6 max-w-xl mx-auto">
          Let&apos;s collaborate to bring your ideas to life with quality-first approach.
        </p>
        <Magnetic className="inline-block">
          <Link
            href="/contact"
            className="brutal-shadow inline-block px-8 py-4 border-2 border-black bg-white text-[#10b981] font-semibold"
          >
            Get In Touch
          </Link>
        </Magnetic>
      </div>
    </>
  );
}
