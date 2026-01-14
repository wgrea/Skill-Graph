// src/lib/data/roles/uiux.ts
// In uiux.ts, engineering.ts, etc.
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "product-designer",
    name: "Product Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ux-designer", "product-manager"],
    description: "Designs product experiences and interfaces"
  },
  {
    id: "ux-designer",
    name: "UX Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ui-designer", "ux-engineer", "product-designer"]
  },
  {
    id: "ui-designer",
    name: "UI Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ux-designer", "frontend-engineer"]
  },
  {
    id: "interaction-designer",
    name: "Interaction Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ux-designer", "ux-engineer"]
  },
  {
    id: "ux-engineer",
    name: "UX Engineer",
    category: "uiux",
    isSpecialization: true,  // Specialization
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["frontend-engineer", "interaction-designer"]
  },
  {
    id: "design-technologist",
    name: "Design Technologist",
    category: "uiux",
    isSpecialization: true,  // Specialization
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ux-engineer", "frontend-engineer"]
  }
];