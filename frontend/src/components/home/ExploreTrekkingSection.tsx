import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function ExploreTrekkingSection() {
  return (
    <section className="relative w-full pt-8 pb-2 sm:pt-10 sm:pb-4 bg-[#F8FAFC] overflow-hidden">
      {/* 1. Full-Bleed Mountain Background Image: /assets/hero/2.svg (strictly black and white) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="relative w-full h-full opacity-18 sm:opacity-22 transition-opacity grayscale contrast-125">
          <Image
            src="/assets/hero/2.svg"
            alt="Nepal Himalayan Skyline Backdrop"
            fill
            unoptimized
            priority={false}
            className="object-cover object-top grayscale"
          />
        </div>

        {/* Soft atmospheric white feathering at top and bottom */}
        <div className="absolute inset-x-0 top-0 h-14 sm:h-20 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent" />
      </div>

      {/* 2. Foreground Content matching reference design */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Left Title with Accent Line, Right Text & Button */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mb-6 sm:mb-8">
          {/* Left Title */}
          <div className="flex flex-col items-start text-left">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#64748B] uppercase">
              EXPLORE OUR
            </span>
            <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] text-[#0F172A] uppercase mt-1">
              TREKKING ROUTES
            </h2>
            {/* Accent line under title */}
            <div className="w-10 sm:w-12 h-[2.5px] bg-[#0B6E8E] mt-2.5 rounded-full" />
          </div>

          {/* Right Narrative Text & More Info Button */}
          <div className="flex flex-col items-start md:max-w-md lg:max-w-lg text-left">
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed mb-4 font-normal">
              Experience Nepal&apos;s Himalayas through world-class trekking, iconic mountain trails, and unforgettable adventures.
            </p>

            <Link
              href="/trekking"
              className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#0F172A] hover:text-[#0B6E8E] transition-all"
            >
              <span className="w-8 h-8 rounded-full border-2 border-[#0B6E8E] text-[#0B6E8E] flex items-center justify-center group-hover:bg-[#0B6E8E] group-hover:text-white transition-all shadow-2xs">
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="tracking-wide">More Info</span>
            </Link>
          </div>
        </div>

        {/* 3. Nepal Map: Black & White by default -> Full Color on Hover */}
        <div className="w-full select-none flex justify-center">
          <div className="relative w-full aspect-[2/1] grayscale contrast-125 opacity-85 hover:grayscale-0 hover:contrast-100 hover:opacity-100 transition-all duration-700 ease-out cursor-pointer">
            <Image
              src="/assets/hero/nepal.png"
              alt="Nepal Trekking Trails & National Parks Map"
              fill
              priority={false}
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
