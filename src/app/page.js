"use client";
import AboutMeSection from "@/components/aboutMeSection";
import EducationSection from "@/components/educationSection";
import FloatingBar from "@/components/floatingBar";
import HeroSection from "@/components/heroSection";
import SkillsSection from "@/components/skillsSection";

export default function Home() {
  return (
    <div className="h-auto w-full flex items-center justify-center bg-neutral-950">
      <div className="max-w-[1200px] h-full flex flex-col items-center gap-16 p-40">
        {/* Hero Section */}
        <HeroSection />

        {/* About Me */}
        <AboutMeSection />

        {/* Education */}
        <EducationSection />

        {/* Skills */}
        <SkillsSection />

        <FloatingBar />
      </div>
    </div>
  );
}
