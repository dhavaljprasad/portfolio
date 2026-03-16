"use client";

import { useEffect, useState } from "react";
import { PulsatingButton } from "./button";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const BannerImageData = [
  {
    type: "image",
    url: "https://res.cloudinary.com/dli14hm5i/image/upload/v1773622185/Personal%20Projects%20Dev/New%20Portfolio%20Website/3b4398b13744e2ac3cf4d267778e0b2d_esjkbs_bb8665.jpg",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dli14hm5i/image/upload/v1773623644/87199dfe3f83fbf0d5a31f138bdec20d_w9ci10.jpg",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dli14hm5i/image/upload/v1773623748/74fcb62ce2b570b82d0c1f55705c0ad2_waxx6x.jpg",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dli14hm5i/image/upload/v1773623644/27a82053e12cee498604ac12d23a96ae_hu4bly.jpg",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/dli14hm5i/image/upload/v1773623699/0757fb7051f0b7f9877217f83433cf0a_syo3vx.jpg",
  },
];

export const ProfileHero = () => {
  const [time, setTime] = useState(getElapsedTime());

  function getElapsedTime(): string {
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
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getElapsedTime());
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-2 rounded-sm relative">
      <img
        src={
          "https://res.cloudinary.com/dli14hm5i/image/upload/v1773622185/Personal%20Projects%20Dev/New%20Portfolio%20Website/3b4398b13744e2ac3cf4d267778e0b2d_esjkbs_bb8665.jpg"
        }
        alt="banner header image"
        className="aspect-[90/15] object-cover rounded-sm"
      />
      <div className="w-full flex items-center justify-between absolute top-[15vh] px-10">
        <div className="w-auto h-auto flex items-center justify-center gap-2">
          <div className="w-30 h-30 border border-4 border-background-primary rounded-sm">
            <img
              src={
                "https://res.cloudinary.com/dli14hm5i/image/upload/v1773624270/ChatGPT_Image_Jan_15_2026_07_37_32_PM_abe9ai.png"
              }
              alt="dhaval's pfp"
              className="w-full w-full"
            />
          </div>
          <div className="w-auto flex flex-col gap-1 mt-10">
            <h1 className="text-4xl font-bold">Dhaval J Prasad</h1>
            <span className="text-sm text-text-secondary">{time}</span>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-col items-end justify-center gap-2 mt-10">
          <PulsatingButton text="Hire Me Now" onClick={() => {}} />
          <div className="flex items-center justify-center gap-2">
            <FiGithub
              className="text-background-ternary hover:text-white cursor-pointer"
              size={22}
            />
            <FaXTwitter
              className="text-background-ternary hover:text-white cursor-pointer"
              size={22}
            />
            <FaLinkedinIn
              className="text-background-ternary hover:text-white cursor-pointer"
              size={22}
            />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <p className="text-text-secondary text-justify">
          <span className="text-text-primary">Senior Software Engineer</span>{" "}
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
