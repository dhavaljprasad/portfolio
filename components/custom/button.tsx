"use client";

export const PulsatingButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-2 px-3 py-1 rounded-sm cursor-pointer bg-background-secondary overflow-hidden transition-all duration-300 hover:bg-live"
    >
      {/* pulse layers */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-live opacity-75 animate-ping"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-live"></span>
      </span>

      {/* text */}
      <span className="text-text-primary text-sm transition-all duration-300 group-hover:text-white group-hover:mx-auto">
        {text}
      </span>
    </button>
  );
};
