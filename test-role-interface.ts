// test-role-interface.ts
import type { Role } from './src/lib/data/roles';

// This should compile if the interface is correct
const testRole: Role = {
  id: 'test',
  name: 'Test Role',
  category: 'uiux',
  isSpecialization: true,
  prerequisites: ['skill1', 'skill2'],
  attributes: {
    highOrder: true,
    aiLeverage: true,
    portable: true
  },
  adjacentTo: []
};

console.log('Interface test passed:', testRole);