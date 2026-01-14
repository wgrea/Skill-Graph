// src/lib/data/attributes.ts
export const attributes = {
  highOrder: "High‑order ⭐",
  aiLeverage: "AI‑leverageable 🤖",
  portable: "Portable 📦"
} as const;

export type AttributeKey = keyof typeof attributes;