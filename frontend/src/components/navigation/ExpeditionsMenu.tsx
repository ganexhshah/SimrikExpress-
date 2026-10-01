import React from "react";
import Link from "next/link";
import { NavGroup } from "@/data/navigation";
import { MountainSnow, Compass, ArrowRight, ShieldCheck, Bike } from "lucide-react";

interface ExpeditionsMenuProps {
  groups: NavGroup[];
  onClose?: () => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  "8000m": <MountainSnow className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "7000m": <MountainSnow className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "6000m": <MountainSnow className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "Motorbike Adventure": <Bike className="w-4 h-4 text-[#16A6C7] group-hover:text-white transition-colors" />,
};

export default function ExpeditionsMenu({ groups, onClose }: ExpeditionsMenuProps) {
  const categoriesGroup = groups.find((g) => g.heading === "Categories");
  const featuredGroup = groups.find((g) => g.heading === "Featured Expeditions");

  return (
    <div className="w-[740px] bg-white border border-slate-200 shadow-2xl rounded-sm p-6 grid grid-cols-12 gap-6">
      {/* Column 1: Mountain Categories */}
      <div className="col-span-6 border-r border-slate-100 pr-6">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#0B6E8E]" />
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
              {categoriesGroup?.heading || "Expedition Categories"}
            </h4>
          </div>
          {categoriesGroup?.viewAllHref && (
            <Link
              href={categoriesGroup.viewAllHref}
              onClick={onClose}
              className="text-xs font-semibold text-[#0B6E8E] hover:text-[#085670] flex items-center gap-1 group"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        <div className="grid gap-2">
          {categoriesGroup?.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group p-2.5 rounded-xs hover:bg-[#EBF7FA]/40 border border-transparent hover:border-[#0B6E8E]/30 transition-all flex items-start gap-3"
            >
              <div className="p-2 bg-[#EBF7FA] rounded-xs group-hover:bg-[#0B6E8E] transition-colors shrink-0 mt-0.5">
                {categoryIcons[item.title] || <MountainSnow className="w-4 h-4 text-[#0B6E8E] group-hover:text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between text-sm font-semibold text-[#0F172A] group-hover:text-[#0B6E8E]">
                  <span>{item.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0B6E8E] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                </div>
                {item.description && (
                  <p className="text-xs text-[#64748B] mt-0.5 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Column 2: Featured Expeditions (Editorial Card style) */}
      <div className="col-span-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <MountainSnow className="w-4 h-4 text-[#0B6E8E]" />
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F172A]">
                {featuredGroup?.heading || "Featured Expeditions"}
              </h4>
            </div>
            {featuredGroup?.viewAllHref && (
              <Link
                href={featuredGroup.viewAllHref}
                onClick={onClose}
                className="text-xs font-semibold text-[#0B6E8E] hover:text-[#085670] flex items-center gap-1 group"
              >
                <span>Full Roster</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </div>

          <div className="space-y-3">
            {featuredGroup?.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group block p-3.5 bg-[#F8FAFC] hover:bg-[#EBF7FA]/40 border border-slate-200/80 hover:border-[#0B6E8E]/30 rounded-xs transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-serif font-bold text-[#0F172A] group-hover:text-[#0B6E8E] transition-colors block text-base">
                      {item.title}
                    </span>
                    {item.description && (
                      <p className="text-xs text-[#64748B] mt-1 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-[#0B6E8E] text-white px-2 py-0.5 rounded-2xs shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Safety & Protocol Banner */}
        <div className="mt-4 p-3 bg-[#0F172A] text-white rounded-xs flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#38BDF8] shrink-0" />
          <div className="text-[11px] leading-tight">
            <span className="font-semibold block text-[#38BDF8]">Full Expedition Logistical Support</span>
            <span className="text-slate-300">Base camp kitchen, 1:1 Sherpa summit ratio & oxygen backup.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
