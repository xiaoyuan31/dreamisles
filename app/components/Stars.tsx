"use client";

import { useEffect, useState } from "react";

export default function Stars() {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    // Generate 100 stars
    const starArray = Array.from({ length: 100 }, () => Math.random());
    setStars(starArray);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, index) => {
        const size = Math.random() * 2 + 1; // 1px to 3px
        const top = Math.random() * 100; // %
        const left = Math.random() * 100; // %
        const duration = Math.random() * 10 + 5; // seconds
        return (
          <div
            key={index}
            className="bg-white rounded-full absolute animate-twinkle"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}