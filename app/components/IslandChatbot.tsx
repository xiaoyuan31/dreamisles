"use client";
import { useState, useEffect } from "react";

type ChatbotProps = {
  persona: string; // island name or personality
  messages: string[]; // predefined messages for this island
};

export default function IslandChatbot({ persona, messages }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState<{ from: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // send a random greeting when opened
  useEffect(() => {
    if (isOpen && chat.length === 0) {
      const greeting = messages[Math.floor(Math.random() * messages.length)];
      setTimeout(() => {
        setChat((c) => [...c, { from: persona, text: greeting }]);
      }, 500);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    setChat((c) => [...c, { from: "You", text: input }]);
    setInput("");
    setIsTyping(true);

    // bot response after short delay
    setTimeout(() => {
      const response = messages[Math.floor(Math.random() * messages.length)];
      setChat((c) => [...c, { from: persona, text: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-2 w-72 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Chat Header */}
          <div className="bg-yellow-400 text-black font-semibold px-4 py-2">
            {persona} 🤖
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-3 h-64 overflow-y-auto flex flex-col gap-2">
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`rounded-xl px-3 py-2 max-w-[80%] ${
                  msg.from === "You"
                    ? "bg-blue-400 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="bg-gray-200 text-black self-start rounded-xl px-3 py-2 animate-pulse">
                {persona} is typing...
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="flex border-t border-gray-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 p-2 text-black outline-none bg-white"
            />
            <button
              onClick={handleSend}
              className="bg-yellow-400 px-4 text-black font-bold hover:bg-yellow-300 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}