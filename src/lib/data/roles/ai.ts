// src/lib/data/roles/ai.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "ai-engineer",
    name: "AI Engineer",
    category: "ai",
    isSpecialization: false,
    prerequisites: [
      "Programming Fundamentals",
      "Machine Learning Basics",
      "Mathematics (Linear Algebra, Calculus)",
      "Cloud Computing"
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
      highOrder: "System architecture design, ethical AI implementation, cross-domain solution synthesis",
      aiLeverage: "AutoML pipelines, model optimization, prompt engineering frameworks",
      portable: "Cloud AI services (AWS SageMaker, GCP Vertex AI), containerized deployments"
    },
    adjacentTo: ["ml-engineer", "platform-engineer", "data-engineer", "backend-engineer"],
    networking: {
      primaryPlatforms: ['twitter', 'github', 'linkedin', 'discord', 'kaggle'],
      communityNotes: "Twitter is essential for AI news and research papers, GitHub for code sharing",
      networkingTips: "Share AI projects on GitHub, tweet about AI advancements, participate in Kaggle competitions"
    }
  },
  {
    id: "ml-engineer",
    name: "ML Engineer",
    category: "ai",
    isSpecialization: false,
    prerequisites: [
      "Statistics Fundamentals",
      "Python Programming",
      "Data Processing",
      "Algorithm Design"
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
      highOrder: "Algorithm selection, feature engineering strategy, model evaluation frameworks",
      aiLeverage: "Automated model training, hyperparameter optimization, MLOps integration",
      portable: "Model serving APIs, containerized environments, cloud ML platforms"
    },
    adjacentTo: ["ai-engineer", "backend-engineer", "data-scientist"],
    networking: {
      primaryPlatforms: ['github', 'linkedin', 'twitter', 'kaggle', 'discord'],
      communityNotes: "MLOps communities, research paper discussion groups, model serving communities",
      networkingTips: "Share ML pipelines, contribute to ML frameworks, write about production ML systems"
    }
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    category: "ai",
    isSpecialization: false,
    prerequisites: [
      "Advanced Statistics",
      "Data Analysis",
      "Visualization Skills",
      "Domain Knowledge"
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
      highOrder: "Statistical modeling, experiment design, insight generation frameworks",
      aiLeverage: "Automated analysis pipelines, predictive modeling, natural language processing",
      portable: "Cloud data platforms, remote collaboration on Jupyter notebooks, digital reporting"
    },
    adjacentTo: ["ml-engineer", "data-analyst", "product-manager", "business-analyst"],
    networking: {
      primaryPlatforms: ['linkedin', 'twitter', 'github', 'kaggle', 'meetup'],
      communityNotes: "Data science meetups, statistical modeling communities, industry-specific data groups",
      networkingTips: "Share data analysis notebooks, write case studies, participate in data science competitions"
    }
  },
  {
    id: "prompt-engineer",
    name: "Prompt Engineer",
    category: "ai",
    isSpecialization: true,
    prerequisites: [
      "Natural Language Understanding",
      "Creative Writing",
      "LLM Concepts",
      "Testing Methodologies"
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
      highOrder: "System prompt design, chain-of-thought structuring, multi-modal reasoning frameworks",
      aiLeverage: "Auto-prompt optimization, few-shot learning templates, retrieval-augmented generation",
      portable: "Prompt templates (JSON/YAML), API integrations, cloud LLM services"
    },
    adjacentTo: ["ai-engineer", "ux-designer", "technical-writer"],
    networking: {
      primaryPlatforms: ['twitter', 'discord', 'github', 'linkedin', 'reddit'],
      communityNotes: "Emerging field, very active on Twitter/Discord for latest prompt techniques",
      networkingTips: "Share prompt libraries, write about LLM techniques, participate in prompt engineering challenges"
    }
  },
  {
    id: "ai-product-manager",
    name: "AI Product Manager",
    category: "ai",
    isSpecialization: false,
    prerequisites: [
      "Product Management Basics",
      "AI/ML Concepts",
      "Ethical AI Principles",
      "Technical Literacy"
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
      highOrder: "AI product strategy, ethical AI roadmap, cross-functional AI integration planning",
      aiLeverage: "AI feature prioritization, automated user feedback analysis, predictive analytics",
      portable: "Remote AI team coordination, digital product management tools, async stakeholder alignment"
    },
    adjacentTo: ["product-manager", "ai-engineer", "data-scientist", "ux-researcher"],
    networking: {
      primaryPlatforms: ['linkedin', 'twitter', 'meetup', 'conferences'],
      communityNotes: "AI product communities, ethical AI discussion groups, tech product management",
      networkingTips: "Write about AI product strategy, attend AI product conferences, network with AI teams"
    }
  }
];