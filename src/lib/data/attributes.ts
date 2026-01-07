// src/lib/data/attributes.ts
export const attributes = {
  highOrder: "High‑order",
  aiLeverage: "AI‑leverageable", 
  portable: "Portable",
  // These are not my bigger concern:
  // hardwareRequired: "Requires hardware/OS knowledge",
  // visualSkills: "Requires visual/UI skills",
  // prototyping: "Requires prototyping"
} as const;

// This creates a type from the keys
export type AttributeKey = keyof typeof attributes;