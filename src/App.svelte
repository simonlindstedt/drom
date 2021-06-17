<script>
  import PulseKeeper from "./components/PulseKeeper.svelte";
  import Sequence from "./components/Sequence.svelte";
</script>

<main>
  <PulseKeeper />
  <Sequence id={0} />
  <Sequence id={1} />
</main>

<style>
  main {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
</style>
