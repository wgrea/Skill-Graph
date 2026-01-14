// src/lib/data/roles/systems.ts
// In uiux.ts, engineering.ts, etc.
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "systems-engineer",
    name: "Systems Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["platform-engineer", "embedded-engineer"]
  },
  {
    id: "embedded-engineer",
    name: "Embedded Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: false,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["systems-engineer", "hardware-architect"]
  },
  {
    id: "os-engineer",
    name: "OS Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["systems-engineer", "hardware-architect"]
  },
  {
    id: "hardware-architect",
    name: "Hardware Architect",
    category: "systems",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["embedded-engineer", "os-engineer"]
  }
];