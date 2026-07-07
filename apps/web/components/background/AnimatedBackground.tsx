"use client";

import "./stars.css";
import StarCanvas from "./StarCanvas";
import { memo } from "react";

function AnimatedBackgroundInner() {
  return (
    <>
      {/* Deep space base */}
      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      {/* Nebula glows */}
      <div className="fixed left-1/2 top-16 -z-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/35 blur-[200px] animate-pulse" />
      <div className="fixed right-[-5%] top-1/4 -z-40 h-[500px] w-[500px] rounded-full bg-blue-500/25 blur-[180px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="fixed bottom-[-5%] left-[-5%] -z-40 h-[450px] w-[450px] rounded-full bg-fuchsia-600/25 blur-[160px] animate-pulse" style={{ animationDelay: "3s" }} />
      <div className="fixed top-1/2 left-1/4 -z-40 h-[300px] w-[300px] rounded-full bg-cyan-500/15 blur-[140px] animate-pulse" style={{ animationDelay: "2s" }} />

      {/* Canvas stars with glow */}
      <StarCanvas density={200} />

      {/* CSS star layers */}
      <div className="stars" aria-hidden />
      <div className="stars2" aria-hidden />
      <div className="stars3" aria-hidden />

      {/* Shooting stars */}
      <div className="shooting-star" aria-hidden />
    </>
  );
}

export default memo(AnimatedBackgroundInner);
