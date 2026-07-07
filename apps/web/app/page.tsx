import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CinematicBackground from "@/components/background/CinematicBackground";

import Hero from "@/features/landing/Hero";
import TrustedBy from "@/features/landing/TrustedBy";
import AIShowcase from "@/features/showcase/AIShowcase";
import Features from "@/features/landing/Features";
import Statistics from "@/features/landing/Statistics";
import Testimonials from "@/features/landing/Testimonials";
import Pricing from "@/features/landing/Pricing";

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
