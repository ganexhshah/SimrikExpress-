import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  icon,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none text-center";

  const variants = {
    primary:
      "bg-[#0B6E8E] text-white hover:bg-[#085670] focus-visible:ring-[#38BDF8] shadow-sm active:translate-y-px font-medium",
    secondary:
      "bg-[#16A6C7] text-white hover:bg-[#128BA7] focus-visible:ring-[#38BDF8] shadow-sm active:translate-y-px font-medium",
    outline:
      "border border-[#0B6E8E]/30 text-[#0B6E8E] bg-white hover:bg-[#EBF7FA] hover:border-[#0B6E8E] focus-visible:ring-[#38BDF8] active:translate-y-px",
    ghost:
      "text-[#64748B] hover:text-[#0B6E8E] hover:bg-[#EBF7FA] focus-visible:ring-[#38BDF8]",
    gold:
      "bg-[#38BDF8] text-[#0F172A] hover:bg-[#0EA5E9] focus-visible:ring-[#0B6E8E] shadow-sm active:translate-y-px font-semibold",
  }[variant];

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs tracking-wider uppercase rounded-xs gap-1.5",
    md: "px-5 py-2.5 text-sm tracking-wide rounded-xs gap-2",
    lg: "px-6 py-3 text-base tracking-wide rounded-xs gap-2.5",
  }[size];

  const combinedClasses = `${baseStyles} ${variants} ${sizes} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {icon && <span className="inline-flex shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
