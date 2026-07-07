"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "50M+", label: "Images Generated", color: "from-violet-400 to-blue-400" },
  { value: "2M+",  label: "Videos Created",   color: "from-blue-400 to-cyan-400" },
  { value: "100K+",label: "Creators",          color: "from-fuchsia-400 to-pink-400" },
  { value: "150+", label: "Countries",         color: "from-amber-400 to-orange-400" },
];

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-8 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center gap-2 ${visible ? "animate-count-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <span className={`text-5xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                {s.value}
              </span>
              <span className="text-sm text-gray-400 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
