// src/lib/data/roles/business.ts
// In uiux.ts, engineering.ts, etc.
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "product-manager",
    name: "Product Manager",
    category: "business",
    isSpecialization: false,
    prerequisites: [],
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
    isSpecialization: false,
    prerequisites: [],
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
    isSpecialization: false,
    prerequisites: [],
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
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    adjacentTo: ["ux-designer", "operations"]
  }
];