<!-- src/lib/data/components/Node.svelte -->
<script>
  export let role;
</script>

<div class="node">
  <h3>{role.name}</h3>
  <p>{role.category}</p>
</div>
