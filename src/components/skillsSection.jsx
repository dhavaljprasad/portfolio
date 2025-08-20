"use client";
import React from "react";
import Tile from "@/components/tile";

const SkillsArray = [
  "JavaScript",
  "TypeScript",
  "Python",
  "ReactJs",
  "NextJs",
  "NodeJs",
  "ExpressJs",
  "Flask",
  "Django",
  "MongoDB",
  "PostgreSQL",
  "Shitposting",
  "Sleeping",
  "DoomScrolling",
];

function SkillsSection() {
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-white">Skills</h1>
      <div className="flex flex-wrap gap-2">
        {SkillsArray.map((skill, index) => (
          <Tile key={index} data={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;
