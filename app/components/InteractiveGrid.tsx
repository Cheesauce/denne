'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const SPACING = 42; // px between dots
const BASE_RADIUS = 1.4; // resting dot radius
const MAX_RADIUS = 6; // dot radius right under the cursor
const FALLOFF = 190; // px — distance at which the scale-up fully fades out

/**
 * Fixed, full-viewport dot grid that sits behind all page content (z-index
 * -1, so any section without its own background reveals it). Dots near the
 * cursor scale up with a smooth falloff, plus a soft ambient glow follows
 * the pointer — a lightweight canvas alternative to a full WebGL shader
 * that still reads as "the background reacts to you". Disabled on
 * touch/coarse-pointer devices (no cursor to react to) and idles (no rAF
 * loop) whenever the pointer isn't moving, so it costs nothing at rest.
 */
export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const mql = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mql.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let mouseX = -9999;
    let mouseY = -9999;
    let rafId: number | null = null;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === 'dark';
      const dotColor = isDark ? '16, 185, 129' : '5, 150, 105';
      const restAlpha = isDark ? 0.12 : 0.16;

      // Ambient glow under the cursor.
      if (mouseX > -9000) {
        const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, FALLOFF * 1.4);
        glow.addColorStop(0, `rgba(${dotColor}, ${isDark ? 0.1 : 0.08})`);
        glow.addColorStop(1, `rgba(${dotColor}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          const dist = Math.hypot(x - mouseX, y - mouseY);
          const t = Math.max(0, 1 - dist / FALLOFF);
          const eased = t * t * (3 - 2 * t); // smoothstep
          const radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * eased;
          const alpha = restAlpha + (0.85 - restAlpha) * eased;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${dotColor}, ${alpha})`;
          ctx.fill();
        }
      }
    };

    const scheduleDraw = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        draw();
      });
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      scheduleDraw();
    };

    const handleLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
      scheduleDraw();
    };

    resize();
    window.addEventListener('resize', resize);

    // Respect reduced-motion: keep the static resting grid (drawn once
    // above by resize()) but skip the cursor-follow interaction entirely.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion) {
      window.addEventListener('mousemove', handleMove);
      document.addEventListener('mouseleave', handleLeave);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
    // Re-run the effect on theme change so `draw()` picks up the new
    // colors immediately (via themeRef, kept fresh above) — redraw once.
  }, [theme]);

  return <canvas ref={canvasRef} className="interactive-grid-canvas" aria-hidden="true" />;
}
