'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';

const CONTACT_EMAIL = 'joshua.suelan@gmail.com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-black dark:border-white outline-none focus:border-[#10b981] transition-colors"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-black dark:border-white outline-none focus:border-[#10b981] transition-colors"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={4}
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border-2 border-black dark:border-white outline-none focus:border-[#10b981] transition-colors"
      />
      <button
        type="submit"
        data-cursor="Send"
        className="brutal-shadow w-full py-4 border-2 border-black dark:border-white bg-[#10b981] text-white font-semibold hover:bg-[#059669] transition-all"
      >
        Send Message
      </button>
      {sent && (
        <p className="flex items-center gap-2 text-sm text-[#10b981]">
          <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} />
          Your email app should be opening with the message ready to send.
        </p>
      )}
    </form>
  );
}
