"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { type DiaryEntry } from "@/app/data/diaryentries";
import WriteBox from "@/app/components/WriteBox";

export default function TravelerDiary() {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [loaded, setLoaded] = useState(false);

  // 🌱 Load saved entries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("diaryEntries");
    if (saved) setEntries(JSON.parse(saved));
    setLoaded(true);
  }, []);

  // 💾 Save whenever entries change
  useEffect(() => {
    if (loaded) {
      localStorage.setItem("diaryEntries", JSON.stringify(entries));
    }
  }, [entries, loaded]);

  // ✅ Save entry from WriteBox
  const saveEntry = (text: string) => {
    if (!text.trim()) return;

    const newEntry: DiaryEntry = {
      text,
      date: new Date().toISOString(),
    };

    setEntries((prev) => [newEntry, ...prev]);
  };

  // 🌠 Generate floating star positions (stable)
  const [positions, setPositions] = useState<
    { top: number; left: number; delay: number }[]
  >([]);

  useEffect(() => {
    const newPositions = entries.map(() => ({
      top: Math.random() * 80,
      left: Math.random() * 80,
      delay: Math.random() * 5,
    }));
    setPositions(newPositions);
  }, [entries]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#0f172a] to-black text-white px-6 pt-12 overflow-hidden">

      {/* 🌌 Title */}
      <h1 className="text-4xl font-bold mb-6">📖 Traveler’s Diary</h1>

      {/* ✍️ Write Box */}
      <WriteBox onSave={saveEntry} />

      {/* 🌟 Floating Entries */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {entries.map((e, i) => {
          const pos = positions[i];
          if (!pos) return null;

          return (
            <div
              key={i}
              className="star-entry"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                animationDelay: `${pos.delay}s`,
              }}
            >
              <div className="star-glow"></div>
              <div className="star-text">{e.text}</div>
            </div>
          );
        })}
      </div>

      {/* 🔙 Back */}
      <Link
        href="/islands"
        className="mt-6 text-sm opacity-70 hover:opacity-100 relative z-10"
      >
        ← Return to Islands
      </Link>

      {/* ✨ Styles */}
      <style jsx>{`
        .star-entry {
          position: absolute;
          transform: translate(-50%, -50%);
          animation: floatStar 10s infinite ease-in-out;
          text-align: center;
        }

        .star-glow {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px white, 0 0 20px white;
          margin: 0 auto;
        }

        .star-text {
          font-size: 10px;
          opacity: 0;
          margin-top: 4px;
          white-space: nowrap;
          transition: 0.3s;
        }

        .star-entry:hover .star-text {
          opacity: 0.8;
        }

        @keyframes floatStar {
          0% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
          100% { transform: translate(-50%, -50%) translateY(0px); }
        }
      `}</style>
    </div>
  );
}