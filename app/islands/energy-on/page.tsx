"use client";
import { useState, useEffect } from "react";

export default function EnergyIsland() {
  const [isOn, setIsOn] = useState(false);
  const [stars, setStars] = useState<Array<{ id: number; top: string; left: string; size: string }>>([]);
  const [orbs, setOrbs] = useState<Array<{ id: number; top: string; left: string; size: string }>>([]);
  const [randomText, setRandomText] = useState("");

  const messages = [
    "The island is glowing with energy ✨",
    "Stars are twinkling brightly tonight 🌠",
    "Electricity flows like magic through the island ⚡",
    "Floating orbs are dancing around you 🌟",
    "Energy levels are high! Keep exploring 🔋",
  ];

  // Change text randomly every 3 seconds while electricity is on
  useEffect(() => {
    if (!isOn) return; // stop if off
    setRandomText(messages[Math.floor(Math.random() * messages.length)]);
    const interval = setInterval(() => {
      setRandomText(messages[Math.floor(Math.random() * messages.length)]);
    }, 3000);

    const tempStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
    }));
    setStars(tempStars);

    return () => clearInterval(interval);


  }, [isOn]);


  // Generate floating orbs
  useEffect(() => {
    const tempOrbs = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      size: `${Math.random() * 12 + 8}px`,
    }));
    setOrbs(tempOrbs);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden px-6 bg-black">
      
      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          isOn
            ? "bg-gradient-to-b from-yellow-500 via-yellow-400 to-yellow-700"
            : "bg-gradient-to-b from-[#0B1D51] via-[#1a2a6c] to-black"
        }`}
      ></div>

      {/* ✨ Static Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-indigo rounded-full opacity-70 animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
        ></div>
      ))}

      {/* 🌠 Shooting Stars */}
      {isOn && Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-black rounded-full animate-shootingStar"
          style={{
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        ></div>
      ))}

      {/* 🍦 Floating Island */}
      <div className="relative z-20 mt-10">
       
        {isOn && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400  to-yellow-500 opacity-40 blur-3xl animate-pulse"></div>
        )}
      </div>

      {/* 💡 Interactive Bulb */}
      <div
        onClick={() => setIsOn(!isOn)}
        className={`absolute top-56 left-1/2 -translate-x-1/2 cursor-pointer w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 z-30 ${
          isOn
            ? "bg-indigo-400 shadow-[0_0_30px_rgba(255,255,200,0.6)]"
            : "bg-gray-600 shadow-none"
        }`}
      >
        <span className="text-black font-bold text-2xl">{isOn ? "💡" : "⚫"}</span>
      </div>

      {/* Floating Energy Orbs */}
      {isOn && orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full bg-yellow-300 opacity-80 animate-float-slow"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
          }}
        ></div>
      ))}

      {/* Page Title */}
      {isOn && (
  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 bg-white/20 backdrop-blur-md rounded-xl p-6 w-80 text-center text-black shadow-lg animate-fadeIn">
    <h2 className="font-bold text-xl mb-2">Energy Island Active!</h2>
     <p className="font-semibold">{randomText}</p>
  </div>
)}
      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }

        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0); opacity: 1; }
          100% { transform: translateX(400px) translateY(200px); opacity: 0; }
        }
        .animate-shootingStar { animation: shootingStar 2s linear infinite; }
      `}</style>
    </div>
  );
}