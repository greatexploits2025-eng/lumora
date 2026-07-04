"use client";

export default function AnimatedBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="fixed inset-0 -z-50 bg-[#050816]" />

      {/* Purple Glow */}
      <div className="fixed left-1/2 top-32 -z-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/40 blur-[180px]" />

      {/* Blue Glow */}
      <div className="fixed right-0 top-1/3 -z-40 h-[350px] w-[350px] rounded-full bg-blue-500/35 blur-[170px]" />

      {/* Bottom Glow */}
      <div className="fixed bottom-0 left-0 -z-40 h-[350px] w-[350px] rounded-full bg-fuchsia-600/15 blur-[120px]" />
    </>
  );
}