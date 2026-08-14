'use client';

import { useState, useRef, type FormEvent } from 'react';
import { CheckCircle2, Copy, Check } from 'lucide-react';

const CONTACT_EMAIL = 'joshua.suelan@gmail.com';

/**
 * Copies text to the clipboard, falling back to the older
 * execCommand('copy') approach when the async Clipboard API is
 * unavailable (older browsers, or non-HTTPS/non-secure contexts) so the
 * "copy" fallback below works as broadly as possible.
 */
async function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState<'email' | 'message' | null>(null);
  const lastMessageRef = useRef('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Portfolio inquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    lastMessageRef.current = `Subject: ${subject}\n\n${body}`;

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Trigger via a throwaway anchor click rather than window.location.href.
    // On Windows/Linux browsers with no default mail client configured,
    // assigning location.href directly can replace the tab with a blank/
    // error page and strand the user; a synthetic anchor click invokes the
    // OS "open mailto:" handler the same way without navigating this tab,
    // so if nothing is configured the user just stays right here — where
    // the copy-to-clipboard fallback below still lets them reach out.
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.click();

    setSent(true);
    setCopied(null);
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleCopy = async (which: 'email' | 'message') => {
    await copyToClipboard(which === 'email' ? CONTACT_EMAIL : lastMessageRef.current);
    setCopied(which);
    window.setTimeout(() => setCopied((current) => (current === which ? null : current)), 2000);
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
        <div className="space-y-3 pt-1">
          <p className="flex items-center gap-2 text-sm text-[#10b981]">
            <CheckCircle2 className="w-4 h-4 shrink-0" strokeWidth={1.75} />
            Your email app should be opening with the message ready to send.
          </p>
          <div className="p-4 border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-700">
            <p className="text-xs font-mono uppercase tracking-widest dark:text-gray-400 text-gray-500 mb-3">
              Nothing happened? No mail app configured on this device works too —
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleCopy('email')}
                className="inline-flex items-center gap-2 px-3 py-2 border-2 border-black dark:border-white text-sm font-medium dark:text-white text-black hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-colors"
              >
                {copied === 'email' ? <Check className="w-4 h-4" strokeWidth={2} /> : <Copy className="w-4 h-4" strokeWidth={1.75} />}
                {copied === 'email' ? 'Copied!' : 'Copy Email Address'}
              </button>
              <button
                type="button"
                onClick={() => handleCopy('message')}
                className="inline-flex items-center gap-2 px-3 py-2 border-2 border-black dark:border-white text-sm font-medium dark:text-white text-black hover:bg-[#10b981] hover:text-white hover:border-[#10b981] transition-colors"
              >
                {copied === 'message' ? <Check className="w-4 h-4" strokeWidth={2} /> : <Copy className="w-4 h-4" strokeWidth={1.75} />}
                {copied === 'message' ? 'Copied!' : 'Copy Message'}
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
