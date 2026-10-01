import React from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL, WHATSAPP_LABEL } from "@/data/navigation";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { Send, Mountain } from "lucide-react";

export default function AdventureInquiryBanner() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200">
      <Container size="default">
        <div className="bg-[#0F172A] text-white rounded-2xs p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Decorative mountain icon outline in background */}
          <Mountain className="absolute -right-8 -bottom-10 w-64 h-64 text-[#16A6C7]/15 pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#38BDF8] uppercase block mb-3">
              Tailor-Made Himalayan Journeys
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
              Planning a Custom Trek or Private Expedition?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Speak directly with our senior expedition planners in Kathmandu. We customize acclimatization profiles, handle special permits, and arrange private helicopter connections across Nepal.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href="/travel-guide/inquiry-booking"
                icon={<Send className="w-4 h-4" />}
              >
                Request Custom Itinerary
              </Button>

              <Button
                variant="outline"
                size="md"
                href={WHATSAPP_URL}
                external
                className="bg-transparent border-[#38BDF8] text-white hover:bg-white/10"
                icon={<WhatsAppIcon className="w-4 h-4 shrink-0" />}
              >
                {WHATSAPP_LABEL}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
