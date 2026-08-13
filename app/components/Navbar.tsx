'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 glass py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform"
        >
          <span className="text-[#10b981]">DJ</span>
          <span className="dark:text-white text-black">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#10b981] ${
                pathname === link.href
                  ? 'text-[#10b981]'
                  : 'dark:text-gray-300 text-gray-600'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:rotate-180 duration-500"
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
          className="md:hidden p-2"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 dark:text-white text-black" strokeWidth={2} />
          ) : (
            <Menu className="w-6 h-6 dark:text-white text-black" strokeWidth={2} />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-b dark:border-gray-800">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  pathname === link.href
                    ? 'text-[#10b981]'
                    : 'dark:text-gray-300 text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
        </div>
      )}
    </nav>
  );
}