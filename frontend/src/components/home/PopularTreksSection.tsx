import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { popularTreks } from "@/data/trips";
import { Gauge, Clock, Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export default function PopularTreksSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Signature Expeditions"
          title="Legendary Himalayan Trails"
          subtitle="Carefully calibrated itineraries balanced for optimal acclimatization, scenic immersion, and high-altitude summit safety."
          actionText="View All Treks"
          actionHref="/trekking"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {popularTreks.map((trek) => (
            <div
              key={trek.id}
              className="group bg-white border border-slate-200 rounded-2xs p-6 hover:shadow-md hover:border-[#0B6E8E]/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Region & Grade */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#0B6E8E] uppercase tracking-wider">
                    {trek.region}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-2xs ${
                      trek.grade === "Moderate"
                        ? "bg-[#EBF7FA] text-[#0B6E8E] border border-[#0B6E8E]/20"
                        : trek.grade === "Demanding"
                        ? "bg-[#38BDF8]/20 text-[#0B6E8E] border border-[#38BDF8]/40"
                        : "bg-rose-100 text-rose-900"
                    }`}
                  >
                    {trek.grade}
                  </span>
                </div>

                <Link href={trek.href}>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#0B6E8E] transition-colors mb-2">
                    {trek.title}
                  </h3>
                </Link>

                <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                  {trek.highlight}
                </p>
              </div>

              <div>
                {/* Trek Metadata Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-200 mb-5 text-[#64748B] text-xs">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#64748B] uppercase font-semibold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Days
                    </span>
                    <span className="font-bold text-[#0F172A] mt-0.5">
                      {trek.durationDays} Days
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#64748B] uppercase font-semibold flex items-center gap-1">
                      <Gauge className="w-3 h-3" />
                      Altitude
                    </span>
                    <span className="font-bold text-[#0F172A] mt-0.5">
                      {trek.maxAltitude}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#64748B] uppercase font-semibold flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Season
                    </span>
                    <span className="font-bold text-[#0F172A] mt-0.5 truncate">
                      {trek.bestSeason.split("/")[0]}
                    </span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#64748B] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0B6E8E]" />
                    <span>Sherpa Guided</span>
                  </span>

                  <Link
                    href={trek.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B6E8E] group-hover:text-[#085670] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
