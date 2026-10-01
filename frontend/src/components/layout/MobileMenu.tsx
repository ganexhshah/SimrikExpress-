"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  navigationData,
  WHATSAPP_URL,
  WHATSAPP_LABEL,
  LANGUAGES,
  NavItem,
} from "@/data/navigation";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
  X,
  ChevronDown,
  Globe,
  Mountain,
  MountainSnow,
  BookOpen,
  Building2,
  ArrowRight,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: string;
  onSelectLang: (lang: string) => void;
}

const sectionIconMap: Record<string, React.ReactNode> = {
  Company: <Building2 className="w-4 h-4 text-[#0B6E8E]" />,
  Trekking: <Mountain className="w-4 h-4 text-[#0B6E8E]" />,
  Expeditions: <MountainSnow className="w-4 h-4 text-[#0B6E8E]" />,
  "Travel Guide": <BookOpen className="w-4 h-4 text-[#0B6E8E]" />,
};

export default function MobileMenu({
  isOpen,
  onClose,
  currentLang,
  onSelectLang,
}: MobileMenuProps) {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const toggleAccordion = (title: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0F172A]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
          <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 shrink-0">
              <Image
                src="/assets/logo/logo.svg"
                alt="Simrik Express Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-serif font-bold text-[#0F172A] tracking-wider text-base">
              SIMRIK <span className="text-[#0B6E8E]">EXPRESS</span>
            </span>
          </Link>

          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
          {navigationData.map((item: NavItem) => {
            const hasSubmenu = item.type !== "link";
            const isExpanded = !!openAccordions[item.title];

            if (!hasSubmenu) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-3 px-3 rounded-xs text-base font-semibold text-[#0F172A] hover:bg-[#EBF7FA] hover:text-[#0B6E8E] transition-colors"
                >
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#64748B]" />
                </Link>
              );
            }

            return (
              <div key={item.title} className="border border-slate-200 rounded-xs overflow-hidden">
                <button
                  onClick={() => toggleAccordion(item.title)}
                  className="w-full flex items-center justify-between py-3 px-3 text-base font-semibold text-[#0F172A] hover:bg-[#EBF7FA]/60 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    {sectionIconMap[item.title]}
                    <span>{item.title}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-[#0B6E8E]" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="bg-[#F8FAFC] border-t border-slate-200 px-3 py-2 space-y-3">
                    {/* Groups (Mega Menu) */}
                    {item.groups &&
                      item.groups.map((group) => (
                        <div key={group.heading} className="space-y-1">
                          <span className="text-[11px] font-bold tracking-wider uppercase text-[#64748B] block px-2 pt-1">
                            {group.heading}
                          </span>
                          {group.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={onClose}
                              className="flex items-center justify-between py-1.5 px-2 rounded-xs text-sm text-[#0F172A] hover:text-[#0B6E8E] hover:bg-[#EBF7FA] transition-colors"
                            >
                              <span>{sub.title}</span>
                              {sub.badge && (
                                <span className="text-[10px] font-semibold uppercase bg-[#EBF7FA] text-[#0B6E8E] border border-[#0B6E8E]/20 px-1.5 py-0.2 rounded-2xs">
                                  {sub.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}

                    {/* Direct Items (Dropdown) */}
                    {item.items && (
                      <div className="space-y-1">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={onClose}
                            className="block py-2 px-2 rounded-xs hover:bg-[#EBF7FA] transition-colors"
                          >
                            <span className="block text-sm font-semibold text-[#0F172A] hover:text-[#0B6E8E]">
                              {sub.title}
                            </span>
                            {sub.description && (
                              <span className="block text-xs text-[#64748B] mt-0.5 line-clamp-1">
                                {sub.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer CTAs */}
        <div className="p-5 border-t border-slate-200 bg-[#F8FAFC] space-y-3">
          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0B6E8E] hover:bg-[#085670] text-white font-semibold rounded-xs shadow-sm transition-colors text-sm"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>{WHATSAPP_LABEL}</span>
          </a>

          {/* Language Selector */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
              <Globe className="w-3.5 h-3.5" />
              <span>Language:</span>
            </div>
            <div className="flex items-center gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => onSelectLang(lang.code)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xs transition-colors ${
                    currentLang === lang.code
                      ? "bg-[#0B6E8E] text-white shadow-2xs"
                      : "text-[#0F172A] bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  <div className="relative w-4 h-3 overflow-hidden rounded-xs shrink-0 shadow-2xs border border-slate-200/60">
                    <Image
                      src={lang.flag}
                      alt={lang.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
