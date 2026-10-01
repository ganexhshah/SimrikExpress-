"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface HeroSlide {
  src: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    src: "/assets/hero/1.jpg",
    alt: "Himalayan mountaineers at high-altitude summit camp",
  },
  {
    src: "/assets/hero/2.jpg",
    alt: "Sherpa mountain guide traversing Himalayan alpine ridge",
  },
  {
    src: "/assets/hero/3.jpg",
    alt: "Mountaineers with Simrik Express expedition banner",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Smooth continuous autoplay
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div
      ref={sliderRef}
      role="region"
      aria-label="Nepal Himalayan Adventure Slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full max-w-[440px] mx-auto lg:max-w-[480px] xl:max-w-[520px] select-none py-4 px-4 sm:px-6"
    >
      {/* Signature Teal Geometric Accent Frame behind image */}
      <div
        className="absolute top-2 right-2 bottom-4 left-10 sm:top-0 sm:right-0 sm:bottom-2 sm:left-12 border-4 sm:border-[5px] border-[#0B6E8E] -z-10 rounded-2xs pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Clean Image Container without text overlays */}
      <div className="relative aspect-[4/5] sm:aspect-[4/5.2] w-full bg-slate-100 rounded-2xs overflow-hidden shadow-xl border border-slate-200/90">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 520px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
