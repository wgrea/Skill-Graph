// src/lib/data/roles/index.ts
export interface Role {
  id: string;
  name: string;
  category: string;
  isSpecialization?: boolean;    // MUST HAVE THIS LINE
  prerequisites?: string[];      // MUST HAVE THIS LINE
  attributes: {
    highOrder: boolean;
    aiLeverage: boolean;
    portable: boolean;
  };
  adjacentTo: string[];
  description?: string;
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