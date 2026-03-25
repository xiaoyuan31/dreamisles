
"use client";
import Stars from "../../components/Stars";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Image from "next/image";

export default function MagicalForestIsland() {
  const [stars, setStars] = useState(0);

  const collectStar = () => {
    setStars(stars + 1);
  };

  return (
     <div className="min-h-screen relative flex flex-col items-center text-white overflow-hidden px-6 py-10">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#32cfcf] via-[#0ca3a3] to-[#000] animate-gradient"></div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px]"></div>


      {/* Floating Magical Tree */}
     <div className="absolute top-20 left-1/2 z-10 flex flex-col items-center">
                   <Image
                     src="/images/island-3.png"
                     alt="Traveler Island"
                     width={200}
                     height={35}
                     className="animate-float"
                   />
     
             {/* Glow */}
    <div className="w-48 h-12 bg-pink-400/30 blur-2xl rounded-full -mt-8"></div>
    </div>

      {/* Island Title */}
      <h1 className="text-5xl md:text-6xl z-11 font-extrabold mb-4 tracking-wide text-center">
        Magical Forest
      </h1>
      <p className="text-lg md:text-xl mb-6 z-11 opacity-80 italic text-center">
        A forest where dreams grow among sparkling leaves ✨
      </p>

     
     
    </div>
  );
}