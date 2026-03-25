"use client";
import { useMemory } from "@/app/context/MemoryContext";

type MemoryItem = {
  key: string;
  text: string;
};

export default function MemoryIsland() {
  const { memory } = useMemory();

  const memoryList: MemoryItem[] = [
    { key: "found_fire_portal", text: "You discovered a hidden fire portal." },
    { key: "visited_secret", text: "You stepped into the island between moments." },
    { key: "memory_0", text: "A night you almost understood everything." },
    { key: "memory_1", text: "A version of you still waiting somewhere." },
    { key: "memory_2", text: "A feeling without a name." },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-8 text-center tracking-widest">
        Memory Journal
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {memoryList.map((item, index) => {
          const unlocked = memory[item.key];

          return (
            <div
              key={index}
              className={`p-6 rounded-xl border transition-all duration-500 ${
                unlocked
                  ? "bg-purple-900/30 border-purple-400 shadow-lg"
                  : "bg-gray-900 border-gray-700 opacity-50"
              }`}
            >
              <p className="text-sm">
                {unlocked ? item.text : "Unknown memory..."}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}