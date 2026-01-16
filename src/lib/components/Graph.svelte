<!-- src/lib/components/Graph.svelte -->
<script lang="ts">
  import cytoscape from "cytoscape";
  import type { Core, ElementDefinition, LayoutOptions } from "cytoscape";
  import type { Role } from "$lib/data/roles";
  import { onDestroy } from "svelte";

  // Import and use dagre
  import dagre from "cytoscape-dagre";
  cytoscape.use(dagre);

  export let roles: Role[] = [];
  export let filters: Record<string, boolean> = {};
  export let selectedRole: Role | null = null;
  export let onRoleSelect: (role: Role | null) => void = () => {};

  let container: HTMLDivElement;
  let cy: Core | null = null;

  function buildGraph() {
    if (!container) return;

    const elements: ElementDefinition[] = [];

    // Filter roles based on active filters
    const filteredRoles = roles.filter(role => {
      const activeFilters = Object.entries(filters).filter(([, value]) => value);
      if (activeFilters.length === 0) return true;
      
      return activeFilters.every(([key]) => {
        const attributeKey = key as keyof typeof role.attributes;
        return role.attributes[attributeKey] || false;
      });
    });

    // Create nodes
    filteredRoles.forEach(role => {
      elements.push({
        data: { 
          id: role.id, 
          label: role.name, 
          category: role.category,
          attributes: role.attributes,
          roleData: role
        }
      });

      // Create edges
      role.adjacentTo.forEach(adj => {
        if (filteredRoles.some(r => r.id === adj)) {
          elements.push({
            data: { 
              id: `${role.id}-${adj}`, 
              source: role.id, 
              target: adj
            }
          });
        }
      });
    });

    if (cy) {
      cy.destroy();
    }

    cy = cytoscape({
      container,
      elements,
      style: [
        // Replace the demand badge styles with functions:
        {
          selector: "node",
          style: {
            "content": function(ele: any) {
              const demand = ele.data("attributes")?.demand;
              if (demand === 'high') return "🔥";
              if (demand === 'medium') return "📈";
              return "";
            },
            "text-margin-y": function(ele: any) {
              const demand = ele.data("attributes")?.demand;
              return demand ? -15 : 0;
            },
            "text-outline-color": "white",
            "text-outline-width": 2
          }
        },
        // DEMAND STYLES
        {
          selector: "node[attributes.demand='high']",
          style: {
            "border-width": 4,
            "border-color": "#ef4444",
            "border-style": "solid",
            "width": function(ele: any) {
              const label = ele.data("label") || "";
              return Math.max(label.length * 10 + 50, 70);
            },
            "height": function(ele: any) {
              const label = ele.data("label") || "";
              return Math.max(label.length * 10 + 50, 70);
            },
            "font-size": "13px",
            "font-weight": "bold"
          }
        },
        {
          selector: "node[attributes.demand='medium']",
          style: {
            "border-width": 3,
            "border-color": "#f59e0b",
            "border-style": "solid"
          }
        },
        {
          selector: "node[attributes.demand='low']",
          style: {
            "border-width": 2,
            "border-color": "#6b7280",
            "border-style": "dashed",
            "opacity": 0.8
          }
        },
        // STRENGTH STYLES
        {
          selector: "node[attributes.strength='3']",
          style: {
            "width": function(ele: any) {
              const label = ele.data("label") || "";
              return Math.max(label.length * 8 + 40, 60);
            },
            "height": function(ele: any) {
              const label = ele.data("label") || "";
              return Math.max(label.length * 8 + 40, 60);
            },
            "font-size": "14px",
            "font-weight": "bold"
          }
        },
        {
          selector: "node[attributes.strength='2']",
          style: {
            "width": function(ele: any) {
              const label = ele.data("label") || "";
              return Math.max(label.length * 7 + 30, 50);
            },
            "height": function(ele: any) {
              const label = ele.data("label") || "";
              return Math.max(label.length * 7 + 30, 50);
            },
            "font-size": "12px"
          }
        },
        // HIGH ORDER STYLE
        {
          selector: "node[?attributes.highOrder]",
          style: {
            "border-color": "#fbbf24",
            "border-width": 3
          }
        },
        // DEMAND BADGES (ICONS)
        {
          selector: "node[attributes.demand='high']::after",
          style: {
            "content": "🔥",
            "font-size": "14px",
            "color": "#ef4444",
            "text-outline-color": "white",
            "text-outline-width": 2
          }
        },
        {
          selector: "node[attributes.demand='medium']::after",
          style: {
            "content": "📈",
            "font-size": "12px",
            "color": "#f59e0b",
            // FIX: Use text-outline instead of text-shadow
            "text-outline-color": "white",
            "text-outline-width": 2
          }
        },
        // EDGE STYLES
        {
          selector: "edge",
          style: {
            "width": 2,
            "line-color": "#9ca3af",
            "curve-style": "bezier"
          }
        },
        {
          selector: "node:selected",
          style: {
            "border-width": 4,
            "border-color": "#000",
            "background-color": "#374151"
          }
        }
      ],
      layout: {
        name: "dagre",
        animate: true,
        animationDuration: 1000,
        // Use proper dagre layout options
        nodeDimensionsIncludeLabels: true,
        fit: true,
        padding: 50,
        spacingFactor: 1.5,
        nodeSep: 50,
        edgeSep: 20,
        rankSep: 100,
        rankDir: "TB" as any, // Type assertion for dagre-specific option
        align: "UL"
      } as LayoutOptions
    });

    // Click handler
    cy.on('tap', 'node', function(evt: any) {
      const node = evt.target;
      console.log('🔴 Node clicked:', node.id(), 'Data:', node.data());
      
      // Get the actual role from your roles array
      const roleId = node.id();
      const role = roles.find(r => r.id === roleId);
      
      if (role) {
        console.log('🔵 Calling onRoleSelect for:', role.name);
        onRoleSelect(role);
        
        // Highlight logic
        cy?.elements().removeClass('highlighted');
        node.addClass('highlighted');
        node.neighborhood().addClass('highlighted');
      } else {
        console.error('❌ Role not found for id:', roleId);
      }
    });

    // Clear selection when clicking on background
    cy.on('tap', function(evt: any) {
      if (evt.target === cy) {
        onRoleSelect(null);
        cy?.elements().removeClass('highlighted');
      }
    });

    // Update style for highlighted elements
    cy.style()
      .selector('.highlighted')
      .style({
        'border-color': '#ef4444',
        'border-width': 3,
        'line-color': '#ef4444',
        'opacity': 1
      })
      .update();
  }

  // Rebuild graph when filters or roles change
  $: if (roles.length > 0) buildGraph();
  
  // Use selectedRole when it changes
  $: if (cy && selectedRole) {
    const node = cy.getElementById(selectedRole.id);
    if (node) {
      cy.elements().unselect();
      node.select();
      cy.elements().removeClass('highlighted');
      node.addClass('highlighted');
      node.neighborhood().addClass('highlighted');
    }
  }
  
  onDestroy(() => {
    if (cy) {
      cy.destroy();
    }
  });
</script>

<div bind:this={container} class="w-full h-[600px] border border-gray-200 rounded-lg bg-gray-50"></div>