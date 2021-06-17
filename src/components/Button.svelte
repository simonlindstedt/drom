<script>
  export let handleClick;
  export let size;
</script>

<button on:click={handleClick} class={size}>
  <slot />
</button>

<style>
  .small {
    width: 2em;
    height: 2em;
  }
  .medium {
    width: 4em;
    height: 4em;
  }
  .large {
    width: 8em;
    height: 8em;
  }
  button {
    cursor: pointer;
    background-color: white;
    border: 1px solid black;
    border-radius: 4px;
  }
</style>
