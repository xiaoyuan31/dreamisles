"use client";

import { useState } from "react";
import Image from "next/image";
import {planets} from "../../lib/planet";

export default function SpaceLook() {
  

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-blue-950 overflow-hidden text-white flex items-center justify-center">

      {/* Sun */}
      <div className="absolute w-24 h-24 flex items-center justify-center z-20">
        <Image src="/sun.png" alt="Sun" width={96} height={96} className="rounded-full" />
      </div>

      {/* Planet Orbits */}
      {planets.map((planet) => (
        <div
          key={planet.name}
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{
            width: `${planet.distance * 2}px`,
            height: `${planet.distance * 2}px`,
            marginLeft: `-${planet.distance}px`,
            marginTop: `-${planet.distance}px`,
            animation: `spin linear infinite`,
            animationDuration: `${planet.speed}s`,
            transformOrigin: "50% 50%",
          }}
        >
          {/* Planet */}
          <div
            className="absolute left-1/2 top-0 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
            style={{ width: `${planet.size}px`, height: `${planet.size}px` }}
          >
            <Image src={planet.image} alt={planet.name} width={planet.size} height={planet.size} />
            {/* Info label beside planet */}
            <div className="absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap text-xs md:text-sm font-semibold bg-black bg-opacity-60 px-2 py-1 rounded">
              {planet.name}
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}