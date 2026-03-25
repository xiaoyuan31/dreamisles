const MEMORY_KEY = "dreamisles_memory";

type MemoryKey =
  | "found_fire_portal"
  | "visited_secret"
  | "memory_0"
  | "memory_1"
  | "memory_2";

type MemoryData = {
  [key: string]: boolean;
};

export function getMemory(): MemoryData {
  if (typeof window === "undefined") return {};
  const data = localStorage.getItem(MEMORY_KEY);
  return data ? JSON.parse(data) : {};
}

export function saveMemory(key: MemoryKey, value: boolean = true): void {
  const memory = getMemory();
  memory[key] = value;
  localStorage.setItem(MEMORY_KEY, JSON.stringify(memory));
}

export function hasMemory(key: string): boolean {
  const memory = getMemory();
  return !!memory[key];
}