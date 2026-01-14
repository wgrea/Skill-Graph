// src/lib/data/roles/index.ts
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
  };
  details?: {  // NEW: Rich explanations
    highOrder?: string;      // "Ethical journey synthesis, mental model prioritization"
    aiLeverage?: string;     // "Auto personas (Galileo AI), A/B test synthesis"
    portable?: string;       // "Figma cloud (92%), async handoffs" 
    nonPortable?: string;    // Shows when portable=false: "In-person workshops"
    mediumNotes?: string;    // Grey area explanations
  };
}

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