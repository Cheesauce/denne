import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact | Denne Joshua Suelan',
  description: 'Get in touch with Denne Joshua B. Suelan for QA, UI/UX, or Network Engineering projects.',
};

const CONTACT_EMAIL = 'joshua.suelan@gmail.com';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 dark:text-white text-black">
            Get In <span className="text-[#10b981]">Touch</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 dark:text-white text-black">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                <MapPin className="w-5 h-5 text-[#10b981] shrink-0" strokeWidth={1.75} /> Caloocan City, Philippines
              </p>
              <p className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                <Phone className="w-5 h-5 text-[#10b981] shrink-0" strokeWidth={1.75} /> 0976-477-9947
              </p>
              <p className="flex items-center gap-2 dark:text-gray-400 text-gray-600">
                <Mail className="w-5 h-5 text-[#10b981] shrink-0" strokeWidth={1.75} /> {CONTACT_EMAIL}
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 dark:text-white text-black">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
