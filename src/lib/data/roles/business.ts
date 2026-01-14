// src/lib/data/roles/business.ts
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
    details: {
      highOrder: "Product vision synthesis, market opportunity analysis, stakeholder alignment frameworks",
      aiLeverage: "Automated user research analysis, predictive roadmap planning, competitive intelligence tools",
      portable: "Remote team leadership, digital collaboration tools, async stakeholder communication"
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
    details: {
      highOrder: "Requirement synthesis, process optimization frameworks, business value mapping",
      aiLeverage: "Automated data analysis, predictive modeling, process mining tools",
      portable: "Digital documentation tools, remote stakeholder interviews, cloud analytics platforms"
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
    details: {
      highOrder: "Process execution, workflow coordination, resource allocation",
      aiLeverage: "Automated scheduling, predictive maintenance, inventory optimization",
      nonPortable: "Physical facility management, in-person equipment maintenance, on-site logistics"
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
    details: {
      highOrder: "Customer journey orchestration, experience ecosystem design, emotional mapping",
      aiLeverage: "Sentiment analysis automation, predictive customer behavior modeling, journey optimization",
      portable: "Digital customer feedback tools, remote user interviews, cloud analytics dashboards"
    },
    adjacentTo: ["ux-designer", "operations"]
  }
];