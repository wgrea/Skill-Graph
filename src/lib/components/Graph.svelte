<!-- src/lib/data/components/Graph.svelte -->
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
        {
          selector: "node",
          style: {
            "background-color": function(ele: any) {
              const category = ele.data("category");
              const colors: Record<string, string> = {
                uiux: "#4f46e5",
                engineering: "#10b981",
                systems: "#f59e0b",
                ai: "#8b5cf6",
                gamedev: "#ef4444",
                business: "#3b82f6"
              };
              return colors[category] || "#6b7280";
            },
            "label": "data(label)",
            "color": "white",
            "text-valign": "center",
            "text-halign": "center",
            "font-size": "12px",
            "width": "label",
            "height": "label",
            "padding": "10px",
            "border-width": 2,
            "border-color": "#fff",
            "shape": "round-rectangle"
          }
        },
        {
          selector: "node[?attributes.highOrder]",
          style: {
            "border-color": "#fbbf24",
            "border-width": 3
          }
        },
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

    // Add click handler - ADD THESE console.logs
    cy.on('tap', 'node', function(evt: any) {
      console.log('🔴 GRAPH NODE CLICKED!', evt.target.data('roleData'));  // ← ADD
      const node = evt.target;
      const roleData = node.data('roleData');
      if (roleData) {
        console.log('🔵 CALLING onRoleSelect:', roleData.name);  // ← ADD
        onRoleSelect(roleData);
        
        // Highlight this node and its connections
        cy?.elements().removeClass('highlighted');
        node.addClass('highlighted');
        node.neighborhood().addClass('highlighted');
      } else {
        console.log('❌ NO roleData found!');  // ← ADD
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