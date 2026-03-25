"use client";
import Link from "next/link";

interface PortalProps {
  href: string;
  label: string;
  top: string; // e.g. "20%"
  left: string; // e.g. "70%"
}

export default function Portal({ href, label, top, left }: PortalProps) {
  return (
    <Link href={href}>
      <div
        className="absolute w-20 h-20 z-99 rounded-full border-2 border-white/50 flex items-center justify-center text-sm font-bold text-white animate-pulse hover:scale-110 transition-shadow shadow-lg"
        style={{ top, left }}
      >
        {label}
        <div className="absolute w-full h-full rounded-full border border-white/30 animate-glow"></div>
      </div>
    </Link>
  );
}