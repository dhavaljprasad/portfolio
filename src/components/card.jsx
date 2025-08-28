"use client";
import React from "react";

function Card({ data, open = false, onToggle }) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-2">
      {/* Header */}
      <div
        className="w-full h-14 flex items-center justify-between cursor-pointer lg:h-24"
        onClick={onToggle}
      >
        <div className="w-auto h-full flex items-center gap-2 lg:gap-4">
          <img
            src={data.img}
            alt="dummy"
            className="w-10 h-10 rounded-full object-cover sm:w-16 sm:h-16 lg:w-22 lg:h-22"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-bold text-white sm:text-base lg:text-lg">
              {data.name}
            </h2>
            <p className="text-xs text-gray-400 sm:text-base">{data.role}</p>
          </div>
        </div>
        <span className="text-gray-400 text-xs text-right sm:text-sm lg:text-sm">
          {data.duration}
        </span>
      </div>

      {/* Expandable Section */}
      <div
        className={`w-full flex flex-col justify-center px-10 sm:px-16 lg:px-22 
          overflow-hidden transition-all duration-750 ease-in-out
          ${open ? "max-h-300 md:max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="list-disc list-inside">
          {data?.description?.map((desc, index) => (
            <li key={index} className="text-xs text-white mb-2 md:text-sm">
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
