"use client";

import Image from "next/image";

export default function SpaceIsland() {
  return (
    <div className="min-h-screen relative flex flex-col items-center text-white overflow-hidden px-6 py-10">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B1D51] to-[#000] animate-gradient"></div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:18px_18px]"></div>

      {/* 🌠 Glow Nebula */}
      <div className="absolute top-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* 🏝️ Island */}
      <div className="absolute top-20 left-1/2 z-10 flex flex-col items-center">
             <Image
               src="/images/island-4.png"
               alt="Traveler Island"
               width={200}
               height={35}
               className="animate-float"
             />

        <div className="w-48 h-12 bg-purple-400/20 blur-2xl rounded-full -mt-8"></div>
      </div>

      {/* 📝 Title */}
      <div className="z-20 text-center mt-40 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Space Island
        </h1>

        <p className="italic opacity-80 mb-6">
          Beyond the sky lies endless possibility 🌌
        </p>

        <p className="text-sm md:text-base opacity-70">
          Welcome to Space Island, where curiosity meets the infinite.
          Explore the mysteries of stars, planets, and the universe itself.
        </p>
      </div>

      {/* 🌍 Sections */}
      <div className="z-20 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">🌍 Planets</h2>
          <p className="text-sm opacity-70">
            Discover worlds beyond Earth, each with its own story.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">⭐ Stars</h2>
          <p className="text-sm opacity-70">
            Learn about the glowing giants lighting the universe.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">🚀 Exploration</h2>
          <p className="text-sm opacity-70">
            Humanity’s journey into the unknown.
          </p>
        </div>

      </div>

      {/* 🌠 Footer hint */}
      <div className="z-20 mt-20 text-center opacity-60 text-sm">
        The universe is waiting...
      </div>

    </div>
  );
}