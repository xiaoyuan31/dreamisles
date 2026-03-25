"use client";
import Stars from "../../components/Stars";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCompass } from "@fortawesome/free-solid-svg-icons";

export default function TravelerNight() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6">

      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D51] via-[#1a2a6c] to-black"></div>

      {/* ✨ Stars Background */}
      <Stars />

      {/* 🌙 Moon Glow */}
      <div className="moon"></div>

      {/* 🏝 Floating Island */}
      <img
        src="/images/island-1.png"
        alt="Traveler Night Island"
        className="absolute left-1/2 top-10 z-20 w-40 md:w-56 animate-float drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
      />

      {/* ✨ Floating Small Stars */}
      <div className="twinkle" style={{ top: "20%", left: "30%" }}></div>
      <div className="twinkle" style={{ top: "40%", left: "70%" }}></div>
      <div className="twinkle" style={{ top: "70%", left: "20%" }}></div>
      <div className="twinkle" style={{ top: "60%", left: "80%" }}></div>

      {/* 📝 Content */}
      <div className="relative z-30 text-center mt-10 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Traveler Night
        </h1>

        <p className="text-lg opacity-80 italic mb-6">
          A quiet island where travelers rest under the endless stars...
        </p>

        <Link
          href="/islands"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faCompass} />
          Back to Islands
        </Link>

        <Link
          href="/islands/start_dream"
          className="inline-flex ms-2 items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:scale-105 transition"
        >
          <FontAwesomeIcon icon={faBed} />
          Sleep to Dream
        </Link>
      </div>

      {/* 🌙 CSS */}
      <style jsx>{`
        .moon {
          position: absolute;
          top: 10%;
          right: 15%;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff, rgba(255,255,255,0.2));
          filter: blur(8px);
          opacity: 0.8;
          animation: pulse 4s infinite;
        }

        .twinkle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 0 8px white, 0 0 16px white;
          animation: twinkle 2s infinite ease-in-out;
          z-index: 10;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}