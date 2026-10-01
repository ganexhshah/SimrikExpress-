import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full pt-4 pb-20 sm:pt-6 sm:pb-32 lg:pb-40 bg-[#F8FAFC] overflow-hidden">
      {/* 1. Full-Bleed Himalayan Mountain Background with Transparency */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="relative w-full h-full opacity-35 sm:opacity-40 transition-opacity">
          <Image
            src="/assets/about/mt.svg"
            alt="Nepal Himalayan Mountain Panorama"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>

        {/* Soft atmospheric white gradients */}
        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#F8FAFC]/90 via-[#F8FAFC]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-36 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent" />
      </div>

      {/* 2. Foreground Content: Centered Logo, Story & Motto */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Brand Logo */}
        <div className="mb-6 sm:mb-8">
          <div className="relative w-36 h-12 sm:w-44 sm:h-14">
            <Image
              src="/assets/logo/logo.svg"
              alt="Simrik Express"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Core Statement in Editorial Serif */}
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#0F172A] leading-relaxed sm:leading-loose max-w-3xl mb-4 font-normal">
          Driven by our commitment to <strong className="font-bold text-[#0B6E8E]">&ldquo;Quality over Quantity,&rdquo;</strong> every itinerary is thoughtfully designed to deliver exceptional experiences, whether you&apos;re exploring Nepal&apos;s iconic trekking trails, discovering its rich cultural heritage, or pursuing high-altitude adventures.
        </p>

        {/* Motto */}
        <p className="font-serif text-base sm:text-lg md:text-xl text-[#0F172A] mb-8 sm:mb-10 leading-relaxed">
          <strong className="font-bold text-[#0B6E8E]">Our Motto:</strong> We aren&apos;t just a travel company, <span className="italic">we&apos;re your</span> <strong className="font-bold italic uppercase tracking-wider text-[#0B6E8E]">travel COMPANION.</strong>
        </p>

        {/* Circular (>) Read Our Story CTA */}
        <Link
          href="/company"
          className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#0F172A] hover:text-[#0B6E8E] transition-all"
        >
          <span className="w-8 h-8 rounded-full border-2 border-[#0B6E8E] text-[#0B6E8E] flex items-center justify-center group-hover:bg-[#0B6E8E] group-hover:text-white transition-all shadow-2xs">
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="tracking-wide">Read Our Story</span>
        </Link>
      </div>
    </section>
  );
}
