<script>
  import File from "./File.svelte";
  export let expanded = false;
  export let name;
  export let files;

  const toggle = () => {
    expanded = !expanded;
  };
</script>

<span class:expanded on:click={toggle}>{name}</span>

{#if expanded}
  <ul>
    {#each files as file}
      <li>
        {#if file.files}
          <!-- Show Folder -->
          <svelte:self {...file} />
        {:else}
          <File {...file} />
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  span {
    padding: 0 0 0 1.5em;
    background: url("/img/closed-folder-svgrepo-com.svg") 0 0.1em no-repeat;
    background-size: 1em 1em;
    font-weight: bold;
    cursor: pointer;
  }
  .expanded {
    background-image: url("/img/open-folder-svgrepo-com.svg");
  }

  ul {
    padding: 0.2em 0 0 0.5em;
    margin: 0 0 0 0.5em;
    list-style: none;
    border-left: 1px solid #eee;
  }

  li {
    padding: 0.2em 0;
  }
</style>
