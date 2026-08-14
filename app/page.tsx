'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowRight, FlaskConical, Palette, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './components/Reveal';
import Magnetic from './components/Magnetic';

const marqueeItems = [
  'Quality Assurance',
  'UI/UX Design',
  'Network Engineering',
  'Test Automation',
  'Field Deployment',
  'Wireframing',
];

const services = [
  {
    icon: FlaskConical,
    title: 'Quality Assurance',
    description: 'Manual, automated, regression, and performance testing to catch what shouldn’t ship.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Wireframing, prototyping, and user research that turns ideas into interfaces people enjoy.',
  },
  {
    icon: Globe,
    title: 'Network Engineering',
    description: 'Planning, field deployment, and maintenance of connectivity infrastructure at scale.',
  },
];

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '100%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Certifications' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-gray-50/60 to-gray-100/70 dark:from-black/70 dark:via-gray-900/60 dark:to-black/70 -z-10" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl animate-float -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-[#10b981] mb-8"
          >
            Portfolio / 2026
          </motion.p>

          <h1 className="text-display dark:text-white text-black">
            {['Hi, I’m', 'Denne', 'Joshua.'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`block ${i === 1 ? 'gradient-text' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 grid md:grid-cols-2 gap-8 items-end"
          >
            <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 max-w-md">
              Network Engineer &amp;{' '}
              <span className="text-[#10b981]">Quality Assurance, UI/UX</span> — ensuring
              software and infrastructure hold up under real-world pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
              <Magnetic>
                <Link
                  href="/projects"
                  className="brutal-shadow group inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black dark:border-white bg-[#10b981] text-white font-semibold"
                >
                  View My Work
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2} />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  className="brutal-shadow inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <div className="py-8 border-y dark:border-gray-800 border-gray-200 overflow-hidden dark:bg-gray-900/50 bg-gray-50">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center text-2xl md:text-4xl font-bold tracking-tight dark:text-gray-700 text-gray-300 px-8 whitespace-nowrap"
            >
              {item}
              <span className="text-[#10b981] mx-8">&bull;</span>
            </span>
          ))}
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="text-center md:text-left border-t-2 dark:border-gray-800 border-gray-200 pt-6">
                  <div className="text-5xl md:text-6xl font-bold text-[#10b981] mb-2 tracking-tight">{stat.number}</div>
                  <div className="dark:text-gray-400 text-gray-600 text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="eyebrow text-[#10b981] mb-4">Capabilities</p>
            <h2 className="text-display mb-16 dark:text-white text-black" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              What I <span className="text-[#10b981]">Do</span>
            </h2>
          </Reveal>

          <div className="divide-y dark:divide-gray-800 divide-gray-200 border-t border-b dark:border-gray-800 border-gray-200">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="group grid md:grid-cols-12 gap-4 md:gap-8 items-center py-10 hover:pl-4 transition-all duration-300">
                  <span className="index-number md:col-span-1">{String(index + 1).padStart(2, '0')}</span>
                  <div className="md:col-span-2 inline-flex items-center justify-center w-14 h-14 border-2 border-black dark:border-white bg-[#10b981]/10 text-[#10b981] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white transition-all duration-300">
                    <service.icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="md:col-span-3 text-2xl font-bold dark:text-white text-black">
                    {service.title}
                  </h3>
                  <p className="md:col-span-5 dark:text-gray-400 text-gray-600">
                    {service.description}
                  </p>
                  <ArrowRight className="hidden md:block md:col-span-1 w-6 h-6 text-gray-300 dark:text-gray-700 group-hover:text-[#10b981] group-hover:translate-x-2 transition-all duration-300" strokeWidth={2} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
