<script>
  let hovering;

  const enter = () => {
    hovering = true;
  };

  const leave = () => {
    hovering = false;
  };
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
  <slot name="hover" {hovering} />
</div>
