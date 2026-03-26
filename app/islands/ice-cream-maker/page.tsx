"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { DiaryEntry } from "@/app/data/diaryentries";

// Flavors & toppings
const flavors = ["Vanilla", "Strawberry", "Chocolate", "Mint", "Blueberry", "Caramel"];
const toppings = ["Sprinkles", "Cherry", "Chocolate Chips", "Whipped Cream"];


export default function IceCreamBuilder() {
  const [scoops, setScoops] = useState<string[]>([]);
  const [topping, setTopping] = useState("");
  const [entries, setEntries] = useState<DiaryEntry[]>([]);

  // 🌱 Load diary entries
  useEffect(() => {
    const saved = localStorage.getItem("diaryEntries");
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  // 💾 Save diary entries
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const addScoop = (flavor: string) => {
    if (scoops.length >= 5) return;
    setScoops([...scoops, flavor]);
  };

  const resetIceCream = () => {
    setScoops([]);
    setTopping("");
  };

  const saveIceCream = () => {
    if (scoops.length === 0) return;

    const text = `I created an ice cream with scoops: ${scoops.join(", ")}${topping ? ` topped with ${topping}` : ""} 🍦`;
    const newEntry: DiaryEntry = {
      text,
      date: new Date().toISOString(),
    };
    setEntries([newEntry, ...entries]);
    resetIceCream();
    alert("Your ice cream has been saved to your diary! 📖✨");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start text-white overflow-hidden px-6 pt-12  bg-gradient-to-b from-[#0B1D51] via-[#1a2a6c] to-black">

      <h1 className="text-5xl font-extrabold mb-10">🍦 Build Your Ice Cream</h1>

     

      {/* 🥄 Ice Cream Display */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-32 relative flex flex-col-reverse items-center">
          {/* Cone */}
          <div className="w-12 h-16 bg-yellow-600 clip-cone rotate-180"></div>

          {/* Scoops */}
          {scoops.map((flavor, i) => (
            <div
              key={i}
              className="w-16 h-8 rounded-full mb-[-8px] flex items-center justify-center text-xs font-bold"
              style={{ background: getFlavorColor(flavor) }}
            >
              {flavor[0]}
            </div>
          ))}

          {/* Topping */}
          {topping && (
            <div className="absolute -top-6 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
              {topping[0]}
            </div>
          )}
        </div>
      </div>

      {/* 🍨 Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        {/* Scoops */}
        <div className="flex flex-wrap gap-2">
          {flavors.map((f) => (
            <button
              key={f}
              className="px-3 py-1 bg-white/20 rounded-full hover:bg-white/40 transition"
              onClick={() => addScoop(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Toppings */}
        <div className="flex flex-wrap gap-2">
          {toppings.map((t) => (
            <button
              key={t}
              className="px-3 py-1 bg-white/20 rounded-full hover:bg-white/40 transition"
              onClick={() => setTopping(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-red-500 rounded-full hover:scale-105 transition"
            onClick={resetIceCream}
          >
            Reset
          </button>

          <button
            className="px-4 py-2 bg-green-500 rounded-full hover:scale-105 transition"
            onClick={saveIceCream}
          >
            Save to Diary 📖
          </button>
        </div>
      </div>

      {/* 🔙 Back */}
      <Link
        href="/islands"
        className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-full hover:scale-105 transition"
      >
        <FontAwesomeIcon icon={faCompass} />
        Back to Islands
      </Link>

      <style jsx>{`
        .clip-cone {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
}

function getFlavorColor(flavor: string) {
  switch (flavor) {
    case "Vanilla": return "#f3e5ab";
    case "Strawberry": return "#ff7fbf";
    case "Chocolate": return "#8b4513";
    case "Mint": return "#98ff98";
    case "Blueberry": return "#8da6ff";
    case "Caramel": return "#c68b4a";
    default: return "#fff";
  }
}