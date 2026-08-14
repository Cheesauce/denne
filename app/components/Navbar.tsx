'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const RESUME_PATH = '/Denne-Joshua-Suelan-Resume.pdf';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${
        scrolled
          ? 'bg-white/90 dark:bg-black/90 glass py-3 border-black dark:border-white'
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tighter hover:scale-105 transition-transform"
        >
          <span className="text-[#10b981]">DJ</span>
          <span className="dark:text-white text-black">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative py-1 font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#10b981] ${
                pathname === link.href
                  ? 'text-[#10b981]'
                  : 'dark:text-gray-300 text-gray-600'
              }`}
            >
              <span className="opacity-50 mr-1">{String(i).padStart(2, '0')}</span>
              {link.name}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#10b981]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}

          <Magnetic>
            <a
              href={RESUME_PATH}
              download
              className="brutal-shadow flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white bg-[#10b981] text-white text-sm font-semibold"
            >
              <Download className="w-4 h-4" strokeWidth={1.75} /> Resume
            </a>
          </Magnetic>

          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 border-2 border-black dark:border-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:rotate-180 duration-500"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" strokeWidth={1.75} />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" strokeWidth={1.75} />
            )}
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          className="md:hidden p-2"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 dark:text-white text-black" strokeWidth={2} />
          ) : (
            <Menu className="w-6 h-6 dark:text-white text-black" strokeWidth={2} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b-2 border-black dark:border-white"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono text-lg uppercase tracking-wide ${
                    pathname === link.href
                      ? 'text-[#10b981]'
                      : 'dark:text-gray-300 text-gray-600'
                  }`}
                >
                  <span className="opacity-50 mr-2 text-sm">{String(i).padStart(2, '0')}</span>
                  {link.name}
                </Link>
              ))}
              <a
                href={RESUME_PATH}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="brutal-shadow flex items-center gap-2 px-4 py-3 border-2 border-black dark:border-white bg-[#10b981] text-white text-lg font-semibold justify-center"
              >
                <Download className="w-5 h-5" strokeWidth={1.75} /> Resume
              </a>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-lg font-medium dark:text-gray-300 text-gray-600"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-5 h-5 text-yellow-500" strokeWidth={1.75} /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 text-gray-700" strokeWidth={1.75} /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
