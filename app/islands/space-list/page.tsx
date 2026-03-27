"use client";

import Image from "next/image";
import { planets } from "@/app/lib/planet";

export default function SpaceList() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Space Card List</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {planets.map((planet) => (
          <div
            key={planet.name}
            className="bg-black bg-opacity-70 p-4 rounded-xl flex flex-col items-center shadow-lg hover:scale-105 transition-transform"
          >
            <Image
              src={planet.image}
              alt={planet.name}
              width={120}
              height={120}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{planet.name}</h2>
            <p className="text-center mt-2 text-sm">{planet.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}