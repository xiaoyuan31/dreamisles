"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function SpaceIsland() {
  const [particles, setParticles] = useState(false);

  const triggerParticles = () => {
    setParticles(true);
    setTimeout(() => setParticles(false), 2500);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0d0d2b] to-[#1a1a40]"></div>

      {/* ✨ Star Dust */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:15px_15px]"></div>

      {/* 🌌 Floating Island */}
      <img
        src="/images/island-4.png"
        alt="Space Island"
        className="absolute left-1/2 top-[10%] z-20 w-44 md:w-60 animate-float drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]"
      />

      {/* 🌠 Planets & Particles */}
      {particles && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 6}px`,
                height: `${2 + Math.random() * 6}px`,
                animationDelay: `${Math.random()}s`,
                background: `#${Math.floor(Math.random()*16777215).toString(16)}`,
              }}
            />
          ))}
        </div>
      )}

      {/* 📝 Content */}
      <div className="relative z-30 text-center mt-10 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Space Island
        </h1>

        <p className="text-lg opacity-80 italic mb-6">
          Explore a mysterious space where planets drift and stars shine endlessly...
        </p>

        {/* 🌟 Trigger Particles */}
        <button
          onClick={triggerParticles}
          className="mb-4 bg-blue-400/20 px-6 py-2 rounded-full hover:bg-blue-400/40 transition"
        >
          Cosmic Burst ✨
        </button>

        <br />

        <Link
          href="/islands"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faCompass} />
          Back to Islands
        </Link>
      </div>

      {/* 🌌 CSS */}
      <style jsx>{`
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: drift 3s linear forwards;
        }

        @keyframes drift {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-200px) scale(0.5);
            opacity: 0;
          }
        }

        .halo {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%);
          animation: pulse 4s infinite;
          z-index: 10;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>
    </div>
  );
}