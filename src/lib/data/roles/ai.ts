// src/lib/data/roles/ai.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "ai-engineer",
    name: "AI Engineer",
    category: "ai",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ml-engineer", "platform-engineer"]
  },
  {
    id: "ml-engineer",
    name: "ML Engineer",
    category: "ai",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ai-engineer", "backend-engineer"]
  },
  {
    id: "prompt-engineer",
    name: "Prompt Engineer",
    category: "ai",
    isSpecialization: true,  // Specialization
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ai-engineer", "ux-designer"]
  },
  {
    id: "ai-product-manager",
    name: "AI Product Manager",
    category: "ai",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["product-manager", "ai-engineer"]
  }
];