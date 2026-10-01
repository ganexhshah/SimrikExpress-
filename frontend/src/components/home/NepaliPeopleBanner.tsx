import React from "react";
import Image from "next/image";

export default function NepaliPeopleBanner() {
  return (
    <section className="relative w-full bg-[#F8FAFC] py-0 select-none overflow-hidden">
      {/* Full-width edge-to-edge container with no left/right gaps */}
      <div className="relative w-full aspect-[2172/724] overflow-hidden">
        <Image
          src="/assets/hero/nepalperson.png"
          alt="People of Nepal - Diverse Himalayan Ethnic Communities & Traditions"
          fill
          priority={false}
          className="object-cover sm:object-contain object-bottom grayscale contrast-110"
          sizes="100vw"
        />

        {/* Soft bottom feathering fade: ensures image finishes smoothly into the page with no hard lines */}
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
