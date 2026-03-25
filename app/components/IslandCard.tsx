"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export interface IslandFeature {
  type: "star" | "effect" | "animation" | "info" | "button";
  label?: string;
  icon?: string;
  action?: () => void;
}

export interface Island {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: string;
  features?: IslandFeature[];
}

export default function IslandCard(island: Island) {
  const [stars, setStars] = useState(0);
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    const savedStars = localStorage.getItem(`island-${island.id}-stars`);
    if (savedStars) setStars(Number(savedStars));
  }, [island.id]);

  const collectStar = () => {
    const newStars = stars + 1;
    setStars(newStars);
    localStorage.setItem(`island-${island.id}-stars`, newStars.toString());
  };

  return (
    <div className="relative bg-white/10 mb-10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 pt-16 pb-6 overflow-visible text-center mx-5">

      {/* Floating Island Image (kept original style) */}
      <img
        src={island.image}
        alt={island.title}
        className="absolute -top-19 left-1/2 -translate-x-1/2 w-24 md:w-28 z-20 drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]"
      />

      {/* Firefly / Magical Effect */}
     {island.features?.some(f => f.type === "effect") && (
  <>
    <div className="firefly" style={{ top: "5%", left: "15%", animationDelay: "0s" }}></div>
    <div className="firefly" style={{ top: "30%", left: "80%", animationDelay: "1s" }}></div>
    <div className="firefly" style={{ top: "70%", left: "20%", animationDelay: "2s" }}></div>
    <div className="firefly" style={{ top: "60%", left: "70%", animationDelay: "1.5s" }}></div>
  </>
)}


{showSparkles && (
  <div className="absolute inset-0 pointer-events-none z-30">
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="sparkle"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random()}s`,
        }}
      />
    ))}
  </div>
)}

      {/* Card Content */}
      <div className="mt-16 px-4">
        <h2 className="text-xl font-bold mb-2 text-white">{island.title}</h2>
        <p className="text-sm opacity-80 mb-4 text-white">{island.description}</p>

        {/* Island Features */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {island.features?.map((feature, idx) => {
            switch (feature.type) {
              case "star":
                return (
                  <button
                    key={idx}
                    onClick={collectStar}
                    className="flex items-center gap-1 bg-yellow-400/20 px-3 py-1 rounded-full hover:bg-yellow-400/40 transition"
                  >
                    <FontAwesomeIcon icon={faStar} className="text-yellow-300" />
                    {stars} {feature.label ? `(${feature.label})` : ""}
                  </button>
                );
              case "animation":
                return (
                  <button
                    key={idx}
                    onClick={() => {
                        setShowSparkles(true);
                        setTimeout(() => setShowSparkles(false), 2000); // auto stop
                    }}
                    className="px-3 py-1 bg-purple-400/20 rounded-full hover:bg-purple-400/40 transition"
                    >
                    {feature.label || "Play Animation"}
                    </button>
                );
              case "info":
                return (
                  <button
                    key={idx}
                    onClick={() => alert(`Fun fact: This island is magical! 🌟`)}
                    className="px-3 py-1 bg-white/20 rounded-full hover:bg-white/30 transition"
                  >
                    {feature.label || "Info"}
                  </button>
                );
              case "button":
                return (
                  <button
                    key={idx}
                    onClick={feature.action}
                    className="px-3 py-1 bg-pink-400/20 rounded-full hover:bg-pink-400/40 transition"
                  >
                    {feature.label || "Action"}
                  </button>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Explore Button */}
        <Link
          href={island.href}
          className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-full hover:shadow-lg transition"
        >
          <FontAwesomeIcon icon={faCompass} />
          Explore
        </Link>
      </div>

     
    </div>
  );
}