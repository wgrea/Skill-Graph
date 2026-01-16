// src/lib/data/roles/uiux.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "product-designer",
    name: "Product Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [
      "Basic Design Principles",
      "User Research Fundamentals", 
      "Wireframing Basics",
      "Stakeholder Communication"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["ux", "cx"] as const
    },
    details: {
      highOrder: "Product vision synthesis, user journey orchestration, design system strategy",
      aiLeverage: "Auto-persona generation (Galileo AI), design system automation, A/B test synthesis",
      portable: "Figma cloud collaboration (92%), async stakeholder reviews, remote user testing",
    },
    description: "Designs holistic product experiences balancing user needs, business goals, and technical constraints",
    adjacentTo: ["ux-designer", "product-manager", "ux-researcher", "design-manager"],
    networking: {  // <-- MOVED OUTSIDE 'details'
      primaryPlatforms: ['linkedin', 'twitter', 'dribbble', 'behance', 'meetup'],
      communityNotes: "Design communities on Discord/Slack, portfolio reviews",
      networkingTips: "Share case studies, participate in design critiques, attend design sprints"
    }
  },
  {
    id: "ux-designer",
    name: "UX Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [
      "Human-Computer Interaction Basics",
      "Usability Principles",
      "Wireframing & Prototyping",
      "Qualitative Research Methods"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["ux"] as const
    },
    details: {
      highOrder: "User research synthesis, information architecture, interaction model design",
      aiLeverage: "Automated usability testing, heatmap analysis AI, user flow optimization",
      portable: "Remote user interviews, digital prototyping tools, cloud research repositories",
    },
    description: "Focuses on user behavior and psychology to create intuitive, accessible interfaces",
    adjacentTo: ["ui-designer", "ux-engineer", "product-designer", "ux-researcher", "information-architect"],
    networking: {
      primaryPlatforms: ['linkedin', 'twitter', 'dribbble', 'behance', 'meetup'],
      communityNotes: "Active in UX research communities, design thinking groups",
      networkingTips: "Share user research findings, participate in design critiques"
    }
  },
  {
    id: "ui-designer",
    name: "UI Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [
      "Visual Design Fundamentals",
      "Typography & Color Theory",
      "Design Software (Figma/Sketch)",
      "Basic HTML/CSS Understanding"
    ],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: true,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["ux"] as const
    },
    details: {
      highOrder: "Visual hierarchy, component styling, design system implementation",
      aiLeverage: "AI-assisted color palette generation, layout optimization tools, auto-accessibility checks",
      portable: "Digital design tools (Figma/Sketch), cloud asset libraries, remote collaboration (95%+ viable)",
      mediumNotes: "Becoming more automated but still needs human aesthetic judgment",
    },
    description: "Specializes in visual design, creating aesthetically pleasing and functional interfaces",
    adjacentTo: ["ux-designer", "frontend-engineer", "visual-designer", "design-system-specialist"],
    networking: {
      primaryPlatforms: ['dribbble', 'behance', 'twitter', 'linkedin'],
      communityNotes: "Highly visual portfolio-driven, Dribbble is key for inspiration",
      networkingTips: "Post daily UI shots, participate in design challenges, build visual portfolio"
    }
  },
  {
    id: "ux-researcher",
    name: "UX Researcher",
    category: "uiux",
    isSpecialization: true,
    prerequisites: [
      "Research Methodology",
      "Statistics Basics",
      "Interviewing Skills",
      "Data Analysis"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["ux", "cx"] as const
    },
    details: {
      highOrder: "Research synthesis, insight generation, user behavior modeling",
      aiLeverage: "Automated transcript analysis, sentiment analysis AI, pattern recognition tools",
      portable: "Remote user testing platforms, digital survey tools, cloud research repositories",
      nonPortable: "Some in-person contextual inquiry still valuable for nuanced insights",
    },
    description: "Conducts user research to uncover insights and validate design decisions",
    adjacentTo: ["product-designer", "ux-designer", "data-analyst", "product-manager"],
    networking: {
      primaryPlatforms: ['linkedin', 'twitter', 'meetup', 'conferences'],
      communityNotes: "Academic and professional research communities",
      networkingTips: "Share research findings, attend UX research conferences, write case studies"
    }
  },
  {
    id: "interaction-designer",
    name: "Interaction Designer",
    category: "uiux",
    isSpecialization: true,
    prerequisites: [
      "Animation Principles",
      "Micro-interaction Patterns",
      "Prototyping Tools",
      "Cognitive Psychology Basics"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "low" as const,
      strength: 2 as const,
      experienceType: ["ux"] as const
    },
    details: {
      highOrder: "Micro-interaction design, motion choreography, feedback loop optimization",
      aiLeverage: "Animation automation tools, gesture recognition AI, timing curve optimization",
      portable: "Digital prototyping (Principle/Framer), remote usability testing, async design reviews",
    },
    description: "Focuses on designing how users interact with interfaces through motion and feedback",
    adjacentTo: ["ux-designer", "ux-engineer", "motion-designer", "frontend-engineer"],
    networking: {
      primaryPlatforms: ['dribbble', 'behance', 'twitter', 'linkedin'],
      communityNotes: "Motion design communities, prototyping tool communities",
      networkingTips: "Share interaction demos, participate in animation challenges"
    }
  },
  {
    id: "ux-engineer",
    name: "UX Engineer",
    category: "uiux",
    isSpecialization: true,
    prerequisites: [
      "Frontend Development",
      "Design System Principles",
      "Prototyping Skills",
      "Design-Development Collaboration"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["ux", "dx"] as const
    },
    details: {
      highOrder: "Design-tech translation, prototyping architecture, design system engineering",
      aiLeverage: "Auto-code generation from designs, accessibility automation, performance optimization AI",
      portable: "Remote pair programming with designers, cloud design systems, digital collaboration tools",
    },
    description: "Technical role focused on implementing design systems and bridging design-development gaps",
    adjacentTo: ["frontend-engineer", "interaction-designer", "design-technologist", "design-system-engineer"],
    networking: {
      primaryPlatforms: ['github', 'twitter', 'linkedin', 'discord'],
      communityNotes: "Bridges design and engineering communities",
      networkingTips: "Share design system code, contribute to UI libraries, write technical design articles"
    }
  },
  {
    id: "design-technologist",
    name: "Design Technologist",
    category: "uiux",
    isSpecialization: true,
    prerequisites: [
      "Emerging Technology Awareness",
      "Rapid Prototyping",
      "Cross-disciplinary Thinking",
      "Technical Experimentation"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["ux", "dx"] as const
    },
    details: {
      highOrder: "Emerging tech integration, cross-disciplinary prototyping, future experience forecasting",
      aiLeverage: "Rapid prototyping AI tools, tech trend analysis automation, experimental interface generation",
      portable: "Remote research synthesis, digital prototyping environments, virtual collaboration spaces",
    },
    description: "Explores and prototypes with emerging technologies to shape future digital experiences",
    adjacentTo: ["ux-engineer", "frontend-engineer", "research-scientist", "innovation-lead"],
    networking: {
      primaryPlatforms: ['twitter', 'github', 'linkedin', 'discord'],
      communityNotes: "Cutting-edge tech communities, experimental design groups",
      networkingTips: "Share experimental prototypes, write about emerging tech trends"
    }
  },
  {
    id: "design-system-specialist",
    name: "Design System Specialist",
    category: "uiux",
    isSpecialization: true,
    prerequisites: [
      "Component Design",
      "Documentation Skills",
      "Version Control Basics",
      "Design Token Management"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
      demand: "high" as const,
      strength: 3 as const,
      experienceType: ["ux", "dx"] as const
    },
    details: {
      highOrder: "System thinking, scalability planning, design governance",
      aiLeverage: "Auto-documentation generation, component usage analysis, consistency checking AI",
      portable: "Cloud-based design systems, remote collaboration tools, digital documentation",
    },
    description: "Creates and maintains design systems that ensure consistency and efficiency across products",
    adjacentTo: ["ux-engineer", "ui-designer", "frontend-engineer", "technical-writer"],
    networking: {
      primaryPlatforms: ['github', 'linkedin', 'twitter', 'discord'],
      communityNotes: "Design system communities, component library maintainers",
      networkingTips: "Share design system components, contribute to open-source design systems"
    }
  }
];