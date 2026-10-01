import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { trustPillars } from "@/data/trips";
import { ShieldCheck, HeartPulse, Compass, MapPin } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#0B6E8E]" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-[#0B6E8E]" />,
  Compass: <Compass className="w-6 h-6 text-[#0B6E8E]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#0B6E8E]" />,
};

export default function TrustSafetySection() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
      <Container size="wide">
        <SectionHeading
          eyebrow="The Mountaineering Difference"
          title="Ethical Stewardship & Mountain Safety"
          subtitle="We are grounded in the enduring values of Himalayan guiding: rigorous high-altitude protocols, genuine cultural respect, and transparent logistics."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 bg-white border border-slate-200/80 rounded-2xs flex flex-col justify-start shadow-2xs"
            >
              <div className="p-3 bg-[#EBF7FA] border border-[#0B6E8E]/20 rounded-2xs w-fit mb-5 shadow-2xs">
                {iconMap[pillar.icon]}
              </div>

              <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">
                {pillar.title}
              </h3>

              <p className="text-[#64748B] text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
