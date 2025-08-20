"use client";

import React from "react";

function Tile({ data }) {
  return (
    <div className="flex items-center justify-center w-auto h-auto px-2 py-1 bg-white rounded-md">
      <span className="text-sm font-medium">{data}</span>
    </div>
  );
}

export default Tile;
