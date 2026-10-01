import React from "react";
import Link from "next/link";
import { NavSubItem } from "@/data/navigation";
import { Users, FileCheck, Briefcase, ArrowRight } from "lucide-react";

interface CompanyMenuProps {
  items: NavSubItem[];
  onClose?: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  "Our Team": <Users className="w-5 h-5 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "Certificates & Documents": <FileCheck className="w-5 h-5 text-[#0B6E8E] group-hover:text-white transition-colors" />,
  "Careers": <Briefcase className="w-5 h-5 text-[#0B6E8E] group-hover:text-white transition-colors" />,
};

export default function CompanyMenu({ items, onClose }: CompanyMenuProps) {
  return (
    <div className="w-80 bg-white border border-slate-200/90 shadow-xl rounded-sm p-3 grid gap-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="group flex items-start gap-3 p-3 rounded-xs hover:bg-[#EBF7FA]/50 transition-colors"
        >
          <div className="mt-0.5 p-2 bg-[#EBF7FA] rounded-xs group-hover:bg-[#0B6E8E] transition-colors">
            {iconMap[item.title] || <ArrowRight className="w-5 h-5 text-[#0B6E8E] group-hover:text-white transition-colors" />}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-[#0F172A] group-hover:text-[#0B6E8E] transition-colors flex items-center justify-between">
              <span>{item.title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#0B6E8E] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
            </div>
            {item.description && (
              <p className="text-xs text-[#64748B] mt-1 leading-snug line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
        </Link>
      ))}

      <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-2 bg-[#F8FAFC] rounded-xs text-[11px] text-[#64748B] flex items-center justify-between">
        <span>Govt. Registered Agency</span>
        <span className="font-semibold text-[#0B6E8E]">Kathmandu, Nepal</span>
      </div>
    </div>
  );
}
