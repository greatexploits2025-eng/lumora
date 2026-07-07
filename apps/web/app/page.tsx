import CinematicBackground from "@/components/background/CinematicBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Hero, TrustedBy, Features, Statistics, Testimonials, Pricing } from "@/features/landing";
import { AIShowcase } from "@/features/showcase";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CinematicBackground />
      <Navbar />
      <Hero />
      <TrustedBy />
      <AIShowcase />
      <Features />
      <Statistics />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
