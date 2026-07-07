"use client";

import React, { useEffect, useRef } from "react";

type Star = {
  x: number; y: number; r: number;
  vx: number; vy: number;
  alpha: number; alphaDir: number;
  color: string;
};

const STAR_COLORS = [
  "255,255,255",
  "200,220,255",
  "180,160,255",
  "160,210,255",
  "255,220,240",
];

export default function StarCanvas({ density = 200 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const count = Math.max(80, Math.round((density * window.innerWidth * window.innerHeight) / 500000));
    const stars: Star[] = Array.from({ length: count }, () => {
      const r = 0.8 + Math.random() * 2.2;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r,
        vx: (Math.random() - 0.5) * 0.05,
        vy: -0.01 - Math.random() * 0.08,
        alpha: 0.5 + Math.random() * 0.5,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)] as string,
      };
    });

    let last = performance.now();
    function draw(now: number) {
      const dt = Math.min(40, now - last);
      last = now;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        // twinkle alpha
        s.alpha += s.alphaDir * 0.006 * (dt / 16);
        if (s.alpha >= 1)   { s.alpha = 1;   s.alphaDir = -1; }
        if (s.alpha <= 0.2) { s.alpha = 0.2; s.alphaDir =  1; }

        s.x += s.vx * (dt / 16);
        s.y += s.vy * (dt / 16);
        if (s.y < -10) { s.y = h + 10; s.x = Math.random() * w; }
        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;

        // glow halo
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${s.alpha * 0.12})`;
        ctx.fill();

        // bright core with shadowBlur glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${s.alpha})`;
        ctx.shadowBlur = s.r * 8;
        ctx.shadowColor = `rgba(${s.color},${s.alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 -z-30 pointer-events-none star-canvas"
      aria-hidden
    />
  );
}
