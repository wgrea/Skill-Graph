<!-- src/lib/components/NodeDetails.svelte -->
<script lang="ts">
  import type { Role } from "$lib/data/roles";
  import { getRoleById } from '$lib/data/roles';
  import { networkingPlatforms } from '$lib/data/roles'; // ADD THIS IMPORT
  
  export let role: Role;
  export let onClose: () => void;
  export let onRoleSelect: (role: Role) => void;
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

  {#if role.description}
    <div class="mb-6 p-4 bg-gray-50 rounded-lg">
      <h3 class="text-lg font-semibold text-gray-900 mb-2">Description</h3>
      <p class="text-gray-700 leading-relaxed">{role.description}</p>
    </div>
  {/if}

  <div class="mb-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Attributes</h3>
    
    <!-- ⭐ High-order -->
    <div class="mb-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-l-4 border-yellow-400 rounded-r-lg">
      <div class="flex items-center mb-2">
        <span class="text-2xl mr-3">⭐</span>
        <span class="font-semibold text-gray-900 text-lg">
          {role.attributes.highOrder ? 'High-order' : 'Task-level'}
          {#if !role.attributes.highOrder && role.details?.highOrder}
            <span class="ml-2 px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full font-medium">(Limited)</span>
          {/if}
        </span>
      </div>
      {#if role.details?.highOrder}
        <p class="text-gray-700 leading-relaxed">{role.details.highOrder}</p>
      {:else}
        <p class="text-gray-500 text-sm italic">
          {role.attributes.highOrder ? 'High-order thinking required' : 'Task-focused work'}
        </p>
      {/if}
    </div>

    <!-- 🤖 AI-leverageable -->
    <div class="mb-4 p-4 bg-gradient-to-r {role.attributes.aiLeverage ? 'from-red-50 to-red-100 border-red-400' : 'from-gray-50 to-gray-100 border-gray-400'} border-l-4 rounded-r-lg">
      <div class="flex items-center mb-2">
        <span class="text-2xl mr-3">🤖</span>
        <span class="font-semibold text-gray-900 text-lg">
          {role.attributes.aiLeverage ? 'AI-leverageable' : 'AI-resistant'}
        </span>
      </div>
      {#if role.details?.aiLeverage}
        <p class="text-gray-700 leading-relaxed">{role.details.aiLeverage}</p>
      {:else}
        <p class="text-gray-500 text-sm italic">
          {role.attributes.aiLeverage ? 'Can leverage AI tools' : 'Limited AI tool integration'}
        </p>
      {/if}
    </div>

    <!-- 📦 Portable -->
    <div class="mb-6 p-4 bg-gradient-to-r {role.attributes.portable ? 'from-blue-50 to-blue-100 border-blue-400' : 'from-orange-50 to-orange-100 border-orange-400'} border-l-4 rounded-r-lg">
      <div class="flex items-center mb-2">
        <span class="text-2xl mr-3">📦</span>
        <span class="font-semibold text-gray-900 text-lg">
          {role.attributes.portable ? 'Portable' : 'Location-bound'}
        </span>
      </div>
      {#if role.attributes.portable && role.details?.portable}
        <p class="text-gray-700 leading-relaxed">{role.details.portable}</p>
      {:else if role.details?.nonPortable}
        <div>
          <p class="text-gray-700 leading-relaxed">{role.details.nonPortable}</p>
        </div>
      {:else}
        <p class="text-gray-500 text-sm italic">
          {role.attributes.portable ? 'Can work remotely' : 'Requires physical presence'}
        </p>
      {/if}
    </div>
  </div>

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

  {#if role.adjacentTo.length}
    <div class="mt-6 pt-6 border-t border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900 mb-3">Connected Roles</h3>
      <div class="flex flex-wrap gap-2">
        {#each role.adjacentTo as adjacentId}
          {#if getRoleById(adjacentId)}
            <button
              type="button"
              on:click={() => onRoleSelect(getRoleById(adjacentId)!)}
              on:keydown={(e) => e.key === 'Enter' && onRoleSelect(getRoleById(adjacentId)!)}
              class="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {getRoleById(adjacentId)?.name}
            </button>
          {/if}
        {/each}
      </div>
    </div>
  {/if}

  {#if role.networking}
    <div class="mt-6 pt-6 border-t border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
        <span class="text-xl mr-2">🤝</span> Networking
      </h3>
      
      <!-- Primary Platforms -->
      <div class="mb-4">
        <h4 class="text-sm font-semibold text-gray-700 mb-2">Where to Network:</h4>
        <div class="flex flex-wrap gap-2">
          {#each role.networking.primaryPlatforms as platform}
            {#if networkingPlatforms[platform]}
              <div class="flex items-center px-3 py-2 bg-blue-50 rounded-lg border border-blue-200">
                <span class="text-lg mr-2">{networkingPlatforms[platform].icon}</span>
                <div>
                  <div class="font-medium text-sm text-gray-900">{networkingPlatforms[platform].name}</div>
                  <div class="text-xs text-gray-600">{networkingPlatforms[platform].description}</div>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      </div>
      
      <!-- Networking Tips -->
      {#if role.networking.networkingTips}
        <div class="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-100 rounded-lg border border-green-200">
          <h4 class="text-sm font-semibold text-gray-700 mb-1">Networking Tips:</h4>
          <p class="text-gray-700 text-sm">{role.networking.networkingTips}</p>
        </div>
      {/if}
      
      <!-- Community Notes -->
      {#if role.networking.communityNotes}
        <div class="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
          <span class="font-medium">Community Notes:</span> {role.networking.communityNotes}
        </div>
      {/if}
    </div>
  {/if}
</div>