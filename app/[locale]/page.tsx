import { AboutSection } from "@/components/main/about-section";
import { ContactSection } from "@/components/main/contact-section";
import { FoundersSection } from "@/components/main/founders-section";
import { GallerySection } from "@/components/main/gallery-section";
import { HeroSection } from "@/components/main/hero-section";
import { ProjectsSection } from "@/components/main/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FoundersSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
