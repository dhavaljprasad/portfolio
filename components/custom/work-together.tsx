"use client";
import { WordRotate } from "../ui/word-rotate";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Separator } from "@base-ui/react";
import { on } from "events";

const onBookCall = () => {
  window.open("https://cal.com/dhavaljprasad", "_blank", "noopener");
};

const onMessageMe = () => {
  window.open("https://t.me/dhavaljprasad", "_blank", "noopener");
};

export const WorkTogetherSection = () => {
  return (
    <div className="w-full h-fit flex flex-col items-start justify-center gap-4">
      <h2 className="text-xl font-semibold text-text-primary">
        Let&apos;s Work Together
      </h2>
      <div className="w-full relative overflow-hidden rounded-xl group shadow-lg">
        {/* Image Container */}
        <div className="relative aspect-[1/1] sm:aspect-[3/2] lg:aspect-[21/9]">
          <img
            src="https://res.cloudinary.com/dli14hm5i/image/upload/q_auto/f_auto/v1776657080/work-together_cbtoun.jpg"
            alt="work-together"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Stronger Gradient Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4 sm:p-8 md:p-12">
            {/* Rotating Text */}
            <div
              style={{
                fontFamily: "var(--font-story-script)",
                textShadow: "0 2px 16px rgba(0,0,0,0.45)",
              }}
              className="w-full text-center"
            >
              <WordRotate
                words={[
                  "Ready to start on a project?",
                  "Wanna ship MVP in Days? not months?",
                  "Looking for a cracked engineer?",
                  "Need someone to fix your codebase?",
                  "Let's add that AI feature you always wanted?",
                ]}
                duration={5000}
                className="text-2xl sm:text-4xl font-medium text-white drop-shadow-lg"
              />
            </div>

            {/* Description */}
            <p className="max-w-2xl text-center text-xs sm:text-sm text-white/90 drop-shadow-md">
              From sleek web applications to powerful mobile apps, I craft
              digital products that combine beautiful design with robust
              engineering to drive real business results.
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <InteractiveHoverButton
                className="bg-white/90 text-black text-xs sm:text-base font-semibold rounded-full px-6 py-2 shadow-md hover:text-white"
                onClick={() => onBookCall()}
              >
                Book a Call
              </InteractiveHoverButton>
              <Separator
                orientation="vertical"
                className="bg-white w-1 h-10 rounded-xs"
              />
              <InteractiveHoverButton
                className="bg-white/90 text-black text-xs sm:text-base font-semibold rounded-full px-6 py-2 shadow-md hover:text-white"
                onClick={() => onMessageMe()}
              >
                Message Me
              </InteractiveHoverButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
