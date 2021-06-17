<script>
  export let id = 0;
  export let active;
  export let count;

  $: if (count === id && active) console.log("hello from ", id);

  function toggleActive() {
    active = !active;
  }
</script>

<div>
  <span class={count === id ? "active" : ""} />
  <button on:click={toggleActive} class={active ? "active" : ""} />
</div>

<style>
  span {
    display: block;
    border: 1px solid black;
    width: 32px;
    height: 8px;
    margin-bottom: 4px;
  }
  .active {
    background-color: pink;
  }
  button {
    cursor: pointer;
    border: 1px solid black;
    border-radius: 4px;
    background-color: white;
    width: 32px;
    height: 32px;
  }
</style>
