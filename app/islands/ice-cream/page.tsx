"use client";
import Stars from "../../components/Stars";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faIceCream } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const flavors = ["Vanilla", "Strawberry", "Chocolate", "Mint", "Blueberry", "Caramel"];

export default function IceCreamIsland() {
  const [sprinkles, setSprinkles] = useState<{ left: number; color: string; delay: number }[]>([]);

  // 🍬 Generate sprinkles
  const triggerSprinkles = (originLeft?: number) => {
    const newSprinkles = Array.from({ length: 15 }, (_, i) => ({
      left: originLeft !== undefined ? originLeft + Math.random() * 10 - 5 : Math.random() * 100,
      color: ["#ff69b4", "#ffd700", "#87cefa", "#fff"][i % 4],
      delay: Math.random(),
    }));
    setSprinkles((prev) => [...prev, ...newSprinkles]);

    setTimeout(() => {
      setSprinkles((prev) => prev.filter((_, i) => i >= newSprinkles.length));
    }, 3000);
  };

  // 🍭 Random candies
  const [candies] = useState(
    Array.from({ length: 15 }, () => ({
      top: Math.random() * 80,
      left: Math.random() * 90,
      size: 8 + Math.random() * 12,
      flavor: flavors[Math.floor(Math.random() * flavors.length)],
      delay: Math.random() * 5,
    }))
  );

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6">

      {/* 🌈 Background */}
 <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D51] via-[#1a2a6c] to-black"></div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:25px_25px]"></div>

      {/* 🍦 Floating Island */}
      <img
        src="/images/island-2.png"
        alt="Ice Cream Island"
        className="absolute left-1/2 top-10 z-20 w-40 md:w-56 animate-float drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
      />

      {/* 🍬 Sprinkles Animation */}
      {sprinkles.map((s, i) => (
        <div
          key={i}
          className="sprinkle"
          style={{
            left: `${s.left}%`,
            background: s.color,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* 🍭 Floating Candy */}
      {candies.map((c, i) => (
        <div
          key={i}
          className="bubble group"
          style={{
            top: `${c.top}%`,
            left: `${c.left}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            animationDelay: `${c.delay}s`,
          }}
          onClick={() => triggerSprinkles(c.left)}
        >
          <span className="tooltip">{c.flavor}</span>
        </div>
      ))}

      {/* 📝 Content */}
      <div className="relative z-30 text-center mt-10 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Ice Cream Island
        </h1>

        <p className="text-lg opacity-90 italic mb-6">
          A sweet world filled with colorful dreams and endless flavors 🍭
        </p>

        {/* 🍬 Action Button */}
        <button
          onClick={() => triggerSprinkles()}
          className="mb-4 bg-white/20 px-6 py-2 rounded-full hover:bg-white/30 transition"
        >
          Sprinkle Magic ✨
        </button>

        <br />

        <Link
          href="/islands"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faCompass} />
          Back to Islands
        </Link>

        <Link
          href="/islands/ice-cream-maker"
          className="inline-flex items-center ms-2 gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:scale-105 transition">
          <FontAwesomeIcon icon={faIceCream} />
          Make Ice Cream
        </Link>
      </div>

      {/* 🍦 CSS */}
      <style jsx>{`
        .sprinkle {
          position: absolute;
          top: -10px;
          width: 6px;
          height: 10px;
          border-radius: 2px;
          animation: floatFall 3s ease-in forwards;
        }

        @keyframes floatFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          30% { transform: translateY(20px) rotate(90deg); opacity: 0.9; }
          60% { transform: translateY(80px) rotate(180deg); opacity: 0.7; }
          100% { transform: translateY(300px) rotate(360deg); opacity: 0; }
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.7);
          animation: floatCandy 5s infinite ease-in-out;
          cursor: pointer;
        }

        @keyframes floatCandy {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-20px); opacity: 1; }
        }

        /* Tooltip */
        .tooltip {
          position: absolute;
          bottom: 120%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.7);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
          white-space: nowrap;
        }

        .group:hover .tooltip {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}