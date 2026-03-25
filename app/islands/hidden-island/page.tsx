"use client";
import { useEffect, useState } from "react";
import { useMemory } from "@/app/context/MemoryContext";
import { useRouter } from "next/navigation";

export default function HiddenIsland() {
  const { hasMemory, saveMemory } = useMemory();
  const router = useRouter();

  const [text, setText] = useState("");
  const [rareUnlocked, setRareUnlocked] = useState(false);
  const [showRareText, setShowRareText] = useState(false);
  const [portalActive, setPortalActive] = useState(false);

  // Memory orbs in this island
  const memories = [
    { key: "hidden_memory_0", text: "A whisper echoes from the unseen." },
    { key: "hidden_memory_1", text: "A shadow of a dream you once had." },
    { key: "hidden_memory_2", text: "Something forgotten, now remembered." },
  ];

  useEffect(() => {
    if (hasMemory("visited_hidden_island")) {
      setText("You returned to the hidden isle...");
    } else {
      setText("You step into the hidden isle of dreams...");
      saveMemory("visited_hidden_island");
    }

    const t1 = setTimeout(() => setText("The air is thick with forgotten secrets..."), 4000);
    const t2 = setTimeout(() => setText("Every corner hides a memory..."), 9000);

    const rareTimer = setTimeout(() => {
      if (!hasMemory("hidden_rare_memory")) {
        saveMemory("hidden_rare_memory");
        setRareUnlocked(true);
        setShowRareText(true);
        setTimeout(() => setShowRareText(false), 4000);
      }
    }, 25000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(rareTimer);
    };
  }, []);

  // Click rare orb → activate portal
  const handlePortalClick = () => {
    setPortalActive(true);

    // Wait for portal animation then navigate to sub-secret isle
    setTimeout(() => {
      router.push("/islands/sub-secret-isle");
    }, 1200);
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-900 to-black text-white text-center overflow-hidden">

      {/* Lore text */}
      <h1 className="text-xl md:text-2xl animate-pulse z-10">{text}</h1>

      {/* Regular memory orbs */}
      {memories.map((m, i) => (
        <div
          key={i}
          onClick={() => saveMemory(m.key)}
          className="absolute w-5 h-5 bg-purple-500 rounded-full blur-sm cursor-pointer animate-pulse z-10"
          style={{
            top: `${25 + i * 20}%`,
            left: `${20 + i * 25}%`,
          }}
        />
      ))}

      {/* Rare hidden memory orb → portal */}
      {rareUnlocked && !portalActive && (
        <div
          onClick={handlePortalClick}
          className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full cursor-pointer animate-ping shadow-lg flex items-center justify-center z-10"
        >
          <div className="absolute w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
        </div>
      )}

      {/* Rare memory shimmer */}
      {!rareUnlocked && (
        <div className="absolute top-[55%] left-[70%] w-6 h-6 bg-yellow-400 rounded-full opacity-10 animate-pulse-shadow pointer-events-none z-0">
          <div className="absolute w-12 h-12 bg-yellow-400 rounded-full opacity-5 blur-2xl"></div>
        </div>
      )}

      {/* Floating rare memory text */}
      {showRareText && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-yellow-300 text-xl font-bold animate-float z-20">
          ✨ Rare memory revealed! ✨
        </div>
      )}

      {/* Portal animation overlay */}
      {portalActive && (
        <div className="absolute inset-0 bg-white rounded-full animate-portal z-50"></div>
      )}

      {/* Background stars */}
      <div className="absolute w-full h-full">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50 animate-star-twinkle"
            style={{
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translate(-50%, 0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translate(-50%, -100px); opacity: 0; }
        }
        .animate-float { animation: float 4s ease-out forwards; }

        @keyframes pulse-shadow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.5); opacity: 0.2; }
        }
        .animate-pulse-shadow { animation: pulse-shadow 2s infinite ease-in-out; }

        @keyframes star-twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-star-twinkle { animation: star-twinkle 2s infinite ease-in-out; }

        @keyframes portal {
          0% { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(50); opacity: 1; }
        }
        .animate-portal {
          animation: portal 1.2s ease-out forwards;
          background-color: #fefcbf;
        }
      `}</style>
    </div>
  );
}