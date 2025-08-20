"use client";
import React from "react";
import Card from "./card";

const PlacesArray = [
  {
    img: "https://media.licdn.com/dms/image/v2/D4D0BAQEO2nm_9abw4w/company-logo_200_200/company-logo_200_200/0/1694915161576/cleandirty_logo?e=1758758400&v=beta&t=FxsOwxsQ-MXoCLwbFKF2NcaDb6NWafrPfJaqhmCgRUM",
    name: "Clean Dirty Narrative Lab",
    duration: "Sep 2025 - Present",
    description: "",
    role: "AI Product Engineer",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/D560BAQEDTmEppqRjDQ/company-logo_200_200/company-logo_200_200/0/1698650842101/ai4bharat_logo?e=1758758400&v=beta&t=yZ6lOz3crgLuOSQBkyIvrTeT3gAc-TrF7_R_mb9qqOc",
    name: "AI4Bharat Lab",
    duration: "Jan 2025 - Aug 2025",
    description: "",
    role: "Full Stack Developer",
  },
  {
    img: "https://media.licdn.com/dms/image/v2/C560BAQErwPfuX4inZQ/company-logo_200_200/company-logo_200_200/0/1636395753229/rhombuz_logo?e=1758758400&v=beta&t=R75FztEiITOpq2_2yyTviuPokfRbZlTIU59wUJSlNYE",
    name: "Rhombuz",
    duration: "Jul 2023 - Dec 2024",
    description: "",
    role: "Full Stack Developer",
  },
];

function AboutMeSection() {
  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <h1 className="text-xl lg:text-2xl font-bold text-white">
        Cool places I worked at
      </h1>
      <div className="flex flex-col gap-2">
        {PlacesArray.map((place, index) => (
          <Card key={index} data={place} />
        ))}
      </div>
    </div>
  );
}

export default AboutMeSection;
