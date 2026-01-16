// src/lib/data/roles/gamedev.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "gameplay-programmer",
    name: "Gameplay Programmer",
    category: "gamedev",
    isSpecialization: false,
    prerequisites: [
      "C++/C# Fundamentals",
      "Game Engines Basics (Unity/Unreal)",
      "Mathematics for Games",
      "Physics Concepts"
    ],
    attributes: {
      highOrder: false,
      aiLeverage: false,
      portable: false,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "Game mechanics implementation, physics simulation, player control systems",
      aiLeverage: "Basic tool-assisted development, traditional debugging tools",
      nonPortable: "Console-specific optimizations, platform certification requirements, in-studio hardware testing",
      mediumNotes: "Limited AI leverage compared to other engineering roles"
    },
    adjacentTo: ["technical-artist", "systems-engineer", "game-ux-designer"],
    networking: {
      primaryPlatforms: ['discord', 'linkedin', 'github', 'itch.io', 'reddit'],
      communityNotes: "Game engine Discord servers (Unity, Unreal), game jam communities",
      networkingTips: "Participate in game jams, contribute to game engines, share gameplay mechanics on GitHub"
    }
  },
  {
    id: "technical-artist",
    name: "Technical Artist",
    category: "gamedev",
    isSpecialization: false,
    prerequisites: [
      "3D Modeling Basics",
      "Shader Programming",
      "Scripting (Python/MEL)",
      "Art-Technical Bridge Skills"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["ux", "dx"] as const
    },
    details: {
      highOrder: "Shader programming, visual effects pipelines, art-tech integration frameworks",
      aiLeverage: "Traditional art pipeline tools, limited AI-assisted texture generation",
      nonPortable: "In-studio hardware setup, motion capture sessions, physical prototype testing",
      mediumNotes: "High creativity role with limited current AI integration"
    },
    adjacentTo: ["gameplay-programmer", "ui-designer", "vfx-artist"],
    networking: {
      primaryPlatforms: ['artstation', 'discord', 'linkedin', 'twitter', 'github'],
      communityNotes: "Technical art Discord servers, shader programming communities, game art forums",
      networkingTips: "Share shader tutorials on ArtStation, contribute to game art tools, network at game art conferences"
    }
  },
  {
    id: "level-designer",
    name: "Level Designer",
    category: "gamedev",
    isSpecialization: false,
    prerequisites: [
      "Spatial Design",
      "Game Design Principles",
      "Prototyping Skills",
      "Player Psychology"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["ux"] as const
    },
    details: {
      highOrder: "Space choreography, pacing design, player experience orchestration",
      aiLeverage: "Procedural generation tools, playtesting analytics",
      nonPortable: "Physical level prototyping, in-person playtesting sessions, hardware-specific optimization",
      mediumNotes: "High creativity with emerging AI tools for procedural content"
    },
    adjacentTo: ["game-ux-designer", "technical-artist", "narrative-designer"],
    networking: {
      primaryPlatforms: ['discord', 'linkedin', 'portfolioSites', 'itch.io', 'reddit'],
      communityNotes: "Level design communities, game design forums, mapping/modding communities",
      networkingTips: "Share level designs on portfolio sites, participate in level design contests, network at game design conferences"
    }
  },
  {
    id: "game-ux-designer",
    name: "Game UX Designer",
    category: "gamedev",
    isSpecialization: true,
    prerequisites: [
      "UX Design Fundamentals",
      "Game Interaction Patterns",
      "Player Testing Methods",
      "Game Design Theory"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
      demand: "low" as const,
      strength: 2 as const,
      experienceType: ["ux"] as const
    },
    details: {
      highOrder: "Game feel design, player motivation systems, interactive narrative flow",
      aiLeverage: "Analytics-driven iteration, A/B testing frameworks",
      nonPortable: "In-person playtesting, controller haptic testing, VR/AR physical setup",
      mediumNotes: "Specialization requiring deep understanding of game-specific interaction patterns"
    },
    adjacentTo: ["ux-designer", "level-designer", "gameplay-programmer"],
    networking: {
      primaryPlatforms: ['linkedin', 'discord', 'twitter', 'portfolioSites', 'meetup'],
      communityNotes: "Game UX research groups, player experience communities, game analytics forums",
      networkingTips: "Share game UX case studies, participate in game testing groups, attend game UX conferences"
    }
  }
];