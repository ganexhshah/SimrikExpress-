import React from "react";
import Link from "next/link";
import { NavSubItem } from "@/data/navigation";
import { BookOpen, Backpack, FileText, HelpCircle, ShieldAlert, Send, ArrowRight } from "lucide-react";

interface TravelGuideMenuProps {
  items: NavSubItem[];
  onClose?: () => void;
}

const guideIcons: Record<string, React.ReactNode> = {
  "Travel Guide": <BookOpen className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "Trekking Packing List": <Backpack className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "Terms and Conditions": <FileText className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "FAQs": <HelpCircle className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "Travel Insurance": <ShieldAlert className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "Inquiry / Booking": <Send className="w-4 h-4 text-[#0B6E8E] group-hover:text-white transition-colors" />,
};

export default function TravelGuideMenu({ items, onClose }: TravelGuideMenuProps) {
  return (
    <div className="w-[520px] bg-white border border-slate-200 shadow-2xl rounded-sm p-5 grid grid-cols-2 gap-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="group p-2.5 rounded-xs hover:bg-[#EBF7FA]/40 border border-transparent hover:border-[#0B6E8E]/30 transition-all flex items-start gap-2.5"
        >
          <div className="p-2 bg-[#EBF7FA] rounded-xs group-hover:bg-[#0B6E8E] transition-colors shrink-0 mt-0.5">
            {guideIcons[item.title] || <BookOpen className="w-4 h-4 text-[#0B6E8E] group-hover:text-white" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-[#0F172A] group-hover:text-[#0B6E8E] flex items-center justify-between">
              <span>{item.title}</span>
              <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#0B6E8E] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
            </div>
            {item.description && (
              <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </Link>
      ))}

      <div className="col-span-2 mt-2 pt-3 border-t border-slate-100 px-2 flex items-center justify-between text-xs text-[#64748B]">
        <span>Need custom assistance?</span>
        <Link
          href="/travel-guide/inquiry-booking"
          onClick={onClose}
          className="font-semibold text-[#0B6E8E] hover:text-[#085670] flex items-center gap-1"
        >
          <span>Send an Inquiry</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
