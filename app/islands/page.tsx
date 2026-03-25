import IslandCard, { Island } from "../components/IslandCard";
import Stars from "../components/Stars";

export default function IslandList() {

  const islands: Island[] = [
    {
      id: "traveler-night",
      title: "Traveler Night",
      description: "A quiet island where travelers rest under the stars.",
      image: "/images/island-1.png",
      href: "/islands/traveler-night",
      features: [
        { type: "star", label: "Collect Star" },
       { type: "effect", label: "Twinkling Stars" },
      ],
    },
    {
      id: "ice-cream",
      title: "Ice Cream Island",
      description: "A sweet world filled with colorful flavors.",
      image: "/images/island-2.png",
      href: "/islands/ice-cream",
      features: [
        { type: "animation", label: "Sprinkles Fall" },
        { type: "info", label: "Fun Facts" },
      ],
    },
    {
      id: "magical-forest",
      title: "Magical Forest",
      description: "A mysterious forest where dreams come alive.",
      image: "/images/island-3.png",
      href: "/islands/magical-forest",
      features: [
        { type: "star", label: "Collect Star" },
        { type: "effect", label: "Fireflies" },
      ],
    },
    {
      id: "space",
      title: "Space",
      description: "A mysterious space where planets exploration occur.",
      image: "/images/island-4.png",
      href: "/islands/space",
      features: [
        { type: "star", label: "Collect Star" },
        { type: "effect", label: "Cosmic Dust" },
      ],
    },
  ];

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
    </div>
  );
}