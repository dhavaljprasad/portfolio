"use client";

import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-auto flex items-center justify-center gap-16">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold text-white">Hi, Dhaval here</h1>
          <p className="text-lg text-gray-400">
            21, into code, AI, and breaking things (then fixing them).
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white">About</h1>
          <ul className="text-gray-400 flex flex-col gap-2">
            <li>I build things by breaking them</li>
            <li>I like technology and astrophysics, they stop time for me</li>
            <li>
              I spent my other hours playing football, making films, and
              appreciating art
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center h-100 rounded-full overflow-hidden">
        <img src="me.png" alt="Dhaval" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default HeroSection;
