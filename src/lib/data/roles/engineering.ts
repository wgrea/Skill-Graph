// src/lib/data/roles/engineering.ts
// In uiux.ts, engineering.ts, etc.
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "frontend-engineer",
    name: "Frontend Engineer",
    category: "engineering",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ux-engineer", "full-stack-engineer", "ui-designer"]
  },
  {
    id: "backend-engineer",
    name: "Backend Engineer",
    category: "engineering",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["full-stack-engineer", "platform-engineer"]
  },
  {
    id: "full-stack-engineer",
    name: "Full‑Stack Engineer",
    category: "engineering",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["frontend-engineer", "backend-engineer"]
  },
  {
    id: "platform-engineer",
    name: "Platform Engineer",
    category: "engineering",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: false,
    },
    adjacentTo: ["backend-engineer", "systems-engineer"]
  }
];