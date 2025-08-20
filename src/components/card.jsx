"use client";

import React from "react";

function Card({ data }) {
  return (
    <div className="w-full h-24 flex items-center justify-between cursor-pointer">
      <div className="w-auto h-full flex items-center gap-4">
        <img
          src={data.img}
          alt="dummy"
          className="w-22 h-22 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-white">{data.name}</h2>
          <p className="text-md text-gray-400">{data.role}</p>
        </div>
      </div>
      <span className="text-gray-400 text-sm">{data.duration}</span>
    </div>
  );
}

export default Card;
