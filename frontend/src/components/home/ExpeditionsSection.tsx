import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { mountaineeringPeaks } from "@/data/trips";
import { MountainSnow, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ExpeditionsSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#0F172A] text-slate-100 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-[#0F172A] to-slate-950 pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <SectionHeading
          eyebrow="Mountaineering Division"
          title="High-Altitude Peaks & 8,000m Expeditions"
          subtitle="Comprehensive mountain logistics from base camp kitchen infrastructures and high-altitude fixed rope crews to 1:1 veteran Sherpa summit ratios."
          actionText="View All Expeditions"
          actionHref="/expeditions"
          className="[&_h2]:text-white [&_p]:text-slate-300 [&_a]:text-[#38BDF8] [&_a:hover]:text-white [&_span]:text-[#38BDF8]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mountaineeringPeaks.map((peak) => (
            <div
              key={peak.name}
              className="group bg-slate-900/80 border border-slate-800 rounded-2xs p-6 hover:bg-slate-900 hover:border-[#16A6C7]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-[#38BDF8] px-2 py-0.5 rounded-2xs">
                    {peak.category}
                  </span>
                  <MountainSnow className="w-5 h-5 text-slate-500 group-hover:text-[#38BDF8] transition-colors" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2">
                  {peak.name}
                </h3>

                <div className="text-2xl font-mono font-bold text-[#16A6C7] mb-3 tracking-tight">
                  {peak.altitude}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  {peak.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-[#64748B] mb-4">
                  <span>Duration: {peak.duration}</span>
                  <span className="font-semibold text-slate-200">{peak.grade}</span>
                </div>

                <Link
                  href={peak.href}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#0B6E8E] hover:bg-[#16A6C7] text-white rounded-2xs text-xs font-semibold transition-colors"
                >
                  <span>Expedition Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Expedition Standards Micro-Grid */}
        <div className="mt-12 p-6 bg-slate-900/40 border border-slate-800 rounded-2xs grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block text-sm mb-1">
                Poisk Russian Oxygen Systems
              </span>
              <span>Latest lightweight composite cylinders with TopOut masks and high-flow regulators.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block text-sm mb-1">
                Satellite Weather Forecasting
              </span>
              <span>Twice-daily Swiss and Austrian meteorological window advisories during summit pushes.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block text-sm mb-1">
                Certified Mountain Doctors
              </span>
              <span>High-altitude emergency medical coverage, Gamow bags, and standing heli dispatch clearance.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
