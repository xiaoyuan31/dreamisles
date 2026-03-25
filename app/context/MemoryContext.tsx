"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type MemoryData = {
  [key: string]: boolean;
};

type MemoryContextType = {
  memory: MemoryData;
  saveMemory: (key: string, value?: boolean) => void;
  hasMemory: (key: string) => boolean;
};

const MemoryContext = createContext<MemoryContextType | null>(null);

const MEMORY_KEY = "dreamisles_memory";

export function MemoryProvider({ children }: { children: ReactNode }) {
  const [memory, setMemory] = useState<MemoryData>({});

  // load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(MEMORY_KEY);
    if (stored) setMemory(JSON.parse(stored));
  }, []);

  // save to localStorage
  useEffect(() => {
    localStorage.setItem(MEMORY_KEY, JSON.stringify(memory));
  }, [memory]);

  const saveMemory = (key: string, value: boolean = true) => {
    setMemory((prev) => ({ ...prev, [key]: value }));
  };

  const hasMemory = (key: string) => {
    return !!memory[key];
  };

  return (
    <MemoryContext.Provider value={{ memory, saveMemory, hasMemory }}>
      {children}
    </MemoryContext.Provider>
  );
}

export function useMemory() {
  const context = useContext(MemoryContext);
  if (!context) throw new Error("useMemory must be used inside MemoryProvider");
  return context;
}