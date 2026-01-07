// src/lib/data/roles.ts 
export interface Role {
  id: string;
  name: string;
  category: string;
  attributes: {
    highOrder: boolean;
    aiLeverage: boolean;
    portable: boolean;
    // Remove or comment these out since you're not concerned with them
    // hardwareRequired: boolean;
    // visualSkills: boolean;
    // prototyping: boolean;
  };
  adjacentTo: string[];
  description?: string;
}

export const roles: Role[] = [
  // UI/UX Roles
  {
    id: "product-designer",
    name: "Product Designer",
    category: "uiux",
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
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ux-engineer", "frontend-engineer"]
  },

  // Full‑Stack / Engineering Roles
  {
    id: "frontend-engineer",
    name: "Frontend Engineer",
    category: "engineering",
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
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: false,
    },
    adjacentTo: ["backend-engineer", "systems-engineer"]
  },

  // Hardware / OS / Systems Roles
  {
    id: "systems-engineer",
    name: "Systems Engineer",
    category: "systems",
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
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["embedded-engineer", "os-engineer"]
  },

  // AI Roles
  {
    id: "ai-engineer",
    name: "AI Engineer",
    category: "ai",
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
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["product-manager", "ai-engineer"]
  },

  // Game Dev Roles
  {
    id: "gameplay-programmer",
    name: "Gameplay Programmer",
    category: "gamedev",
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
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    adjacentTo: ["ux-designer", "level-designer"]
  },

  // Business Roles
  {
    id: "product-manager",
    name: "Product Manager",
    category: "business",
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["product-designer", "business-analyst", "ai-product-manager"]
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    category: "business",
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["product-manager", "operations"]
  },
  {
    id: "operations",
    name: "Operations",
    category: "business",
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: false,
    },
    adjacentTo: ["business-analyst", "cx-strategist"]
  },
  {
    id: "cx-strategist",
    name: "CX Strategist",
    category: "business",
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ux-designer", "operations"]
  }
];