'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Custom cursor: a small solid dot that tracks the mouse exactly, a
 * lagging diamond outline for tactile feel, and a contextual label that
 * appears next to the cursor when hovering an element with a
 * `data-cursor="..."` attribute (e.g. `data-cursor="View"` on project
 * cards) — a lightweight way to hint at what a hover target does before
 * the click. Only renders on pointer:fine devices (see the `cursor: none`
 * media query in globals.css), so it never interferes with touch/mobile.
 */
export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 25, stiffness: 300, mass: 0.5 });

  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    // Reading matchMedia (an external system unavailable during SSR) and
    // syncing it into state on mount is the standard fix for the
    // hydration-mismatch this guards against, matching ThemeProvider's pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(mql.matches);
    if (!mql.matches) return;

    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      const cursorTarget = target.closest<HTMLElement>('[data-cursor]');
      const interactive = target.closest('a, button, [role="button"]');
      setHovering(!!interactive);
      setLabel(cursorTarget?.dataset.cursor ?? null);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY, opacity: visible ? 1 : 0 }}
        animate={{ scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
        animate={{ scale: label ? 2.2 : hovering ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {label && (
          <motion.span
            className="cursor-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
