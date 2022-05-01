<script>
  let visible = false;
  let status = "waiting...";
  function typewriter(node, { speed = 50 }) {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length / (speed * 0.01);

    return {
      duration,
      tick: (t) => {
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  }
</script>

<p>status: {status}</p>
<label for="typewriter">
  <input type="checkbox" bind:checked={visible} />
  Visible
</label>
{#if visible}
  <p
    transition:typewriter={{ speed: 1 }}
    on:introstart={() => (status = "intro started")}
    on:outrostart={() => (status = "outro started")}
    on:introend={() => (status = "intro ended.")}
    on:outroend={() => (status = "outro ended.")}
  >
    The quick brown fox jumps over the lazy dog.
  </p>
{/if}
