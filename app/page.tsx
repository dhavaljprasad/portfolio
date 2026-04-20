"use client";

import { GithubContributions } from "@/components/custom/contributions";
import { ExperienceSection } from "@/components/custom/experience";
import { PersonalSection } from "@/components/custom/personal";
import { ProfileHero } from "@/components/custom/profile-hero";
import { TechStackSection } from "@/components/custom/tech-stack";
import { WorkTogetherSection } from "@/components/custom/work-together";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-start justify-center bg-background-primary scroll-y-auto">
      <div className="w-full flex flex-col gap-6 p-4 sm:w-xl md:w-4xl md:py-8">
        <ProfileHero />
        <GithubContributions />
        <ExperienceSection />
        <TechStackSection />
        <WorkTogetherSection />
        <PersonalSection />
      </div>
    </div>
  );
}
