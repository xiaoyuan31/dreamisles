"use client";
import { useEffect, useState } from "react";
import { useMemory } from "@/app/context/MemoryContext";
import { useRouter } from "next/navigation";

export default function SecretDream() {
  const { hasMemory, saveMemory } = useMemory();
  const router = useRouter();
  const [text, setText] = useState("");
  const [rareUnlocked, setRareUnlocked] = useState(false);
  const [showRareText, setShowRareText] = useState(false);
  const [rareContent, setRareContent] = useState("");
  const [showHiddenIsland, setShowHiddenIsland] = useState(false);
  const [portalActive, setPortalActive] = useState(false);

  // Regular memory orbs
  const memories = [
    { key: "memory_0", text: "A night you almost understood everything." },
    { key: "memory_1", text: "A version of you still waiting somewhere." },
    { key: "memory_2", text: "A feeling without a name." },
  ];

  useEffect(() => {
    if (hasMemory("visited_secret")) {
      setText("You returned... even though you shouldn't remember.");
    } else {
      setText("You found something hidden...");
      saveMemory("visited_secret");
    }

    const t1 = setTimeout(() => setText("Or maybe... it found you."), 5000);
    const t2 = setTimeout(() => setText("Most travellers never stop."), 10000);

    const rareTimer = setTimeout(() => {
      if (!hasMemory("rare_hidden_memory")) {
        saveMemory("rare_hidden_memory");
        setRareUnlocked(true);
        setShowRareText(true);
        setTimeout(() => setShowRareText(false), 4000);
      }
    }, 30000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(rareTimer);
    };
  }, []);

  // Click on yellow orb
  const handleRareClick = () => {
    setRareContent("🌟 You unlocked a secret vision of the Dream Isles! 🌟");
    setShowHiddenIsland(true);

    setTimeout(() => setRareContent(""), 6000);
    setTimeout(() => setShowHiddenIsland(false), 8000);
  };

  // Click mini hidden island
  const handleHiddenIslandClick = () => {
    setPortalActive(true);

    // Wait for portal animation to finish before navigating
    setTimeout(() => {
      router.push("/islands/hidden-island"); // Full hidden island page
    }, 1000); // match animation duration
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-black text-white text-center overflow-hidden">

      {/* Lore Text */}
      <h1 className="text-xl md:text-2xl animate-pulse">{text}</h1>

      {/* Regular memory orbs */}
      {memories.map((m, i) => (
        <div
          key={i}
          onClick={() => saveMemory(m.key)}
          className="absolute w-4 h-4 bg-purple-400 rounded-full blur-sm cursor-pointer animate-pulse"
          style={{
            top: `${20 + i * 20}%`,
            left: `${30 + i * 15}%`,
          }}
        />
      ))}

      {/* Rare hidden memory orb */}
      {rareUnlocked && !portalActive && (
        <div
          onClick={handleRareClick}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full cursor-pointer animate-ping shadow-lg flex items-center justify-center"
        >
          <div className="absolute w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
        </div>
      )}

      {/* Mini Hidden Island */}
      {showHiddenIsland && !portalActive && (
        <div
          onClick={handleHiddenIslandClick}
          className="absolute top-1/3 left-3/4 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-600 rounded-2xl shadow-2xl flex items-center justify-center cursor-pointer animate-pulse"
        >
          <div className="text-white text-center px-2">
            🌴 Hidden Isle of Dreams<br />Click to enter
          </div>
          <div className="absolute w-full h-full bg-blue-400 opacity-20 blur-2xl rounded-2xl"></div>
        </div>
      )}

      {/* Floating magical text */}
      {showRareText && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-yellow-300 text-xl font-bold animate-float">
          ✨ Rare memory discovered! ✨
        </div>
      )}

      {/* Portal animation overlay */}
      {portalActive && (
        <div className="absolute inset-0 bg-white rounded-full animate-portal z-50"></div>
      )}

      {/* Rare content text */}
      {rareContent && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-yellow-200 text-lg font-semibold p-4 bg-black/50 rounded-lg animate-fade-in">
          {rareContent}
        </div>
      )}

      {/* Animations */}
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

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }

        @keyframes portal {
          0% { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(50); opacity: 1; }
        }
        .animate-portal {
          animation: portal 1s ease-out forwards;
          background-color: #fefcbf;
        }
      `}</style>
    </div>
  );
}