// src/lib/data/roles/uiux.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "product-designer",
    name: "Product Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "Product vision synthesis, user journey orchestration, design system strategy",
      aiLeverage: "Auto-persona generation (Galileo AI), design system automation, A/B test synthesis",
      portable: "Figma cloud collaboration (92%), async stakeholder reviews, remote user testing"
    },
    description: "Designs product experiences and interfaces",
    adjacentTo: ["ux-designer", "product-manager"]
  },
  {
    id: "ux-designer",
    name: "UX Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "User research synthesis, information architecture, interaction model design",
      aiLeverage: "Automated usability testing, heatmap analysis AI, user flow optimization",
      portable: "Remote user interviews, digital prototyping tools, cloud research repositories"
    },
    adjacentTo: ["ui-designer", "ux-engineer", "product-designer"]
  },
  {
    id: "ui-designer",
    name: "UI Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: false,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "Visual hierarchy, component styling, design system implementation",
      aiLeverage: "AI-assisted color palette generation, layout optimization tools, auto-accessibility checks",
      portable: "Digital design tools (Figma/Sketch), cloud asset libraries, remote collaboration (95%+ viable)"
    },
    adjacentTo: ["ux-designer", "frontend-engineer"]
  },
  {
    id: "interaction-designer",
    name: "Interaction Designer",
    category: "uiux",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "Micro-interaction design, motion choreography, feedback loop optimization",
      aiLeverage: "Animation automation tools, gesture recognition AI, timing curve optimization",
      portable: "Digital prototyping (Principle/Framer), remote usability testing, async design reviews"
    },
    adjacentTo: ["ux-designer", "ux-engineer"]
  },
  {
    id: "ux-engineer",
    name: "UX Engineer",
    category: "uiux",
    isSpecialization: true,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "Design-tech translation, prototyping architecture, design system engineering",
      aiLeverage: "Auto-code generation from designs, accessibility automation, performance optimization AI",
      portable: "Remote pair programming with designers, cloud design systems, digital collaboration tools"
    },
    adjacentTo: ["frontend-engineer", "interaction-designer"]
  },
  {
    id: "design-technologist",
    name: "Design Technologist",
    category: "uiux",
    isSpecialization: true,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "Emerging tech integration, cross-disciplinary prototyping, future experience forecasting",
      aiLeverage: "Rapid prototyping AI tools, tech trend analysis automation, experimental interface generation",
      portable: "Remote research synthesis, digital prototyping environments, virtual collaboration spaces"
    },
    adjacentTo: ["ux-engineer", "frontend-engineer"]
  }
];