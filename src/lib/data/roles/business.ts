// src/lib/data/roles/business.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "product-manager",
    name: "Product Manager",
    category: "business",
    isSpecialization: false,
    prerequisites: [
      "Basic Business Concepts",
      "Market Analysis Fundamentals",
      "Communication Skills",
      "Data Literacy"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["cx", "ux"] as const
    },
    details: {
      highOrder: "Product vision synthesis, market opportunity analysis, stakeholder alignment frameworks",
      aiLeverage: "Automated user research analysis, predictive roadmap planning, competitive intelligence tools",
      portable: "Remote team leadership, digital collaboration tools, async stakeholder communication"
    },
    adjacentTo: ["product-designer", "business-analyst", "ai-product-manager", "ux-researcher"],
    networking: {
      primaryPlatforms: ['linkedin', 'twitter', 'meetup', 'conferences', 'slack'],
      communityNotes: "Product management communities, industry-specific product groups, startup networks",
      networkingTips: "Write product teardowns, attend product conferences, participate in product management forums"
    }
  },
  {
    id: "business-analyst",
    name: "Business Analyst",
    category: "business",
    isSpecialization: false,
    prerequisites: [
      "Data Analysis Basics",
      "Process Mapping",
      "Requirements Gathering",
      "Stakeholder Management"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["cx"] as const
    },
    details: {
      highOrder: "Requirement synthesis, process optimization frameworks, business value mapping",
      aiLeverage: "Automated data analysis, predictive modeling, process mining tools",
      portable: "Digital documentation tools, remote stakeholder interviews, cloud analytics platforms"
    },
    adjacentTo: ["product-manager", "operations", "data-analyst"],
    networking: {
      primaryPlatforms: ['linkedin', 'meetup', 'conferences', 'slack', 'reddit'],
      communityNotes: "Business analysis professional groups, process improvement communities",
      networkingTips: "Share process optimization case studies, attend BA conferences, network with industry peers"
    }
  },
  {
    id: "operations",
    name: "Operations",
    category: "business",
    isSpecialization: false,
    prerequisites: [
      "Process Management",
      "Resource Planning",
      "Logistics Basics",
      "Team Coordination"
    ],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: false,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["cx"] as const
    },
    details: {
      highOrder: "Process execution, workflow coordination, resource allocation",
      aiLeverage: "Automated scheduling, predictive maintenance, inventory optimization",
      nonPortable: "Physical facility management, in-person equipment maintenance, on-site logistics"
    },
    adjacentTo: ["business-analyst", "cx-strategist", "supply-chain-manager"],
    networking: {
      primaryPlatforms: ['linkedin', 'meetup', 'conferences', 'slack'],
      communityNotes: "Operations management groups, industry-specific operations communities",
      networkingTips: "Share operations optimization stories, attend operations conferences, network with industry professionals"
    }
  },
  {
    id: "cx-strategist",
    name: "CX Strategist",
    category: "business",
    isSpecialization: false,
    prerequisites: [
      "Customer Journey Mapping",
      "Service Design Basics",
      "Analytics Fundamentals",
      "Communication Strategy"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["cx", "ux"] as const
    },
    details: {
      highOrder: "Customer journey orchestration, experience ecosystem design, emotional mapping",
      aiLeverage: "Sentiment analysis automation, predictive customer behavior modeling, journey optimization",
      portable: "Digital customer feedback tools, remote user interviews, cloud analytics dashboards"
    },
    adjacentTo: ["ux-designer", "operations", "marketing-specialist"],
    networking: {
      primaryPlatforms: ['linkedin', 'twitter', 'meetup', 'conferences', 'slack'],
      communityNotes: "Customer experience communities, service design groups, CX measurement forums",
      networkingTips: "Share customer journey maps, attend CX conferences, participate in CX strategy discussions"
    }
  }
];