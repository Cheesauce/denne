import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { projects, getProjectById } from '../projects-data';
import { GitHubIcon } from '../GitHubIcon';
import Reveal from '../../components/Reveal';

export function generateStaticParams() {
  return projects.map((project) => ({ id: String(project.id) }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(Number(id));

  if (!project) {
    return { title: 'Project Not Found | Denne Joshua Suelan' };
  }

  return {
    title: `${project.title} | Denne Joshua Suelan`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#10b981] hover:gap-3 transition-all mb-10"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          Back to Projects
        </Link>

        <Reveal>
        <span className="index-number block mb-2">{String(project.id).padStart(2, '0')}</span>
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className={`w-20 h-20 rounded-2xl ${project.color} flex items-center justify-center text-white shrink-0`}>
            <project.icon className="w-9 h-9" strokeWidth={1.75} />
          </div>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium dark:text-gray-300 text-gray-600 shrink-0 mt-2">
            {project.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight dark:text-white text-black">
          {project.title}
        </h1>

        <p className="text-lg dark:text-gray-300 text-gray-600 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium dark:text-gray-300 text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-black dark:border-white text-black dark:text-white font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 mb-10"
          >
            <GitHubIcon className="w-5 h-5" />
            View on GitHub
          </a>
        )}
        </Reveal>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#10b981] to-[#059669] text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Interested in something similar?</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Let&apos;s talk about how I can help with your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#10b981] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
