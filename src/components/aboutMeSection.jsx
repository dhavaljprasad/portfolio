"use client";
import React, { useState } from "react";
import Card from "./card";

const PlacesArray = [
  {
    img: "https://res.cloudinary.com/dli14hm5i/image/upload/v1759164993/Moonkind_Logo_zyoymo.jpg",
    name: "Moonkind",
    duration: "Sep 2025 - Present",
    description: [
      "Built V2 consumer side entire application in 3 weeks with sleek minamilist UI and some additional features. Check it out at www.moonkind.ai",
    ],
    role: "Senior Software Engineer",
  },
  {
    img: "https://res.cloudinary.com/dli14hm5i/image/upload/v1759164994/AI4Bharat_Logo_b9pkk6.jpg",
    name: "AI4Bharat",
    duration: "Jan 2025 - Aug 2025",
    description: [
      "Refactored and optimized frontend codebases (Anudesh, Shoonya, Chitralekha) to enhance performance,maintainability, and responsiveness across 15+ page components.",
      "Planned and migrated two PostgreSQL tables (~20M rows each) to updated fields and schema, ensuring data integrity and zero downtime. Also refactored and updated associated APIs to align with the new schema, improving performance and maintainability.",
      "Resolved performance bottlenecks in User Analytics APIs by optimizing Django logic and PostgreSQL queries, reducing response time by 40% and increasing data accuracy.",
      "Built CI/CD pipelines using GitHub Actions and Playwright to automate frontend testing across major projects; authored standardized documentation adopted across the org.",
      "Developed automated backend testing suite with GitHub Actions, Django Test framework, and Locust, ensuring API stability under load; published reusable company-wide setup docs.",
    ],
    role: "Software Engineer",
  },
  {
    img: "https://res.cloudinary.com/dli14hm5i/image/upload/v1759164994/Rhombuz_Logo_lmfpeu.jpg",
    name: "Rhombuz",
    duration: "Jul 2023 - Dec 2024",
    description: [
      "Led Swagger-based API testing tool for T-Mobile; implemented real-time parsing, offline mocking, and download features via intuitive UI powered by React.",
      "Delivered performant backend services for Mercedes and Infosys data platforms, accelerating data pipelines and dynamic PDF generation using Express and Puppeteer.",
      "Designed a predictive data platform for FAO (UN agency), handling agriculture donations via data ingestion, processing, and real-time monitoring (React + Python).",
      "Created barcode-scanning React Native app for Tomra USA to facilitate plastic recycling workflows across mobile platforms.",
      "Built modular data widgets and REST APIs for a T-Mobile analytics dashboard to visualize KPIs and trends in production.",
      "Designed and published a custom component library on npm with reusable React UI components for cross-project scalability; enabled prop-based theming and styling.",
      "Engineered interactive data visualizations using D3 and ChartJS; enhanced render efficiency and added mouse interactions, improving user analytics UX.",
    ],
    role: "Full Stack Developer",
  },
];

function AboutMeSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-auto flex flex-col gap-4">
      <h1 className="text-xl lg:text-2xl font-bold text-white">
        Cool places I worked at
      </h1>
      <div className="flex flex-col gap-2">
        {PlacesArray.map((place, index) => (
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

export default AboutMeSection;
