<!-- src/lib/components/AdjacencyTable.svelte -->
<script lang="ts">
  import type { Role } from "$lib/data/roles";
  
  export let roles: Role[];

  // Helper function to get connected role name
  function getConnectedRoleName(adjId: string): string {
    const connectedRole = roles.find(r => r.id === adjId);
    return connectedRole?.name || adjId;
  }

  // Calculate total connections
  $: totalConnections = roles.reduce((sum, role) => sum + role.adjacentTo.length, 0) / 2;
  $: avgConnections = (roles.reduce((sum, role) => sum + role.adjacentTo.length, 0) / roles.length).toFixed(1);
</script>

<div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Category
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Connected To
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Connections
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each roles as role}
          <tr class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm font-semibold text-gray-900">{role.name}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                {role.category === 'uiux' ? 'bg-purple-100 text-purple-800' : 
                 role.category === 'engineering' ? 'bg-blue-100 text-blue-800' :
                 role.category === 'systems' ? 'bg-green-100 text-green-800' :
                 role.category === 'ai' ? 'bg-red-100 text-red-800' :
                 role.category === 'gamedev' ? 'bg-yellow-100 text-yellow-800' :
                 'bg-gray-100 text-gray-800'}">
                {role.category}
              </span>
            </td>
            <td class="px-6 py-4">
              <div class="flex flex-wrap gap-2">
                {#each role.adjacentTo as adjId}
                  <span class="connection-bubble">
                    {getConnectedRoleName(adjId)}
                  </span>
                {/each}
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center">
              <span class="connection-count">
                {role.adjacentTo.length}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <!-- Summary stats -->
  <div class="mt-8 pt-6 border-t border-gray-200">
    <div class="grid grid-cols-2 gap-6">
      <div class="text-center p-4 bg-gray-50 rounded-lg">
        <div class="text-3xl font-bold text-gray-900 mb-1">{totalConnections}</div>
        <div class="text-sm text-gray-600">Total connections</div>
      </div>
      <div class="text-center p-4 bg-gray-50 rounded-lg">
        <div class="text-3xl font-bold text-gray-800 mb-1">{avgConnections}</div>
        <div class="text-sm text-gray-600">Average connections per role</div>
      </div>
    </div>
  </div>
</div>

<style>
  .connection-bubble {
    display: inline-flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    background-color: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 500;
    color: #374151;
    cursor: default;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .connection-bubble:hover {
    background-color: #3b82f6;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .connection-count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background-color: #10b981;
    color: white;
    border-radius: 9999px;
    font-weight: bold;
    font-size: 0.875rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>