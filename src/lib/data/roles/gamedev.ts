// src/lib/data/roles/gamedev.ts
// In uiux.ts, engineering.ts, etc.
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "gameplay-programmer",
    name: "Gameplay Programmer",
    category: "gamedev",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: false,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["technical-artist", "systems-engineer"]
  },
  {
    id: "technical-artist",
    name: "Technical Artist",
    category: "gamedev",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["gameplay-programmer", "ui-designer"]
  },
  {
    id: "level-designer",
    name: "Level Designer",
    category: "gamedev",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["game-ux-designer", "technical-artist"]
  },
  {
    id: "game-ux-designer",
    name: "Game UX Designer",
    category: "gamedev",
    isSpecialization: true,  // Specialization
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["ux-designer", "level-designer"]
  }
];