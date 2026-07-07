import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import AIShowcase from "@/components/showcase/AIShowcase";
import Features from "@/components/landing/Features";
import Statistics from "@/components/landing/Statistics";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import CinematicBackground from "@/components/background/CinematicBackground";

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
