"use client";

import { useEffect, useRef } from "react";

const WORDS = [
  "AI Movie Studio", "Cinematic AI", "Scene Generator", "Storyboard",
  "Director's Cut", "Visual Narrative", "Film Score", "Screenplay",
  "AI Image", "Image to Video", "Frame by Frame", "Motion Picture",
  "Visual FX", "4K Vision", "Pixel Perfect", "AI Voice",
  "Voice Studio", "Narration", "Sound Design", "Voice Clone",
  "Script Writer", "Character AI", "Story Arc", "Plot Twist",
  "Character Design", "World Building", "LumoraAI", "Create",
  "Imagine", "Illuminate", "Your Vision", "Cinematic", "Storytelling",
];

const TEXT_COLORS = [
  [167, 139, 250] as const,
  [96,  165, 250] as const,
  [236,  72, 153] as const,
  [52,  211, 153] as const,
  [251, 191,  36] as const,
  [34,  211, 238] as const,
  [248, 113, 113] as const,
  [255, 255, 255] as const,
];

const STAR_COLORS = [
  [255, 255, 255] as const,
  [200, 220, 255] as const,
  [180, 160, 255] as const,
  [160, 210, 255] as const,
  [255, 220, 240] as const,
];

type Star = { x: number; y: number; r: number; alpha: number; alphaDir: number; color: readonly [number,number,number] };
type Word = { x: number; y: number; vy: number; text: string; size: number; alpha: number; color: readonly [number,number,number]; angle: number; sway: number };
type Shooter = { x: number; y: number; len: number; angle: number; speed: number; alpha: number; active: boolean; timer: number; delay: number };

export default function CinematicBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0, raf = 0;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // ── Stars ──────────────────────────────────────────────────────────────
    const starCount = Math.max(120, Math.round((w * h) / 5000));
    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 2.0,
      alpha: 0.4 + Math.random() * 0.6,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]!,
    }));

    // ── Falling words ──────────────────────────────────────────────────────
    const wordCount = Math.max(25, Math.round((w * h) / 70000));
    const words: Word[] = Array.from({ length: wordCount }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vy: 0.5 + Math.random() * 0.9,
      text: WORDS[i % WORDS.length]!,
      size: 12 + Math.floor(Math.random() * 14),
      alpha: 0.6 + Math.random() * 0.4,
      color: TEXT_COLORS[Math.floor(Math.random() * TEXT_COLORS.length)]!,
      angle: (Math.random() - 0.5) * 0.06,
      sway: Math.random() * Math.PI * 2,
    }));

    // ── Shooting stars ─────────────────────────────────────────────────────
    const shooters: Shooter[] = Array.from({ length: 4 }, (_, i) => ({
      x: 0, y: 0, len: 120 + Math.random() * 100,
      angle: -0.3 - Math.random() * 0.3,
      speed: 12 + Math.random() * 8,
      alpha: 0, active: false,
      timer: 0, delay: 60 + i * 90 + Math.random() * 120,
    }));

    function spawnShooter(s: Shooter) {
      s.x = Math.random() * w * 0.6;
      s.y = Math.random() * h * 0.4;
      s.alpha = 1;
      s.active = true;
      s.timer = 0;
      s.len = 120 + Math.random() * 100;
      s.speed = 12 + Math.random() * 8;
      s.angle = -0.25 - Math.random() * 0.25;
    }

    let frame = 0;

    function draw() {
      frame++;

      // ── Deep space background ────────────────────────────────────────────
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0,   "#050816");
      bg.addColorStop(0.5, "#07102a");
      bg.addColorStop(1,   "#081027");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // ── Nebula glows ─────────────────────────────────────────────────────
      const t = frame / 120;
      drawNebula(ctx, w * 0.5, h * 0.15, 380, [139, 92, 246], 0.18 + Math.sin(t) * 0.06);
      drawNebula(ctx, w * 0.85, h * 0.35, 280, [96, 165, 250], 0.13 + Math.sin(t + 1.5) * 0.05);
      drawNebula(ctx, w * 0.1,  h * 0.75, 260, [236, 72, 153], 0.12 + Math.sin(t + 3) * 0.05);
      drawNebula(ctx, w * 0.4,  h * 0.6,  200, [34, 211, 238], 0.09 + Math.sin(t + 2) * 0.04);

      // ── Stars ────────────────────────────────────────────────────────────
      for (const s of stars) {
        s.alpha += s.alphaDir * 0.008;
        if (s.alpha >= 1)   { s.alpha = 1;   s.alphaDir = -1; }
        if (s.alpha <= 0.15){ s.alpha = 0.15; s.alphaDir =  1; }

        const [r, g, b] = s.color;
        // glow halo
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 6);
        grad.addColorStop(0,   `rgba(${r},${g},${b},${s.alpha * 0.6})`);
        grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${s.alpha})`;
        ctx.shadowBlur = s.r * 5;
        ctx.shadowColor = `rgba(${r},${g},${b},0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ── Shooting stars ───────────────────────────────────────────────────
      for (const s of shooters) {
        if (!s.active) {
          s.delay--;
          if (s.delay <= 0) { spawnShooter(s); s.delay = 80 + Math.random() * 140; }
          continue;
        }
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= 0.025;
        s.timer++;
        if (s.alpha <= 0 || s.x > w + 100 || s.y > h + 100) { s.active = false; continue; }

        const tx = s.x - Math.cos(s.angle) * s.len;
        const ty = s.y - Math.sin(s.angle) * s.len;
        const trail = ctx.createLinearGradient(tx, ty, s.x, s.y);
        trail.addColorStop(0, `rgba(255,255,255,0)`);
        trail.addColorStop(0.7, `rgba(200,220,255,${s.alpha * 0.5})`);
        trail.addColorStop(1, `rgba(255,255,255,${s.alpha})`);
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = trail;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(167,139,250,${s.alpha})`;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // head dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255,255,255,0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ── Falling words ────────────────────────────────────────────────────
      for (const p of words) {
        const [r, g, b] = p.color;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.font = `600 ${p.size}px Inter, ui-sans-serif, system-ui`;
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.95)`;
        ctx.shadowBlur = 16;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillText(p.text, 0, 0);
        ctx.restore();

        p.sway += 0.007;
        p.x += Math.sin(p.sway) * 0.3;
        p.y += p.vy;

        if (p.y > h + 40) {
          p.y = -30 - Math.random() * 120;
          p.x = Math.random() * w;
          p.vy = 0.5 + Math.random() * 0.9;
          p.alpha = 0.6 + Math.random() * 0.4;
          p.size = 12 + Math.floor(Math.random() * 14);
          p.color = TEXT_COLORS[Math.floor(Math.random() * TEXT_COLORS.length)]!;
          p.text = WORDS[Math.floor(Math.random() * WORDS.length)]!;
          p.angle = (Math.random() - 0.5) * 0.06;
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100vw", height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
      aria-hidden
    />
  );
}

function drawNebula(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, radius: number,
  color: readonly [number, number, number],
  alpha: number
) {
  const [r, g, b] = color;
  const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
  grad.addColorStop(0,   `rgba(${r},${g},${b},${alpha})`);
  grad.addColorStop(0.5, `rgba(${r},${g},${b},${alpha * 0.4})`);
  grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
}
