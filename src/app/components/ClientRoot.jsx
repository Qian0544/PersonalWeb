"use client";
import { LanguageProvider } from "../context/LanguageContext";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AchievementsSection from "./AchievementsSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import EmailSection from "./EmailSection";
import Footer from "./Footer";

export default function ClientRoot() {
  return (
    <LanguageProvider>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
}
