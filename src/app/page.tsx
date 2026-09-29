import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TeachersMarquee } from "@/components/teachers-marquee";
import { SmartStudySection } from "@/components/smart-study-section";
import { TeachersImageBanner } from "@/components/teachers-image-banner";
import { WhyStartSection } from "@/components/why-start-section";
import { CoursesSection } from "@/components/courses-section";
import { SubjectsAndCtaSection } from "@/components/subjects-cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Header / Nav */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Teachers Marquee Section */}
      <TeachersMarquee />
      {/* Teachers Image Banner */}
      <TeachersImageBanner />
      {/* Smart Study 3-Card Methodology Section */}
      <SmartStudySection />
      {/* Latest Workshops & Reviews Section */}
      <CoursesSection />
      {/* Why Start With Us 4-Card Feature Section */}
      <WhyStartSection />
      {/* Subjects Badges & Final Conversion CTA Section */}
      <SubjectsAndCtaSection />
      {/* Comprehensive 4-Column Footer Section */}
      <Footer />
    </main>
  );
}

