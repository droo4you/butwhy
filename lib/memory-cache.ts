import type { DiveResponse } from "@/types";

const MEM_MAX = 200;
const memory = new Map<string, DiveResponse>();

export function memoryGet(key: string): DiveResponse | undefined {
  const hit = memory.get(key);
  if (!hit) return undefined;
  memory.delete(key);
  memory.set(key, hit);
  return hit;
}

export function memorySet(key: string, value: DiveResponse): void {
  memory.set(key, value);
  while (memory.size > MEM_MAX) {
    const oldest = memory.keys().next().value;
    if (!oldest) break;
    memory.delete(oldest);
  }
}
