<script>
  import { slide } from "svelte/transition";

  let showItems = true;
  let i = 5;
  let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<label>
  <input type="checkbox" bind:checked={showItems} />
  Show List
</label>

<label for="slide">
  <input type="range" name="slide" bind:value={i} max={10} />
</label>

{#if showItems}
  {#each items.slice(0, i) as item}
    <div transition:slide|local>
      {item}
    </div>
  {/each}
{/if}

<style>
  div {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
</style>
