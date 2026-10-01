"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { affordablePackages, TravelPackage } from "@/data/packages";

interface PackageCardProps {
  pkg: TravelPackage;
  priority?: boolean;
  isLarge?: boolean;
}

export function PackageCard({ pkg, priority = false, isLarge = false }: PackageCardProps) {
  const hasOverlay = !pkg.hasBakedContent;

  return (
    <Link
      href={pkg.href}
      className={`group relative block w-full overflow-hidden rounded-xs bg-stone-950 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl ${
        isLarge ? "h-full min-h-[360px] sm:min-h-[460px] lg:min-h-[500px]" : "aspect-[199/213]"
      }`}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Photo with Smooth Hover Scale */}
        <Image
          src={pkg.image}
          alt={`${pkg.title} - ${pkg.duration}`}
          fill
          priority={priority}
          sizes={
            isLarge
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          }
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Dynamic Price Tag & Title Overlay */}
        {hasOverlay && (
          <>
            {/* Top-Right Price Ribbon Banner */}
            <div className="absolute top-0 right-0 z-10 bg-[#0B6E8E] text-white font-bold text-xs sm:text-[13px] px-3 sm:px-3.5 py-1 sm:py-1.5 shadow-sm tracking-wider select-none transition-all duration-300 group-hover:bg-[#16A6C7] group-hover:shadow-md">
              {pkg.price}
            </div>

            {/* Bottom Gradient Fade & Typography */}
            <div
              className={`absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent flex flex-col justify-end text-left select-none transition-all duration-500 group-hover:from-slate-950/95 group-hover:via-slate-950/70 ${
                isLarge ? "p-5 sm:p-6 md:p-7" : "p-3.5 sm:p-4.5"
              }`}
            >
              <h3
                className={`text-white font-bold leading-snug drop-shadow-sm transition-colors duration-300 group-hover:text-[#38BDF8] ${
                  isLarge
                    ? "text-xl sm:text-2xl lg:text-[26px]"
                    : "text-sm sm:text-base line-clamp-2"
                }`}
              >
                {pkg.title}
              </h3>

              <div className="flex items-center justify-between mt-1 sm:mt-1.5 gap-2">
                <p
                  className={`text-[#38BDF8] font-bold uppercase tracking-wider drop-shadow-xs ${
                    isLarge ? "text-xs sm:text-sm" : "text-[11px] sm:text-xs"
                  }`}
                >
                  {pkg.duration}
                </p>

                {/* Subtle Arrow indicator on smaller cards */}
                {!isLarge && (
                  <span className="text-slate-300 group-hover:text-[#38BDF8] transition-colors duration-300 opacity-80 group-hover:opacity-100">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                )}
              </div>

              {/* Highlight snippet shown on hover for extra travel context */}
              {pkg.highlight && (
                <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-12 transition-all duration-300 group-hover:mt-1.5 pointer-events-none line-clamp-2">
                  {pkg.highlight}
                </p>
              )}

              {/* Action Button for Featured Large Card */}
              {isLarge && (
                <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-white text-[#0B6E8E] text-xs sm:text-sm font-semibold shadow-md group-hover:bg-[#0B6E8E] group-hover:text-white transition-all duration-300">
                  <span>Explore Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              )}
            </div>
          </>
        )}

        {/* Subtle hover brightness / overlay polish */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 pointer-events-none" />
      </div>
    </Link>
  );
}

export interface AffordablePackagesSectionProps {
  title?: string;
  subtitleParagraph1?: string;
  subtitleParagraph2?: string;
  packages?: TravelPackage[];
  viewAllHref?: string;
  className?: string;
}

export function AffordablePackagesSection({
  title = "Affordable Travel Packages",
  subtitleParagraph1 = "Your dream journey to Nepal should be defined by unforgettable moments—not by financial worries.",
  subtitleParagraph2 = "We are committed to offering carefully curated adventures with transparent pricing, exceptional service, and experiences that create memories to last a lifetime.",
  packages = affordablePackages,
  viewAllHref = "/trekking",
  className = "",
}: AffordablePackagesSectionProps) {
  const featuredPackage = packages[0];
  const gridPackages = packages.slice(1, 5);

  return (
    <section className={`py-14 sm:py-18 lg:py-22 bg-[#F8FAFC] ${className}`}>
      <Container size="wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-11">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#0F172A] tracking-normal mb-3 sm:mb-4">
            {title}
          </h2>
          <div className="space-y-1 text-[#64748B] text-sm sm:text-base leading-relaxed font-sans font-normal">
            <p>{subtitleParagraph1}</p>
            <p>{subtitleParagraph2}</p>
          </div>
        </div>

        {/* Bento Mosaic Grid matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4.5 max-w-6xl mx-auto items-stretch">
          {featuredPackage && (
            <div className="lg:col-span-6 flex">
              <PackageCard pkg={featuredPackage} priority isLarge />
            </div>
          )}

          {/* Right Column: 2x2 Grid of 4 Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-4.5">
            {gridPackages.map((pkg, idx) => (
              <PackageCard key={pkg.id} pkg={pkg} priority={idx < 2} />
            ))}
          </div>
        </div>

        {/* Centered Circular (>) View All CTA */}
        <div className="mt-9 sm:mt-12 flex justify-center">
          <Link
            href={viewAllHref}
            className="group inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#0F172A] hover:text-[#0B6E8E] transition-all"
          >
            <span className="w-8 h-8 rounded-full border-2 border-[#0B6E8E] flex items-center justify-center text-[#0B6E8E] group-hover:bg-[#0B6E8E] group-hover:text-white transition-all shadow-2xs">
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="tracking-wide">View All</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default AffordablePackagesSection;
