 "use client";

import Image from "next/image";

export default function IceCreamIsland() {
  return (
    <div className="min-h-screen relative flex flex-col items-center text-white overflow-hidden px-6 py-10">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a6c] via-[#3a0ca3] to-[#000] animate-gradient"></div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* 🍦 Island Image */}
       <div className="absolute top-20 left-1/2 z-10 flex flex-col items-center">
              <Image
                src="/images/island-2.png"
                alt="Traveler Island"
                width={200}
                height={35}
                className="animate-float"
              />

        {/* Glow */}
        <div className="w-48 h-12 bg-pink-400/30 blur-2xl rounded-full -mt-8"></div>
      </div>

      {/* 📝 Title */}
      <div className="z-20 text-center mt-40 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ice Cream Island
        </h1>

        <p className="italic opacity-80 mb-6">
          A world of sweetness and imagination 🍦
        </p>

        <p className="text-sm md:text-base opacity-70">
          Welcome to Ice Cream Island, where every flavor tells a story.
          From classic vanilla to magical creations, this island is a
          celebration of joy, creativity, and sweetness.
        </p>
      </div>

      {/* 🍨 Flavors Section */}
      <div className="z-20 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">

        {/* Flavor Card */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">🍫 Chocolate</h2>
          <p className="text-sm opacity-70">
            Rich, deep, and comforting. A timeless favorite.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">🍦 Vanilla</h2>
          <p className="text-sm opacity-70">
            Simple, elegant, and endlessly versatile.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2">🍓 Strawberry</h2>
          <p className="text-sm opacity-70">
            Sweet, fruity, and full of summer vibes.
          </p>
        </div>

      </div>

      {/* 🎮 Future Interaction */}
      <div className="z-20 mt-20 text-center">
        <p className="opacity-60 text-sm mb-4">
          More experiences coming soon...
        </p>

        <button className="px-6 py-2 border border-white/30 rounded-full hover:bg-white/10 transition">
          Build Your Own Ice Cream (soon)
        </button>
      </div>

    </div>
  );
}