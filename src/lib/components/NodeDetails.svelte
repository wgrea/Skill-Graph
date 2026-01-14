<!-- src/lib/components/NodeDetails.svelte -->
<script lang="ts">
  import type { Role } from "$lib/data/roles";
  
  // Type assertion to help TypeScript understand these are optional properties
  type RoleWithOptionalProps = Role & {
    prerequisites?: string[];
    isSpecialization?: boolean;
  };
  
  export let role: RoleWithOptionalProps;
  export let onClose: () => void;
</script>

<div class="p-6">
  <div class="flex justify-between items-start mb-6">
    <div>
      <h2 class="text-2xl font-bold text-gray-900 mb-2">{role.name}</h2>
      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        {role.category === 'uiux' ? 'bg-purple-100 text-purple-800' : 
         role.category === 'engineering' ? 'bg-blue-100 text-blue-800' :
         role.category === 'systems' ? 'bg-green-100 text-green-800' :
         role.category === 'ai' ? 'bg-red-100 text-red-800' :
         role.category === 'gamedev' ? 'bg-yellow-100 text-yellow-800' :
         'bg-gray-100 text-gray-800'}">
        {role.category}
      </span>
    </div>
    <button
      on:click={onClose}
      class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Close"
    >
      <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <div class="mb-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-3">Attributes</h3>
    <div class="flex flex-wrap gap-3">
      {#if role.attributes.highOrder}
        <span class="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-yellow-100 text-yellow-800">
          <span class="mr-1">⭐</span> High-order
        </span>
      {/if}
      {#if role.attributes.aiLeverage}
        <span class="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-red-100 text-red-800">
          <span class="mr-1">🤖</span> AI-leverageable
        </span>
      {/if}
      {#if role.attributes.portable}
        <span class="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-blue-100 text-blue-800">
          <span class="mr-1">📦</span> Portable
        </span>
      {/if}
    </div>
  </div>

  <!-- Use optional chaining to safely access optional properties -->
  {#if role.prerequisites?.length}
    <div class="mb-6">
      <h3 class="text-lg font-semibold mb-3">Prerequisites</h3>
      <div class="flex flex-wrap gap-2">
        {#each role.prerequisites as prereq}
          <span class="px-3 py-1 bg-gray-100 text-sm rounded-full">{prereq}</span>
        {/each}
      </div>
    </div>
  {/if}

  {#if role.isSpecialization}
    <span class="inline-flex px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-4">
      Specialization
    </span>
  {/if}

  {#if role.description}
    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-900 mb-3">Description</h3>
      <p class="text-gray-600">{role.description}</p>
    </div>
  {/if}
</div>