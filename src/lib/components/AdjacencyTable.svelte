<!-- src/lib/components/AdjacencyTable.svelte -->
<script lang="ts">
  import { allRoles, getRoleById, type Role } from '$lib/data/roles';
  
  export let filteredRoles: Role[];
  export let onRoleSelect: (role: Role | null) => void = () => {};
  
  $: sortedRoles = filteredRoles.sort((a, b) => a.name.localeCompare(b.name));
  
  $: roleConnections = sortedRoles.map(role => ({
    role,
    connections: role.adjacentTo.map((id: string) => getRoleById(id)).filter(Boolean) as Role[],
    count: role.adjacentTo.length
  }));
</script>

<div class="overflow-x-auto">
  <table class="min-w-full bg-white border border-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">⭐High</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">🤖AI</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">📦Port</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Connected To</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Connections</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      {#each roleConnections as { role, connections, count }}
        <tr 
          role="button"
          tabindex="0"
          class="hover:bg-gray-50 cursor-pointer transition-colors focus:outline-none focus:bg-gray-50" 
          on:click={() => onRoleSelect(role)}
          on:keydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onRoleSelect(role);
            }
          }}
          title="Click or press Enter/Space to view details"
        >
          <td class="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
            <button
              type="button"
              class="text-left hover:text-blue-600 hover:underline focus:outline-none focus:text-blue-600 focus:underline w-full"
              on:click|stopPropagation={() => onRoleSelect(role)}
              on:keydown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  onRoleSelect(role);
                }
              }}
              title="View {role.name} details"
            >
              {#if role.isSpecialization}
                <span class="font-bold">**{role.name}**</span>
              {:else}
                {role.name}
              {/if}
            </button>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full
              {role.category === 'uiux' ? 'bg-purple-100 text-purple-800' :
               role.category === 'engineering' ? 'bg-blue-100 text-blue-800' :
               role.category === 'systems' ? 'bg-green-100 text-green-800' :
               role.category === 'ai' ? 'bg-red-100 text-red-800' :
               role.category === 'gamedev' ? 'bg-indigo-100 text-indigo-800' :
               role.category === 'business' ? 'bg-yellow-100 text-yellow-800' :
               'bg-gray-100 text-gray-800'}">
              {role.category}
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {#if role.attributes.highOrder}
              <span class="text-yellow-600 font-semibold">✓</span>
            {:else if role.details?.highOrder}
              <span class="text-yellow-400">(~)</span>
            {/if}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {#if role.attributes.aiLeverage}
              <span class="text-red-600 font-semibold">✓</span>
            {/if}
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            {#if role.attributes.portable}
              <span class="text-blue-600 font-semibold">✓</span>
            {:else if role.details?.nonPortable}
              <span class="text-blue-400">(~)</span>
            {/if}
          </td>
          <td class="px-6 py-4 text-sm text-gray-900">
            <div class="flex flex-wrap gap-1">
              {#each connections.slice(0, 3) as r}
                <button
                  type="button"
                  class="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
                  on:click|stopPropagation={() => onRoleSelect(r)}
                  on:keydown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      onRoleSelect(r);
                    }
                  }}
                  title="Click to view {r.name}"
                >
                  {r.name}
                </button>
              {/each}
              {#if connections.length > 3}
                <span class="px-2 py-1 text-gray-500 text-xs">+{connections.length - 3} more</span>
              {/if}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{count}</td>
        </tr>
      {/each}
    </tbody>
  </table>
  
  {#if roleConnections.length}
    <div class="mt-4 text-sm text-gray-500">
      Total connections: {(roleConnections.reduce((sum, r) => sum + r.count, 0) / 2).toFixed(1)} | 
      Average: {Math.round(roleConnections.reduce((sum, r) => sum + r.count, 0) / roleConnections.length * 10) / 10}
    </div>
  {/if}
</div>