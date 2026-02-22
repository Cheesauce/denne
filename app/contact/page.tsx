import Link from 'next/link';

export const metadata = {
  title: 'Contact | Denne Joshua Suelan',
  description: 'Get in touch with Denne Joshua B. Suelan for QA, UI/UX, or Network Engineering projects.',
};

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
              <p className="dark:text-gray-400 text-gray-600">📍 Caloocan City, Philippines</p>
              <p className="dark:text-gray-400 text-gray-600">📱 0976-477-9947</p>
              <p className="dark:text-gray-400 text-gray-600">✉️ joshua.suelan@gmail.com</p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 dark:text-white text-black">Send a Message</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 outline-none focus:border-[#10b981]" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 outline-none focus:border-[#10b981]" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 outline-none focus:border-[#10b981]"></textarea>
              <button type="submit" className="w-full py-4 bg-[#10b981] text-white font-semibold rounded-xl hover:bg-[#059669] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}