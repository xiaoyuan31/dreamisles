"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCompass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Stars from "@/app/components/Stars";

export default function MagicalForest() {
  const [fireflies, setFireflies] = useState(false);

  const triggerFireflies = () => {
    setFireflies(true);
    setTimeout(() => setFireflies(false), 3000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6">

      {/* 🌿 Background */}
     <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D51] via-[#1a2a6c] to-black"></div>
     
    {/* ✨ Stars Background */}
    <Stars />

      {/* 🌫 Fog Layer */}
      <div className="fog"></div>

      {/* 🌲 Floating Island */}
      <img
        src="/images/island-3.png"
        alt="Magical Forest"
        className="relative z-20 w-44 md:w-60 animate-float drop-shadow-[0_0_25px_rgba(0,255,100,0.3)]"
      />

      {/* ✨ Fireflies Animation */}
      {fireflies && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="firefly"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random()}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* 🌟 Always-on Ambient Fireflies */}
      <div className="firefly ambient" style={{ top: "20%", left: "20%" }}></div>
      <div className="firefly ambient" style={{ top: "40%", left: "70%" }}></div>
      <div className="firefly ambient" style={{ top: "70%", left: "30%" }}></div>
      <div className="firefly ambient" style={{ top: "60%", left: "80%" }}></div>

      {/* 📝 Content */}
      <div className="relative z-30 text-center mt-10 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Magical Forest
        </h1>

        <p className="text-lg opacity-80 italic mb-6">
          A mysterious forest where glowing spirits wander in silence...
        </p>

        {/* ✨ Trigger */}
        <button
          onClick={triggerFireflies}
          className="mb-4 bg-green-400/20 px-6 py-2 rounded-full hover:bg-green-400/40 transition"
        >
          Release Fireflies ✨
        </button>

        <Link
          href="/islands/book-library"
          className="inline-flex items-center ms-3 gap-2 bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faBook} />
          Enter book Library
        </Link>

        <br />

        <Link
          href="/islands"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faCompass} />
          Back to Islands
        </Link>
      </div>

      {/* 🌲 CSS */}
      <style jsx>{`
        .firefly {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #aaff88;
          box-shadow: 0 0 10px #aaff88, 0 0 20px #88ffcc;
          animation: float 4s infinite ease-in-out;
        }

        .ambient {
          opacity: 0.6;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(15px, -15px) scale(1.3);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
        }

        .fog {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 70%, rgba(255,255,255,0.05), transparent 70%);
          animation: fogMove 10s infinite alternate ease-in-out;
        }

        @keyframes fogMove {
          0% { transform: translateY(0); opacity: 0.3; }
          100% { transform: translateY(-20px); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}