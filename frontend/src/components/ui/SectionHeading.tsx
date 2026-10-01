import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  actionText?: string;
  actionHref?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  actionText,
  actionHref,
  className = "",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-10 sm:mb-12 ${
        isCentered ? "text-center mx-auto max-w-3xl" : "flex flex-col md:flex-row md:items-end md:justify-between gap-4"
      } ${className}`}
    >
      <div className={isCentered ? "w-full" : "max-w-2xl"}>
        {eyebrow && (
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-[#0B6E8E] uppercase mb-2">
            {eyebrow}
          </span>
        )}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl tracking-tight text-[#0F172A] font-semibold leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-[#64748B] text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionHref && !isCentered && (
        <div className="shrink-0 pt-2 md:pt-0">
          <Link
            href={actionHref}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B6E8E] hover:text-[#085670] transition-colors"
          >
            <span>{actionText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
}
