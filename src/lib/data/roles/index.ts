// src/lib/data/roles/index.ts
export interface Role {
  id: string;
  name: string;
  category: string;
  isSpecialization?: boolean;
  prerequisites?: string[];
  adjacentTo: string[];
  description?: string;
  attributes: {
    highOrder: boolean;
    aiLeverage: boolean;
    portable: boolean;
    demand?: 'high' | 'medium' | 'low';
    strength?: 1 | 2 | 3;
    experienceType?: ('ux' | 'dx' | 'cx')[];
  };
  details?: {
    highOrder?: string;
    aiLeverage?: string;
    portable?: string;
    nonPortable?: string;
    mediumNotes?: string;
  };
  
  networking?: {
    primaryPlatforms: NetworkingPlatform[];
    communityNotes?: string;
    networkingTips?: string;
  };
}

// ADD THESE TYPES:
export type NetworkingPlatform = 
  | 'linkedin' 
  | 'twitter' 
  | 'github' 
  | 'dribbble' 
  | 'behance'
  | 'artstation'
  | 'devTo'
  | 'stackOverflow'
  | 'discord'
  | 'slack'
  | 'reddit'
  | 'meetup'
  | 'conferences'
  | 'portfolioSites'
  | 'kaggle'
  | 'itch.io'
  | 'academia';

// In src/lib/data/roles/index.ts - Fix the networkingPlatforms object:
export const networkingPlatforms: Record<NetworkingPlatform, { name: string; icon: string; description: string }> = {
  linkedin: { name: "LinkedIn", icon: "👔", description: "Professional networking" },
  twitter: { name: "Twitter/X", icon: "🐦", description: "Build in public, share insights" },
  github: { name: "GitHub", icon: "💻", description: "Code portfolio, open source" },
  discord: { name: "Discord", icon: "💬", description: "Community chat servers" },
  slack: { name: "Slack Communities", icon: "💬", description: "Industry-specific groups" },
  reddit: { name: "Reddit", icon: "📱", description: "Subreddit communities" },
  meetup: { name: "Meetup", icon: "🤝", description: "Local/in-person events" },
  conferences: { name: "Conferences", icon: "🎤", description: "Industry events" },
  portfolioSites: { name: "Portfolio Sites", icon: "🎨", description: "Dribbble, Behance, etc." },
  dribbble: { name: "Dribbble", icon: "🏀", description: "Design portfolio & inspiration" },
  behance: { name: "Behance", icon: "🎨", description: "Creative portfolio showcase" },
  artstation: { name: "ArtStation", icon: "🖼️", description: "Digital art & game art portfolio" },
  devTo: { name: "Dev.to", icon: "👩‍💻", description: "Developer community & blogs" },
  stackOverflow: { name: "Stack Overflow", icon: "❓", description: "Technical Q&A community" },
  kaggle: { name: "Kaggle", icon: "📊", description: "Data science competitions & community" },
  'itch.io': { name: "Itch.io", icon: "🎮", description: "Game development & indie games" }, // FIXED: use 'itch.io' with quotes
  academia: { name: "Academic Networks", icon: "🎓", description: "Research & academic conferences" }
} as const;

// Import individual role files
import { roles as uiuxRoles } from './uiux';
import { roles as engineeringRoles } from './engineering';
import { roles as systemsRoles } from './systems';
import { roles as aiRoles } from './ai';
import { roles as gamedevRoles } from './gamedev';
import { roles as businessRoles } from './business';

// Re-export individual categories
export { uiuxRoles, engineeringRoles, systemsRoles, aiRoles, gamedevRoles, businessRoles };

// Combine all roles
export const allRoles = [
  ...uiuxRoles,
  ...engineeringRoles,
  ...systemsRoles,
  ...aiRoles,
  ...gamedevRoles,
  ...businessRoles
];

// Export as 'roles' for backward compatibility
export const roles = allRoles;  // ADD THIS LINE

export function getRoleById(id: string): Role | undefined {
  return allRoles.find(role => role.id === id);
}