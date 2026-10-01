"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { exclusiveOffers, JourneyOffer } from "@/data/offers";

interface OfferCardProps {
  offer: JourneyOffer;
  isFeatured?: boolean;
}

function OfferCard({ offer, isFeatured = false }: OfferCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={(e) => {
        // Prevent full page navigation/reload when interacting with offer cards
        e.preventDefault();
        e.stopPropagation();
      }}
      className={`group relative block w-full overflow-hidden rounded-xs bg-stone-950 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl cursor-pointer select-none ${
        isFeatured
          ? "h-[420px] sm:h-[460px] lg:h-[490px]"
          : "h-[370px] sm:h-[400px] lg:h-[425px]"
      }`}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Background Image with Hover Scale */}
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          priority={false}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
        />

        {/* Top-Right Price Banner */}
        <div className="absolute top-0 right-0 z-10 bg-[#0B6E8E] text-white font-bold text-xs sm:text-[13px] px-3 sm:px-3.5 py-1 sm:py-1.5 shadow-sm tracking-wider select-none transition-colors duration-300 group-hover:bg-[#16A6C7]">
          {offer.badgePrice}
        </div>

        {/* Bottom Gradient Fade & Offer Content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 bg-gradient-to-t from-slate-950/90 via-slate-950/55 to-transparent flex flex-col justify-end text-left select-none transition-all duration-300 group-hover:from-slate-950/95">
          {/* Trek Title */}
          <h3 className="text-white font-bold text-base sm:text-[17px] leading-snug drop-shadow-sm mb-1 group-hover:text-[#38BDF8] transition-colors">
            {offer.title}
          </h3>

          {/* Duration */}
          <p className="text-[#38BDF8] font-bold text-[11px] sm:text-xs uppercase tracking-wider mb-2 drop-shadow-xs">
            {offer.duration}
          </p>

          {/* Strikethrough & Discounted Price */}
          <div className="flex items-baseline gap-2">
            <span className="line-through text-slate-400 font-medium text-xs sm:text-sm">
              {offer.originalPrice}
            </span>
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight">
              {offer.discountedPrice}
            </span>
          </div>
        </div>

        {/* Subtle hover brightness / overlay polish */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 pointer-events-none" />
      </div>
    </div>
  );
}

// 3 sets of offers to enable infinite seamless looping (indices 0..14)
const extendedOffers = [...exclusiveOffers, ...exclusiveOffers, ...exclusiveOffers];
const BASE_COUNT = exclusiveOffers.length; // 5

export default function ExclusiveOffersSection() {
  // Start at index 5 so offer 0 is at index 5, offer 1 is center (featured), offer 2 is right
  const [currentIndex, setCurrentIndex] = useState(BASE_COUNT);
  const [withTransition, setWithTransition] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const isSlidingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Responsive screen detection strictly local
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slide forward (isolated to this component only)
  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Slide backward (isolated to this component only)
  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (isSlidingRef.current) return;
    isSlidingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Silent wrap-around reset after transition completes
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current || e.propertyName !== "transform") return;
    isSlidingRef.current = false;

    if (currentIndex >= BASE_COUNT * 2) {
      // Reached index 10 (identical to 5), silently jump back to 5
      setWithTransition(false);
      setCurrentIndex(BASE_COUNT);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
    } else if (currentIndex <= BASE_COUNT - 1) {
      // Reached index 4 (identical to 9), silently jump back to 9
      setWithTransition(false);
      setCurrentIndex(BASE_COUNT * 2 - 1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
    }
  };

  // Safety fallback timer if onTransitionEnd does not fire
  useEffect(() => {
    if (!withTransition) return;

    const timer = setTimeout(() => {
      isSlidingRef.current = false;
      if (currentIndex >= BASE_COUNT * 2) {
        setWithTransition(false);
        setCurrentIndex(BASE_COUNT);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setWithTransition(true);
          });
        });
      } else if (currentIndex <= BASE_COUNT - 1) {
        setWithTransition(false);
        setCurrentIndex(BASE_COUNT * 2 - 1);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setWithTransition(true);
          });
        });
      }
    }, 550);

    return () => clearTimeout(timer);
  }, [currentIndex, withTransition]);

  // Touch Swipe Handlers for mobile & tablets (prevent page scrolling conflicts)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  // Translate calculation
  const offsetIndex = isDesktop ? currentIndex : currentIndex + 1;
  const slideStride = isDesktop ? "calc((100% + 24px) / 3)" : "100%";
  const transformStyle = `translateX(calc(-1 * ${offsetIndex} * ${slideStride}))`;

  return (
    <section className="pt-0 pb-14 sm:pb-18 lg:pb-22 bg-[#F8FAFC] overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#0F172A] tracking-tight mb-3 sm:mb-4">
            Exclusive Journey Offers
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed font-sans font-normal">
            Experience extraordinary adventures with exclusive savings on premium trekking, climbing, and cultural journeys—without compromising on quality or service.
          </p>
        </div>

        {/* 3 Offer Cards Carousel Track (Stable fixed container height prevents page jump) */}
        <div
          className="relative max-w-5xl mx-auto overflow-hidden pt-2 pb-2 min-h-[430px] sm:min-h-[470px] lg:min-h-[500px] flex items-end"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
            className={`flex items-end w-full ${
              isDesktop ? "gap-6" : "gap-0"
            } ${
              withTransition
                ? "transition-transform duration-500 ease-out"
                : "transition-none"
            }`}
            style={{
              transform: transformStyle,
            }}
          >
            {extendedOffers.map((offer, idx) => {
              const isFeatured = idx === currentIndex + 1;

              return (
                <div
                  key={`${offer.id}-${idx}`}
                  className={`shrink-0 ${
                    isDesktop ? "w-[calc((100%-48px)/3)]" : "w-full"
                  }`}
                >
                  <OfferCard offer={offer} isFeatured={isFeatured} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Arrow Controls (Bottom-Left matching reference design) */}
        <div className="max-w-5xl mx-auto mt-7 sm:mt-9 flex items-center gap-2.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Offer"
            className="w-8 h-8 rounded-full bg-[#0B6E8E] text-white flex items-center justify-center hover:bg-[#085670] active:scale-95 transition-all shadow-xs cursor-pointer select-none border border-[#0B6E8E]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Offer"
            className="w-8 h-8 rounded-full bg-[#0B6E8E] text-white flex items-center justify-center hover:bg-[#085670] active:scale-95 transition-all shadow-xs cursor-pointer select-none border border-[#0B6E8E]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
