'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const SCALE_W = 20; // resting scale width
const SCALE_H = 18; // resting scale height
const COL_STEP = SCALE_W * 0.86; // horizontal distance between scale centers
const ROW_STEP = SCALE_H * 0.58; // vertical distance between rows (overlap)
const FALLOFF = 100; // px — distance at which the reaction fully fades out
const MAX_LIFT = 6; // px a fully-active scale pushes outward from the cursor
const MAX_TILT = 0.18; // radians a fully-active scale rotates
const MAX_SCALE = 1.35; // size multiplier at full activation

/**
 * Fixed, full-viewport background made of overlapping "reptile scale" /
 * armor-plate tiles (like shingles: each row is drawn over the tips of the
 * row below it), sitting behind all page content (z-index -1, so any
 * section without its own background reveals it). Scales near the cursor
 * lift, tilt outward, brighten, and grow — a mechanical "plating reacts to
 * touch" feel — via a two-pass draw: a cheap low-alpha base layer for the
 * full plate texture, then a second pass that re-draws only the handful of
 * scales within the reaction radius, lifted and drawn on top so they read
 * as raised regardless of row order. Disabled on touch/coarse-pointer
 * devices (no cursor to react to) and idles (no rAF loop) at rest.
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
    // Precomputed tile centers, rebuilt only on resize (not every frame).
    let tiles: { x: number; y: number }[] = [];
    // Static "resting" texture, rendered once per resize/theme change onto
    // an off-screen canvas. Redrawing every one of the (often 5,000+) tiles
    // on every single mousemove frame was the actual source of the lag —
    // now each frame just blits this cached bitmap instead of re-tracing
    // every scale shape from scratch.
    const baseCanvas = document.createElement('canvas');
    const baseCtx = baseCanvas.getContext('2d');

    // Traces one scale: a rounded-top, tapered-bottom "shield" shape
    // centered at (0, 0) in local space, before the caller's transform.
    const traceScale = (c: CanvasRenderingContext2D, w: number, h: number) => {
      c.beginPath();
      c.moveTo(-w / 2, -h / 2);
      c.quadraticCurveTo(0, -h / 2 - h * 0.32, w / 2, -h / 2);
      c.quadraticCurveTo(w * 0.42, h * 0.15, 0, h / 2);
      c.quadraticCurveTo(-w * 0.42, h * 0.15, -w / 2, -h / 2);
      c.closePath();
    };

    const computeTiles = () => {
      const cols = Math.ceil(width / COL_STEP) + 2;
      const rows = Math.ceil(height / ROW_STEP) + 2;
      const next: { x: number; y: number }[] = [];
      for (let j = rows - 1; j >= 0; j--) {
        const y = j * ROW_STEP;
        const rowOffset = (j % 2) * (COL_STEP / 2);
        for (let i = 0; i < cols; i++) {
          next.push({ x: i * COL_STEP + rowOffset - COL_STEP, y });
        }
      }
      tiles = next;
    };

    // Renders the full at-rest plate texture once onto the off-screen
    // canvas. Only re-run on resize or theme change, never per-frame.
    const renderBaseTexture = () => {
      if (!baseCtx) return;
      baseCanvas.width = canvas.width;
      baseCanvas.height = canvas.height;
      baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      baseCtx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === 'dark';
      const baseColor = isDark ? '52, 211, 153' : '5, 150, 105';
      const restAlpha = isDark ? 0.06 : 0.055;
      const strokeAlpha = isDark ? 0.1 : 0.09;

      for (const { x, y } of tiles) {
        baseCtx.save();
        baseCtx.translate(x, y);
        traceScale(baseCtx, SCALE_W, SCALE_H);
        baseCtx.fillStyle = `rgba(${baseColor}, ${restAlpha})`;
        baseCtx.fill();
        baseCtx.lineWidth = 1;
        baseCtx.strokeStyle = `rgba(${baseColor}, ${strokeAlpha})`;
        baseCtx.stroke();
        baseCtx.restore();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === 'dark';
      const activeColor = isDark ? '16, 185, 129' : '4, 120, 87';
      const restAlpha = isDark ? 0.06 : 0.055;

      // Blit the cached resting texture in one shot instead of re-tracing
      // every tile. Drawn in raw pixel space (transform reset) since the
      // off-screen canvas's backing pixels already account for dpr.
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.drawImage(baseCanvas, 0, 0);
      ctx.restore();

      // Ambient glow under the cursor, drawn first so scales sit on top.
      // Kept fairly faint — this sits behind page text (including the
      // same-green accent color used for headings/stats), so a strong
      // glow would wash out contrast right where the cursor happens to be.
      if (mouseX > -9000) {
        const glow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, FALLOFF * 1.3);
        glow.addColorStop(0, `rgba(${activeColor}, ${isDark ? 0.045 : 0.035})`);
        glow.addColorStop(1, `rgba(${activeColor}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      // Only the handful of tiles within the reaction radius need to be
      // singled out — a cheap distance check per tile, no drawing here.
      const active: { x: number; y: number; t: number }[] = [];
      for (const { x, y } of tiles) {
        const dist = Math.hypot(x - mouseX, y - mouseY);
        const t = Math.max(0, 1 - dist / FALLOFF);
        if (t > 0.04) active.push({ x, y, t });
      }

      // Pass 2 — re-draw just the reacting scales, lifted/tilted/brightened
      // and layered on top so they read as raised armor plates.
      for (const { x, y, t } of active) {
        const eased = t * t * (3 - 2 * t); // smoothstep
        const dx = x - mouseX;
        const dy = y - mouseY;
        const dist = Math.hypot(dx, dy) || 1;
        const nx = dx / dist;
        const ny = dy / dist;
        const lift = MAX_LIFT * eased;
        const tilt = nx * MAX_TILT * eased; // lean left/right away from the cursor
        const scaleMul = 1 + (MAX_SCALE - 1) * eased;
        const alpha = restAlpha + (0.32 - restAlpha) * eased;

        ctx.save();
        ctx.translate(x + nx * lift, y + ny * lift);
        ctx.rotate(tilt);
        ctx.scale(scaleMul, scaleMul);

        if (eased > 0.15) {
          ctx.shadowColor = `rgba(${activeColor}, ${0.3 * eased})`;
          ctx.shadowBlur = 8 * eased;
          ctx.shadowOffsetY = 2 * eased;
        }

        traceScale(ctx, SCALE_W, SCALE_H);
        ctx.fillStyle = `rgba(${activeColor}, ${alpha})`;
        ctx.fill();
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(${isDark ? '255,255,255' : '6,78,59'}, ${0.22 * eased})`;
        ctx.stroke();
        ctx.restore();
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      computeTiles();
      renderBaseTexture();
      draw();
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

    // Respect reduced-motion: keep the static resting plate texture (drawn
    // once above by resize()) but skip the cursor-follow interaction.
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
