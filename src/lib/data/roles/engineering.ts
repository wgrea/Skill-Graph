// src/lib/data/roles/engineering.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "frontend-engineer",
    name: "Frontend Engineer",
    category: "engineering",
    isSpecialization: false,
    prerequisites: [
      "HTML/CSS Fundamentals",
      "JavaScript Basics",
      "Responsive Design",
      "Git Version Control"
    ],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "Component architecture, state management patterns, performance optimization",
      aiLeverage: "Auto-code generation, UI component libraries, accessibility automation",
      portable: "Git-based workflows, cloud IDEs, remote collaboration tools (95%+ remote viable)"
    },
    adjacentTo: ["ux-engineer", "full-stack-engineer", "ui-designer", "design-system-specialist"],
    networking: {
      primaryPlatforms: ['github', 'twitter', 'linkedin', 'devTo', 'discord'],
      communityNotes: "Framework-specific Discord servers (React, Vue, Svelte), Twitter tech community",
      networkingTips: "Build side projects, contribute to open source, write technical blogs, participate in hackathons"
    }
  },
  {
    id: "backend-engineer",
    name: "Backend Engineer",
    category: "engineering",
    isSpecialization: false,
    prerequisites: [
      "Programming Fundamentals",
      "Database Basics",
      "API Concepts",
      "System Architecture"
    ],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "API design, database schema architecture, system integration patterns",
      aiLeverage: "Auto-API generation, database optimization tools, testing automation",
      portable: "Cloud infrastructure (AWS/GCP/Azure), containerization, remote debugging (90%+ remote viable)"
    },
    adjacentTo: ["full-stack-engineer", "platform-engineer", "devops-engineer", "data-engineer"],
    networking: {
      primaryPlatforms: ['github', 'linkedin', 'stackOverflow', 'discord', 'reddit'],
      communityNotes: "Database/API communities, cloud provider forums, system design groups",
      networkingTips: "Contribute to backend frameworks, write about system design, solve problems on Stack Overflow"
    }
  },
  {
    id: "full-stack-engineer",
    name: "Full‑Stack Engineer",
    category: "engineering",
    isSpecialization: false,
    prerequisites: [
      "Frontend Basics",
      "Backend Basics",
      "Database Knowledge",
      "Deployment Fundamentals"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "End-to-end system design, cross-layer optimization, integration architecture",
      aiLeverage: "Full-stack scaffolding tools, automated testing suites, deployment pipelines",
      portable: "Cloud development environments, remote pair programming, digital collaboration tools"
    },
    adjacentTo: ["frontend-engineer", "backend-engineer", "devops-engineer", "product-manager"],
    networking: {
      primaryPlatforms: ['github', 'linkedin', 'twitter', 'devTo', 'discord'],
      communityNotes: "Full-stack development communities, startup tech communities",
      networkingTips: "Build complete applications, write about full-stack patterns, mentor junior developers"
    }
  },
  {
    id: "platform-engineer",
    name: "Platform Engineer",
    category: "engineering",
    isSpecialization: false,
    prerequisites: [
      "Cloud Fundamentals",
      "Containerization Basics",
      "Infrastructure as Code",
      "Networking Concepts"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "Platform architecture design, cross-service integration strategy, scalability frameworks",
      aiLeverage: "Infrastructure as Code automation, AI-driven monitoring, self-healing systems",
      portable: "Cloud platforms enable remote work, though some on-call for physical infra may be needed"
    },
    adjacentTo: ["backend-engineer", "devops-engineer", "site-reliability-engineer", "cloud-architect"],
    networking: {
      primaryPlatforms: ['linkedin', 'github', 'discord', 'reddit', 'conferences'],
      communityNotes: "Cloud provider communities (AWS, GCP, Azure), platform engineering groups",
      networkingTips: "Share Terraform/CloudFormation modules, write about platform design patterns, attend cloud conferences"
    }
  },
  {
    id: "devops-engineer",
    name: "DevOps Engineer",
    category: "engineering",
    isSpecialization: true,
    prerequisites: [
      "CI/CD Concepts",
      "Scripting Skills",
      "Monitoring Basics",
      "Security Fundamentals"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "Deployment strategy, automation frameworks, reliability engineering",
      aiLeverage: "Auto-scaling systems, predictive failure detection, security automation",
      portable: "Cloud-based tools enable full remote work (95%+ remote viable)"
    },
    adjacentTo: ["platform-engineer", "backend-engineer", "security-engineer"],
    networking: {
      primaryPlatforms: ['linkedin', 'github', 'discord', 'reddit', 'stackOverflow'],
      communityNotes: "DevOps/SRE communities, monitoring tool communities, security automation groups",
      networkingTips: "Share automation scripts, write about CI/CD pipelines, contribute to DevOps tools"
    }
  }
];