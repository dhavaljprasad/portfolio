"use client";

import React from "react";

function Card({ data }) {
  return (
    <div className="w-full h-24 flex items-center justify-between cursor-pointer lg:h-24">
      <div className="w-auto h-full flex items-center gap-2 lg:gap-4">
        <img
          src={data.img}
          alt="dummy"
          className="w-10 h-10 rounded-full object-cover sm:w-16 sm:h-16 lg:w-22 lg:h-22"
        />
        <div className="flex flex-col">
          <h2 className="text-sm font-bold text-white sm:text-md lg:text-lg">
            {data.name}
          </h2>
          <p className="text-xs text-gray-400 sm:text-md lg:text-md">
            {data.role}
          </p>
        </div>
      </div>
      <span className="text-gray-400 text-xs sm:text-sm lg:text-sm">
        {data.duration}
      </span>
    </div>
  );
}

export default Card;
