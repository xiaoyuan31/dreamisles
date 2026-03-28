"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import IslandChatbot from "@/app/components/IslandChatbot";

export default function EnergyIsland() {
  const [isOn, setIsOn] = useState(false);
const energyMessages = [
    "The island is glowing brightly! ⚡",
    "Collect energy orbs to boost power! 🌟",
    "Energy levels are high today!",
    "Keep the bulb on to maintain the glow!",
    "Feeling charged and alive! 🔋",
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6 py-4">
      
      {/* 🌈 Dynamic Background */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          isOn
            ? "bg-gradient-to-b from-indigo-500 via-yellow-400 to-yellow-700"
            : "bg-gradient-to-b from-[#0B1D51] via-[#1a2a6c] to-black"
        }`}
      ></div>

      {/* ✨ Stars */}
      <div
        className={`absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:25px_25px] transition-opacity duration-1000 ${
          isOn ? "opacity-10" : "opacity-20"
        }`}
      ></div>

       <img
        src="/images/island-5.png"
        alt="Energy Island"
        className=" top-10 z-20 w-30 md:w-46 animate-float drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
      />


      {/* 📝 Content */}
      <div className="relative z-30 text-center mt-5 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Energy Island
        </h1>

        <p className="text-lg opacity-90 italic mb-6">
          {isOn ? "The island is glowing with energy!" : "Tap the bulb to light up the island."}
        </p>

        {/* 💡 Interactive Bulb */}
        <div
          onClick={() => setIsOn(!isOn)}
          className={`absolute top-52 left-1/2 -translate-x-1/2 cursor-pointer w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
            isOn
              ? "bg-yellow-400 shadow-[0_0_30px_rgba(255,255,200,0.6)]"
              : "bg-gray-600 shadow-none"
          }`}
        >
          <span className="text-black font-bold">{isOn ? "💡" : "⚫"}</span>
        </div>      

        <Link
          href="/islands"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faCompass} />
          Back to Islands
        </Link>

        <Link
          href="/islands/energy-on"
          className="inline-flex items-center gap-2 ms-5 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faList} />
          Energy On
        </Link>

        <IslandChatbot persona="Energy Island" messages={energyMessages} />

      </div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}