"use client";

import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-auto flex items-center justify-between gap-16 lg:flex-row flex-col-reverse">
      <div className=" w-full flex flex-col gap-16 lg:w-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white lg:text-4xl">
            Hi, Dhaval here
          </h1>
          <p className="text-sm text-gray-400 lg:text-md">
            21, into code, AI, and breaking things (then fixing them).
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-white lg:text-2xl">About</h1>
          <ul className="text-gray-400 flex flex-col gap-2 text-sm lg:text-md">
            <li>I build things by breaking them</li>
            <li>I like technology and astrophysics, they stop time for me</li>
            <li>
              I spent my other hours playing football, making films, and
              appreciating art
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center w-60 h-60 rounded-full overflow-hidden lg:w-80 lg:h-80">
        <img src="me.png" alt="Dhaval" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default HeroSection;
