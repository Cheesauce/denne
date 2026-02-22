'use client';

import Link from 'next/link';
import { useTheme } from './components/ThemeProvider';

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-black" />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#10b981]/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '200ms' }} />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[#10b981] font-medium mb-4 tracking-widest uppercase animate-fade-in">
            Welcome to My Portfolio
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="dark:text-white text-black">Hi, I&apos;m </span>
            <span className="gradient-text">Denne Joshua</span>
          </h1>
          
          <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 mb-8 animate-slide-up delay-100">
             Network Engineer &
            <span className="text-[#10b981]"> Quality Assurance, UI/UX</span>
          </p>
          
          <p className="text-lg dark:text-gray-400 text-gray-500 mb-10 max-w-2xl mx-auto animate-slide-up delay-200">
            Passionate about ensuring the highest quality in software products through 
            meticulous testing, attention to detail, and user-centered design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <Link
              href="/projects"
              className="px-8 py-4 bg-[#10b981] text-white font-semibold rounded-full hover:bg-[#059669] transition-all duration-300 glow-green"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '3+', label: 'Years Experience', icon: '💼' },
              { number: '50+', label: 'Projects Completed', icon: '🚀' },
              { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '3+', label: 'Certifications', icon: '🏆' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#10b981] mb-2">{stat.number}</div>
                <div className="dark:text-gray-400 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white text-black">
            What I <span className="text-[#10b981]">Do</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🧪',
                title: 'Quality Assurance',
                description: 'Comprehensive testing strategies including manual testing, automated testing, regression testing, and performance testing to ensure software quality.',
              },
              {
                icon: '🎨',
                title: 'UI/UX Design',
                description: 'Creating intuitive and visually appealing user interfaces through wireframing, prototyping, and user research.',
              },
              {
                icon: '🌐',
                title: 'Network Engineering',
                description: 'Designing, implementing, and maintaining network infrastructure with a focus on security and performance.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#10b981] transition-all duration-300 hover:shadow-2xl hover:shadow-[#10b981]/10"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white text-black">
                  {service.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}