import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavGroup } from "@/data/navigation";
import { Mountain, Compass, ArrowRight, Clock, Gauge, Sparkles } from "lucide-react";

interface TrekPreviewData {
  title: string;
  region: string;
  image: string;
  href: string;
  elevation: string;
  duration: string;
  difficulty: string;
  about: string;
  badge?: string;
}

const trekPreviewMap: Record<string, TrekPreviewData> = {
  "Everest Region": {
    title: "Everest Region",
    region: "Khumbu Valley",
    image: "/assets/packages/ebc-card.jpg",
    href: "/trekking/everest-region",
    elevation: "5,364m",
    duration: "12-16 Days",
    difficulty: "Challenging",
    about: "Home to Mount Everest and legendary Sherpa culture. Trek past ancient monasteries, high suspension bridges, and dramatic mountain peaks.",
    badge: "Khumbu Valley",
  },
  "Everest Base Camp": {
    title: "Everest Base Camp Trek",
    region: "Everest Region",
    image: "/assets/packages/ebc-card.jpg",
    href: "/trekking/everest-base-camp",
    elevation: "5,364m",
    duration: "14 Days",
    difficulty: "Strenuous",
    about: "Stand beneath the Khumbu Icefall and towering Himalayan giants on the world's most famous bucket-list trekking adventure.",
    badge: "Classic Route",
  },
  "Annapurna Region": {
    title: "Annapurna Region",
    region: "Annapurna Massif",
    image: "/assets/packages/annapurna-card.jpg",
    href: "/trekking/annapurna-region",
    elevation: "4,130m",
    duration: "10-14 Days",
    difficulty: "Moderate",
    about: "A dramatic natural amphitheater surrounded by 8,000m summits, sacred Machapuchare (Fishtail), and blooming rhododendron forests.",
    badge: "Top Rated",
  },
  "Langtang Region": {
    title: "Langtang Region",
    region: "Langtang Valley",
    image: "/assets/packages/langtang-card.jpg",
    href: "/trekking/langtang-region",
    elevation: "3,870m",
    duration: "8 Days",
    difficulty: "Moderate",
    about: "Known as the Valley of Glaciers, featuring Tamang heritage villages, yak cheese factories at Kyanjin Gompa, and snowy ridgelines.",
    badge: "Scenic Gem",
  },
  "Manaslu Region": {
    title: "Manaslu Region",
    region: "Manaslu Circuit",
    image: "/assets/packages/manaslu-card.jpg",
    href: "/trekking/manaslu-region",
    elevation: "5,106m",
    duration: "14-16 Days",
    difficulty: "Challenging",
    about: "An untouched, remote wilderness circuit around the world's 8th highest peak crossing the high-altitude Larkya La pass.",
    badge: "Wilderness",
  },
  "Dolpa Region": {
    title: "Dolpa Region",
    region: "Western Nepal",
    image: "/assets/packages/1.jpg",
    href: "/trekking/dolpa-region",
    elevation: "4,500m",
    duration: "16-21 Days",
    difficulty: "Strenuous",
    about: "A mystical rain-shadow sanctuary with deep turquoise waters of Lake Shey Phoksundo, ancient Bon monasteries, and remote valleys.",
    badge: "Off the Beaten Track",
  },
  "Mustang Region": {
    title: "Mustang Region",
    region: "Upper Mustang",
    image: "/assets/packages/3.jpg",
    href: "/trekking/mustang-region",
    elevation: "3,840m",
    duration: "12-14 Days",
    difficulty: "Moderate",
    about: "The ancient walled kingdom of Lo Manthang with whitewashed fortresses, centuries-old Buddhist cave art, and wind-carved canyons.",
    badge: "Cultural Kingdom",
  },
  "Gokyo Lakes": {
    title: "Gokyo Lakes Trek",
    region: "Khumbu Valley",
    image: "/assets/packages/gokyo-card.jpg",
    href: "/trekking/gokyo-lakes",
    elevation: "5,357m",
    duration: "12 Days",
    difficulty: "Challenging",
    about: "Hike along sacred emerald-turquoise glacial lakes to Gokyo Ri for 360° panoramas of Everest, Lhotse, Makalu, and Cho Oyu.",
    badge: "Glacial Lakes",
  },
  "Pikey Dudhkunda": {
    title: "Pikey Peak Trek",
    region: "Lower Solu Khumbu",
    image: "/assets/packages/4.webp",
    href: "/trekking/pikey-dudhkunda",
    elevation: "4,065m",
    duration: "10 Days",
    difficulty: "Moderate",
    about: "Renowned by Sir Edmund Hillary as offering the greatest sunrise panorama of Mount Everest, accompanied by sacred alpine lakes.",
    badge: "Best Sunrise",
  },
  "Mani Rimdu Festival": {
    title: "Mani Rimdu Festival",
    region: "Tengboche Monastery",
    image: "/assets/packages/5.webp",
    href: "/trekking/mani-rimdu-festival",
    elevation: "3,867m",
    duration: "15 Days",
    difficulty: "Moderate",
    about: "Witness sacred Sherpa Buddhist masked dance ceremonies against the backdrop of Ama Dablam at legendary Tengboche Monastery.",
    badge: "Sacred Festival",
  },
};

const defaultPreview: TrekPreviewData = trekPreviewMap["Everest Base Camp"];

interface TrekkingMenuProps {
  groups: NavGroup[];
  onClose?: () => void;
}

