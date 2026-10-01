import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import {
  WHATSAPP_URL,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
  LOCATION_ADDRESS,
} from "@/data/navigation";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#F8FAFC] overflow-hidden">
      {/* Kathmandu Cultural Heritage Skyline Illustration */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src="/assets/hero/footer.svg"
          alt="Kathmandu Cultural Heritage Skyline"
          fill
          priority={false}
          className="object-cover object-bottom opacity-55"
          sizes="100vw"
        />
        {/* Soft atmospheric white wash from top to bottom ensuring illustration is visible while guaranteeing 100% text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/65 via-[#F8FAFC]/80 to-[#F8FAFC]/95 pointer-events-none" />
      </div>

      <Container size="wide" className="relative z-10 pt-20 sm:pt-28 lg:pt-36 pb-6 sm:pb-8 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Info & Contacts (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-5 group">
                <div className="relative w-10 h-10 drop-shadow-xs">
                  <Image
                    src="/assets/logo/logo.svg"
                    alt="Simrik Express Nepal"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-black tracking-widest text-[#0F172A] text-xl uppercase drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    SIMRIK <span className="text-[#0B6E8E]">EXPRESS</span>
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#0B6E8E] font-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
                    Travel · Treks · Nepal
                  </span>
                </div>
              </Link>

              <p className="text-[#0F172A] text-sm leading-relaxed mb-6 max-w-sm font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Dedicated to authentic Himalayan trekking, high-altitude peak expeditions, and responsible mountaineering across Nepal with Simrik Express. Licensed by the Government of Nepal Ministry of Tourism.
              </p>
            </div>

            <div className="space-y-3.5 text-xs text-[#0F172A] pt-2">
              <div className="flex items-center gap-2.5 font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                <MapPin className="w-4 h-4 text-[#0B6E8E] shrink-0 stroke-[2.5]" />
                <span className="text-[#0F172A]">{LOCATION_ADDRESS}</span>
              </div>

              <div className="flex items-center gap-2.5 font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                <Phone className="w-4 h-4 text-[#0B6E8E] shrink-0 stroke-[2.5]" />
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                  className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-bold"
                >
                  {PHONE_NUMBER}
                </a>
              </div>

              <div className="flex items-center gap-2.5 font-bold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                <Mail className="w-4 h-4 text-[#0B6E8E] shrink-0 stroke-[2.5]" />
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-bold"
                >
                  {EMAIL_ADDRESS}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B6E8E] hover:bg-[#085670] text-white rounded-xs text-xs font-bold transition-all shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Direct WhatsApp Line</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns (Col 5-12) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Col 1: Trekking */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] mb-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Trekking Regions
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/trekking/everest-region" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Everest Region
                  </Link>
                </li>
                <li>
                  <Link href="/trekking/annapurna-region" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Annapurna Region
                  </Link>
                </li>
                <li>
                  <Link href="/trekking/langtang-region" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Langtang Region
                  </Link>
                </li>
                <li>
                  <Link href="/trekking/manaslu-region" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Manaslu Region
                  </Link>
                </li>
                <li>
                  <Link href="/trekking/mustang-region" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Mustang Region
                  </Link>
                </li>
                <li>
                  <Link href="/trekking/dolpa-region" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Dolpa Region
                  </Link>
                </li>
                <li className="pt-1">
                  <Link href="/trekking/regions" className="text-[#0B6E8E] font-black inline-flex items-center gap-1 hover:underline drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    <span>All Regions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Expeditions */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] mb-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Expeditions
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/expeditions/8000m" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    8000m Giants
                  </Link>
                </li>
                <li>
                  <Link href="/expeditions/7000m" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    7000m Peaks
                  </Link>
                </li>
                <li>
                  <Link href="/expeditions/6000m" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    6000m Climbing
                  </Link>
                </li>
                <li>
                  <Link href="/expeditions/everest" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Mt. Everest (8,848m)
                  </Link>
                </li>
                <li>
                  <Link href="/expeditions/kangchenjunga" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Kangchenjunga (8,586m)
                  </Link>
                </li>
                <li>
                  <Link href="/expeditions/motorbike-adventure" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Motorbike Adventure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Travel Guide */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] mb-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Travel Guide
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/travel-guide" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Nepal Travel Guide
                  </Link>
                </li>
                <li>
                  <Link href="/travel-guide/packing-list" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Trekking Gear List
                  </Link>
                </li>
                <li>
                  <Link href="/travel-guide/travel-insurance" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Travel Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/travel-guide/faqs" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Himalayan FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/travel-guide/terms-and-conditions" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/travel-guide/inquiry-booking" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Inquiry / Booking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Company */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] mb-4 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                Company
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/company/our-team" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Our Team & Guides
                  </Link>
                </li>
                <li>
                  <Link href="/company/certificates-and-documents" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Certificates & Legal
                  </Link>
                </li>
                <li>
                  <Link href="/company/careers" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Careers in Guiding
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#0F172A] hover:text-[#0B6E8E] transition-colors font-semibold drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accreditation and Legal Strip pushed further down side with high contrast */}
        <div className="mt-20 sm:mt-28 lg:mt-32 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#0F172A] drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0B6E8E] shrink-0 stroke-[2.5]" />
            <span className="text-[#0F172A] font-bold">
              Govt. of Nepal Ministry of Culture, Tourism & Civil Aviation Registered Agency
            </span>
          </div>

          <div className="text-[#0F172A] font-bold">
            © {currentYear} Simrik Express Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
