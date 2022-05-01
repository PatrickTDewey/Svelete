<script>
  import { fade } from "svelte/transition";
  import { fly } from "svelte/transition";
  import { cubicOut, elasticOut } from "svelte/easing";

  let visible = true;
  let flyVisible = true;
  let thirdVisible = true;
  function spin(node, { duration }) {
    return {
      duration,
      css: (t) => {
        const eased = elasticOut(t);
        console.log(eased);

        return `
                    transform: scale(${eased}) rotate(${eased * 1080}deg);
                    color: hsl(
                        ${Math.trunc(t * 360)},
                        ${Math.min(100, 1000 - 1000 * t)}%,
                        ${Math.min(50, 500 - 500 * t)}%
                    );
                `;
      },
    };
  }
</script>

<label for="checkbox">
  <input type="checkbox" name="checkbox" id="check_0" bind:checked={visible} />
  Fade Visible
</label>
{#if visible}
  <p transition:fade={{ delay: 400, duration: 1000, easing: cubicOut }}>
    Fades in and out
  </p>
{/if}
<label for="fly">
  <input type="checkbox" name="fly" id="check_1" bind:checked={flyVisible} />
  Fly Visible
</label>
{#if flyVisible}
  <p in:fly={{ x: 200, duration: 2000 }} out:fade>Flies in and Fades out</p>
{/if}
<label for="spin">
  <input type="checkbox" name="spin" id="check_2" bind:checked={thirdVisible} />
  Spin Visible
</label>
{#if thirdVisible}
  <div class="centered" in:spin={{ duration: 8000 }} out:fade>
    <span>Transitions!</span>
  </div>
{/if}

<style>
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 4em;
  }
</style>