export default function TrekkingMenu({ groups, onClose }: TrekkingMenuProps) {
  const regionsGroup = groups.find((g) => g.heading === "Trekking Regions");
  const popularGroup = groups.find((g) => g.heading === "Popular Treks");
  const [activePreview, setActivePreview] = useState<TrekPreviewData>(defaultPreview);

  return (
    <div className="w-[880px] bg-white border border-slate-200/80 shadow-2xl rounded-sm p-5 grid grid-cols-12 gap-5">
      {/* Column 1: Trekking Regions */}
      <div className="col-span-4 border-r border-slate-100 pr-4">
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Mountain className="w-4 h-4 text-[#0B6E8E]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              {regionsGroup?.heading || "Trekking Regions"}
            </h4>
          </div>
          {regionsGroup?.viewAllHref && (
            <Link
              href={regionsGroup.viewAllHref}
              onClick={onClose}
              className="text-[11px] font-semibold text-[#0B6E8E] hover:text-[#085670] flex items-center gap-1 group"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        <ul className="space-y-0.5">
          {regionsGroup?.items.map((item) => {
            const isHovered = activePreview.title.includes(item.title) || activePreview.region.includes(item.title);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => {
                    if (trekPreviewMap[item.title]) {
                      setActivePreview(trekPreviewMap[item.title]);
                    }
                  }}
                  className={`group flex items-center justify-between px-3 py-2 rounded-xs transition-colors ${
                    isHovered
                      ? "bg-[#EBF7FA] text-[#0B6E8E]"
                      : "text-[#0F172A] hover:bg-[#EBF7FA]/60 hover:text-[#0B6E8E]"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold">{item.title}</span>
                    {item.description && (
                      <span className="text-[10px] text-[#64748B] line-clamp-1">
                        {item.description}
                      </span>
                    )}
                  </div>
                  {item.badge ? (
                    <span className="text-[9px] uppercase font-semibold bg-[#EBF7FA] text-[#0B6E8E] border border-[#0B6E8E]/20 px-1 py-0.5 rounded-2xs">
                      {item.badge}
                    </span>
                  ) : (
                    <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#0B6E8E] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Column 2: Popular Treks */}
      <div className="col-span-4 border-r border-slate-100 pr-4">
        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-[#0B6E8E]" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              {popularGroup?.heading || "Popular Treks"}
            </h4>
          </div>
          {popularGroup?.viewAllHref && (
            <Link
              href={popularGroup.viewAllHref}
              onClick={onClose}
              className="text-[11px] font-semibold text-[#0B6E8E] hover:text-[#085670] flex items-center gap-1 group"
            >
              <span>All Treks</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>

        <ul className="space-y-1">
          {popularGroup?.items.map((item) => {
            const isHovered = activePreview.title === item.title;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => {
                    if (trekPreviewMap[item.title]) {
                      setActivePreview(trekPreviewMap[item.title]);
                    }
                  }}
                  className={`group block p-2 rounded-xs transition-all border ${
                    isHovered
                      ? "border-[#0B6E8E]/30 bg-[#EBF7FA]"
                      : "border-transparent hover:border-[#0B6E8E]/20 hover:bg-[#EBF7FA]/50"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F172A] group-hover:text-[#0B6E8E]">
                    <span>{item.title}</span>
                    {item.badge && (
                      <span className="text-[9px] tracking-wider uppercase font-semibold bg-[#38BDF8]/15 text-[#0B6E8E] border border-[#38BDF8]/30 px-1 py-0.5 rounded-2xs">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {(item.elevation || item.duration) && (
                    <div className="flex items-center gap-2.5 mt-1 text-[11px] text-[#64748B]">
                      {item.elevation && (
                        <span className="inline-flex items-center gap-1">
                          <Gauge className="w-2.5 h-2.5 text-[#0B6E8E]" />
                          <span>{item.elevation}</span>
                        </span>
                      )}
                      {item.duration && (
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5 text-[#0B6E8E]" />
                          <span>{item.duration}</span>
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Column 3: Live Image & About Preview Card */}
      <div className="col-span-4 flex flex-col justify-between pl-1">
        <div>
          {/* Trek Image with Badge */}
          <div className="relative w-full aspect-[16/10] rounded-xs overflow-hidden shadow-xs mb-3 group">
            <Image
              src={activePreview.image}
              alt={activePreview.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            {activePreview.badge && (
              <span className="absolute top-2 left-2 bg-[#0B6E8E]/90 text-white text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-2xs backdrop-blur-xs">
                {activePreview.badge}
              </span>
            )}
            <div className="absolute bottom-2 left-2 right-2 text-white">
              <span className="text-[10px] text-white/80 font-medium tracking-wide uppercase block">
                {activePreview.region}
              </span>
              <h5 className="font-serif font-bold text-sm leading-tight text-white drop-shadow-xs">
                {activePreview.title}
              </h5>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-1 bg-[#F8FAFC] border border-slate-200/60 rounded-xs p-1.5 mb-2.5 text-center">
            <div>
              <span className="text-[9px] uppercase text-[#64748B] block font-medium">Elevation</span>
              <span className="text-[11px] font-bold text-[#0F172A]">{activePreview.elevation}</span>
            </div>
            <div className="border-x border-slate-200/60">
              <span className="text-[9px] uppercase text-[#64748B] block font-medium">Duration</span>
              <span className="text-[11px] font-bold text-[#0F172A]">{activePreview.duration}</span>
            </div>
            <div>
              <span className="text-[9px] uppercase text-[#64748B] block font-medium">Difficulty</span>
              <span className="text-[11px] font-bold text-[#0B6E8E]">{activePreview.difficulty}</span>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
              About This Journey:
            </span>
            <p className="text-[11px] text-[#64748B] leading-relaxed line-clamp-3">
              {activePreview.about}
            </p>
          </div>
        </div>

        {/* View Details CTA */}
        <Link
          href={activePreview.href}
          onClick={onClose}
          className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#0B6E8E] hover:bg-[#085670] text-white text-xs font-bold rounded-xs shadow-2xs transition-colors"
        >
          <span>Explore Trail Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
