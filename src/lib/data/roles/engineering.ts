// src/lib/data/roles/engineering.ts
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
    details: {
      highOrder: "Component architecture, state management patterns, performance optimization",
      aiLeverage: "Auto-code generation, UI component libraries, accessibility automation",
      portable: "Git-based workflows, cloud IDEs, remote collaboration tools (95%+ remote viable)"
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
    details: {
      highOrder: "API design, database schema architecture, system integration patterns",
      aiLeverage: "Auto-API generation, database optimization tools, testing automation",
      portable: "Cloud infrastructure (AWS/GCP/Azure), containerization, remote debugging (90%+ remote viable)"
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
    details: {
      highOrder: "End-to-end system design, cross-layer optimization, integration architecture",
      aiLeverage: "Full-stack scaffolding tools, automated testing suites, deployment pipelines",
      portable: "Cloud development environments, remote pair programming, digital collaboration tools"
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
    details: {
      highOrder: "Platform architecture design, cross-service integration strategy, scalability frameworks",
      aiLeverage: "Infrastructure as Code automation, AI-driven monitoring, self-healing systems",
      nonPortable: "On-prem infrastructure management, physical data center operations, hardware integration"
    },
    adjacentTo: ["backend-engineer", "systems-engineer"]
  }
];