import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';
import Reveal from '../components/Reveal';

export const metadata = {
  title: 'Contact | Denne Joshua Suelan',
  description: 'Get in touch with Denne Joshua B. Suelan for QA, UI/UX, or Network Engineering projects.',
};

const CONTACT_EMAIL = 'joshua.suelan@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/denne-joshua-suelan-865823201/';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="eyebrow text-[#10b981] justify-center mb-4">Say Hello</p>
          <h1 className="text-display mb-6 dark:text-white text-black" style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)' }}>
            Get In <span className="text-[#10b981]">Touch</span>
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal delay={0.05}>
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-full">
            <h2 className="text-2xl font-bold mb-6 dark:text-white text-black">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                <MapPin className="w-5 h-5 text-[#10b981] shrink-0" strokeWidth={1.75} /> De Castro, Pasig City, Philippines
              </p>
              <p className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                <Phone className="w-5 h-5 text-[#10b981] shrink-0" strokeWidth={1.75} /> 0976-477-9947
              </p>
              <p className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                <Mail className="w-5 h-5 text-[#10b981] shrink-0" strokeWidth={1.75} /> {CONTACT_EMAIL}
              </p>
              <p className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                <svg className="w-5 h-5 text-[#10b981] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#10b981] transition-colors">
                  linkedin.com/in/denne-joshua-suelan
                </a>
              </p>
            </div>
          </div>
          </Reveal>

          <Reveal delay={0.1}>
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-full">
            <h2 className="text-2xl font-bold mb-6 dark:text-white text-black">Send a Message</h2>
            <ContactForm />
          </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
