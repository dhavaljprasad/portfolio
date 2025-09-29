"use client";
import React, { useState } from "react";
import Card from "./card";

const EducationArray = [
  {
    img: "https://res.cloudinary.com/dli14hm5i/image/upload/v1759164994/IIT_Madras_Logo_xz0ww4.jpg",
    name: "Indian Institute of Technology, Madras",
    duration: "Sep 2023 - Present",
    description: [
      "Not an academic person, just trying to study a night before and wing it the next morning! 😆",
    ],
    role: "Jumping b/w cs and ai",
  },
  {
    img: "https://res.cloudinary.com/dli14hm5i/image/upload/v1759164993/JBA_Logo_dcgn5p.jpg",
    name: "JB Academy, Ayodhya",
    duration: "Apr 2008 - Mar 2023",
    description: [
      "⛺ Survived 3 years in Scouts & Guides, somehow learned discipline and tying fancy knots.",
      "🎭 Starred (and sometimes flopped) in countless plays, dramas, singing, and dancing, even bagged a few wins along the way.",
      "✏️ Spent half my school life sketching random stuff, and yes, some even made it into the school annual magazine!",
      "📰 Took charge of wall magazine projects: basically the school’s Pinterest before Pinterest existed.",
      "🏃‍♂️ Once crowned Under-16 Athletics Champion (flex), and ran like my ex was chasing me.",
      "⚽ Played football all the way up to district level, still waiting for that Real Madrid call 📞.",
      "🧗‍♂️ Did basic mountaineering training at Camp Bagicha (annual school trip) where Team Altitudes made us feel like mini Sherpas every year from class 2nd to 9th.",
      "🎬 Head of the Media Lab, where I directed short films, made music videos, and even grabbed a few awards (Nolan vibes).",
      "🏅 Twice the Sports Captain of my house, which basically means I have an excuse to bunk classes, but hey, leadership!",
    ],

    role: "Mess Maker / Class Clown / Chief Fun Officer / Chaos Coordinator",
  },
];

function EducationSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <h1 className="text-xl lg:text-2xl font-bold text-white">Education</h1>
      <div className="flex flex-col gap-2">
        {EducationArray.map((place, index) => (
          <Card
            key={index}
            data={place}
            open={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default EducationSection;
