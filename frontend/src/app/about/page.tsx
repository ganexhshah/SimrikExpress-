import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Simrik Express - Authentic Himalayan Journeys",
  description:
    "Simrik Express is one of Nepal's trusted local mountain companies focused on authentic, safe, and quality travel experiences in the Himalayas.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-[#0B6E8E] selection:text-white">
      <Navbar />

      <main className="flex-1 relative flex flex-col justify-center items-center pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-6 lg:px-8">
        {/* Full Page Background Image: team.jpg (no color overlays) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/about/team.jpg"
            alt="Simrik Express Mountain Team in Nepal Himalayas"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Content: Just Pure Text and Logo */}
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* ABOUT US */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#0B6E8E] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] mb-3 sm:mb-4 bg-white/70 px-3 py-1 rounded-full backdrop-blur-xs">
            ABOUT US
          </span>

          {/* Welcome to Nepal */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] drop-shadow-[0_2px_4px_rgba(255,255,255,0.95)] mb-6">
            Welcome to Nepal
          </h1>

          {/* Lead Intro Text */}
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#0F172A] drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)] leading-relaxed font-semibold mb-8 sm:mb-10 max-w-2xl">
            Simrik Express is one of Nepal&apos;s trusted local mountain companies focused on authentic, safe, and quality travel experiences in the Himalayas.
          </p>

          {/* Brand Logo */}
          <div className="mb-10 sm:mb-12">
            <div className="relative w-44 h-16 sm:w-52 sm:h-18 drop-shadow-lg">
              <Image
                src="/assets/logo/logo.svg"
                alt="Simrik Express"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          {/* Main Narrative Paragraphs */}
          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-[#0F172A] leading-relaxed text-center sm:text-justify font-medium drop-shadow-[0_1px_3px_rgba(255,255,255,0.95)]">
            <p className="text-center font-serif text-lg sm:text-xl text-[#0B6E8E] font-bold leading-relaxed">
              Welcome to Nepal, a land where some of the world&apos;s highest mountains rise above ancient trails, sacred landscapes, timeless cultures, and communities whose lives are deeply connected to the Himalayas.
            </p>

            <p>
              At <strong className="font-bold text-[#0B6E8E]">Simrik Express</strong>, we are a locally owned Nepalese mountain company dedicated to creating authentic, safe, and meaningful experiences in the Himalayas. We were founded with a simple purpose: to share the extraordinary beauty of Nepal while ensuring that the people, cultures, and landscapes that make this country special are respected and protected.
            </p>

            <p>
              For us, the Himalayas are far more than a destination. They are a living heritage shaped by generations of mountain communities, centuries-old traditions, sacred places, and an enduring relationship between people and nature. From dramatic high-altitude passes and legendary peaks to quiet villages and hidden valleys, every trail tells a story.
            </p>

            <p>
              We invite you to experience Nepal beyond its spectacular scenery—to meet its people, understand its cultures, walk its ancient paths, and discover the warmth and resilience that define Himalayan life.
            </p>

            <p>
              We believe the most meaningful journeys are those that change the way we see the world. A sunrise above the mountains, a conversation with a local family, a challenging day on the trail, or a shared moment around a warm fire can become memories that remain long after the journey ends.
            </p>

            <p className="text-center font-serif text-lg sm:text-xl text-[#0B6E8E] font-bold leading-relaxed pt-2">
              With Simrik Express, travel is not simply about reaching a destination. It is about slowing down, connecting deeply, traveling responsibly, and experiencing the Himalayas with respect, curiosity, and an open heart.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
