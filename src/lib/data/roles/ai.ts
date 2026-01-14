// src/lib/data/roles/ai.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "ai-engineer",
    name: "AI Engineer",
    category: "ai",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "System architecture design, ethical AI implementation, cross-domain solution synthesis",
      aiLeverage: "AutoML pipelines, model optimization, prompt engineering frameworks",
      portable: "Cloud AI services (AWS SageMaker, GCP Vertex AI), containerized deployments"
    },
    adjacentTo: ["ml-engineer", "platform-engineer"]
  },
  {
    id: "ml-engineer",
    name: "ML Engineer",
    category: "ai",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "Algorithm selection, feature engineering strategy, model evaluation frameworks",
      aiLeverage: "Automated model training, hyperparameter optimization, MLOps integration",
      portable: "Model serving APIs, containerized environments, cloud ML platforms"
    },
    adjacentTo: ["ai-engineer", "backend-engineer"]
  },
  {
    id: "prompt-engineer",
    name: "Prompt Engineer",
    category: "ai",
    isSpecialization: true,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "System prompt design, chain-of-thought structuring, multi-modal reasoning frameworks",
      aiLeverage: "Auto-prompt optimization, few-shot learning templates, retrieval-augmented generation",
      portable: "Prompt templates (JSON/YAML), API integrations, cloud LLM services"
    },
    adjacentTo: ["ai-engineer", "ux-designer"]
  },
  {
    id: "ai-product-manager",
    name: "AI Product Manager",
    category: "ai",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: true,
      portable: true,
    },
    details: {
      highOrder: "AI product strategy, ethical AI roadmap, cross-functional AI integration planning",
      aiLeverage: "AI feature prioritization, automated user feedback analysis, predictive analytics",
      portable: "Remote AI team coordination, digital product management tools, async stakeholder alignment"
    },
    adjacentTo: ["product-manager", "ai-engineer"]
  }
];