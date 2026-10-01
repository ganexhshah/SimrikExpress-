"use client";

import React from "react";
import {
  LiquidGlassCarousel,
  LiquidGlassCarouselItem,
} from "@/components/ui/liquid-glass-carousel";

const himalayanTrekItems: LiquidGlassCarouselItem[] = [
  {
    title: "Annapurna Sanctuary",
    src: "/assets/packages/1.jpg",
    aspect: 3 / 4,
  },
  {
    title: "Everest Base Camp",
    src: "/assets/packages/2.jpg",
    aspect: 3 / 4,
  },
  {
    title: "Langtang Alpine Valley",
    src: "/assets/packages/3.jpg",
    aspect: 3 / 4,
  },
  {
    title: "Manaslu Larkya La Pass",
    src: "/assets/packages/4.webp",
    aspect: 3 / 4,
  },
  {
    title: "Gokyo Emerald Lakes",
    src: "/assets/packages/gokyo-renjo.jpg",
    aspect: 3 / 4,
  },
  {
    title: "Himalayan Ridge & Glaciers",
    src: "/assets/hero/1.jpg",
    aspect: 3 / 4,
  },
  {
    title: "High Altitude Sherpa Trails",
    src: "/assets/hero/2.jpg",
    aspect: 3 / 4,
  },
  {
    title: "Sacred Summit Vistas",
    src: "/assets/hero/3.jpg",
    aspect: 3 / 4,
  },
];

export default function LiquidGlassSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 bg-white overflow-hidden select-none">
      <div className="relative h-[480px] sm:h-[560px] lg:h-[620px] w-full">
        {/* Left Side Blur & Soft Vignette Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 lg:w-44 z-20 bg-gradient-to-r from-white via-white/85 to-transparent backdrop-blur-xs" />

        {/* Right Side Blur & Soft Vignette Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 lg:w-44 z-20 bg-gradient-to-l from-white via-white/85 to-transparent backdrop-blur-xs" />

        <LiquidGlassCarousel
          items={himalayanTrekItems}
          entry={false}
          background="#ffffff"
          panelHeight={460}
          gap={16}
        />
      </div>
    </section>
  );
}
