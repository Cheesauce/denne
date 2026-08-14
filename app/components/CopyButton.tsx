'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

async function copyToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback for older browsers / non-secure contexts where the async
  // Clipboard API isn't available.
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

/**
 * Small inline "copy this text" icon button — used next to the contact
 * email so reaching out works the same on any device, regardless of
 * whether a `mailto:` link finds a configured mail client to open.
 */
export default function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    await copyToClipboard(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label ?? `Copy ${text}`}
      data-cursor={copied ? 'Copied' : 'Copy'}
      className="inline-flex items-center justify-center p-1 text-gray-400 hover:text-[#10b981] transition-colors"
    >
      {copied ? <Check className="w-4 h-4" strokeWidth={2} /> : <Copy className="w-4 h-4" strokeWidth={1.75} />}
    </button>
  );
}
