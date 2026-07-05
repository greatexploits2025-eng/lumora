"use client";

import React, { useEffect, useRef } from "react";

/**
 * FallingTextBackground
 * - full-screen canvas with falling inspirational lines/sentences
 * - light-weight; uses requestAnimationFrame
 * - respects prefers-reduced-motion
 */

const LINES = [
  "From Thought to Cinema",
  "Imagine. Create. Share.",
  "Tell your story",
  "Scenes that move you",
  "Make movies faster",
  "Characters with heart",
  "Cinematic by design",
  "Your vision, realized",
];

type Line = {
  x: number;
  y: number;
  vy: number;
  text: string;
  size: number;
  alpha: number;
  angle: number;
};

export default function FallingTextBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mountedRef.current) return;
    mountedRef.current = true;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const density = Math.max(8, Math.round((width * height) / 140000)); // number of active lines
    const lines: Line[] = [];
    for (let i = 0; i < density; i++) {
      const text = LINES[i % LINES.length];
      const size = Math.round(14 + Math.random() * 18); // 14px - 32px
      lines.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vy: 0.2 + Math.random() * 0.9, // speed
        text,
        size,
        alpha: 0.18 + Math.random() * 0.7,
        angle: (Math.random() - 0.5) * 0.06,
      });
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    let raf = 0;
    function draw() {
      // subtle dark gradient backdrop so text pops
      ctx.clearRect(0, 0, width, height);
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "rgba(6,12,26,0.95)");
      g.addColorStop(1, "rgba(3,6,12,0.95)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.globalCompositeOperation = "screen"; // gentle brightening
      for (const L of lines) {
        ctx.font = `${L.size}px Inter, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\"`;
        ctx.fillStyle = `rgba(255,255,255,${L.alpha})`;
        ctx.shadowColor = `rgba(0,0,0,0.5)`;
        ctx.shadowBlur = 12;
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.translate(L.x, L.y);
        ctx.rotate(L.angle);
        ctx.fillText(L.text, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        // update
        L.y += L.vy;
        L.x += Math.sin(Date.now() / 1000 + L.size) * 0.15; // subtle horizontal sway

        // recycle when off screen
        if (L.y > height + 40) {
          L.y = -40 - Math.random() * height * 0.25;
          L.x = Math.random() * width;
          L.vy = 0.2 + Math.random() * 0.9;
          L.alpha = 0.18 + Math.random() * 0.7;
          L.size = Math.round(14 + Math.random() * 18);
          L.angle = (Math.random() - 0.5) * 0.06;
          L.text = LINES[Math.floor(Math.random() * LINES.length)];
        }
      }
      ctx.restore();

      // optional very subtle film-like horizontal scanline
      ctx.fillStyle = "rgba(255,255,255,0.006)";
      const lineY = (Date.now() / 60) % height;
      ctx.fillRect(0, lineY, width, 1);

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas className="falling-text-canvas" ref={canvasRef} aria-hidden />;
}
