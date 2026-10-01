"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import WorldMap from "./WorldMap";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8FAFC] pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Subtle World Map background layer (matching site theme, avoiding the blue from the image) */}
      <WorldMap opacity={0.06} />

      <Container size="wide" className="relative z-10">
        {/* Main 3-Column Banner Composition matching the image layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT CLUSTER: 3 Overlapping Circular Images with White Borders */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-[300px] h-[280px] sm:w-[380px] sm:h-[350px] lg:w-[420px] lg:h-[390px]">
              
              {/* 1. Top Circular Image (Scenic Peaks & Lake) */}
              <div className="absolute top-0 right-4 sm:right-6 lg:right-4 w-36 h-36 sm:w-48 sm:h-48 lg:w-52 lg:h-52 rounded-full border-[5px] sm:border-[6px] border-white shadow-2xl overflow-hidden z-10 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/packages/3.jpg"
                  alt="Himalayan Valley & Peaks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 150px, 220px"
                  priority
                />
              </div>

              {/* 2. Bottom-Left Large Circular Image (Iconic Panorama / City Skyline) */}
              <div className="absolute bottom-2 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-[6px] sm:border-[8px] border-white shadow-2xl overflow-hidden z-20 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/packages/4.webp"
                  alt="Epic Himalayan Expedition"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 250px, 320px"
                  priority
                />
              </div>

              {/* 3. Bottom-Right Medium Circular Image (Pagoda / Cultural Temple) */}
              <div className="absolute bottom-0 right-2 sm:right-4 lg:right-0 w-32 h-32 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full border-[5px] sm:border-[6px] border-white shadow-2xl overflow-hidden z-30 transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/hero/1.jpg"
                  alt="Cultural Heritage Pagoda"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 130px, 200px"
                  priority
                />
              </div>

            </div>
          </div>

          {/* CENTER CLUSTER: Birds, Cursive 'Time To Explore', Real Headline & Real Supporting Text, Plane Loop */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center text-center order-1 lg:order-2 px-2">
            
            {/* Flying Birds Flock from birds.svg */}
            <div className="relative w-44 sm:w-56 md:w-64 h-14 sm:h-20 -mb-2 pointer-events-none select-none">
              <Image
                src="/assets/hero/birds.svg"
                alt="Flock of Flying Birds"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Handwritten Cursive 'Time To Explore' */}
            <div className="font-caveat text-3xl sm:text-4xl md:text-5xl text-[#0F172A] -rotate-6 font-bold tracking-wide -mb-1 sm:-mb-2">
              Time To Explore
            </div>

            {/* Real Text Headline */}
            <div className="relative">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-3">
                The Soul of the{" "}
                <span className="text-[#0B6E8E] block sm:inline">
                  Himalayas
                </span>
              </h1>
            </div>

            {/* Real narrative description */}
            <p className="text-[#64748B] text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mb-2">
              Experience Nepal through authentically crafted trekking, high-altitude expeditions, and bespoke mountain journeys with Simrik Express.
            </p>

            {/* Red Airplane with Dashed Flight Path from plane.svg */}
            <div className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] h-28 sm:h-36 md:h-40 -mt-2 sm:-mt-4 pointer-events-none select-none">
              <Image
                src="/assets/hero/plane.svg"
                alt="Airplane Trajectory Loop"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Action Buttons to bridge the hero seamlessly into the app */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
              <Button
                variant="primary"
                size="md"
                href="/trekking"
                icon={<ArrowRight className="w-4 h-4" />}
                className="bg-[#0B6E8E] hover:bg-[#085670] shadow-md font-bold text-xs sm:text-sm px-5 py-2.5"
              >
                Explore Treks
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/travel-guide/inquiry-booking"
                className="border-[#0B6E8E] text-[#0B6E8E] hover:bg-[#0B6E8E]/10 font-bold text-xs sm:text-sm px-5 py-2.5"
              >
                Inquire Now
              </Button>
            </div>

          </div>

          {/* RIGHT CLUSTER: Semicircle Arch Frames (Dome & Bowl) + Contact Details */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center order-3">
            
            {/* 1. Upper Arch / Dome Semicircle (Golden Buddha & Pagoda Landmark) */}
            <div className="w-56 sm:w-68 lg:w-80 h-28 sm:h-34 lg:h-40 rounded-t-full border-[5px] sm:border-[6px] border-white shadow-2xl overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/hero/2.jpg"
                alt="Boudhanath Stupa Golden Heritage"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 240px, 320px"
                priority
              />
            </div>

            {/* Visual Divider Gap between Semicircles */}
            <div className="h-3 sm:h-4" />

            {/* 2. Lower Inverted Arch / Bowl Semicircle (Marina Bay / Iconic Landmark) */}
            <div className="w-56 sm:w-68 lg:w-80 h-28 sm:h-34 lg:h-40 rounded-b-full border-[5px] sm:border-[6px] border-white shadow-2xl overflow-hidden relative transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/hero/3.jpg"
                alt="Everest Himalayan Summit & Flags"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 240px, 320px"
                priority
              />
            </div>

            {/* Contact Details with Icons at Bottom-Right */}
            <div className="mt-6 flex flex-col items-center lg:items-end gap-2.5 text-center lg:text-right">
              <a
                href="tel:+9779801141694"
                className="inline-flex items-center gap-2.5 text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-bold text-sm sm:text-base group"
              >
                <div className="w-8 h-8 rounded-full border border-[#0F172A]/20 bg-white flex items-center justify-center shadow-xs group-hover:border-[#0B6E8E] group-hover:text-[#0B6E8E] transition-colors">
                  <Phone className="w-4 h-4 text-[#0B6E8E] shrink-0" />
                </div>
                <span className="tracking-wide">+977 9801141694</span>
              </a>

              <div className="inline-flex items-center gap-2.5 text-[#0F172A] font-bold text-sm sm:text-base">
                <div className="w-8 h-8 rounded-full border border-[#0F172A]/20 bg-white flex items-center justify-center shadow-xs">
                  <MapPin className="w-4 h-4 text-[#0B6E8E] shrink-0" />
                </div>
                <span>Lazimpat, Das Tower, KTM</span>
              </div>
            </div>

          </div>

        </div>
      </Container>

      {/* Smooth bottom feather fade into the next section so no edge line is visible */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[#F8FAFC] pointer-events-none z-10" />
    </section>
  );
}
