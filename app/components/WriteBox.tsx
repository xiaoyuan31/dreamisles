"use client";

import { useState } from "react";

type WriteBoxProps = {
  onSave: (text: string) => void;
};

export default function WriteBox({ onSave }: WriteBoxProps) {
  const [text, setText] = useState("");
  const maxLength = 200;

  const handleSave = () => {
    if (!text.trim()) return;

    onSave(text);
    setText("");

    alert("Your memory drifts into the night 🌙");
  };

  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/10 transition">

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        placeholder="Write your thoughts under the stars..."
        className="w-full focus:ring-2 focus:ring-yellow-400/40 bg-transparent outline-none resize-none h-28 text-sm placeholder:opacity-50 focus:placeholder:opacity-30"
      />

      <div className="flex items-center justify-between mt-3">
        <span className="text-xs opacity-50">
          {text.length}/{maxLength}
        </span>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm hover:scale-105 active:scale-95 transition"
        >
          Save ✨
        </button>
      </div>
    </div>
  );
}