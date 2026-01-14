<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { roles } from "$lib/data/roles";
  import { attributes } from "$lib/data/attributes";
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
  let showAdjacencyTable = false;

  function setFilters(newFilters: Record<string, boolean>) {
    filters = newFilters;
  }
  
  function handleRoleSelect(role: Role | null) {
    selectedRole = role;
  }

  function closeModal(event: KeyboardEvent | MouseEvent) {
    if (event.type === 'keydown' && (event as KeyboardEvent).key !== 'Escape') {
      return;
    }
    selectedRole = null;
  }

  // Filter roles based on active filters
  $: filteredRoles = roles.filter(role => {
    const activeFilters = Object.entries(filters).filter(([, value]) => value);
    if (activeFilters.length === 0) return true;
    
    return activeFilters.some(([key]) => {
      const attributeKey = key as keyof typeof role.attributes;
      return role.attributes[attributeKey];
    });
  });

  // Calculate stats
  $: totalConnections = filteredRoles.reduce((sum, role) => sum + role.adjacentTo.length, 0) / 2;
  $: avgConnections = (filteredRoles.reduce((sum, role) => sum + role.adjacentTo.length, 0) / filteredRoles.length).toFixed(1);
  $: activeFilterCount = Object.values(filters).filter(value => value).length;
</script>

<main class="min-h-screen bg-gray-50 p-6">
  <div class="max-w-7xl mx-auto">
    <header class="mb-8 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Skill Topography</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Explore the landscape of modern tech roles and their relationships
      </p>
    </header>

    <Filters {filters} {setFilters} />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <!-- Left sidebar -->
      <div class="lg:col-span-1 space-y-6">
        <!-- How to use -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">How to use</h3>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Click on any node to select it</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Use filters to show roles with specific attributes</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-blue-500 mt-1">•</span>
              <span>Hover over nodes to see details</span>
            </li>
          </ul>
        </div>
        
        <!-- Stats -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Stats</h3>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Total roles:</span>
              <span class="font-semibold text-lg">{filteredRoles.length}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Active filters:</span>
              <span class="font-semibold text-lg">{activeFilterCount}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600">Selected:</span>
              <span class="font-semibold text-lg truncate max-w-[150px]">
                {selectedRole ? selectedRole.name : 'None'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Main graph area -->
      <div class="lg:col-span-2">
        <div class="bg-white rounded-xl shadow-sm p-4 h-[600px] border border-gray-200">
          <Graph 
            roles={filteredRoles} 
            {filters} 
            {selectedRole}
            onRoleSelect={handleRoleSelect}
          />
        </div>
      </div>
    </div>

    <!-- Adjacency Table Toggle -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-900">Adjacency Relationships</h2>
      <button 
        on:click={() => showAdjacencyTable = !showAdjacencyTable}
        class="px-5 py-2.5 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition-colors shadow-sm"
        aria-label={showAdjacencyTable ? 'Hide adjacency table' : 'Show adjacency table'}
      >
        {showAdjacencyTable ? 'Hide' : 'Show'} Adjacency Table
      </button>
    </div>

    {#if showAdjacencyTable}
      <AdjacencyTable {roles} />
    {/if}
  </div>
</main>

{#if selectedRole}
  <div class="fixed inset-0 z-50" role="dialog" aria-modal="true">
    <!-- Modal backdrop as a button for accessibility -->
    <button
      class="absolute inset-0 bg-black/50 cursor-default focus:outline-none"
      on:click={() => selectedRole = null}
      on:keydown={(e) => e.key === 'Enter' && (selectedRole = null)}
      aria-label="Close modal"
    >
      <span class="sr-only">Close modal</span>
    </button>
    
    <!-- Modal content -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] overflow-y-auto p-4">
      <div 
        class="bg-white rounded-xl shadow-2xl"
        role="document"
      >
        <NodeDetails 
          role={selectedRole}
          onClose={() => selectedRole = null}
        />
      </div>
    </div>
  </div>
{/if}

<style>
  .max-w-7xl {
    max-width: 80rem;
  }
</style>