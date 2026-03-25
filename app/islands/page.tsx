
import IslandCard from "../components/IslandCard";
import Portal from "../components/Portal";
import Stars from "../components/Stars";
import { islands, type Island, type IslandFeature } from "@/app/data/islands";

export default function IslandList() {

  return (
    <div className="min-h-screen relative px-6 py-20 text-white overflow-hidden">

      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D51] via-[#1a2a6c] to-black"></div>

      {/* ✨ Stars */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Island Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-11 place-items-center">
        {islands.map((island) => (
          <IslandCard key={island.id} {...island} />
        ))}
      </div>



      {/* <Portal href="/islands/traveler-night" label="🌙" top="20%" left="15%" />
      <Portal href="/islands/ice-cream" label="🍦" top="40%" left="50%" />
      <Portal href="/islands/magical-forest" label="🌲" top="65%" left="30%" />
      <Portal href="/islands/space" label="🚀" top="30%" left="75%" /> */}
      
    </div>
  );
}