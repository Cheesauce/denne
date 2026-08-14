'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Awwwards-style custom cursor: a small solid dot that tracks the mouse
 * exactly, plus a lagging outline ring for a bit of tactile feel. Grows
 * over links/buttons to signal interactivity. Only renders its visuals on
 * pointer:fine devices (see the `cursor: none` media query in globals.css),
 * so it never interferes with touch/mobile.
 */
export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(dotY, { damping: 25, stiffness: 300, mass: 0.5 });

  const [hovering, setHovering] = useState(false);
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
      setHovering(!!target.closest('a, button, [role="button"]'));
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
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
