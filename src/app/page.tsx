import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MethodologySection } from "@/components/methodology-section";
import { TeachersMarquee } from "@/components/teachers-marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Header / Nav */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Teachers Marquee Section (Off-white section from Figma) */}
      <TeachersMarquee />
      {/* Methodology & Teachers Feature Section */}
      <MethodologySection />
    </main>
  );
}
