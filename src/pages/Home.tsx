/**
 * Vigil Studios — Home Page
 * Design: Neo-Brutalist Street Art / Graphic Novel Print
 * Assembles all sections with the full page layout.
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroesSection from "@/components/HeroesSection";
import ComicsSection from "@/components/ComicsSection";
import UniverseSection from "@/components/UniverseSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "oklch(0.09 0.005 280)" }}
    >
      <Navbar />
      <HeroSection />
      <HeroesSection />
      <ComicsSection />
      <UniverseSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
