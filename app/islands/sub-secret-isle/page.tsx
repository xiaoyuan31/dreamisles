"use client";
import { useEffect, useState } from "react";
import { useMemory } from "@/app/context/MemoryContext";
import { islands, type Island } from "@/app/data/islands";
import Link from "next/link";


export default function SubSecretIsle() {
  const { hasMemory, saveMemory } = useMemory();
  const [text, setText] = useState("");
  const [rareUnlocked, setRareUnlocked] = useState(false);
  const [showRareText, setShowRareText] = useState(false);
  const [floatingIsland, setFloatingIsland] = useState<null | Island>(null);

  const memories = [
    { key: "subsecret_memory_0", text: "A fragment of a forgotten dream." },
    { key: "subsecret_memory_1", text: "A shadow that feels like home." },
    { key: "subsecret_memory_2", text: "A spark of something unseen." },
  ];


  useEffect(() => {
    if (hasMemory("visited_sub_secret_isle")) {
      setText("You stepped back into the sub-secret isle...");
    } else {
      setText("You enter a hidden nook within the hidden isle...");
      saveMemory("visited_sub_secret_isle");
    }

    const t1 = setTimeout(() => setText("Light glimmers from corners unknown..."), 4000);
    const t2 = setTimeout(() => setText("Memories float like whispers..."), 9000);

    const rareTimer = setTimeout(() => {
      if (!hasMemory("subsecret_rare_memory")) {
        saveMemory("subsecret_rare_memory");
        setRareUnlocked(true);
        setShowRareText(true);
        setTimeout(() => setShowRareText(false), 4000);
      }
    }, 20000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(rareTimer);
    };
  }, []);

  // Click rare orb → show random floating island object
  const handleRareClick = () => {
    const randomIsland = islands[Math.floor(Math.random() * islands.length)];
    setFloatingIsland(randomIsland);

    setTimeout(() => setFloatingIsland(null), 6000); // hide after 6s
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-800 to-black text-white text-center overflow-hidden">

      <h1 className="text-xl md:text-2xl animate-pulse z-10">{text}</h1>

      {memories.map((m, i) => (
        <div
          key={i}
          onClick={() => saveMemory(m.key)}
          className="absolute w-5 h-5 bg-purple-500 rounded-full blur-sm cursor-pointer animate-pulse z-10"
          style={{ top: `${25 + i * 20}%`, left: `${20 + i * 25}%` }}
        />
      ))}

      {rareUnlocked && (
        <div
          onClick={handleRareClick}
          className="absolute top-2/3 left-3/4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full cursor-pointer animate-ping shadow-lg flex items-center justify-center z-10"
        >
          <div className="absolute w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
        </div>
      )}

      {showRareText && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-yellow-300 text-xl font-bold animate-float z-20">
          ✨ Rare memory discovered! ✨
        </div>
      )}

      {/* Floating island from last dream */}
      {floatingIsland && (
        <Link href={floatingIsland.href} >
            <div className="absolute py-20 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-40 rounded-2xl shadow-2xl flex flex-col items-center justify-center z-30 animate-float p-4">
            <img src={floatingIsland.image} alt={floatingIsland.title} className="w-30 object-cover rounded-md mb-2"/>
            </div>
        </Link>
      )}

      <style jsx>{`
        @keyframes float { 0% { transform: translate(-50%,0); opacity:0 } 10% { opacity:1 } 100% { transform: translate(-50%,-100px); opacity:0 } }
        .animate-float { animation: float 4s ease-out forwards; }

        @keyframes pulse-shadow { 0%,100%{transform:scale(1);opacity:0.1} 50%{transform:scale(1.5);opacity:0.2} }
        .animate-pulse-shadow { animation: pulse-shadow 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
}