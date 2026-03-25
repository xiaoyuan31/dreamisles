"use client";
import Link from "next/link";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faCompass, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export interface IslandFeature {
  type: "star" | "sound" | "animation" | "info" | "button";
  label?: string;           // For buttons or info popups
  icon?: string;            // FontAwesome icon
  action?: () => void;      // Optional callback
}

export interface Island {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  icon?: string;
  features?: IslandFeature[]; // <-- new
}



export default function IslandCard(island: Island) {

    const [stars, setStars] = useState(0);

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
    <>
    
    <div className="relative bg-white/10 mb-10 backdrop-blur-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 pt-16 pb-6 overflow-visible text-center mx-5 ">
      
      {/* Image */}
       <img
          src={island.image}
          alt={island.title}
          className="absolute -top-9 left-1/2 -translate-x-1/2 w-24 md:w-28 z-20 animate-float drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]"
        />

      {/* Content */}
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
              case "sound":
                return (
                  <button
                    key={idx}
                    onClick={feature.action}
                    className="px-3 py-1 bg-blue-400/20 rounded-full hover:bg-blue-400/40 transition"
                  >
                    {feature.label || "Play Sound"}
                  </button>
                );
              case "animation":
                return (
                  <button
                    key={idx}
                    onClick={feature.action}
                    className="px-3 py-1 bg-purple-400/20 rounded-full hover:bg-purple-400/40 transition"
                  >
                    {feature.label || "Play Animation"}
                  </button>
                );
              case "info":
                return (
                  <button
                    key={idx}
                    onClick={feature.action}
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
    </>
  );
}