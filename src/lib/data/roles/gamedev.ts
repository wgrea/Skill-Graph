// src/lib/data/roles/gamedev.ts
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
    details: {
      highOrder: "Game mechanics implementation, physics simulation, player control systems",
      aiLeverage: "Basic tool-assisted development, traditional debugging tools",
      nonPortable: "Console-specific optimizations, platform certification requirements, in-studio hardware testing",
      mediumNotes: "Limited AI leverage compared to other engineering roles"
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
    details: {
      highOrder: "Shader programming, visual effects pipelines, art-tech integration frameworks",
      aiLeverage: "Traditional art pipeline tools, limited AI-assisted texture generation",
      nonPortable: "In-studio hardware setup, motion capture sessions, physical prototype testing",
      mediumNotes: "High creativity role with limited current AI integration"
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
    details: {
      highOrder: "Space choreography, pacing design, player experience orchestration",
      aiLeverage: "Procedural generation tools, playtesting analytics",
      nonPortable: "Physical level prototyping, in-person playtesting sessions, hardware-specific optimization",
      mediumNotes: "High creativity with emerging AI tools for procedural content"
    },
    adjacentTo: ["game-ux-designer", "technical-artist"]
  },
  {
    id: "game-ux-designer",
    name: "Game UX Designer",
    category: "gamedev",
    isSpecialization: true,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    details: {
      highOrder: "Game feel design, player motivation systems, interactive narrative flow",
      aiLeverage: "Analytics-driven iteration, A/B testing frameworks",
      nonPortable: "In-person playtesting, controller haptic testing, VR/AR physical setup",
      mediumNotes: "Specialization requiring deep understanding of game-specific interaction patterns"
    },
    adjacentTo: ["ux-designer", "level-designer"]
  }
];