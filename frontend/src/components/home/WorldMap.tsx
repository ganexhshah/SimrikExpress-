import React from "react";

interface WorldMapProps {
  className?: string;
  opacity?: number;
}

export default function WorldMap({ className = "", opacity = 0.08 }: WorldMapProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden select-none flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      {/* Subtle Transparent World Map Dots Layer with smooth radial feather mask */}
      <div
        className="w-full h-full min-h-[500px] max-w-[1600px] mx-auto bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url('/assets/hero/World-Map-Dots.svg')`,
          opacity,
          maskImage:
            "radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 50%, black 25%, transparent 75%)",
        }}
      />

      {/* Smooth feather fades to #F8FAFC at all edges to completely eliminate hard cut-off lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-transparent to-[#F8FAFC] pointer-events-none opacity-80" />
    </div>
  );
}
