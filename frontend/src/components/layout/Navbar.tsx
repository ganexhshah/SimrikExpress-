"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  navigationData,
  WHATSAPP_URL,
  WHATSAPP_LABEL,
  LANGUAGES,
  NavItem,
} from "@/data/navigation";
import CompanyMenu from "@/components/navigation/CompanyMenu";
import TrekkingMenu from "@/components/navigation/TrekkingMenu";
import ExpeditionsMenu from "@/components/navigation/ExpeditionsMenu";
import TravelGuideMenu from "@/components/navigation/TravelGuideMenu";
import MobileMenu from "./MobileMenu";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { ChevronDown, Globe, Menu } from "lucide-react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Check if scrolled past top threshold
          setIsScrolled(currentScrollY > 20);

          // Scroll direction logic
          if (currentScrollY <= 60) {
            // Near top: always visible
            setIsVisible(true);
          } else if (currentScrollY > lastScrollYRef.current && currentScrollY - lastScrollYRef.current > 5) {
            // Scrolling down: hide navbar and close active dropdown
            setIsVisible(false);
            setActiveMenu(null);
            setIsLangDropdownOpen(false);
          } else if (currentScrollY < lastScrollYRef.current && lastScrollYRef.current - currentScrollY > 5) {
            // Scrolling up: reveal navbar
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (title: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out transform ${
          isVisible ? "translate-y-0" : "-translate-y-full pointer-events-none"
        } ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3"
            : "bg-[#F8FAFC]/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Side: Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 shrink-0 focus:outline-none"
              aria-label="Simrik Express Homepage"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11">
                <Image
                  src="/assets/logo/logo.svg"
                  alt="Simrik Express Nepal"
                  fill
                  priority
                  className="object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black tracking-[0.14em] text-[#0F172A] text-lg sm:text-xl uppercase leading-none">
                  SIMRIK <span className="text-[#0B6E8E] font-black">EXPRESS</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#64748B] font-bold mt-1">
                  Travel · Treks · Nepal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2"
              onMouseLeave={handleMouseLeave}
            >
              {navigationData.map((item: NavItem) => {
                const isDropdown = item.type !== "link";
                const isOpen = activeMenu === item.title;

                if (!isDropdown) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="px-3.5 py-2 text-sm font-semibold text-[#0F172A] hover:text-[#0B6E8E] transition-colors rounded-xs focus:outline-none"
                    >
                      {item.title}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.title)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-colors rounded-xs cursor-pointer focus:outline-none ${
                        isOpen
                          ? "text-[#0B6E8E] bg-[#EBF7FA]"
                          : "text-[#0F172A] hover:text-[#0B6E8E] hover:bg-[#EBF7FA]/50"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#0B6E8E]" : "text-[#64748B]"
                        }`}
                      />
                    </button>

                    {/* Desktop Dropdown / Mega Menu Rendering */}
                    {isOpen && (
                      <div
                        className={`absolute top-full pt-3 z-50 ${
                          item.title === "Trekking" || item.title === "Expeditions"
                            ? "left-1/2 -translate-x-1/2"
                            : "left-0"
                        }`}
                        onMouseEnter={() => handleMouseEnter(item.title)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.title === "Company" && item.items && (
                          <CompanyMenu items={item.items} onClose={() => setActiveMenu(null)} />
                        )}

                        {item.title === "Trekking" && item.groups && (
                          <TrekkingMenu groups={item.groups} onClose={() => setActiveMenu(null)} />
                        )}

                        {item.title === "Expeditions" && item.groups && (
                          <ExpeditionsMenu groups={item.groups} onClose={() => setActiveMenu(null)} />
                        )}

                        {item.title === "Travel Guide" && item.items && (
                          <TravelGuideMenu items={item.items} onClose={() => setActiveMenu(null)} />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Side: Language & WhatsApp CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 200)}
                  className="flex items-center gap-2 px-2.5 py-1.5 text-xs font-semibold text-[#0F172A] hover:text-[#0B6E8E] hover:bg-[#EBF7FA] rounded-xs transition-colors"
                  aria-label="Select language"
                >
                  {(() => {
                    const current = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];
                    return (
                      <>
                        <div className="relative w-4 h-3 overflow-hidden rounded-xs shrink-0 shadow-2xs border border-slate-200/60">
                          <Image
                            src={current.flag}
                            alt={current.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span>{current.code}</span>
                      </>
                    );
                  })()}
                  <ChevronDown className="w-3 h-3 text-[#64748B]" />
                </button>

                {isLangDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-36 bg-white border border-slate-200/80 shadow-lg rounded-xs py-1 z-50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors flex items-center gap-2.5 ${
                          currentLang === lang.code
                            ? "bg-[#EBF7FA] text-[#0B6E8E] font-semibold"
                            : "text-[#0F172A] hover:bg-slate-50"
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
                        <span className="flex-1">{lang.name}</span>
                        <span className="text-[10px] text-[#64748B] font-semibold">{lang.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#0B6E8E] bg-[#EBF7FA] hover:bg-[#0B6E8E] hover:text-white border border-[#0B6E8E]/30 rounded-xs transition-all shadow-2xs hover:shadow-xs"
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#38BDF8] opacity-75" />
                  <WhatsAppIcon className="w-4 h-4 relative inline-flex shrink-0" />
                </div>
                <span>{WHATSAPP_LABEL}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 hover:bg-[#EBF7FA] text-[#0B6E8E] rounded-full transition-colors inline-flex items-center justify-center"
                aria-label="WhatsApp Us"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-[#0F172A] hover:text-[#0B6E8E] hover:bg-[#EBF7FA] rounded-xs transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentLang={currentLang}
        onSelectLang={(lang) => setCurrentLang(lang)}
      />
    </>
  );
}
