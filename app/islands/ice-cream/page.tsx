"use client";
import Stars from "../../components/Stars";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function IceCreamIsland() {
  const [sprinkles, setSprinkles] = useState(false);

  const triggerSprinkles = () => {
    setSprinkles(true);
    setTimeout(() => setSprinkles(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6">

      {/* 🌈 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-400 via-purple-300 to-blue-300"></div>

      {/* ✨ Stars (lighter for fun vibe) */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:25px_25px]"></div>

      {/* 🍦 Floating Island */}
      <img
        src="/images/island-2.png"
        alt="Ice Cream Island"
        className="relative z-20 w-40 md:w-56 animate-float drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
      />

      {/* 🍬 Sprinkles Animation */}
      {sprinkles && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="sprinkle"
              style={{
                left: `${Math.random() * 100}%`,
                background:
                  ["#ff69b4", "#ffd700", "#87cefa", "#fff"][i % 4],
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* ✨ Floating Candy Dots */}
      <div className="bubble" style={{ top: "20%", left: "20%" }}></div>
      <div className="bubble" style={{ top: "30%", left: "70%" }}></div>
      <div className="bubble" style={{ top: "70%", left: "30%" }}></div>
      <div className="bubble" style={{ top: "60%", left: "80%" }}></div>

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
          onClick={triggerSprinkles}
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
      </div>

      {/* 🍦 CSS */}
      <style jsx>{`
        .sprinkle {
          position: absolute;
          top: -10px;
          width: 6px;
          height: 10px;
          border-radius: 2px;
          animation: fall 2s linear forwards;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(300px) rotate(180deg);
            opacity: 0;
          }
        }

        .bubble {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.6);
          animation: float 4s infinite ease-in-out;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}