"use client";
import React from "react";
import Card from "./card";

const EducationArray = [
  {
    img: "https://media.licdn.com/dms/image/v2/C4D0BAQGqbSuxjLqtWQ/company-logo_200_200/company-logo_200_200/0/1659504006681/reachiitm_logo?e=1758758400&v=beta&t=dNjHz-3b4iUHBs6ndXyBPo_mhr-2obLrUz01KF-nmp4",
    name: "Indian Institute of Technology, Madras",
    duration: "Sep 2023 - Present",
    description: "",
    role: "Jumping b/w cs and ai",
  },
];

function EducationSection() {
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <h1 className="text-xl lg:text-2xl font-bold text-white">Education</h1>
      <div className="flex flex-col gap-2">
        {EducationArray.map((place, index) => (
          <Card key={index} data={place} />
        ))}
      </div>
    </div>
  );
}

export default EducationSection;
