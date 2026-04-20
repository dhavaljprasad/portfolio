"use client";

import { useEffect, useState } from "react";
import { PulsatingButton } from "./button";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const socialsData = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/dhavaljprasad/",
  },
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/dhavaljprasad",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/dhavaljprasad",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/dhaval-j-prasad/",
  },
];

export const ProfileHero = () => {
  const [time, setTime] = useState("0y, 0m, 0d, 00:00:00");

  const getElapsedTime = (): string => {
    const now = new Date();
    const START_DATE = new Date("2004-08-04T00:00:00");
    const diff = now.getTime() - START_DATE.getTime();

    const secondsTotal = diff / 1000;

    const years = Math.floor(secondsTotal / (365.25 * 24 * 3600));
    const months = Math.floor(
      (secondsTotal % (365.25 * 24 * 3600)) / (30 * 24 * 3600),
    );
    const days = Math.floor((secondsTotal % (30 * 24 * 3600)) / (24 * 3600));

    const remainingSeconds = secondsTotal % (24 * 3600);

    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = Math.floor(remainingSeconds % 60);

    return `${years}y, ${months}m, ${days}d, ${String(hours).padStart(
      2,
      "0",
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getElapsedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const navigateToHireMe = () => {
    window.open("https://t.me/dhavaljprasad", "_blank", "noopener");
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Video Banner */}
      <div className="w-full aspect-[2/1] sm:aspect-[4/1] md:aspect-[90/15] overflow-hidden rounded-sm">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover object-right md:object-center"
          src="https://res.cloudinary.com/dli14hm5i/video/upload/q_auto/f_auto/v1776383053/Portfolio_Banner_Video_r9otwn.mp4"
        />
      </div>

      {/* Content (overlapping using margin, NOT absolute) */}
      <div className="w-full flex flex-col gap-4 items-center justify-center -mt-16 sm:-mt-8 md:-mt-10 ">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 px-2 sm:px-4 md:px-10">
          {/* Left */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-28 h-28 sm:w-20 sm:h-20 md:w-28 md:h-28 border-4 border-background-primary rounded-sm overflow-hidden">
              <img
                src="https://res.cloudinary.com/dli14hm5i/image/upload/v1773624270/ChatGPT_Image_Jan_15_2026_07_37_32_PM_abe9ai.png"
                alt="dhaval's pfp"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col items-center sm:items-start gap-1 sm:mt-6 md:mt-10">
              <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-center sm:text-left">
                Dhaval J Prasad
              </h1>
              <span className="text-sm text-text-secondary">{time}</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center sm:items-end gap-2 sm:mt-6 md:mt-10">
            <PulsatingButton
              text="Hire Me Now"
              onClick={() => navigateToHireMe()}
            />

            <div className="flex gap-3">
              {socialsData.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      size={20}
                      className="text-background-ternary hover:text-white cursor-pointer transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-sm sm:text-sm md:text-base text-justify w-full">
          <span className="text-text-primary font-semibold">
            Senior Software Engineer
          </span>{" "}
          building production-grade web platforms, AI-powered products, and
          scalable systems. Experienced in Next.js, React, FastAPI, and
          distributed backend architectures. I focus on clean UI, performance,
          and shipping real products—from GenAI agents and RAG systems to
          data-heavy dashboards and automation pipelines.
        </p>
      </div>
    </div>
  );
};
