"use client";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const experienceData = [
  {
    company: "MoonKind",
    logo: "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776553064/moonkindcd_logo_gibslv.jpg",
    designation: "AI Product Engineer",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/moonkindcd/",
      },
    ],
    time: "Sep'25 - Present",
    location: "Remote",
    pointers: [
      "Architected and scaled the core system for Quillo Club, owning ~60% of frontend (Next.js, TailwindCSS, ShadCN), developing core modules, and designing AI backend workflows using LangGraph with OpenAI (Python SDK) and Replicate; delivered 20+ APIs and integrated Cashfree for payments.",
      "Designed and launched the Character Messenger feature (0→1) from concept to production, leading research, validation, MVP development, and release; orchestrated LLM workflows using GPT tools and implemented RAG-based long-term memory with Pinecone.",
      "Engineered the Trailer Reels automation pipeline from scratch, integrating AI video generation via Replicate and implementing OpenCV-based face detection and smart auto-cropping to optimize video inputs.",
      "Built the end-to-end content platform moonkind.ai from scratch with a clean, minimalist UI; implemented secure authentication via Clerk, payment processing with Cashfree, and integrated product analytics using PostHog.",
      "Serving as a Design Engineer for consumer and writer platforms, delivering scalable UI systems and enhancing user experience across products.",
    ],
  },
  {
    company: "AI4Bharat",
    logo: "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776553064/ai4bharat_logo_pij0k9.jpg",
    designation: "Software Engineer",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/ai4bharat/",
      },
      {
        label: "Website",
        url: "https://ai4bharat.iitm.ac.in/",
      },
    ],
    time: "Jan'25 - Aug'25",
    location: "IIT, Madras",
    pointers: [
      "Planned and executed migration of two PostgreSQL tables (~20M rows each) to an updated schema with zero downtime and full data integrity; refactored associated APIs to align with the new structure, improving performance and maintainability.",
      "Improved performance of User Analytics APIs for Anudesh and Shoonya by optimizing Django-based data processing and PostgreSQL queries, resulting in faster response times and more accurate analytics.",
      "Enhanced frontend performance and maintainability for Anudesh, Shoonya, and Chitralekha through targeted refactoring, and delivered responsive UI implementations across multiple pages for consistent cross-device experience.",
      "Built end-to-end CI/CD pipelines with GitHub Actions, integrating Playwright, Locust, and Django Testing to automate testing across Anudesh, Shoonya, and Chitralekha, significantly improving deployment reliability and establishing company-wide standards through documentation.",
    ],
  },
  {
    company: "Cupric",
    logo: "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776553064/cupric_logo_dpnokv.jpg",
    designation: "Co-Founder & CTO",

    time: "Aug'24 - Dec'24",
    location: "Remote",
    pointers: [
      "Worked as Engineer, Designer, Marketer, Social Media Manager, DevOps, HR, Analyst, Data Scientist to break big into health tech",
    ],
  },
  {
    company: "Rhombuz",
    logo: "https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776553064/rhombuz_logo_sks5pj.jpg",
    designation: "Software Engineer",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/company/rhombuz/",
      },
      {
        label: "Website",
        url: "https://rhombuz.io/",
      },
    ],
    time: "Jul'23 - Dec'24",
    location: "Remote",
    pointers: [
      "Led development of a frontend system for T-Mobile (USA) to parse and structure Swagger files, building an intuitive UI for API testing with offline dummy response generation and JSON export support.",
      "Worked on a data-intensive full-stack system for Mercedes Global and Infosys, optimizing backend computation pipelines and developing frontend modules for dynamic PDF generation.",
      "Developed a cross-platform mobile application for Tomra (USA) using React Native, enabling users to apply for plastic bottle recycling through real-time barcode scanning.",
      "Engineered data-centric graph visualizations for AlphamatricX using D3.js and Chart.js, reducing rendering latency and introducing interactive elements to enhance user-level data insights.",
    ],
  },
];

export const ExperienceSection = () => {
  const [expandedIndex, setExpanededIndex] = useState<number | null>(null);

  const expandExperience = (index: number) => {
    if (index === expandedIndex) {
      setExpanededIndex(null);
    } else {
      setExpanededIndex(index);
    }
  };

  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-2">
      <h2 className="text-xl font-semibold text-text-primary">Experience</h2>
      <div className="w-full h-auto flex flex-col items-start justify-start sm:gap-1 md:gap-2">
        {experienceData.map((item, index) => {
          return (
            <ExperienceCard
              data={item}
              key={index}
              expanded={expandedIndex === index}
              onClick={() => expandExperience(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

type LinksType = {
  label: string;
  url: string;
};

type ExperienceCardType = {
  company: string;
  logo: string;
  designation: string;
  links?: LinksType[];
  time: string;
  location: string;
  pointers: string[];
};

export const ExperienceCard = ({
  data,
  expanded,
  onClick,
}: {
  data: ExperienceCardType;
  expanded: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="w-full h-auto flex flex-col items-start justify-start cursor-pointer group"
      onClick={onClick}
    >
      {/* premier section */}
      <div className="w-full h-18 w-18 sm:h-16 md:h-20 flex items-center justify-between cursor-pointer">
        {/* left section  */}
        <div className="flex items-center justify-start gap-2">
          <img
            src={data.logo}
            alt="Org logo"
            className="h-16 w-16 sm:w-14 sm:h-14 md:w-18 md:h-18 rounded-sm"
          />
          <div className="flex flex-col items-start justify-center gap-1">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <span className="text-text-primary text-sm sm:text-lg md:text-xl font-semibold">
                {data.company}
              </span>
              {data.links?.map((item, index) => {
                const Icon =
                  item.label === "LinkedIn"
                    ? FaLinkedinIn
                    : item.label === "Website"
                      ? CgWebsite
                      : null;

                if (!Icon) return null;

                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      className={`
                            cursor-pointer transition-all duration-300
                            group-hover:scale-110 text-sm sm:text-lg md:text-xl
                            ${
                              expanded
                                ? item.label === "LinkedIn"
                                  ? "text-blue-600"
                                  : "text-green-500"
                                : `text-text-secondary ${
                                    item.label === "LinkedIn"
                                      ? "group-hover:text-blue-600"
                                      : "group-hover:text-green-500"
                                  }`
                            }
                        `}
                    />
                  </a>
                );
              })}
              {expanded ? (
                <IoIosArrowDown className="text-text-secondary text-sm sm:text-lg md:text-xl" />
              ) : (
                <IoIosArrowDown className="text-text-secondary rotate-270 text-sm sm:text-lg md:text-xl" />
              )}
            </div>
            <span className="text-text-secondary text-xs sm:text-sm font-semibold">
              {data.designation}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-1">
          <span className="text-text-secondary text-xs sm:text-sm font-semibold">
            {data.time}
          </span>
          <span className="text-text-secondary text-xs sm:text-sm font-semibold">
            {data.location}
          </span>
        </div>
      </div>

      <div
        className={`w-full flex flex-col pl-20 gap-2 overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "max-h-[50rem] opacity-100 mt-2" : "max-h-0 opacity-0"}
  `}
      >
        {data.pointers.map((items, index) => {
          return (
            <li
              key={index}
              className="text-sm sm:text-sm text-text-secondary hover:text-text-primary"
            >
              {items}
            </li>
          );
        })}
      </div>
    </div>
  );
};
