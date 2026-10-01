import React from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredRegions } from "@/data/trips";
import { Mountain, ArrowRight } from "lucide-react";

export default function FeaturedRegions() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Trekking Territories"
          title="Iconic Regions of Nepal"
          subtitle="From the glaciated amphitheaters of Khumbu to the sacred Tibetan valleys of Upper Mustang, explore each unique Himalayan biosphere."
          actionText="View All Regions"
          actionHref="/trekking/regions"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredRegions.map((region) => (
            <Link
              key={region.id}
              href={region.href}
              className="group bg-white border border-slate-200/90 rounded-2xs p-6 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-slate-100 text-[#64748B] px-2.5 py-1 rounded-2xs group-hover:bg-[#EBF7FA] group-hover:text-[#0B6E8E] transition-colors">
                    {region.badge}
                  </span>
                  <Mountain className="w-5 h-5 text-slate-400 group-hover:text-[#0B6E8E] transition-colors" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#0F172A] group-hover:text-[#0B6E8E] transition-colors mb-2">
                  {region.name}
                </h3>

                <p className="text-[#64748B] text-sm leading-relaxed mb-6">
                  {region.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#64748B] block text-[10px] uppercase font-semibold">
                    Key Highlight
                  </span>
                  <span className="font-semibold text-[#0F172A]">
                    {region.popularTrek}
                  </span>
                </div>

                <div className="flex items-center gap-1 font-semibold text-[#0B6E8E] group-hover:translate-x-0.5 transition-transform">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
