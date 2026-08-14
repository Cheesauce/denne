'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Wraps route content so navigating between pages is an animated cut
 * instead of an abrupt swap: the outgoing page fades/slides out, a green
 * "wipe" bar sweeps across the top, and the incoming page fades/slides in.
 * `mode="wait"` means the exit finishes before the next page enters.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <motion.div
        key={`bar-${pathname}`}
        className="fixed top-0 left-0 h-1 bg-[#10b981] z-[70] pointer-events-none"
        initial={{ width: '0%', opacity: 1 }}
        animate={{ width: '100%', opacity: [1, 1, 0] }}
        transition={{ duration: 0.6, times: [0, 0.7, 1], ease: 'easeInOut' }}
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
