// src/lib/data/roles/systems.ts
import type { Role } from './index';

export const roles: Role[] = [
  {
    id: "systems-engineer",
    name: "Systems Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [
      "Systems Thinking",
      "Integration Concepts",
      "Hardware Basics",
      "Software Fundamentals"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "System architecture design, integration planning, cross-component optimization",
      aiLeverage: "Traditional monitoring tools, limited predictive maintenance",
      nonPortable: "On-prem hardware integration, physical system testing, in-person troubleshooting"
    },
    adjacentTo: ["platform-engineer", "embedded-engineer", "hardware-architect"],
    networking: {
      primaryPlatforms: ['linkedin', 'conferences', 'github', 'discord', 'reddit'],
      communityNotes: "Systems engineering professional associations, integration technology forums",
      networkingTips: "Attend systems engineering conferences, share integration patterns, network with hardware/software teams"
    }
  },
  {
    id: "embedded-engineer",
    name: "Embedded Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [
      "C/C++ Programming",
      "Microcontroller Basics",
      "Electronics Fundamentals",
      "Real-time Systems"
    ],
    attributes: {
      highOrder: false,
      aiLeverage: false,
      portable: false,
      demand: "medium" as const,
      strength: 2 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "Firmware architecture, real-time system design, hardware-software interfaces",
      aiLeverage: "Basic debugging tools, traditional testing frameworks",
      nonPortable: "Hardware lab work, oscilloscope measurements, in-person device debugging"
    },
    adjacentTo: ["systems-engineer", "hardware-architect", "iot-engineer"],
    networking: {
      primaryPlatforms: ['linkedin', 'github', 'discord', 'conferences', 'reddit'],
      communityNotes: "Embedded systems Discord servers, microcontroller communities, hardware hacking groups",
      networkingTips: "Share embedded projects on GitHub, attend embedded systems conferences, participate in hardware hackathons"
    }
  },
  {
    id: "os-engineer",
    name: "OS Engineer",
    category: "systems",
    isSpecialization: false,
    prerequisites: [
      "Operating System Concepts",
      "C Programming",
      "Kernel Basics",
      "Memory Management"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
      demand: "low" as const,
      strength: 2 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "Kernel architecture, system call design, memory management strategy",
      aiLeverage: "Traditional profiling tools, limited AI-assisted optimization",
      nonPortable: "Hardware-specific optimization, in-person kernel debugging, physical testing setups"
    },
    adjacentTo: ["systems-engineer", "hardware-architect", "compiler-engineer"],
    networking: {
      primaryPlatforms: ['github', 'linkedin', 'conferences', 'discord', 'reddit'],
      communityNotes: "Operating system development communities, kernel programming groups",
      networkingTips: "Contribute to open-source OS projects, attend OS development conferences, share kernel optimization techniques"
    }
  },
  {
    id: "hardware-architect",
    name: "Hardware Architect",
    category: "systems",
    isSpecialization: false,
    prerequisites: [
      "Electrical Engineering",
      "Computer Architecture",
      "VLSI Design",
      "Thermal Management"
    ],
    attributes: {
      highOrder: true,
      aiLeverage: false,
      portable: false,
      demand: "medium" as const,
      strength: 3 as const,
      experienceType: ["dx"] as const
    },
    details: {
      highOrder: "Chip design strategy, system-on-chip integration, power-performance tradeoff analysis",
      aiLeverage: "EDA tools with ML features, thermal simulation AI",
      nonPortable: "Fab lab collaboration, physical prototype validation, in-person team design reviews"
    },
    adjacentTo: ["embedded-engineer", "os-engineer", "systems-engineer"],
    networking: {
      primaryPlatforms: ['linkedin', 'conferences', 'academia', 'github', 'reddit'],
      communityNotes: "Hardware architecture research communities, chip design conferences, academic networks",
      networkingTips: "Attend chip design conferences, publish research papers, network with semiconductor companies"
    }
  }
];