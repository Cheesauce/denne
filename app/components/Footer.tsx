import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-black border-t dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#10b981]">DJ</span>
              <span className="dark:text-white text-black">Suelan</span>
            </h3>
            <p className="dark:text-gray-400 text-gray-600 max-w-md">
              Quality Assurance Engineer passionate about ensuring the highest 
              quality in software products through meticulous testing and attention to detail.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/denne-joshua-suelan-865823201/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-[#10b981] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://dennejsigns.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-[#10b981] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </a>
              <a
                href="mailto:joshua.suelan@gmail.com"
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-[#10b981] hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-white text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="dark:text-gray-400 text-gray-600 hover:text-[#10b981] transition-colors">About Me</Link></li>
              <li><Link href="/projects" className="dark:text-gray-400 text-gray-600 hover:text-[#10b981] transition-colors">Projects</Link></li>
              <li><Link href="/skills" className="dark:text-gray-400 text-gray-600 hover:text-[#10b981] transition-colors">Skills</Link></li>
              <li><Link href="/contact" className="dark:text-gray-400 text-gray-600 hover:text-[#10b981] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 dark:text-white text-black">Contact</h4>
            <ul className="space-y-2 dark:text-gray-400 text-gray-600">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Caloocan City, Philippines</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>0976-477-9947</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>joshua.suelan@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t dark:border-gray-800 mt-12 pt-8 text-center dark:text-gray-400 text-gray-600">
          <p>© {currentYear} Denne Joshua B. Suelan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}