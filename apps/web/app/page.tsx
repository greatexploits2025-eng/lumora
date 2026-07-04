import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import AnimatedBackground from "@/components/background/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816]">
       <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}