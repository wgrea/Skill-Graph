<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { roles } from "$lib/data/roles";
  import { attributes } from "$lib/data/attributes"; // Import attributes
  import Graph from '$lib/components/Graph.svelte';
  import Filters from '$lib/components/Filters.svelte';
  import type { Role } from "$lib/data/roles";
  import AdjacencyTable from '$lib/components/AdjacencyTable.svelte';
  import NodeDetails from '$lib/components/NodeDetails.svelte';
  
  // Initialize filters based on attributes
  let filters: Record<string, boolean> = {};
  Object.keys(attributes).forEach(key => {
    filters[key] = false;
  });
  
  let selectedRole: Role | null = null;

  function setFilters(newFilters: Record<string, boolean>) {
    filters = newFilters;
  }
  
  function handleRoleSelect(role: Role | null) {
    selectedRole = role;
  }

  let showTable = false;
  let showDetails = false;
</script>

<main class="min-h-screen bg-gray-50 p-6">
  <div class="max-w-7xl mx-auto">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Skill Topography</h1>
      <p class="text-gray-600 mt-2">
        Explore the landscape of modern tech roles and their relationships
      </p>
    </header>

    <Filters {filters} {setFilters} />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2">
        <Graph 
          {roles} 
          {filters} 
          {selectedRole}
          onRoleSelect={handleRoleSelect}
        />
      </div>

      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">How to use</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Click on any node to select it</li>
            <li>• Use filters to show roles with specific attributes</li>
            <li>• Hover over nodes to see details</li>
          </ul>
        </div>
        
        <div class="bg-white rounded-lg shadow p-4">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Stats</h3>
          <div class="space-y-1 text-sm">
            <p class="text-gray-600">Total roles: <span class="font-medium">{roles.length}</span></p>
            <p class="text-gray-600">Active filters: <span class="font-medium">{Object.values(filters).filter(value => value).length}</span></p>
            <p class="text-gray-600">Selected: <span class="font-medium">{selectedRole ? selectedRole.name : 'None'}</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-4 mb-6 mt-6">
      <button 
        on:click={() => { showTable = !showTable; }}
        class="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        {showTable ? 'Hide' : 'Show'} Adjacency Table
      </button>
    </div>

    {#if showTable}
      <div class="mt-6">
        <AdjacencyTable {roles} />
      </div>
    {/if}
  </div>
</main>