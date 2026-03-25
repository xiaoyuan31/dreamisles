"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TravellerNightIsland() {
  const [loaded, setLoaded] = useState(false);
  const [portal, setPortal] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-indigo-950 via-black to-black text-white">

      {/* 🌌 Stars */}
      <div className="absolute inset-0 animate-pulse opacity-70">
        <div className="stars"></div>
      </div>

      {/* 🌫️ Fog Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="fog"></div>
      </div>

      {/* 🌙 Moon */}
      <div className="absolute top-16 right-20 w-24 h-24 bg-white rounded-full blur-2xl opacity-80"></div>

      {/* 🏕️ Ground */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* 🧍 Traveller */}
      <div
        className={`absolute bottom-24 left-1/2 -translate-x-1/2 transition-all duration-2000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="w-10 h-20 bg-black rounded-full shadow-lg"></div>
      </div>

      {/* 🔥 Campfire */}
      <div
        onClick={() => setPortal(true)}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <div className="relative flex flex-col items-center">

          {/* Fire glow */}
          <div className="absolute w-20 h-20 bg-orange-500 rounded-full blur-2xl animate-pulse opacity-70"></div>

          {/* Flame */}
          <div className="w-6 h-10 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-bounce"></div>

          <p className="text-xs mt-2 opacity-70">tap the fire</p>
        </div>
      </div>

      {/* 🌌 Title */}
      <div
        className={`absolute top-10 w-full text-center transition-all duration-2000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl font-light tracking-widest">
          Traveller Night
        </h1>
        <p className="text-sm opacity-60 mt-2">
          rest… but not alone
        </p>
      </div>

      {/* 🌠 Portal Overlay */}
      {portal && (
        <Link href={'secret-dream'}>
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center animate-fadeIn">
          <div className="w-32 h-32 rounded-full bg-purple-500 blur-2xl animate-ping"></div>
          <p className="mt-6 text-lg animate-pulse">
            A hidden path has opened...
          </p>
        </div>
        </Link>
      )}

      {/* 🎨 Custom Styles */}
      <style jsx>{`
        .stars {
          width: 100%;
          height: 100%;
          background: transparent;
          box-shadow:
            20px 30px white,
            100px 150px white,
            200px 80px white,
            300px 200px white,
            400px 120px white,
            500px 300px white,
            600px 100px white,
            700px 250px white;
        }

        .fog {
          width: 200%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
          animation: fogMove 30s linear infinite;
        }

        @keyframes fogMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}