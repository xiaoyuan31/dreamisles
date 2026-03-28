export interface Island {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  features: { type: string; label: string }[];
}

export interface IslandFeature {
  type: "star" | "effect" | "animation" | "info" | "button";
  label?: string;
  icon?: string;
  action?: () => void;
}

export const islands: Island[] = [
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
  {
    id: "energy",
    title: "Energy Island",
    description: "A magical island where energy and lightning come alive.",
    image: "/images/island-5.png",
    href: "/islands/energy",
    features: [
      { type: "star", label: "Collect Energy Star" },
      { type: "effect", label: "Lightning Flashes" },
    ],
  },
];