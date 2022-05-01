<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { spring } from "svelte/motion";

  let coords = spring(
    { x: 50, y: 50 },
    {
      stiffness: 0.1,
      damping: 0.25,
    }
  );
  let size = spring(10, {
    duration: 800,
    cubicOut,
  });
</script>

<div style="position:absolute; right: 1em">
  <label for="coord stiffness">
    <h3>stiffness ({coords.stiffness})</h3>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      bind:value={coords.stiffness}
    />
  </label>

  <label for="coord dampening">
    <h3>dampening ({coords.damping})</h3>
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      bind:value={coords.damping}
    />
  </label>
</div>
<svg
  on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
  on:mousedown={() => size.set(30)}
  on:mouseup={() => size.set(10)}
>
  <circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>

<style>
  svg {
    width: 100%;
    height: 100%;
    margin: -8px;
  }
  circle {
    fill: #a955d7;
  }
</style>
