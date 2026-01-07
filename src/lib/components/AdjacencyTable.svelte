<!-- src/lib/components/AdjacencyTable.svelte -->
<script lang="ts">
  import type { Role } from "$lib/data/roles";
  
  export let roles: Role[];
</script>

<div class="bg-white rounded-lg shadow p-4">
  <h3 class="text-lg font-semibold text-gray-900 mb-4">Adjacency Relationships</h3>
  
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Category
          </th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Connected To
          </th>
          <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Connection Count
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each roles as role}
          <tr class="hover:bg-gray-50">
            <td class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              {role.name}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {role.category}
              </span>
            </td>
            <td class="px-4 py-3 text-sm text-gray-500">
              {#each role.adjacentTo as adjId}
                <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                  {roles.find(r => r.id === adjId)?.name || adjId}
                </span>
              {/each}
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-500 text-center">
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
                {role.adjacentTo.length}
              </span>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  
  <div class="mt-4 text-sm text-gray-500">
    <p>Total connections: {roles.reduce((sum, role) => sum + role.adjacentTo.length, 0)}</p>
    <p>Average connections per role: {(roles.reduce((sum, role) => sum + role.adjacentTo.length, 0) / roles.length).toFixed(1)}</p>
  </div>
</div>