<!-- src/lib/data/components/Filters.svelte -->
<script lang="ts">
  import { attributes } from "$lib/data/attributes";

  export let filters: Record<string, boolean>;
  export let setFilters: (filters: Record<string, boolean>) => void;
  
  function getAttributeLabel(key: string): string {
    return attributes[key as keyof typeof attributes] || key;
  }
  
  function toggleFilter(key: string) {
    const newFilters = { ...filters, [key]: !filters[key] };
    setFilters(newFilters);
  }
  
  function handleKeyPress(event: KeyboardEvent, key: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFilter(key);
    }
  }
</script>

<div class="filters bg-white p-6 rounded-lg shadow border border-gray-200 mb-6">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">Filter by Attributes</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each Object.keys(attributes) as key}
      <button
        type="button"
        class="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        on:click={() => toggleFilter(key)}
        on:keydown={(e) => handleKeyPress(e, key)}
        role="checkbox"
        aria-checked={filters[key]}
        aria-label={`Toggle ${getAttributeLabel(key)} filter`}
      >
        <div class="flex items-center space-x-3">
          <div class={`w-4 h-4 rounded border ${filters[key] ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'}`}>
            {#if filters[key]}
              <div class="w-full h-full flex items-center justify-center text-white text-xs">✓</div>
            {/if}
          </div>
          <span class="text-sm font-medium text-gray-700">
            {getAttributeLabel(key)}
          </span>
        </div>
        <div class="flex space-x-2">
          {#each ['highOrder', 'aiLeverage', 'portable'] as attr}
            {#if key === attr}
              <span class="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600" aria-hidden="true">
                {attr === 'highOrder' ? '⭐' : attr === 'aiLeverage' ? '🤖' : '📦'}
              </span>
            {/if}
          {/each}
        </div>
      </button>
    {/each}
  </div>
  
  <!-- Demand Filter - MOVED HERE, OUTSIDE THE LOOP -->
  <div class="mt-6 pt-6 border-t border-gray-200">
    <h4 class="text-sm font-semibold text-gray-700 mb-3">Market Demand</h4>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class={`px-3 py-1.5 text-sm rounded-full border ${filters.demandHigh ? 'bg-red-100 border-red-300 text-red-700' : 'bg-gray-100 border-gray-200 text-gray-600'}`}
        on:click={() => toggleFilter('demandHigh')}
      >
        🔥 High Demand
      </button>
      <button
        type="button"
        class={`px-3 py-1.5 text-sm rounded-full border ${filters.demandMedium ? 'bg-yellow-100 border-yellow-300 text-yellow-700' : 'bg-gray-100 border-gray-200 text-gray-600'}`}
        on:click={() => toggleFilter('demandMedium')}
      >
        📈 Medium Demand
      </button>
      <button
        type="button"
        class={`px-3 py-1.5 text-sm rounded-full border ${filters.demandLow ? 'bg-gray-100 border-gray-300 text-gray-700' : 'bg-gray-100 border-gray-200 text-gray-600'}`}
        on:click={() => toggleFilter('demandLow')}
      >
        📉 Lower Demand
      </button>
    </div>
  </div>
  
  <div class="mt-4 text-sm text-gray-500">
    <p>Showing roles with: {Object.entries(filters).filter(([_, value]) => value).map(([key]) => getAttributeLabel(key)).join(', ') || 'All attributes'}</p>
  </div>
</div>