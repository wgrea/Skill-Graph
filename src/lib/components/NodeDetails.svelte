<!-- src/lib/components/NodeDetails.svelte -->
<script lang="ts">
  import type { Role } from "$lib/data/roles";
  import { attributes } from "$lib/data/attributes";
  
  export let role: Role | null = null;
  export let allRoles: Role[] = [];
  
  function getConnectedRoles(role: Role): Role[] {
    return role.adjacentTo
      .map(id => allRoles.find(r => r.id === id))
      .filter(Boolean) as Role[];
  }
  
  function getAttributeLabel(key: string): string {
    const attributeKey = key as keyof typeof attributes;
    return attributes[attributeKey] || key;
  }
</script>

{#if role}
  <div class="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
    <div class="mb-4">
      <h3 class="text-xl font-bold text-gray-900">{role.name}</h3>
      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mt-2">
        {role.category}
      </span>
    </div>
    
    {#if role.description}
      <p class="text-gray-600 text-sm mb-4">{role.description}</p>
    {/if}
    
    <div class="mb-6">
      <h4 class="font-medium text-gray-700 mb-2">Attributes</h4>
      <div class="flex flex-wrap gap-2">
        {#each Object.entries(role.attributes) as [key, value]}
          <div class="flex items-center space-x-1">
            <div class={`w-3 h-3 rounded-full ${value ? 'bg-green-500' : 'bg-gray-300'}`}></div>
            <span class="text-sm text-gray-600">{getAttributeLabel(key)}: {value ? '✓' : '✗'}</span>
          </div>
        {/each}
      </div>
    </div>
    
    <div>
      <h4 class="font-medium text-gray-700 mb-2">
        Connected to {role.adjacentTo.length} role{role.adjacentTo.length !== 1 ? 's' : ''}
      </h4>
      <div class="space-y-3">
        {#each getConnectedRoles(role) as connectedRole}
          <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p class="font-medium text-gray-900">{connectedRole.name}</p>
              <p class="text-sm text-gray-500">{connectedRole.category}</p>
            </div>
            <div class="flex space-x-2">
              {#each Object.entries(connectedRole.attributes) as [key, value]}
                {#if value}
                  <span class="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded">
                    {getAttributeLabel(key)}
                  </span>
                {/if}
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}