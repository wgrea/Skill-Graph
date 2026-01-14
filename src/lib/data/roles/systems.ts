// src/lib/data/roles/systems.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "systems-engineer",
    name: "Systems Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    details: {
      highOrder: "System architecture design, integration planning, cross-component optimization",
      aiLeverage: "Traditional monitoring tools, limited predictive maintenance",
      nonPortable: "On-prem hardware integration, physical system testing, in-person troubleshooting",
      mediumNotes: "Critical for complex physical-digital systems integration"
    },
    adjacentTo: ["platform-engineer", "embedded-engineer"]
  },
  {
    id: "embedded-engineer",
    name: "Embedded Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: false,
      aiLeverage: false,
      portable: false,
    },
    details: {
      highOrder: "Firmware architecture, real-time system design, hardware-software interfaces",
      aiLeverage: "Basic debugging tools, traditional testing frameworks",
      nonPortable: "Hardware lab work, oscilloscope measurements, in-person device debugging"
    },
    adjacentTo: ["systems-engineer", "hardware-architect"]
  },
  {
    id: "os-engineer",
    name: "OS Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    details: {
      highOrder: "Kernel architecture, system call design, memory management strategy",
      aiLeverage: "Traditional profiling tools, limited AI-assisted optimization",
      nonPortable: "Hardware-specific optimization, in-person kernel debugging, physical testing setups"
    },
    adjacentTo: ["systems-engineer", "hardware-architect"]
  },
  {
    id: "hardware-architect",
    name: "Hardware Architect",
    category: "systems",
    isSpecialization: false,
    prerequisites: [],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
    },
    details: {
      highOrder: "Chip design strategy, system-on-chip integration, power-performance tradeoff analysis",
      aiLeverage: "EDA tools with ML features, thermal simulation AI",
      nonPortable: "Fab lab collaboration, physical prototype validation, in-person team design reviews"
    },
    adjacentTo: ["embedded-engineer", "os-engineer"]
  }
];