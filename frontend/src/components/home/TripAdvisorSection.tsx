"use client";

import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { clientReviews, tripAdvisorOverall } from "@/data/reviews";
import { ExternalLink, Quote } from "lucide-react";

export default function TripAdvisorSection() {
  // Duplicate reviews to create a seamless infinite loop
  const marqueeReviews = [...clientReviews, ...clientReviews];

  return (
    <section className="pt-2 pb-4 sm:pb-6 bg-[#F8FAFC] relative overflow-hidden">
      <Container size="wide">
        {/* Centered TripAdvisor Logo */}
        <div className="flex flex-col items-center justify-center text-center mb-5">
          <div className="relative h-8 sm:h-9 w-40 sm:w-48">
            <Image
              src="/assets/icons/tripadvisor.svg"
              alt="TripAdvisor"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </Container>

      {/* Review Track with Auto-Scrolling Animation and Side Shaded Masks */}
      <div className="relative w-full overflow-hidden select-none">
        {/* Left Side Shaded Gradient Fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Right Side Shaded Gradient Fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Auto-scrolling Marquee Row */}
        <div className="animate-marquee py-2 flex items-stretch">
          {marqueeReviews.map((review, index) => (
            <div
              key={`${review.id}-${index}`}
              className="w-[320px] sm:w-[380px] md:w-[440px] shrink-0 px-6 sm:px-8 flex flex-col justify-between"
            >
              <div>
                {/* Quotation Marks Symbol */}
                <div className="text-[#0B6E8E]/40 mb-2">
                  <Quote className="w-6 h-6 rotate-180 inline-block fill-[#0B6E8E]/10" />
                </div>

                {/* Review Text with Quotation Symbols */}
                <p className="text-[#0F172A] text-sm sm:text-base leading-relaxed italic font-serif">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* User Name */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-2">
                <span className="font-semibold text-[#0B6E8E] text-sm tracking-wide">
                  &mdash; {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Read Reviews Link (Placed AFTER reviews with NO box) */}
      <div className="mt-4 sm:mt-5 flex justify-center">
        <a
          href={tripAdvisorOverall.tripAdvisorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B6E8E] hover:text-[#085670] transition-colors uppercase tracking-wider"
        >
          <span className="underline underline-offset-4 decoration-[#0B6E8E]/30 group-hover:decoration-[#085670] transition-colors">
            Read Reviews on TripAdvisor
          </span>
          <ExternalLink className="w-3.5 h-3.5 text-[#0B6E8E] group-hover:text-[#085670] transition-colors" />
        </a>
      </div>
    </section>
  );
}
