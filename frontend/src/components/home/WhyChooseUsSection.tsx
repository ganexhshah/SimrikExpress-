import React from "react";
import Container from "@/components/ui/Container";
import { Leaf } from "lucide-react";

interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const whyChooseItems: WhyChooseItem[] = [
  {
    id: "local-experts",
    title: "LOCAL EXPERTS",
    description:
      "Our team of experienced local professionals brings unmatched knowledge of Nepal's mountains, culture, and hidden gems. Every journey is thoughtfully designed to deliver authentic experiences beyond the ordinary.",
    icon: (
      <svg
        className="w-7 h-7 text-[#0B6E8E]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Hiker with backpack and trekking pole */}
        <circle cx="12" cy="4" r="1.8" />
        <path d="M10 8h2.5l2 4-2 7" />
        <path d="M10 8l-2 5 3 6" />
        <path d="M8 9.5a2 2 0 00-2 2v2.5a2 2 0 002 2" />
        <path d="M17 9.5l-1 11" />
      </svg>
    ),
  },
  {
    id: "flexible-itineraries",
    title: "FLEXIBLE ITINERARIES",
    description:
      "Travel your way with fully customizable itineraries tailored to your interests, fitness level, and schedule. We create personalized adventures that match your travel style and goals.",
    icon: (
      <svg
        className="w-7 h-7 text-[#0B6E8E]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Winding custom itinerary trail with waypoints */}
        <path d="M8 19c-3.5 0-5-2.5-5-5s2.5-4 5.5-4 4.5-2 4.5-4-1-3-3.5-3" />
        <circle cx="8" cy="19" r="1.5" />
        <circle cx="9.5" cy="3" r="1.5" />
        <circle cx="13" cy="6" r="1.5" />
      </svg>
    ),
  },
  {
    id: "sustainable-travel",
    title: "SUSTAINABLE TRAVEL",
    description:
      "We are committed to responsible tourism by protecting Nepal's natural environment, supporting local communities, and preserving cultural heritage. Every journey is designed to leave a positive impact.",
    icon: <Leaf className="w-7 h-7 text-[#0B6E8E]" strokeWidth={1.8} />,
  },
  {
    id: "safe-and-supported",
    title: "SAFE AND SUPPORTED",
    description:
      "Your safety comes first. With experienced guides, carefully planned itineraries, first aid-trained staff, and 24/7 support, we ensure every adventure is safe, comfortable, and worry-free.",
    icon: (
      <svg
        className="w-7 h-7 text-[#0B6E8E]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Safety support canopy & suspension */}
        <path d="M12 3a8 8 0 00-8 7c0 1.2.8 2 2 2h12c1.2 0 2-.8 2-2a8 8 0 00-8-7z" />
        <path d="M4 12l8 8 8-8" />
        <path d="M12 12v8" />
        <circle cx="12" cy="20" r="1" />
      </svg>
    ),
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="pt-2 pb-2 sm:pt-4 sm:pb-4 bg-[#F8FAFC]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: WHY CHOOSE US Header */}
          <div className="lg:col-span-3 flex flex-col items-start pt-2">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#64748B] uppercase">
              WHY
            </span>
            <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-[0.2em] text-[#0B6E8E] uppercase mt-1">
              CHOOSE US
            </h2>
            {/* Accent line */}
            <div className="w-10 sm:w-12 h-[2.5px] bg-[#0B6E8E] mt-2.5 rounded-full" />
          </div>

          {/* Right Column: 2x2 Grid with Thin Divider Lines */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2">
            {whyChooseItems.map((item, index) => {
              // Determine border lines for 2x2 grid layout
              const isFirstColumn = index % 2 === 0;
              const isTopRow = index < 2;

              return (
                <div
                  key={item.id}
                  className={`p-6 sm:p-8 lg:p-10 flex flex-col items-start ${
                    isTopRow ? "md:border-b md:border-slate-200" : ""
                  } ${
                    isFirstColumn ? "md:border-r md:border-slate-200" : ""
                  } ${
                    index > 0 ? "border-t md:border-t-0 border-slate-200" : ""
                  }`}
                >
                  {/* Outline Icon */}
                  <div className="mb-4 text-[#0B6E8E]">{item.icon}</div>

                  {/* Title in primary uppercase bold */}
                  <h3 className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#0B6E8E] uppercase mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748B] text-sm sm:text-[15px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
