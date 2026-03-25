// components/FloatingIsland.jsx
"use client";
import { useRouter } from "next/navigation";

export default function FloatingIsland({ title, position, link }) {
    const router = useRouter();
  return (
    <div
        onClick={() => router.push(link)}
        className={`absolute ${position} flex flex-col items-center cursor-pointer group`}
    >
      {/* Island Glow */}
      <div className="w-20 h-6 bg-pink-400/30 blur-xl rounded-full absolute top-8"></div>

      {/* Island */}
      <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-float group-hover:scale-110 transition"></div>

      {/* Label */}
      <p className="mt-3 text-sm opacity-80 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}