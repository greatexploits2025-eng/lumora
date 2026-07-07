import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CinematicBackground from "@/components/background/CinematicBackground";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CinematicBackground />
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
