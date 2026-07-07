import CinematicBackground from "@/components/background/CinematicBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Hero, TrustedBy, Features, Statistics, Testimonials, Pricing } from "@/features/landing";
import { StudioPreview } from "@/features/studio";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <CinematicBackground />
      <Navbar />
      <Hero />
      <TrustedBy />
      <StudioPreview />
      <Features />
      <Statistics />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
