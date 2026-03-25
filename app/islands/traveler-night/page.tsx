"use client";

import Image from "next/image";
import Link from "next/link";

export default function TravelerNightIsland() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center text-white overflow-hidden px-6">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D51] via-[#1a2a6c] to-black animate-gradient"></div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* 🌙 Moon Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>

      {/* 🏝️ Island */}
      <div className="absolute top-20 left-1/2 z-10 flex flex-col items-center">
        <Image
          src="/images/island_one.png"
          alt="Traveler Island"
          width={200}
          height={35}
          className="animate-float"
        />

        {/* Glow under island */}
        <div className="w-40 h-10 bg-pink-400/20 blur-2xl rounded-full -mt-6"></div>
      </div>

      {/* 📝 Text */}
      <div className="z-20 text-center mt-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Traveler’s Rest
        </h1>

        <p className="opacity-80 italic mb-6">
          You’ve come far… stay for a while.
        </p>

        <p className="text-sm opacity-70">
          Choose your next destination when you're ready.
        </p>
      </div>

      {/* 🧭 Island Links */}
      <div className="z-20 mt-10 flex gap-6 flex-wrap justify-center">
        <Link href="/islands/ice-cream">
          <div className="px-5 py-2 border border-white/30 rounded-full hover:bg-white/10 transition">
            🍦 Ice Cream Island
          </div>
        </Link>

        <Link href="/islands/book-nature">
          <div className="px-5 py-2 border border-white/30 rounded-full hover:bg-white/10 transition">
            🌌 Space Island
          </div>
        </Link>

      
      </div>

    </div>
  );
}